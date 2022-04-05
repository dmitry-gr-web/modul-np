import React, {
	useState,
	useEffect,
	useRef,
	useMemo,
	useContext,
	forwardRef,
	createContext,
	useLayoutEffect,
} from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus } from '../../img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WarehouseProductList from './WarehouseProductList';
import WarehouseDropMenu from './WarehouseDropMenu';
// import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseInput from './WarehouseInput';
// import { render } from 'react-dom';
// import { FixedSizeList as List } from 'react-window';
let timer;
const WarehouseBlock = ({ objProduct, setObjProduct }) => {
	const linkTR = useRef();
	const [lastIndex, setLastIndex] = useState(0);
	const [selectAll, setSelectAll] = useState(false);
	const [checked, setChecked] = useState(true);

	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [focusInput, setFocusInput] = useState(false);

	const [indexInput, setIndexInput] = useState(0);
	const [btnMenu, setBtnMenu] = useState(false);
	const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
	// const [selectLink, setSelectLink] = useState(true);
	// let newarr = [...dataWarehouse, ...dataWarehouse];
	// const [objProduct, setObjProduct] = useState(dataWarehouse);
	function clickPodlozhka() {
		setPodlozhka(false);
		setFocusInput(false);
		setFlagSwitchMenu(false);
		setSwitchMenu(false);
		// document.querySelectorAll('.warehouse-dropmenu .underline').forEach((x) => {
		// 	x.style.width = '0%';
		// });
		document.querySelector('.warehouse-table').style.overflow = '';

		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.style.visibility = 'visible';
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '21px';
		});
		document.querySelectorAll('.adaptive-switch').forEach((x) => {
			x.classList.remove('adaptive-switch-on');
		});
		document.querySelectorAll('.adaptive-switch2').forEach((x) => {
			x.classList.remove('adaptive-switch-on2');
		});
		document.querySelectorAll('.nal-ostatok button').forEach((x) => {
			x.style.width = '0px';
		});

		let input = document.querySelectorAll('.nal-ostatok input')[indexInput];

		if (input.value.length >= 4) {
			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
			input.style.width = input.value.length * 8 + 4 + 'px';
		}
		if (input.value.length >= 7) {
			input.style.width = input.value.length * 8 + 8 + 'px';
		}
		if (input.value.length < 4) {
			input.style.width = input.value.length * 8 + 'px';
		}
	}
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

			return text_pr;
		} else {
			return text;
		}
	}
	useEffect(() => {
		function clickDocument(e) {
			if (!e.target.closest('.warehouse-table')) {
				setSelectAll(false);
				let newobj = [...objProduct];
				newobj.map((x) => (x.select = false));
				setObjProduct(newobj);
			}
		}
		if (!selectAll) {
			document.addEventListener('keydown', function (e) {
				if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
					e.preventDefault();
					setSelectAll(true);
					let newobj = [...objProduct];
					newobj.map((x) => {
						if (x.lock) {
							return (x.select = false);
						} else {
							return (x.select = true);
						}
					});
					setObjProduct(newobj);
					console.log('asdasdasd');
				}
			});
		}
		document.addEventListener('click', clickDocument);

		return () => {
			document.removeEventListener('click', clickDocument);
		};
	}, [selectAll]);
	console.log(objProduct.length);

	function formatNumber2(number) {
		let newnum = number.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newnum;
	}
	function formatNumber(number) {
		let newnum = number
			.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
			.replace(',', '.');
		return newnum;
	}

	//rascheti
	let ostatok = parseInt(objProduct.reduce((prev, curr) => prev + curr.ostatok, 0));
	let rezerv = parseInt(objProduct.reduce((prev, curr) => prev + curr.rezerv, 0));
	let otpr = parseInt(objProduct.reduce((prev, curr) => prev + curr.otpr, 0));
	let vozvrat = parseInt(objProduct.reduce((prev, curr) => prev + curr.vozvrat, 0));
	let zakupka = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.zakupka / array.length, 0)
	);
	let prodazha = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.prodazha / array.length, 0)
	);
	let marzha = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.marzha / array.length, 0)
	);
	let suma1 = parseInt(
		objProduct.map((x) => x.ostatok * x.zakupka).reduce((prev, curr) => prev + curr, 0)
	);
	let suma2 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma2, 0));
	let suma3 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma3, 0));
	let suma4 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma4, 0));

	const rootRef = useRef();
	const [start, setStart] = useState(0);
	function getStart() {
		let temp = start - 40 * rowHeight;

		return Math.min(
			objProduct.length - visibleRows - 1,
			Math.floor(temp < 0 ? 0 : temp / rowHeight)
		);
	}

	let rowHeight = 20;
	let visibleRows = Math.round((document.body.clientHeight * 1.8 - 140) / 20);

	function getTopHeight() {
		return rowHeight * getStart();
	}
	function getBottomHeight() {
		return rowHeight * (objProduct.length - (getStart() + visibleRows + 1));
	}
	// useEffect(()=> {
	// 	rootRef.current.recalculate();
	// },[start])start
	console.log(getStart());
	// console.log(getStart())
	function throttle(func, ms) {
		let isThrottled = false,
			savedArgs,
			savedThis;

		function wrapper() {
			if (isThrottled) {
				savedArgs = arguments;
				savedThis = this;
				return;
			}

			func.apply(this, arguments);

			isThrottled = true;

			setTimeout(function () {
				isThrottled = false;
				if (savedArgs) {
					wrapper.apply(savedThis, savedArgs);
					savedArgs = savedThis = null;
				}
			}, ms);
		}

		return wrapper;
	}
	useEffect(() => {
		// document.querySelector('.warehouse-products table').style.pointerEvents = 'all';

		function onScroll(e) {
			clearTimeout(timer);
			setStart(e.target.scrollTop);
			// console.log(start)
			document.querySelector('.warehouse-products table').classList.add('hoverOff');
			timer = setTimeout(() => {
				document.querySelector('.warehouse-products table').classList.remove('hoverOff');
			}, 300);
			// document.querySelector('.simplebar-track simplebar-vertical div').style.transform = `translate3d(0px,${start}px,0px)`;
			// rootRef.current.el
			// .querySelector('.simplebar-scrollbar.simplebar-visible').style.transition = '0.2s';
			// document.querySelectorAll('.first-tab-body tr').forEach((x) => {
			// 	x.style.animation = 'trAnimtaion 0.2s forwards';
			// });
			// document.querySelector('.warehouse-products table').style.pointerEvents = 'none';
			// setTimeout(() => {
			// const simpleBar = new SimpleBar(document.getElementById('myElement'));

			// setStart(
			// 	// Math.min(objProduct.length - visibleRows - 10, Math.floor(e.target.scrollTop / rowHeight))
			// 	Math.min(
			// 		objProduct.length - visibleRows - 10,
			// 		Math.floor(
			// 			e.target.scrollTop - 10 * rowHeight < 0
			// 				? 0
			// 				: e.target.scrollTop - 10 * rowHeight/ rowHeight
			// 		)
			// 	)
			// );
			// rootRef.current.recalculate();
			// }, 0);
			// getStart();
		}

		rootRef.current.el
			.querySelector('.simplebar-content-wrapper')
			.addEventListener('scroll', onScroll);
		// rootRef.current.addEventListener('scroll', async e => throttle(onScroll(e), 40), false);
		// rootRef.current.el
		// 	.querySelector('.simplebar-content-wrapper')
		// 	.addEventListener('scroll', onScroll);
		return () => {
			rootRef.current.el
				.querySelector('.simplebar-content-wrapper')
				.removeEventListener('scroll', onScroll);
		};
	}, [objProduct.length, visibleRows, rowHeight]);
	useEffect(() => {
		rootRef.current.getContentElement();
	}, [start]);
	const [widthColum, setWidthColum] = useState({ id: '', name: '', attribute: '' });

	function width() {
		let arr = [];
		document.querySelectorAll('.id-width').forEach((x) => {
			arr.push(x.offsetWidth);
		});
		let maxwidth = Math.max(...arr);
		// document.querySelectorAll('.id-width').forEach((x) => {
		// 	x.style.width = maxwidth + 'px';
		// });

		let arr2 = [];
		document.querySelectorAll('.name-width').forEach((x) => {
			arr2.push(x.offsetWidth);
		});
		let maxwidth2 = Math.max(...arr2);
		// document.querySelectorAll('.name-width').forEach((x) => {
		// 	x.style.width = maxwidth2 + 'px';
		// });

		let arr3 = [];
		document.querySelectorAll('.attribute-width').forEach((x) => {
			arr3.push(x.offsetWidth);
		});
		let maxwidth3 = Math.max(...arr3);
		console.log(arr, maxwidth);
		// document.querySelectorAll('.attribute-width').forEach((x) => {
		// 	x.style.width = maxwidth3 + 'px';
		// });
		widthColum.id = maxwidth;
		widthColum.name = maxwidth2;
		widthColum.attribute = maxwidth3;
		setWidthColum(widthColum);
		// console.log(widthColum)
	}

	useLayoutEffect(() => {
		width();
	}, []);
	return (
		<div className="warehouse-products">
			<div className="warehouse-products-title">
				Товары
				<button>
					<SvGBtnPlus />
				</button>
			</div>
			<div className="shadow-right"></div>
			<SimpleBar
				className="warehouse-table"
				style={{
					display: 'flex',
					maxHeight: 'calc(100vh - 149px)',
					marginBottom: '10px',
					// maxWidth: 1150,
					width: '100%',
					// overflow: 'auto',
					// height: '800px',
					height: document.body.clientHeight - 180 + 'px',
				}}
				autoHide={false}
				ref={rootRef}
			>
				<table
					tabIndex={-1}
					style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
				>
					<thead className="first-tab-header">
						<tr>
							{podlozhka && (
								<td style={{ padding: '0px' }}>
									<div
										className="warehouse-podlozhka"
										style={{
											width: '100%',
											height: document.body.clientHeight + 'px',
											position: 'absolute',
											left: 0,
											top: 0,
											zIndex: 3,
										}}
										onClick={clickPodlozhka}
									></div>
								</td>
							)}
						</tr>

						<tr>
							<th className="statusBefore sticky-head">
								<div className="sticky-block">
									<div
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										// style={{ display: 'flex' }}
										className="sticky-block-children"
									>
										<div
											style={{
												textAlign: 'left',
												paddingLeft: 0,
												minWidth: 51,
												paddingRight: '10px',
											}}
										>
											Статус
										</div>
										<div
											style={
												switchMenu
													? {
															paddingRight: '10px',
															width: '85px',
															display: 'flex',
															justifyContent: 'space-between',
															overflow: '',
													  }
													: {
															overflow: 'hidden',
															width: '0px',
															paddingRight: '0px',
															justifyContent: 'space-between',
															display: 'flex',
													  }
											}
										>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
										</div>
									</div>

									<div
										className="id-width"
										style={{ paddingRight: '10px', width: widthColum.id + 'px' }}
									>
										ID
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>Страна</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>Валюта</div>
									<div
										className="name-width"
										style={{
											paddingRight: '15px',
											justifyContent: 'center',
											width: widthColum.name - 15 + 'px',
										}}
									>
										Название
									</div>
									<div
										className="attribute-width"
										style={{ paddingRight: '3px', width: widthColum.attribute + 'px' }}
									>
										Атрибут
									</div>
									<div className="shadow-left"></div>
								</div>
							</th>

							<th style={{ paddingLeft: '12px', paddingRight: '15px' }} colSpan={4}>
								Наличие
							</th>
							<th style={{ paddingRight: '15px' }}>Закупка</th>
							<th style={{ paddingRight: '15px' }}>Продажа</th>
							<th style={{ paddingRight: '15px' }}>Маржа</th>
							<th colSpan={4}>Сумма</th>
						</tr>
						<tr ref={linkTR}>
							<th className="sticky-head">
								<div className="sticky-block">
									<div
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										className="sticky-block-children"
										style={{ maxWidth: '156px' }}
									>
										<div style={{ width: '51px', paddingRight: '10px' }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'status'}
												objProduct={objProduct}
											/>
										</div>
										<div
											style={
												switchMenu
													? {
															// transition: '0.2s',
															paddingRight: '10px',
															// width: '85px',
															maxWidth: '125px',
															display: 'flex',
															justifyContent: 'space-between',
															overflow: '',
													  }
													: {
															// transition: '0.2s',
															overflow: 'hidden',
															maxWidth: '0px',
															paddingRight: '0px',
															justifyContent: 'space-between',
															display: 'flex',
													  }
											}
											className="block-3-btn"
										>
											<WarehouseDropMenu
												adaptive={true}
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'status'}
												objProduct={objProduct}
												setSwitchMenu={setSwitchMenu}
												switchMenu={switchMenu}
												setFlagSwitchMenu={setFlagSwitchMenu}
											/>

											<div style={{ margin: '0 11px' }}>
												<WarehouseDropMenu
													adaptive={true}
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'status'}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													setFlagSwitchMenu={setFlagSwitchMenu}
												/>
											</div>

											<WarehouseDropMenu
												adaptive={true}
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'status'}
												objProduct={objProduct}
												setSwitchMenu={setSwitchMenu}
												switchMenu={switchMenu}
												setFlagSwitchMenu={setFlagSwitchMenu}
											/>
										</div>
									</div>

									<div
										className="id-width"
										style={{ paddingRight: '10px', width: widthColum.id + 'px' }}
									>
										<WarehouseInput podlozhka={podlozhka} setPodlozhka={setPodlozhka} />
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'country'}
											objProduct={objProduct}
											setSwitchMenu={setSwitchMenu}
											switchMenu={switchMenu}
										/>
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'currency'}
											objProduct={objProduct}
											setSwitchMenu={setSwitchMenu}
											switchMenu={switchMenu}
										/>
									</div>
									<div
										className="name-width"
										style={{ paddingRight: '15px', width: widthColum.name - 15 + 'px' }}
									>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'name'}
											inputOn={true}
											searchLine={searchLine}
											objProduct={objProduct}
											setSwitchMenu={setSwitchMenu}
											switchMenu={switchMenu}
										/>
									</div>
									<div
										className="attribute-width"
										style={{ paddingRight: '3px', width: widthColum.attribute + 'px' }}
									>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'attribute'}
											searchLine={searchLine}
											inputOn={true}
											objProduct={objProduct}
											setSwitchMenu={setSwitchMenu}
											switchMenu={switchMenu}
										/>
									</div>
									<div className="shadow-left"></div>
								</div>
							</th>

							<th style={{ paddingLeft: '12px', paddingRight: '3px' }} className="nal-ostatok">
								<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
									{formatNumber2(ostatok)}
									<span style={{ paddingLeft: 3 }}>/</span>
								</div>
							</th>
							<th className="nal-rezerv" style={{ paddingRight: '4px' }}>
								<div>{formatNumber2(rezerv)}</div>
							</th>
							<th className="nal-otpr" style={{ paddingRight: '4px' }}>
								<div>{formatNumber2(otpr)}</div>
							</th>
							<th className="nal-vozvrat" style={{ paddingRight: '15px' }}>
								<div>{formatNumber2(vozvrat)}</div>
							</th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}>{formatNumber(zakupka)}</th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}>{formatNumber(prodazha)}</th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}>{formatNumber(marzha)}</th>
							<th className="summa-suma1">
								<div
									style={{
										textAlign: 'right',
										display: 'flex',
										justifyContent: 'end',
										paddingRight: '3px',
									}}
								>
									{formatNumber(suma1)}
									<span style={{ paddingLeft: 3 }}>/</span>
								</div>
							</th>
							<th className="summa-suma2">
								<div style={{ paddingRight: '4px' }}>{formatNumber(suma2)}</div>
							</th>
							<th className="summa-suma3">
								<div style={{ paddingRight: '4px' }}>{formatNumber(suma3)}</div>
							</th>
							<th className="summa-suma4">
								<div>{formatNumber(suma4)}</div>
							</th>
						</tr>

						<tr>
							<th className="shadow-vertical" colSpan={1}>
								<div
									onMouseEnter={() => setSwitchMenu(true)}
									onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
									style={switchMenu ? { width: '171px' } : { width: '51px' }}
								></div>
								<div></div>
							</th>

							<th colSpan="17" className="shadow-vertical-3">
								<div></div>
							</th>
						</tr>
					</thead>

					<tbody className="first-tab-body">
						<tr style={{ height: getTopHeight() }}></tr>

						{objProduct.slice(getStart(), getStart() + visibleRows + 40).map((x, index) => (
							<WarehouseProductList
								index={index + getStart()}
								// rowHeight={rowHeight}
								// style={{ height: rowHeight }}
								widthColum={widthColum}
								key={index + getStart()}
								start={getStart()}
								setChecked={setChecked}
								checked={checked}
								objProduct={objProduct}
								switchMenu={switchMenu}
								setObjProduct={setObjProduct}
								setSwitchMenu={setSwitchMenu}
								podlozhka={podlozhka}
								setPodlozhka={setPodlozhka}
								focusInput={focusInput}
								setFocusInput={setFocusInput}
								setIndexInput={setIndexInput}
								setLastIndex={setLastIndex}
								lastIndex={lastIndex}
								setBtnMenu={setBtnMenu}
								btnMenu={btnMenu}
								selectAll={selectAll}
								setSelectAll={setSelectAll}
								flagSwitchMenu={flagSwitchMenu}
							/>
						))}
						<tr style={{ height: getBottomHeight() }}></tr>
					</tbody>

					<tfoot>
						<tr>
							<td colSpan={18} style={{ height: 12 }}>
								<div className="shadow-vertical-2"></div>
							</td>
						</tr>
					</tfoot>
				</table>
				{/* <div style={{ height: getBottomHeight() }} />   */}
			</SimpleBar>
		</div>
	);
};

export default WarehouseBlock;

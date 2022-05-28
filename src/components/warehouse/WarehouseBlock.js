import React, { useState, useEffect, useRef } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus } from '../../img/svg-pack';
// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WarehouseProductList from './WarehouseProductList';
import WarehouseDropMenu from './WarehouseDropMenu';
// import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseInput from './WarehouseInput';
import _, { set } from 'lodash';
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import css from 'dom-css';
// import FreeScrollBar from 'react-free-scrollbar';
import ScrollBox from './reactScroll';
import WarehouseDropRange from './WarehouseDropRange';

// let timer;
let hover;

const WarehouseBlock = ({ objProduct, setObjProduct, setToggleCard, setGetIndex, translator }) => {
	const [lastIndex, setLastIndex] = useState(0);
	const [selectAll, setSelectAll] = useState(false);
	// const [checked, setChecked] = useState(true);

	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	// const [focusInput, setFocusInput] = useState(false);

	const [indexInput, setIndexInput] = useState(0);
	// const [btnMenu, setBtnMenu] = useState(false);
	const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
	// console.log('block')
	function clickPodlozhka() {
		setPodlozhka(false);
		// setFocusInput(false);
		setFlagSwitchMenu(false);
		setSwitchMenu(false);

		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.remove('hide-menu');
		});
		document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
			x.style.zIndex = 1;
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '21px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
		let input = document.querySelectorAll('.nal-ostatok input')[indexInput];
		if (input.value.length >= 4) {
			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
			input.style.width = input.value.length * 7 + 3 + 'px';
		}
		if (input.value.length >= 7) {
			input.style.width = input.value.length * 7 + 7 + 'px';
		}
		if (input.value.length < 4) {
			input.style.width = input.value.length * 7 + 'px';
		}
	}
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

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
	// console.log(objProduct.length);

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
	const [ostatok , setostatok] = useState('');
	const [rezerv , setrezerv] = useState('');
	const [otpr , setotpr] = useState('');
	const [vozvrat , setvozvrat] = useState('');
	const [zakupka , setzakupka] = useState('');
	const [prodazha , setprodazha] = useState('');
	const [marzha , setmarzha] = useState('');
	const [suma1 , setsuma1] = useState('');
	const [suma2 , setsuma2] = useState('');
	const [suma3 , setsuma3] = useState('');
	const [suma4 , setsuma4] = useState('');
	useEffect(()=> {
	let ostatok = 
		formatNumber2(objProduct.reduce((prev, curr) => {
			return prev + (+curr.ostatok.replace(/\s/gmu,''))
		}, 0))
		
	setostatok(ostatok);
	
	let rezerv = formatNumber2(objProduct.reduce((prev, curr) => {
		return prev + (+curr.rezerv.replace(/\s/gmu,''))
	}, 0))
	setrezerv(rezerv)
	let otpr = formatNumber2(objProduct.reduce((prev, curr) => {
		return prev + (+curr.otpr.replace(/\s/gmu,''))
	}, 0))
	setotpr(otpr);
	let vozvrat = formatNumber2(objProduct.reduce((prev, curr) => {
		return prev + (+curr.vozvrat.replace(/\s/gmu,''))
	}, 0))
	setvozvrat(vozvrat);
	

	let zakupka = formatNumber(objProduct.reduce((prev, curr,_,array) => {
		return prev + (+curr.zakupka.replace(/\s/gmu,'')) / array.length;
	}, 0))
	setzakupka(zakupka);
	let prodazha = formatNumber(objProduct.reduce((prev, curr,_,array) => {
		return prev + (+curr.prodazha.replace(/\s/gmu,'')) / array.length;
	}, 0))
	setprodazha(prodazha)
	let marzha = formatNumber(objProduct.reduce((prev, curr,_,array) => {
		return prev + (+curr.marzha.replace(/\s/gmu,'')) / array.length;
	}, 0))
	setmarzha(marzha);

	let suma1 = formatNumber(objProduct.reduce((prev, curr) => {
		return prev + (+curr.suma1.replace(/\s/gmu,''))
	}, 0))
	setsuma1(suma1);
	let suma2 = formatNumber(objProduct.reduce((prev, curr) => {
		return prev + (+curr.suma2.replace(/\s/gmu,''))
	}, 0))
	setsuma2(suma2);
	let suma3 = formatNumber(objProduct.reduce((prev, curr) => {
		return prev + (+curr.suma3.replace(/\s/gmu,''))
	}, 0))
	setsuma3(suma3);
	let suma4 = formatNumber(objProduct.reduce((prev, curr) => {
		return prev + (+curr.suma4.replace(/\s/gmu,''))
	}, 0))
	setsuma4(suma4);
	// let suma2 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma2, 0));
	// let suma3 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma3, 0));
	// let suma4 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma4, 0));
	},[objProduct])
	
	const rootRef = useRef();
	const [start, setStart] = useState(0);
	let rowHeight = 18;
	const [visibleRows, setVisible] = useState(
		Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight)
	);
	useEffect(() => {
		setVisible(Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight));
	}, [visibleRows]);
	// const visibleRows = Math.floor((document.body.clientHeight * 2) / rowHeight);
	// useEffect(()=> {
	// 	// const visibleRowss = Math.floor((document?.body?.clientHeight * 2) / rowHeight);
	// 	setVisible(Math.floor((document.body.clientHeight * 2) / rowHeight))
	// },visibleRows)

	// const [visibleRows, setVisible] = useState(Math.round((document.body.clientHeight * 1.5- 140) / 20));
	// Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom))
	function getStart() {
		// let temp = start - document.body.clientHeight * 0.1;
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);

		// let temp = start - 50 * rowHeight;

		return Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}

	function getTopHeight() {
		// let temp = start - 50 * rowHeight;
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);

		// let temp = start - document.body.clientHeight * 0.1;
		// return rowHeight * getStart();
		return rowHeight * Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}
	function getBottomHeight() {
		// let temp = start - 50 * rowHeight;
		// let temp = start - document.body.clientHeight * 0.1;
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);

		// return rowHeight * (objProduct.length - (getStart() + visibleRows + 1));
		return (
			rowHeight *
			(objProduct.length -
				(Math.min(objProduct.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
					visibleRows +
					1))
		);
	}
	
	let isDown = false;
	let startX;
	let scrollLeft;
	function onMouseDown(e) {
		// if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
		isDown = true;
		startX = e.pageX - rootRef.current.content.offsetLeft;
		scrollLeft = rootRef.current.content.scrollLeft;
		// } else {
		// 	isDown = false;
		// }
	}

	function onMouseLeave(e) {
		isDown = false;
	}

	function onMouseMove(e) {
		if (!isDown) return;

		e.preventDefault();
		_.throttle(() => {
			const x = e.pageX - rootRef.current.content.offsetLeft;
			const walk = (x - startX) * 1.2; //scroll-fast
			rootRef.current.content.scrollLeft = scrollLeft - walk;
		}, 100)();
	}
	async function updateHover(e) {
		clearTimeout(hover);
		if (!document.querySelector('.first-tab-body').classList.contains('hoverOff')) {
			document.querySelector('.first-tab-body').classList.add('hoverOff');
		}

		hover = setTimeout(() => {
			document.querySelector('.first-tab-body').classList.remove('hoverOff');
		}, 400);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// const scrollableNodeRef = React.createRef();
	// console.log(start)
	useEffect(() => {
		if (start > 600) {
			document.querySelector('.btnUp').style.visibility = 'visible';
		} else {
			document.querySelector('.btnUp').style.visibility = 'hidden';
		}
	}, [start]);
	function clickScrollUp() {
		// rootRef.current.el.querySelector('.simplebar-content-wrapper').scrollTop = 0;
		// rootRef.current.scrollTop = 0;
		document.querySelector('.contentScroll').scrollTop = 0;
	}
	async function onScroll(e) {
		e.stopPropagation();
		setStart(e.target.scrollTop);
		updateHover();
		setSwitchMenu(false);
	}
	useEffect(() => {
		// rootRef.current.el
		// 	.querySelector('.simplebar-content-wrapper')
		// 	.addEventListener('scroll', onScroll);
		rootRef.current.content.addEventListener('mousedown', onMouseDown);
		rootRef.current.content.addEventListener('mouseleave', onMouseLeave);
		rootRef.current.content.addEventListener('mouseup', onMouseLeave);
		rootRef.current.content.addEventListener('mousemove', onMouseMove);

		return () => {
			rootRef.current.content.removeEventListener('mousedown', onMouseDown);
			rootRef.current.content.removeEventListener('mouseleave', onMouseLeave);
			rootRef.current.content.removeEventListener('mouseup', onMouseLeave);
			rootRef.current.content.removeEventListener('mousemove', onMouseMove);
			// rootRef.current.el
			// 	.querySelector('.simplebar-content-wrapper')
			// 	.removeEventListener('scroll',  _.throttle(onScroll, 500));
		};
	}, []);

	// const [widthColum, setWidthColum] = useState({ id: '', name: '', attribute: '' });

	// async function width() {
	// 	let arr2 = [];
	// 	document.querySelectorAll('.name-width').forEach((x) => {
	// 		arr2.push(x.offsetWidth);
	// 	});
	// 	let maxwidth2 = Math.max(...arr2);
	// 	let arr3 = [];

	// 		document.querySelectorAll('.attribute-width').forEach((x) => {
	// 			arr3.push(x.offsetWidth);
	// 		});
	// 		let maxwidth3 = Math.max(...arr3);
	// 		console.log(arr3)
	// 		widthColum.name = maxwidth2;
	// 		widthColum.attribute = maxwidth3;
	// 		setWidthColum(widthColum);
	// }

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		width();
	// 	}, 50);

	// 	window.addEventListener(
	// 		'resize',
	// 		function (event) {
	// 			width();
	// 		},
	// 		true
	// 	);

	// }, []);
	const [loadedLabelBlock , setLoadedLabelBlock] = useState(true);
	useEffect(() => {
		if (switchMenu) {
			// requestAnimationFrame(() => {
			clearTimeout(hover);
			setLoadedLabelBlock(true);
			document.querySelectorAll('.animationFrame').forEach((x) => {
				x.classList.add('show');
				x.style.overflow = '';
			});
			document.querySelectorAll('.block-3-btn').forEach((x) => {
				x.classList.add('show');
			});
		} else {
			document.querySelectorAll('.animationFrame').forEach((x) => {
				x.classList.remove('show');
				x.style.overflow = 'hidden';
			});
			document.querySelectorAll('.block-3-btn').forEach((x) => {
				x.classList.remove('show');
			});
			hover = setTimeout(() => {
				setLoadedLabelBlock(false);
			}, 400);
		}
	}, [switchMenu, loadedLabelBlock]);
	const [sortActive, setSortActive] = useState(false);
	// const refScroll = useRef();
	
	const [width21px,setWidth21px] = useState(false);
	const [labelForWidth, setLabelForWidth] = useState(false);





	

	return (
		<div className="warehouse-products">
			<div className="warehouse-products-title">
				{translator.getTranslation('warehouse', 'goods')}
				<button>
					<SvGBtnPlus />
				</button>
			</div>
			<div className="shadow-right"></div>

			<div
				style={{
					position: 'relative',
					maxHeight: 'calc(100vh - 170px)',
					width: '100%',
					height: document.body.clientHeight - 170 + 'px',
				}}
			>
				<ScrollBox
					ref={rootRef}
					// scrollVertMinus={0.07}
					percent={0.93}
					scroll={_.throttle(onScroll, 500)}
					color="rgba(0, 0, 0, 0.3)"
				>
					{/* <div
				// scrollableNodeProps={{ref: scrollableNodeRef}}
				className="warehouse-table"
				style={{
					// display: 'flex',
					// marginBottom: '10px',
					// maxHeight: 'calc(100vh - 170px)',
					// width: '100%',
					// height: document.body.clientHeight - 170 + 'px',
					// maxWidth: 1150,
					// display: 'none',
					// overflow: 'auto',
					// height: '800px',
					// willChange:'transform, scroll-position',
				}}
				// autoHide={false}
				// direction={'rtl'}
				ref={rootRef}
				// direction='rtl'
				// onScroll={_.throttle(onScroll, 500)}
			> */}

					<table
						tabIndex={-1}
						style={{ width: '100%' }}
						// style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
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
			
								<th className="sticky-head">
									<div className="sticky-block" style={{ height: 20 }}>
										<div className="stickyBeforeHead"></div>
										<div
											onMouseEnter={() => setSwitchMenu(true)}
											onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
											className="sticky-block-children"
											style={{ height: 20 }}
										>
											<div
												style={{
													textAlign: 'left',
													paddingLeft: 0,
													minWidth: 51,
													paddingRight: '10px',
												}}
											>
												{translator.getTranslation('warehouse', 'status')}
											</div>
											<div
												className="animationFrame"
												style={{
													// transition:'0.2s',
													// overflow: 'hidden',
													// width: '0px',
													// paddingRight: '0px',
													// justifyContent: 'space-between',
													display: 'flex',
													height: 20,
													// height: '16px',
												}}
											>
												<div className="box"></div>
												<img className="logo-mail" src={crmLogo} alt="" />
												<img className="logo-mail" src={rozetkaLogo} alt="" />
												<img className="logo-mail" src={promLogo} alt="" />
											</div>
										</div>

										<div className="id-width" style={{ paddingRight: '10px' }}>
											ID
										</div>
										<div style={{ paddingRight: '10px', minWidth: 51 }}>
											{translator.getTranslation('warehouse', 'country')}
										</div>
										<div style={{ paddingRight: '10px', minWidth: 51 }}>
											{translator.getTranslation('warehouse', 'currency')}
										</div>
										<div
											className="name-width"
											style={{
												paddingRight: '15px',
												justifyContent: 'center',
												width: 200,
												// width: widthColum.name - 15 + 'px',
												// maxWidth: '172px',
											}}
										>
											{translator.getTranslation('warehouse', 'name')}
										</div>
										<div
											className="attribute-width"
											style={{
												paddingRight: '3px',
												//  width: widthColum.attribute + 'px',
												width: 150,
											}}
										>
											{translator.getTranslation('warehouse', 'attribute')}
										</div>
										<div className="shadow-left"></div>
									</div>
								</th>

								<th style={{ paddingLeft: '12px', paddingRight: '15px' }} colSpan={4}>
									{translator.getTranslation('warehouse', 'available')}
								</th>
								<th style={{ paddingRight: '15px' }}>
									{translator.getTranslation('warehouse', 'purchase')}
								</th>
								<th style={{ paddingRight: '15px' }}>
									{translator.getTranslation('warehouse', 'sales')}
								</th>
								<th style={{ paddingRight: '15px' }}>
									{translator.getTranslation('warehouse', 'margin')}
								</th>
								<th colSpan={4}>{translator.getTranslation('warehouse', 'total')}</th>
							</tr>
							<tr>
								{/* <th className="hoverr">
								<div></div>
							</th> */}

								<th className="sticky-head" style={{ zIndex: 3 }}>
									<div className="sticky-block" style={{ height: 20 }}>
										<div
											className="sticky-block-children"
											style={{
												width: 'calc(100% - 13px)',
												position: 'absolute',
												left: 13,
												height: 20,
												background: 'white',
												// zIndex: `${switchMenu ? 5 : ''}`,
											}}
										>
											{/* <div className='stickyBeforeHead'></div> */}
											<div
												className="width21px"
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												style={{
													transition: '0.3s',
													maxWidth: '51px',
													paddingRight: '9px',
													width: '100%',
												}}
											>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													width21px={width21px}
													setWidth21px={setWidth21px}
													labelForWidth={labelForWidth}
													setLabelForWidth={setLabelForWidth}
													type={'status'}
													translator={translator}
													objProduct={objProduct}
													sortActive={sortActive}
													setSortActive={setSortActive}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													setFlagSwitchMenu={setFlagSwitchMenu}
												/>
											</div>
											<div
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												// style={switchMenu ? { overflow: '', position:'relative',left:0,width:'max-content' ,paddingLeft:10} : {overflow:'hidden',paddingLeft:0, position:'relative',left:0,width:'0px'}}
												className="block-3-btn"
											>
												<div className="marginBtn">
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
														translator={translator}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
													/>
												</div>

												<div className="marginBtn">
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														translator={translator}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
													/>
												</div>
												<div className="marginBtn">
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														translator={translator}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
														sortActive={sortActive}
														setSortActive={setSortActive}
														setLabelForWidth={setLabelForWidth}
														setWidth21px={setWidth21px}
													/>
												</div>
												{/* {console.log(document.querySelectorAll('.block-3-btn').children)} */}
											</div>
										</div>
										<div
											style={{
												position: 'relative',
												left: 74,
												display: `${switchMenu ? 'none' : 'flex'}`,
												zIndex: 4,
											}}
										>
											<div
												className="id-width"
												style={{ paddingRight: '10px' }}
											>
												<WarehouseInput podlozhka={podlozhka} setPodlozhka={setPodlozhka} />
											</div>
											<div style={{ paddingRight: '10px', minWidth: 51, zIndex: 5 }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'country'}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													translator={translator}
													sortActive={sortActive}
													setSortActive={setSortActive}
													setWidth21px={setWidth21px}
													setLabelForWidth={setLabelForWidth}
													// setActivity={setActivity}
													// activity={activity}
												/>
											</div>
											<div style={{ paddingRight: '10px', minWidth: 51 }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'currency'}
													translator={translator}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													sortActive={sortActive}
													setSortActive={setSortActive}
													setWidth21px={setWidth21px}
													setLabelForWidth={setLabelForWidth}
													// setActivity={setActivity}
													// activity={activity}
												/>
											</div>
											<div
												className="name-width"
												style={{
													paddingRight: '15px',
													// width: widthColum.name - 15 + 'px',
													// maxWidth: '172px',
													width: 200,
												}}
											>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'name'}
													translator={translator}
													inputOn={true}
													searchLine={searchLine}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													sortActive={sortActive}
													setSortActive={setSortActive}
													setWidth21px={setWidth21px}
													setLabelForWidth={setLabelForWidth}
												/>
											</div>
											<div
												className="attribute-width btn"
												style={{
													// paddingRight: '3px',
													// width: widthColum.attribute + 'px',
													// maxWidth:  widthColum.attribute + 'px',
													width: 150,
												}}
											>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'attribute'}
													translator={translator}
													searchLine={searchLine}
													inputOn={true}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
													sortActive={sortActive}
													setSortActive={setSortActive}
													setWidth21px={setWidth21px}
													setLabelForWidth={setLabelForWidth}
												/>
											</div>
										</div>
										<div className="shadow-left" style={{ height: 40 }}></div>
									</div>
								</th>

								<th style={{ paddingLeft: '12px', paddingRight: '3px' }}>
									<div style={{ width: 'calc(100% - 7px)', height: 20 }}>
										{/* <WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'range'}
												zIndex={true}
												objProduct={objProduct}
												setSwitchMenu={setSwitchMenu}
												switchMenu={switchMenu}
												translator={translator}
												sortActive={sortActive}
												setSortActive={setSortActive}
											/> */}
										<WarehouseDropRange
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											translator={translator}
											zIndex={true}
											sortActive={sortActive}
											setSortActive={setSortActive}
											// setWidth21px={setWidth21px}
											// setLabelForWidth={setLabelForWidth}
										/>
									</div>
								</th>
								<th className="" style={{ paddingRight: '4px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 4px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
									
								</th>
								<th className="" style={{ paddingRight: '4px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 4px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th className="" style={{ paddingRight: '15px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 15px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 15px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 15px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 15px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th className="" style={{ position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 10px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th className="" style={{ position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 4px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th className="" style={{ position: 'relative' }}>
									<div
										style={{
											width: 'calc(100% - 4px)',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
								<th className="" style={{ position: 'relative' }}>
									<div
										style={{
											width: '100%',
											background: '#9c9b9e',
											height: 1,
											bottom: 2,
											left: 0,
											position: 'absolute',
										}}
									></div>
								</th>
							</tr>
							<tr>
								<th style={{ position: 'sticky', left: 0, background: 'white', zIndex: 2 }}></th>
								<th style={{ paddingLeft: '12px', paddingRight: '3px' }} className="nal-ostatok">
									<div
										style={{
											textAlign: 'right',
											display: 'flex',
											justifyContent: 'end',
											color: 'rgba(0,0,0,0.9)',
										}}
									>
										{ostatok}
										{/* {formatNumber2(ostatok)} */}
										{/* {ostatok} */}
										<span style={{ paddingLeft: 3 }}>/</span>
									</div>
								</th>
								<th className="nal-rezerv" style={{ paddingRight: '4px' }}>
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber2(rezerv)} */}
										{rezerv}
									</div>
									<span></span>
								</th>
								<th className="nal-otpr" style={{ paddingRight: '4px' }}>
									{/* <div style={{ color: 'rgba(0,0,0,0.7)'}}>{formatNumber2(otpr)}</div> */}
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>{otpr}</div>
									<span></span>
								</th>
								<th className="nal-vozvrat" style={{ paddingRight: '15px' }}>
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>{vozvrat}</div>
									{/* <div style={{ color: 'rgba(0,0,0,0.7)'}}>{formatNumber2(vozvrat)}</div> */}
									<span></span>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', color: 'rgba(0,0,0,0.9)' }}>
									<div>{zakupka}</div>
									{/* <div>{formatNumber(zakupka)}</div> */}
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', color: 'rgba(0,0,0,0.9)' }}>
									{/* <div>{formatNumber(prodazha)}</div> */}
									<div>{prodazha}</div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '15px', color: 'rgba(0,0,0,0.9)' }}>
									{/* <div>{formatNumber(marzha)}</div> */}
									<div>{marzha}</div>
								</th>
								<th className="summa-suma1">
									<div
										style={{
											textAlign: 'right',
											display: 'flex',
											justifyContent: 'end',
											paddingRight: '3px',
											color: 'rgba(0,0,0,0.9)',
										}}
									>
										{/* {formatNumber(suma1)} */}
										{suma1}
										<span style={{ paddingLeft: 3 }}>/</span>
									</div>
								</th>
								<th className="summa-suma2">
									<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma2)} */}
										{suma2}
									</div>
									<span></span>
								</th>
								<th className="summa-suma3">
									<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma3)} */}
										{suma3}
									</div>
									<span></span>
								</th>
								<th className="summa-suma4">
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma4)} */}
										{suma4}
									</div>
									<span></span>
								</th>
							</tr>
							<tr>
								<th className="shadow-vertical" colSpan={19}>
									<div />
									<div />
								</th>
							</tr>
						</thead>

						<tbody className="first-tab-body">
							<tr style={{ height: getTopHeight() }}></tr>

							{objProduct.length > 0 &&
								objProduct.slice(getStart(), getStart() + visibleRows).map((x, index, arr) => (
									<WarehouseProductList
										index={index + getStart()}
										// rowHeight={rowHeight}
										// style={{ height: rowHeight }}
										indexParent={index}
										// widthColum={widthColum}
										key={index + getStart()}
										start={getStart()}
										// rowHeight={rowHeight}
										// setChecked={setChecked}
										setLoadedLabelBlock={setLoadedLabelBlock}
										loadedLabelBlock={loadedLabelBlock}
										// checked={checked}
										setGetIndex={setGetIndex}
										objProduct={objProduct}
										setObjProduct={setObjProduct}
										switchMenu={switchMenu}
										setSwitchMenu={setSwitchMenu}
										podlozhka={podlozhka}
										setPodlozhka={setPodlozhka}
										// focusInput={focusInput}
										// setFocusInput={setFocusInput}
										setIndexInput={setIndexInput}
										setLastIndex={setLastIndex}
										lastIndex={lastIndex}
										// setBtnMenu={setBtnMenu}
										// btnMenu={btnMenu}
										setToggleCard={setToggleCard}
										// selectAll={selectAll}
										translator={translator}
										// setHoverWidth={setHoverWidth}
										// hoverWidth={hoverWidth}
										// setSelectAll={setSelectAll}
										flagSwitchMenu={flagSwitchMenu}
									/>
								))}

							<tr colSpan={18} style={{ height: getBottomHeight() }}>
								{/* <td style={{ paddingBottom: 16, height: 0 }}></td> */}
							</tr>
						</tbody>

						<tfoot>
							<tr>
								<td colSpan={18} style={{ height: 12 }}>
									<div className="shadow-vertical-footer"></div>
								</td>
							</tr>
						</tfoot>
					</table>


				</ScrollBox>
			</div>

			<div onClick={clickScrollUp} className="btnUp">
				<svg
					width="20"
					height="20"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
						fill="black"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default WarehouseBlock;

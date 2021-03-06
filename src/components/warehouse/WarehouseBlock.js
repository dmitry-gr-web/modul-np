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
import { dataWarehouse } from '../data/dataWarehouse';
// import { render } from 'react-dom';
// import { FixedSizeList as List } from 'react-window';
let timer;
let hover;
let plusminus;
const WarehouseBlock = ({


	setToggleCard,
	setGetIndex,
	load,
	translator,
}) => {
	const [objProduct, setObjProduct] = useState(dataWarehouse);
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

	function clickPodlozhka() {
		setPodlozhka(false);
		setFocusInput(false);
		setFlagSwitchMenu(false);
		setSwitchMenu(false);
		// document.querySelectorAll('.warehouse-dropmenu .underline').forEach((x) => {
		// 	x.style.width = '0%';
		// });
		document.querySelector('.warehouse-table').style.overflow = '';
		// document.querySelector('.warehouse-table').style.overflow = 'auto';

		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			// x.style.visibility = 'visible';
			x.classList.remove('hide-menu');
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '21px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			// x.style.opacity = '1';
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
		// document.querySelectorAll('.adaptive-switch').forEach((x) => {
		// 	x.classList.remove('adaptive-switch-on');
		// });
		// document.querySelectorAll('.adaptive-switch2').forEach((x) => {
		// 	x.classList.remove('adaptive-switch-on2');
		// });
		// document.querySelectorAll('.nal-ostatok button').forEach((x) => {
		// 	x.style.width = '0px';
		// });
		// document.querySelectorAll('.nal-ostatok button').forEach((x) => {
		// 	x.style.opacity = '0';
		// });
		// document.querySelectorAll('.gus').forEach((x) => {
		// 	x.style.right = '-5px';
		// });

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
	// useEffect(() => {
	// 	function clickDocument(e) {
	// 		if (!e.target.closest('.warehouse-table')) {
	// 			setSelectAll(false);
	// 			let newobj = [...objProduct];
	// 			newobj.map((x) => (x.select = false));
	// 			setObjProduct(newobj);
	// 		}
	// 	}
	// 	if (!selectAll) {
	// 		document.addEventListener('keydown', function (e) {
	// 			if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
	// 				e.preventDefault();
	// 				setSelectAll(true);
	// 				let newobj = [...objProduct];
	// 				newobj.map((x) => {
	// 					if (x.lock) {
	// 						return (x.select = false);
	// 					} else {
	// 						return (x.select = true);
	// 					}
	// 				});
	// 				setObjProduct(newobj);
	// 				console.log('asdasdasd');
	// 			}
	// 		});
	// 	}
	// 	document.addEventListener('click', clickDocument);

	// 	return () => {
	// 		document.removeEventListener('click', clickDocument);
	// 	};
	// }, [selectAll]);
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
	let rowHeight = 20;
	const visibleRows = Math.floor((document.body.clientHeight * 1.5)/ rowHeight);
	// const [visibleRows, setVisible] = useState(Math.round((document.body.clientHeight * 1.5- 140) / 20));
	// Math.floor(document.body.clientHeight * 1.5 / (18 + 18 * zoom))
	function getStart() {
		let temp = start - document.body.clientHeight * 0.5;
		// let temp = start - 50 * rowHeight;
	

		return Math.min(
			objProduct.length - visibleRows - 1,
			Math.floor(temp < 0 ? 0 : temp / rowHeight)
		);

	}

	

	function getTopHeight() {
		// let temp = start - 50 * rowHeight;
		let temp = start - document.body.clientHeight * 0.5;
		// return rowHeight * getStart();
		return rowHeight * Math.min(
				  (objProduct.length - visibleRows - 1),
				  Math.floor(temp < 0 ? 0 : temp / rowHeight)
		);
	}
	function getBottomHeight() {
		// let temp = start - 50 * rowHeight;
		let temp = start - document.body.clientHeight * 0.5;
		// return rowHeight * (objProduct.length - (getStart() + visibleRows + 1));
		return rowHeight * (objProduct.length - (Math.min(
				  (objProduct.length - visibleRows - 1),
				  Math.floor(temp < 0 ? 0 : temp / rowHeight)
				) + visibleRows + 1));
	}
	// function getTopHeight() {


	// 	let temp = top - document.body.clientHeight * 0.5;
	
	// 	return rowHeight * Math.min(
	// 	  (data.length - visible - 1),
	// 	  Math.floor(temp < 0 ? 0 : temp / rowHeight)
	// 	);
	//   }
	
	//   function getStart() {
	// 	let temp = top - document.body.clientHeight * 0.5;
	
	// 	return Math.min(
	// 	  (data.length - visible - 1),
	// 	  Math.floor(temp < 0 ? 0 : temp / rowHeight)
	// 	);
	//   }
	//   function getBottomHeight() {
	// 	let temp = top - document.body.clientHeight * 0.5;
	// 	return rowHeight * (data.length - (Math.min(
	// 	  (data.length - visible - 1),
	// 	  Math.floor(temp < 0 ? 0 : temp / rowHeight)
	// 	) + visible + 1));
	//   }
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
	let isDown = false;
	let startX;
	let scrollLeft;
	function onMouseDown(e) {
		// if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
		isDown = true;
		startX = e.pageX - rootRef.current.el.querySelector('.simplebar-content-wrapper').offsetLeft;
		scrollLeft = rootRef.current.el.querySelector('.simplebar-content-wrapper').scrollLeft;
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
		throttle(() => {
			const x = e.pageX - rootRef.current.el.querySelector('.simplebar-content-wrapper').offsetLeft;
			const walk = (x - startX) * 1.2; //scroll-fast
			rootRef.current.el.querySelector('.simplebar-content-wrapper').scrollLeft = scrollLeft - walk;
		}, 100)();
	}

	async function updateHover(e) {
		clearTimeout(hover);
		if (!document.querySelector('.first-tab-body').classList.contains('hoverOff')) {
			document.querySelector('.first-tab-body').classList.add('hoverOff');
		}
		// document.getElementById("tooltipBtn").style.animation = '';
		// document.getElementById("tooltipBtn").style.fontSize = '12px';
		// timers = setTimeout(function () {

		//   document.querySelector('.disableHover').classList.remove('disable-hover')
		// }, 400);
		hover = setTimeout(() => {
			document.querySelector('.first-tab-body').classList.remove('hoverOff');
		}, 400);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// const scrollableNodeRef = React.createRef();
	async function onScroll(e) {
		// clearTimeout(timer);
		// rootRef.current.recalculate();
		// setInterval(() => {
		setStart(e.target.scrollTop);
		updateHover();
		// setSwitchMenu(false);
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	// x.style.opacity = '1';
		// 	x.classList.remove('showBtn');
		// });
		
	}
	// useEffect(async () => {



	// 	rootRef.current.addEventListener('scroll', onScroll);
	// 	// rootRef.current.addEventListener('mousedown', onMouseDown);
	// 	// rootRef.current.addEventListener('mouseleave', onMouseLeave);
	// 	// rootRef.current.addEventListener('mouseup', onMouseLeave);
	// 	// rootRef.current.addEventListener('mousemove', onMouseMove);
	// 	// rootRef.current.recalculate();
	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('scroll', onScroll);
	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('scroll', onScroll);
	// 	// const simpleBar = new SimpleBar(document.querySelector('.warehouse-table .simplebar-content-wrapper'));
	// 	// simpleBar.addEventListener('scroll', onScroll);
	// 	// simpleBar.getScrollElement();

	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('mousedown', onMouseDown);
	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('mouseleave', onMouseLeave);
	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('mouseup', onMouseLeave);
	// 	// rootRef.current.el
	// 	// 	.querySelector('.simplebar-content-wrapper')
	// 	// 	.addEventListener('mousemove', onMouseMove);

	// 	return () => {
	// 		rootRef.current.removeEventListener('scroll', onScroll);
	// 		// rootRef.current.recalculate();
	// 		// rootRef.current.el
	// 		// 	.querySelector('.simplebar-content-wrapper')
	// 		// 	.removeEventListener('scroll', onScroll);
	// 	};
	// }, [objProduct.length, visibleRows, rowHeight]);
	// function root () {
	// 	return rootRef.current.recalculate();
	// }

	// useEffect(() => {
	// 	rootRef.current.recalculate();
	// 	// rootRef.current.el.querySelector('.simplebar-track simplebar-vertical div').style.transform = `translate3d(0px,${getStart()}px,0px)`;
	// console.log(scrollableNodeRef)
	// }, [start]);
	const [widthColum, setWidthColum] = useState({ id: '', name: '', attribute: '' });

	function width() {
		// let arr = [];
		// document.querySelectorAll('.id-width').forEach((x) => {
		// 	arr.push(x.offsetWidth);
		// });
		// let maxwidth = Math.max(...arr);
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
		// console.log(arr, maxwidth);
		// document.querySelectorAll('.attribute-width').forEach((x) => {
		// 	x.style.width = maxwidth3 + 'px';
		// });
		// widthColum.id = maxwidth;
		widthColum.name = maxwidth2;
		widthColum.attribute = maxwidth3;
		setWidthColum(widthColum);
		// console.log(widthColum)
	}

	// useLayoutEffect(() => {
	// 	width();
	// }, []);
	// useEffect(()=> {
	// 	return () => {
	// 		console.log('unmount')
	// 	}
	// },[])
	// useEffect(() => {
	// 	if (switchMenu) {
	// 		// requestAnimationFrame(() => {
	// 		document.querySelectorAll('.animationFrame').forEach((x) => {
	// 			// x.style.width = '90px';
	// 			// x.style.paddingRight = '10px';
	// 			x.classList.add('show');
	// 			// x.style.animation = 'transform 0.3s forwards'
	// 			x.style.overflow = '';
	// 		});
	// 		document.querySelectorAll('.block-3-btn').forEach((x) => {
	// 			// x.style.maxWidth = '125px';
	// 			// x.style.width = '90px'
	// 			// x.style.paddingRight = '10px';
	// 			x.classList.add('show');
	// 		});
	// 		// setTimeout(() => {
	// 		// 	document.querySelector('.shadow-block').style.height = '100vh';
	// 		// }, 300);
	// 		// });
	// 	} else {
	// 		// requestAnimationFrame(() => {
	// 		document.querySelectorAll('.animationFrame').forEach((x) => {
	// 			// x.style.width = '0px';
	// 			// x.style.paddingRight = '0px';
	// 			x.classList.remove('show');
	// 			// x.style.animation = ''
	// 			x.style.overflow = 'hidden';
	// 		});
	// 		document.querySelectorAll('.block-3-btn').forEach((x) => {
	// 			// x.style.maxWidth = '0px';
	// 			// x.style.width = '0px'
	// 			// x.style.paddingRight = '0px';
	// 			x.classList.remove('show');
	// 		});
	// 		// });
	// 	}
	// }, [switchMenu]);
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
				// scrollableNodeProps={{ref: scrollableNodeRef}}
				className="warehouse-table"
				style={{
					display: 'flex',
					maxHeight: 'calc(100vh - 149px)',
					marginBottom: '10px',
					// maxWidth: 1150,
					width: '100%',
					overflow: 'scroll',
					// height: '800px',
					// willChange:'transform, scroll-position',
					height: document.body.clientHeight - 180 + 'px',
				}}
				autoHide={false}
				// direction={'rtl'}
				ref={rootRef}
				// direction='rtl'
				onScroll={e => throttle(onScroll(e),40)}
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
							{/* <th style={{width: '0px',position:'absolute'}}>
						<div></div>
						</th> */}
							<th className="hoverr">
								<div></div>
							</th>
							{/* <th
								className="sticky-head-row1"
								onMouseEnter={() => setSwitchMenu(true)}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
							>
								????????????
							</th>
							<th
								className="sticky-head-row2"
								onMouseEnter={() => setSwitchMenu(true)}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
							
							
							>
								<div 	style={switchMenu ? { width:'100px' } : {}}>
									<img className="logo-mail" src={crmLogo} alt="" />
									<img className="logo-mail" src={rozetkaLogo} alt="" />
									<img className="logo-mail" src={promLogo} alt="" />
								</div>

								
							</th> */}
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
											{translator.getTranslation('warehouse', 'status')}
										</div>
										<div
											className="animationFrame"
											style={{
												// transition:'0.2s',
												// overflow: 'hidden',
												// width: '0px',
												// paddingRight: '0px',
												justifyContent: 'space-between',
												display: 'flex',
												// height: '16px',
											}}
										>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
											{/* <div className='shadow-block'></div> */}
										</div>
									</div>

									<div
										className="id-width"
										style={{ paddingRight: '10px', width: widthColum.id + 'px' }}
									>
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
											width: widthColum.name - 15 + 'px',
										}}
									>
										{translator.getTranslation('warehouse', 'name')}
									</div>
									<div
										className="attribute-width"
										style={{ paddingRight: '3px', width: widthColum.attribute + 'px' }}
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
						<tr ref={linkTR}>
							<th className="hoverr">
								<div></div>
							</th>
							
							<th className="sticky-head">
								<div className="sticky-block">
									<div
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										className="sticky-block-children"
										style={{ width: '156px', position: 'absolute', left: 0 }}
									>
										<div
											className="width21px"
											style={{
												transition: '0.3s',
												maxWidth: '51px',
												paddingRight: '10px',
												width: '100%',
											}}
										>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'status'}
												translator={translator}
												objProduct={objProduct}
											/>
										</div>
										<div
											// style={switchMenu ? { overflow: '', position:'relative',left:0,width:'max-content' ,paddingLeft:10} : {overflow:'hidden',paddingLeft:0, position:'relative',left:0,width:'0px'}}
											className="block-3-btn"
										>
											<div>
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
												/>
											</div>

											<div style={{ margin: '0 11px' }}>
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
												/>
											</div>
											<div>
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
												/>
											</div>
										</div>
									</div>
									<div style={{ position: 'relative', left: 60, display: 'flex' }}>
										<div
											className="id-width"
											style={{ paddingRight: '10px', width: widthColum.id + 'px' }}
										>
											<WarehouseInput podlozhka={podlozhka} setPodlozhka={setPodlozhka} />
										</div>
										<div style={{ paddingRight: '10px', minWidth: 51, zIndex: 2 }}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'country'}
												objProduct={objProduct}
												setSwitchMenu={setSwitchMenu}
												switchMenu={switchMenu}
												translator={translator}
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
												translator={translator}
												inputOn={true}
												searchLine={searchLine}
												objProduct={objProduct}
												setSwitchMenu={setSwitchMenu}
												switchMenu={switchMenu}
											/>
										</div>
										<div
											className="attribute-width btn"
											style={{
												paddingRight: '3px',
												width: widthColum.attribute + 'px',
												maxWidth: '105px',
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
											/>
										</div>
										<div className="shadow-left"></div>
									</div>
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
							<th className="hoverr" style={{ height: '12px' }}>
								<div></div>
							</th>
							<th className="shadow-vertical" colSpan={1}>
								<div
									onMouseEnter={() => setSwitchMenu(true)}
									onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
									style={switchMenu ? { width: '171px' } : { width: '74px' }}
								></div>
								<div
									style={
										switchMenu ? { width: 'calc(100% - 158px)' } : { width: 'calc(100% - 61px)' }
									}
								></div>
							</th>

							<th colSpan={17} className="shadow-vertical-3">
								<div
									style={{
										width:
											document.querySelector('.warehouse-table')?.offsetWidth -
											document.querySelector('.sticky-body')?.offsetWidth -
											13 +
											'px',
									}}
								></div>
							</th>
						</tr>
					</thead>

					<tbody className="first-tab-body">
						<tr style={{ height: getTopHeight() }}></tr>

						{objProduct.slice(getStart(), getStart() + visibleRows + 1).map((x, index) => (
							<tr
							// style={height}
							// className={
							// 	objProduct[index + getStart()].select && !objProduct[index + getStart()].lock
							// 		? 'select'
							// 		: objProduct[index + getStart()].lock
							// 		? 'lockOrder'
							// 		: ''
							// }
							// onClick={clickTr}
							ref={linkTR}
							// key={index}
							// style={{transition: '0.2s',opacity: 0}}
							onDoubleClick={dblClick}
							key={index + getStart()}
						>
							<td className="hoverr">
								<div></div>
								<div className='div'></div>
							</td>
						
							<td className="sticky-body">
								<div className="sticky-block">
									<div
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										style={{ display: 'flex', height: '20px', alignItems: 'center' }}
									>
										<div style={{ minWidth: '51px', paddingRight: '10px' }}>
											<label className="switch-btn-warehouse">
												<input
													type="checkbox"
													className="status-all"
													// onChange={switchBtn}
													// defaultChecked={objProduct[index].status.all}
													// checked={objProduct[index + getStart()].status.all}
												/>
												<span className="slider round"></span>
											</label>
										</div>
		
										<div
											className="animationFrame"
											style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
										>
											<label
												style={!objProduct[index + getStart()].status.all ? { opacity: 0.4 } : {}}
												className="switch-btn-small"
											>
												<input
													type="checkbox"
													className="status-crm"
													// onChange={switchBtn}
													// defaultChecked={objProduct[index].status.crm}
													// checked={objProduct[index + getStart()].status.crm}
												/>
												<span className="slider round"></span>
											</label>
		
											<label
												style={
													!objProduct[index + getStart()].status.all
														? { opacity: 0.4, margin: '0 15px' }
														: { margin: '0 15px' }
												}
												className="switch-btn-small"
											>
												<input
													type="checkbox"
													className="status-rozetka"
													// onChange={switchBtn}
													// defaultChecked={objProduct[index].status.rozetka}
													// checked={objProduct[index + getStart()].status.rozetka}
												/>
												<span className="slider round"></span>
											</label>
		
											<label
												style={!objProduct[index + getStart()].status.all ? { opacity: 0.4 } : {}}
												className="switch-btn-small"
											>
												<input
													type="checkbox"
													className="status-prom"
													// onChange={switchBtn}
													// defaultChecked={objProduct[index].status.prom}
													// checked={objProduct[index + getStart()].status.prom}
												/>
												<span className="slider round"></span>
											</label>
											<div className="gradi"></div>
										</div>
									</div>
		
									<div
										className="id-width"
										// onMouseLeave={tooltipOff}
										// onMouseEnter={tooltipOn}
										style={
											!objProduct[index + getStart()].status.all
												? {
														color: 'rgba(0,0,0,0.4)',
														textAlign: 'left',
														paddingRight: '10px',
														// width: widthColum.id + 'px',
												  }
												: { textAlign: 'left', paddingRight: '10px', }
										}
									>
										{objProduct[index + getStart()].id}
									</div>
									<div style={{ minWidth: 51, paddingRight: '10px', textAlign: 'center' }}>
										<span
											style={
												!objProduct[index + getStart()].status.all
													? { opacity: 0.4, color: 'rgba(0,0,0,1)' }
													: { color: 'rgba(0,0,0,1)' }
											}
											className="flags"
											// onMouseLeave={tooltipOff}
											// onMouseEnter={tooltipOn}
										>
											{objProduct[index + getStart()].country}
										</span>
									</div>
									<div
										// onMouseLeave={tooltipOff}
										// onMouseEnter={tooltipOn}
										style={
											!objProduct[index + getStart()].status.all
												? {
														color: 'rgba(0,0,0,0.4)',
														textAlign: 'center',
														minWidth: 51,
														paddingRight: '10px',
												  }
												: { textAlign: 'center', minWidth: 51, paddingRight: '10px' }
										}
									>
										{objProduct[index + getStart()].currency}
									</div>
									<div
										className="name-width"
										style={{
											overflow: 'hidden',
											paddingRight: '15px',
											// width: widthColum.name - 15 + 'px',
											maxWidth: '172px',
										}}
									>
										<span
											className={
												objProduct[index + getStart()].podProduct === 0
													? 'arrow'
													: objProduct[index + getStart()].podProduct === 1
													? 'arrowDeg'
													: ''
											}
											style={objProduct[index + getStart()].podProduct === 1 ? { opacity: 0.4 } : {}}
										></span>
										<span
											// onMouseLeave={tooltipOff}
											// onMouseEnter={tooltipOn}
											style={
												!objProduct[index + getStart()].status.all
													? { 
															opacity: 0.4,
															whiteSpace: 'nowrap',
															overflow: 'hidden',
															textOverflow: 'ellipsis',
															display: 'block',
													  }
													: {
															whiteSpace: 'nowrap',
															overflow: 'hidden',
															textOverflow: 'ellipsis',
															display: 'block',
															opacity: `${objProduct[index + getStart()].podProduct === 1 ? 0.4 : ''}`,
													  }
											}
										>
											{objProduct[index + getStart()].name}
										</span>
									</div>
									<div
										className="attribute-width"
										style={!objProduct[index + getStart()].status.all ? { opacity: 0.4 } : {}}
									>
										<img
											style={{ width: 16, height: 16, position: 'absolute' }}
											src={objProduct[index + getStart()].images}
											alt=""
										/>
										<span
											// onMouseLeave={tooltipOff}
											// onMouseEnter={tooltipOn}
											style={{
												marginLeft: 20,
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												display: 'block',
												// width: widthColum.attribute + 'px',
												maxWidth: 85,
											}}
										>
											{objProduct[index + getStart()].attribute}
										</span>
									</div>
									<div className="shadow-left"></div>
								</div>
								{/* <div className='hover'></div> */}
							</td>
		
							{/* <td
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								className="id-tovara while2"
								style={
									!swtichChecked
										? { color: 'rgba(0,0,0,0.4)', textAlign: 'left' }
										: { textAlign: 'left' }
								}
							>
								{objProduct[index].id}
							</td> */}
							{/* <td className="while2" style={{ textAlign: 'center' }}>
								<span style={!swtichChecked ? { opacity: 0.4 } : {}} className="flags">
									{objProduct[index].country}
								</span>
							</td> */}
							{/* <td
								className="while2"
								style={
									!swtichChecked
										? { color: 'rgba(0,0,0,0.4)', textAlign: 'center' }
										: { textAlign: 'center' }
								}
							>
								{objProduct[index].currency}
							</td> */}
							{/* <td className="name-tovara while2" onMouseLeave={tooltipOff} onMouseEnter={tooltipOn}>
								<span
									style={!swtichChecked ? { opacity: 0.4 } : {}}
									className={
										objProduct[index].podProduct === 0
											? 'arrow'
											: objProduct[index].podProduct === 1
											? 'arrowDeg'
											: ''
									}
								>
									{objProduct[index].name}
								</span>
							</td> */}
							{/* <td className="while2">
								<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
									<img
										style={{ width: 16, height: 16, position: 'absolute' }}
										src={objProduct[index].images}
										alt=""
									/>
									<span
										onMouseLeave={tooltipOff}
										onMouseEnter={tooltipOn}
										style={{
											marginLeft: 20,
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											display: 'block',
											maxWidth: 85,
										}}
									>
										{objProduct[index].attribute}
									</span>
								</div>
							</td> */}
		
							{/* <td className="shadow">
								<div className="shadow-left"></div>
							
							</td> */}
							<td
								style={{ paddingLeft: '12px' }}
								onMouseLeave={PlusMinusClose}
								onMouseEnter={PlusMinusOpen}
								className="nal-ostatok"
							>
								<div
									ref={btnRef}
									style={
										!objProduct[index + getStart()].status.all
											? {
													opacity: 0.4,
													display: 'flex',
													justifyContent: 'flex-end',
													paddingRight: '3px',
											  }
											: { display: 'flex', justifyContent: 'flex-end', paddingRight: '3px' }
									}
								>
									<div className="wrap-nal-ostatok" style={{ display: 'flex', position: 'absolute' }}>
										<button
											style={btnMenu ? { width: '16px' } : {}}
											onDoubleClick={(e) => e.stopPropagation()}
											// onClick={BtnMinus}
										>
											<svg
												width="9"
												height="7"
												viewBox="0 0 9 7"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1.26782 3.44748L8.08752 3.44747"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</button>
		
										<input
											ref={inputRef}
											type="text"
											onChange={inputChange}
											onKeyUp={enterInput}
											maxLength={5}
											onClick={(e) => {
												setFocusInput(true);
												setPodlozhka(true);
												setInputFormat(true);
												e.stopPropagation();
											}}
											// value={focusInput && inputFormat ? memoryInput : formatNumber2(+memoryInput)}
											onDoubleClick={(e) => e.stopPropagation()}
											style={{
												color: 'rgba(0,0,0,0.7)',
												// width: inputLength(memoryInput.toString()),
											}}
										/>
		
										<button
											style={btnMenu ? { width: '16px' } : {}}
											onDoubleClick={(e) => e.stopPropagation()}
											// onClick={BtnPlus}
										>
											<svg
												width="15"
												height="15"
												viewBox="3 2 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												style={{ transform: 'rotate(45deg)', marginTop: '1px' }}
											>
												<path
													d="M7.26655 8.03662L12.0888 12.8589"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M7.26655 12.8589L12.0888 8.03659"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M7.26655 8.03662L12.0888 12.8589"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M7.26655 12.8589L12.0888 8.03659"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M7.26655 8.03662L12.0888 12.8589"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M7.26655 12.8589L12.0888 8.03659"
													stroke="black"
													strokeOpacity="0.7"
													strokeWidth="1.09116"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</button>
									</div>
		
									<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)' }}>/</span>
								</div>
							</td>
							<td className="nal-rezerv">
								<div
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
											: { color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
									}
								>
									{formatNumber2(objProduct[index + getStart()].rezerv)}
								</div>
							</td>
							<td className="nal-otpr">
								<div
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
											: { color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
									}
								>
									{formatNumber2(objProduct[index + getStart() ].otpr)}
								</div>
							</td>
							<td className="nal-vozvrat">
								<div
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '15px' }
											: { color: 'rgba(0,0,0,0.5)', paddingRight: '15px' }
									}
								>
									{formatNumber2(objProduct[index+ getStart()].vozvrat)}
								</div>
							</td>
							<td
								style={
									!objProduct[index].status.all
										? {
												color: 'rgba(0,0,0,0.4)',
												textAlign: 'right',
												paddingRight: '15px',
												position: 'relative',
										  }
										: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
								}
							>
								{formatNumber(objProduct[index + getStart()].zakupka)}
							</td>
							<td
								style={
									!objProduct[index + getStart()].status.all
										? {
												color: 'rgba(0,0,0,0.4)',
												textAlign: 'right',
												paddingRight: '15px',
												position: 'relative',
										  }
										: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
								}
							>
								{formatNumber(objProduct[index + getStart()].prodazha)}
							</td>
							<td
								style={
									!objProduct[index + getStart()].status.all
										? {
												color: 'rgba(0,0,0,0.4)',
												textAlign: 'right',
												paddingRight: '15px',
												position: 'relative',
										  }
										: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
								}
							>
								{formatNumber(objProduct[index + getStart()].marzha)}
							</td>
							<td className="summa-suma1">
								<div
									style={
										!objProduct[index + getStart()].status.all
											? {
													opacity: 0.4,
													textAlign: 'right',
													display: 'flex',
													justifyContent: 'end',
													paddingRight: '3px',
											  }
											: {
													textAlign: 'right',
													display: 'flex',
													justifyContent: 'end',
													paddingRight: '3px',
											  }
									}
								>
									{formatNumber(objProduct[index + getStart()].ostatok * objProduct[index + getStart()].zakupka)}
									<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)' }}>/</span>
								</div>
							</td>
							<td className="summa-suma2">
								<div
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, paddingRight: '4px' }
											: { paddingRight: '4px' }
									}
								>
									{formatNumber(objProduct[index + getStart()].suma2)}
								</div>
							</td>
							<td className="summa-suma3">
								<div
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, paddingRight: '4px' }
											: { paddingRight: '4px' }
									}
								>
									{formatNumber(objProduct[index + getStart()].suma3)}
								</div>
							</td>
							<td className="summa-suma4">
								<div style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}>
									{formatNumber(objProduct[index + getStart()].suma4)}
								</div>
							</td>
						</tr>
							// <WarehouseProductList
							// 	index={index + getStart()}
							// 	// rowHeight={rowHeight}
							// 	// style={{ height: rowHeight }}
							// 	indexParent={index}
							// 	widthColum={widthColum}
							// 	key={index + getStart()}
							// 	start={getStart()}
							// 	setChecked={setChecked}
							// 	checked={checked}
							// 	setGetIndex={setGetIndex}
							// 	objProduct={objProduct}
							// 	switchMenu={switchMenu}
							// 	setObjProduct={setObjProduct}
							// 	setSwitchMenu={setSwitchMenu}
							// 	podlozhka={podlozhka}
							// 	setPodlozhka={setPodlozhka}
							// 	focusInput={focusInput}
							// 	setFocusInput={setFocusInput}
							// 	setIndexInput={setIndexInput}
							// 	setLastIndex={setLastIndex}
							// 	lastIndex={lastIndex}
							// 	setBtnMenu={setBtnMenu}
							// 	btnMenu={btnMenu}
							// 	setToggleCard={setToggleCard}
							// 	selectAll={selectAll}
							// 	translator={translator}
							// 	setSelectAll={setSelectAll}
							// 	flagSwitchMenu={flagSwitchMenu}
							// />
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
			</div>
		</div>
	);
};

export default WarehouseBlock;

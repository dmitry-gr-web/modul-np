import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus,Preloaded } from '../../img/svg-pack';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
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
import WarehouseDropInput from './WarehouseDropInput';
import { useFetch } from '../data/useFetch';
import MaxaScroll from './MaxaScroll';

// let timer;
let hover;
let plusminus;

const WarehouseBlock = ({ objProduct, setObjProduct, setToggleCard, setGetIndex, translator }) => {
	const [lastIndex, setLastIndex] = useState(0);
	const [selectAll, setSelectAll] = useState(false);
	// const [checked, setChecked] = useState(true);
	// http://192.168.0.197:3005/folders
	const {data,error,isLoading} = useFetch(''
	// , {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			"query": {},
	// 			"start": 10,
	// 			// "start": props.folder.at(-1)?.id,
	// 			"end": 20
	// 		})
	// 	}
		);
	// console.log(data)
	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	// const [focusInput, setFocusInput] = useState(false);

	// const [indexInput, setIndexInput] = useState(0);
	// const [btnMenu, setBtnMenu] = useState(false);
	// useEffect(()=> {
	// 	let i = 0;
	// 	document.addEventListener('contextmenu', function(e){
	// 		e.preventDefault();
	// 		console.log(e.pageX, e.pageY)
	// 		let div = document.createElement('div');
	// 		i++;
	// 		div.innerHTML = `eblo tupoe`
	// 		div.style.cssText = `
	// 			position: absolute;
	// 			top:${e.pageY}px;
	// 			left:${e.pageX}px;
	// 		`
	// 		document.querySelector('#root').append(div);
			
	// 	})
	// })
	const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
	// console.log('block')
	function clickPodlozhka() {
		setPodlozhka(false);
		setHideMenu(false);
		// hover = setTimeout(() => {
		// 	setHideMenu(false)
		// }, 400);
		// setFocusInput(false);
		setFlagSwitchMenu(false);
		setSwitchMenu(false);

		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.classList.remove('hide-menu');
		// });
		document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
			x.style.zIndex = 1;
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '22px';
		});
		document.querySelectorAll('.telOperator .warehouse-dropmenu').forEach((x) => {
			x.style.minWidth = '22px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
		// let input = document.querySelectorAll('.nal-ostatok input')[indexInput];
		// if (input.value.length >= 4) {
		// 	// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
		// 	input.style.width = input.value.length * 7 + 3 + 'px';
		// }
		// if (input.value.length >= 7) {
		// 	input.style.width = input.value.length * 7 + 7 + 'px';
		// }
		// if (input.value.length < 4) {
		// 	input.style.width = input.value.length * 7 + 'px';
		// }
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
	// const [ostatok , setostatok] = useState('');
	// const [rezerv , setrezerv] = useState('');
	// const [otpr , setotpr] = useState('');
	// const [vozvrat , setvozvrat] = useState('');
	// const [zakupka , setzakupka] = useState('');
	// const [prodazha , setprodazha] = useState('');
	// const [marzha , setmarzha] = useState('');
	// const [suma1 , setsuma1] = useState('');
	// const [suma2 , setsuma2] = useState('');
	// const [suma3 , setsuma3] = useState('');
	// const [suma4 , setsuma4] = useState('');
	function tooltipOn(e,html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '14px';
		// if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
		// 	plusminus = setTimeout(() => {
		// 		tooltipBlock.innerText = e.target.innerText;
		// 		tooltipBlock.style.left = posElement.x + 'px';
		// 		tooltipBlock.style.top = posElement.y + 23 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// } 
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'status')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'status');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === 'ID') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'id');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'country')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'country');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'currency')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'currency');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'name')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'name');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'attribute')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'attribute');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'available')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'available');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'purchase')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'purchase');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'sales')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sales');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'margin')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'margin');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'total')) {
			plusminus = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'total');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 40 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-ostatok') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/','');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-rezerv') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-otpr') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-vozvrat') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-marzha') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-margin') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-zakupka') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-purchase') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-prodazha') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-sale') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma1') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/','');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma2') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';

			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma3') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma4') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltipBlock.style.fontSize = '12px';
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
	

	}

	function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const [pereschetiHeaders, setPereschetiHeaders] = useState(null);
	useLayoutEffect(()=> {
		let ostatok = formatNumber2(objProduct.reduce((prev, curr) => {
			return prev + (+curr.ostatok.replace(/\s/gmu,''))
		}, 0))
		let rezerv = formatNumber2(objProduct.reduce((prev, curr) => {
			return prev + (+curr.rezerv.replace(/\s/gmu,''))
		}, 0))
		let otpr = formatNumber2(objProduct.reduce((prev, curr) => {
			return prev + (+curr.otpr.replace(/\s/gmu,''))
		}, 0))
		let vozvrat = formatNumber2(objProduct.reduce((prev, curr) => {
			return prev + (+curr.vozvrat.replace(/\s/gmu,''))
		}, 0))
		let zakupka = formatNumber(objProduct.reduce((prev, curr,_,array) => {
			return prev + (+curr.zakupka.replace(/\s/gmu,'')) / array.length;
		}, 0))
		let prodazha = formatNumber(objProduct.reduce((prev, curr,_,array) => {
			return prev + (+curr.prodazha.replace(/\s/gmu,'')) / array.length;
		}, 0))
		let marzha = formatNumber(objProduct.reduce((prev, curr,_,array) => {
			return prev + (+curr.marzha.replace(/\s/gmu,'')) / array.length;
		}, 0))
		let suma1 = formatNumber(objProduct.reduce((prev, curr) => {
			return prev + (+curr.suma1.replace(/\s/gmu,''))
		}, 0))
		let suma2 = formatNumber(objProduct.reduce((prev, curr) => {
			return prev + (+curr.suma2.replace(/\s/gmu,''))
		}, 0))
		let suma3 = formatNumber(objProduct.reduce((prev, curr) => {
			return prev + (+curr.suma3.replace(/\s/gmu,''))
		}, 0))
		let suma4 = formatNumber(objProduct.reduce((prev, curr) => {
			return prev + (+curr.suma4.replace(/\s/gmu,''))
		}, 0))
	
		setPereschetiHeaders({
			ostatok: ostatok,
			rezerv:rezerv,
			otpr:otpr,
			vozvrat:vozvrat,
			zakupka:zakupka,
			prodazha:prodazha,
			marzha:marzha,
			suma1:suma1,
			suma2:suma2,
			suma3:suma3,
			suma4:suma4,
		});
	},[objProduct])
	const refScroll = useRef();
	// const rootRef = useRef();
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
		startX = e.pageX - refScroll.current?.querySelector('.contentScroll').offsetLeft;
		scrollLeft = refScroll.current?.querySelector('.contentScroll').scrollLeft;
		// } else {
		// 	isDown = false;
		// }
	}

	function onMouseLeave(e) {
		isDown = false;
	}

	function onMouseMove(e) {
		if (!isDown) return;
		updateHover();
		// e.preventDefault();
		_.throttle(() => {
			const x = e.pageX - refScroll.current?.querySelector('.contentScroll').offsetLeft;
			const walk = (x - startX) * 1.2; //scroll-fast
			refScroll.current.querySelector('.contentScroll').scrollLeft = scrollLeft - walk;
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
	const btnUp = useRef();
	useEffect(() => {
		if(btnUp.current){
			if (start > 600) {
				btnUp.current.style.visibility = 'visible';
			} else {
				btnUp.current.style.visibility = 'hidden';
			}
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
	// const [percentScroll, setPercentScroll] = useState(0.87);
	// const percentScroll = 0.87;

	useEffect(() => {
		// console.log(refScroll.current.querySelector('.contentScroll'))
		setTimeout(() => {
			if(refScroll.current) {
				refScroll.current.querySelector('.contentScroll').addEventListener('mousedown', onMouseDown);
				refScroll.current.querySelector('.contentScroll').addEventListener('mouseleave', onMouseLeave);
				refScroll.current.querySelector('.contentScroll').addEventListener('mouseup', onMouseLeave);
				refScroll.current.querySelector('.contentScroll').addEventListener('mousemove', onMouseMove);
			}
		}, 500);
	

		

		// return ()=> {
		// 	setTimeout(() => {
		// 		refScroll.current.querySelector('.contentScroll').removeEventListener('mousedown', onMouseDown);
		// 		refScroll.current.querySelector('.contentScroll').removeEventListener('mouseleave', onMouseLeave);
		// 		refScroll.current.querySelector('.contentScroll').removeEventListener('mouseup', onMouseLeave);
		// 		refScroll.current.querySelector('.contentScroll').removeEventListener('mousemove', onMouseMove);
		// 	}, 500);

		// }


	}, []);
	// console.log(percentScroll)

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



	//adaptive scroll height dlya Valeri
	const queryWidthTr = useRef();


	const [dimensions, setDimensions] = useState(null);

	useLayoutEffect(() => {
	  if (queryWidthTr.current) {
	
			setDimensions({
				width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
				width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
				width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
				width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
				widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
				widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
				widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
				widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,
				
			  });
	
	
	  }
	}, [pereschetiHeaders]);
	useEffect(() => {
	 setTimeout(() => {
		setDimensions({
			width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
			width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
			width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
			width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
			widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
			widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
			widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
			widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,
			
		  });
	 }, 600);

	}, []);
	//adaptive scroll height dlya Valeri
	// const tablescroll = useRef();

	const [hideArrow, setHideArrow]=useState(false);
	// function treugolnikEpptaOn () {
	// 	setHideArrow(true);

	// }
	// function treugolnikEpptaOff () {
	// 	setHideArrow(false);

	// }

	return (
		<>
		{isLoading ? <div className='loading'><Preloaded/></div> :<div className="warehouse-products">
			<div className="warehouse-products-title">
				<hr/>
				<span>{translator.getTranslation('warehouse', 'goods')}</span>
				<button>
					<SvGBtnPlus />
				</button>
			</div>
			<div className="shadow-right"></div>

			<div
				style={{
					position: 'relative',
					// maxHeight: 'calc(100vh - 170px)',
					width: '100%',
					// height: 'calc(100vh - 216px)',
					height: 'calc(100vh - 210px)',
				}}
				ref={refScroll}
			>
				{/* <ScrollBox
					ref={rootRef}
					// scrollVertMinus={0.07}
		
					setHideArrow={setHideArrow}
					percent={percentScroll}
					setPercentScroll={setPercentScroll}
					podlozhka={podlozhka}
					scroll={_.throttle(onScroll, 500)}
					color="rgba(0, 0, 0, 0.3)"
				> */}
				<MaxaScroll
					// ref={rootRef}
					// scrollVertMinus={0.07}
		
					setHideArrow={setHideArrow}
				
					updateHover={updateHover}
					podlozhka={podlozhka}
					infiniteScroll={_.throttle(onScroll, 500)}
			
				>

					<table
						tabIndex={-1}
						style={{ width: '100%' }}
				
						className='warehouse-table'
						// onMouseEnter={}
						// style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
					>
						<thead 
						// onMouseEnter={treugolnikEpptaOn} onMouseLeave={treugolnikEpptaOff}
						 className="first-tab-header">
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
													cursor:'help'
												}}
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
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

										<div className="id-width" style={{ paddingRight: '10px',cursor:'help'}}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											ID
										</div>
										<div 	onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff} style={{cursor:'help', paddingRight: '10px', minWidth: 51 }}>
											{translator.getTranslation('warehouse', 'country')}
										</div>
										<div 	onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff} style={{cursor:'help', paddingRight: '10px', minWidth: 51 }}>
											{translator.getTranslation('warehouse', 'currency')}
										</div>
										<div
											className="name-width"
											style={{
												paddingRight: '15px',
												justifyContent: 'center',
												width: 200,
												cursor:'help'
												// width: widthColum.name - 15 + 'px',
												// maxWidth: '172px',
											}}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											{translator.getTranslation('warehouse', 'name')}
										</div>
										<div
											className="attribute-width"
											style={{
												// paddingRight: '3px',
												//  width: widthColum.attribute + 'px',
												width: 150,
												cursor:'help'
												// whiteSpace:'pre'
											}}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
										>
											{translator.getTranslation('warehouse', 'attribute')}
										</div>
										<div className="shadow-left"></div>
									</div>
								</th>

								<th 
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
								style={{ paddingLeft: '12px', paddingRight: '10px',cursor:'help' }} colSpan={4}>
									{translator.getTranslation('warehouse', 'available')}
								</th>
								<th 
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
								style={{ paddingRight: '10px' ,cursor:'help'}}>
									{translator.getTranslation('warehouse', 'purchase')}
								</th>
								<th 
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
								style={{ paddingRight: '10px',cursor:'help' }}>
									{translator.getTranslation('warehouse', 'sales')}
								</th>
								<th 
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
								style={{ paddingRight: '10px',cursor:'help' }}>
									{translator.getTranslation('warehouse', 'margin')}
								</th>
								<th 
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
										style={{cursor:'help'}}
								colSpan={4}>{translator.getTranslation('warehouse', 'total')}</th>
							</tr>
							<tr>
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
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
												/>
											</div>
											<div
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												// style={switchMenu ? { overflow: '', position:'relative',left:0,width:'max-content' ,paddingLeft:10} : {overflow:'hidden',paddingLeft:0, position:'relative',left:0,width:'0px'}}
												className="block-3-btn"
											>
												
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
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
												
													/>
											

											
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
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
											
								
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
														hideArrow={hideArrow}
														hideMenu={hideMenu}
														setHideMenu={setHideMenu}
													/>
											
												{/* {console.log(document.querySelectorAll('.block-3-btn').children)} */}
											</div>
										</div>
										<div
											style={{
												position: 'relative',
												left: 74,
												// display: `${switchMenu ? 'none' : 'flex'}`,
												display: `flex`,
												visibility: `${switchMenu ? 'hidden': ''}`,
												zIndex: 4,
											}}
										>
											<div
												className="id-width"
												style={{ paddingRight: '10px' }}
											>
												<WarehouseInput 
												podlozhka={podlozhka} 
												setPodlozhka={setPodlozhka} 
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
												/>
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
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
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
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
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
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
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
													hideArrow={hideArrow}
													hideMenu={hideMenu}
													setHideMenu={setHideMenu}
												/>
											</div>
										</div>
										<div className="shadow-left" style={{ height: 40 }}></div>
									</div>
								</th>

								{/* <th style={{ paddingLeft: '12px', paddingRight: '3px' }}>
									<div style={{ width: 'calc(100% - 7px)', height: 20 }}>
								
										
									</div>
								</th> */}
								{/* <th className="" style={{ paddingRight: '4px', position: 'relative' }}>
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
								</th> */}
								<th colSpan={4} style={{paddingLeft:'12px', paddingRight: '10px', position: 'relative' }}>
									<div className='block-4-btn' style={{display:'flex', position:'absolute', top:0,right:10,visibility: `${switchMenu ? 'hidden': ''}`}}>
										{dimensions && <><div className='ostatokBtn' style={{height: 20,paddingRight:3,display:'flex',position:'relative'}}>
											<WarehouseDropRange
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												sortActive={sortActive}
												adaptive={true}
												width={dimensions.width1-15}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='rezervBtn' style={{height: 20,paddingRight:4,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={true}
												width={dimensions.width2-4}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='otprBtn' style={{height: 20,paddingRight:4,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												width={dimensions.width3-4}
												adaptive={true}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='vozvratBtn' style={{height: 20,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={true}
												width={dimensions.width4-10}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div></>}
									</div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
									<div style={{height: 20,visibility: `${switchMenu ? 'hidden': ''}`}}>

									
										<WarehouseDropInput 
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											translator={translator}
											zIndex={true}
											adaptive={false}
											// width={dimensions.width3-4}
											// adaptive={true}
											sortActive={sortActive}
											setSortActive={setSortActive}
											hideArrow={hideArrow}
											hideMenu={hideMenu}
											setHideMenu={setHideMenu}
										/>
									</div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
									<div style={{height:20,visibility: `${switchMenu ? 'hidden': ''}` }}>
										<WarehouseDropInput 
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											translator={translator}
											zIndex={true}
											adaptive={false}

											// width={dimensions.width3-4}
											// adaptive={true}
											sortActive={sortActive}
											setSortActive={setSortActive}
											hideArrow={hideArrow}
											hideMenu={hideMenu}
											setHideMenu={setHideMenu}
										/>
									</div>
									
								</th>
								<th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative' }}>
									<div style={{height: 20 ,visibility: `${switchMenu ? 'hidden': ''}` }}>
										<WarehouseDropInput 
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											translator={translator}
											zIndex={true}
											adaptive={false}

											// width={dimensions.width3-4}
											// adaptive={true}
											sortActive={sortActive}
											setSortActive={setSortActive}
											hideArrow={hideArrow}
											hideMenu={hideMenu}
											setHideMenu={setHideMenu}
										/>
									</div>
									
								</th>
								<th colSpan={4} style={{ position: 'relative' }}>
									<div className='block-4-btn' style={{display:'flex', position:'absolute', top:0,right: 0,visibility: `${switchMenu ? 'hidden': ''}`}}>
										{dimensions && <><div className='suma1Btn' style={{height: 20,paddingRight:3,display:'flex',position:'relative'}}>
											{/* <WarehouseDropRange
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												sortActive={sortActive}
												adaptive={true}
												width={dimensions.widthsuma1}
												setSortActive={setSortActive}
												
											/> */}
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={true}
												width={dimensions.widthsuma1-3}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='suma2Btn' style={{height: 20,paddingRight:4,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={true}
												width={dimensions.widthsuma2-4}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='suma3Btn' style={{height: 20,paddingRight:4,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												width={dimensions.widthsuma3-4}
												adaptive={true}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div>
										<div className='suma4Btn' style={{height: 20,display:'flex',position:'relative'}}>
											<WarehouseDropInput 
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												translator={translator}
												zIndex={true}
												adaptive={true}
												width={dimensions.widthsuma4}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												hideMenu={hideMenu}
												setHideMenu={setHideMenu}
											/>
										</div></>}
									</div>
								</th>
							</tr>
							<tr ref={queryWidthTr}>
								<th style={{ position: 'sticky', left: 0, background: 'white', zIndex: 2 }}></th>
								<th style={{ paddingLeft: '12px', paddingRight: '3px' }} className="nal-ostatok"
									onMouseEnter={tooltipOn}
									onMouseLeave={tooltipOff}
								>
									<div
										style={{
											textAlign: 'right',
											display: 'flex',
											justifyContent: 'end',
											color: 'rgba(0,0,0,0.9)',
										}}
									>
										{pereschetiHeaders && pereschetiHeaders.ostatok}
										{/* {formatNumber2(ostatok)} */}
										{/* {ostatok} */}
										<span style={{ paddingLeft: 3,zIndex:0, pointerEvents: 'none' }}>/</span>
									</div>
								</th>
								<th className="nal-rezerv" style={{ paddingRight: '4px' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}>
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber2(rezerv)} */}
										{pereschetiHeaders && pereschetiHeaders.rezerv}
									</div>
									<span style={{pointerEvents: 'none'}}></span>
								</th>
								<th className="nal-otpr" style={{ paddingRight: '4px' }}
										onMouseEnter={tooltipOn}
										onMouseLeave={tooltipOff}
								>
									{/* <div style={{ color: 'rgba(0,0,0,0.7)'}}>{formatNumber2(otpr)}</div> */}
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>{pereschetiHeaders && pereschetiHeaders.otpr}</div>
									<span style={{pointerEvents: 'none'}}></span>
								</th>
								<th className="nal-vozvrat" style={{ paddingRight: '10px' }}
											onMouseEnter={tooltipOn}
											onMouseLeave={tooltipOff}
								>
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>{pereschetiHeaders && pereschetiHeaders.vozvrat}</div>
									{/* <div style={{ color: 'rgba(0,0,0,0.7)'}}>{formatNumber2(vozvrat)}</div> */}
									<span style={{pointerEvents: 'none'}}></span>
								</th>
								<th className='nal-zakupka' style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
												onMouseEnter={tooltipOn}
												onMouseLeave={tooltipOff}
								>
									<div>{pereschetiHeaders && pereschetiHeaders.zakupka}</div>
									{/* <div>{formatNumber(zakupka)}</div> */}
								</th>
								<th style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
								className='nal-prodazha'
								onMouseEnter={tooltipOn}
								onMouseLeave={tooltipOff}>
									{/* <div>{formatNumber(prodazha)}</div> */}
									<div>{pereschetiHeaders && pereschetiHeaders.prodazha}</div>
								</th>
								<th style={{ textAlign: 'right', paddingRight: '10px', color: 'rgba(0,0,0,0.9)' }}
								className='nal-marzha'
								onMouseEnter={tooltipOn}
								onMouseLeave={tooltipOff}>
									{/* <div>{formatNumber(marzha)}</div> */}
									<div>{pereschetiHeaders && pereschetiHeaders.marzha}</div>
								</th>
								<th className="summa-suma1"
									onMouseEnter={tooltipOn}
									onMouseLeave={tooltipOff}
									>
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
										{pereschetiHeaders && pereschetiHeaders.suma1}
										<span style={{ paddingLeft: 3, pointerEvents: 'none' }}>/</span>
									</div>
								</th>
								<th className="summa-suma2"
									onMouseEnter={tooltipOn}
									onMouseLeave={tooltipOff}>
									<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma2)} */}
										{pereschetiHeaders && pereschetiHeaders.suma2}
									</div>
									<span style={{pointerEvents: 'none'}}></span>
								</th>
								<th className="summa-suma3"
									onMouseEnter={tooltipOn}
									onMouseLeave={tooltipOff}>
									<div style={{ paddingRight: '4px', color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma3)} */}
										{pereschetiHeaders && pereschetiHeaders.suma3}
									</div>
									<span style={{pointerEvents: 'none'}}></span>
								</th>
								<th className="summa-suma4"
								onMouseEnter={tooltipOn}
								onMouseLeave={tooltipOff}
								>
									<div style={{ color: 'rgba(0,0,0,0.7)' }}>
										{/* {formatNumber(suma4)} */}
										{pereschetiHeaders && pereschetiHeaders.suma4}
									</div>
									<span style={{pointerEvents: 'none'}}></span>
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
								objProduct.slice(getStart(), getStart() + visibleRows +1).map((x, index, arr) => (
									<WarehouseProductList
										index={index + getStart()}
										// rowHeight={rowHeight}
										// style={{ height: rowHeight }}
										// indexParent={index}
										// widthColum={widthColum}
										key={index + getStart()}
										// start={getStart()}
										// rowHeight={rowHeight}
										// setChecked={setChecked}'
										setHideMenu={setHideMenu}
										hideMenu={hideMenu}
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
										// setIndexInput={setIndexInput}
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
								<td colSpan={18} style={{ height: 18 }}>
									<div className="shadow-vertical-footer"></div>
									<div style={{position:'absolute',bottom:0,left:0,height:8,width:'100%',background:'white'}}></div>
								</td>
							</tr>
						</tfoot>
					</table>

				</MaxaScroll>
				{/* </ScrollBox> */}
			</div>

			<div ref={btnUp} onClick={clickScrollUp} className="btnUp">
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
		</div>}
		</>
	);
};

export default WarehouseBlock;

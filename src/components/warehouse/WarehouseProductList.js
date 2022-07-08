import React, { useEffect, useState, useRef, useMemo } from 'react';
import StatusBlock from './statusBlock';
// import ProductCard from '../warehouse/Warehouse';
// import PodProductList from './PodProductList';
// import useOutsideAlert from './outSideHook';
// import WarehouseDropMenu from './WarehouseDropMenu'
import { Minus, Plus } from '../../img/svg-pack';
import SimpleDropMenu from './SimpleDropMenu'
let tooltip;
let plusminus;
const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	switchMenu,
	index,
	setObjProduct,
	podlozhka,
	setPodlozhka,
	// focusInput,
	// setFocusInput,
	// setIndexInput,
	lastIndex,
	setLastIndex,
	setLoadedLabelBlock,
	loadedLabelBlock,
	flagSwitchMenu,
	translator,
	// start,
	// widthColum,
	// setHideMenu,
	setToggleCard,
	setGetIndex,
	hideMenu,
	setHideMenu
	// rowHeight
	// hoverWidth,
	// setHoverWidth,
}) => {
	// const [inputFormat, setInputFormat] = useState(false);
	// const [ref, isShow, setIsShow ] = useOutsideAlert(false);

	// console.log('list')
	function switchBtn(e) {
		e.stopPropagation();
		if (e.target.className === 'status-all') {
			let newobj = [...objProduct];
			newobj[index].status.all = !newobj[index].status.all;
			if (newobj[index].status.all === false) {
				newobj[index].status.rozetka = false;
				newobj[index].status.prom = false;
				newobj[index].status.crm = false;
			} else {
				newobj[index].status.rozetka = true;
				newobj[index].status.prom = true;
				newobj[index].status.crm = true;
			}
			setObjProduct(newobj);
			// console.log(objProduct);
		}
		if (e.target.className === 'status-rozetka') {
			let newobj = [...objProduct];
			newobj[index].status.rozetka = !newobj[index].status.rozetka;
			if (newobj[index].status.rozetka === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-prom') {
			let newobj = [...objProduct];
			newobj[index].status.prom = !newobj[index].status.prom;
			if (newobj[index].status.prom === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-crm') {
			let newobj = [...objProduct];
			newobj[index].status.crm = !newobj[index].status.crm;
			if (newobj[index].status.crm === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
	}
	function tooltipOn(e, html) {
		// e.stopPropagation();
		// clearTimeout(plusminus);
		// const tooltipBlock = document.getElementById('tooltipBtn');
		// let posElement = e.currentTarget.getBoundingClientRect();
		// // tooltipBlock.innerHTML = html;
		// tooltipBlock.style.fontSize = '14px';
		// console.log(e);
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			tooltip = setTimeout(() => {
				// tooltipBlock.innerHTML = html;

				tooltipBlock.innerText = e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		} else {
			if (e.currentTarget.className === 'attribute-width') {
				// console.log(e.currentTarget.children[0].getAttribute('src'))
				const src = e.currentTarget.children[0].getAttribute('src');
				const memory = e.currentTarget.children[1].innerText;
				const img = `<img style='width:100%;height:100%;object-fit:cover;padding-bottom:3px' src="${src}"/>`;
				const heightPlus = posElement.y + tooltipBlock.offsetHeight;
				const viewportHeight = document.body.clientHeight;
				tooltip = setTimeout(() => {
					// tooltipBlock.innerHTML = html;
					if (heightPlus > viewportHeight) {
						tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column-reverse;width:300px;height:300px'>${memory}${img}</div>`;
						tooltipBlock.style.left = posElement.x + 'px';
						tooltipBlock.style.top = posElement.y - tooltipBlock.offsetHeight - 5 + 'px';
					} else {
						tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column;width:300px;height:300px'>${memory}${img}</div>`;
						tooltipBlock.style.left = posElement.x + 'px';
						tooltipBlock.style.top = posElement.y + 23 + 'px';
					}

					tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
				}, 250);
			}
		}
		if (e.currentTarget.innerText === '🇺🇦') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇷🇺') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇹🇷') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}

		if (e.currentTarget.innerText === '€') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '₽') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '₴') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '$') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'slider round') {
			// e.currentTarget.querySelector('.checkbox').checked
			// console.log('asdasdass')
			tooltip = setTimeout(() => {

				if (e.target.offsetParent.children[0].checked) {
					tooltipBlock.innerText = html;
				} else {
					tooltipBlock.innerText = html;
				}

				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);


		}
		if (e.currentTarget.className === 'wrap-nal-ostatok' && !addPrice) {
			// e.currentTarget.querySelector('.checkbox').checked
			//  console.log(e);
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + memoryInput;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		// if (e.currentTarget.className === 'memoryCena') {
		// 	// e.currentTarget.querySelector('.checkbox').checked
		// 	//  console.log(e);
		// 	let block = focus.current.querySelector('.memoryCena').offsetWidth;
		// 	// console.log(block)
		// 	// tooltipBlock.style.fontSize = '10px';
		// 	tooltip = setTimeout(() => {
		// 		tooltipBlock.innerHTML = `Добавляется товаров: ${memoryCena}<br>Итого товаров на складе: ${memoryInput}`;
		// 		tooltipBlock.style.left = posElement.x + block + 'px';
		// 		tooltipBlock.style.top = posElement.y - 14 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// }
		if (e.currentTarget.className === 'nal-rezerv') {
			// e.currentTarget.querySelector('.checkbox').checked
			// console.log(+e.target.innerText.replace(/\s/gu, ''))
			let res = +e.target.innerText.replace(/\s/gu, '') === +memoryInput.replace(/\s/gu, '') ? '' : +e.target.innerText.replace(/\s/gu, '') - +memoryInput.replace(/\s/gu, '');
			let newres = res.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0, });
			tooltip = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText + (res === '' ? '' : `<br>Не хватает : ${newres}`);
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-otpr') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-vozvrat') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		// if (e.currentTarget.className === 'nal-marzha') {
		// 	// e.currentTarget.querySelector('.checkbox').checked
		// 	tooltip = setTimeout(() => {
		// 		tooltipBlock.innerText = 'Средняя закупка по складу: ' + e.target.innerText;
		// 		tooltipBlock.style.left = posElement.x + 'px';
		// 		tooltipBlock.style.top = posElement.y + 23 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// }
		// if (e.currentTarget.className === 'nal-zakupka') {
		// 	// e.currentTarget.querySelector('.checkbox').checked
		// 	tooltip = setTimeout(() => {
		// 		tooltipBlock.innerText = 'Средняя закупка по складу: ' + e.target.innerText;
		// 		tooltipBlock.style.left = posElement.x + 'px';
		// 		tooltipBlock.style.top = posElement.y + 23 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// }
		// if (e.currentTarget.className === 'nal-prodazha') {
		// 	// e.currentTarget.querySelector('.checkbox').checked
		// 	tooltip = setTimeout(() => {
		// 		tooltipBlock.innerText = 'Средняя цена продажи: ' + e.target.innerText;
		// 		tooltipBlock.style.left = posElement.x + 'px';
		// 		tooltipBlock.style.top = posElement.y + 23 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// }
		if (e.currentTarget.className === 'summa-suma1') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + e.target.innerText.replace('/', '');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma2') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma3') {
			// e.currentTarget.querySelector('.checkbox').checked
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
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
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
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
		// if (e.currentTarget.className === 'lockOrder speed') {
		// 	let posElement = e.currentTarget.getBoundingClientRect();
		// 	const tooltipBlock = document.getElementById('tooltipBtn');
		// 	tooltipBlock.style.fontSize = '12px';
		// 	plusminus = setTimeout(() => {
		// 		const name = 'Олександр';
		// 		tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
		// 		tooltipBlock.style.left = posElement.x + 'px';
		// 		tooltipBlock.style.top = posElement.y + 23 + 'px';
		// 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
		// 	}, 250);
		// }

		// console.log(e.target.querySelector('input'))
	}

	function tooltipOff() {
		clearTimeout(tooltip);
		// const tooltipBlock = document.getElementById('tooltipBtn');
		// tooltipBlock.style.fontSize = '12px';
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok); // input-+
	const [addPrice, setAddPrice] = useState(false); // menu pri +
	const [memoryCena, setMemoryCena] = useState(0); // input+- vnutri menu
	const [cena, setCena] = useState(''); //cena zakupki
	const [kurs, setKurs] = useState(''); // kurs
	const [itogoZakupka, setItogoZakupka] = useState(''); // summa
	const [pri4ina, setPri4ina] = useState('');
	const linkTR = useRef();
	const cenaBlock = useRef();
	const [flagForZakupka, setFlagForZakupka] = useState(false);
	const [memoryChange, setMemoryChange] = useState(objProduct[index]?.ostatok); // stariy input

	// console.log(memoryCena)
	function BtnMinus(e) {
		// let oldinput = +memoryChange.replace(/\s/gmu, '');
		if (memoryInput !== '0') {
			// e.stopPropagation();
			setPodlozhka(true);
			setAddPrice(true);
			setFlag(true);
			setHideMenu(true);
			let inputFormat = +memoryInput.replace(/\s/gmu, '');
			// let oldinput = +memoryChange.replace(/\s/gmu, '');
			// let ostatok = newobj[index].ostatok;
			if ((+memoryChange.replace(/\s/gmu, '')) < (+memoryInput.replace(/\s/gmu, ''))) {
				let newMemoryCena = memoryCena === 1 && inputFormat !== 1 ? memoryCena - 2 : inputFormat === 1 ? memoryCena : memoryCena - 1;
				setMemoryCena(newMemoryCena);
				// input = input.toLocaleString('ru-RU', {
				// 		minimumFractionDigits: 0,
				// 		maximumFractionDigits: 0,
				// 	});
				let newinput = memoryCena === 1 && inputFormat !== 1 ? inputFormat - 2 : inputFormat === 1 ? inputFormat : inputFormat - 1;
				setMemoryInput(newinput.toString());

				if (cena !== '') {
					let text = +cena.replace(/\s/gmu, '');
					let textKurs = +kurs.replace(/\s/gmu, '')
					let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
					let text3 = newMemoryCena * (+text) * (+textKurs);
					if (kurs === '') {
						setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
					} else {
						setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
					}
				}
				setTimeout(() => {
					focus.current.querySelector('.input-search')?.focus();
					// focus.current.querySelector('.prichinaInput').focus();
					// focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				}, 300);
			} else {
				let newMemoryCena = memoryCena - 1;
				setMemoryCena(newMemoryCena);
				let newinput = inputFormat - 1;
				setMemoryInput(newinput.toString());
				// setTimeout(() => {
				// 	// focus.current.querySelector('.input-search').focus();
				// 	focus.current.querySelector('.prichinaInput')?.focus();
				// 	focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				// }, 300);
				setPrichinaFocus(true);
				// if (cena !== '') {
				// 	let text = +cena.replace(/\s/gmu, '');
				// 	let textKurs = +kurs.replace(/\s/gmu, '')
				// 	let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
				// 	let text3 = newMemoryCena * (+text) * (+textKurs);
				// 	if (kurs === '') {
				// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	} else {
				// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	}
				// }
				console.log(newMemoryCena , newinput)
			}
			linkTR.current.classList.add('hover-disabled');
			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				x.classList.remove('showBtn');
			});
			// setTimeout(() => {
			// 	focus.current.querySelector('.input-search').focus();
			// 	focus.current.querySelector('.prichinaInput').focus();
			// 	focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
			// }, 300);
			focus.current?.closest('.nal-ostatok')?.classList.add('showBtn')
			document.querySelector('.contentScroll').style.overflow = 'hidden';
			document.querySelector('.track-vertical').style.opacity = 0;
			document.querySelector('.track-horizontal').style.opacity = 0;
			document.getElementById('tooltipBtn').style.animation = '';


		}
		// if (memoryChange === '0' && newMemoryCena === 0) {

		// document.querySelector('.contentScroll').style.overflow = 'auto';
		// document.querySelector('.track-vertical').style.opacity = 1;
		// document.querySelector('.track-horizontal').style.opacity = 1;

		// objProduct[index].ostatok = memoryChange;
		// linkTR.current.classList.remove('hover-disabled');
		// setObjProduct([...objProduct]);
		// setMemoryInput(memoryChange);
		// setListenChangeSuppliers('');
		// setKurs('');
		// setCena('');
		// setItogoZakupka('');
		// setPri4ina('');
		// setMemoryCena(0);
		// setAddPrice(false);
		// setFlag(false);
		// setPodlozhka(false);
		// setHideMenu(false);
		// }

	}

	function BtnPlus(e) {
		e.stopPropagation();
		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		let newMemoryCena = memoryCena === -1 ? memoryCena + 2 : memoryCena + 1;
		setMemoryCena(newMemoryCena);
		let inputFormat = +memoryInput.replace(/\s/gmu, '');
		let newinput = memoryCena === -1 ? inputFormat + 2 : inputFormat + 1;
		// input = input.toLocaleString('ru-RU', {
		// 		minimumFractionDigits: 0,
		// 		maximumFractionDigits: 0,
		// 	});
		setMemoryInput(newinput.toString());
		console.log(newMemoryCena , newinput)
		if (cena !== '') {
			let text = +cena.replace(/\s/gmu, '');
			let textKurs = +kurs.replace(/\s/gmu, '')
			let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
			let text3 = newMemoryCena * (+text) * (+textKurs);
			if (kurs === '') {
				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			} else {
				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			}
		}
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		document.getElementById('tooltipBtn').style.animation = '';
		setTimeout(() => {
			focus.current?.querySelector('.input-search')?.focus();
		}, 300);
		linkTR.current.classList.add('hover-disabled');
		// let newobj = [...objProduct];
		// let ostatok = newobj[index].ostatok;
		// ostatok = +ostatok.replaceAll(/\s/gmu, '');
		// ostatok = memoryCena == '-1' ? ostatok + 2 : ostatok + 1;
		// ostatok = ostatok.toLocaleString('ru-RU', {
		// 	minimumFractionDigits: 0,
		// 	maximumFractionDigits: 0,
		// });
		// newobj[index].ostatok = ostatok;
		// setObjProduct([...newobj]);
		// setMemoryInput(ostatok);
	}

	// function formatNumber(number) {
	// 	let newnum = number
	// 		.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	// 		.replace(',', '.');
	// 	return newnum;
	// }
	// function formatNumber2(number) {
	// 	let newnum = number.toLocaleString('ru-RU', {
	// 		minimumFractionDigits: 0,
	// 		maximumFractionDigits: 0,
	// 	});
	// 	return newnum;
	// }
	const [flag, setFlag] = useState(false);

	function inputChange(e) {
		// setFlag(true);
		// setPodlozhka(true);
		// setHideMenu(true);
		// document.querySelector('.contentScroll').style.overflow = 'hidden';
		// document.querySelector('.track-vertical').style.opacity = 0;
		// document.querySelector('.track-horizontal').style.opacity = 0;
		// setMemoryChange(memoryInput);
		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		document.getElementById('tooltipBtn').style.animation = '';
		linkTR.current.classList.add('hover-disabled');

		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		let value = e.target.value;
		setMemoryInput(value);
		// let res;
		// if(memoryCena >= 0){
		// } else {

		// }
		// let res;
		// let res = (+value.replaceAll(/\s/gmu, '')) - (+memoryChange.replaceAll(/\s/gmu, ''))
		// setMemoryCena(res);
		// if(memoryCena <= -1){
		// 	let old = (+memoryChange.replaceAll(/\s/gmu, ''));
		// 	let newvalue = (+value.replaceAll(/\s/gmu, ''));
		// 	if(old < newvalue){
		// 		setMemoryCena(old);
		// 		setMemoryInput(old.toString())
		// 	}else {
		// 		let res = old - newvalue;
		// 		setMemoryCena(res);
		// 	}

		// } else {
		// }
		let res = (+value.replaceAll(/\s/gmu, '')) - (+memoryChange.replaceAll(/\s/gmu, ''))
		setMemoryCena(res);
		// let newMemoryCena = memoryCena;
		if (cena !== '') {
			let text = +cena.replace(/\s/gmu, '');
			let textKurs = +kurs.replace(/\s/gmu, '')
			let text2 = res * (+text) === 0 ? text : res * (+text);
			let text3 = res * (+text) * (+textKurs);
			if (kurs === '') {
				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			} else {
				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			}
		}
		// setMemoryCena(memoryInput - memoryInput);
		// setMemoryCena(+memoryChange -  +memoryInput)
		// setItogoZakupka(e.target.value);
		// setMemoryChange(e.target.value);
	}
	function inputChangeMemoryCena(e) {
		// setFlag(true);
		// setPodlozhka(true);
		// setHideMenu(true);
		// document.querySelector('.contentScroll').style.overflow = 'hidden';
		// document.querySelector('.track-vertical').style.opacity = 0;
		// document.querySelector('.track-horizontal').style.opacity = 0;
		// setMemoryChange(memoryInput);
		// setPodlozhka(true);
		// setAddPrice(true);
		// setFlag(true);
		// setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	x.classList.remove('showBtn');
		// });
		// e.target.closest('.nal-ostatok').classList.add('showBtn')
		// document.querySelector('.contentScroll').style.overflow = 'hidden';
		// document.querySelector('.track-vertical').style.opacity = 0;
		// document.querySelector('.track-horizontal').style.opacity = 0;
		// document.getElementById('tooltipBtn').style.animation = '';
		// linkTR.current.classList.add('hover-disabled');
		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		e.target.style.zIndex = 10001;
		let value = e.target.value;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';
		
		setFlagForZakupka(true);
		setMemoryCena(Number(value));
		// let res = (+value.replaceAll(/\s/gmu, '')) + (+memoryChange.replaceAll(/\s/gmu, ''))
		// setMemoryInput(res.toString());
		// if (cena !== '') {
		// 	let text = +cena.replace(/\s/gmu, '');
		// 	let textKurs = +kurs.replace(/\s/gmu, '')
		// 	let text2 = value * (+text) === 0 ? text : value * (+text);
		// 	let text3 = value * (+text) * (+textKurs);
		// 	if (kurs === '') {
		// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
		// 	} else {
		// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
		// 	}
		// }
		// setFlag(true);
		// setCena(e.target.value);

		// setMemoryCena(memoryInput - memoryInput);
		// setMemoryCena(+memoryChange -  +memoryInput)
		// setItogoZakupka(e.target.value);
		// setMemoryChange(e.target.value);
	}

	// useEffect(()=> {

	// },[memoryInput])
	const focus = useRef();
	// function focusMemoryCena (e) {
	// 	e.currentTarget.querySelector('input').select();
	// }
	// function focusCena() {
	// 	if (focus.current) {
	// 		// if(focus.current.querySelector('.cenaInput') !== null){
	// 		// 	focus.current.querySelector('.cenaInput').focus();

	// 		// }
	// 		if (focus.current.querySelector('.prichinaInput') !== null) {

	// 			focus.current.querySelector('.prichinaInput').focus();
	// 			focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
	// 		}
	// 	}
	// }
	function cenaChange(e) {
		e.target.value = e.target.value.replace(',', '.').match(/^\d+(?:[\.,]\d{0,2})?/);
		// e.target.nextSibling.style.width = '100%';
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		e.target.style.zIndex = 10001;
		setCena(e.target.value);
		setFlagForZakupka(true);
	}
	function pri4inaChange(e) {

		if (e.target.value.length >= 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		e.target.style.zIndex = 10001;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		// e.target.value = e.target.value.replace(/\d/g, '');
		setPri4ina(e.target.value);
		setFlagForZakupka(true);
	}
	function kursChange(e) {
		e.target.style.zIndex = 10001;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		// e.target.value = e.target.value.replace(/[^0-9.]/g, '');
		e.target.value = e.target.value.replace(',', '.').match(/^\d+(?:[\.,]\d{0,2})?/);

		setKurs(e.target.value);
		setFlagForZakupka(true);
	}
	useEffect(() => {
		// let res = (+memoryInput.replaceAll(/\s/gmu, '')) - (+memoryChange.replaceAll(/\s/gmu, ''))
		// setMemoryCena(res === '0.00' ? '' : res);
		if (flagForZakupka && cena === '0.00') {

			setCena('');


		}
		// if (itogoZakupka === '0.00') {
		// 	setItogoZakupka('');
		// }
		if (kurs === '0.00') {
			setKurs('');
		}
		// console.log(memoryCena, cena, kurs)
	}, [kurs, cena, memoryCena, memoryInput, flagForZakupka]);


	function saveBtn() {

		let newobj = [...objProduct];
		if (memoryInput.length !== 0 || memoryInput !== ' ') {
			let ostatok = memoryInput;
			let zakupka = newobj[index].zakupka;
			zakupka = +zakupka.replace(/\s/gmu, '');
			ostatok = +ostatok.replace(/\s/gmu, '');
			zakupka = zakupka * ostatok;
			ostatok = ostatok.toLocaleString('ru-RU', {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
			zakupka = zakupka.toLocaleString('ru-RU', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).replace(',', '.');

			newobj[index].ostatok = ostatok;
			newobj[index].suma1 = zakupka;
			setMemoryChange(ostatok);
			setMemoryInput(ostatok);
			setObjProduct([...newobj]);
			if (inputRef.current.value) {
				if (inputRef.current.value.length >= 4) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 3 + 'px';
				}
				if (inputRef.current.value.length >= 7) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 7 + 'px';
				}
				if (inputRef.current.value.length < 4) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
				}
			}
		}
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	x.classList.remove('showBtn');
		// });
		// e.target.closest('.nal-ostatok').classList.add('showBtn')
		linkTR.current.classList.remove('hover-disabled');
		inputRef.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		// document.getElementById('tooltipBtn').style.animation = '';
		setListenChangeSuppliers('');
		setKurs('');
		setCena('');
		setItogoZakupka('');
		setMemoryCena(0);
		setPri4ina('');
		setHideMenu(false);
		setAddPrice(false);
		setFlag(false);
		setPodlozhka(false);
	}
	useEffect(() => {
		if (!podlozhka && flag) {
			objProduct[index].ostatok = memoryChange;
			linkTR.current.classList.remove('hover-disabled');
			setObjProduct([...objProduct]);
			setMemoryInput(memoryChange);
			setListenChangeSuppliers('');
			setKurs('');
			setCena('');
			setItogoZakupka('');
			setPri4ina('');
			setMemoryCena(0);
			setAddPrice(false);
			setFlag(false);
		}
	}, [podlozhka]);

	// function inputLength(input) {
	// 	// if (input.replaceAll(' ', '').length >= 4) {   !probel tut
	// 	if (input.replace(/\s/gmu, '').length >= 4) {
	// 		// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
	// 		return input.replace(/\s/gmu, '').length * 7 + 3 + 'px';
	// 	}
	// 	if (input.replace(/\s/gmu, '').length >= 7) {
	// 		return input.replace(/\s/gmu, '').length * 7 + 7 + 'px';
	// 	}
	// 	if (input.replace(/\s/gmu, '').length < 4) {
	// 		return input.replace(/\s/gmu, '').length * 7 + 'px';
	// 	}
	// }
	const inputRefMemoryCena = useRef();
	useEffect(() => {
		if (inputRef.current.value) {
			inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
		}
		if (addPrice) {
			focus.current.querySelector('.memoryCena input').style.width = focus.current.querySelector('.memoryCena input').value.length * 7 + 'px';
		}
	}, [memoryInput, memoryCena])


	function clickTr(e) {
		if (e.currentTarget && !objProduct[index].lock) {
			let newobj = [...objProduct];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj = newobj.map((x) => {
					return { ...x, select: false };
				});
				if (lastIndex < index) {
					newobj.slice(lastIndex, index + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				} else {
					newobj.slice(index, lastIndex + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				}
			} else {
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				newobj[index].select = !newobj[index].select;
			}
			setObjProduct(newobj);
		}
	}
	const inputRef = useRef();
	function PlusMinusOpen(e) {
		// e.stopPropagation();
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.add('showBtn');
		});
		plusminus = setTimeout(() => {
			if (!objProduct[index].lock) {
				inputRef?.current?.select();
				inputRef?.current?.focus();
			}
		}, 150);
	}
	function PlusMinusClose(e) {
		// e.stopPropagation();
		if (!podlozhka) {
			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				x.classList.remove('showBtn');
			});
			inputRef.current.blur();
		}
		clearTimeout(plusminus);
	}
	function dblClick(e) {
		if (
			e.target.localName === 'button' ||
			e.target.offsetParent === 'label' ||
			e.target.className === '.slider.round'
		) {
		} else {
			setToggleCard(true);
			setGetIndex(index);
		}
	}
	useEffect(() => {
		if (addPrice) {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.add('visible');
			});
			let pos = cenaBlock.current.getBoundingClientRect();
			const heightPlus = pos.y + cenaBlock.current.offsetHeight;
			const viewportHeight = document.body.clientHeight;
			if (heightPlus + 78 > viewportHeight) {
				cenaBlock.current.style.bottom = '18px';
			}
		} else {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.remove('visible');
			});
		}
	}, [addPrice])
	let obj = [
		{ id: 0, company: 'Мега ОПТ', select: false },
		{ id: 1, company: 'TrendOpt', select: false },
		{ id: 2, company: 'Imperial Super Group', select: false },
		{ id: 3, company: 'Интернет-магазин VlaRus', select: false },
		{ id: 4, company: '7й километр', select: false },
		{ id: 5, company: 'Концерн Denavi', select: false },
	]
	const [suppliers, setSuppliers] = useState(null);
	useEffect(() => {
		setSuppliers(obj)
	}, [])
	const [listenChangeSuppliers, setListenChangeSuppliers] = useState('');
	// useEffect(() => {
	// 	if (!flagForZakupka && addPrice) {
	// 		if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
	// 			// let inputFormat = +memoryInput.replace(/\s/gmu, '');
	// 			let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
	// 			let text = +cena.replace(/\s/gmu, '');
	// 			let textKurs = +kurs.replace(/\s/gmu, '')
	// 			let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
	// 			let text3 = newMemoryCena * (+text) * (+textKurs);
	// 			// document.querySelector('.memoryCena inp')
	// 			let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
	// 			setMemoryInput(res.toString());
	// 			setMemoryCena(newMemoryCena);
	// 			document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
	// 			if (kurs === '') {
	// 				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 			} else {
	// 				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 			}
	// 			setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 			setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 		} else {
	// 			// let value = e.target.value;
	// 			let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);

	// 			let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
	// 			setMemoryCena(-newMemoryCena);
	// 			setMemoryInput(res.toString());
	// 			// if (cena !== '') {
	// 			// 	let text = +cena.replace(/\s/gmu, '');
	// 			// 	let textKurs = +kurs.replace(/\s/gmu, '')
	// 			// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
	// 			// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
	// 			// 	if (kurs === '') {
	// 			// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 			// 	} else {
	// 			// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
	// 			// 	}
	// 			// }
	// 		}
	// 		// setFlag(false);
	// 	}
	// }, [flagForZakupka])
	const refWrapOstatok = useRef();
	function clickVirtualWrapper() {
		// setOpenMenu(false);
		setPodlozhka(false);
		setHideMenu(false);
		// console.log('srabotalo');
		// setFlagSwitchMenu(false);
		setSwitchMenu(false);
		setFlag(false);
		// setVirtualClick(false);
		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		inputRef.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
		setFlagForZakupka(false);
		// document.querySelector('.first-tab-body').classList.remove('hoverOff');
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
	}
	function handle(e) {
		if (refWrapOstatok.current && !refWrapOstatok.current.contains(e.target)) {
			clickVirtualWrapper()
		}
	}
	useEffect(() => {
		if (flag) {
			document.addEventListener("click", handle, true);
		}
		return () => {
			document.removeEventListener("click", handle, true);
		};
	}, [flag]);
	useEffect(()=> {
		if(focus.current){
			let width = focus.current.querySelector('.memoryCena').offsetWidth;
			focus.current.querySelector('.tooltip').style.left = width+'px';
		}
	},[memoryCena])
	const [prichinaFocus,setPrichinaFocus]=useState(false);
	useEffect(()=> {
		if((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))){
			setPri4ina('');
			setPrichinaFocus(false);
			// setMinusOrPlus(true)
		}else {
			// setPrichinaFocus(true);

			// setMinusOrPlus(false)
			setCena('');
		}
	},[memoryCena,memoryInput])
	useEffect(()=> {
		if(prichinaFocus){
			if (focus.current) {
				setTimeout(() => {
					
					focus.current.querySelector('.prichinaInput')?.focus();
					focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				}, 100);
			}
		} 
		else {
			if (focus.current) {
				setTimeout(() => {
					focus.current.querySelector('.prichinaInput')?.blur();
					if(focus.current.querySelector('.prichinaInput')?.nextSibling !== null){

						focus.current.querySelector('.prichinaInput').nextSibling.style.width = '0%';
					}
				}, 100);
			}
		}
	
	},[prichinaFocus])
	return (
		<>
			{objProduct[index] && (
				<tr
					// style={height}
					className={
						objProduct[index].select
							? 'select speed'
							: objProduct[index].lock
								? 'lockOrder speed'
								: 'speed'
					}
					onClick={clickTr}
					ref={linkTR}
					// style={{height: rowHeight}}
					// key={index}
					onMouseEnter={objProduct[index].lock ? (e) => {

						let posElement = e.target.getBoundingClientRect();
						const tooltipBlock = document.getElementById('tooltipBtn');
						tooltipBlock.style.fontSize = '12px';
						const widthPlus = e.pageX + tooltipBlock.offsetWidth;
						const viewportWidth = document.body.clientWidth;
						plusminus = setTimeout(() => {
							const name = 'Олександр';
							tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
							// tooltipBlock.style.left = posElement.x + 'px';
							// tooltipBlock.style.top = posElement.y + 23 + 'px';
							if (widthPlus > viewportWidth) {
								tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
								tooltipBlock.style.top = posElement.y + 23 + 'px';
							} else {
								tooltipBlock.style.left = posElement.x + 'px';
								tooltipBlock.style.top = posElement.y + 23 + 'px';
							}
							tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
						}, 250);

					} : () => { }}
					onMouseLeave={objProduct[index].lock ? (e) => {
						clearTimeout(plusminus);
						document.getElementById('tooltipBtn').style.animation = '';
					} : () => { }}
					// style={{transition: '0.2s',opacity: 0}}
					onDoubleClick={!objProduct[index].lock ? dblClick : () => { }}
					key={index}
				>
					{/* <td className="hoverr">
						<div
							// {23}
							// style={{ width: hoverWidth  + 'px' }}
						></div>
						<div className="div"></div>
					</td> */}
					<td className="sticky-body">
						<div className="sticky-block">
							<div className="stickyBeforeBody"></div>
							<div
								onMouseEnter={() => { setSwitchMenu(true) }}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<div
									style={{
										minWidth: '51px',
										paddingRight: '10px',
										height: '18px',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<label className="switch-btn-warehouse" >
										<input
											type="checkbox"
											className="status-all"
											onChange={objProduct[index].lock ? () => { } : switchBtn}
											// defaultChecked={objProduct[index].status.all}
											checked={objProduct[index].status.all}
										/>
										<span className="slider round" onMouseEnter={objProduct[index].lock ? () => { } : (e) => {
											tooltipOn(
												e,
												e.target.offsetParent.children[0].checked
													? 'Заблокировать товар'
													: 'Разблокировать товар'
											);
										}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? () => { } : (e) => {
											tooltipOn(
												e,
												e.target.offsetParent.children[0].checked
													? 'Заблокирован'
													: 'Разблокирован'
											);
										}}></span>
									</label>
								</div>

								<div
									className="animationFrame"
									style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
								>
									{loadedLabelBlock && <StatusBlock switchBtn={switchBtn} objProduct={objProduct} setObjProduct={setObjProduct} tooltipOn={tooltipOn} tooltipOff={tooltipOff} index={index} />}
								</div>
							</div>

							<div
								className="id-width"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={
									!objProduct[index].status.all
										? {
											color: 'rgba(0,0,0,0.4)',
											textAlign: 'left',
											paddingRight: '10px',
											// width: widthColum.id + 'px',
										}
										: { textAlign: 'left', paddingRight: '10px' }
								}
							>
								{objProduct[index].id}
							</div>
							<div
								className="flags"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{ opacity: `${!objProduct[index].status.all ? 0.4 : ''}` }}
							>
								{objProduct[index].country}
							</div>
							<div
								className="currency"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{
									color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
								}}
							>
								{objProduct[index].currency}
							</div>
							<div
								className="name-width"
								style={{
									overflow: 'hidden',
									paddingRight: '15px',
									// width: widthColum.name + 'px',
									width: 200,
									// maxWidth: '172px',
								}}
							>
								{objProduct[index].podProduct === 1 || objProduct[index].podProduct === 0 ? (
									<span
										className={
											objProduct[index].podProduct === 0
												? 'arrow'
												: objProduct[index].podProduct === 1
													? 'arrowDeg'
													: ''
										}
										style={
											objProduct[index].podProduct === 1 ||
												(objProduct[index].podProduct === 0 && objProduct[index].lock) || !objProduct[index].status.all
												? { opacity: 0.4 }
												: {}
										}
									></span>
								) : (
									''
								)}
								<span
									className="name"
									onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
									onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
									style={{
										opacity: `${objProduct[index].podProduct === 1 || !objProduct[index].status.all ? 0.4 : ''
											}`,
										fontSize: `${objProduct[index].podProduct === 1 ? '10px' : ''}`,
									}}
								>
									{objProduct[index].name}
								</span>
							</div>
							<div
								className="attribute-width"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{
									opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
									display: 'flex',
									alignItems: 'center',
									width: 150,
								}}
							>
								<img
									style={{ width: 16, height: 16, position: 'absolute' }}
									src={objProduct[index].images}
									alt=""
								/>
								<span
									className="attribute"
								// style={{
								// 	height: '18px',
								// 	lineHeight: '18px',
								// 	marginLeft: 20,
								// 	whiteSpace: 'nowrap',
								// 	overflow: 'hidden',
								// 	textOverflow: 'ellipsis',
								// 	display: 'block',
								// 	// width: widthColum.attribute - 20 + 'px',
								// 	// maxWidth: 85,
								// 	// width:150
								// }}
								>
									{objProduct[index].attribute}
								</span>
							</div>
							<div className="shadow-left"></div>
						</div>
						{/* <div className='hover'></div> */}
					</td>

					<td
						onMouseLeave={addPrice ? null : PlusMinusClose}
						onMouseEnter={addPrice ? null : PlusMinusOpen}
						className={`nal-ostatok ${addPrice ? 'showBtn' : ''}`}
						style={addPrice ? { zIndex: 99 } : {}}
						onClick={addPrice ? (e) => e.stopPropagation() : null}
						onDoubleClick={addPrice ? (e) => e.stopPropagation() : null}
						ref={refWrapOstatok}
					>
						<div
							className="wrap-nal-ostatok"

							onMouseEnter={addPrice ? (e)=> {

								// inputRef.current.select()
								// inputRef.current.focus()
									e.stopPropagation()
									inputRef.current.select()
									inputRef.current.focus()
								
							} : null}
							onMouseLeave={addPrice ? (e)=> {
								e.stopPropagation()
								inputRef.current.blur();
							
							}:null }
						>
							<button
								onDoubleClick={(e) => e.stopPropagation()}
								onClick={(e) => {BtnMinus();e.stopPropagation()}}
								disabled={objProduct[index].lock ? true : false}
							>
								<Minus />
							</button>

							<input
								ref={inputRef}
								type="text"
								onChange={inputChange}
								// onKeyUp={enterInput}
								maxLength={5}
								onClick={(e) => {
									// setPodlozhka(true);
									e.stopPropagation();
								}}
								// onMouseLeave={e => {
								// 	if (addPrice) {
								// 		let value = e.target.value;
								// 		value = (+value.replaceAll(/\s/gmu, '')) === 0 ? 1 : (+value.replaceAll(/\s/gmu, ''))
								// 		setMemoryInput(value.toString());
								// 		let res = value - (+memoryChange.replaceAll(/\s/gmu, ''))
								// 		setMemoryCena(res);
								// 		if (cena !== '') {
								// 			let text = +cena.replace(/\s/gmu, '');
								// 			let textKurs = +kurs.replace(/\s/gmu, '')
								// 			let text2 = value * (+text) === 0 ? text : value * (+text);
								// 			let text3 = value * (+text) * (+textKurs);
								// 			if (kurs === '') {
								// 				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
								// 			} else {
								// 				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
								// 			}
								// 		}
								// 	}

								// }}
								// value={focusInput && inputFormat ? memoryInput : +memoryInput}
								value={memoryInput}
								onDoubleClick={(e) => e.stopPropagation()}
								style={{
									color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.7)'}`,
									lineHeight: '18px',
									// width: ''
									// width: inputLength(memoryInput.toString()),
								}}
								readOnly={objProduct[index].lock ? true : false}
							/>

							<button
								// style={btnMenu ? { width: '16px' } : {}}
								onDoubleClick={(e) => e.stopPropagation()}
								onClick={BtnPlus}
								disabled={objProduct[index].lock ? true : false}
							>
								<Plus />
							</button>
							


						</div>
						<div ref={cenaBlock} className='cena'>
								{addPrice && <div ref={focus} className='wrap' >
									<table style={{ borderCollapse: 'collapse', margin: 10 }}>
										<tbody>
											{flagForZakupka && <tr style={{ position: 'absolute' }}>
												<td style={{ height: 0, minHeight: 0 }} colSpan={2}>
													<div onClick={e => {
														// let text = cena;
														// console.log( typeof cena)
														// let text = +cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
														// setCena(text);
														if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
															// let inputFormat = +memoryInput.replace(/\s/gmu, '');
															let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
															let text = +cena.replace(/\s/gmu, '');
															let textKurs = +kurs.replace(/\s/gmu, '')
															let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
															let text3 = newMemoryCena * (+text) * (+textKurs);
															// document.querySelector('.memoryCena inp')
															let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
															setMemoryInput(res.toString());
															setMemoryCena(newMemoryCena);
															e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
															document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
															if (kurs === '') {
																setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															} else {
																setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															}
															setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															console.log('++')
														} else {
															// let value = e.target.value;
																let value = inputRefMemoryCena.current.value;
																value = Math.abs(Number(value))
																value = Number(value) === 0 ? -1 : Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(value);
											
																let res =  (+memoryChange.replaceAll(/\s/gmu, ''))-value;
																e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
																document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
																
																setMemoryCena(-value);
																setMemoryInput(res.toString());
																console.log('--')
																console.log(value , res)
														
			
															// if (cena !== '') {
															// 	let text = +cena.replace(/\s/gmu, '');
															// 	let textKurs = +kurs.replace(/\s/gmu, '')
															// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
															// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
															// 	if (kurs === '') {
															// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															// 	} else {
															// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
															// 	}
															// }
														}
														const block = e.currentTarget.closest('.cena').querySelector('.tooltip');																
														block.style.animation = '';
														// const block = e.currentTarget.querySelector('.tooltip');
														// block.style.animation = '';
														setFlagForZakupka(false);
														document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')

													}} style={{ height: '170px', width: '240px', position: 'absolute', left: -10, zIndex: 10000, top: -10 }}></div>
												</td>
											</tr>}
											<tr>
												<td>{(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) ? translator.getTranslation('menuAdd/CribProduct', 'add') : translator.getTranslation('menuAdd/CribProduct', 'crib')}</td>
												<td

												>
													<div className="memoryCena"
														onMouseEnter={e => {

															// let posElement = e.currentTarget.getBoundingClientRect();
															const block = e.currentTarget.querySelector('.tooltip');
															const width = e.currentTarget.offsetWidth;
															block.style.fontSize = '12px';
															// block.innerHTML = `Добавляется товаров: ${memoryCena}<br>Итого товаров на складе: ${memoryInput}`;
															block.style.left = width + 'px';
															block.style.top = '-13px';
															// block.style.animation = 'delay-btn 0.5s forwards';
															// e.target.focus()
															// setMinusOrPlus(true);
															setPrichinaFocus(false);
															// e.currentTarget.querySelector('input').select();
															// e.currentTarget.querySelector('input').focus();
															plusminus = setTimeout(() => {
																if (!flagForZakupka) {

																	inputRefMemoryCena?.current?.select();
																}
																inputRefMemoryCena?.current?.focus();
															}, 150);
														}}
														onMouseLeave={e => {
															// const block = e.currentTarget.querySelector('.tooltip');
															// block.style.animation = '';
															if (!flagForZakupka) {
																const block = e.currentTarget.closest('.memoryCena').querySelector('.tooltip');																
																block.style.animation = '';
																// document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
																// e.currentTarget.querySelector('input').blur();
																inputRefMemoryCena?.current?.blur();
															}
															clearTimeout(plusminus);

														}}
													>
														<button
															// onDoubleClick={(e) => e.stopPropagation()}
															onClick={BtnMinus}
															style={{ top: 0 }}
															onMouseEnter={e => e.stopPropagation()}

														>
															<Minus />
															{/* {console.log(memoryCena)} */}
														</button>
														{/* {Math.abs(memoryCena)} */}
														<input
															ref={inputRefMemoryCena}
															value={memoryCena}
															onChange={inputChangeMemoryCena}
															maxLength={5}
															style={{width: '7px',textAlign: 'center',padding: '0 1px'}}
															onKeyDown={e => {
																if (e.key === "Enter") {
																	e.target.blur();
																	// setFlag(false);
																	e.target.style.zIndex = '';
																	e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

																	if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
																		let value = e.target.value;
																		value = Number(value) === 0 ? 1 : Number(value);
																		setMemoryCena(value);
																		let res = (value) + (+memoryChange.replaceAll(/\s/gmu, ''))
																		setMemoryInput(res.toString());
																		if (cena !== '') {
																			let text = +cena.replace(/\s/gmu, '');
																			let textKurs = +kurs.replace(/\s/gmu, '')
																			let text2 = value * (+text) === 0 ? text : value * (+text);
																			let text3 = value * (+text) * (+textKurs);
																			if (kurs === '') {
																				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																			} else {
																				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																			}
																		}
																	} else {
																		let value = e.target.value;
																		console.log(value, memoryChange)
																		value = Number(value) === 0 ? -1 : Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? -1 : Number(value);
																		let res = -value + (+memoryChange.replaceAll(/\s/gmu, ''));

																		setMemoryCena(-value);
																		setMemoryInput(res.toString());
																		// value = Number(value) === 0 || Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? -1 : Number(value);
																		// setMemoryCena(-value);
																		// let res = (-value) + (+memoryChange.replaceAll(/\s/gmu, ''))
																		// setMemoryInput(res.toString());
																		// console.log(-value + (+memoryChange.replaceAll(/\s/gmu, '')))
																		// if (cena !== '') {
																		// 	let text = +cena.replace(/\s/gmu, '');
																		// 	let textKurs = +kurs.replace(/\s/gmu, '')
																		// 	let text2 = -value * (+text) === 0 ? text : -value * (+text);
																		// 	let text3 = -value * (+text) * (+textKurs);
																		// 	if (kurs === '') {
																		// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	} else {
																		// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	}
																		// }
																	}
																	const block = e.currentTarget.closest('.memoryCena').querySelector('.tooltip');
																	block.style.animation = '';
																	setFlagForZakupka(false);

																}
															}}
														/>
														<button
															onClick={BtnPlus}
															style={{ top: 0 }}
															onMouseEnter={e => e.stopPropagation()}
														>
															<Plus />
														</button>
														<div className='tooltip'>
															{(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) 
															? `Добавляется товаров: ${Math.abs(memoryCena)}` : `Списывается товаров: -${Math.abs(memoryCena)}`}
															 <br />Итого товаров на складе: {(+memoryChange.replace(/\s/gmu, '')) < (+memoryInput.replace(/\s/gmu, '')) ? (+memoryCena)+ (+memoryChange.replace(/\s/gmu, '')): (+memoryChange.replace(/\s/gmu, ''))-(Math.abs(+memoryCena))}
														</div>
													</div>
												</td>
											</tr>
											{(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) ? <>
												<tr>
													<td>{translator.getTranslation('menuAdd/CribProduct', 'suppliers')}</td>
													<td>
														<SimpleDropMenu
															setListenChangeSuppliers={setListenChangeSuppliers}
															listenChangeSuppliers={listenChangeSuppliers}
															addPrice={addPrice}
															data={suppliers}
															setData={setSuppliers}
															translator={translator}
															setFlagForZakupka={setFlagForZakupka}
															flagForZakupka={flagForZakupka}
															setCena={setCena}
															cena={cena}
														/>
													</td>
												</tr>
												<tr>
													<td>{translator.getTranslation('menuAdd/CribProduct', 'purchase')}</td>
													<td>
														<input className='cenaInput' onChange={cenaChange} value={cena}
															onKeyDown={e => {
																if (e.key === "Enter") {
																	e.target.nextSibling.style = '0%';
																	e.target.blur();
																	// let text = +e.target.value.replaceAll(/\s/gmu, '');
																	// text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
																	// console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
																	// setFlagForZakupka(false);
																	// setCena(text);
																	e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

																	if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
																		// let inputFormat = +memoryInput.replace(/\s/gmu, '');
																		let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
																		let text = +cena.replace(/\s/gmu, '');
																		let textKurs = +kurs.replace(/\s/gmu, '')
																		let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
																		let text3 = newMemoryCena * (+text) * (+textKurs);
																		// document.querySelector('.memoryCena inp')
																		let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
																		setMemoryInput(res.toString());
																		setMemoryCena(newMemoryCena);
																		document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
																		if (kurs === '') {
																			setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		} else {
																			setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		}
																		setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																	} else {
																		// let value = e.target.value;
																		let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
														
																		let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
																		setMemoryCena(-newMemoryCena);
																		setMemoryInput(res.toString());
																		// if (cena !== '') {
																		// 	let text = +cena.replace(/\s/gmu, '');
																		// 	let textKurs = +kurs.replace(/\s/gmu, '')
																		// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
																		// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
																		// 	if (kurs === '') {
																		// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	} else {
																		// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	}
																		// }
																	}
																	setFlagForZakupka(false);
																	// console.log(text)
																}
															}}
															style={{ height: 23, position: 'relative' }}
															onMouseEnter={e => {
																e.target.nextSibling.style.width = '100%';
																e.target.focus()
																e.target.select()
															}}
															onMouseLeave={e => {
																if (!flagForZakupka) {
																	document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
																	e.target.blur()
																}
															}}
															onClick={e => {
																setFlagForZakupka(true);
																setCena(prev => prev.replaceAll(/\s/gmu, ''));
															}}
															maxLength={9}
														/>
														<div className='poloska'></div>
													</td>
												</tr>
												<tr>
													<td>{translator.getTranslation('menuAdd/CribProduct', 'exchangeRates')}</td>
													<td>
														<input className='kursInput' value={kurs} onChange={kursChange}
															onKeyDown={e => {
																if (e.key === "Enter") {
																	e.target.nextSibling.style = '0%';
																	e.target.blur();
																	// let text = +e.target.value.replaceAll(/\s/gmu, '');
																	// text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
																	// // console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
																	// setKurs(text);
																	e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

																	if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
																		// let inputFormat = +memoryInput.replace(/\s/gmu, '');
																		let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
																		let text = +cena.replace(/\s/gmu, '');
																		let textKurs = +kurs.replace(/\s/gmu, '')
																		let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
																		let text3 = newMemoryCena * (+text) * (+textKurs);
																		// document.querySelector('.memoryCena inp')
																		let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
																		setMemoryInput(res.toString());
																		setMemoryCena(newMemoryCena);
																		document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
																		if (kurs === '') {
																			setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		} else {
																			setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		}
																		setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																	} else {
																		// let value = e.target.value;
																		let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
														
																		let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
																		setMemoryCena(-newMemoryCena);
																		setMemoryInput(res.toString());
																		// if (cena !== '') {
																		// 	let text = +cena.replace(/\s/gmu, '');
																		// 	let textKurs = +kurs.replace(/\s/gmu, '')
																		// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
																		// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
																		// 	if (kurs === '') {
																		// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	} else {
																		// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
																		// 	}
																		// }
																	}
																	setFlagForZakupka(false);
																	// setFlagForZakupka(false);
																	// console.log(text)
																}
															}}
															onMouseEnter={e => {
																e.target.nextSibling.style.width = '100%';
																e.target.focus()
																e.target.select()

															}}
															onMouseLeave={e => {
																if (!flagForZakupka) {
																	document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
																	e.target.blur()
																}
															}}
															onClick={e => {
																setFlagForZakupka(true);
																setKurs(prev => prev.replaceAll(/\s/gmu, ''));
															}}
															maxLength={9}
														/>
														<div className='poloska'></div>
													</td>
												</tr>
												<tr>
													<td>{translator.getTranslation('menuAdd/CribProduct', 'total')}</td>
													<td>{itogoZakupka}</td>
												</tr>
											</> :

												<tr>
													<td>{translator.getTranslation('menuAdd/CribProduct', 'reason')}</td>
													<td>
														<input className='prichinaInput' onChange={pri4inaChange} value={pri4ina}
															onKeyDown={e => {
																if (e.key === "Enter") {
																	e.target.nextSibling.style = '0%';
																	e.target.blur();
																	e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
																	// if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
																		
																	// } else {
																	// 	// let value = e.target.value;
																	// 	let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
														
																	// 	let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
																	// 	setMemoryCena(-newMemoryCena);
																	// 	setMemoryInput(res.toString());
															
																	// }
																	// let text = +e.target.value.replaceAll(/\s/gmu, '');
																	// text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
																	// console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
																	setFlagForZakupka(false);
																	// setKurs(text);
																	// console.log(text)
																	setPri4ina(e.target.value)
																}
															}}
															onMouseEnter={e => {
																e.target.nextSibling.style.width = '100%';
																e.target.focus()
																e.target.select()

															}}
															onMouseLeave={e => {
																if (!flagForZakupka) {
																	document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
																	e.target.blur()
																}
															}}
														/><div className='poloska'></div>
													</td>
												</tr>
											}
										</tbody>

									</table>

									<button
										onClick={saveBtn}
										disabled={cena !== '' ? false :  pri4ina !== '' ? false : true}
										className="save-btn">
										Сохранить
									</button>
									{/* <div className='poloska'></div> */}
								</div>}
							</div>

						<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', position: 'absolute', right: 3, top: 3 }}>/</span>
					</td>
					<td
						className="nal-rezerv"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,

							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
							style={{
								opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
								color: 'rgba(0,0,0,0.5)',
								paddingRight: '4px',
								height: '18px',
								lineHeight: '18px',
							}}
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].rezerv)} */}
						{objProduct[index].rezerv}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-otpr"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							// height: '18px',
							// lineHeight: '18px',
							// color: 'rgba(0,0,0,0.5)',
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
							style={{
								opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
								height: '18px',
								lineHeight: '18px',
								color: 'rgba(0,0,0,0.5)',
								paddingRight: '4px',
							}}
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].otpr)} */}
						{objProduct[index].otpr}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-vozvrat"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							// height: '18px',
							// lineHeight: '18px',
							// color: 'rgba(0,0,0,0.5)',
							paddingRight: '10px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].vozvrat)} */}
						{objProduct[index].vozvrat}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-zakupka"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					// onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
					// onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					// onMouseEnter={tooltipOn}
					// onMouseLeave={tooltipOff}
					>
						{objProduct[index].zakupka}
						{/* {formatNumber(objProduct[index].zakupka)} */}
					</td>
					<td
						className="nal-prodazha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					// onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
					// onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					// onMouseEnter={tooltipOn}
					// onMouseLeave={tooltipOff}
					>
						{objProduct[index].prodazha}
						{/* {formatNumber(objProduct[index].prodazha)} */}
					</td>
					<td
						className="nal-marzha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					// onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
					// onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					// onMouseEnter={tooltipOn}
					// onMouseLeave={tooltipOff}
					>
						{/* {formatNumber(objProduct[index].marzha)} */}
						{objProduct[index].marzha}
					</td>
					<td
						className="summa-suma1"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,

							textAlign: 'right',
							display: 'flex',
							justifyContent: 'end',
							paddingRight: '3px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
					
						> */}
						{objProduct[index].suma1}
						{/* {objProduct[index].ostatok * objProduct[index].zakupka} */}
						{/* {formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)} */}
						<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }}>/</span>
						{/* </div> */}
					</td>
					<td
						className="summa-suma2"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
							// color: 'rgba(0,0,0,0.5)',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber(objProduct[index].suma2)} */}
						{objProduct[index].suma2}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="summa-suma3"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
						
						>
						</div> */}
						{objProduct[index].suma3}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
						{/* {formatNumber(objProduct[index].suma3)} */}
					</td>
					<td
						className="summa-suma4"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber(objProduct[index].suma4)} */}
						{objProduct[index].suma4}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
				</tr>
			)}
		</>
	);
};

export default WarehouseProductList;

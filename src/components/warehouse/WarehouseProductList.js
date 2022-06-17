import React, { useEffect, useState, useRef, useMemo } from 'react';
import StatusBlock from './statusBlock';
// import ProductCard from '../warehouse/Warehouse';
// import PodProductList from './PodProductList';
// import useOutsideAlert from './outSideHook';
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
	const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok);
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
			console.log('asdasdass')
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
		if (e.currentTarget.className === 'wrap-nal-ostatok') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = 'В наличии: ' + memoryInput;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-rezerv') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = 'Зарезервированы: ' + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-otpr') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = 'Отправлены: ' + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-vozvrat') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = 'Ожидающие получения/списания: ' + e.target.innerText;
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
				tooltipBlock.innerText = 'В наличии: ' + e.target.innerText.replace('/', '');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma2') {
			// e.currentTarget.querySelector('.checkbox').checked
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = 'Зарезервированы: ' + e.target.innerText;
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
				tooltipBlock.innerText = 'Отправлены: ' + e.target.innerText;
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
				tooltipBlock.innerText = 'Ожидающие получения/списания: ' + e.target.innerText;
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
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// console.log(objProduct[0].ostatok);
	// let mem =  objProduct[0].ostatok;
	// mem = +mem.replaceAll(' ','');
	// console.log(mem)
	const [addPrice, setAddPrice] = useState(false);
	const [memoryCena, setMemoryCena] = useState(0);
	const [cena, setCena] = useState('');
	const [kurs, setKurs] = useState('');
	const [itogoZakupka, setItogoZakupka] = useState('');
	const [pri4ina, setPri4ina] = useState('');
	function BtnMinus(e) {
		e.stopPropagation();
		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		if (memoryInput !== '0') {
			setMemoryCena(memoryCena == '1' ? memoryCena - 2 : memoryCena - 1);
			// setMemoryCena(memoryCena - 1);
		}


		// console.log(memoryInput, memoryCena)
		// if (memoryInput ==='0') {
		// 	setMemoryCena(0)
		// }
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;

		document.getElementById('tooltipBtn').style.animation = '';

		let newobj = [...objProduct];
		if (newobj[index].ostatok !== '0') {
			let ostatok = newobj[index].ostatok;
			// let zakupka = newobj[index].zakupka;
			// zakupka = +zakupka.replaceAll(/\s/gmu, '');
			ostatok = +ostatok.replaceAll(/\s/gmu, '');
			ostatok = memoryCena == '1' && memoryInput !== '1' ? ostatok - 2 : ostatok - 1;
			// zakupka = zakupka * ostatok;
			ostatok = ostatok.toLocaleString('ru-RU', {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
			// zakupka = zakupka.toLocaleString('ru-RU', {
			// 	minimumFractionDigits: 2,
			// 	maximumFractionDigits: 2,
			// }).replace(',', '.');

			newobj[index].ostatok = ostatok;
			// newobj[index].suma1 = zakupka;
			setObjProduct([...newobj]);
			setMemoryInput(ostatok);
		}
		// if(memoryInput !== '0'){
		// 	// let res = +memoryInput - 1;
		// 	setMemoryInput(+memoryInput - 1)
		// }
	}

	function BtnPlus(e) {
		e.stopPropagation();
		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		setMemoryCena(memoryCena == '-1' ? memoryCena + 2 : memoryCena + 1);

		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		document.getElementById('tooltipBtn').style.animation = '';
		let newobj = [...objProduct];
		let ostatok = newobj[index].ostatok;
		// let zakupka = newobj[index].zakupka;
		// zakupka = +zakupka.replaceAll(/\s/gmu, '');
		ostatok = +ostatok.replaceAll(/\s/gmu, '');
		ostatok = memoryCena == '-1' ? ostatok + 2 : ostatok + 1;
		// zakupka = zakupka * ostatok;
		ostatok = ostatok.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		// zakupka = zakupka.toLocaleString('ru-RU', {
		// 	minimumFractionDigits: 2,
		// 	maximumFractionDigits: 2,
		// }).replace(',','.');

		newobj[index].ostatok = ostatok;
		// newobj[index].suma1 = zakupka;
		setObjProduct([...newobj]);
		setMemoryInput(ostatok);
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
	const [memoryChange, setMemoryChange] = useState(objProduct[index]?.ostatok);

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

		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		setMemoryInput(e.target.value);
		// setMemoryCena(memoryInput - memoryInput);
		// setMemoryCena(+memoryChange -  +memoryInput)
		// setItogoZakupka(e.target.value);
		// setMemoryChange(e.target.value);
	}
	// useEffect(()=> {
	
	// },[memoryInput])
	const focus = useRef();
	function focusCena() {
		if (focus.current) {
			if(focus.current.querySelector('.cenaInput') !== null){
				focus.current.querySelector('.cenaInput').focus();

			}
			if(focus.current.querySelector('.prichinaInput') !== null) {

				focus.current.querySelector('.prichinaInput').focus();
			}
		}
	}
	function cenaChange(e) {
		e.target.value = e.target.value.replace(/[^0-9.]/g, '');
		setCena(e.target.value);
	}
	function pri4inaChange(e) {
	
		if (e.target.value.length >= 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		e.target.value = e.target.value.replace(/\d/g, '');
		setPri4ina(e.target.value);
	}
	function kursChange(e) {
		e.target.value = e.target.value.replace(/[^0-9.]/g, '');
		setKurs(e.target.value);
	}
	useEffect(() => {
		if (kurs === '') {
			setItogoZakupka(memoryCena * cena === 0 ? cena : memoryCena * cena);
		} else {
			let res = memoryCena * cena * kurs;
			setItogoZakupka(res === 0 ? cena : res);
		}
		setMemoryCena(memoryInput - memoryChange);
		// if(memoryInput == '0') {
		// 	setMemoryCena(memoryCena - 2);
		// }
		// if(memoryCena == '0' && flag){
		// 	console.log('pidar')

		// 	setMemoryInput(prev => prev - 1);
		// 	setMemoryCena(memoryCena - 1);
		// }
		// if(memoryCena == '0'){
		// 	console.log('pidar')
		// 	setMemoryCena(memoryCena-2);
		// }
		// if(memoryCena == '1'){
		// 	setMemoryCena(memoryCena - 2)
		// }
		// console.log(memoryCena)
	}, [kurs, cena, memoryCena, itogoZakupka, memoryInput]);
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const prev = usePrevious(memoryInput);
	// function enterInput(e) {
	// 	if (e.key === 'Enter') {
	// 		if (podlozhka && prev !== memoryInput) {
	// 			if (e.target.value.length >= 4) {
	// 				e.target.style.width = e.target.value.length * 7 + 3 + 'px';
	// 			}
	// 			if (e.target.value.length >= 7) {
	// 				e.target.style.width = e.target.value.length * 7 + 7 + 'px';
	// 			}
	// 			if (e.target.value.length < 4) {
	// 				e.target.style.width = e.target.value.length * 7 + 'px';
	// 			}
	// 			e.target.blur();
	// 		}
	// 		document.querySelector('.track-vertical').style.opacity = 1;
	// 		document.querySelector('.track-horizontal').style.opacity = 1;
	// 		setHideMenu(false);
	// 		if (memoryInput.length === 0 || memoryInput === ' ') {
	// 			setMemoryInput(0)
	// 		}
	// 		if (podlozhka && flag) {
	// 			let newobj = [...objProduct];
	// 			if (memoryInput.length !== 0 || memoryInput !== ' ') {
	// 				let ostatok = memoryInput;
	// 				let zakupka = newobj[index].zakupka;
	// 				zakupka = +zakupka.replace(/\s/gmu, '');
	// 				ostatok = +ostatok.replace(/\s/gmu, '');
	// 				zakupka = zakupka * ostatok;
	// 				ostatok = ostatok.toLocaleString('ru-RU', {
	// 					minimumFractionDigits: 0,
	// 					maximumFractionDigits: 0,
	// 				});
	// 				zakupka = zakupka.toLocaleString('ru-RU', {
	// 					minimumFractionDigits: 2,
	// 					maximumFractionDigits: 2,
	// 				}).replace(',', '.');

	// 				newobj[index].ostatok = ostatok;
	// 				newobj[index].suma1 = zakupka;
	// 				setMemoryInput(ostatok)
	// 				setObjProduct([...newobj]);
	// 			}
	// 		}
	// 		setFlag(false);
	// 		setPodlozhka(false);
	// 	}
	// }
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
			document.querySelector('.contentScroll').style.overflow = 'auto';
			document.querySelector('.track-vertical').style.opacity = 1;
			document.querySelector('.track-horizontal').style.opacity = 1;
			// document.getElementById('tooltipBtn').style.animation = '';
			setKurs('');
			setCena('');
			setItogoZakupka('');
			setMemoryCena(0);
			setHideMenu(false);
			setAddPrice(false);
			setFlag(false);
			setPodlozhka(false);
	}
	useEffect(() => {
		if (!podlozhka && flag) {
			// setMemoryInput(memoryChange);
			objProduct[index].ostatok = memoryChange;
			setObjProduct([...objProduct]);
			setMemoryInput(memoryChange);
			// let newobj = [...objProduct];
			// if (memoryInput.length !== 0 || memoryInput !== ' ') {
			// 	let ostatok = memoryInput;
			// 	let zakupka = newobj[index].zakupka;
			// 	zakupka = +zakupka.replace(/\s/gmu, '');
			// 	ostatok = +ostatok.replace(/\s/gmu, '');
			// 	zakupka = zakupka * ostatok;
			// 	ostatok = ostatok.toLocaleString('ru-RU', {
			// 		minimumFractionDigits: 0,
			// 		maximumFractionDigits: 0,
			// 	});
			// 	zakupka = zakupka.toLocaleString('ru-RU', {
			// 		minimumFractionDigits: 2,
			// 		maximumFractionDigits: 2,
			// 	}).replace(',', '.');

			// 	newobj[index].ostatok = ostatok;
			// 	newobj[index].suma1 = zakupka;
			// 	setMemoryInput(ostatok)
			// 	setObjProduct([...newobj]);
			// 	if (inputRef.current.value) {
			// 		if (inputRef.current.value.length >= 4) {
			// 			inputRef.current.style.width = inputRef.current.value.length * 7 + 3 + 'px';
			// 		}
			// 		if (inputRef.current.value.length >= 7) {
			// 			inputRef.current.style.width = inputRef.current.value.length * 7 + 7 + 'px';
			// 		}
			// 		if (inputRef.current.value.length < 4) {
			// 			inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
			// 		}
			// 	}
			// }
			setKurs('');
			setCena('');
			setItogoZakupka('');
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
	useEffect(() => {
		if (inputRef.current.value) {
			inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';

			// if (inputRef.current.value.length >= 4) {
			// 	inputRef.current.style.width = inputRef.current.value.length * 7 - 5 + 'px';
			// }
			// if (inputRef.current.value.length >= 7) {
			// 	inputRef.current.style.width = inputRef.current.value.length * 7 - 11 + 'px';
			// }
			// if (inputRef.current.value.length < 4) {
			// 	inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
			// }


		}
	}, [memoryInput])
	// const linkTR = useRef();

	function clickTr(e) {
		// e.preventDefault();
		// e.stopPropagation();
		// console.log(e.currentTarget)
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
				// e.preventDefault();
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				// if (newobj[index].select !== true) {
				// 	newobj.map((x) => (x.select = !newobj[index].select));
				// }

				newobj[index].select = !newobj[index].select;
			}
			setObjProduct(newobj);
		}
	}
	const inputRef = useRef();
	// const btnRef = useRef();
	function PlusMinusOpen(e) {
		e.stopPropagation();
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
		e.stopPropagation();
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

	// useEffect(() => {
	// 	window.addEventListener(
	// 		'resize',
	// 		function (event) {
	// 			setHoverWidth(document.querySelector('.warehouse-products')?.offsetWidth);
	// 		},
	// 		true
	// 	);
	// }, [objProduct.length]);
	// console.log(objProduct[index] > 0,index)
	useEffect(() => {
		if (addPrice) {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.add('visible');
			});
		} else {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.remove('visible');
			});
			// setTimeout(() => {
			// 	setAddPrice(false)
			// }, 200);
		}
	}, [addPrice])
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
					// ref={linkTR}
					// style={{height: rowHeight}}
					// key={index}
					onMouseEnter={objProduct[index].lock ? (e) => {

						let posElement = e.target.getBoundingClientRect();
						const tooltipBlock = document.getElementById('tooltipBtn');
						tooltipBlock.style.fontSize = '12px';
						plusminus = setTimeout(() => {
							const name = 'Олександр';
							tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
							tooltipBlock.style.left = posElement.x + 'px';
							tooltipBlock.style.top = posElement.y + 23 + 'px';
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
									{/* <div  style={{width: 84, height: 18}}> */}
									{/* const [ref, isShow, setIsShow ] = useOutsideAlert(false); */}

									{
										loadedLabelBlock ? <StatusBlock objProduct={objProduct} setObjProduct={setObjProduct} tooltipOn={tooltipOn} tooltipOff={tooltipOff} index={index} /> : ''
									}
									{/* <div className="gradi"></div> */}
									{/* </div> */}
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
					>
						<div
							className="wrap-nal-ostatok"
							onMouseEnter={objProduct[index].lock || addPrice ? () => { } : tooltipOn}
							onMouseLeave={objProduct[index].lock || addPrice ? () => { } : tooltipOff}
						>
							<button
								onDoubleClick={(e) => e.stopPropagation()}
								onClick={BtnMinus}
								disabled={objProduct[index].lock ? true : false}
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
								// onKeyUp={enterInput}
								maxLength={5}
								onClick={(e) => {
									setPodlozhka(true);
									e.stopPropagation();
								}}
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
								<svg
									width="15"
									height="15"
									viewBox="3 2 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									style={{ transform: 'rotate(45deg)' }}
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
							<div className='cena'>
								{addPrice && <div ref={focus} className='wrap' onMouseEnter={focusCena}>

									<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
										<span>{memoryCena >= 1 ? 'Добавлено' : 'Списать'}</span><span>{memoryCena} шт</span>
										{/* <div className='poloska'></div> */}
									</div>
									{memoryCena >= 1 ? <>
										<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
											<span>Закупка </span><input className='cenaInput' onChange={cenaChange} value={cena} />
											<div className='poloska'></div>
										</div>
										<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
											<span>Курс валюты</span><input value={kurs} onChange={kursChange} />
											<div className='poloska'></div>
										</div>
										<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
											<span>Итого </span><span>{itogoZakupka}</span>
										</div>
									</> :
										<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
											<span>Причина </span><input className='prichinaInput' onChange={pri4inaChange} value={pri4ina} />
											<div className='poloska'></div>
										</div>
									}



									<button onClick={saveBtn} disabled={cena !== '' && memoryCena >= 1 || pri4ina !== '' && memoryCena < 1 ? false : true} className="save-btn">Сохранить</button>
									{/* <div className='poloska'></div> */}
								</div>}
							</div>


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

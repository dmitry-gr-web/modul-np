import React, { useEffect, useState, useRef } from 'react';
import NpTtnDefault from './npTtnDefault/npTtnDefault';
import './ModulNp.scss';
// import React from 'react';
import { SvGBtnPlus, SvgLogoNV } from '../../img/svg-pack';
import DropMenu from './dropMenu/dropMenu';
import DropMenu2 from './dropMenu/dropMenu2';
import NpAutoOrderBack from './npAutoOrderBack/npAutoOrderBack';
import NpAutoChangeStatus from './npAutoChangeStatus/npAutoChangeStatus';
import DropMenuAdaptive from './dropMenuAdaptive/dropMenuAdaptive';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { json } from '../data/regions';
let time;
let time2;

const ModulNp = () => {
	// let regions = json.areas.map(x => x?.areas.map(y => y.name)).flat();
	let regions = json.areas
		.map((x) =>
			x?.areas.map((y, index) => {
				return { name: y.name, select: false };
			})
		)
		.flat()
		.map((x, index) => {
			return { ...x, id: index + 1 };
		});
	regions[0].select = true;
	let otdeleniya = json.areas
		.map((x) =>
			x?.areas.map((y, index) => {
				return { name: y.key, select: false };
			})
		)
		.flat()
		.map((x, index) => {
			return { ...x, id: index + 1 };
		});
	otdeleniya[0].select = true;
	// console.log(otdeleniya);

	const dataDropDown = [
		{ id: 1, name: 'Спересенко Олена Володимиривна', select: true },
		{ id: 2, name: 'Даша', select: false },
		{ id: 3, name: 'Маша', select: false },
		{ id: 4, name: 'Спересенко Олена Володимиривна', select: false },
		{ id: 5, name: 'Гусь', select: false },
		{ id: 6, name: 'Гризоглазов Дмитрий', select: false },
		{ id: 7, name: 'Епта чето там ало', select: false },
		{ id: 8, name: 'Спересенко Олена Jktrcfylhsyfd', select: false },
	];
	const dataDropDown2 = [
		{ id: 1, name: 'Гусь', select: true },
		{ id: 2, name: 'Даша', select: false },
		{ id: 3, name: 'Маша', select: false },
		{ id: 4, name: 'Спересенко Олена Володимиривна', select: false },
		{ id: 5, name: 'Гусь', select: false },
		{ id: 6, name: 'Гризоглазов Дмитрий', select: false },
		{ id: 7, name: 'Епта чето там ало', select: false },
		{ id: 8, name: 'Спересенко Олена Jktrcfylhsyfd', select: false },
	];
	const dataStatus = [
		{ id: 1, name: 'Принят', status: 'color-91d100', select: false },
		{ id: 2, name: 'Новый', status: 'color-515151', select: false },
		{ id: 3, name: 'Отказ', status: 'color-fd7777', select: false },
		{ id: 4, name: 'Отправлен', status: 'color-e2d317', select: false },
		{ id: 5, name: 'Передан', status: 'color-c6b922', select: false },
		{ id: 6, name: 'Упакован', status: 'color-928c42', select: false },
		{ id: 7, name: 'Деньги получены', status: 'color-2c8b11', select: false },
		{ id: 8, name: 'Завершён', status: 'color-00CC00', select: false },
		{ id: 9, name: 'Возврат (в пути)', status: 'color-da291c', select: false },
		{ id: 10, name: 'Возврат (завёршен)', status: 'color-FF0000', select: false },
	];
	const dataStatus2 = [
		{ id: 1, name: 'Все', select: false },
		{ id: 2, name: 'Принят', status: 'color-91d100', select: false },
		{ id: 3, name: 'Новый', status: 'color-515151', select: false },
		{ id: 4, name: 'Отказ', status: 'color-fd7777', select: false },
		{ id: 5, name: 'Отправлен', status: 'color-e2d317', select: false },
		{ id: 6, name: 'Передан', status: 'color-c6b922', select: false },
		{ id: 7, name: 'Упакован', status: 'color-928c42', select: false },
		{ id: 8, name: 'Деньги получены', status: 'color-2c8b11', select: false },
		{ id: 9, name: 'Завершён', status: 'color-00CC00', select: false },
		{ id: 10, name: 'Возврат (в пути)', status: 'color-da291c', select: false },
		{ id: 11, name: 'Возврат (завёршен)', status: 'color-FF0000', select: false },
	];
	const ostalosDney = [
		{ id: 1, name: '1 день до платного хранения', select: false },
		{ id: 2, name: '2 дня до платного хранения', select: false },
		{ id: 3, name: '3 дня до платного хранения', select: false },
		{ id: 4, name: '4 дня до платного хранения', select: false },
		{ id: 5, name: '5 дней до платного хранения', select: false },
		{ id: 6, name: '6 дней до платного хранения', select: false },
		{ id: 7, name: '7 дней до платного хранения', select: false },
	];
	const statusNovaPoshta = [
		{ id: 1, name: 'Ожидает', select: false },
		{ id: 2, name: 'Идет', select: false },
		{ id: 3, name: 'Скоро будет', select: false },
		{ id: 4, name: 'Нова пошта очікує надходження від відправника', select: false },
	];

	const [podlozhkaToggle, setPodlozhka] = useState(false);
	const [btnTogglePage, setBtnTogglePage] = useState(true);
	const [trList, setTr] = useState([]);
	const [trListStatus, setTrStatus] = useState([]);
	const [type, setType] = useState('day');
	const [typeMedium, setTypeMedium] = useState('vidpravnik');
	const [openMenu, setOpenMenu] = useState(false);
	// const [positionEl, setPositionEl] = useState(false);
	const [multiSelectOn, setMultiselect] = useState(false);
	// console.log(multiSelectOn)
	const [indexTr, setIndexTr] = useState(0);
	const inputRef = useRef();
	const inputRef2 = useRef();
	// console.log(trList)
	const scroll = useRef();
	const [scrollOn, setScrollOn] = useState(false);
	const [dataChange, setDataChange] = useState({
		data: {
			status: [],
			day: [],
			statusCrm: [],
			statusNV: [],
			statusAccept: [],
			vidpravnik: [
				{ id: 1, name: 'Самойлов Валерий Юрьевич (+380997778822)', select: true },
				{ id: 2, name: 'Спересенко Олена Володимиривна', select: false },
				{ id: 3, name: 'Гризоглазов Дмитрий', select: false },
			],
			nazvaMista: regions,
			viddilenyaVidpravku: otdeleniya,
			tipDostavki: [
				{ id: 1, name: 'Вантаж', select: true },
				{ id: 2, name: 'Посилка', select: false },
				{ id: 3, name: 'Документи', select: false },
				{ id: 4, name: 'Шини-диски', select: false },
				{ id: 5, name: 'Палети', select: false },
			],
			adresaVidpravnika: [
				{ id: 1, name: 'м.Кривий Рiг, пр.Миру 39', select: true },
				{ id: 2, name: 'м.Кривий Рiг, 4 заречный 20', select: false },
				{ id: 3, name: 'м.Кривий Рiг, пр.Миру 89 ', select: false },
			],
			platnikVidpravlenya: [
				{ id: 1, name: 'Одержувач', select: true },
				{ id: 2, name: 'Відправник', select: false },
				{ id: 3, name: 'Третя особа', select: false },
			],
			platnikZvorotnoiDostavki: [
				{ id: 1, name: 'Одержувач', select: true },
				{ id: 2, name: 'Відправник', select: false },
				{ id: 3, name: 'Третя особа', select: false },
			],
			tipOplati: [
				{ id: 1, name: 'Переказ коштів відправнику', select: true },
				{ id: 2, name: 'Контроль оплати', select: false },
			],
			formaOplati: [
				{ id: 1, name: 'Готівкова', select: true },
				{ id: 2, name: 'Безготівкова', select: false },
			],
			tehnologiaDostavki: [
				{ id: 1, name: 'Відділення-Відділення', select: true },
				{ id: 2, name: 'Відділення-Адреса', select: false },
				{ id: 3, name: 'Адреса-Відділення', select: false },
				{ id: 4, name: 'Адреса-Адреса', select: false },
			],

			punktVidachi: [
				{ id: 1, name: 'Пункт приймання-видачі (до 30 кг): вул. Центральна, 5', select: true },
				{ id: 2, name: 'Пункт приймання-видачі (до 5 кг): вул. Центральна, 10', select: false },
				{ id: 3, name: 'Пункт приймання-видачі (до 15 кг): вул. Волка, 2', select: false },
				{ id: 4, name: 'Пункт приймання-видачі (до 30 кг): вул. Оленив, 5', select: false },
				{ id: 4, name: 'Пункт приймання-видачі (до 10 кг): вул. Оленивка, 75', select: false },
			],
		},
	});
	// console.log(typeMedium);
	// {console.log(dataChange.data[typeMedium])}
	const [carouselDrop,setCarouselDrop] = useState({carousel: false, menu: 2});
	function addNewTr(e) {
		if (document.querySelectorAll('.targetBlock').length >= 6) {
			setTimeout(() => {
				document
					.querySelector('.np-scroll ')
					.querySelector('.simplebar-content-wrapper')
					.scrollTo({
						top: document.querySelector('.np-scroll .simplebar-content').offsetHeight,
					});
			}, 50);
			setScrollOn(true);
		}
		if (btnTogglePage) {
			// setIndexTr(0);
			// setTr([...trList, trList.length + 1]);
			dataChange.data.day.push([...ostalosDney]);
			dataChange.data.status.push([...dataStatus2]);
			setDataChange(dataChange);
			// setMultiselect(true);
			setIndexTr(dataChange.data.day.length - 1);
			setMultiselect(false);
			setCarouselDrop({menu : 2, carousel : true});
			console.log(dataChange)
			setTimeout(() => {
				let targetBlock = document.querySelectorAll('.targetBlock')[dataChange.data.day.length - 1];
				openAdaptiveMenu('day', targetBlock);
			}, 70);

			// console.log(trList);
		} else {
			// setIndexTr(0);
			// setTrStatus([...trListStatus, trListStatus.length + 1]);
			dataChange.data.statusNV.push([...statusNovaPoshta]);
			dataChange.data.statusCrm.push([...dataStatus]);
			dataChange.data.statusAccept.push([...dataStatus2]);
			setDataChange(dataChange);
			setMultiselect(false);
			setIndexTr(dataChange.data.statusNV.length - 1);
			setCarouselDrop({menu : 2, carousel : true});
			setTimeout(() => {
				let targetBlock =
					document.querySelectorAll('.targetBlock')[dataChange.data.statusNV.length - 1];
				// console.log(targetBlock.length);
				openAdaptiveMenu('statusNV', targetBlock);
			}, 70);
		}
	}

	function closeMenu() {
		// document.querySelector('.np-ttn-scroll .simplebar-track.simplebar-vertical').classList.remove('show-scroll');

		if (btnTogglePage) {
			if (dataChange.data.status[indexTr]?.filter((x) => x.select === true)?.length === 0) {
				let temp = [...dataChange.data.day];
				let temp2 = [...dataChange.data.status];
				temp.splice(indexTr, 1);
				temp2.splice(indexTr, 1);

				dataChange.data.status = temp2;
				dataChange.data.day = temp;
				setIndexTr(dataChange.data.day.length - 1);
				setDataChange(dataChange);
				setCarouselDrop({menu : 2, carousel : false});
			}
	
		} else {
			if (dataChange.data.statusAccept[indexTr].filter((x) => x.select === true).length === 0) {
				let temp = [...dataChange.data.statusNV];
				let temp2 = [...dataChange.data.statusCrm];
				let temp3 = [...dataChange.data.statusAccept];
				temp.splice(indexTr, 1);
				temp2.splice(indexTr, 1);
				temp3.splice(indexTr, 1);

				dataChange.data.statusNV = temp;
				dataChange.data.statusCrm = temp2;
				dataChange.data.statusAccept = temp3;

				setIndexTr(dataChange.data.day.length - 1);
				setDataChange(dataChange);
				setCarouselDrop({menu : 2, carousel : false});
			}
		}
	}

	// useEffect(() => {
	// 	let sum = 0;
	// 	if (document.querySelectorAll('.targetBlock').length > 0) {

	// 		let size = document.querySelectorAll('.targetBlock')[indexTr]?.offsetWidth;
	// 		let targetBlock = document.querySelectorAll('.targetBlock')[indexTr]?.children;
	// 		[...targetBlock]?.forEach((x) => {
	// 			x.style.overflow = '';
	// 			x.style.textOverflow = '';
	// 			x.style.minWidth = '';
	// 			x.style.marginRight = '7px';
	// 			x.classList.remove('tri-tochki');
	// 		});
	// 		let last = null;
	// 		[...targetBlock]?.forEach((x) => {
	// 			if (sum + x.offsetWidth + 7 < size - 35) {
	// 				sum += x.offsetWidth + 7;
	// 				x.style.overflow = '';
	// 				x.style.textOverflow = '';
	// 				x.style.minWidth = '';
	// 				x.style.marginRight = '7px';
	// 			} else if (sum + x.offsetWidth + 7 >= size - 35 && last === null) {
	// 				last = x.offsetWidth;
	// 				sum += x.offsetWidth + 7;
	// 				x.classList.add('tri-tochki');
	// 				x.style.overflow = 'hidden';
	// 				x.style.textOverflow = 'ellipsis';
	// 				x.style.minWidth = '20px';
	// 				x.style.marginRight = '15px';
	// 			} else {
	// 				sum += x.offsetWidth + 7;
	// 				x.style.display = 'none';
	// 			}
	// 		});
	// 		last = null;
	// 	}
	// }, [dataChange, btnTogglePage,podlozhkaToggle]);
	const arrTooltip = [
		'Позволяет автоматически вернуть заказ отправителю, до наступления платного хранения',
		'Позволяет автоматически изменить статус заказа в CRM, при обновлении "ТТН статуса" почтовой службы. Данные почтовой службы обновляются автоматически каждый час',
		'Данные которые будут подставляться автоматически при создании товарно-транспортной накладной. Данные можно будет изменить непосредственно при создании ТТН',
	];
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

			return text_pr;
		} else {
			return text;
		}
	}

	function toolTipOn(e, html) {
		console.log(e);
		e.stopPropagation();
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e?.currentTarget.getBoundingClientRect();
		tooltipBlock.innerHTML = html;
		tooltipBlock.style.fontSize = '14px';
		// tooltipBlock.style.top = posElement.y + 60 + 'px';
		// tooltipBlock.style.animation = 'delay-header 1s forwards';

		if (e.target.firstChild) {
			if (
				openMenu ||
				openMenuMedium ||
				e.target.className === 'big-btn' ||
				e.target.className === 'big-btn targetBlock' ||
				e.target.className === 'medium-btn'
			) {
			
				if (e.target.scrollWidth > e.target.offsetWidth) {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 36 + 'px';
					tooltipBlock.style.animation = 'delay-header 1s forwards';
					console.log('azaza')
				}
				if (e.target.querySelector('.tri-tochki')) {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 46 + 'px';
					tooltipBlock.style.animation = 'delay-header 1s forwards';
					console.log('azaza')
				}
				if (e.target.firstChild.scrollWidth > e.target.firstChild.offsetWidth) {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = e.target.innerText;

					if (e.target.className === 'big-btn') {
						tooltipBlock.style.left = posElement.x + 'px';
						tooltipBlock.style.top = posElement.y + 46 + 'px';
						tooltipBlock.style.animation = 'delay-header 1s forwards';
					} else {
						tooltipBlock.innerHTML = searchLine(e.target.innerText, valueAdaptiveMenu);
						if (e.currentTarget.querySelector('.color-form')) {
							tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
						} else {
							tooltipBlock.style.left = posElement.x + e.target.offsetWidth + 'px';
						}
						tooltipBlock.style.top = posElement.y + 'px';
						tooltipBlock.style.animation = 'delay-btn 0.3s forwards';

						if (e.target.className === 'medium-btn') {
							tooltipBlock.style.left = posElement.x + 'px';
							tooltipBlock.style.top = posElement.y + 28 + 'px';
							tooltipBlock.style.animation = 'delay-header 1s forwards';
						}
					}
				}
				if (e.target.className === 'count') {
					const fixText2 = e.target.innerText.replaceAll('(', '').replaceAll(')', '');
					if (e.target.innerText.includes('/')) {
						const fixText = e.target.innerText.split('/');
						tooltipBlock.innerHTML = `Элементов в фильтре:<br>- найдено ${fixText[0].replaceAll(
							'(',
							''
						)}<br>- выбрано ${fixText[1].replaceAll(')', '')}`;
					} else {
						tooltipBlock.innerHTML = `Элементов в фильтре:<br>- найдено ${fixText2}`;
					}
					tooltipBlock.style.fontSize = '12px';

					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 30 + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
			} else {
				if (e.target.className === 'add-new-np') {
					tooltipBlock.style.fontSize = '14px';
					tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 20 + 'px';
					tooltipBlock.style.top = posElement.y + 35 + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				} else if (e.target.className === 'btnDelete') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 12 + 'px';
					tooltipBlock.style.top = posElement.y + 38 + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				} else if (e.currentTarget.className === 'switch-btn') {
					tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 30 + 'px';
					tooltipBlock.style.top = posElement.y + 35 + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				} else {
					// console.log(e)
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 28 + 'px';
					tooltipBlock.style.animation = 'delay-header 1.5s forwards';

					// console.log('taras')
					// if (e.target.className === 'big-btn') {
					// 	tooltipBlock.style.left = posElement.x + 'px';
					// 	tooltipBlock.style.top = posElement.y + 46 + 'px';
					// 	tooltipBlock.style.animation = 'delay-header 1s forwards';

					// }
				}
			}
		} else {

		 if (e.target.className === 'slider round another') {
				tooltipBlock.style.fontSize = '12px';
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 27 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				console.log('srabotal');
			}

		}
	}
	function offTimerTooltip() {
		clearTimeout(time);
		time = setTimeout(() => {
			document.getElementById('tooltipBtn').style.animation = '';
		}, 1500);
	}
	function toolTipOff() {
		clearTimeout(time);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// let gus;
	useEffect(() => {
		// clearTimeout(gus);
		document.querySelector('.modul-np').addEventListener('wheel', function () {
			document.getElementById('tooltipBtn').style.animation = '';
		});
		// gus = setTimeout(() => {
		// 		document.getElementById('tooltipBtn').style.animation = 'delay-btn 0.3s forwards';
		// }, 100);
	});
	// fetch("https://jsonplaceholder.typicode.com/todos/1")
	// .then((response) => response.json())
	// .then((json) => console.log(json));
	const [openMenuMedium, setOpenMenuMedium] = useState(false);
	const [inputOn, setInputOn] = useState(false);

	function openMediumMenu(types, targetBlock) {
		clearTimeout(time2);
		// document.querySelector('.np-ttn-scroll .simplebar-track.simplebar-vertical').classList.add('show-scroll');
		let posEl = targetBlock?.getBoundingClientRect();
		let adapEl = document.querySelector('.dropMenu2');
		let block = document.querySelector('.np-default-setting').getBoundingClientRect();

		if (types === 'vidpravnik') {
			setTypeMedium('vidpravnik');
		}
		if (types === 'nazvaMista') {
			setTypeMedium('nazvaMista');
		}
		if (types === 'tipDostavki') {
			setTypeMedium('tipDostavki');
		}
		if (types === 'punktVidachi') {
			setTypeMedium('punktVidachi');
		}
		if (types === 'viddilenyaVidpravku') {
			setTypeMedium('viddilenyaVidpravku');
		}
		if (types === 'adresaVidpravnika') {
			setTypeMedium('adresaVidpravnika');
		}
		if (types === 'platnikVidpravlenya') {
			setTypeMedium('platnikVidpravlenya');
		}
		if (types === 'platnikZvorotnoiDostavki') {
			setTypeMedium('platnikZvorotnoiDostavki');
		}
		if (types === 'tipOplati') {
			setTypeMedium('tipOplati');
		}
		if (types === 'formaOplati') {
			setTypeMedium('formaOplati');
		}
		if (types === 'tehnologiaDostavki') {
			setTypeMedium('tehnologiaDostavki');
		}

		adapEl.style.top = posEl?.y - block.y + 'px';
		adapEl.style.left = '185px';
		// adapEl.style.width = '503px';
		document.querySelectorAll('.dropMenu2 .simplebar-content-wrapper').forEach((x) =>
			x.scrollTo({
				top: 0,
			})
		);
		setValueAdaptiveMenu('');
		setOpenMenuMedium(!openMenuMedium);
		setPodlozhka(true);
		if (types === 'vidpravnik' || types === 'viddilenyaVidpravku' || types === 'nazvaMista') {
			setInputOn(true);
			time2 = setTimeout(() => {
				inputRef2.current.value = '';
				inputRef2.current.focus();
			}, 200);
		} else {
			setInputOn(false);
		}
	}
	const [valueAdaptiveMenu, setValueAdaptiveMenu] = useState('');
	function openAdaptiveMenu(types, targetBlock) {
		let posEl = targetBlock?.getBoundingClientRect();
		let adapEl = document.querySelector('.dropMenuAdaptive');
		let block = document.querySelector('.np-change-order').getBoundingClientRect();

		// console.log(posEl.y - block.y);

		if (types === 'day') {
			setType('day');
			adapEl.style.top = posEl?.y - block.y + 'px';
			adapEl.style.left = '0px';
			adapEl.style.width = '202px';
		}
		if (types === 'status') {
			setType('status');
			adapEl.style.top = posEl?.y - block.y + 'px';
			adapEl.style.left = '210px';
			adapEl.style.width = '503px';
		}
		if (types === 'statusNV') {
			setType('statusNV');
			adapEl.style.top = posEl?.y - block.y + 'px';
			adapEl.style.left = '0px';
			adapEl.style.width = '202px';
		}
		if (types === 'statusCrm') {
			setType('statusCrm');
			adapEl.style.top = posEl?.y - block.y + 'px';
			adapEl.style.left = '212px';
			adapEl.style.width = '202px';
		}
		if (types === 'statusAccept') {
			setType('statusAccept');
			adapEl.style.top = posEl?.y - block.y + 'px';
			adapEl.style.left = '424px';
			adapEl.style.width = '288px';
		}
		document.querySelectorAll('.block-menu .simplebar-content-wrapper').forEach((x) =>
			x.scrollTo({
				top: 0,
			})
		);
		setValueAdaptiveMenu('');
		setOpenMenu(!openMenu);
		setPodlozhka(true);
		setTimeout(() => {
			inputRef.current.value = '';
			inputRef.current.focus();
		}, 100);
	}
	const [blockTable, setBlockTable] = useState(true);
	const [blockTable2, setBlockTable2] = useState(true);
	// function blockTableFunc(e) {
	// 	if (e.currentTarget.querySelector('input[type="checkbox"]').checked) {
	// 		setBlockTable(false);
	// 	} else {
	// 		setBlockTable(true);
	// 	}
	// }
	// function blockTableFunc2(e) {
	// 	if (e.currentTarget.querySelector('input[type="checkbox"]').checked) {
	// 		setBlockTable2(false);
	// 	} else {
	// 		setBlockTable2(true);
	// 	}
	// }
	function clickSwitch(e) {
		// e.target.querySelector('input[type="checkbox"]').click();
		if (e.currentTarget.querySelector('input[type="checkbox"]').checked) {
			e.currentTarget.querySelector('input[type="checkbox"]').checked = false;
			setBlockTable(true);
		} else {
			e.currentTarget.querySelector('input[type="checkbox"]').checked = true;
			setBlockTable(false);
		}
	}
	function clickSwitch2(e) {
		// e.target.querySelector('input[type="checkbox"]').click();
		if (e.currentTarget.querySelector('input[type="checkbox"]').checked) {
			e.currentTarget.querySelector('input[type="checkbox"]').checked = false;
			setBlockTable2(true);
		} else {
			e.currentTarget.querySelector('input[type="checkbox"]').checked = true;
			setBlockTable2(false);
		}
	}

	const [openApiKey, setApiKey] = useState(false);
	// console.log(openApiKey);
	// console.log('pidar')
	return (
		<div className="modul-np">
			{podlozhkaToggle && (
				<div
					className="modul-np-podlozhka"
					onClick={() => {
						setPodlozhka(false);
						setOpenMenu(false);
						closeMenu();
						setOpenMenuMedium(false);
					}}
				></div>
			)}
			<div className="wrapper-np">
				<div className="np-header">
					<span className="np-header-text">Настройки модуля: Новая Почта</span>
					<button className="np-close"></button>
				</div>
				<div className="np-logo">
					<img className="np-img" src={SvgLogoNV} alt="" />
				</div>
				<table
					className="user-name-cab"
					onMouseEnter={() => setApiKey(true)}
					onMouseLeave={() => setApiKey(false)}
				>
					<tbody>
						<tr>
							<td>Активний ключ АРI:</td>
							<td>
								<DropMenu
									searchLine={searchLine}
									inputRef={inputRef}
									valueAdaptiveMenu={valueAdaptiveMenu}
									setValueAdaptiveMenu={setValueAdaptiveMenu}
									btnActive={true}
									data={dataDropDown}
									podlozhka={setPodlozhka}
									podlozhkaToggle={podlozhkaToggle}
								/>
							</td>
						</tr>
					</tbody>
					<tfoot
						style={
							!openApiKey
								? { height: '0px', overflow: 'hidden' }
								: { height: '100px', overflow: '' }
						}
					>
						<tr>
							<td>Ключ</td>
							<td>Значение</td>
						</tr>
						<tr>
							<td>Ключ</td>
							<td>Значение</td>
						</tr>
						<tr>
							<td>Ключ</td>
							<td>Значение</td>
						</tr>
					</tfoot>
				</table>
				<div className="np-body">
					<div className="np-default-setting">
						<div className="np-default-header header-style">
							<div onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e, arrTooltip[2])}>
								Значения ТТН по умолчанию
							</div>
						</div>
						<SimpleBar autoHide={false} className="np-ttn-scroll" style={{ maxHeight: 278 }}>
							<NpTtnDefault
								openMediumMenu={openMediumMenu}
								searchLine={searchLine}
								inputRef={inputRef}
								valueAdaptiveMenu={valueAdaptiveMenu}
								setValueAdaptiveMenu={setValueAdaptiveMenu}
								data={dataDropDown}
								data2={dataDropDown2}
								data3={dataChange}
								podlozhka={setPodlozhka}
								podlozhkaToggle={podlozhkaToggle}
								toolTipOn={toolTipOn}
								toolTipOff={toolTipOff}
								offTimerTooltip={offTimerTooltip}
							/>
						</SimpleBar>
						<DropMenu2
							toolTipOff={toolTipOff}
							toolTipOn={toolTipOn}
							searchLine={searchLine}
							data={dataChange.data[typeMedium]}
							dataChange={dataChange}
							setDataChange={setDataChange}
							type={typeMedium}
							inputOn={inputOn}
							inputRef2={inputRef2}
							podlozhka={setPodlozhka}
							openMenuMedium={openMenuMedium}
							// setOpenMenu={setOpenMenu}
							setOpenMenuMedium={setOpenMenuMedium}
							valueAdaptiveMenu={valueAdaptiveMenu}
							setValueAdaptiveMenu={setValueAdaptiveMenu}
						/>
					</div>
					<div className="np-change-order">
						<div className="np-auto-header header-style">
							<div className={btnTogglePage ? 'btn-auto-order btn-np-select' : 'btn-auto-order'}>
								<span
									onMouseLeave={toolTipOff}
									onMouseEnter={(e) => toolTipOn(e, arrTooltip[0])}
									onClick={() => setBtnTogglePage(true)}
								>
									Автоматический возврат заказов
								</span>

								<span
									className="switch-btn"
									onMouseEnter={(e) => {
										toolTipOn(
											e,
											e.currentTarget.querySelector('input[type="checkbox"]').checked
												? 'Выключить'
												: 'Включить'
										);
									}}
									onMouseLeave={toolTipOff}
									onClick={(e) => {
										toolTipOn(
											e,
											e.currentTarget.querySelector('input[type="checkbox"]').checked
												? 'Выключен'
												: 'Включён'
										);
										offTimerTooltip();
										clickSwitch(e);
									}}
								>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</span>
							</div>
							<div className={!btnTogglePage ? 'btn-auto-status btn-np-select' : 'btn-auto-status'}>
								<span
									onMouseLeave={toolTipOff}
									onMouseEnter={(e) => toolTipOn(e, arrTooltip[1])}
									onClick={() => setBtnTogglePage(false)}
								>
									Автоматическая смена статусов
								</span>

								<span
									className="switch-btn"
									onMouseEnter={(e) => {
										toolTipOn(
											e,
											e.currentTarget.querySelector('input[type="checkbox"]').checked
												? 'Выключить'
												: 'Включить'
										);
									}}
									onMouseLeave={toolTipOff}
									onClick={(e) => {
										toolTipOn(
											e,
											e.currentTarget.querySelector('input[type="checkbox"]').checked
												? 'Выключена'
												: 'Включена'
										);
										offTimerTooltip();
										clickSwitch2(e);
									}}
								>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</span>
							</div>
						</div>
						{blockTable && btnTogglePage && <div className="blockTabel"></div>}
						{blockTable2 && !btnTogglePage && <div className="blockTabel2"></div>}
						{/* <div style={scrollOn ? { maxHeight: 320 } : {}} ref={scroll} autoHide={false} className="np-scroll"> */}
						<SimpleBar
							style={scrollOn ? { maxHeight: 330 } : {}}
							ref={scroll}
							autoHide={false}
							className="np-scroll"
						>
							{/* {console.log(dataChange)} */}

							{btnTogglePage ? (
								<NpAutoOrderBack
									multiSelectOn={multiSelectOn}
									setIndexTr={setIndexTr}
									setMultiselect={setMultiselect}
									openAdaptiveMenu={openAdaptiveMenu}
									dataChange={dataChange}
									setDataChange={setDataChange}
									type={type}
									data={dataChange.data[type]}
									index={indexTr}
									trList={trList}
									setTr={setTr}
									toolTipOn={toolTipOn}
									toolTipOff={toolTipOff}
									setType={setType}
									podlozhka={setPodlozhka}
									podlozhkaToggle={podlozhkaToggle}
									btnTogglePage={btnTogglePage}
								/>
							) : (
								<NpAutoChangeStatus
									multiSelectOn={multiSelectOn}
									setIndexTr={setIndexTr}
									setMultiselect={setMultiselect}
									openAdaptiveMenu={openAdaptiveMenu}
									dataChange={dataChange}
									setDataChange={setDataChange}
									type={type}
									data={dataChange.data[type]}
									index={indexTr}
									trListStatus={trListStatus}
									setTrStatus={setTrStatus}
									toolTipOn={toolTipOn}
									toolTipOff={toolTipOff}
									setType={setType}
									podlozhka={setPodlozhka}
									podlozhkaToggle={podlozhkaToggle}
									btnTogglePage={btnTogglePage}
								/>
							)}
						</SimpleBar>

						<DropMenuAdaptive
							searchLine={searchLine}
							inputRef={inputRef}
							valueAdaptiveMenu={valueAdaptiveMenu}
							setValueAdaptiveMenu={setValueAdaptiveMenu}
							dataChange={dataChange}
							setDataChange={setDataChange}
							multiSelectOn={multiSelectOn}
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
							type={type}
							data={dataChange.data[type]}
							index={indexTr}
							podlozhka={setPodlozhka}
							podlozhkaToggle={podlozhkaToggle}
							toolTipOn={toolTipOn}
							toolTipOff={toolTipOff}
							setCarouselDrop={setCarouselDrop}
							carouselDrop={carouselDrop}
							openAdaptiveMenu={openAdaptiveMenu}
							setMultiselect={setMultiselect}
							btnTogglePage={btnTogglePage}
							// trListStatus={trListStatus}
							// setTrStatus={setTrStatus}
							// trList={trList}
							// setTr={setTr}
							// btnTogglePage={btnTogglePage}
						/>

						<button
							onMouseLeave={toolTipOff}
							onMouseEnter={(e) => toolTipOn(e, 'Добавить')}
							onClick={addNewTr}
							className="add-new-np"
						>
							<SvGBtnPlus />
						</button>
					</div>
				</div>
				<div className="np-footer">
					<button className="instruction-modul">Инструкция к модулю</button>
					<button className="save-btn">Сохранить и закрыть</button>
				</div>
			</div>
		</div>
	);
};

export default ModulNp;

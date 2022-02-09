import { useEffect, useState, useRef } from 'react';
import NpTtnDefault from './components/npTtnDefault/npTtnDefault';
import './ModulNp.scss';
import React from 'react';
import { SvGBtnPlus, SvgLogoNV } from './img/svg-pack';
import DropMenu from './components/dropMenu/dropMenu';
import NpAutoOrderBack from './components/npAutoOrderBack/npAutoOrderBack';
import NpAutoChangeStatus from './components/npAutoChangeStatus/npAutoChangeStatus';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';

const ModulNp = () => {
	const dataDropDown = [
		{ id: 1, name: 'Спересенко Олена Володимиривна' },
		{ id: 2, name: 'Даша' },
		{ id: 3, name: 'Маша' },
		{ id: 4, name: 'Спересенко Олена Володимиривна' },
		{ id: 5, name: 'Гусь' },
		{ id: 6, name: 'Гризоглазов Дмитрий' },
		{ id: 7, name: 'Епта чето там ало' },
		{ id: 8, name: 'Спересенко Олена Jktrcfylhsyfd' },
	];
	const dataStatus = [
		{ id: 1, name: 'Принят', status: 'color-91d100' },
		{ id: 2, name: 'Новый', status: 'color-515151' },
		{ id: 3, name: 'Отказ', status: 'color-fd7777' },
		{ id: 4, name: 'Отправлен', status: 'color-e2d317' },
		{ id: 5, name: 'Передан', status: 'color-c6b922' },
		{ id: 6, name: 'Упакован', status: 'color-928c42' },
		{ id: 7, name: 'Деньги получены', status: 'color-2c8b11' },
		{ id: 8, name: 'Завершён', status: 'color-00CC00' },
		{ id: 9, name: 'Возврат (в пути)', status: 'color-da291c' },
		{ id: 10, name: 'Возврат (завёршен)', status: 'color-FF0000' },
	];
	const dayToData = [
		{ id: 1, name: '1 день до платного хранения' },
		{ id: 2, name: '2 дня до платного хранения' },
		{ id: 3, name: '3 дня до платного хранения азазазаз лололололо ококок' },
		{ id: 4, name: '4 дня до платного хранения' },
		{ id: 5, name: '5 дня до платного хранения' },
	];
	const dataDropDown2 = [
		{ id: 1, name: 'Гусь' },
		{ id: 2, name: 'Даша' },
		{ id: 3, name: 'Маша' },
		{ id: 4, name: 'Спересенко Олена Володимиривна' },
		{ id: 5, name: 'Гусь' },
		{ id: 6, name: 'Гризоглазов Дмитрий' },
		{ id: 7, name: 'Епта чето там ало' },
		{ id: 8, name: 'Спересенко Олена Jktrcfylhsyfd' },
	];
	const [dataChange, setDataChange] = useState({
		back: {
			status: [],
			day: []
		},
		statusAuto: {
			statusCrm:[],
			statusNV:[],
			statusAccept:[]

		}
	});

	const [podlozhkaToggle, setPodlozhka] = useState(false);
	const [btnTogglePage, setBtnTogglePage] = useState(true);
	const [trList, setTr] = useState([1]);
	const [trListStatus, setTrStatus] = useState([1]);
	// console.log(trList)
	const scroll = useRef();
	// const [scrollOn, setScrollOn] = useState(false);
	function addNewTr() {
		if(btnTogglePage){
			setTr([...trList, trList.length + 1]);
			dataChange.back.status.push([...dataStatus.map(x=> {return {...x}})])
			dataChange.back.day.push([...dayToData])
			setDataChange(dataChange)
		} else {
			setTrStatus([...trListStatus, trListStatus.length + 1]);
			dataChange.statusAuto.statusCrm.push([...dataStatus.map(x=> {return {...x}})])
			dataChange.statusAuto.statusNV.push([...dataStatus.map(x=> {return {...x}})])
			dataChange.statusAuto.statusAccept.push([...dataStatus.map(x=> {return {...x}})])
			setDataChange(dataChange)
		}
		// console.log(scroll.current.el.offsetHeight);
		// if (scroll.current.el.offsetHeight >= 320) {
		// 	setScrollOn(true);
		// 	console.log('scroll on');
		// } else {
		// 	setScrollOn(false);
		// 	console.log('scroll off');
		// }
	}

	console.log(dataChange);


	const arrTooltip = [
		'Позволяет автоматически вернуть заказ отправителю, до наступления платного хранения',
		'Позволяет автоматически изменить статус заказа в CRM, при обновлении "ТТН статуса" почтовой службы. Данные почтовой службы обновляются автоматически каждый час',
		'Данные которые будут подставляться автоматически при создании товарно-транспортной накладной. Данные можно будет изменить непосредственно при создании ТТН',
	];
	function toolTipOn(e, html) {
		e.stopPropagation();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '14px';
		tooltipBlock.innerHTML = html;
		let posElement = e.target.getBoundingClientRect();
		if (e.target.className === 'add-new-np') {
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 20 + 'px';
			tooltipBlock.style.top = posElement.y + 35 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		} else {
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 28 + 'px';
			tooltipBlock.style.animation = 'delay-header 1.5s forwards';
		}
	}
	function toolTipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	useEffect(() => {
		document.querySelector('.modul-np').addEventListener('wheel', function () {
			document.getElementById('tooltipBtn').style.animation = '';
		});
	});
	// fetch("https://jsonplaceholder.typicode.com/todos/1")
	// .then((response) => response.json())
	// .then((json) => console.log(json));
	return (
		<div className="modul-np">
			{podlozhkaToggle && <div className="modul-np-podlozhka" onClick={() => setPodlozhka(false)}></div>}
			<div className="wrapper-np">
				<div className="np-header">
					<span className="np-header-text">Настройки модуля: Новая Почта</span>
					<button className="np-close"></button>
				</div>
				<div className="np-logo">
					<img className="np-img" src={SvgLogoNV} alt="" />
				</div>
				<table className="user-name-cab">
					<tbody>
						<tr>
							<td>Активний ключ АРI:</td>
							<td>
								<DropMenu btnActive={true} data={dataDropDown} podlozhka={setPodlozhka} btnOff={podlozhkaToggle} />
							</td>
						</tr>
					</tbody>
				</table>
				<div className="np-body">
					<div className="np-default-setting">
						<div className="np-default-header header-style">
							<div onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e, arrTooltip[2])}>
								Значения ТТН по умолчанию
							</div>
						</div>
						<NpTtnDefault data={dataDropDown} data2={dataDropDown2} podlozhka={setPodlozhka} btnOff={podlozhkaToggle} />
					</div>
					<div className="np-change-order">
						<div className="np-auto-header header-style">
							<div className={btnTogglePage ? 'btn-auto-order btn-np-select' : 'btn-auto-order'}>
								<span className="button-order autoBackOrder np-tooltip" onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e, arrTooltip[0])} onClick={() => setBtnTogglePage(true)}>
									Автоматический возврат заказов
								</span>
								<span className="switches">
									<span className="switch-btn">
										<label className="switch">
											<input type="checkbox" />
											<span className="slider round"></span>
										</label>
									</span>
								</span>
							</div>
							<div className={!btnTogglePage ? 'btn-auto-status btn-np-select' : 'btn-auto-status'}>
								<span className="button-status autoChangeStatus np-tooltip" onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e, arrTooltip[1])} onClick={() => setBtnTogglePage(false)}>
									Автоматическая смена статусов
								</span>
								<span className="switches">
									<span className="switch-btn">
										<label className="switch">
											<input type="checkbox" />
											<span className="slider round"></span>
										</label>
									</span>
								</span>
							</div>
						</div>
						{/* <div style={scrollOn ? { maxHeight: 320 } : {}} ref={scroll} autoHide={false} className="np-scroll"> */}
						<div ref={scroll} autoHide={false} className="np-scroll">
							{/* {console.log(dataChange)} */}
							{btnTogglePage ? <NpAutoOrderBack  dataChange={dataChange}   setDataChange={setDataChange} inputOn={true} trList={dataChange.back} setTr={setTr} anotherStyle={true}   podlozhka={setPodlozhka} btnOff={podlozhkaToggle} btnTogglePage={btnTogglePage}  />  
							: <NpAutoChangeStatus dataChange={dataChange} setDataChange={setDataChange} inputOn={true} trListStatus={dataChange.statusAuto} anotherStyle={true} setTrStatus={setTrStatus} podlozhka={setPodlozhka} btnOff={podlozhkaToggle} btnTogglePage={btnTogglePage}  /> 	}
						</div>

						<button onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e, 'Добавить')} onClick={addNewTr} className="add-new-np">
							<SvGBtnPlus/>
						</button>
					</div>
				</div>
				<div className="np-footer">
					<button className="instruction-modul">Инструкция к модулю</button>
					<button className="save-btn">Зберегти</button>
				</div>
			</div>
		</div>
	);
};

export default ModulNp;

import React from 'react';
import OrderBackList from '../orderBackList/orderBackList';
import './npAutoOrderBack.scss';

const NpAutoOrderBack = (props) => {
	const arrTooltip = ['Оставшееся количество дней до платного хранения', 'Правило будет применяться только к заказам находящимся в выбранных ниже статусах CRM', 'Удалить'];
	function toolTipOn(e, html) {
		e.stopPropagation();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '14px';
		tooltipBlock.innerHTML = html;
		let posElement = e.target.getBoundingClientRect();
		if (e.target.className === 'btnDelete') {
			tooltipBlock.style.fontSize = '12px';
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 13 + 'px';
			tooltipBlock.style.top = posElement.y + 35 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		} else {
			tooltipBlock.style.fontSize = '14px';
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 30 + 'px';
			tooltipBlock.style.animation = 'delay-header 1s forwards';
		}
	}
	function toolTipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function deleteTr(indx) {
		// console.log(indx);
		let temp = [...props.trList];
		// let temp2 = [...props.dataChange.back];
		if (temp.length !== 1) {
			temp.splice(indx, 1);
			// temp2.splice(indx,1);
		}
		// console.log(temp);
		props.setTr(temp);
		// props.setDataChange(temp2)
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// const [dataChange, setDataChange] = useState({
	// 	back: [],
	// 	status: []
	// });
	return (
		<table className="np-auto-order">
			<thead>
				<tr>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[0])} onMouseLeave={toolTipOff}>Осталось дней:</span>
					</th>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[1])} onMouseLeave={toolTipOff}>Применять к статусу:</span>
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{/* {console.log(props.trList)} */}
				{props.trList.status.map((list, indx) => (
					<OrderBackList key={list} list={list} day={props.trList.day[indx]} index={indx} deleteTr={() => deleteTr(indx)} arrTooltip={arrTooltip} toolTipOn={toolTipOn} toolTipOff={toolTipOff} {...props} />
				))}
			</tbody>
		</table>
	);
};

export default NpAutoOrderBack;

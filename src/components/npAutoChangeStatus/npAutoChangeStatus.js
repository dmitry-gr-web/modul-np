import React from 'react';
import './npAutoChangeStatus.scss';
import AutoStatusList from '../autoStatusList/autoStatusList';
const NpAutoChangeStatus = (props) => {
	const arrTooltip = ['Если "ТТН статус" почтовой службы равен выбранному ниже', 'Cтатуc заказа в CRM будет автоматически изменён на выбранный ниже', 'Поиск заказов соответствующих настроенному правилу, производится по выбранным ниже статусам CRM'];
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
	function deleteTrStatus(indx) {
		console.log(indx);
		let temp = [...props.trListStatus];
		if (temp.length !== 1) {
			temp.splice(indx, 1);
		}
		console.log(temp);
		props.setTrStatus(temp);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	return (
		<table className="np-auto-status">
			<thead>
				<tr>
					<th><span onMouseEnter={e => toolTipOn(e, arrTooltip[0])} onMouseLeave={toolTipOff}>Статус почтовой службы:</span></th>
					<th><span onMouseEnter={e => toolTipOn(e, arrTooltip[1])} onMouseLeave={toolTipOff}>Статус в CRM:</span></th>
					<th><span onMouseEnter={e => toolTipOn(e, arrTooltip[2])} onMouseLeave={toolTipOff}>Применять к статусу:</span></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{props.trListStatus.statusAccept.map((list, indx) =>
					<AutoStatusList key={list} index={indx} list={list}  statusNV={props.trListStatus.statusNV[indx]} statusCrm={props.trListStatus.statusCrm[indx]}   deleteTrStatus={() => deleteTrStatus(indx)} toolTipOn={toolTipOn} toolTipOff={toolTipOff} {...props}/>
				)}
			</tbody>
		</table>
	);
};

export default NpAutoChangeStatus;

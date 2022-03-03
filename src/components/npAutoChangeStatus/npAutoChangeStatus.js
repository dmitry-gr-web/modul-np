import React from 'react';
import './npAutoChangeStatus.scss';
import AutoStatusList from './autoStatusList';
const NpAutoChangeStatus = (props) => {
	const arrTooltip = [
		'Если "ТТН статус" почтовой службы равен выбранному ниже',
		'Cтатуc заказа в CRM будет автоматически изменён на выбранный ниже',
		'Поиск заказов соответствующих настроенному правилу, производится по выбранным ниже статусам CRM',
	];
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
			tooltipBlock.style.top = posElement.y + 34 + 'px';
			tooltipBlock.style.animation = 'delay-header 1s forwards';
		}
	}
	function toolTipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function deleteTrStatus(indx) {
		console.log(indx);
		// let temp = [...props.trListStatus];
		let temp = [...props.dataChange.data.statusNV];
		let temp2 = [...props.dataChange.data.statusCrm];
		let temp3 = [...props.dataChange.data.statusAccept];

		temp.splice(indx, 1);
		temp2.splice(indx, 1);
		temp3.splice(indx, 1);
		props.setIndexTr(0);

		// let memoList = [...props.trListStatus];
		// memoList.splice(props.trListStatus.length - 1, 1);
		// props.setTrStatus(memoList);

		// props.setTrStatus([...props.trListStatus].splice(1,1));
		// props.setTrStatus(temp);
		props.dataChange.data.statusNV = temp;
		props.dataChange.data.statusCrm = temp2;
		props.dataChange.data.statusAccept = temp3;
		props.setDataChange({ ...props.dataChange });
		// console.log(props.dataChange);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	return (
		<table className="np-auto-status">
			<thead>
				<tr>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[0])} onMouseLeave={toolTipOff}>
							Статус почтовой службы:
						</span>
					</th>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[1])} onMouseLeave={toolTipOff}>
							Статус в CRM:
						</span>
					</th>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[2])} onMouseLeave={toolTipOff}>
							Применять к статусу:
						</span>
					</th>
					<th></th>
				</tr>
				<tr>
					<th colSpan="4">
						<div className="shadow-gradient"></div>
					</th>
				</tr>
			</thead>
			<tbody>
				{props.dataChange.data.statusNV.map((list, indx) => (
					<AutoStatusList
						key={indx}
						index={indx}
						indexTr={indx}
						list={list}
						deleteTrStatus={() => deleteTrStatus(indx)}
						toolTipOn={toolTipOn}
						toolTipOff={toolTipOff}
						{...props}
					/>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="4">
						<div className="shadow-gradient"></div>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default NpAutoChangeStatus;

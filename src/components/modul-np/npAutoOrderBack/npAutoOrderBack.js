import React from 'react';
import OrderBackList from './orderBackList';
import './npAutoOrderBack.scss';

const NpAutoOrderBack = (props) => {
	const arrTooltip = [
		'Оставшееся количество дней до платного хранения',
		'Правило будет применяться только к заказам находящимся в выбранных ниже статусах CRM',
		'Удалить',
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
	function deleteTr(indx) {
		let temp = [...props.dataChange.data.day];
		let temp2 = [...props.dataChange.data.status];
		// let temp = [...props.];

		temp.splice(indx, 1);
		temp2.splice(indx, 1);
		props.setIndexTr(0);

		// let memoList = [...props.trList];
		// memoList.splice(props.trList.length - 1, 1);
		// props.setTr(memoList);

		props.dataChange.data.day = temp;
		props.dataChange.data.status = temp2;
		props.setDataChange({ ...props.dataChange });
		// console.log(props.dataChange);
		// props.setDataChange()
		document.getElementById('tooltipBtn').style.animation = '';
	}
	return (
		<table className="np-auto-order">
			<thead>
				<tr>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[0])} onMouseLeave={toolTipOff}>
							Осталось дней:
						</span>
					</th>
					<th>
						<span onMouseEnter={(e) => toolTipOn(e, arrTooltip[1])} onMouseLeave={toolTipOff}>
							Применять к статусу:
						</span>
					</th>
					<th></th>
				</tr>
				<tr>
					<th colSpan="3">
						<div className="shadow-gradient"></div>
					</th>
				</tr>
			</thead>
			<tbody>
				{/* {console.log(props.trList)} */}
				{props.dataChange.data.day.map((list, indx) => (
					<OrderBackList

						key={indx}
						list={list}
						indexTr={indx}
						index={indx}
						deleteTr={() => deleteTr(indx)}
						arrTooltip={arrTooltip}
						toolTipOn={toolTipOn}
						toolTipOff={toolTipOff}
						{...props}
					/>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan='3'>
						<div className="shadow-gradient"></div>
					</td>
				</tr>
				{/* <tr><td colSpan='3'></td></tr> */}
			</tfoot>
		</table>
	);
};

export default NpAutoOrderBack;

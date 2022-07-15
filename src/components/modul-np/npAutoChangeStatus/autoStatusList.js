import React, { useState,useLayoutEffect } from 'react';
// import DropMenu from '../dropMenu/dropMenu';
import { SvgDeleteBtn } from '../../../img/svg-pack';

const AutoStatusList = (props) => {
	const [hover, setHover] = useState(false);
	let result = props.dataChange.data.statusAccept[props.indexTr]
	?.filter((x) => x.select === true)
	.map((x) => (
		<div key={x.id} style={{ marginRight: '7px' }} className={'color-form ' + x.status}>
			{x.name}
		</div>
	))
	useLayoutEffect(() => {
		// if (change) {
			let sum = 0;
			if (document.querySelectorAll('.targetBlock').length > 0) {
				let size = document.querySelectorAll('.targetBlock')[props.indexTr]?.offsetWidth;
				let targetBlock = document.querySelectorAll('.targetBlock')[props.indexTr]?.children;

				[...targetBlock]?.forEach((x) => {
					x.style.overflow = '';
					x.style.textOverflow = '';
					x.style.minWidth = '';
					x.style.marginRight = '7px';
					x.style.display = 'block';
					x.classList.remove('tri-tochki');
				});

				let last = null;
				[...targetBlock]?.forEach((x) => {
					if (sum + x.offsetWidth + 7 < size - 35) {
						sum += x.offsetWidth + 7;
						x.style.overflow = '';
						x.style.textOverflow = '';
						x.style.minWidth = '';
						x.style.marginRight = '7px';
					} else if (sum + x.offsetWidth + 7 >= size - 35 && last === null) {
						last = x.offsetWidth;
						sum += x.offsetWidth + 7;
						x.classList.add('tri-tochki');
						x.style.overflow = 'hidden';
						x.style.textOverflow = 'ellipsis';
						x.style.minWidth = '20px';
						x.style.marginRight = '15px';
					} else {
						sum += x.offsetWidth + 7;
						x.style.display = 'none';
					}
				});
				last = null;
			}

		// }
	}, [props.podlozhkaToggle,result]);
	return (
		<tr className="stroke-np-status" key={props.index}>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<div
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					onMouseLeave={props.toolTipOff}
					onClick={(e) => {
						props.setMultiselect(false);
						props.openAdaptiveMenu('statusNV', e.target);
						props.setIndexTr(props.indexTr);
					}}
					className="big-btn"
				>
					<span>
						{
							props.dataChange.data.statusNV[props.indexTr]?.filter((x) => x.select === true)[0]
								?.name
						}
					</span>
				</div>
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<div
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					onMouseLeave={props.toolTipOff}
					onClick={(e) => {
						props.setMultiselect(false);
						props.openAdaptiveMenu('statusCrm', e.target);
						props.setIndexTr(props.indexTr);
					}}
					className="big-btn"
				>
					<span
						className={
							props.dataChange.data.statusCrm[props.indexTr]
								? 'color-form ' +
								  props.dataChange.data.statusCrm[props.indexTr]?.filter(
										(x) => x.select === true
								  )[0]?.status
								: ''
						}
					>
						{
							props.dataChange.data.statusCrm[props.indexTr]?.filter((x) => x.select === true)[0]
								?.name
						}
					</span>
				</div>
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<div
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
					onMouseLeave={props.toolTipOff}
					onClick={(e) => {
						props.setMultiselect(true);
						props.openAdaptiveMenu('statusAccept', e.target);
						props.setIndexTr(props.indexTr);
					}}
					className="big-btn targetBlock"
					style={{ width: 267}}
				>
					{result}
				</div>
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<button
					className="btnDelete"
					onClick={props.deleteTrStatus}
					onMouseEnter={(e) => {
						props.toolTipOn(e, 'Удалить');
						setHover(true);
					}}
					onMouseLeave={(e) => {
						props.toolTipOff();
						setHover(false);
					}}
				>
					<SvgDeleteBtn />
				</button>
			</td>
		</tr>
	);
};

export default AutoStatusList;

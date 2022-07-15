import React, { useState,useLayoutEffect } from 'react';
import { SvgDeleteBtn } from '../../../img/svg-pack';
const OrderBackList = (props) => {
	const [hover, setHover] = useState(false);
	let result = props.dataChange.data.status[props.indexTr]
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
	// function getRandomInt(min, max) {
	// 	min = Math.ceil(min);
	// 	max = Math.floor(max);
	// 	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
	// }
	return (
		<tr className="stroke-np-order" key={props.index}>
			<td style={hover ? { opacity: 0.5 } : {}}>
				{/* <DropMenu {...props} data={props.day} day={true} /> */}
				<div
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					onMouseLeave={props.toolTipOff}
					onClick={(e) => {
						props.setMultiselect(false);

						props.openAdaptiveMenu('day', e.target);
						props.setIndexTr(props.indexTr);
					}}
					className="big-btn"
				>
					<span>
						{props.dataChange.data.day[props.indexTr]?.filter((x) => x.select === true)[0]?.name}
					</span>
				</div>
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<div
					style={{ width: 480 }}
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
					onMouseLeave={props.toolTipOff}
					onClick={(e) => {
						props.setMultiselect(true);

				
						props.openAdaptiveMenu('status', e.target);
						props.setIndexTr(props.indexTr);
						{
							console.log(e);
						}
					}}
					className={'big-btn targetBlock'}
				>
					{result}
				</div>
				{/* <DropMenu multiSelect={true} status={true} statusOn={true} {...props} data={props.list} /> */}
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<button
					className="btnDelete"
					onClick={props.deleteTr}
					onMouseEnter={(e) => {
						props.toolTipOn(e, props.arrTooltip[2]);
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

export default OrderBackList;

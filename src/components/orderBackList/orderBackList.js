import React, { useState } from 'react';
import DropMenu from '../dropMenu/dropMenu';
import { SvgDeleteBtn } from '../../img/svg-pack';
const OrderBackList = (props) => {
	const [hover, setHover] = useState(false);
	return (
		<tr className="stroke-np-order" key={props.key}>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<DropMenu {...props} data={props.day} day={true} />
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<DropMenu multiSelect={true} status={true} statusOn={true} {...props} data={props.list} />
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

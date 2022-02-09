import React, { useState } from 'react';
import DropMenu from '../dropMenu/dropMenu';
import { SvgDeleteBtn } from '../../img/svg-pack';

const AutoStatusList = (props) => {
	const [hover, setHover] = useState(false);
	return (
		<tr className="stroke-np-status" key={props.key}>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<DropMenu {...props} data={props.statusNV} statusNV={true} />
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<DropMenu {...props} status={true} data={props.statusCrm} statusCrm={true}/>
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<DropMenu multiSelect={true} status={true} statusAccept={true} {...props} data={props.list} />
			</td>
			<td style={hover ? { opacity: 0.5 } : {}}>
				<button
					className="btnDelete"
					onClick={props.deleteTr}
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

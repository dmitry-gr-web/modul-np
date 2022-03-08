import React, { useEffect, useState } from 'react';

const PodProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	index2,
	switchMenu,
	setObjProduct,
	tooltipOn,
	tooltipOff
}) => {
	const [swtichChecked, setSwitchChecked] = useState(
		objProduct[index].podProduct[index2].status.all
	);
	useEffect(() => {
		if (!objProduct[index].podProduct[index2].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function switchBtn(e) {
		if (e.target.className === 'status-all') {
			let newobj = [...objProduct];
			newobj[index].podProduct[index2].status.all = !newobj[index].podProduct[index2].status.all;
			if (newobj[index].podProduct[index2].status.all === false) {
				newobj[index].podProduct[index2].status.rozetka = false;
				newobj[index].podProduct[index2].status.prom = false;
				newobj[index].podProduct[index2].status.crm = false;
			} else {
				newobj[index].podProduct[index2].status.rozetka = true;
				newobj[index].podProduct[index2].status.prom = true;
				newobj[index].podProduct[index2].status.crm = true;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-rozetka') {
			let newobj = [...objProduct];
			newobj[index].podProduct[index2].status.rozetka =
				!newobj[index].podProduct[index2].status.rozetka;
			if (newobj[index].podProduct[index2].status.rozetka === true) {
				newobj[index].podProduct[index2].status.all = true;
			}
			if (
				newobj[index].podProduct[index2].status.rozetka === false &&
				newobj[index].podProduct[index2].status.prom === false &&
				newobj[index].podProduct[index2].status.crm === false
			) {
				newobj[index].podProduct[index2].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-prom') {
			let newobj = [...objProduct];
			newobj[index].podProduct[index2].status.prom = !newobj[index].podProduct[index2].status.prom;
			if (newobj[index].podProduct[index2].status.prom === true) {
				newobj[index].podProduct[index2].status.all = true;
			}
			if (
				newobj[index].podProduct[index2].status.rozetka === false &&
				newobj[index].podProduct[index2].status.prom === false &&
				newobj[index].podProduct[index2].status.crm === false
			) {
				newobj[index].podProduct[index2].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-crm') {
			let newobj = [...objProduct];
			newobj[index].podProduct[index2].status.crm = !newobj[index].podProduct[index2].status.crm;
			if (newobj[index].podProduct[index2].status.crm === true) {
				newobj[index].podProduct[index2].status.all = true;
			}
			if (
				newobj[index].podProduct[index2].status.rozetka === false &&
				newobj[index].podProduct[index2].status.prom === false &&
				newobj[index].podProduct[index2].status.crm === false
			) {
				newobj[index].podProduct[index2].status.all = false;
			}
			setObjProduct(newobj);
		}
	}
	// useEffect(() => {
	// 	if (document.querySelector('.switch-btn-warehouse input').checked === false) {
	// 		document.querySelectorAll('.switch-btn-small').forEach((x) => {
	// 			x.querySelector('input').checked = false;
	// 		});
	// 	} else {
	// 		document.querySelectorAll('.switch-btn-small').forEach((x) => {
	// 			x.querySelector('input').checked = true;
	// 		});
	// 	}
	// 	console.log(document.querySelector('.switch-btn-warehouse input').checked);
	// }, [checked]);
	return (
		<tr>
			<td
				onMouseEnter={() => setSwitchMenu(true)}
				onMouseLeave={() => setSwitchMenu(false)}
				className="adaptive-switch-trigger"
				style={{ paddingLeft: 0 }}
			>
				<label className="switch-btn-warehouse">
					<input
						type="checkbox"
						onChange={switchBtn}
						className="status-all"
						defaultChecked={objProduct[index].podProduct[index2].status.all}
						checked={objProduct[index].podProduct[index2].status.all}
					/>
					<span className="slider round"></span>
				</label>
			</td>
			<td
				style={!swtichChecked ? { opacity: 0.5 } : {}}
				onMouseEnter={() => setSwitchMenu(true)}
				onMouseLeave={() => setSwitchMenu(false)}
				className={switchMenu ? 'adaptive-switch adaptive-switch-on' : 'adaptive-switch'}
			>
				<div>
					<label className="switch-btn-small">
						<input
							type="checkbox"
							className="status-crm"
							onChange={switchBtn}
							defaultChecked={objProduct[index].podProduct[index2].status.crm}
							checked={objProduct[index].podProduct[index2].status.crm}
						/>
						<span className="slider round"></span>
					</label>

					<label style={{ margin: '0 15px' }} className="switch-btn-small">
						<input
							type="checkbox"
							onChange={switchBtn}
							className="status-rozetka"
							defaultChecked={objProduct[index].podProduct[index2].status.rozetka}
							checked={objProduct[index].podProduct[index2].status.rozetka}
						/>
						<span className="slider round"></span>
					</label>

					<label className="switch-btn-small">
						<input
							type="checkbox"
							onChange={switchBtn}
							className="status-prom"
							defaultChecked={objProduct[index].podProduct[index2].status.prom}
							checked={objProduct[index].podProduct[index2].status.prom}
						/>
						<span className="slider round"></span>
					</label>
				</div>
			</td>
			<td
				className="id-tovara"
				style={!swtichChecked ? { opacity: 0.5, textAlign: 'left' } : { textAlign: 'left' }}
			>
				{objProduct[index].podProduct[index2].id}
			</td>
			<td
				style={!swtichChecked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }}
			></td>
			<td
				style={!swtichChecked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }}
			></td>
			<td className="name-tovara" onMouseEnter={tooltipOn} onMouseLeave={tooltipOff} style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<span className={objProduct[index].podProduct ? 'arrowDeg' : ''}>
					{objProduct[index].podProduct[index2].name}
				</span>
			</td>
			<td style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<img
					style={{ width: 16, height: 16, position: 'absolute' }}
					src={objProduct[index].podProduct[index2].images}
					alt=""
				/>
				<span style={{ marginLeft: 20, whiteSpace: 'nowrap' }}>
					{objProduct[index].podProduct[index2].attribute}
				</span>
			</td>
		</tr>
	);
};

export default PodProductList;

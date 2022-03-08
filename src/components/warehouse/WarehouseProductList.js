import React, { useEffect, useState } from 'react';
import PodProductList from './PodProductList';

const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	switchMenu,
	setChecked,
	setObjProduct,
}) => {

	const [swtichChecked, setSwitchChecked] = useState(objProduct[index].status.all);
	useEffect(()=> {
		if(!objProduct[index].status.all){
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	},[objProduct]);
	function switchBtn(e) {
		if (e.target.className === 'status-all') {
			let newobj = [...objProduct];
			newobj[index].status.all = !newobj[index].status.all;
			if (newobj[index].status.all === false) {
				newobj[index].status.rozetka = false;
				newobj[index].status.prom = false;
				newobj[index].status.crm = false;
			} else {
				newobj[index].status.rozetka = true;
				newobj[index].status.prom = true;
				newobj[index].status.crm = true;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-rozetka') {
			let newobj = [...objProduct];
			newobj[index].status.rozetka = !newobj[index].status.rozetka;
			if (newobj[index].status.rozetka === true) {
				newobj[index].status.all = true;
			}
			if(newobj[index].status.rozetka === false && newobj[index].status.prom === false && newobj[index].status.crm === false){
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-prom') {
			let newobj = [...objProduct];
			newobj[index].status.prom = !newobj[index].status.prom;
			if (newobj[index].status.prom === true) {
				newobj[index].status.all = true;
			}
			if(newobj[index].status.rozetka === false && newobj[index].status.prom === false && newobj[index].status.crm === false){
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-crm') {
			let newobj = [...objProduct];
			newobj[index].status.crm = !newobj[index].status.crm;
			if (newobj[index].status.crm === true) {
				newobj[index].status.all = true;
			}
			if(newobj[index].status.rozetka === false && newobj[index].status.prom === false && newobj[index].status.crm === false){
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}


	}
	function tooltipOn(e) {
		// e.stopPropagation();
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		// tooltipBlock.innerHTML = html;
		tooltipBlock.style.fontSize = '14px';
		console.log(e)
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			tooltipBlock.innerText = e.target.innerText;

			tooltipBlock.style.left = posElement.x +10+'px';
			tooltipBlock.style.top = posElement.y + 17 + 'px';
			tooltipBlock.style.animation = 'delay-header 1s forwards';
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// console.log(objProduct);
	return (
		<>
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
							className="status-all"
							onChange={switchBtn}
							defaultChecked={objProduct[index].status.all}
							checked={objProduct[index].status.all}
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
								defaultChecked={objProduct[index].status.crm}
								checked={objProduct[index].status.crm}
							/>
							<span className="slider round"></span>
						</label>

						<label style={{ margin: '0 15px' }} className="switch-btn-small">
							<input
								type="checkbox"
								className="status-rozetka"
								onChange={switchBtn}
								defaultChecked={objProduct[index].status.rozetka}
								checked={objProduct[index].status.rozetka}
							/>
							<span className="slider round"></span>
						</label>

						<label className="switch-btn-small">
							<input
								type="checkbox"
								className="status-prom"
								onChange={switchBtn}
								defaultChecked={objProduct[index].status.prom}
								checked={objProduct[index].status.prom}
							/>
							<span className="slider round"></span>
						</label>
					</div>
				</td>
				<td
					className="id-tovara"
					style={!swtichChecked ? { opacity: 0.5, textAlign: 'left' } : { textAlign: 'left' }}
				>
					{objProduct[index].id}
				</td>
				<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }}>
					<span className="flags">{objProduct[index].country}</span>
				</td>
				<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }}>
					{objProduct[index].currency}
				</td>
				<td className="name-tovara" onMouseLeave={tooltipOff} onMouseEnter={tooltipOn} style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<span  className={objProduct[index].podProduct ? 'arrow' : ''}>
						{objProduct[index].name}
					</span>
				</td>
				<td style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<img
						style={{ width: 16, height: 16, position: 'absolute' }}
						src={objProduct[index].images}
						alt=""
					/>
					<span style={{ marginLeft: 20, whiteSpace: 'nowrap' }}>
						{objProduct[index].attribute}
					</span>
				</td>
			</tr>
			{/* {console.log(objProduct[index].podProduct?.length)} */}
			{objProduct[index].podProduct?.length !== 0
				? objProduct[index].podProduct?.map((x, index2) => (
						<PodProductList
							objProduct={objProduct}
							setSwitchMenu={setSwitchMenu}
							index2={index2}
							index={index}
							switchMenu={switchMenu}
							setChecked={setChecked}
							setObjProduct={setObjProduct}
							tooltipOn={tooltipOn}
							tooltipOff={tooltipOff}
						/>
				  ))
				: {}}
		</>
	);
};

export default WarehouseProductList;

import React from 'react';

const StatusBlock = ({ objProduct, index, setObjProduct, tooltipOn, tooltipOff }) => {
	function switchBtn(e) {
		e.stopPropagation();
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
			console.log(objProduct);
		}
		if (e.target.className === 'status-rozetka') {
			let newobj = [...objProduct];
			newobj[index].status.rozetka = !newobj[index].status.rozetka;
			if (newobj[index].status.rozetka === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
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
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
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
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
	}
	return (
		<>
			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-crm"
					onChange={objProduct[index].lock ? () => {} : switchBtn}
					// defaultChecked={objProduct[index].status.crm}
					checked={objProduct[index].status.crm}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}}></span>
			</label>

			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-rozetka"
					onChange={objProduct[index].lock ? () => { } : switchBtn}
					// defaultChecked={objProduct[index].status.rozetka}
					checked={objProduct[index].status.rozetka}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}}></span>
			</label>

			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-prom"
					onChange={objProduct[index].lock ? () => {} : switchBtn}
					// defaultChecked={objProduct[index].status.prom}
					checked={objProduct[index].status.prom}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}}></span>
			</label>
			<div className="gradi"></div>
		</>
	);
};

export default StatusBlock;

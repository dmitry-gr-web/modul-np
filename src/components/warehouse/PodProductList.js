import React, { useEffect, useState ,useRef} from 'react';

const PodProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	index2,
	switchMenu,
	setObjProduct,
	tooltipOn,
	tooltipOff,

	checked,
	PlusMinusOpen,
	PlusMinusClose,
	podlozhka,
	setPodlozhka,
	focusInput,
	setFocusInput,
	setIndexInput,
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
	useEffect(() => {
		if (!objProduct[index].podProduct[index2].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function BtnMinus(e) {
		let newobj = [...objProduct];
		if (newobj[index].podProduct[index2].ostatok !== 0) {
			newobj[index].podProduct[index2].ostatok = newobj[index].podProduct[index2].ostatok - 1;
		}
		setObjProduct(newobj);
	}
	function BtnPlus(e) {
		let newobj = [...objProduct];
		newobj[index].podProduct[index2].ostatok = newobj[index].podProduct[index2].ostatok + 1;
		setObjProduct(newobj);
	}
	function formatNumber(number) {
		let newnum = number
			.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
			.replace(',', '.');
		return newnum;
	}
	function formatNumber2(number) {
		let newnum = number.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newnum;
	}
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const prev = usePrevious(objProduct[index].podProduct[index2].ostatok);
	function inputChange(e) {
		setIndexInput(index);
		setFocusInput(true);
		setPodlozhka(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		let newobj = [...objProduct];
		newobj[index].podProduct[index2].ostatok = +e.target.value;
		setObjProduct(newobj);
	}
	function enterInput(e) {
		if (e.key === 'Enter') {
			if (podlozhka && prev !== objProduct[index].podProduct[index2].ostatok) {
				if (e.target.value.length >= 4) {
					e.target.style.width = e.target.value.length * 8 + 4 + 'px';
				}
				if (e.target.value.length >= 7) {
					e.target.style.width = e.target.value.length * 8 + 8 + 'px';
				}
				if (e.target.value.length < 4) {
					e.target.style.width = e.target.value.length * 8 + 'px';
				}
				e.target.blur();
				console.log('enter');
				setFocusInput(false);
			}
			setPodlozhka(false);
		}
	}
	const linkTR = useRef();
	useEffect(() => {

		let curent = linkTR.current.querySelectorAll('td');
		let width = [];
		let res = 0;
			setTimeout(() => {
				for (let i = 0; i < 7; i++) {
					// console.log(width.curent[i].offsetWidth)
					// width.push(curent[i].offsetWidth)
					// let width = [];
					// width.push(curent[i].offsetWidth);
					// if(!switchMenu && i !== 1) {
					// 	width.push(curent[i].offsetWidth);
					// }else if (switchMenu && i === 1){
					// 	width.push(curent[i].offsetWidth);
					// }else if(!switchMenu && i === 1){
					// 	width.push(0);
					// }
					if(!switchMenu) {
						width.push(curent[i].offsetWidth);
					} else if (switchMenu) {
						width.push(curent[i].offsetWidth);
					}	else if(switchMenu && i === 1) {
						width.push(0);
					}
					curent[i].style.left = res + 'px';
					res = width.reduce((prev, curr) => prev + curr, 0);
					curent[0].style.left = '0px';
					
				}
		
			}, 200);

	}, [objProduct, switchMenu]);
	function clickTr() {
		let newobj = [...objProduct];
	
			newobj[index].podProduct[index2].select = !newobj[index].podProduct[index2].select;
		
		setObjProduct(newobj);
		console.log(newobj);
	}
	return (
		<tr onClick={clickTr} className={objProduct[index].podProduct[index2].select ? 'select': ''} ref={linkTR}>
			<td
				onMouseEnter={() => setSwitchMenu(true)}
				onMouseLeave={() => setSwitchMenu(false)}
				className="adaptive-switch-trigger"
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
			<td className="nal-ostatok" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div
					onMouseLeave={PlusMinusClose}
					onMouseEnter={PlusMinusOpen}
					style={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					<button onClick={BtnMinus}></button>
					{/* {formatNumber2(x.ostatok)} */}
					<input
						type="text"
						value={
							focusInput
								? objProduct[index].podProduct[index2].ostatok
								: formatNumber2(objProduct[index].podProduct[index2].ostatok)
						}
						onChange={inputChange}
						onKeyUp={enterInput}
					/>
					<button onClick={BtnPlus}></button>
					<span style={{ paddingLeft: 3 }}>/</span>
				</div>
			</td>
			<td className="nal-rezerv" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].rezerv)}</div>
			</td>
			<td className="nal-otpr" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].otpr)}</div>
			</td>
			<td className="nal-vozvrat" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].vozvrat)}</div>
			</td>
			<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
				{formatNumber(objProduct[index].zakupka)}
			</td>
			<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
				{formatNumber(objProduct[index].prodazha)}
			</td>
			<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
				{formatNumber(objProduct[index].marzha)}
			</td>
			<td className="summa-suma1" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div style={{ textAlign: 'right',display: 'flex', justifyContent: 'end' }}>
					{formatNumber(
						objProduct[index].podProduct[index2].ostatok *
							objProduct[index].podProduct[index2].zakupka
					)}{' '}
					<span style={{ paddingLeft: 3 }}>/</span>
				</div>
			</td>
			<td className="summa-suma2" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma2)}</div>
			</td>
			<td className="summa-suma3" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma3)}</div>
			</td>
			<td className="summa-suma4" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma4)}</div>
			</td>
		</tr>
	);
};

export default PodProductList;

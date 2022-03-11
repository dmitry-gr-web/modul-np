import React, { useEffect, useState,useRef } from 'react';
import PodProductList from './PodProductList';

const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	switchMenu,
	setChecked,
	setObjProduct,
	checked,
	PlusMinusOpen,
	PlusMinusClose,
	podlozhka,
	setPodlozhka,
	focusInput,
	setFocusInput,
	setIndexInput,
	lastIndex,
	setLastIndex

}) => {
	const [swtichChecked, setSwitchChecked] = useState(objProduct[index].status.all);
	useEffect(() => {
		if (!objProduct[index].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
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
	function tooltipOn(e) {
		// e.stopPropagation();
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		// tooltipBlock.innerHTML = html;
		tooltipBlock.style.fontSize = '14px';
		console.log(e);
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			tooltipBlock.innerText = e.target.innerText;

			tooltipBlock.style.left = posElement.x + 10 + 'px';
			tooltipBlock.style.top = posElement.y + 17 + 'px';
			tooltipBlock.style.animation = 'delay-header 1s forwards';
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// console.log(objProduct);
	// const [swtichChecked, setSwitchChecked] = useState(objProduct[index].status.all);

	useEffect(() => {
		if (!objProduct[index].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function BtnMinus(e) {
		let newobj = [...objProduct];
		if (newobj[index].ostatok !== 0) {
			newobj[index].ostatok = newobj[index].ostatok - 1;
		}
		setObjProduct(newobj);
		setMemoryInput(newobj[index].ostatok);
	}
	function BtnPlus(e) {
		let newobj = [...objProduct];
		newobj[index].ostatok = newobj[index].ostatok + 1;
		setObjProduct(newobj);
		setMemoryInput(newobj[index].ostatok);
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
	function inputChange(e) {
		setIndexInput(index);
		// e.target.style.zIndex = 3;
		setFocusInput(true);
		setPodlozhka(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		// let newobj = [...objProduct];
		// newobj[index].ostatok = +e.target.value;
		// setObjProduct(newobj);
		setMemoryInput(e.target.value);
	}
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const [memoryInput, setMemoryInput] = useState(objProduct[index].ostatok);
	const prev = usePrevious(memoryInput);
	function enterInput(e) {
		if (e.key === 'Enter') {
			if (podlozhka && prev !== memoryInput) {
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
	// setMemoryInput(newobj[index].ostatok);
	useEffect(()=> {
		if(!podlozhka){
			let newobj = [...objProduct];
			newobj[index].ostatok = +memoryInput;
			setObjProduct(newobj);
		}

	},[podlozhka]);
	useEffect(() => {
		document.querySelectorAll('.nal-ostatok input').forEach((x) => {
			// x.style.width = x.value.replaceAll(' ', '').length * 8 + 'px';
			
			if (x.value.replaceAll(' ', '').length >= 4) {
				// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
				x.style.width = x.value.replaceAll(' ', '').length * 8 + 4 + 'px';
			}
			if (x.value.replaceAll(' ', '').length >= 7) {
				x.style.width = x.value.replaceAll(' ', '').length * 8 + 8 + 'px';
			}
			if (x.value.replaceAll(' ', '').length < 4) {
				x.style.width = x.value.replaceAll(' ', '').length * 8 + 'px';
			}
			
	
		});
		
	}, [memoryInput, objProduct]);

	const linkTR = useRef();
	useEffect(() => {

		let curent = linkTR.current.querySelectorAll('td');
		let width = [];
		let res = 0;
			setTimeout(() => {
				for (let i = 0; i < 7; i++) {
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
	
	function clickTr(e) {
		let newobj = [...objProduct];
		if (e.ctrlKey || e.metaKey) {
			newobj[index].select = 	!newobj[index].select;
		} else {
			if(newobj[index].select !== true){
				newobj.map(x => x.select = false);
			} 
			newobj[index].select = 	!newobj[index].select;
		}
		if(e.shiftKey) {
			// newobj[index].select = true;
			// newobj.slice(lastIndex, index);
			newobj.slice(lastIndex, index).map(x => x.select = true);
		}
		setLastIndex(index);
		setObjProduct(newobj);
		console.log(lastIndex, index);
	}

	return (
		<>
			<tr className={objProduct[index].select ? 'select': ''} onClick={clickTr} ref={linkTR}>
				<td
					onMouseEnter={() => setSwitchMenu(true)}
					onMouseLeave={() => setSwitchMenu(false)}
					className="adaptive-switch-trigger while2"
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
					style={!swtichChecked ? {  opacity: 0.4 } : {}}
					onMouseEnter={() => setSwitchMenu(true)}
					onMouseLeave={() => setSwitchMenu(false)}
					className={switchMenu ? 'adaptive-switch adaptive-switch-on while2' : 'adaptive-switch while2'}
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
					className="id-tovara while2"
					style={!swtichChecked ? {  opacity: 0.4, textAlign: 'left' } : { textAlign: 'left' }}
				>
					{objProduct[index].id}
				</td>
				<td className='while2'
					style={!swtichChecked ? {  opacity: 0.4, textAlign: 'center' } : { textAlign: 'center' }}
				>
					<span className="flags">{objProduct[index].country}</span>
				</td>
				<td className='while2'
					style={!swtichChecked ? {  opacity: 0.4, textAlign: 'center' } : { textAlign: 'center' }}
				>
					{objProduct[index].currency}
				</td>
				<td 
					className="name-tovara while2"
					onMouseLeave={tooltipOff}
					onMouseEnter={tooltipOn}
					style={!swtichChecked ? {  opacity: 0.4 } : {}}
				>
					<span className={objProduct[index].podProduct ? 'arrow' : ''}>
						{objProduct[index].name}
					</span>
				</td>
				<td className='while2' style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<img
						style={{ width: 16, height: 16, position: 'absolute' }}
						src={objProduct[index].images}
						alt=""
					/>
					<span style={{ marginLeft: 20, whiteSpace: 'nowrap' }}>
						{objProduct[index].attribute}
					</span>
				</td>
				<td className="nal-ostatok" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div
						onMouseLeave={PlusMinusClose}
						onMouseEnter={PlusMinusOpen}
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<button onClick={BtnMinus}></button>
	
						<input
							type="text"
							value={
								focusInput ? memoryInput : formatNumber2(+memoryInput)
							}
							onChange={inputChange}
							onKeyUp={enterInput}
							onClick={() => setFocusInput(true)}
						/>
						{/* {console.log(memoryInput)}
						{console.log(formatNumber2(memoryInput))} */}
						<button onClick={BtnPlus}></button>
						<span style={{paddingLeft:3}}>/</span>
					</div>

				</td>
				<td className="nal-rezerv" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber2(objProduct[index].rezerv)}</div>
				</td>
				<td className="nal-otpr" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber2(objProduct[index].otpr)}</div>
				</td>
				<td className="nal-vozvrat" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber2(objProduct[index].vozvrat)}</div>
				</td>
				<td style={!swtichChecked ? {  opacity: 0.4, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].zakupka)}
				</td>
				<td style={!swtichChecked ? {  opacity: 0.4, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].prodazha)}
				</td>
				<td style={!swtichChecked ? {  opacity: 0.4, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].marzha)}
				</td>
				<td className="summa-suma1" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
						{formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)}
						<span style={{paddingLeft:3}}>/</span>
					</div>
				</td>
				<td className="summa-suma2" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber(objProduct[index].suma2)}</div>
				</td>
				<td className="summa-suma3" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber(objProduct[index].suma3)}</div>
				</td>
				<td className="summa-suma4" style={!swtichChecked ? {  opacity: 0.4 } : {}}>
					<div>{formatNumber(objProduct[index].suma4)}</div>
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

							checked={checked}
							PlusMinusOpen={PlusMinusOpen}
							PlusMinusClose={PlusMinusClose}
							podlozhka={podlozhka}
							setPodlozhka={setPodlozhka}
							focusInput={focusInput}
							setFocusInput={setFocusInput}
							setIndexInput={setIndexInput}
						/>
				  ))
				: {}}
		</>
	);
};

export default WarehouseProductList;

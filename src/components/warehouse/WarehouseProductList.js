import React, { useEffect, useState, useRef,useMemo } from 'react';
// import PodProductList from './PodProductList';
let plusminus;
const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	switchMenu,
	setChecked,
	setObjProduct,
	checked,
	setBtnMenu,
	podlozhka,
	setPodlozhka,
	focusInput,
	setFocusInput,
	setIndexInput,
	lastIndex,
	setLastIndex,
	btnMenu,
	selectAll,
	setSelectAll,
}) => {
	// console.log(objProduct, index)
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
		// console.log(e);
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			tooltipBlock.innerText = e.target.innerText;

			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 23 + 'px';
			tooltipBlock.style.animation = 'delay-header 1s forwards';
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	useEffect(() => {
		if (!objProduct[index].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function BtnMinus(e) {
		e.stopPropagation();
		let newobj = [...objProduct];
		if (newobj[index].ostatok !== 0) {
			newobj[index].ostatok = newobj[index].ostatok - 1;
		}
		setObjProduct(newobj);
		setMemoryInput(newobj[index].ostatok);
	}
	function BtnPlus(e) {
		e.stopPropagation();
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
		setFocusInput(true);
		setPodlozhka(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		setMemoryInput(e.target.value);
	}
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok);
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
	useEffect(() => {
		if (!podlozhka) {
			let newobj = [...objProduct];
			newobj[index].ostatok = +memoryInput;
			setObjProduct(newobj);
		}
	}, [podlozhka]);
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
			for (let i = 0; i < 8; i++) {
				if (!switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu && i === 1) {
					width.push(0);
				}
				curent[i].style.left = res + 7 + 'px';
				res = width.reduce((prev, curr) => prev + curr, 0);
				curent[0].style.left = '7px';
			}
		}, 200);
	}, [objProduct, switchMenu]);

	function clickTr(e) {
		// e.preventDefault();
		// e.stopPropagation();
		let newobj = [...objProduct];
		if (e.ctrlKey || e.metaKey) {
			e.preventDefault();
			e.stopPropagation();
			newobj[index].select = !newobj[index].select;
		} else {
			if (newobj[index].select !== true) {
				newobj.map((x) => (x.select = false));
			}
			newobj[index].select = !newobj[index].select;
		}
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			newobj.slice(lastIndex, index).map((x, i) => {
				x.select = true;
			});
		}
		setLastIndex(index);
		setObjProduct(newobj);
		// console.log(lastIndex, index);
	}

	const inputRef = useRef();
	function PlusMinusOpen(e) {
		setBtnMenu(true);
		// e.querySelectorAll('button').forEach((x) => {
		// 	x.style.width = '16px';
		// });
		plusminus = setTimeout(() => {
		
			inputRef.current.select();
			inputRef.current.focus();
				// console.log(e.target.querySelector('input'))
			
		
		}, 100);
		
	
	}
	function PlusMinusClose(e) {
		if (!podlozhka) {
			setBtnMenu(false);
			// e.querySelectorAll('button').forEach((x) => {
			// 	x.style.width = '0px';
			// });
			inputRef.current.blur();
		}
		clearTimeout(plusminus)
	}
	// useMemo(()=> {
	// 	PlusMinusClose()
	// 	PlusMinusOpen()
	// }, [])
	// console.log(objProduct[index].status.all);
	return (
		<>
			{objProduct[index] && (
				<tr className={objProduct[index].select ? 'select' : ''} onClick={clickTr} ref={linkTR}>
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
						onMouseEnter={() => setSwitchMenu(true)}
						onMouseLeave={() => setSwitchMenu(false)}
						className={
							switchMenu ? 'adaptive-switch adaptive-switch-on while2' : 'adaptive-switch while2'
						}
					>
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
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
						onMouseLeave={tooltipOff}
						onMouseEnter={tooltipOn}
						className="id-tovara while2"
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'left' }
								: { textAlign: 'left' }
						}
					>
						{objProduct[index].id}
					</td>
					<td className="while2" style={{ textAlign: 'center' }}>
						<span style={!swtichChecked ? { opacity: 0.4 } : {}} className="flags">
							{objProduct[index].country}
						</span>
					</td>
					<td
						className="while2"
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'center' }
								: { textAlign: 'center' }
						}
					>
						{objProduct[index].currency}
					</td>
					<td className="name-tovara while2" onMouseLeave={tooltipOff} onMouseEnter={tooltipOn}>
						<span
							style={!swtichChecked ? { opacity: 0.4 } : {}}
							className={
								objProduct[index].podProduct === 0
									? 'arrow'
									: objProduct[index].podProduct === 1
									? 'arrowDeg'
									: ''
							}
						>
							{objProduct[index].name}
						</span>
					</td>
					<td className="while2">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							<img
								style={{ width: 16, height: 16, position: 'absolute' }}
								src={objProduct[index].images}
								alt=""
							/>
							<span
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={{
									marginLeft: 20,
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: 'block',
									maxWidth: 85,
								}}
							>
								{objProduct[index].attribute}
							</span>
						</div>
					</td>
					<td className="while2 shadow">
						<div className="shadow-left"></div>
						<div className="shadow-back"></div>
					</td>
					<td onMouseLeave={PlusMinusClose} onMouseEnter={PlusMinusOpen} className="nal-ostatok">
						<div
							style={
								!swtichChecked
									? { opacity: 0.4, display: 'flex', justifyContent: 'flex-end' }
									: { display: 'flex', justifyContent: 'flex-end' }
							}
						>
							<button style={btnMenu ? { width: 16 } : { width: 0 }} onClick={BtnMinus}></button>

							<input
								ref={inputRef}
								type="text"
								value={focusInput ? memoryInput : formatNumber2(+memoryInput)}
								onChange={inputChange}
								onKeyUp={enterInput}
								maxLength={5}
								onClick={() => {setFocusInput(true);setPodlozhka(true)}}
							/>

							<button style={btnMenu ? { width: 16 } : { width: 0 }} onClick={BtnPlus}></button>
							<span style={{ paddingLeft: 3 }}>/</span>
						</div>
					</td>
					<td className="nal-rezerv">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber2(objProduct[index].rezerv)}
						</div>
					</td>
					<td className="nal-otpr">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber2(objProduct[index].otpr)}
						</div>
					</td>
					<td className="nal-vozvrat">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber2(objProduct[index].vozvrat)}
						</div>
					</td>
					<td
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'right' }
								: { textAlign: 'right' }
						}
					>
						{formatNumber(objProduct[index].zakupka)}
					</td>
					<td
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'right' }
								: { textAlign: 'right' }
						}
					>
						{formatNumber(objProduct[index].prodazha)}
					</td>
					<td
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'right' }
								: { textAlign: 'right' }
						}
					>
						{formatNumber(objProduct[index].marzha)}
					</td>
					<td className="summa-suma1">
						<div
							style={
								!swtichChecked
									? { opacity: 0.4, textAlign: 'right', display: 'flex', justifyContent: 'end' }
									: { textAlign: 'right', display: 'flex', justifyContent: 'end' }
							}
						>
							{formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)}
							<span style={{ paddingLeft: 3 }}>/</span>
						</div>
					</td>
					<td className="summa-suma2">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber(objProduct[index].suma2)}
						</div>
					</td>
					<td className="summa-suma3">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber(objProduct[index].suma3)}
						</div>
					</td>
					<td className="summa-suma4">
						<div style={!swtichChecked ? { opacity: 0.4 } : {}}>
							{formatNumber(objProduct[index].suma4)}
						</div>
					</td>
				</tr>
			)}
			{/* {console.log(objProduct[index].podProduct?.length)} */}
			{/* {objProduct[index].podProduct?.length !== 0
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
							btnMenu={btnMenu}
							lastIndex={lastIndex}
							setLastIndex={setLastIndex}
						/>
				  ))
				: {}} */}
		</>
	);
};

export default WarehouseProductList;

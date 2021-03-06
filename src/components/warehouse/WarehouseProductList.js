import React, { useEffect, useState, useRef, useMemo, useContext } from 'react';
// import ProductCard from '../warehouse/Warehouse';
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
	flagSwitchMenu,
	// rowHeight,
	// key,
	translator,
	start,
	widthColum,
	height,
	setToggleCard,
	setGetIndex,
	indexParent,
	// widthColum,
	// setWidthColum
}) => {
	// console.log(objProduct, index)
	// const [swtichChecked, setSwitchChecked] = useState(objProduct[index].status.all);
	// useEffect(() => {
	// 	if (!objProduct[index].status.all) {
	// 		setSwitchChecked(false);
	// 	} else {
	// 		setSwitchChecked(true);
	// 	}
	// }, [objProduct]);
	// const toggleCard  = useContext(ProductCard);

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
	function tooltipOn(e) {
		// e.stopPropagation();
		clearTimeout(plusminus);
		// const tooltipBlock = document.getElementById('tooltipBtn');
		// let posElement = e.currentTarget.getBoundingClientRect();
		// // tooltipBlock.innerHTML = html;
		// tooltipBlock.style.fontSize = '14px';
		// console.log(e);
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				// tooltipBlock.innerHTML = html;
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '????????') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries','ukraine');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '????????') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries','russia');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '????????') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries','turkey');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}

		if (e.currentTarget.innerText === '???') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '???') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '???') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '$') {
			plusminus = setTimeout(() => {
				tooltipBlock.style.fontSize = '14px';
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}

		// console.log(e.target.querySelector('input'))
	}
	
	function tooltipOff() {
		clearTimeout(plusminus);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	// useEffect(() => {
	// 	if (!objProduct[index].status.all) {
	// 		setSwitchChecked(false);
	// 	} else {
	// 		setSwitchChecked(true);
	// 	}
	// }, [objProduct]);
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
	const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok);
	const [inputFormat, setInputFormat] = useState(false);
	function inputChange(e) {
		setIndexInput(index - start);
		setFocusInput(true);
		setPodlozhka(true);
		setInputFormat(true);
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
	// useEffect(() => {
	// 	if (!podlozhka) {
	// 		setInputFormat(false);
	// 		let newobj = [...objProduct];
	// 		newobj[index].ostatok = +memoryInput;
	// 		setObjProduct(newobj);
	// 	}
	// }, [podlozhka]);
	// useEffect(() => {
	// 	document.querySelectorAll('.nal-ostatok input').forEach((x) => {
	// 		// x.style.width = x.value.replaceAll('??', '').length * 8 + 'px';

	// 		if (x.value.replaceAll('??', '').length >= 4) {
	// 			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
	// 			x.style.width = x.value.replaceAll('??', '').length * 8 + 4 + 'px';
	// 		}
	// 		if (x.value.replaceAll('??', '').length >= 7) {
	// 			x.style.width = x.value.replaceAll('??', '').length * 8 + 8 + 'px';
	// 		}
	// 		if (x.value.replaceAll('??', '').length < 4) {
	// 			x.style.width = x.value.replaceAll('??', '').length * 8 + 'px';
	// 		}
	// 	});
	// }, [memoryInput, objProduct]);
	function inputLength(input) {
		if (input.replaceAll('??', '').length >= 4) {
			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
			return input.replaceAll('??', '').length * 8 + 4 + 'px';
		}
		if (input.replaceAll('??', '').length >= 7) {
			return input.replaceAll('??', '').length * 8 + 8 + 'px';
		}
		if (input.replaceAll('??', '').length < 4) {
			return input.replaceAll('??', '').length * 8 + 'px';
		}
	}
	const linkTR = useRef();
	// useEffect(() => {
	// 	let curent = linkTR.current.querySelectorAll('td');
	// 	let width = [];?????? ????????
	// 	let res = 0;
	// 	setTimeout(() => {
	// 		for (let i = 0; i < 8; i++) {
	// 			if (!switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu && i === 1) {
	// 				width.push(0);
	// 			}
	// 			curent[i].style.left = res + 7 + 'px';
	// 			res = width.reduce((prev, curr) => prev + curr, 0);
	// 			curent[0].style.left = '7px';
	// 		}
	// 	}, 200);
	// }, [objProduct, switchMenu]);

	function clickTr(e) {
		// e.preventDefault();
		// e.stopPropagation();
		// console.log(e.currentTarget)
		if (e.currentTarget) {
			let newobj = [...objProduct];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else {
				// e.preventDefault();
				e.stopPropagation();
				if (newobj[index].select !== true) {
					newobj.map((x) => (x.select = false));
				}
				newobj[index].select = !newobj[index].select;
			}
			if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj.slice(lastIndex, index).map((x, i) => {
					if (x.lock) {
						x.select = false;
					} else {
						x.select = true;
					}
				});
			}
			setLastIndex(index);
			setObjProduct(newobj);
		}

		// console.log(lastIndex, index);
	}

	const inputRef = useRef();

	// console.log(inputRef.current.value)

	// inputRef.current.style.width = inputRef.current.value.length * 8 + 4 + 'px';
	const btnRef = useRef();
	function PlusMinusOpen(e) {
		// setBtnMenu(true);

		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			// x.style.opacity = '1';
			x.classList.add('showBtn');
		});
		// document.querySelectorAll('.wrap-nal-ostatok').forEach((x) => {
		// 	x.style.right = '6px';
		// });
		// document.querySelectorAll('.nal-ostatok button').forEach((x) => {
		// 	x.style.opacity = '1';
		// 	x.classList.add('showBtn');
		// });
		// document.querySelectorAll('.wrap-nal-ostatok').forEach((x) => {
		// 	x.style.right = '6px';
		// });

		// btnRef.current.querySelectorAll('button').forEach(x => {
		// 	x.style.opacity = '1';
		// })
		// console.log(btnRef.current.firstChild.style.width = '16px')
		// console.log(btnRef.current.lastChild.style.width = '16px')
		// console.log(inputRef.current.offsetParent.children[0].children[0].style.width = '16px')
		plusminus = setTimeout(() => {
			inputRef?.current?.select();
			inputRef?.current?.focus();
			// console.log(e.target.querySelector('input'))
		}, 150);
	}
	function PlusMinusClose(e) {
		if (!podlozhka) {
			// setBtnMenu(false);

			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				// x.style.opacity = '1';
				x.classList.remove('showBtn');
			});
			// document.querySelectorAll('.nal-ostatok button').forEach((x) => {
			// 	x.style.opacity = '0';
			// });
			// document.querySelectorAll('.wrap-nal.ostatok').forEach((x) => {
			// 	x.style.right = '-5px';
			// });

			// btnRef.current.querySelectorAll('button').forEach(x => {
			// 	x.style.opacity = '0';
			// })

			inputRef.current.blur();
		}
		clearTimeout(plusminus);
	}
	// const [leftShadow,setLeftShadow] = useState(0);
	// useEffect(() => {
	// 	let width = document.querySelector('.sticky-body')?.offsetWidth;
	// 	// setLeftShadow(width);
	// 	document.querySelectorAll('.shadow').forEach((x) => {
	// 		x.style.left = width + 7 + 'px';
	// 	});
	// }, [objProduct, switchMenu]);
	// useMemo(()=> {
	// 	PlusMinusClose()
	// 	PlusMinusOpen()
	// }, [])
	// console.log(objProduct[index].status.all);
	function dblClick(e) {
		// console.log(e)
		// console.log(e)

		if (
			e.target.localName === 'button' ||
			e.target.offsetParent === 'label' ||
			e.target.className === '.slider.round'
		) {
		} else {
			setToggleCard(true);
			setGetIndex(index);
		}
	}

	return (
		<>
			{objProduct[index] && (
				<tr
					// style={height}
					className={
						objProduct[index].select && !objProduct[index].lock
							? 'select'
							: objProduct[index].lock
							? 'lockOrder'
							: ''
					}
					onClick={clickTr}
					ref={linkTR}
					// key={index}
					// style={{transition: '0.2s',opacity: 0}}
					onDoubleClick={dblClick}
					key={index}
				>
					<td className="hoverr">
						<div></div>
						<div className='div'></div>
					</td>
				
					<td className="sticky-body">
						<div className="sticky-block">
							<div
								onMouseEnter={() => setSwitchMenu(true)}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
								style={{ display: 'flex', height: '20px', alignItems: 'center' }}
							>
								<div style={{ minWidth: '51px', paddingRight: '10px' }}>
									<label className="switch-btn-warehouse">
										<input
											type="checkbox"
											className="status-all"
											onChange={switchBtn}
											// defaultChecked={objProduct[index].status.all}
											checked={objProduct[index].status.all}
										/>
										<span className="slider round"></span>
									</label>
								</div>

								<div
									className="animationFrame"
									style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
								>
									<label
										style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
										className="switch-btn-small"
									>
										<input
											type="checkbox"
											className="status-crm"
											onChange={switchBtn}
											// defaultChecked={objProduct[index].status.crm}
											checked={objProduct[index].status.crm}
										/>
										<span className="slider round"></span>
									</label>

									<label
										style={
											!objProduct[index].status.all
												? { opacity: 0.4, margin: '0 15px' }
												: { margin: '0 15px' }
										}
										className="switch-btn-small"
									>
										<input
											type="checkbox"
											className="status-rozetka"
											onChange={switchBtn}
											// defaultChecked={objProduct[index].status.rozetka}
											checked={objProduct[index].status.rozetka}
										/>
										<span className="slider round"></span>
									</label>

									<label
										style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
										className="switch-btn-small"
									>
										<input
											type="checkbox"
											className="status-prom"
											onChange={switchBtn}
											// defaultChecked={objProduct[index].status.prom}
											checked={objProduct[index].status.prom}
										/>
										<span className="slider round"></span>
									</label>
									<div className="gradi"></div>
								</div>
							</div>

							<div
								className="id-width"
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={
									!objProduct[index].status.all
										? {
												color: 'rgba(0,0,0,0.4)',
												textAlign: 'left',
												paddingRight: '10px',
												width: widthColum.id + 'px',
										  }
										: { textAlign: 'left', paddingRight: '10px', width: widthColum.id + 'px' }
								}
							>
								{objProduct[index].id}
							</div>
							<div style={{ minWidth: 51, paddingRight: '10px', textAlign: 'center' }}>
								<span
									style={
										!objProduct[index].status.all
											? { opacity: 0.4, color: 'rgba(0,0,0,1)' }
											: { color: 'rgba(0,0,0,1)' }
									}
									className="flags"
									onMouseLeave={tooltipOff}
									onMouseEnter={tooltipOn}
								>
									{objProduct[index].country}
								</span>
							</div>
							<div
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={
									!objProduct[index].status.all
										? {
												color: 'rgba(0,0,0,0.4)',
												textAlign: 'center',
												minWidth: 51,
												paddingRight: '10px',
										  }
										: { textAlign: 'center', minWidth: 51, paddingRight: '10px' }
								}
							>
								{objProduct[index].currency}
							</div>
							<div
								className="name-width"
								style={{
									overflow: 'hidden',
									paddingRight: '15px',
									width: widthColum.name - 15 + 'px',
									maxWidth: '172px',
								}}
							>
								<span
									className={
										objProduct[index].podProduct === 0
											? 'arrow'
											: objProduct[index].podProduct === 1
											? 'arrowDeg'
											: ''
									}
									style={objProduct[index].podProduct === 1 ? { opacity: 0.4 } : {}}
								></span>
								<span
									onMouseLeave={tooltipOff}
									onMouseEnter={tooltipOn}
									style={
										!objProduct[index].status.all
											? {
													opacity: 0.4,
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													display: 'block',
											  }
											: {
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													display: 'block',
													opacity: `${objProduct[index].podProduct === 1 ? 0.4 : ''}`,
											  }
									}
								>
									{objProduct[index].name}
								</span>
							</div>
							<div
								className="attribute-width"
								style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
							>
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
										width: widthColum.attribute + 'px',
										maxWidth: 85,
									}}
								>
									{objProduct[index].attribute}
								</span>
							</div>
							<div className="shadow-left"></div>
						</div>
						{/* <div className='hover'></div> */}
					</td>

					{/* <td
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
					</td> */}
					{/* <td className="while2" style={{ textAlign: 'center' }}>
						<span style={!swtichChecked ? { opacity: 0.4 } : {}} className="flags">
							{objProduct[index].country}
						</span>
					</td> */}
					{/* <td
						className="while2"
						style={
							!swtichChecked
								? { color: 'rgba(0,0,0,0.4)', textAlign: 'center' }
								: { textAlign: 'center' }
						}
					>
						{objProduct[index].currency}
					</td> */}
					{/* <td className="name-tovara while2" onMouseLeave={tooltipOff} onMouseEnter={tooltipOn}>
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
					</td> */}
					{/* <td className="while2">
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
					</td> */}

					{/* <td className="shadow">
						<div className="shadow-left"></div>
					
					</td> */}
					<td
						style={{ paddingLeft: '12px' }}
						onMouseLeave={PlusMinusClose}
						onMouseEnter={PlusMinusOpen}
						className="nal-ostatok"
					>
						<div
							ref={btnRef}
							style={
								!objProduct[index].status.all
									? {
											opacity: 0.4,
											display: 'flex',
											justifyContent: 'flex-end',
											paddingRight: '3px',
									  }
									: { display: 'flex', justifyContent: 'flex-end', paddingRight: '3px' }
							}
						>
							<div className="wrap-nal-ostatok" style={{ display: 'flex', position: 'absolute' }}>
								<button
									style={btnMenu ? { width: '16px' } : {}}
									onDoubleClick={(e) => e.stopPropagation()}
									onClick={BtnMinus}
								>
									<svg
										width="9"
										height="7"
										viewBox="0 0 9 7"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.26782 3.44748L8.08752 3.44747"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</button>

								<input
									ref={inputRef}
									type="text"
									onChange={inputChange}
									onKeyUp={enterInput}
									maxLength={5}
									onClick={(e) => {
										setFocusInput(true);
										setPodlozhka(true);
										setInputFormat(true);
										e.stopPropagation();
									}}
									value={focusInput && inputFormat ? memoryInput : formatNumber2(+memoryInput)}
									onDoubleClick={(e) => e.stopPropagation()}
									style={{
										color: 'rgba(0,0,0,0.7)',
										width: inputLength(memoryInput.toString()),
									}}
								/>

								<button
									style={btnMenu ? { width: '16px' } : {}}
									onDoubleClick={(e) => e.stopPropagation()}
									onClick={BtnPlus}
								>
									<svg
										width="15"
										height="15"
										viewBox="3 2 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										style={{ transform: 'rotate(45deg)', marginTop: '1px' }}
									>
										<path
											d="M7.26655 8.03662L12.0888 12.8589"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M7.26655 12.8589L12.0888 8.03659"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M7.26655 8.03662L12.0888 12.8589"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M7.26655 12.8589L12.0888 8.03659"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M7.26655 8.03662L12.0888 12.8589"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M7.26655 12.8589L12.0888 8.03659"
											stroke="black"
											strokeOpacity="0.7"
											strokeWidth="1.09116"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</button>
							</div>

							<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)' }}>/</span>
						</div>
					</td>
					<td className="nal-rezerv">
						<div
							style={
								!objProduct[index].status.all
									? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
									: { color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
							}
						>
							{formatNumber2(objProduct[index].rezerv)}
						</div>
					</td>
					<td className="nal-otpr">
						<div
							style={
								!objProduct[index].status.all
									? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
									: { color: 'rgba(0,0,0,0.5)', paddingRight: '4px' }
							}
						>
							{formatNumber2(objProduct[index].otpr)}
						</div>
					</td>
					<td className="nal-vozvrat">
						<div
							style={
								!objProduct[index].status.all
									? { opacity: 0.4, color: 'rgba(0,0,0,0.5)', paddingRight: '15px' }
									: { color: 'rgba(0,0,0,0.5)', paddingRight: '15px' }
							}
						>
							{formatNumber2(objProduct[index].vozvrat)}
						</div>
					</td>
					<td
						style={
							!objProduct[index].status.all
								? {
										color: 'rgba(0,0,0,0.4)',
										textAlign: 'right',
										paddingRight: '15px',
										position: 'relative',
								  }
								: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
						}
					>
						{formatNumber(objProduct[index].zakupka)}
					</td>
					<td
						style={
							!objProduct[index].status.all
								? {
										color: 'rgba(0,0,0,0.4)',
										textAlign: 'right',
										paddingRight: '15px',
										position: 'relative',
								  }
								: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
						}
					>
						{formatNumber(objProduct[index].prodazha)}
					</td>
					<td
						style={
							!objProduct[index].status.all
								? {
										color: 'rgba(0,0,0,0.4)',
										textAlign: 'right',
										paddingRight: '15px',
										position: 'relative',
								  }
								: { textAlign: 'right', paddingRight: '15px', position: 'relative' }
						}
					>
						{formatNumber(objProduct[index].marzha)}
					</td>
					<td className="summa-suma1">
						<div
							style={
								!objProduct[index].status.all
									? {
											opacity: 0.4,
											textAlign: 'right',
											display: 'flex',
											justifyContent: 'end',
											paddingRight: '3px',
									  }
									: {
											textAlign: 'right',
											display: 'flex',
											justifyContent: 'end',
											paddingRight: '3px',
									  }
							}
						>
							{formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)}
							<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)' }}>/</span>
						</div>
					</td>
					<td className="summa-suma2">
						<div
							style={
								!objProduct[index].status.all
									? { opacity: 0.4, paddingRight: '4px' }
									: { paddingRight: '4px' }
							}
						>
							{formatNumber(objProduct[index].suma2)}
						</div>
					</td>
					<td className="summa-suma3">
						<div
							style={
								!objProduct[index].status.all
									? { opacity: 0.4, paddingRight: '4px' }
									: { paddingRight: '4px' }
							}
						>
							{formatNumber(objProduct[index].suma3)}
						</div>
					</td>
					<td className="summa-suma4">
						<div style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}>
							{formatNumber(objProduct[index].suma4)}
						</div>
					</td>
				</tr>
			)}
		</>
	);
};

export default WarehouseProductList;

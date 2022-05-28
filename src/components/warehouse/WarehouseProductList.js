import React, { useEffect, useState, useRef,useMemo } from 'react';
import StatusBlock from './statusBlock';
// import ProductCard from '../warehouse/Warehouse';
// import PodProductList from './PodProductList';
// import useOutsideAlert from './outSideHook';
let plusminus;
const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	switchMenu,
	index,
	setObjProduct,
	podlozhka,
	setPodlozhka,
	// focusInput,
	// setFocusInput,
	setIndexInput,
	lastIndex,
	setLastIndex,
	setLoadedLabelBlock,
	loadedLabelBlock,
	flagSwitchMenu,
	translator,
	start,
	// widthColum,

	setToggleCard,
	setGetIndex,
	// rowHeight
	// hoverWidth,
	// setHoverWidth,
}) => {
	const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok);
	// const [inputFormat, setInputFormat] = useState(false);
	// const [ref, isShow, setIsShow ] = useOutsideAlert(false);

	// console.log('list')
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
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.style.fontSize = '12px';
			plusminus = setTimeout(() => {
				// tooltipBlock.innerHTML = html;

				tooltipBlock.innerText = e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		} else {
			if (e.currentTarget.className === 'attribute-width') {
				// console.log(e.currentTarget.children[0].getAttribute('src'))
				const src = e.currentTarget.children[0].getAttribute('src');
				const memory = e.currentTarget.children[1].innerText;
				const img = `<img style='width:100%;height:100%;object-fit:cover' src="${src}"/>`;
				plusminus = setTimeout(() => {
					// tooltipBlock.innerHTML = html;

					tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column;width:300px;height:300px;'>${memory}${img}</div>`;
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
					tooltipBlock.style.animation = 'delay-header 1s forwards';
				}, 150);
			}
		}
		if (e.currentTarget.innerText === '🇺🇦') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '🇷🇺') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '🇹🇷') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}

		if (e.currentTarget.innerText === '€') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '₽') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '₴') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (e.currentTarget.innerText === '$') {
			plusminus = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}, 150);
		}
		if (objProduct[index].lock) {
			plusminus = setTimeout(() => {
				const name = 'Олександр';
				tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
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
	// console.log(objProduct[0].ostatok);
	// let mem =  objProduct[0].ostatok;
	// mem = +mem.replaceAll(' ','');
	// console.log(mem)
	function BtnMinus(e) {
		e.stopPropagation();
		let newobj = [...objProduct];
		if (newobj[index].ostatok !== '0') {
			let ostatok = newobj[index].ostatok;
			let zakupka = newobj[index].zakupka;
			zakupka = +zakupka.replaceAll(/\s/gmu, '');
			ostatok = +ostatok.replaceAll(/\s/gmu, '');
			ostatok = ostatok - 1;
			zakupka = zakupka * ostatok;
			ostatok = ostatok.toLocaleString('ru-RU', {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
			zakupka = zakupka.toLocaleString('ru-RU', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).replace(',','.');

			newobj[index].ostatok = ostatok;
			newobj[index].suma1 = zakupka;
			setObjProduct([...newobj]);
			setMemoryInput(ostatok);
		}
	}
	function BtnPlus(e) {
		e.stopPropagation();
		let newobj = [...objProduct];
		let ostatok = newobj[index].ostatok;
		let zakupka = newobj[index].zakupka;
		zakupka = +zakupka.replaceAll(/\s/gmu, '');
		ostatok = +ostatok.replaceAll(/\s/gmu, '');
		ostatok = ostatok + 1;
		zakupka = zakupka * ostatok;
		ostatok = ostatok.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		zakupka = zakupka.toLocaleString('ru-RU', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).replace(',','.');

		newobj[index].ostatok = ostatok;
		newobj[index].suma1 = zakupka;
		setObjProduct([...newobj]);
		setMemoryInput(ostatok);
	}

	// function formatNumber(number) {
	// 	let newnum = number
	// 		.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	// 		.replace(',', '.');
	// 	return newnum;
	// }
	// function formatNumber2(number) {
	// 	let newnum = number.toLocaleString('ru-RU', {
	// 		minimumFractionDigits: 0,
	// 		maximumFractionDigits: 0,
	// 	});
	// 	return newnum;
	// }

	function inputChange(e) {
		setIndexInput(index - start);
		// setFocusInput(true);
		setPodlozhka(true);
		// setInputFormat(true);
		console.log(e.target.value);
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
					e.target.style.width = e.target.value.length * 7 + 3 + 'px';
				}
				if (e.target.value.length >= 7) {
					e.target.style.width = e.target.value.length * 7 + 7 + 'px';
				}
				if (e.target.value.length < 4) {
					e.target.style.width = e.target.value.length * 7 + 'px';
				}
				e.target.blur();
				console.log('enter');
				// setFocusInput(false);
			}
			setPodlozhka(false);
		}
	}
	useEffect(() => {
		// console.log(objProduct)
		// console.log(podlozhka)
		// console.log(memoryInput)
		console.log(podlozhka)
		if (!podlozhka) {
			// console.log('s')
			// setInputFormat(false);
			let newobj = [...objProduct];
			let ostatok = memoryInput ;
			let zakupka = newobj[index].zakupka;
			zakupka = +zakupka.replace(/\s/gmu, '');
			ostatok = +ostatok.replace(/\s/gmu, '');
			
			// ostatok = ostatok + 1;
			zakupka = zakupka * ostatok;
			ostatok = ostatok.toLocaleString('ru-RU', {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
			zakupka = zakupka.toLocaleString('ru-RU', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).replace(',','.');

			newobj[index].ostatok = ostatok;
			newobj[index].suma1 = zakupka;
			// console.log(newobj[index].ostatok)
			setMemoryInput(ostatok)
			// if(objProduct.length > 0) {
			// newobj[index].ostatok = memoryInput;
			setObjProduct([...newobj]);
			// }
			
		// console.log('ASDASD')
		}
	}, [podlozhka]);
	
	function inputLength(input) {
		// if (input.replaceAll(' ', '').length >= 4) {   !probel tut
		if (input.replaceAll(/\s/gmu, '').length >= 4) {
			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
			return input.replaceAll(/\s/gmu, '').length * 7 + 3 + 'px';
		}
		if (input.replaceAll(/\s/gmu, '').length >= 7) {
			return input.replaceAll(/\s/gmu, '').length * 7 + 7 + 'px';
		}
		if (input.replaceAll(/\s/gmu, '').length < 4) {
			return input.replaceAll(/\s/gmu, '').length * 7 + 'px';
		}
	}
	// const linkTR = useRef();

	function clickTr(e) {
		// e.preventDefault();
		// e.stopPropagation();
		// console.log(e.currentTarget)
		if (e.currentTarget && !objProduct[index].lock) {
			let newobj = [...objProduct];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj = newobj.map((x) => {
					return { ...x, select: false };
				});
				if (lastIndex < index) {
					newobj.slice(lastIndex, index).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				} else {
					newobj.slice(index, lastIndex).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				}
			} else {
				// e.preventDefault();
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				// if (newobj[index].select !== true) {
				// 	newobj.map((x) => (x.select = !newobj[index].select));
				// }

				newobj[index].select = !newobj[index].select;
			}
			setObjProduct(newobj);
		}
	}

	const inputRef = useRef();
	const btnRef = useRef();
	function PlusMinusOpen(e) {
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.add('showBtn');
		});
		plusminus = setTimeout(() => {
			if (!objProduct[index].lock) {
				inputRef?.current?.select();
				inputRef?.current?.focus();
			}
		}, 150);
	}
	function PlusMinusClose(e) {
		if (!podlozhka) {
			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				x.classList.remove('showBtn');
			});
			inputRef.current.blur();
		}
		clearTimeout(plusminus);
	}
	function dblClick(e) {
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


	// useEffect(() => {
	// 	window.addEventListener(
	// 		'resize',
	// 		function (event) {
	// 			setHoverWidth(document.querySelector('.warehouse-products')?.offsetWidth);
	// 		},
	// 		true
	// 	);
	// }, [objProduct.length]);
	// console.log(objProduct[index] > 0,index)
	return (
		<>
			{objProduct[index] && (
				<tr
					// style={height}
					className={
						objProduct[index].select
							? 'select speed'
							: objProduct[index].lock
							? 'lockOrder speed'
							: 'speed'
					}
					onClick={clickTr}
					// ref={linkTR}
					// style={{height: rowHeight}}
					// key={index}
					onMouseEnter={objProduct[index].lock ? tooltipOn : () => {}}
					onMouseLeave={objProduct[index].lock ? tooltipOff : () => {}}
					// style={{transition: '0.2s',opacity: 0}}
					onDoubleClick={!objProduct[index].lock ? dblClick : () => {}}
					key={index}
				>
					{/* <td className="hoverr">
						<div
							// {23}
							// style={{ width: hoverWidth  + 'px' }}
						></div>
						<div className="div"></div>
					</td> */}
					<td className="sticky-body">
						<div className="sticky-block">
							<div className="stickyBeforeBody"></div>
							<div
								onMouseEnter={() => {setSwitchMenu(true) }}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<div
									style={{
										minWidth: '51px',
										paddingRight: '10px',
										height: '18px',
										display: 'flex',
										alignItems: 'center',
									}}
								>
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
									{/* <div  style={{width: 84, height: 18}}> */}
									{/* const [ref, isShow, setIsShow ] = useOutsideAlert(false); */}

									{
										loadedLabelBlock ? <StatusBlock objProduct={objProduct} setObjProduct={setObjProduct} index={index}/> : ''
									}
									{/* <div className="gradi"></div> */}
									{/* </div> */}
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
												// width: widthColum.id + 'px',
										  }
										: { textAlign: 'left', paddingRight: '10px' }
								}
							>
								{objProduct[index].id}
							</div>
							<div
								className="flags"
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={{ opacity: `${!objProduct[index].status.all ? 0.4 : ''}` }}
							>
								{objProduct[index].country}
							</div>
							<div
								className="currency"
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={{
									color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
								}}
							>
								{objProduct[index].currency}
							</div>
							<div
								className="name-width"
								style={{
									overflow: 'hidden',
									paddingRight: '15px',
									// width: widthColum.name + 'px',
									width: 200,
									// maxWidth: '172px',
								}}
							>
								{objProduct[index].podProduct === 1 || objProduct[index].podProduct === 0 ? (
									<span
										className={
											objProduct[index].podProduct === 0
												? 'arrow'
												: objProduct[index].podProduct === 1
												? 'arrowDeg'
												: ''
										}
										style={
											objProduct[index].podProduct === 1 ||
											(objProduct[index].podProduct === 0 && objProduct[index].lock)
												? { opacity: 0.4 }
												: {}
										}
									></span>
								) : (
									''
								)}
								<span
									className="name"
									onMouseLeave={tooltipOff}
									onMouseEnter={tooltipOn}
									style={{
										opacity: `${
											objProduct[index].podProduct === 1 || !objProduct[index].status.all ? 0.4 : ''
										}`,
										fontSize: `${objProduct[index].podProduct === 1 ? '10px' : ''}`,
									}}
								>
									{objProduct[index].name}
								</span>
							</div>
							<div
								className="attribute-width"
								onMouseLeave={tooltipOff}
								onMouseEnter={tooltipOn}
								style={{
									opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
									display: 'flex',
									alignItems: 'center',
									width: 150,
								}}
							>
								<img
									style={{ width: 16, height: 16, position: 'absolute' }}
									src={objProduct[index].images}
									alt=""
								/>
								<span
									className="attribute"
									// style={{
									// 	height: '18px',
									// 	lineHeight: '18px',
									// 	marginLeft: 20,
									// 	whiteSpace: 'nowrap',
									// 	overflow: 'hidden',
									// 	textOverflow: 'ellipsis',
									// 	display: 'block',
									// 	// width: widthColum.attribute - 20 + 'px',
									// 	// maxWidth: 85,
									// 	// width:150
									// }}
								>
									{objProduct[index].attribute}
								</span>
							</div>
							<div className="shadow-left"></div>
						</div>
						{/* <div className='hover'></div> */}
					</td>

					<td
						onMouseLeave={PlusMinusClose}
						onMouseEnter={PlusMinusOpen}
						className="nal-ostatok"
						ref={btnRef}
						style={
							// !objProduct[index].status.all
							// 	? {
							// 			// opacity: 0.4,
							// 			color:'rgba(0, 0, 0, 0.4)',

							// 			paddingRight: 3,
							// 	  }
							// 	: 
								{ paddingRight: 3 }
						}
					>
						<div
							className="wrap-nal-ostatok"
							style={{ display: 'flex', position: 'absolute', lineHeight: '18px', height: 18 }}
						>
							<button
								// style={btnMenu ? { width: '16px' } : {}}
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
									// setFocusInput(true);
									setPodlozhka(true);
									// setInputFormat(true);
									e.stopPropagation();
								}}
								// value={focusInput && inputFormat ? memoryInput : +memoryInput}
								value={memoryInput}
								onDoubleClick={(e) => e.stopPropagation()}
								style={{
									color: `${!objProduct[index].status.all ?'rgba(0,0,0,0.4)' :'rgba(0,0,0,0.7)'}`,
									lineHeight: '18px',
									width: inputLength(memoryInput.toString()),
								}}
								readOnly={objProduct[index].lock ? true : false}
							/>

							<button
								// style={btnMenu ? { width: '16px' } : {}}
								onDoubleClick={(e) => e.stopPropagation()}
								onClick={BtnPlus}
							>
								<svg
									width="15"
									height="15"
									viewBox="3 2 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									style={{ transform: 'rotate(45deg)' }}
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
					</td>
					<td
						className="nal-rezerv"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,

							paddingRight: '4px',
						}}
					>
						{/* <div
							style={{
								opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
								color: 'rgba(0,0,0,0.5)',
								paddingRight: '4px',
								height: '18px',
								lineHeight: '18px',
							}}
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].rezerv)} */}
						{objProduct[index].rezerv}
						<span></span>
					</td>
					<td
						className="nal-otpr"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							// height: '18px',
							// lineHeight: '18px',
							// color: 'rgba(0,0,0,0.5)',
							paddingRight: '4px',
						}}
					>
						{/* <div
							style={{
								opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
								height: '18px',
								lineHeight: '18px',
								color: 'rgba(0,0,0,0.5)',
								paddingRight: '4px',
							}}
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].otpr)} */}
						{objProduct[index].otpr}
						<span></span>
					</td>
					<td
						className="nal-vozvrat"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							// height: '18px',
							// lineHeight: '18px',
							// color: 'rgba(0,0,0,0.5)',
							paddingRight: '15px',
						}}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber2(objProduct[index].vozvrat)} */}
						{objProduct[index].vozvrat}
						<span></span>
					</td>
					<td
						className="nal-zakupka"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{objProduct[index].zakupka}
						{/* {formatNumber(objProduct[index].zakupka)} */}
					</td>
					<td
						className="nal-prodazha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{objProduct[index].prodazha}
						{/* {formatNumber(objProduct[index].prodazha)} */}
					</td>
					<td
						className="nal-marzha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{/* {formatNumber(objProduct[index].marzha)} */}
						{objProduct[index].marzha}
					</td>
					<td
						className="summa-suma1"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,

							textAlign: 'right',
							display: 'flex',
							justifyContent: 'end',
							paddingRight: '3px',
						}}
					>
						{/* <div
					
						> */}
						{objProduct[index].suma1}
						{/* {objProduct[index].ostatok * objProduct[index].zakupka} */}
						{/* {formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)} */}
						<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)' }}>/</span>
						{/* </div> */}
					</td>
					<td
						className="summa-suma2"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
							color: 'rgba(0,0,0,0.5)',
						}}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber(objProduct[index].suma2)} */}
						{objProduct[index].suma2}
						<span></span>
					</td>
					<td
						className="summa-suma3"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
					>
						{/* <div
						
						>
						</div> */}
						{objProduct[index].suma3}
						<span></span>
						{/* {formatNumber(objProduct[index].suma3)} */}
					</td>
					<td
						className="summa-suma4"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
						}}
					>
						{/* <div
						
						>
						</div> */}
						{/* {formatNumber(objProduct[index].suma4)} */}
						{objProduct[index].suma4}
						<span></span>
					</td>
				</tr>
			)}
		</>
	);
};

export default WarehouseProductList;

import React, {useState,useEffect,useRef} from 'react';
import './range.scss';
const WarehouseDropRange = ({setSortActive,sortActive, setPodlozhka, podlozhka, zIndex, translator }) => {
	let arr = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30',
		'31',
		'32',
		'33',
		'34',
		'35',
		'36',
		'37',
		'38',
		'39',
		'40',
		'41',
		'42',
		'43',
		'44',
		'45',
		'46',
		'47',
		'48',
		'49',
		'50',
		'51',
		'∞',
	];
	const [minRange, setMinRange] = useState(0);
	const [maxRange, setMaxRange] = useState(52);
	const [activity, setActivity] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');

	const [rangesData, setRangesData] = useState([
		{ name: 'all', select: true},
		{ name: '< 0 шт', select: false },
	]);
    const [openMenu, setOpenMenu] = useState(false);

	function incMouseEnter(e) {
		// this.setState({ self: e.target })
		// document.addEventListener('keydown', inputKeyUp, false)
		// inputKeyUp(e);
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('.arrowsInc').style.opacity = 1;
		e.target.closest('.rangeslider')?.querySelector('.min').classList.add('inputThumbColor');
	}

	function incMouseLeave(e) {
		e.currentTarget.querySelector('input').blur();
		// document.removeEventListener('keydown', inputKeyUp)
		e.currentTarget.querySelector('.arrowsInc').style.opacity = 0;
		e.target.closest('.rangeslider')?.querySelector('.min').classList.remove('inputThumbColor');
	}

	function decMouseEnter(e) {
		// this.setState({ self: e.target })
		// document.addEventListener('keydown', this.inputKeyDown, false)
		// e.target.focus();
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('.arrowsDec').style.opacity = 1;
		e.target.closest('.rangeslider')?.querySelector('.max').classList.add('inputThumbColor');
	}

	function decMouseLeave(e) {
		// document.removeEventListener('keydown', this.inputKeyDown)
		e.currentTarget.querySelector('input').blur();
		e.currentTarget.querySelector('.arrowsDec').style.opacity = 0;
		e.target.closest('.rangeslider')?.querySelector('.max').classList.remove('inputThumbColor');
	}
	const [divInput, setDivInput] = useState(false);
	const [divInput2, setDivInput2] = useState(false);
	const [minInput, setMinInput] = useState('');
	const [maxInput, setMaxInput] = useState('');
	function rangeInput(e) {
		setDivInput(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		e.target.style.width = e.target.value.length * 7 + 'px';
		setMinInput(e.target.value);
		setMinRange(0);
		setMaxRange(52);
		// setDivInput2(true);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		// setMaxInput(e.target.value);
		e.target.closest('.rangeslider').querySelector('.minBG, .maxBG').style.width = 0;
	}
	function rangeInput2(e) {
		setDivInput2(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		e.target.style.width = e.target.value.length * 7 + 'px';
		setMaxInput(e.target.value);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);

		setMinRange(0);
		setMaxRange(52);
		e.target.closest('.rangeslider').querySelector('.minBG, .maxBG').style.width = 0;
	}
	function onWheel(e) {
		setDivInput(false);
		setDivInput2(false);
		setPodlozhka(true);
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.add('hide-menu');
		});
		e.currentTarget.querySelector('input').style.width = e.currentTarget.querySelector('input').value.length * 7 + 'px';
		e.currentTarget.querySelector('input').focus();
		e.target.closest('.warehouse-dropmenu').classList.remove('hide-menu');
		let wDelta = e.deltaY > 0 ? 'down' : 'up';
		if (e.target.classList.contains('range_min') && wDelta === 'down' && minRange + 1 < maxRange) {
			e.target.offsetParent.querySelector('.minBG').style.width =
				Math.round(minRange / 0.52, 2) + '%';
			setMinRange((prev) => {
				console.log('down');

				return prev + 1;
			});
			// console.log('down')
		} else if (e.target.classList.contains('range_min') && wDelta === 'up' && minRange - 1 >= 0) {
			e.target.offsetParent.querySelector('.minBG').style.width =
				Math.round(minRange / 0.52, 2) + '%';
			setMinRange((prev) => {
				console.log('up');

				return prev - 1;
			});
		} else if (
			e.target.classList.contains('range_max') &&
			wDelta === 'down' &&
			maxRange + 1 <= 52
		) {
			e.target.offsetParent.querySelector('.maxBG').style.width =
				100 - Math.round(maxRange / 0.52, 2) + '%';
			setMaxRange((prev) => prev + 1);
		} else if (
			e.target.classList.contains('range_max') &&
			wDelta === 'up' &&
			minRange < maxRange - 1
		) {
			e.target.offsetParent.querySelector('.maxBG').style.width =
				100 - Math.round(maxRange / 0.52, 2) + '%';
			setMaxRange((prev) => prev - 1);
		}

		console.log(maxRange, minRange);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
	}
	useEffect(() => {
		if (openMenu) {
			document.querySelector('.arrowsInc .arrowUp').style.top = '2px';
			document.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
			document.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
			document.querySelector('.arrowsInc .arrowDown').style.top = '7px';
			if (minRange === 0) {
				document.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
				document.querySelector('.arrowsInc .arrowUp').style.top = '2px';
			} else if (minRange === 51) {
				document.querySelector('.arrowsInc .arrowUp').style.top = '5px';
				document.querySelector('.arrowsInc .arrowDown').style.opacity = 0;
			}
			document.querySelector('.arrowsDec .arrowUp').style.top = '2px';
			document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
			document.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
			document.querySelector('.arrowsDec .arrowDown').style.top = '7px';
			if (maxRange === 52) {
				document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowUp').style.top = '2px';
				document.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
				// document.querySelector('.arrowsDec .arrowUp').style.top = '5px';
			} else if (maxRange !== 52) {
				document.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
				document.querySelector('.arrowsDec .arrowDown').style.top = '7px';
			}
			if(maxRange === 52 && minRange === 0 && !rangesData[1].select){
				rangesData[0].select = true;
				setRangesData([...rangesData]);
			}
			warehouse.current.querySelector('.inputDataMin').style.width = warehouse.current.querySelector('.inputDataMin').value.length * 7 + 'px'
			warehouse.current.querySelector('.inputDataMax').style.width = warehouse.current.querySelector('.inputDataMax').value.length * 7 + 'px'
			// if(maxRange === 52 && minRange === 0){
			// 	if(rangesData[1].select) {
			// 		rangesData[1].select = true
			// 		rangesData[0].select = false
			// 	}else if(rangesData[0].select) {
			// 		rangesData[0].select = true
			// 		rangesData[1].select = false
			// 	}
			// 	rangesData[0].select = true;
			// 	setRangesData([...rangesData]);
			// }
		}
	}, [maxRange, minRange]);
	function inputKeyUp(e) {
		setPodlozhka(true);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.add('hide-menu');
		});
		e.currentTarget.closest('.warehouse-dropmenu').classList.remove('hide-menu');
		if (38 === e.keyCode) {
			e.preventDefault();
			setDivInput(false);
			if (e.currentTarget.classList.contains('range_min') && minRange - 1 >= 0) {
				setMinRange((prev) => prev - 1);
			}
		}
		if (40 === e.keyCode) {
			e.preventDefault();
			setDivInput(false);
			if (e.currentTarget.classList.contains('range_min') && minRange + 1 < maxRange) {
				setMinRange((prev) => prev + 1);
			} 
		}
		e.currentTarget.closest('.rangeslider').querySelector('.minBG').style.width =
			Math.round(minRange / 0.52, 2) + '%';
	}
	function inputKeyDown(e) {
		setPodlozhka(true);
		rangesData.map((x) => (x.select = false));
		setRangesData(rangesData);
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.add('hide-menu');
		});
		e.currentTarget.closest('.warehouse-dropmenu').classList.remove('hide-menu');
		if (38 === e.keyCode) {
			e.preventDefault();
			setDivInput2(false);
			if (e.currentTarget.classList.contains('range_max') && maxRange - 1 > minRange) {
				setMaxRange((prev) => prev - 1);
			} 
		}
		if (40 === e.keyCode) {
			e.preventDefault();
			setDivInput2(false);
			if (e.currentTarget.classList.contains('range_max') && maxRange + 1 <= 52) {
				setMaxRange((prev) => prev + 1);
			} 
		}
		e.currentTarget.closest('.rangeslider').querySelector('.maxBG').style.width =
			100 - Math.round(maxRange / 0.52, 2) + '%';
	}
	const resultRef = useRef();
	const warehouse = useRef();
	function rangesListClick(index, e) {
		setPodlozhka(true);
		setDivInput(false);
		setDivInput2(false);
		setMinRange(0);
		setMaxRange(52);
		if (index === 0) {
			console.log('vse');
			rangesData[0].select = true;
			rangesData[1].select = false;
			resultRef.current.innerHTML = '';
			document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
				// x.style.visibility = 'visible';
				x.classList.remove('hide-menu');
			});
			setArrowToggle(false);
			document.querySelector('.contentScroll').style.overflow = 'auto';
			// document.querySelector('.warehouse-table .simplebar-content-wrapper').style.overflow = 'scroll';
			setOpenMenu(false);
			setPodlozhka(false);
		}
		if (index === 1) {
			console.log('0');
			resultRef.current.innerHTML = '< 0 шт';
			rangesData[0].select = false;
			rangesData[1].select = true;
		}
		
		warehouse.current.querySelector('.inputDataMin').style.width = '7px'
		warehouse.current.querySelector('.inputDataMax').style.width = '7px'
	
		e.target.closest('.rangeslider').querySelector('.minBG').style.width = 0;
		e.target.closest('.rangeslider').querySelector('.maxBG').style.width = 0;
	
		setRangesData([...rangesData]);
	}
	// function lenghtInput(e) {
	// 	e.currentTarget.querySelector('input').style.width =
	// 		e.currentTarget.querySelector('input').value.length * 7 + 'px';
	// }
	//ZAPOMNIT PRI VHODE ZNACHENIYA
	useEffect(()=> {
		if (warehouse?.current !== null && warehouse.current.querySelector('.inputDataMin') !== null && warehouse.current.querySelector('.inputDataMax') !== null){
			warehouse.current.querySelector('.inputDataMin').style.width = warehouse.current.querySelector('.inputDataMin').value.length * 7 + 'px'
			warehouse.current.querySelector('.inputDataMax').style.width = warehouse.current.querySelector('.inputDataMax').value.length * 7 + 'px'
			warehouse.current.querySelector('.minBG').style.width = Math.round(minRange / 0.52, 2) + '%';
			warehouse.current.querySelector('.maxBG').style.width = 100 - Math.round(maxRange / 0.52, 2) + '%';


			warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '2px';
			warehouse.current.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsInc .arrowDown').style.top = '7px';
			if (minRange === 0) {
				warehouse.current.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
				warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '2px';
			} else if (minRange === 51) {
				warehouse.current.querySelector('.arrowsInc .arrowUp').style.top = '5px';
				warehouse.current.querySelector('.arrowsInc .arrowDown').style.opacity = 0;
			}
			warehouse.current.querySelector('.arrowsDec .arrowUp').style.top = '2px';
			warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
			warehouse.current.querySelector('.arrowsDec .arrowDown').style.top = '7px';
			if (maxRange === 52) {
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.top = '2px';
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
				// document.querySelector('.arrowsDec .arrowUp').style.top = '5px';
			} else if (maxRange !== 52) {
				warehouse.current.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
				warehouse.current.querySelector('.arrowsDec .arrowDown').style.top = '7px';
			}
		}

	},[openMenu]);
	//ZAPOMNIT PRI VHODE ZNACHENIYA
	function menuOn(e) {
		if (!podlozhka) {
			setOpenMenu(true);
			setArrowToggle(true);
			e.currentTarget.style.zIndex = '9999';
			document.querySelector('.contentScroll').style.overflow = 'hidden';			
		}
	}
	function menuOff(e) {
		if (podlozhka) {
			setOpenMenu(true);
		} else {
			setOpenMenu(false);
			e.currentTarget.style.zIndex = '1';
			document.querySelector('.contentScroll').style.overflow = 'auto';
			if (activity) {
				setArrowToggle(true);
			} else {
				setArrowToggle(false);
			}
		}
	}
	useEffect(() => {
		if (podlozhka) {
		} else {
			setOpenMenu(false);
		}
		if (!podlozhka && !activity) {
			setArrowActive('down');
			setArrowToggle(false);
			setActivity(false);
		}
	}, [podlozhka]);
	// useEffect(() => {
	// 	if (!podlozhka && !activity) {
	// 		setArrowActive('down');
	// 		setArrowToggle(false);
	// 		setActivity(false);
	// 	}
	// }, [podlozhka]);
    // const [clickSort, setClickSort] = useState(true);
	useEffect(() => {
		setArrowActive('down');
		setArrowToggle(false);
		setActivity(false);
	}, [sortActive]);
	function sortClickBtn(e) {
		// if (switchMenu && adaptive && setWidth21px) {
		// 	setWidth21px(true);
		// } else if (!width21px && !switchMenu && !adaptive && !activity) {
		// 	setWidth21px(false);
		// }
		if (arrowActive === 'down') {
			setArrowActive('up');
		} else if (arrowActive === 'up') {
			setArrowActive('down');
		}
		setSortActive(!sortActive);
		document.querySelector('.contentScroll').style.overflow = 'scroll';

		setTimeout(() => {
			setActivity(true);
			setArrowToggle(true);
			if (arrowActive === 'down') {
				setArrowActive('up');
			} else {
				setArrowActive('down');
			}
		}, 0);
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.remove('hide-menu');
		});
		document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
			x.classList.remove('smallsort');
		});
		// if (adaptive) {
		// 	setFlagSwitchMenu(false);
		// }
		setOpenMenu(false);
		setPodlozhka(false);

	}
	return (
		<>
			<div
				style={zIndex ? { zIndex: 1 } : {}}
				onMouseEnter={menuOn}
				onMouseLeave={menuOff}
				// className={`warehouse-dropmenu ranges`}
				className={`warehouse-dropmenu ranges ${
					arrowToggle ||
					activity 
					
						? 'hide-arrow'
						: ''
				}`}
				ref={warehouse}
			>
				<div ref={resultRef} className="range-result">
					{divInput || divInput2 || (divInput && divInput2)
						? minInput + ' - ' + maxInput
						: minRange > 0 || maxRange < 52
						? 'Фильтр'
						: rangesData[1].select ? '< 0 шт' : ''}
				</div>
				<div
					// style={{ display: `${openMenu || active ? 'block' : 'none'}` }}
					// onMouseEnter={tooltipOn}
					// onMouseLeave={tooltipOff}
					// className="sortBtn"
					className={`sortBtn ${
						arrowToggle || activity || (arrowToggle && activity)
							? 'on'
							: ''
					}`}
					onClick={sortClickBtn}
				>
					<svg
					// onClick={sortClickBtn}
					width="10"
					height="10"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={
						arrowActive === 'down'
							? {}
							: arrowActive === 'up'
							? { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
							: { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
					}
				>
					<path
						d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
						fill="black"
					></path>
				</svg>
				</div>
				<span className="underline"></span>
				<div
					className={openMenu ? `dropmenu toggle` : 'dropmenu'}
				>
					{openMenu && (
						<div className="rangeslider">
							<div className="rangesInput">
								<input
									className="min"
									name="range_1"
									type="range"
									min="0"
									readOnly
									max="52"
									value={minRange}
								/>
								<span className="minBG"></span>
								<input
									className="max"
									name="range_1"
									type="range"
									min="0"
									readOnly
									max="52"
									value={maxRange}
								/>
								<span className="maxBG"></span>
							</div>
							<div className="rangesBtnBlock">
								{rangesData.map((x, i) => (
									<div
										key={i}
										onClick={(e) => rangesListClick(i, e)}
										className={x.select ? `rangesList select-btn` : 'rangesList'}
									>
										{translator.getTranslation('btnAll', x.name ) ?? x.name }
									</div>
								))}
							</div>
							<div
								className="range_min inc"
								// onClick={divCLick}
								tabIndex="0"
								style={{ outline: 'none' }}
								onKeyDown={inputKeyUp}
								// onKeyUp={lenghtInput}
								onWheel={onWheel}
								// onScroll={e => {e.stopPropagation();e.preventDefault()}}
								onMouseEnter={incMouseEnter}
								onMouseLeave={incMouseLeave}
							>
								<div className="arrowsInc" style={{ pointerEvents: 'none', zIndex: 2 }}>
									<span className="arrowUp"></span>
									<span className="arrowDown"></span>
								</div>
								<input
									onChange={rangeInput}
									maxLength="5"
									value={divInput ? minInput : arr[minRange]}
									className="inputDataMin"
								/>
								<span style={{ lineHeight: '18px', pointerEvents: 'none', paddingLeft: 3 }}>
									{' '}
									шт
								</span>
							</div>
							<div
								className="range_max dec"
								// onClick={divCLick}
								tabIndex="0"
								style={{ outline: 'none' }}
								onKeyDown={inputKeyDown}
								onWheel={onWheel}
								// onKeyUp={lenghtInput}
								// onScroll={e => {e.stopPropagation();e.preventDefault()}}

								onMouseEnter={decMouseEnter}
								onMouseLeave={decMouseLeave}
							>
								<div className="arrowsDec" style={{ pointerEvents: 'none', zIndex: 2 }}>
									<span className="arrowUp"></span>
									<span className="arrowDown"></span>
								</div>
								<input
									onChange={rangeInput2}
									maxLength="5"
									value={divInput2 ? maxInput : arr[maxRange]}
									className="inputDataMax"

								/>
								<span style={{ lineHeight: '18px', pointerEvents: 'none', paddingLeft: 3 }}>
									{' '}
									шт
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default WarehouseDropRange;

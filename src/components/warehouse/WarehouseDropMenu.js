import React, { useState, useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const WarehouseDropMenu = ({
	objProduct,
	inputOn,
	setPodlozhka,
	podlozhka,
	type,
	adaptive,
	setSwitchMenu,
	switchMenu,
	setFlagSwitchMenu,
	searchLine,
	translator,
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const LabelOn = () => {
		return (
			<label style={{ pointerEvents: 'none' }} className="switch-btn-small">
				<input
					style={{ pointerEvents: 'none' }}
					type="checkbox"
					className="status-rozetka"
					defaultChecked={true}
				/>
				<span className="slider round"></span>
			</label>
		);
	};
	const LabelOff = () => {
		return (
			<label style={{ pointerEvents: 'none' }} className="switch-btn-small">
				<input
					style={{ pointerEvents: 'none' }}
					type="checkbox"
					className="status-rozetka"
					defaultChecked={false}
				/>
				<span className="slider round"></span>
			</label>
		);
	};
	// console.log(translator?.getTranslation('btnAll','all') ?? 'Все')
	let newarr = [];
	if (inputOn) {
		objProduct.map((x) => {
			newarr.push(x[type]);
			if (x.podProduct?.length > 0) {
				newarr.push(x.podProduct?.map((x) => x[type]));
			}
		});
		newarr = newarr.flat().map((x, index) => {
			return { id: index + 1, attribute: x, select: false };
		});
		newarr = [{ id: 0, attribute: 'all', select: true }, ...newarr];
		// newarr.map(x => x.attribute)[0]translator.getTranslation('btnAll', 'all')
		// newarr[0].attribute = translator.getTranslation('btnAll', 'all')
		//  console.log(newarr[0].attribute = 'дщі')
	} else {
		if (type === 'country') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: '🇷🇺', select: false },
				{ id: 2, attribute: '🇺🇦', select: false },
				{ id: 3, attribute: '🇹🇷', select: false },
			];
		}
		if (type === 'currency') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: '$', select: false },
				{ id: 2, attribute: '€', select: false },
				{ id: 3, attribute: '₴', select: false },
				{ id: 4, attribute: '₽', select: false },
			];
		}
		if (type === 'status') {
			newarr = [
				{ id: 0, attribute: 'all', select: true },
				{ id: 1, attribute: <LabelOn />, select: false },
				{ id: 2, attribute: <LabelOff />, select: false },
			];
		}
	}

	// useEffect(()=> {
	// 	newarr = [{ id: 0, attribute: translator?.getTranslation('btnAll','all') ?? 'Все', select: true }, ...newarr];
	// },[])
	const [obj, setObj] = useState(newarr);
	// obj[0].attribute = translator.getTranslation('btnAll', 'all');
	// setObj(obj)
	// newarr = newarr[0].attribute = translator.getTranslation('btnAll', 'all');

	const [value, setValue] = useState('');
	function clickList(index, e) {
		setPodlozhka(true);
		// document.querySelector('.warehouse-table').style.overflow = 'hidden';
		document.querySelector('.warehouse-table').style.overflow = 'hidden';
		let newobj = obj.map((x, i) => {
			if (i === index) {
				document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
					x.style.visibility = 'hidden';
				});
				e.target.closest('.warehouse-dropmenu').style.visibility = 'visible';
				return { ...x, select: !x.select };
			} else if (index === 0 && i === 0) {
				document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
					x.style.visibility = 'visible';
				});
				return { ...x, select: true };
			} else if (index === 0 && i !== 0) {
				document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
					x.style.visibility = 'visible';
				});
				setOpenMenu(false);
				setPodlozhka(false);
				document.querySelector('.warehouse-table').style.overflow = '';
				// document.querySelector('.warehouse-table').style.overflow = 'auto';

				return { ...x, select: false };
			} else if (index !== 0 && i === 0) {
				return { ...x, select: false };
			} else {
				return { ...x };
			}
		});
		if (adaptive) {
			setFlagSwitchMenu(true);
		}
		if (newobj.filter((x) => x.select === true).length === 0) {
			document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
				x.style.visibility = 'visible';
			});
			setOpenMenu(false);
			setPodlozhka(false);
			// document.querySelector('.warehouse-table').style.overflow = 'auto';
			document.querySelector('.warehouse-table').style.overflow = '';
			newobj[0].select = true;
			if (adaptive) {
				setFlagSwitchMenu(false);
			}
		}
		// if(adaptive){
		// 	setSwitchMenu(true);
		// }git

		// e.target?.closest('.warehouse-input').style.display = 'block';
		setObj(newobj);
	}
	const ref = useRef();
	function changeInput(e) {
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.style.visibility = 'hidden';
		});
		e.target.closest('.warehouse-dropmenu').style.visibility = 'visible';
		setValue(e.target.value);
		if (ref.current.value.length === 1) {
			ref.current.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
			setValue(e.target.value);
		}
		setPodlozhka(true);
	}
	function menuOn(e) {
		setValue('');
		setOpenMenu(true);
		// e.currentTarget.querySelector('.underline').style.width = '100%';
		if (inputOn) {
			ref.current.focus();
			// e.currentTarget.querySelector('.underline').style.width = '100%';
		}
		if (adaptive) {
			e.currentTarget.style.width = '51px';
			document.querySelector('.width21px').style.maxWidth = '21px';
		}
		e.currentTarget.querySelector('.simplebar-content-wrapper').scrollTo({
			top: 0,
		});
	}
	function menuOff(e) {
		if (podlozhka) {
			setOpenMenu(true);
		} else {
			if (type !== 'status') {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? 'Фильтр'
						: obj.filter((x) => x.select === true)[0].attribute.includes('all')
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			} else {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? 'Фильтр'
						: obj.filter((x) => x.select === true)[0].attribute === 'all'
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			}
			setOpenMenu(false);
			if (inputOn) {
				// e.currentTarget.querySelector('.underline').style.width = '0%';
				ref.current.blur();
			}
			if (adaptive) {
				e.currentTarget.style.width = '21px';
				document.querySelector('.width21px').style.maxWidth = '51px';
			}
			// e.currentTarget.querySelector('.underline').style.width = '0%';
		}
	}
	useEffect(() => {
		if (podlozhka) {
			// setOpenMenu(true);
			// setValue('');
		} else {
			if (type !== 'status') {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? 'Фильтр'
						: obj.filter((x) => x.select === true)[0].attribute.includes('all')
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			} else {
				setValue(
					obj.filter((x) => x.select === true).length > 1
						? 'Фильтр'
						: obj.filter((x) => x.select === true)[0].attribute === 'all'
						? ''
						: obj.filter((x) => x.select === true)[0].attribute
				);
			}

			setOpenMenu(false);
		}
	}, [podlozhka]);

	function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.innerText = e.target.innerText;
			if (type === 'country' || type === 'status') {
				// tooltipBlock.innerText = e.target.innerText;
			} else {
				tooltipBlock.innerHTML = searchLine(e.target.innerText, value);
				tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
				tooltipBlock.style.top = posElement.y + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
			}
		} else {
			if (type === 'country') {
				if (e.currentTarget.innerText === '🇺🇦') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '🇷🇺') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '🇹🇷') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
			} else if (type === 'currency') {
				console.log(e);
				// { id: 1, attribute: '$', select: false },
				// { id: 2, attribute: '€', select: false },
				// { id: 3, attribute: '₴', select: false },
				// { id: 4, attribute: '₽', select: false },
				if (e.currentTarget.innerText === '$') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '€') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '₴') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
				if (e.currentTarget.innerText === '₽') {
					tooltipBlock.style.fontSize = '12px';
					tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
					tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 'px';
					tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
				}
			}
		}
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}

	useEffect(() => {
		console.log();
		document.querySelectorAll('.status-result').forEach((x, i) => {
			if (i !== 0 && x.innerHTML !== '') {
				x.closest('.warehouse-dropmenu').classList.add('hide-arrow');
			} else {
				x.closest('.warehouse-dropmenu').classList.remove('hide-arrow');
			}
		});
	}, [podlozhka, openMenu]);

	return (
		<div
			style={adaptive ? { width: 21, transition: '0.3s' } : {}}
			onMouseEnter={menuOn}
			onMouseLeave={menuOff}
			className={'warehouse-dropmenu'}
		>
			{inputOn ? (
				<>
					<input ref={ref} type="text" value={value} onChange={changeInput} />
					{/* <span className="underline"></span> */}
				</>
			) : type === 'status' ? (
				<div className="status-result">
					{obj.filter((x) => x.select === true).length > 1
						? 'Фильтр'
						: obj.filter((x) => x.select === true)[0].attribute === 'all'
						? ''
						: obj.filter((x) => x.select === true)[0].attribute}
				</div>
			) : (
				<div className="text-result">
					{obj.filter((x) => x.select === true).length > 1 ? (
						'Фильтр'
					) : obj.filter((x) => x.select === true)[0].attribute.includes('all')  ? (
						''
					) : (
						<span className={type === 'country' ? 'flags' : ''} style={{ paddingLeft: 10 }}>
							{obj.filter((x) => x.select === true)[0].attribute}
						</span>
					)}
				</div>
			)}
			<span className="underline"></span>
			<SimpleBar
				// style={adaptive ? { transitionDelay: '0.1s' } : {}}
				autoHide={false}
				className={openMenu ? `dropmenu ${adaptive ? 'toggleAdaptive' : 'toggle'}` : 'dropmenu'}
			>
				{inputOn
					? obj
							.filter((x) => x.attribute.toLowerCase().includes(value.toLowerCase()))
							.map((x, index) => (
								<li
									key={index}
									onMouseEnter={tooltipOn}
									onMouseLeave={tooltipOff}
									className={x.select ? 'select-btn' : ''}
									onClick={(e) => clickList(x.id, e)}
								>
									<span
										dangerouslySetInnerHTML={{
											__html: searchLine(translator.getTranslation('btnAll', x.attribute) ??  x.attribute, value),
										}}
									></span>
								</li>
							))
					: obj.map((x, index) => (
							<li
								key={index}
								onMouseEnter={tooltipOn}
								onMouseLeave={tooltipOff}
								className={x.select ? 'select-btn' : ''}
								onClick={(e) => clickList(x.id, e)}
								style={type === 'status' ? { overflow: 'visible' } : {}}
							>
								<span
									className={
										index !== 0
											? `${type === 'country' ? 'flags' : type === 'status' ? 'status' : ''}`
											: ''
									}
								>
									{/* {console.log(translator.getTranslation('btnAll', x.attribute), x.attribute)} */}
									{translator.getTranslation('btnAll', x.attribute) ??  x.attribute}
								</span>
							</li>
					  ))}
			</SimpleBar>
		</div>
	);
};

export default WarehouseDropMenu;

import React, { useState, useEffect, useRef } from 'react'

const WarehouseInput = ({ setFlagSwitchMenu, setSwitchMenu, setPodlozhka, podlozhka, setSortActive, sortActive, translator, hideMenu, setHideMenu }) => {
	const [inputID, setInputID] = useState('');
	const [activity, setActivity] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');
	const [vitrualClick, setVirtualClick] = useState(false);
	function warehouseInputOn(e) {
		e.currentTarget.querySelector('input').focus();
		e.currentTarget.querySelector('input').select();
		setArrowToggle(true);
	}
	function warehouseInputOff(e) {
		if (podlozhka) {
			// setArrowToggle(true);
		} else {
			e.currentTarget.querySelector('input').blur();
			setArrowToggle(false);
		}
	}
	function changeInput(e) {
		setPodlozhka(true);
		setVirtualClick(true);
		// setInputID(e.target.value.replace(/[^0-9]-/g, ''));
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.classList.add('hide-menu');
		// });
		// e.target.closest('.warehouse-input').classList.remove('hide-menu');
		setHideMenu(true);
		document.querySelector('.contentScroll').style.overflowY = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		if (e.target.value.length === 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
			// setInputID(e.target.value);
		}
		e.target.value = e.target.value.replace(/[^0-9-.]/g, '');

		setInputID(e.target.value);
	}
	function enter(e) {
		if (e.key === "Enter") {
			// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			//     // x.style.visibility = 'visible';
			//     x.classList.remove('hide-menu');
			// });
			setVirtualClick(false);
			setHideMenu(false);
			document.querySelector('.contentScroll').style.overflowY = 'auto';
			document.querySelector('.track-vertical').style.opacity = 1;
			document.querySelector('.track-horizontal').style.opacity = 1;

			setPodlozhka(false);
			e.currentTarget.blur();
		}
	}
	useEffect(() => {
		if (!podlozhka && !activity) {
			setArrowActive('down');
			setArrowToggle(false);
			setActivity(false);
		}
	}, [podlozhka]);
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
		document.querySelector('.contentScroll').style.overflowY = 'scroll';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;

		setTimeout(() => {
			setActivity(true);
			setArrowToggle(true);
			if (arrowActive === 'down') {
				setArrowActive('up');
			} else {
				setArrowActive('down');
			}
		}, 0);
		setHideMenu(false);
		document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
			x.classList.remove('smallsort');
		});
		// if (adaptive) {
		// 	setFlagSwitchMenu(false);
		// }
		// setOpenMenu(false);
		setPodlozhka(false);

	}


	function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.innerText = e.target.innerText;

		}
		if (e.currentTarget.closest('.sortBtn')) {
			tooltipBlock.style.fontSize = '12px';
			// console.log('asdsadas')
			tooltipBlock.innerHTML = `${translator.getTranslation('sortData', 'sortTooltip')} ↑↓`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}

	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	const warehouse = useRef();
	function clickVirtualWrapper() {
		// setOpenMenu(false);
		setPodlozhka(false);
		setHideMenu(false);
		// console.log('srabotalo');
		setFlagSwitchMenu(false);
		setSwitchMenu(false);
		setVirtualClick(false);
		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		// document.querySelector('.first-tab-body').classList.remove('hoverOff');
		document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
			x.style.zIndex = 1;
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '22px';
		});
		document.querySelectorAll('.telOperator .warehouse-dropmenu').forEach((x) => {
			x.style.minWidth = '22px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
	}
	function handle(e) {
		if (warehouse.current && !warehouse.current.contains(e.target)) {
			clickVirtualWrapper()
		}
	}

	useEffect(() => {
		if (vitrualClick) {
			document.addEventListener("click", handle, true);
		}
		return () => {
			document.removeEventListener("click", handle, true);
		};
	}, [vitrualClick]);
	return (
		<div
			onMouseLeave={warehouseInputOff}
			onMouseEnter={warehouseInputOn}
			className={`warehouse-input ${hideMenu && !arrowToggle ? "hide-menu" : ""}`}
			ref={warehouse}
		>
			<input
				onChange={changeInput}
				onKeyUp={enter}
				value={inputID}
				type="text"
				style={{ color: 'rgba(0, 0, 0, 0.65)' }}
			/>
			<div
				// style={{ display: `${openMenu || active ? 'block' : 'none'}` }}
				onMouseEnter={tooltipOn}
				onMouseLeave={tooltipOff}
				// className="sortBtn"
				className={`sortBtn ${arrowToggle || activity || (arrowToggle && activity)
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
		</div>
	)
}

export default WarehouseInput;

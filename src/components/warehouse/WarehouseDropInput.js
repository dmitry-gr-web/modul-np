import React,{useState,useRef,useEffect} from 'react'

const WarehouseDropInput = ({hideArrow,setHideMenu, hideMenu,podlozhka,setPodlozhka,zIndex,sortActive,setSortActive,translator,width,adaptive}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const warehouse = useRef();
    const [arrowToggle, setArrowToggle] = useState(false);
	const [arrowActive, setArrowActive] = useState('down');
	const [activity, setActivity] = useState(false);
    const [input1, setInput1] = useState('0');
    const [input2, setInput2] = useState('∞');
    const [all,setAll] = useState(true);
    function clickAll (){
        setAll(true);
        setInput1('0');
        setInput2('∞');
        setOpenMenu(false);
		setPodlozhka(false);
		setArrowToggle(false);
		// if(openMenu) {
		// }
		setHideMenu(false);
		// setHideMenu(false);
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
    }

    
    function inputChange (e) {
        setAll(false);
		setHideMenu(true);

        setPodlozhka(true);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
        // document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
        //     x.classList.add('hide-menu');
        // });
        // e.target.closest('.warehouse-dropmenu').classList.remove('hide-menu');
        let temp = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = temp.length === 0 ? ' ' : temp;
        e.target.style.width = e.target.value.length * 7 + 'px';
        setInput1(e.target.value);
    }
    function inputChange2 (e) {
        setAll(false);
        setPodlozhka(true);
		setHideMenu(true);
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
        // document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
        //     x.classList.remove('hide-menu');
        // });
        // e.target.closest('.warehouse-dropmenu').classList.remove('hide-menu');
        let temp = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = temp.length === 0 ? ' ' : temp;
        e.target.style.width = e.target.value.length * 7 + 'px';
        setInput2(e.target.value);
    }


    function menuOn(e) {
		if (!podlozhka) {
			console.log('start');
			// setValue('');
			// setHideMenu(false);
			setArrowToggle(true);
			setOpenMenu(true);
            e.currentTarget.style.zIndex = '9999';
        
            document.querySelector('.contentScroll').style.overflowY = 'hidden';	
			// document.querySelector('.scrollbar').style.opacity = 0;
			// document.querySelector('.scrollbarHorizont').style.opacity = 0;
            // if (!podlozhka) {
            //     setOpenMenu(true);
            //     setArrowToggle(true);
            //     e.currentTarget.style.zIndex = '9999';
            //     document.querySelector('.contentScroll').style.overflow = 'hidden';			
            // }

		}
	}
    // const [widthPrev, setWidthPrev] = useState(0);
    // useEffect(()=> {
    //     if(warehouse.current){
    //         setTimeout(() => {
    //             let width = warehouse.current.offsetWidth;
    //             setWidthPrev(width);
    //             // console.log(widthPrev)
    //         }, 30);
    //     }
  

    // },[])
    useEffect(()=> {
		if(adaptive){
			if(!openMenu) {
				warehouse.current.style.width = width +'px';
			} else {
				if(warehouse.current.offsetWidth >= 51){

				}else {

					warehouse.current.style.width = '51px';
				}
			}
		}
	
    },[openMenu])
	function menuOff(e) {
		if (podlozhka) {
			setOpenMenu(true);
		} else {
			setOpenMenu(false);
            e.currentTarget.style.zIndex = '1';
            document.querySelector('.contentScroll').style.overflowY = 'auto';
			// document.querySelector('.scrollbar').style.opacity = 1;
			// document.querySelector('.scrollbarHorizont').style.opacity = 1;
            // if(e.currentTarget.offsetWidth === 51) {
            //     e.currentTarget.style.width = width+'px';
            // }
			if (activity) {
				setArrowToggle(true);
			} else {
				setArrowToggle(false);
			}
			
		}
	}
    function sortClickBtn(e) {
		// if (switchMenu && adaptive && setWidth21px) {
		// 	setWidth21px(true);
		// } else if (!width21px && !switchMenu && !adaptive && !activity) {
		// 	setWidth21px(false);
		// }
		setHideMenu(false);

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
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.classList.remove('hide-menu');
		// });
		document.querySelectorAll('.warehouse-dropmenu').forEach((x) => {
			x.classList.remove('smallsort');
		});
		// if (adaptive) {
		// 	setFlagSwitchMenu(false);
		// }
		setOpenMenu(false);
		setPodlozhka(false);
    }

    useEffect(() => {
		if (podlozhka) {
		} else {
			setOpenMenu(false);
			// setHideMenu(false);
		}
		if (!podlozhka && !activity) {
			setArrowActive('down');
			setArrowToggle(false);
			setActivity(false);
		}
		// if(input1.length === 0 || input1 === ' '){
		// 	setInput1(0);
		// }
		// if(input2.length === 0 || input2 === ' '){
		// 	setInput2('∞');
		// }
	}, [podlozhka])
    useEffect(() => {
		setArrowActive('down');
		setArrowToggle(false);
		setActivity(false);
	}, [sortActive]);
    useEffect(()=> {
        if(openMenu) {
            // let width = warehouse.current.offsetWidth;
            warehouse.current.querySelector('.inputFirst').style.width = warehouse.current.querySelector('.inputFirst').value.length * 7 + 'px'
			warehouse.current.querySelector('.inputSecond').style.width = warehouse.current.querySelector('.inputSecond').value.length * 7 + 'px'
        }
        if(!podlozhka) {
            if(input1.length === 0 || input1 === ' '){
                setInput1(0);
            }
            if(input2.length === 0 || input2 === ' '){
                setInput2('∞');
            }
        }
    },[input1, input2,podlozhka, openMenu])
    function click (e) {
		e.currentTarget.querySelector('input').focus();
	}
    useEffect(()=> {
		if(!podlozhka){
			if(+input1 > +input2) {
				const newNumber = +input1 + 1;
				setInput2(newNumber)
			}
			// if(divInput ){}
		}
	
	},[podlozhka])
    function tooltipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.currentTarget.getBoundingClientRect();
		tooltipBlock.style.fontSize = '10px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			// tooltipBlock.innerText = e.target.innerText;
		
		} 
		if (e.currentTarget.closest('.sortBtn')) {
			// tooltipBlock.style.fontSize = '12px';
			// console.log('asdsadas')
			tooltipBlock.innerHTML = `${translator.getTranslation('sortData', 'sortTooltip')} ↑↓`;
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 25 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.querySelector('.inputFirst')){
			tooltipBlock.innerHTML = translator.getTranslation('tooltipRange', 'value' );
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
		if (e.currentTarget.querySelector('.inputSecond')){
			tooltipBlock.innerHTML = translator.getTranslation('tooltipRange', 'value2' );
			tooltipBlock.style.left = posElement.x - tooltipBlock.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}		
	}
	function tooltipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
    return (
			<div
				style={
					{zIndex: `${zIndex ? 1 : ''}`, width: width + 'px', transition: 'width 0.3s', minWidth: `${adaptive === false ? 51 : ''}px` }
				}
				onMouseEnter={menuOn}
				onMouseLeave={menuOff}
				className={`warehouse-dropmenu ${arrowToggle || activity || !hideArrow && !podlozhka ? 'hide-arrow' : ''} ${hideMenu && !openMenu ? 'hide-menu': ""}`}
				ref={warehouse}
			>
				<div className="range-result">{!all && `${input1} - ${input2}`}</div>
				<div
					onMouseEnter={tooltipOn}
					onMouseLeave={tooltipOff}
					className={`sortBtn ${arrowToggle || activity || (arrowToggle && activity) ? 'on' : ''}`}
					// onClick={sortClickBtn}
				>
					<svg
						onClick={sortClickBtn}
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
				<div className={openMenu ? `dropmenu ${adaptive ? 'toggleAdaptive' : 'toggle'}` : 'dropmenu'}>
					{openMenu && <><div onClick={clickAll} className={`list ${all ? 'select-btn' : ''}`}>
						{translator.getTranslation('btnAll', 'all' )}
					</div>
					<div style={{ position: 'absolute', bottom: 4, width: '100%' }}>
						<div
							className="list"
							onClick={click}
							onMouseEnter={(e) => {
								e.target.querySelector('input').select();
								tooltipOn(e);
							}}
							onMouseLeave={(e) => {
								e.target.querySelector('input').blur();
								tooltipOff(e);
							}}
							style={{ textOverflow: 'unset' }}
						>
							<input
								maxLength="4"
								onChange={inputChange}
								className="listInput inputFirst"
								value={input1}
							/>
						</div>
						<div
							className="list"
							onClick={click}
							onMouseEnter={(e) => {
								e.target.querySelector('input').select();
								tooltipOn(e);
							}}
							onMouseLeave={(e) => {
								e.target.querySelector('input').blur();
								tooltipOff(e);
							}}
							style={{ paddingBottom: 0, textOverflow: 'unset' }}
						>
							<input
								maxLength="4"
								onChange={inputChange2}
								className="listInput inputSecond"
								value={input2}
							/>
						</div>
					</div></>}
				</div>
			</div>
		); 
}

export default WarehouseDropInput;

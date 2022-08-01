import React, { useState, useEffect, useRef } from 'react';
import { formatPhone, recognizeOperator } from '@jaood/phone-numbers';
let inputselect;
const WarehouseInputField = ({carouselDrop,setCarouselDrop,setAddOneItem, data, setData, index, podlozhka, setPodlozhka, setHideMenu, addOneItem, value, type, iconOperator, setHideArrow }) => {
    function inputOn(e, index) {
        inputselect = setTimeout(() => {
            if (!data[index].lock) {
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                e.target.focus();
                e.target.select();
            }
        }, 150);
    }
    const refInput = useRef();

    function inputOff(e) {
        if (!podlozhka) {
            e.target.setSelectionRange(0,1);
            e.target.blur();
        }
        clearTimeout(inputselect);
    }
    const [input, setInput] = useState(data[index][type]);
    const [memoryInput, setMemoryInput] = useState(data[index][type]);
    const [flag, setFlag] = useState(false);

    function changeInput(e) {
		refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
		refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
		refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
        refInput.current.closest('td').style.zIndex = 99;
        refInput.current.closest('tr').classList.add('hover-disabled');
        console.log(type)
        if(type === 'attribute' || type === 'commentary'){
            refInput.current.closest('td').querySelector('span').style.width = '100%';
        }else {
            refInput.current.closest('td').querySelector('span').style.width = 'calc(100% - 15px)';
        }
        if (e.target.value.length >= 1) {
            e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        }
        console.log(input)
        // if (refInput.current.value.length >= 1) {
        //     refInput.current = refInput.current.value[0].toUpperCase() + e.target.value.slice(1);
        // }
        setHideMenu(true);
        setFlag(true);
        setInput(e.target.value);
        setPodlozhka(true);
    }
    // console.log(data)
    // console.log(flag)
    useEffect(() => {
        if (!podlozhka && flag) {
            if (input !== '') {
                data[index][type] = input;
                setData([...data])
                setMemoryInput(input)
                console.log('tut')
             
            } 
            else {
                data[index][type] = memoryInput;
                setData([...data])
                setInput(memoryInput);
                console.log(' ili tut')
            }
           
            setHideArrow(true);
            setFlag(false);
            refInput.current.closest('td').querySelector('span').style.width = '0%';
            refInput.current.closest('td').style.zIndex = '';
            refInput.current.closest('tr').classList.remove('hover-disabled');
            if((data.length) * 18 < (	refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
        }
        if (!podlozhka && value === '' && input === '') {
            data.shift();
            setHideArrow(true);
            setData([...data]);
        }
    }, [podlozhka, data])
    useEffect(() => {
        setFlag(addOneItem)
    }, [addOneItem])
    useEffect(() => {
        setInput(value)
    }, [value])
    const enter = (e) => {
        if(e.key === 'Enter'){
            if (input !== '') {
                data[index][type] = input;
                setData([...data])
                setMemoryInput(input)

            } else {
                data[index][type] = memoryInput;
                setData([...data])
                setInput(memoryInput);


            }
            setHideArrow(true);
            setFlag(false);
            setPodlozhka(false);
            setHideMenu(false);
            setAddOneItem(false);
            e.target.blur();
            if((data.length) * 18 < (	refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
            refInput.current.closest('td').querySelector('span').style.width = '0%';
            refInput.current.closest('td').style.zIndex = '';
            refInput.current.closest('tr').classList.remove('hover-disabled');
        }
      
    }
    // console.log(data)
    // console.log(document.querySelectorAll('.first-tab-body tr .warehouseInput')[0])
    function clickVirtualWrapper () {


        // setFlag(false);
        setAddOneItem(false);
        // console.log('wrap')
        // console.log(carouselDrop.carousel)
        // console.log(carouselDrop.query)
        if(carouselDrop?.carousel === true && carouselDrop?.query === 1 && input !== ''){
            // data[index][type] = input;
            // setMemoryInput(input)
            setTimeout(() => {	
                const targetBlock = document.querySelectorAll('.first-tab-body tr .warehouseInput')[1]
                const poloska = document.querySelectorAll('.first-tab-body tr .underline')[1]
                // targetBlock.click();
                // data[index][type] = input;
                // setData([...data])
                // setMemoryInput(input)
                // console.log(input)

                // console.log(data[index][type])
                // data[index][type] = input;
                // setData([...data])
                // setMemoryInput(input)
                // setCarouselDrop({...carouselDrop, company: input})
                // console.log(targetBlock.parentElement)
                document.querySelectorAll('.first-tab-body tr .warehouseInput')[0].style.zIndex = 0;
                document.querySelectorAll('.first-tab-body tr .underline')[0].style.width = '0%';
                targetBlock.parentElement.style.zIndex = '99';
                targetBlock.focus();
                poloska.style.width = 'calc(100% - 15px)';
                
            }, 100);
            setCarouselDrop({...carouselDrop,query: 2})
            console.log('carousel')

        } else if (carouselDrop?.carousel === true && carouselDrop?.query === 2 && input !== ''){
            // data[index][type] = input;
            // setMemoryInput(input)
            setTimeout(() => {	
                const targetBlock = document.querySelectorAll('.first-tab-body tr .warehouseInput')[2]
                const poloska = document.querySelectorAll('.first-tab-body tr .underline')[2]
                // targetBlock.click();
                // setCarouselDrop({...carouselDrop, contact: input})
                // data[0][type] = input;
                // setData([...data])
                // setMemoryInput(input)
                // console.log(targetBlock.parentElement)
                document.querySelectorAll('.first-tab-body tr .warehouseInput')[1].style.zIndex = 0;
                document.querySelectorAll('.first-tab-body tr .underline')[1].style.width = '0%';
                targetBlock.parentElement.style.zIndex = '99';
                targetBlock.focus();
                poloska.style.width = 'calc(100% - 15px)';
            }, 100);
            setCarouselDrop({...carouselDrop,query: 3})
            console.log('carousel')
        }else if (carouselDrop?.carousel === true && carouselDrop?.query === 3 && input !== ''){
            setTimeout(() => {	
                const targetBlock = document.querySelectorAll('.first-tab-body tr .warehouseInput')[3]
                const poloska = document.querySelectorAll('.first-tab-body tr .underline')[3]
                // targetBlock.click();
                // setCarouselDrop({...carouselDrop, number: input})
                // data[0][type] = input;
                // setData([...data])
                // setMemoryInput(input)
                // console.log(targetBlock.parentElement)
                document.querySelectorAll('.first-tab-body tr .warehouseInput')[2].style.zIndex = 0;
                document.querySelectorAll('.first-tab-body tr .underline')[2].style.width = '0%';
                targetBlock.parentElement.style.zIndex = '99';
                targetBlock.focus();
                poloska.style.width = '100%';
            }, 100);
            if(setCarouselDrop)setCarouselDrop({...carouselDrop,query: 4})
            console.log('carousel')
        }else if (carouselDrop?.carousel === true && carouselDrop?.query === 4 && input !== ''){
            setTimeout(() => {	
                const targetBlock = document.querySelectorAll('.first-tab-body tr .warehouseInput')[3]
                const poloska = document.querySelectorAll('.first-tab-body tr .underline')[3]
                // targetBlock.click();

                data[0].company = document.querySelectorAll('.first-tab-body tr .warehouseInput')[0].value
                data[0].contact = document.querySelectorAll('.first-tab-body tr .warehouseInput')[1].value
                data[0].number = document.querySelectorAll('.first-tab-body tr .warehouseInput')[2].value
                data[0].commentary = document.querySelectorAll('.first-tab-body tr .warehouseInput')[3].value
                // data[0][type] = input;
                setData([...data])
                // setMemoryInput(input)
                // setData([...data])
                // setMemoryInput(input)
                setPodlozhka(false);
                setHideMenu(false);
                setFlag(false);
                console.log(data)
                // console.log(targetBlock.parentElement)
                // document.querySelectorAll('.first-tab-body tr .warehouseInput')[3].style.zIndex = 0;
                // document.querySelectorAll('.first-tab-body tr .underline')[3].style.width = '0%';
                targetBlock.parentElement.style.zIndex = '';
                targetBlock.blur();
                poloska.style.width = '0%';
            }, 100);
            if((data.length) * 18 < (	refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
            if(setCarouselDrop)setCarouselDrop({carousel:false,query: 0})
            console.log('carousel')
        }  
        else if(carouselDrop?.carousel === false) {
            setPodlozhka(false);
            setHideMenu(false);
            setFlag(false);
            if(setCarouselDrop)setCarouselDrop({carousel:false,query: 0})
            if((data.length) * 18 < (refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
            console.log('carousel off')
        } else if (carouselDrop?.carousel === true && input === ''){
            setPodlozhka(false);
            setHideMenu(false);
            setFlag(false);
            console.log('pidar')
            if(setCarouselDrop)setCarouselDrop({carousel:false,query: 0})
            let arr = data.filter((x, i) => i !== 0)
            setData([...arr])
            if((data.length) * 18 < (refInput.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            }else {
                refInput.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            }
            refInput.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            refInput.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
            console.log('carousel input pusto')
        }
	}
    // console.log(carouselDrop.carousel)
	function handle(e) {
        if (refInput.current && !refInput.current.contains(e.target)) {
			clickVirtualWrapper()
		}
    }
    useEffect(() => {
		if(flag){
			document.addEventListener("click", handle, true);
		}
        return () => {
            document.removeEventListener("click", handle, true);
        };
    }, [flag]);
    return (
        <>
            {iconOperator && <span className={recognizeOperator(input, 'UA')} style={{ marginRight: 6, top: 1, position: 'relative', marginLeft: 4, pointerEvents: 'none',opacity: `${!data[index].status ? '0.4' : ''}` }}></span>}
            <input
                onMouseEnter={(e) => {e.stopPropagation();inputOn(e, index)}}
                onMouseLeave={e => inputOff(e, index)}
                style={{ color: `${!data[index].status ? 'rgba(0,0,0,0.4)' : ''}` }}
                className='warehouseInput'
                value={iconOperator ? formatPhone(input, 'UA') : input}
                onChange={changeInput}
                disabled={data[index].lock ? true: false}
                onKeyDown={enter}
                onClick={e => {e.target.style.cursor = 'none'}}
                onMouseMove={e => {e.target.style.cursor = 'text'}}
                ref={refInput}
            />
            <span className="underline"
                style={{
                    transition: '0.2s',
                    width: '0%',
                    backgroundColor: '#9c9b9e',
                    height: '1px',
                    bottom: '2px',
                    left: 0,
                    zIndex: 4,
                    position: 'absolute',
                    pointerEvents:'none'
                }}>
            </span>
        </>
    )
}

export default WarehouseInputField;

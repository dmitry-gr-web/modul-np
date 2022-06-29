import React, { useState, useEffect, useRef } from 'react';
import { formatPhone, recognizeOperator } from '@jaood/phone-numbers';
let inputselect;
const WarehouseInputField = ({ data, setData, index, podlozhka, setPodlozhka, setHideMenu, addOneItem, value, type, iconOperator, icon, setCount, setHideArrow }) => {
    function inputOn(e, index) {
        // e.stopPropagation();
        inputselect = setTimeout(() => {
            if (!data[index].lock) {
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                // inputRef?.current?.focus();
                e.target.focus();
                e.target.select();
            }
        }, 150);
    }
    const refInput = useRef();

    function inputOff(e) {
        // e.stopPropagation();
        if (!podlozhka) {
            e.target.blur();
        }
        clearTimeout(inputselect);
    }
    const [input, setInput] = useState(data[index].attribute);
    const [memoryInput, setMemoryInput] = useState(data[index].attribute);
    const [flag, setFlag] = useState(false);
    // const [render,setRender]=useState(false);
    function changeInput(e) {

        document.querySelector('.contentScroll').style.overflow = 'hidden';
        document.querySelector('.track-vertical').style.opacity = 0;
        document.querySelector('.track-horizontal').style.opacity = 0;
        refInput.current.closest('td').style.zIndex = 99;
        refInput.current.closest('tr').classList.add('hover-disabled');
        refInput.current.closest('td').querySelector('span').style.width = '100%';
        // refInput.current.style.color = 'rgba(0,0,0,0.5)';
        // document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').style.zIndex = 99;
        // document.querySelector('.first-tab-body tr:nth-child(2)').classList.add('hover-disabled');
        if (e.target.value.length >= 1) {
            e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        }
        setHideMenu(true);
        setFlag(true);
        setInput(e.target.value);
        setPodlozhka(true);
    }
    useEffect(() => {
        if (!podlozhka && flag) {
            if (type === 'attribute') {
                if (input !== '') {
                    data[index].attribute = input;
                    console.log(data);
                    setData([...data])
                    // setInput(data[index].attribute);
                    setMemoryInput(input)
                } else {
                    data[index].attribute = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'commentary') {
                if (input !== '') {
                    data[index].commentary = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].commentary = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'contact') {
                if (input !== '') {
                    data[index].contact = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].contact = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            } else if (type === 'company') {
                if (input !== '') {
                    data[index].company = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].company = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            else if (type === 'number') {
                if (input !== '') {
                    data[index].number = input;
                    setData([...data])
                    setMemoryInput(input)
                } else {
                    data[index].number = memoryInput;
                    setData([...data])
                    setInput(memoryInput);
                }
            }
            setHideArrow(true);
            setFlag(false);
            // setHideMenu(false);
            // setPodlozhka(false);
            // document.querySelector('.first-tab-body tr:nth-child(2) td:last-child input').style.color = ' ';

            refInput.current.closest('td').querySelector('span').style.width = '0%';
            refInput.current.closest('td').style.zIndex = '';
            refInput.current.closest('tr').classList.remove('hover-disabled');

        }
        // if(!podlozhka && value === '' && input !== '') {
        //     setCount(prev => prev - 1)
        // }
        if (!podlozhka && value === '' && input === '') {
            data.shift();
            // console.log('pidor')
            // setRender(!render);
            // setHideArrow(true);
            // setData([...data])
            // let [del,...newdata] = data;

            // setData()
            console.log(data);
            setHideArrow(true);
            setData([...data]);


        }
        // setHideArrow(true);
    }, [podlozhka, data])
    // console.log(data)
    useEffect(() => {
        setFlag(addOneItem)
        // if(addOneItem && input !== '')
        // setCount(prev=> prev +1)
    }, [addOneItem])
    useEffect(() => {
        setInput(value)
    }, [value])

    // useEffect(() => {
    //     if (!podlozhka && flag) {
    //         if (input !== '') {
    //             data[index].attribute = input;
    //             setData([...JSON.parse(JSON.stringify(data))])
    //             // setInput(data[index].attribute);
    //             // setInput(data[index].attribute)
    //             setMemoryInput(input)
    //         }
    //     }
    // }, [podlozhka])
    return (
        <>
            {iconOperator && <span className={recognizeOperator(input, 'UA')} style={{ marginRight: 6, top: 1, position: 'relative', marginLeft: 4, pointerEvents: 'none' }}></span>}
            <input
                // onClick={e => e.stopPropagation()}
                onMouseEnter={(e) => {e.stopPropagation();inputOn(e, index)}}
                onMouseLeave={e => inputOff(e, index)}
                style={{ color: `${data[index].status ? 'rgba(0,0,0,0.4)' : ''}` }}
                className='warehouseInput'
                value={iconOperator ? formatPhone(input, 'UA') : input}
                onChange={changeInput}
                disabled={data[index].lock && true}
                ref={refInput}
            // style={{}}
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

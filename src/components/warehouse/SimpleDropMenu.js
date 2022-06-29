import React, { useState, useEffect, useRef } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const SimpleDropMenu = ({ setListenChangeSuppliers, listenChangeSuppliers,addPrice }) => {
    const [newarr, setNewArr] = useState([
        // { id: 0, country: 'all', select: true },
        { id: 0, company: 'Мега ОПТ', select: false },
        { id: 1, company: 'TrendOpt', select: false },
        { id: 2, company: 'Imperial Super Group', select: false },
        { id: 3, company: 'Интернет-магазин VlaRus', select: false },
        { id: 4, company: '7й километр', select: false },
        { id: 5, company: 'Концерн Denavi', select: false },
    ]);
    const [openMenu, setOpenMenu] = useState(false);
    // const [result, setResult] = useState('');
    // const [flag, setFlag] = useState(false);
    useEffect(()=> {
        if(addPrice){
            setOpenMenu(true);
            setTimeout(() => {
            
                refInput.current.focus();
            }, 200);
        }
    },[addPrice])
    const refDropmenu = useRef();
    function onClick() {
        // setPodlozhka(true);
        setInput('');
        setOpenMenu(true);
        setTimeout(() => {
            
            refInput.current.focus();
        }, 200);

        // setFlag(true);
        // setHideMenu(true);
        // document.querySelector('.contentScroll').style.overflow = 'hidden';
        // document.querySelector('.track-vertical').style.opacity = 0;
        // document.querySelector('.track-horizontal').style.opacity = 0;
        // refDropmenu.current.closest('tr').classList.add('hover-disabled');
    }
    // useEffect(() => {
    //     if (!podlozhka && flag) {
    //         setFlag(false);
    //         setOpenMenu(false);
    //         // setHideMenu(false);
    //         document.querySelector('.contentScroll').style.overflow = 'auto';
    //         document.querySelector('.track-vertical').style.opacity = 1;
    //         document.querySelector('.track-horizontal').style.opacity = 1;
    //         refDropmenu.current.closest('tr').classList.remove('hover-disabled');
    //     }
    // }, [podlozhka])
    // useEffect(() => {
    //     if (openMenu) {
    //         let pos = refDropmenu.current.getBoundingClientRect();
    //         const heightPlus = pos.y + refDropmenu.current.offsetHeight;
    //         const viewportHeight = document.body.clientHeight;
    //         if (heightPlus + 100 > viewportHeight) {
    //             // refDropmenu.current.style.bottom = '18px';
    //             refDropmenu.current.classList.add('toggleUp');
    //         }
    //     }

    // }, [openMenu])
    function clicklist(i, e) {
        e.stopPropagation();
        let obj = newarr.map((x, ind) => {
            if (ind === i) {
                // setResult(x.country)
                // data[index].country = x.country;
                // setData([...data]);
                return { ...x, select: true };
            } else {
                return { ...x, select: false }
            };
        });
        e.target.closest('.cena').querySelector('.cenaInput').focus();
        setOpenMenu(false);
        setNewArr(obj);
        setListenChangeSuppliers(newarr.filter(x => x.select)[0]?.company);
    }
    const [hidearrow, sethidearrow] = useState(false);
    const [input,setInput] = useState('');
    const refInput = useRef();
    return (
        <div className={`warehouse-dropmenu ${!hidearrow && 'hide-arrow'}`}
            // style={{ height: 18, lineHeight: '18px', zIndex: `${openMenu ? '3' : '0'}` }}
            onClick={(e) => { onClick(); e.stopPropagation() }}
            onMouseEnter={() => sethidearrow(true)}
            onMouseLeave={() => sethidearrow(false)}>

            <div className={'text-result'} style={{ maxWidth: 100, textAlign: 'left' }}>
                {newarr.filter(x => x.select)[0]?.company}
            </div>
            <div className='underline'></div>
            <div className={`${openMenu ? 'input-wrap toggle' : 'input-wrap'}`}>
                <input ref={refInput} className='input-search' value={input} onChange={e=> {
                    if (e.target.value.length === 1) {
                        e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                    }
                    setInput(e.target.value);
                }}/>
                <div className='count'>({newarr.length})</div>
            </div>

            <div ref={refDropmenu} className={`${openMenu ? 'dropmenu toggle' : 'dropmenu'}`}>
                <SimpleBar
                    style={{ height: 90 }}
                    autoHide={false}

                    scrollbarMinSize={20}

                >
                    {newarr.filter((user) => user.company.toLowerCase().includes(input.toLowerCase())).map((x, i) =>
                        <div
                            className={`list ${x.select && 'select-btn'}`}
                            onClick={(e) => clicklist(i, e)}
                            key={i}
                        // style={{color: 'rgba(0, 0, 0, 0.7)'}}
                        >
                            {x.company}
                        </div>)
                    }
                </SimpleBar>
            </div>
        </div>
    )
}

export default SimpleDropMenu;

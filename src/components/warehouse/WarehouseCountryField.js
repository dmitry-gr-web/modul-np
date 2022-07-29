import React, { useState, useEffect,useRef } from 'react'

const WarehouseCountryField = ({carouselDrop,setCarouselDrop, country, podlozhka, setPodlozhka, data, setData, setHideMenu, index }) => {

    const [newarr, setNewArr] = useState([
        { id: 0, country: '🇷🇺', select: false },
        { id: 1, country: '🇺🇦', select: false },
        { id: 2, country: '🇹🇷', select: false },
    ]);
    const [openMenu, setOpenMenu] = useState(false);
    const [result, setResult] = useState(country);
    const [flag, setFlag] = useState(false);
    const refDropmenu = useRef();
    const warehouse = useRef();
    useEffect(()=> {
        let arr = [...newarr];
        arr = arr.map(x => {
            if(x.country === country) {
                return {...x , select:true}
            } else {
                return {...x}
            }
        })
        setNewArr(arr);
    },[])
    useEffect(()=> {
        if(flag && carouselDrop.carousel){
            let arr = [...newarr];
            arr = arr.map(x => {
                return {...x,select:false}
            })
            setNewArr(arr);
        }
    },[carouselDrop.carousel,flag])
    // console.log(flag)
    function onClick() {
        setPodlozhka(true);
        setOpenMenu(true);
        setFlag(true);
        setHideMenu(true);
        warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
        warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
        warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
        refDropmenu.current.closest('tr').classList.add('hover-disabled');
    }
    // console.log(carouselDrop)
    // useEffect(() => {
    //     if (!podlozhka && flag && carouselDrop === false) {
    //         setFlag(false);
    //         setOpenMenu(false);
    //         setHideMenu(false);
    //         // setPodlozhka(false);
    //         if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
    //             warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
    //         }else {
    //             warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
    //         }
    //         warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
    //         warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
    //         refDropmenu.current.closest('tr').classList.remove('hover-disabled');
    //     }
    // }, [podlozhka])
    useEffect(() => {
        if (openMenu) {
            let pos = refDropmenu.current.getBoundingClientRect();
            const heightPlus = pos.y + refDropmenu.current.offsetHeight;
            const viewportHeight = document.body.clientHeight;
            if (heightPlus + 100 > viewportHeight) {
                refDropmenu.current.classList.add('toggleUp');
            }
        }

    }, [openMenu])
    function clicklist(i) {
        let obj = newarr.map((x, ind) => {
            if (ind === i) {
                setResult(x.country)
                data[index].country = x.country;
                setData([...data]);
                return { ...x, select: true };
            } else {
                return { ...x, select: false }
            };
        });
        setNewArr(obj);
    }
    const [hidearrow,sethidearrow] = useState(false)
    // console.log(newarr)
    function clickVirtualWrapper () {
 
        setFlag(false);
        setOpenMenu(false);
        
        // setPodlozhka(false);
      
        let selectOrNot = newarr?.some(x => x.select);
        // console.log(selectOrNot)
			if (selectOrNot && carouselDrop.carousel === true) {
				setTimeout(() => {	
					const targetBlock = document.querySelectorAll('.first-tab-body tr .warehouseInput')[0]
					const poloska = document.querySelectorAll('.first-tab-body tr .underline')[0]
					// targetBlock.click();
                    // console.log(targetBlock.parentElement)
                    targetBlock.parentElement.style.zIndex = '99';
					targetBlock.focus();
					poloska.style.width = 'calc(100% - 15px)';
				}, 100);
			    console.log('vibrani','carousel true')

                setCarouselDrop({...carouselDrop,query:1});
			} else if (carouselDrop.carousel === false){
                setHideMenu(false);
                setPodlozhka(false);
                if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                    warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
                }else {
                    warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
                }
                warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
                warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
                
                refDropmenu.current.closest('tr').classList.remove('hover-disabled');
				// if(!carouselDrop.carousel){

				// }
				// carouselDrop.carousel = false;
				// setCarouselDrop({...carouselDrop})
				// let obj = JSON.parse(JSON.stringify(attributeData));
                // obj.sort.splice(indexTr, 1);
                // obj.array.splice(indexTr, 1);
                // setAttributeData(obj)
                // arr = arr.filter((x, i) => i !== indexTr)
                // setArr([...arr])
				// setCarouselDrop({...carouselDrop, carousel: false})
				// setPodlozhka(false);
                setCarouselDrop({query:0,carousel:false});
				console.log('carousel false')

			} else if (carouselDrop.carousel === true && !selectOrNot ){
                setHideMenu(false);
                setPodlozhka(false);
                if((data.length) * 18 < (	warehouse.current.closest('.wrapper-scroll .scroll').offsetHeight - 75)) {
                    warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
                }else {
                    warehouse.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
                }
                warehouse.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
                warehouse.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
                
                refDropmenu.current.closest('tr').classList.remove('hover-disabled');
              

				// let obj = JSON.parse(JSON.stringify(data));
				// setCarouselDrop(false)
                // obj.splice(0, 1);
                // obj.splice(0, 1);
                // setData(obj)
                setCarouselDrop({query:0,carousel:false});
                let arr = data.filter((x, i) => i !== 0)
                setData([...arr])
				console.log('carousel true','nevibrani')
			}
	}
    function handle(e) {
        if (warehouse.current && !warehouse.current.contains(e.target)) {
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
        <div className={`warehouse-dropmenu ${!hidearrow ? 'hide-arrow': ''}`}
            style={{ height: 18, lineHeight: '18px', zIndex: `${openMenu ? '3' : '0'}` }}
            onClick={(e) => { onClick(); e.stopPropagation() }}
            onMouseEnter={()=> sethidearrow(true)}
            onMouseLeave={()=> sethidearrow(false)}
            ref={warehouse}
        >
            <div style={{width:'100%',textAlign: 'center'}} >
                <span style={{color:'rgba(0,0,0,1)',  opacity: `${!data[index].status ? '0.4' : ''}`}} className={'flags'}>
                    {result}
                </span>
            </div>
            <div ref={refDropmenu} className={`dropmenu ${openMenu && ' country-toggle'}`} style={openMenu ? {height: 90,transform: 'translateY(-20px)'}: {height:0,transform: 'translateY(-20px)'}}>
                {openMenu && newarr.map((x, i) =>
                    <div
                        className={`list ${x.select && 'select-btn'}`}
                        onClick={(e) => clicklist(i)}
                        style={{ textOverflow: 'unset'}}
                        key={i}
                    >
                        <span className='flags'>{x.country}</span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WarehouseCountryField;

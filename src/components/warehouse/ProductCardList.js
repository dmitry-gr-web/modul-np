import React, { useState, useEffect,useRef } from 'react'
import SwitchBtn from './SwitchBtn';
import SwitchBtnSmall from './SwitchBtnSmall';
// import styles from './Warehouse.scss';
import PlusMinusBlock from './PlusMinusBlock';
import { SvgDeleteBtn } from '../../img/svg-pack';
import LoadImg from './LoadImg';
// import ProductCardListMenu from './ProductCardListMenu';
const ProductCardList = ({carouselDrop,setCarouselDrop,setIndexTr, attributeData, setAttributeData, index, arr, setArr, item, data2, onClick, tooltipOff, tooltipOn, translator, podlozhka, setPodlozhka }) => {
    // const [data, setData] = useState([
    //     {ostatok: '1'}
    // ])
    // let [obj, setObj] = useState(JSON.parse(JSON.stringify(sortedArr)));
    // console.log(obj);
    // useEffect(() => {
    //     let obj = { ...obj };
    //     let obj1 = {};
    //     Object.keys(obj).map(
    //         (x) =>
    //         (obj1[x] = obj[x].map((x) => {
    //             if (x.name === objProduct[getIndex].country) {
    //                 return { ...x, select: true };
    //             } else if (x.name === objProduct[getIndex].currency) {
    //                 return { ...x, select: true };
    //             } else if (x.name === objProduct[getIndex].attribute) {

    //                 return { ...x, select: true };
    //             } else {
    //                 return { ...x };
    //             }
    //         }))
    //     );
    //     setSortedArr([...sortedArr, { ...data2.attribute[0], select: true }])

    //     setData({ ...obj1 });
    // }, []);
    // const [objAttribute,setObjAttribute] =  useState([
    //     { id: 0, name: '32гб', select: true, idNumber:9 },
    //     { id: 1, name: 'Синняя Красная', select: false ,idNumber:9},
    //     { id: 2, name: '42 размер', select: false ,idNumber:43},
    //     { id: 3, name: 'Синий 42 размер', select: false ,idNumber:94},
    //     { id: 4, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:99},
    //     { id: 5, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:36},
    //     { id: 6, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:7},
    // ]);
    const [valueWeigth, setValueWeight] = useState(item.weight);
    // useEffect(()=> {
    //     // if(!podlozhka) {

    //     //         if(valueWeigth !==''){
    //     //             arr[index].weight=valueWeigth;
    //     //             setArr([...arr ])
    //     //         }


    //     // }
    // },[podlozhka])
    const [flag,setFlag] = useState(false);
    const inputRef = useRef();
    function handle(e) {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            // addItem(e);
			// console.log('pidar');
			setFlag(false);
			// setOpenCardMenu(false);
			// setPodlozhka(false);
			// let selectOrNot = attributeData.array[indexTr].some(x => x.select);
			if (valueWeigth !== '') {
				// setTimeout(() => {	
				// 	const targetBlock = document.querySelectorAll('.product-card .first-tab-body .weight input')[index];
				// 	targetBlock.focus();
				// }, 100);
				setPodlozhka(false);
			} else {
				let obj = JSON.parse(JSON.stringify(attributeData));
                obj.sort.splice(index, 1);
                obj.array.splice(index, 1);
                setAttributeData(obj)
                arr = arr.filter((x, i) => i !== index)
                setArr([...arr])
				setPodlozhka(false);
			}

        }   
    }
    useEffect(() => {
        if(flag){
            document.addEventListener("click", handle, true);
        }
        return () => {
            document.removeEventListener("click", handle, true);
        };
    }, [flag,valueWeigth]);
    return (
        <tr>
            <td className="sticky-body">
                <div className="sticky-block">
                    <div
                        style={{
                            minWidth: '51px',
                            paddingRight: '10px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <SwitchBtn status={item.status.all} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={item.status.crm} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={item.status.rozetka} data={arr} setData={setArr} index={index} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={item.status.prom} data={arr} setData={setArr} index={index} />
                    </div>
                    <div
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                        style={{ textAlign: 'left', padding: '0px 10px', paddingLeft: 7, width: 56, lineHeight: '18px', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        {/* 5649- */}
                        {item.id}
                        {/* {sortedArr[0]?.filter((x) => x.select === true).map(x=> x?.idNumber).join('.')} */}
                    </div>
                    <div style={{ width: 150, paddingRight: 10, height: 18, lineHeight: '18px', display: 'flex', position: 'relative' }}>
                        <LoadImg style={{ marginRight: 6 }} />
                        <div
                            onMouseEnter={tooltipOn}
                            onMouseLeave={tooltipOff}
                            className="btn-product-menu2"
                            onClick={(e) => {
                                setCarouselDrop({...carouselDrop,carousel: false});
                                onClick('attribute', e.currentTarget, index)}}>
                            {attributeData.sort[index]?.filter((x) => x.select === true).map(x => x?.name).join(', ')}
                        </div>
                        {/* <ProductCardListMenu 
                            // openCardMenu={openCardMenu}
                            // searchLine={searchLine}
                            // inputRef={inputRef}
                            // style={{marginLeft: 20}}
                            multiselect={true}
                            inputOn={true}
                            data={objAttribute}
                            // dataCurrent={data}
                            // typeData={typeData}
                            setData={setObjAttribute}
                            podlozhka={podlozhka}
                            setPodlozhka={setPodlozhka}
                            // setOpenCardMenu={setOpenCardMenu}
                            translator={translator}
                            createAttr={true}
                            setSortedArr={setSortedArr}
                            sortedArr={sortedArr}
                            // currentData={objAttribute}
                            index={index}
                            // carouselDrop={carouselDrop}
                            // onClick={onClick}
                        /> */}
                    </div>
                    <div className="shadow-left"></div>
                </div>
            </td>
            <td className='weight' style={{ paddingLeft: 12, paddingRight: 10 }}>
                {/* {item.weight} */}
                <input ref={inputRef} value={valueWeigth} onChange={e => {

                    // console.log(arr)
                    // console.log(arr)
                    // arr[index].weight=e.target.value;
                    // setArr([...arr ])
                    setFlag(true);
                    setValueWeight(e.target.value)

                }} />
            </td>
            <td>
                {item.size}
            </td>

            <PlusMinusBlock
                translator={translator}
                objProduct={arr}
                setObjProduct={setArr}
                // setSwitchMenu={setSwitchMenu}
                podlozhka={podlozhka}
                setPodlozhka={setPodlozhka}
                // hideMenu={hideMenu}
                style={{ paddingLeft: '5px' }}
                // setHideMenu={setHideMenu}
                index={0}
                tooltipOn={tooltipOn}
                tooltipOff={tooltipOff}
            />
            {/* <PlusMinusBlock
							translator={translator}
							objProduct={objProduct}
							setObjProduct={setObjProduct}
							setSwitchMenu={setSwitchMenu}
							podlozhka={podlozhka}
							setPodlozhka={setPodlozhka}
							hideMenu={hideMenu}
							setHideMenu={setHideMenu}
							index={index}
							tooltipOn={tooltipOn}
							tooltipOff={tooltipOff}
						/> */}
            <td
                className="nal-rezerv"
                style={{

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
                1 239
                {/* {objProduct[index].rezerv} */}
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-otpr"
                style={{
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
                2 932
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-vozvrat"
                style={{
                    paddingRight: '10px',
                }}

            >
                {/* <div
        
        >
        </div> */}
                {/* {formatNumber2(objProduct[index].vozvrat)} */}
                {/* {objProduct[index].vozvrat} */}
                655
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="nal-zakupka"
            >
                {/* {objProduct[index].zakupka} */}
                {/* {formatNumber(objProduct[index].zakupka)} */}
                {/* 565.00 */}
                {item.zakupka}
            </td>
            <td
                className="nal-prodazha"
            >
                {/* {objProduct[index].prodazha} */}
                {/* 1 000.00 */}
                {item.prodazha}
                {/* {formatNumber(objProduct[index].prodazha)} */}
            </td>
            <td
                className="nal-marzha"
            >
                {/* {formatNumber(objProduct[index].marzha)} */}
                {/* 667 */}
                {item.marzha}
            </td>
            <td
                className="summa-suma1"
                style={{
                    textAlign: 'right',
                    display: 'flex',
                    justifyContent: 'end',
                    paddingRight: '3px',
                }}
            // onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
            // onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
            >
                {/* 1 570.00 */}
                {item.suma1}
                {/* {objProduct[index].suma1} */}

                <span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }}>/</span>
                {/* </div> */}
            </td>
            <td
                className="summa-suma2"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: '4px',
                    // color: 'rgba(0,0,0,0.5)',
                }}

            >

                {/* {objProduct[index].suma2} */}
                {item.suma2}

                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma3"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: '4px',
                }}

            >
                {item.suma3}

                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma4"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: 12
                }}
            >
                {item.suma4}

                <span style={{ pointerEvents: 'none', width: 'calc(100% - 12px)' }}></span>
            </td>
            <td className='delete'
                onMouseEnter={e => {
                    e.currentTarget.closest('tr').style.opacity = 0.5;
                }}
                onMouseLeave={e => {
                    e.currentTarget.closest('tr').style.opacity = '';
                }}>
                <button onClick={e => {
                    // console.log(arr[index]);
                    // arr.splice(index,1)
                    // console.log(arr)
                  
                    // console.log(arr[index])
                    // console.log(attributeData.sort)
                    // console.log(attributeData.array.filter((x,i) => i !== index))
                    // console.log(attributeData.sort.filter((x,i) => i !== index))
                    // console.log(index)
                    // attributeData.sort[index] = attributeData.sort[index].filter((x,i) =>  x.id !== index)

                    // attributeData.array[index] = attributeData.array[index].filter((x,i) =>  x.id !== index)
                    // let obj = {...attributeData};
                    let obj = JSON.parse(JSON.stringify(attributeData));
                    obj.sort.splice(index, 1);
                    obj.array.splice(index, 1);

                    setAttributeData(obj)
                    // console.log(arr)
                    setIndexTr(index);
                    arr = arr.filter((x, i) => i !== index)
                    setArr([...arr])
                    // console.log(attributeData.sort)
                    console.log(attributeData.array)
                }}>
                    <SvgDeleteBtn />
                </button>
            </td>
        </tr>
    )
}

export default ProductCardList;

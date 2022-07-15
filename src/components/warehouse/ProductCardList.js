import React,{useState} from 'react'
import SwitchBtn from './SwitchBtn';
import SwitchBtnSmall from './SwitchBtnSmall';
// import styles from './Warehouse.scss';
import PlusMinusBlock from './PlusMinusBlock';
import { SvgDeleteBtn } from '../../img/svg-pack';
import LoadImg from './LoadImg';
const ProductCardList = ({setSortedArr,sortedArr,data2,onClick,tooltipOff,tooltipOn,translator, podlozhka,setPodlozhka}) => {
    const [data, setData] = useState([
        {ostatok: '1'}
    ])
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
                        <SwitchBtn status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div style={{ width: 28, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div
                    onMouseEnter={tooltipOn}
                    onMouseLeave={tooltipOff}
                        style={{ textAlign: 'left', padding: '0px 10px',paddingLeft:7, width: 56, lineHeight: '18px', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        5649-{sortedArr?.filter((x) => x.select === true).map(x=> x?.idNumber).join('.')}
                    </div>
                    <div style={{ width: 150, paddingRight: 10,height:18 ,lineHeight:'18px',display: 'flex'}}>
                        <LoadImg style={{marginRight: 6}}/>
                        <div 
                            onMouseEnter={tooltipOn}
                            onMouseLeave={tooltipOff}
                            className="btn-product-menu2" 
                            onClick={(e) => onClick('attribute', e.currentTarget)}>
                            {sortedArr?.filter((x) => x.select === true).map(x=> x?.name).join(', ')}                            
                        </div>
                    </div>
                    <div className="shadow-left"></div>
                </div>
            </td>
            <td style={{ paddingLeft:12, paddingRight:10}}>
                0.343
            </td>
            <td>
                34х23х55
            </td>

            <PlusMinusBlock
                translator={translator}
                objProduct={data}
                setObjProduct={setData}
                // setSwitchMenu={setSwitchMenu}
                podlozhka={podlozhka}
                setPodlozhka={setPodlozhka}
                // hideMenu={hideMenu}
                style={{paddingLeft: '5px'}}
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
                565.00
            </td>
            <td
                className="nal-prodazha"
            >
                {/* {objProduct[index].prodazha} */}
                1 000.00
                {/* {formatNumber(objProduct[index].prodazha)} */}
            </td>
            <td
                className="nal-marzha"
            >
                {/* {formatNumber(objProduct[index].marzha)} */}
                667
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
                1 570.00
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
                17 925.00
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma3"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: '4px',
                }}

            >
                2 924.00
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
            <td
                className="summa-suma4"
                style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    paddingRight: 12
                }}
            >
                655.00
                <span style={{ pointerEvents: 'none', width: 'calc(100% - 12px)' }}></span>
            </td>
            <td className='delete'
                onMouseEnter={e => {
                    e.currentTarget.closest('tr').style.opacity = 0.5;
                }} 
                onMouseLeave={e => {
                    e.currentTarget.closest('tr').style.opacity = '';
                }}>
                <button>
                    <SvgDeleteBtn />
                </button>
            </td>
        </tr>
    )
}

export default ProductCardList;

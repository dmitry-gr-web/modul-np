import React from 'react'
import SwitchBtn from './SwitchBtn';
import SwitchBtnSmall from './SwitchBtnSmall';
import styles from './Warehouse.scss';
const ProductCardList = () => {
    return (
        <tr className='hover-disabled'>
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
                    <div style={{ width: 26, display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div style={{ width: 26 , display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div style={{ width: 26 , display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                        <SwitchBtnSmall status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} />
                    </div>
                    <div
                        style={
                            { textAlign: 'left', padding: '0px 10px', width: 56, lineHeight: '18px', height: '100%', overflow:'hidden',textOverflow: 'ellipsis' }
                        }
                    >
                        34352
                    </div>
                    <div style={{width: 150, paddingRight: 10}}>
                        32 Гб
                    </div>
                    <div className="shadow-left"></div>
                </div>
            </td>
            <td style={{paddingLeft:12}}>
                0.343
            </td>
            <td className={styles.pidar}>
                34х23х55
            </td>

            <td
            // onMouseLeave={PlusMinusClose}
            // onMouseEnter={PlusMinusOpen}
            // className={`nal-ostatok ${addPrice ? 'showBtn' : ''}`}
            // style={addPrice ? { zIndex: 99 } : {}}
            // onClick={addPrice ? (e) => e.stopPropagation() : null}
            // onDoubleClick={addPrice ? (e) => e.stopPropagation() : null}
            >
                <div
                    className="wrap-nal-ostatok"
                >



                    + -
                </div>


                <span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', position: 'absolute', right: 3, top: 3 }}>/</span>
            </td>
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
                }}
            >
                655.00
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
        </tr>
    )
}

export default ProductCardList;

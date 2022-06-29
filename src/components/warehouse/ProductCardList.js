import React from 'react'

const ProductCardList = () => {
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
                        swi
                    </div>
                    <div style={{width:26}}>swi</div>
                    <div style={{width:26}}>swi</div>
                    <div style={{width:26}}>swi</div>
                    <div
                
                        style={
                            { textAlign: 'left', paddingRight: '10px',width:56 }
                        }
                    >
                        34352
                    </div>
                    <div>
                        32 Гб
                    </div>
                    <div className="shadow-left"></div>
                </div>
            </td>
            <td>
                0.343
            </td>
            <td>
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
                    <button
                        // onDoubleClick={(e) => e.stopPropagation()}
                        // onClick={BtnMinus}
                        // disabled={objProduct[index].lock ? true : false}

                    >
                        <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.26782 3.44748L8.08752 3.44747"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                    {/* <input
                        ref={inputRef}
                        type="text"
                        onChange={inputChange}
                        maxLength={5}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        value={memoryInput}
                        onDoubleClick={(e) => e.stopPropagation()}
                        style={{
                            color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.7)'}`,
                            lineHeight: '18px',
                        }}
                        readOnly={objProduct[index].lock ? true : false}
                    /> */}
                    <button
                        // style={btnMenu ? { width: '16px' } : {}}
                        // onDoubleClick={(e) => e.stopPropagation()}
                        // onClick={BtnPlus}
                        // disabled={objProduct[index].lock ? true : false}


                    >
                        <svg
                            width="15"
                            height="15"
                            viewBox="3 2 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: 'rotate(45deg)' }}
                        >
                            <path
                                d="M7.26655 8.03662L12.0888 12.8589"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.26655 12.8589L12.0888 8.03659"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.26655 8.03662L12.0888 12.8589"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.26655 12.8589L12.0888 8.03659"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.26655 8.03662L12.0888 12.8589"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.26655 12.8589L12.0888 8.03659"
                                stroke="black"
                                strokeOpacity="0.7"
                                strokeWidth="1.09116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                    {/* <div ref={cenaBlock} className='cena'>
                        {addPrice && <div ref={focus} className='wrap' onMouseEnter={focusCena}>

                            <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{memoryCena >= 1 ? translator.getTranslation('menuAdd/CribProduct', 'add') : translator.getTranslation('menuAdd/CribProduct', 'crib')}</span><span>{memoryCena} шт</span>
                            </div>
                            {memoryCena >= 1 ? <>
                                <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
                                    <span>{translator.getTranslation('menuAdd/CribProduct', 'purchase')}</span><input className='cenaInput' onChange={cenaChange} value={cena} />
                                    <div className='poloska'></div>
                                </div>
                                <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
                                    <span>{translator.getTranslation('menuAdd/CribProduct', 'exchangeRates')}</span><input value={kurs} onChange={kursChange} />
                                    <div className='poloska'></div>
                                </div>
                                <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>Поставщик</span>
                                    <div style={{ minWidth: '100px', padding: 5, paddingLeft: 0, paddingRight: 11 }}>
                                        <SimpleDropMenu setListenChangeSuppliers={setListenChangeSuppliers} listenChangeSuppliers={listenChangeSuppliers} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>{translator.getTranslation('menuAdd/CribProduct', 'total')}</span><span>{itogoZakupka}</span>
                                </div>

                            </> :
                                <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
                                    <span>{translator.getTranslation('menuAdd/CribProduct', 'reason')}</span><input className='prichinaInput' onChange={pri4inaChange} value={pri4ina} />
                                    <div className='poloska'></div>
                                </div>
                            }
                            <button
                                onClick={saveBtn}
                                disabled={cena !== '' && memoryCena >= 1 && listenChangeSuppliers !== '' || pri4ina !== '' && memoryCena < 1 ? false : true}
                                className="save-btn">
                                Сохранить
                            </button>
                        </div>}
                    </div> */}
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
                    color:'rgba(0, 0, 0, 0.5)',
                }}
            >
                655.00
                <span style={{ pointerEvents: 'none' }}></span>
            </td>
        </tr>
    )
}

export default ProductCardList;

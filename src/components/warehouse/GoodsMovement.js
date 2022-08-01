import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Warehouse.scss';
import { Preloaded } from '../../img/svg-pack';
import GoodsMovementList from './GoodsMovementList';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import _ from 'lodash';
// import WarehouseDropRange from './WarehouseDropRange';
import WarehouseDropInput from './WarehouseDropInput';
import { useFetch } from '../data/useFetch';
import ScrollBar from './ScrollBar';
import Calendar from './Calendar';
// import 'react-date-ranges/dist/styles.css';
// import 'react-date-ranges/dist/theme/default.css';
// import { addDays, format } from 'date-fns';
// import ru from './../data/ru';


let hover;
let plusminus;
const Yoyo = React.memo(() => {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [])
    return (
        <th colSpan={5} style={{ position: 'relative' }}>
            <div className='colum' style={{ display: 'flex', position: 'absolute', top: 0, left: 0, width: 'calc(100% - 7px)' }}>
                <div onMouseEnter={e => {
                    e.target.style.width = '51px';
                    setHover(true);
                }}
                    onMouseLeave={e => {
                        setHover(false);
                        e.target.style.width = '10px';
                    }}
                    style={{ height: 18, width: 10, transition: 'width 0.2s', background: 'pink' }}></div>
                <div style={{ height: 18, width: `${hover ? 10 : 51}px`, transition: 'width 0.2s', background: 'yellow', position: 'relative' }}></div>
                <div style={{ height: 18, width: 63, background: 'green' }}></div>
                <div style={{ height: 18, width: 63, background: 'blue' }}></div>
                <div style={{ height: 18, width: 63, background: 'black' }}></div>

            </div>
        </th>
    )
})
const GoodsMovement = ({ objMovement, setObjMovement, setToggleCard, setGetIndex, translator }) => {
    const [lastIndex, setLastIndex] = useState(0);
    const [podlozhka, setPodlozhka] = useState(false);
    const [switchMenu, setSwitchMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);
    const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
    // http://192.168.0.197:3005/folders
    const { data, error, isLoading } = useFetch(''
        // , {
        // 		method: 'POST',
        // 		headers: {
        // 			'Accept': 'application/json',
        // 			'Content-Type': 'application/json'
        // 		},
        // 		body: JSON.stringify({
        // 			"query": {},
        // 			"start": 10,
        // 			// "start": props.folder.at(-1)?.id,
        // 			"end": 20
        // 		})
        // 	}
    );
    // const [calendaryState,setCalendaryState] = useState({
    //     menu: null,
    //     stats: [{
    //         startDate: null,
    //         endDate: null,
    //         key: 'selection'
    //     }],
    //     open: true,
    //     select: true
    // })
    // useEffect(()=> {
    // 	let i = 0;
    // 	document.addEventListener('contextmenu', function(e){
    // 		e.preventDefault();
    // 		console.log(e.pageX, e.pageY)
    // 		let div = document.createElement('div');
    // 		i++;
    // 		div.innerHTML = `eblo tupoe`
    // 		div.style.cssText = `
    // 			position: absolute;
    // 			top:${e.pageY}px;
    // 			left:${e.pageX}px;
    // 		`
    // 		document.querySelector('#root').append(div);

    // 	})
    // })


    function searchLine(text, value) {
        if (value !== '') {
            let re = new RegExp(value, 'gui');
            let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

            return text_pr;
        } else {
            return text;
        }
    }

    useEffect(() => {
        if (objMovement?.length > 0) {
            document.addEventListener('click', clickDocument, true);
            document.addEventListener('keydown', ctrlAclickShift, true);
            return () => {
                document.removeEventListener('click', clickDocument, true);
                document.removeEventListener('keydown', ctrlAclickShift, true);
            };
        }
    }, [objMovement?.length])
    function clickDocument(e) {
        if (refScroll.current && !refScroll.current.contains(e.target)) {
            let newobj = [...objMovement];
            newobj = newobj.map((x) => {
                return { ...x, select: false }
            });
            setObjMovement(newobj);
        }
    }
    function ctrlAclickShift(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            let newobj = [...objMovement];
            newobj = newobj.map((x) => {
                if (x.lock) {
                    return { ...x, select: false };
                } else {
                    return { ...x, select: true };
                }
            });
            setObjMovement(newobj);

        }
    }

    function formatNumber2(number) {
        let newnum = number?.toLocaleString('ru-RU', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
        return newnum;
    }
    function formatNumber(number) {
        let newnum = number
            ?.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            .replace(',', '.');
        return newnum;
    }
    function tooltipOn(e, html) {
        let posElement = e.currentTarget.getBoundingClientRect();
        const tooltipBlock = document.getElementById('tooltipBtn');
        tooltipBlock.style.fontSize = '14px';
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'status')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'status');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === 'ID') {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'id');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'country')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'country');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'currency')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'currency');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'name')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'name');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'attribute')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'attribute');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'available')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'available');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'purchase')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'purchase');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'sales')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sales');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'margin')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'margin');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.innerText === translator.getTranslation('warehouse', 'total')) {
            plusminus = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'total');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 40 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-ostatok') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-rezerv') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-otpr') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-vozvrat') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-marzha') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-margin') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-zakupka') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-purchase') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-prodazha') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-sale') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma1') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma2') {
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma3') {
            tooltipBlock.style.fontSize = '12px';
            const widthPlus = posElement.x + tooltipBlock.offsetWidth;
            const viewportWidth = document.body.clientWidth;
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
                if (widthPlus > viewportWidth) {
                    tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                } else {
                    tooltipBlock.style.left = posElement.x + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                }
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma4') {
            tooltipBlock.style.fontSize = '12px';
            const widthPlus = posElement.x + tooltipBlock.offsetWidth;
            const viewportWidth = document.body.clientWidth;
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
                if (widthPlus > viewportWidth) {
                    tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                } else {
                    tooltipBlock.style.left = posElement.x + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                }
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
    }

    function tooltipOff() {
        clearTimeout(plusminus);
        document.getElementById('tooltipBtn').style.animation = '';
    }
    const [recalc, setRecalc] = useState(null);
    useLayoutEffect(() => {
        // let writeOff = formatNumber2(objMovement?.filter(x => !x.plusMinus).reduce((prev, curr) => {
        //     return prev + (+curr.count.replace(/\s/gmu, ''))
        // }, 0))
        // let add = formatNumber2(objMovement?.filter(x => x.plusMinus).reduce((prev, curr) => {
        //     return prev + (+curr.count.replace(/\s/gmu, ''))
        // }, 0))
        const result = { "true": 0, "false": 0 };
        for (const row of objMovement || []) {
            result[row.plusMinus] += (+row.count.replace(/\s/gmu, ''));
        }
        const { "true": add, "false": writeOff } = result;

        let total = formatNumber2(objMovement?.reduce((prev, curr) => {
            return prev + (+curr.ostatok.replace(/\s/gmu, ''))
        }, 0))
        let columMinus = objMovement?.filter(x => !x.plusMinus).reduce((prev, curr) => {
            return prev + (+curr.suma.replace(/\s/gmu, ''))
        }, 0)
        let columPlus = objMovement?.filter(x => x.plusMinus).reduce((prev, curr) => {
            return prev + (+curr.suma.replace(/\s/gmu, ''))
        }, 0)
        let sum = columPlus - columMinus;
        setRecalc({
            writeOff: formatNumber2(writeOff),
            add: formatNumber2(add),
            total,
            sum: formatNumber2(sum)
        });
    }, [objMovement])
    const refScroll = useRef();
    const [start, setStart] = useState(0);
    let rowHeight = 18;
    const [visibleRows, setVisible] = useState(
        Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight)
    );
    useEffect(() => {
        setVisible(Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight));
    }, [visibleRows]);
    function getStart() {
        let temp =
            start - Math.floor(document.body.clientHeight * 0.15) < 0
                ? 0
                : start - Math.floor(document.body.clientHeight * 0.15);
        return Math.min(objMovement.length - visibleRows - 1, Math.floor(temp / rowHeight));
    }

    function getTopHeight() {
        let temp =
            start - Math.floor(document.body.clientHeight * 0.15) < 0
                ? 0
                : start - Math.floor(document.body.clientHeight * 0.15);
        return rowHeight * Math.min(objMovement.length - visibleRows - 1, Math.floor(temp / rowHeight));
    }
    function getBottomHeight() {
        let temp =
            start - Math.floor(document.body.clientHeight * 0.15) < 0
                ? 0
                : start - Math.floor(document.body.clientHeight * 0.15);
        return (
            rowHeight *
            (objMovement.length -
                (Math.min(objMovement.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
                    visibleRows +
                    1))
        );
    }

    let isDown = false;
    let startX;
    let scrollLeft;
    function onMouseDown(e) {
        // if (!e.target.classList.contains('resize') && !e.target.classList.contains('drag')) {
        isDown = true;
        startX = e.pageX - refScroll.current?.querySelector('.wrapper-scroll .scroll').offsetLeft;
        scrollLeft = refScroll.current?.querySelector('.wrapper-scroll .scroll').scrollLeft;
        // } else {
        // 	isDown = false;
        // }
    }

    function onMouseLeave(e) {
        isDown = false;
    }

    function onMouseMove(e) {
        if (!isDown) return;
        updateHover();
        // e.preventDefault();
        _.throttle(() => {
            const x = e.pageX - refScroll.current?.querySelector('.wrapper-scroll .scroll').offsetLeft;
            const walk = (x - startX) * 1.2; //scroll-fast
            refScroll.current.querySelector('.wrapper-scroll .scroll').scrollLeft = scrollLeft - walk;
        }, 100)();
    }
    async function updateHover(e) {
        clearTimeout(hover);
        if (!document.querySelector('.first-tab-body').classList.contains('hoverOff')) {
            document.querySelector('.first-tab-body').classList.add('hoverOff');
        }

        hover = setTimeout(() => {
            document.querySelector('.first-tab-body').classList.remove('hoverOff');
        }, 400);
        document.getElementById('tooltipBtn').style.animation = '';
    }
    const btnUp = useRef();
    useEffect(() => {
        if (btnUp.current) {
            if (start > 600) {
                btnUp.current.style.visibility = 'visible';
            } else {
                btnUp.current.style.visibility = 'hidden';
            }
        }

    }, [start]);
    function clickScrollUp() {
        document.querySelector('.scroll').scrollTop = 0;
    }
    async function onScroll(e) {
        e.stopPropagation();
        setStart(e.target.scrollTop);
        updateHover();
        setSwitchMenu(false);
    }
    useEffect(() => {
        setTimeout(() => {
            if (refScroll.current) {
                refScroll.current.querySelector('.scroll').addEventListener('mousedown', onMouseDown);
                refScroll.current.querySelector('.scroll').addEventListener('mouseleave', onMouseLeave);
                refScroll.current.querySelector('.scroll').addEventListener('mouseup', onMouseLeave);
                refScroll.current.querySelector('.scroll').addEventListener('mousemove', onMouseMove);
            }
        }, 500);
        // return () => {
        // 	refScroll.current.querySelector('.scroll').removeEventListener('mousedown', onMouseDown);
        // 	refScroll.current.querySelector('.scroll').removeEventListener('mouseleave', onMouseLeave);
        // 	refScroll.current.querySelector('.scroll').removeEventListener('mouseup', onMouseLeave);
        // 	refScroll.current.querySelector('.scroll').removeEventListener('mousemove', onMouseMove);
        // }
    }, []);



    const [loadedLabelBlock, setLoadedLabelBlock] = useState(true);
    useEffect(() => {
        if (switchMenu) {
            clearTimeout(hover);
            setLoadedLabelBlock(true);
            document.querySelectorAll('.animationFrame').forEach((x) => {
                x.classList.add('show');
                x.style.overflow = '';
            });
            document.querySelectorAll('.block-3-btn').forEach((x) => {
                x.classList.add('show');
            });
        } else {
            document.querySelectorAll('.animationFrame').forEach((x) => {
                x.classList.remove('show');
                x.style.overflow = 'hidden';
            });
            document.querySelectorAll('.block-3-btn').forEach((x) => {
                x.classList.remove('show');
            });
            hover = setTimeout(() => {
                setLoadedLabelBlock(false);
            }, 400);

        }
    }, [switchMenu, loadedLabelBlock]);
    const [sortActive, setSortActive] = useState(false);
    const [width21px, setWidth21px] = useState(false);
    const [labelForWidth, setLabelForWidth] = useState(false);
    const queryWidthTr = useRef();
    const [dimensions, setDimensions] = useState(null);
    // useLayoutEffect(() => {
    //     if (queryWidthTr.current) {
    //         setDimensions({
    //             width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
    //             width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
    //             width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
    //             width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
    //             widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
    //             widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
    //             widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
    //             widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,

    //         });
    //     }
    // }, [pereschetiHeaders]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setDimensions({
    //             width1: queryWidthTr.current.querySelector('.nal-ostatok').offsetWidth,
    //             width3: queryWidthTr.current.querySelector('.nal-otpr').offsetWidth,
    //             width2: queryWidthTr.current.querySelector('.nal-rezerv').offsetWidth,
    //             width4: queryWidthTr.current.querySelector('.nal-vozvrat').offsetWidth,
    //             widthsuma1: queryWidthTr.current.querySelector('.summa-suma1').offsetWidth,
    //             widthsuma2: queryWidthTr.current.querySelector('.summa-suma2').offsetWidth,
    //             widthsuma3: queryWidthTr.current.querySelector('.summa-suma3').offsetWidth,
    //             widthsuma4: queryWidthTr.current.querySelector('.summa-suma4').offsetWidth,

    //         });
    //     }, 600);
    // }, []);
    const [hideArrow, setHideArrow] = useState(false);
    
    return (
        <>
            {isLoading ? <div className='loading'><Preloaded /></div> : <div className="warehouse-products">
                <div className="warehouse-products-title">
                    <hr style={{ width: 'calc(100% - 20px)' }} />
                    <span>Движение товара</span>
                </div>
                <div className="shadow-right"></div>

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: 'calc(100vh - 210px)',
                    }}
                    ref={refScroll}
                >

                    <ScrollBar
                        vertical={true}
                        horizontal={true}
                        onScroll={_.throttle(onScroll, 500)}
                        className={'scroll-warehouse'}
                        setHideArrow={setHideArrow}
                        podlozhka={podlozhka}
                        hideBar={((objMovement.length) * 18 < (refScroll.current?.offsetHeight - 75)) ? true : false}
                        parentClass={'warehouse-scroll'}

                    >

                        <table
                            tabIndex={-1}
                            className='warehouse-table'
                        >
                            <thead
                                className="first-tab-header">
                                <tr>
                                    {podlozhka && (
                                        <td style={{ padding: '0px' }}>
                                            <div
                                                className="warehouse-podlozhka"
                                                style={{
                                                    width: '100%',
                                                    height: document.body.clientHeight + 'px',
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    zIndex: 3,
                                                }}
                                            ></div>
                                        </td>
                                    )}
                                </tr>

                                <tr>

                                    <th className="sticky-head">
                                        <div className="sticky-block" style={{ height: 20, paddingLeft: 13 }}>
                                            {/* <div className="stickyBeforeHead"></div> */}
                                            <div
                                                style={{
                                                    textAlign: 'left',
                                                    paddingLeft: 0,
                                                    minWidth: 51,
                                                    paddingRight: '10px',
                                                    cursor: 'help'
                                                }}
                                                onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff}
                                            >
                                                Статус
                                            </div>

                                            <div
                                                // className="id-width" 
                                                style={{ paddingRight: '10px', cursor: 'help', width: 51 }}
                                                onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff}
                                            >
                                                ID
                                            </div>
                                            <div onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff} style={{ cursor: 'help', paddingRight: '10px', minWidth: 106 }}>
                                                Дата
                                            </div>
                                            <div onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff} style={{ cursor: 'help', width: 120 }}>
                                                Сотрудник
                                            </div>


                                            <div className="shadow-left"></div>
                                        </div>
                                    </th>

                                    <th
                                        onMouseEnter={tooltipOn}
                                        onMouseLeave={tooltipOff}
                                        style={{ paddingLeft: '12px', cursor: 'help' }}>
                                        ID
                                    </th>
                                    <th
                                        onMouseEnter={tooltipOn}
                                        onMouseLeave={tooltipOff}
                                        style={{ padding: '0 10px', cursor: 'help' }}>
                                        Товар
                                    </th>
                                    <th
                                        onMouseEnter={tooltipOn}
                                        onMouseLeave={tooltipOff}
                                        style={{ paddingRight: '10px', cursor: 'help' }}>
                                        Атрибут
                                    </th>
                                    <th
                                        onMouseEnter={tooltipOn}
                                        onMouseLeave={tooltipOff}
                                        style={{ paddingRight: '10px', cursor: 'help' }}>

                                    </th>
                                    <th
                                        onMouseEnter={tooltipOn}
                                        onMouseLeave={tooltipOff}
                                        style={{ cursor: 'help', paddingRight: '10px' }}
                                        colSpan={4}>Движение
                                    </th>
                                    <th style={{ paddingRight: '10px' }}>
                                        Сумма
                                    </th>
                                    <th style={{ paddingRight: '10px' }}>
                                        Поставщик
                                    </th>
                                    <th style={{ paddingRight: '10px' }}>
                                        Комментарий
                                    </th>
                                </tr>
                                <tr>
                                    <th className="sticky-head" style={{ zIndex: 3 }}>
                                        <div className="sticky-block" style={{ height: 20, paddingLeft: 13 }}>
                                            <div
                                                className="width21px"
                                                onMouseEnter={() => setSwitchMenu(true)}
                                                onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
                                                style={{
                                                    transition: '0.3s',
                                                    minWidth: '51px',
                                                    maxWidth: '51px',
                                                    paddingRight: '9px',
                                                    width: '100%',
                                                }}
                                            >
                                                <WarehouseDropMenu
                                                    setPodlozhka={setPodlozhka}
                                                    podlozhka={podlozhka}
                                                    width21px={width21px}
                                                    setWidth21px={setWidth21px}
                                                    labelForWidth={labelForWidth}
                                                    setLabelForWidth={setLabelForWidth}
                                                    type={'status'}
                                                    translator={translator}
                                                    objProduct={objMovement}
                                                    sortActive={sortActive}
                                                    setSortActive={setSortActive}
                                                    setSwitchMenu={setSwitchMenu}
                                                    switchMenu={switchMenu}
                                                    setFlagSwitchMenu={setFlagSwitchMenu}
                                                    hideArrow={hideArrow}
                                                    hideMenu={hideMenu}
                                                    setHideMenu={setHideMenu}
                                                />
                                            </div>

                                            <div
                                                className="id-width"
                                                style={{ paddingRight: '10px', minWidth: 51, maxWidth: 51 }}
                                            >
                                                <WarehouseInput
                                                    podlozhka={podlozhka}
                                                    setPodlozhka={setPodlozhka}
                                                    sortActive={sortActive}
                                                    setSortActive={setSortActive}
                                                    translator={translator}
                                                    setHideMenu={setHideMenu}
                                                    hideMenu={hideMenu}
                                                    setSwitchMenu={setSwitchMenu}
                                                    setFlagSwitchMenu={setFlagSwitchMenu}
                                                    data={objMovement}

                                                />
                                            </div>
                                            <div style={{ paddingRight: '10px', width: 101, zIndex: 5,position:'relative' }}>
                                                <Calendar 
                                                    setSortActive={setSortActive}
                                                    sortActive={sortActive}
                                                    // width={'100%'}  
                                                    onWrapper={setPodlozhka} 
                                                    wrapper={podlozhka} 
                                                    setHideMenu={setHideMenu}
                                                    hideMenu={hideMenu}
                                                />
                                                {/* <DateRangePicker
                                                    onChange={item => {
                                                        setCalendaryState({
                                                            stats: [item.selection]
                                                        })
                                                        // this.props.search[this.props.keys] = format(item.selection.startDate, 'dd.MM.yyyy') + '-' + format(item.selection.endDate, 'dd.MM.yyyy')
                                                    }}
                                                    months={1}
                                                    locale={ru}
                                                    weekStartsOn={1}
                                                    menu={calendaryState.menu}
                                                    changeMenu={e => setCalendaryState({ menu: e })}
                                                    minDate={addDays(new Date(), -1827)}
                                                    maxDate={addDays(new Date(), 0)}
                                                    direction="vertical"
                                                    scroll={{ enabled: true }}
                                                    ranges={calendaryState.stats}
                                                /> */}
                                            </div>
                                            <div style={{ width: 120 }}>
                                                <WarehouseDropMenu
                                                    setPodlozhka={setPodlozhka}
                                                    podlozhka={podlozhka}
                                                    inputOn={true}
                                                    type={'employee'}
                                                    translator={translator}
                                                    objProduct={objMovement}
                                                    setSwitchMenu={setSwitchMenu}
                                                    switchMenu={switchMenu}
                                                    sortActive={sortActive}
                                                    setSortActive={setSortActive}
                                                    setWidth21px={setWidth21px}
                                                    setLabelForWidth={setLabelForWidth}
                                                    hideArrow={hideArrow}
                                                    hideMenu={hideMenu}
                                                    setHideMenu={setHideMenu}
                                                    setFlagSwitchMenu={setFlagSwitchMenu}
                                                    searchLine={searchLine}
                                                />
                                            </div>

                                            <div className="shadow-left" style={{ height: 40 }}></div>
                                        </div>
                                    </th>
                                    <th style={{ textAlign: 'right', paddingLeft: '10px', position: 'relative', zIndex: 2 }}>
                                        <WarehouseInput
                                            podlozhka={podlozhka}
                                            setPodlozhka={setPodlozhka}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            translator={translator}
                                            setHideMenu={setHideMenu}
                                            hideMenu={hideMenu}
                                            setSwitchMenu={setSwitchMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            data={objMovement}

                                        />
                                    </th>
                                    <th style={{ textAlign: 'right', padding: '0 10px', position: 'relative', zIndex: 2 }}>
                                        <WarehouseDropMenu
                                            setPodlozhka={setPodlozhka}
                                            podlozhka={podlozhka}
                                            inputOn={true}
                                            type={'goods'}
                                            translator={translator}
                                            objProduct={objMovement}
                                            setSwitchMenu={setSwitchMenu}
                                            switchMenu={switchMenu}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            setWidth21px={setWidth21px}
                                            setLabelForWidth={setLabelForWidth}
                                            hideArrow={hideArrow}
                                            hideMenu={hideMenu}
                                            setHideMenu={setHideMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            searchLine={searchLine}
                                        />

                                    </th>
                                    <th style={{ textAlign: 'right', paddingRight: '10px', position: 'relative', zIndex: 2 }}>
                                        <WarehouseDropMenu
                                            setPodlozhka={setPodlozhka}
                                            podlozhka={podlozhka}
                                            inputOn={true}
                                            type={'attribute'}
                                            translator={translator}
                                            objProduct={objMovement}
                                            setSwitchMenu={setSwitchMenu}
                                            switchMenu={switchMenu}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            setWidth21px={setWidth21px}
                                            setLabelForWidth={setLabelForWidth}
                                            hideArrow={hideArrow}
                                            hideMenu={hideMenu}
                                            setHideMenu={setHideMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            searchLine={searchLine}
                                        />

                                    </th>
                                    <Yoyo />
                                    <th style={{ position: 'relative', paddingRight: 10 }}>

                                        <WarehouseDropInput
                                            setPodlozhka={setPodlozhka}
                                            podlozhka={podlozhka}
                                            translator={translator}
                                            zIndex={true}
                                            adaptive={true}
                                            width={51}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            hideArrow={hideArrow}
                                            hideMenu={hideMenu}
                                            setHideMenu={setHideMenu}
                                            setSwitchMenu={setSwitchMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            objProduct={objMovement}
                                        />
                                    </th>
                                    <th style={{ position: 'relative', paddingRight: 10 }}>
                                        <WarehouseDropMenu
                                            setPodlozhka={setPodlozhka}
                                            podlozhka={podlozhka}
                                            inputOn={true}
                                            type={'suppliers'}
                                            translator={translator}
                                            objProduct={objMovement}
                                            setSwitchMenu={setSwitchMenu}
                                            switchMenu={switchMenu}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            setWidth21px={setWidth21px}
                                            setLabelForWidth={setLabelForWidth}
                                            hideArrow={hideArrow}
                                            hideMenu={hideMenu}
                                            setHideMenu={setHideMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            searchLine={searchLine}
                                        />

                                    </th>
                                    <th style={{ position: 'relative' }}>
                                        <WarehouseInput
                                            podlozhka={podlozhka}
                                            setPodlozhka={setPodlozhka}
                                            sortActive={sortActive}
                                            setSortActive={setSortActive}
                                            translator={translator}
                                            setHideMenu={setHideMenu}
                                            hideMenu={hideMenu}
                                            setSwitchMenu={setSwitchMenu}
                                            setFlagSwitchMenu={setFlagSwitchMenu}
                                            data={objMovement}

                                        />

                                    </th>
                                </tr>
                                <tr ref={queryWidthTr}>
                                    <th style={{ position: 'sticky', left: 0, background: 'white', zIndex: 2 }}></th>
                                    <th colSpan={5}></th>
                                    <th className='defaultGray' style={{ paddingRight: 4 }}>
                                        - {recalc.writeOff}
                                        <span style={{ pointerEvents: 'none', width: 'calc(100% - 4px)' }}></span>
                                    </th>
                                    <th className='defaultGray' style={{ paddingRight: 4 }}>
                                        + {recalc.add}
                                        <span style={{ pointerEvents: 'none', width: 'calc(100% - 4px)' }}></span>
                                    </th>
                                    <th className='defaultGray' style={{ paddingRight: 10 }} >
                                        {recalc.total}
                                        <span style={{ pointerEvents: 'none' }}></span>
                                    </th>
                                    <th style={{ paddingRight: 10, textAlign: 'right' }}>{recalc.sum}</th>
                                    <th colSpan={2}></th>


                                </tr>
                                <tr>
                                    <th className="shadow-vertical" colSpan={19}>
                                        <div />
                                        <div />
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="first-tab-body">
                                <tr style={{ height: getTopHeight() }}></tr>

                                {objMovement.length > 0 &&
                                    objMovement.slice((getStart() < 0 ? 0 : getStart()), (getStart() < 0 ? 0 : getStart()) + visibleRows + 1).map((x, index, arr) => (
                                        <GoodsMovementList
                                            index={index + (getStart() < 0 ? 0 : getStart())}
                                            key={index + (getStart() < 0 ? 0 : getStart())}
                                            data={objMovement}
                                            translator={translator}
                                        />
                                    ))}

                                <tr colSpan={18} style={{ height: getBottomHeight() }}>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colSpan={18} style={{ height: 18 }}>
                                        <div className="shadow-vertical-footer"></div>
                                        <div style={{ position: 'absolute', bottom: 0, left: 0, height: 8, width: '100%', background: 'white' }}></div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </ScrollBar>
                </div>
                <div ref={btnUp} onClick={clickScrollUp} className="btnUp">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
                            fill="black"
                        ></path>
                    </svg>
                </div>
            </div>}
        </>
    );
};

export default GoodsMovement;


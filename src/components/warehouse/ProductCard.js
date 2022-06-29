import React, { useState, useRef, useEffect } from 'react';
import DropMenu from '../dropMenu/dropMenu';
import './ProductCard.scss';
import ProductCardMenu from './ProductCardMenu';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {
    rozetkaLogo,
    promLogo,
    crmLogo,
    SvgCalendar,
    CirclePlus,
    addImg
} from '../../img/svg-pack';
// import ProductCardList from './'
import ProductCardList from './ProductCardList';
import MaxaScroll from './MaxaScroll';
let plusminus;
let hover;
const ProductCard = ({ toggleCard, setToggleCard, setObjProduct, objProduct, getIndex, translator }) => {
    const [openCardMenu, setOpenCardMenu] = useState(false);
    const [podlozhka, setPodlozhka] = useState(false);
    const [typeData, setTypeData] = useState('');
    const inputRef = useRef();
    function searchLine(text, value) {
        if (value !== '') {
            let re = new RegExp(value, 'gui');
            let text_pr = text.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

            return text_pr;
        } else {
            return text;
        }
    }

    // const [countryArr, setCountryArr] = useState([
    // 	// { id: 0, name: 'Все', select: true },
    // 	{ id: 0, name: '🇷🇺', nameCountry: 'Россия', select: false },
    // 	{ id: 1, name: '🇺🇦', nameCountry: 'Украина', select: false },
    // 	{ id: 2, name: '🇹🇷', nameCountry: 'Турция', select: false },
    // ]);
    const [data, setData] = useState({
        flags: [
            { id: 0, name: '🇷🇺', secondName: 'russia', select: false },
            { id: 1, name: '🇺🇦', secondName: 'ukraine', select: false },
            { id: 2, name: '🇹🇷', secondName: 'turkey', select: false },
        ],
        currency: [
            { id: 0, name: '$', secondName: 'dollar', select: false },
            { id: 1, name: '€', secondName: 'eur', select: false },
            { id: 2, name: '₴', secondName: 'uah', select: false },
            { id: 3, name: '₽', secondName: 'rub', select: false },
        ],
        otdel: [
            { id: 0, name: 'Розничный магазин', select: true },
            { id: 1, name: 'Отдел номер 2', select: false },
            { id: 2, name: 'Отдел гусей', select: false },
            { id: 3, name: 'Отдел когото', select: false },
            { id: 4, name: 'Магазин', select: false },
            { id: 5, name: 'Склад', select: false },
        ],
        category: [
            { id: 0, name: 'Товар для дома', select: true },
            { id: 1, name: 'Инструменты', select: false },
            { id: 2, name: 'Сад и город', select: false },
            { id: 3, name: 'Электротехника', select: false },
        ],
        tip: [
            { id: 0, name: 'Опт и розница', select: true },
            { id: 1, name: 'Розница и опт', select: false },
        ],
        vidPlatformi: [
            { id: 0, name: rozetkaLogo, secondName: 'rozetka', select: true },
            { id: 1, name: promLogo, secondName: 'prom', select: false },
            { id: 3, name: crmLogo, secondName: 'lpcrm', select: false },
        ],
        description: [
            { id: 0, name: 'Флешкарта', select: true },
            { id: 1, name: 'Флешкарта-1', select: false },
            { id: 3, name: 'Флешкарта-2', select: false },
        ],
        delivery: [
            { id: 1, name: 'icon-Union-3 icons', secondName: 'novapochta', select: true },
            { id: 2, name: 'icon-Vector-2 icons', secondName: 'justin', select: false },
            { id: 3, name: 'icon-ukrposhta icons', secondName: 'ukrpochta', select: false },
            { id: 4, name: 'icon-Union-4 icons', secondName: 'samovivoz', select: false },
        ],
        // { id: 0, name: 'Все', select: true },
    });
    // console.log(data['flags'])
    // const [currency, setCurrency] = useState([
    // 	// { id: 0, attribute: 'Все', select: true },
    // 	{ id: 0, name: '$', select: false },
    // 	{ id: 1, name: '€', select: false },
    // 	{ id: 2, name: '₴', select: false },
    // 	{ id: 3, name: '₽', select: false },
    // ]);
    useEffect(() => {
        let obj = { ...data };
        let obj1 = {};
        Object.keys(obj).map(
            (x) =>
            (obj1[x] = obj[x].map((x) => {
                if (x.name === objProduct[getIndex].country) {
                    return { ...x, select: true };
                } else if (x.name === objProduct[getIndex].currency) {
                    return { ...x, select: true };
                } else {
                    return { ...x };
                }
            }))
        );
        // let obj = [...data.flags];

        // obj = obj.map((x) => {
        // 	if (x.name === objProduct[getIndex].country) {
        // 		return  {...x, select: true };
        // 	} else {
        // 		return { ...x };
        // 	}
        // })
        setData({ ...obj1 });
    }, []);
    // setData({
    // 	...data.currency.map((x) => {
    // 		if (x.name === objProduct[getIndex].country) {
    // 			return { ...x, select: true };
    // 		} else {
    // 			return { ...x };
    // 		}
    // 	})
    // });
    // setCountryArr([
    // 	...countryArr.map((x) => {
    // 		if (x.name === objProduct[getIndex].country) {
    // 			return { ...x, select: true };
    // 		} else {
    // 			return { ...x };
    // 		}
    // 	}),
    // ]);
    // setCurrency([
    // 	...currency.map((x) => {
    // 		if (x.name === objProduct[getIndex].currency) {
    // 			return { ...x, select: true };
    // 		} else {
    // 			return { ...x };
    // 		}
    // 	}),
    // ]);
    // }, []);
    function onClick(type, targetBlock) {
        let posEl = targetBlock?.getBoundingClientRect();
        let adapEl = document.querySelector('.productMenu');
        let block = document.querySelector('.product-card').getBoundingClientRect();
        adapEl.style.top = posEl?.y - block.y + 'px';
        adapEl.style.left = '129px';
        adapEl.style.width = '202px';
        setOpenCardMenu(true);
        setPodlozhka(true);
        console.log(type);
        if (type === 'flags') {
            setTypeData('flags');
        }
        if (type === 'currency') {
            setTypeData('currency');
        }
        if (type === 'otdel') {
            setTypeData('otdel');
        }
        if (type === 'category') {
            setTypeData('category');
        }
        if (type === 'tip') {
            setTypeData('tip');
        }
        if (type === 'vidPlatformi') {
            setTypeData('vidPlatformi');
        }
        if (type === 'description') {
            setTypeData('description');
        }
        if (type === 'delivery') {
            setTypeData('delivery');
        }
        // console.log(posEl.y - block.y);

        // if (types === 'statusAccept') {
        // 	setType('statusAccept');
        // 	adapEl.style.top = posEl?.y - block.y + 'px';
        // 	adapEl.style.left = '424px';
        // 	adapEl.style.width = '288px';
        // }
        // document.querySelectorAll('.block-menu .simplebar-content-wrapper').forEach((x) =>
        // 	x.scrollTo({
        // 		top: 0,
        // 	})
        // );
        // setValueAdaptiveMenu('');
        // setOpenMenu(!openMenu);
        // setPodlozhka(true);
        // setTimeout(() => {
        // 	inputRef.current.value = '';
        // 	inputRef.current.focus();
        // }, 100);
    }
    // function loadImg(e) {
    // 	if (this.files[0]) {
    // 		var fr = new FileReader();

    // 		fr.addEventListener(
    // 			'load',
    // 			function () {
    // 				document.querySelector('label').style.backgroundImage = 'url(' + fr.result + ')';
    // 			},
    // 			false
    // 		);

    // 		fr.readAsDataURL(this.files[0]);
    // 	}
    // }
    function zoomImg(e) {
        if (e.target.className === 'clear') {
        } else {
            e.target.style.transform = 'scale(3)';
        }
    }
    function zoomOutImg(e) {
        e.target.style.transform = 'scale(1)';
    }

    function loadImg(e) {
        const fileSize = e.target.files[0].size; // in MiB
        // const MB = 500000;
        if (fileSize > 500000) {
            alert('Файл больше 500кб');
            // $(file).val(''); //for clearing with Jquery
        } else {
            // Proceed further
            if (e.target.files[0]) {
                var fr = new FileReader();
                fr.addEventListener(
                    'load',
                    function () {
                        e.target.previousSibling.src = fr.result;
                        e.target.previousSibling.classList.remove('clear');
                    },
                    false
                );
                fr.readAsDataURL(e.target.files[0]);
            }
        }
    }
    // useEffect(()=> {
    // 	document.getElementById("pct").addEventListener("change", function () {
    // 		if (this.files[0]) {
    // 		  var fr = new FileReader();

    // 		  fr.addEventListener("load", function () {
    // 			// document.getElementById("labelImg").style.backgroundImage = "url(" + fr.result + ")";
    // 			document.getElementById("imgID").src = fr.result;
    // 		  }, false);

    // 		  fr.readAsDataURL(this.files[0]);
    // 		}
    // 	});
    // })

    // 	useEffect(() => {
    // 	let newarr = [...countryArr];
    // 	newarr.filter((x) => {
    // 		if (x.name === document.getElementById('strana').innerText) {
    // 			x.select = true;
    // 		}
    // 	});
    // 	setCountryArr(newarr);
    // }, []);
    // console.log(objProduct[getIndex].country , countryArr.filter(x => x.name === '🇷🇺'))
    function tooltipOn(e, html) {
        let posElement = e.currentTarget.getBoundingClientRect();
        const tooltipBlock = document.getElementById('tooltipBtn');
        tooltipBlock.style.fontSize = '14px';
        // if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
        // 	plusminus = setTimeout(() => {
        // 		tooltipBlock.innerText = e.target.innerText;
        // 		tooltipBlock.style.left = posElement.x + 'px';
        // 		tooltipBlock.style.top = posElement.y + 23 + 'px';
        // 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        // 	}, 250);
        // } 
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
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-rezerv') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-otpr') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-send') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-vozvrat') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-crib') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-marzha') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-margin') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-zakupka') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-purchase') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-prodazha') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';
            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-sale') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma1') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-available') + e.target.innerText.replace('/', '');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma2') {
            // e.currentTarget.querySelector('.checkbox').checked
            tooltipBlock.style.fontSize = '12px';

            plusminus = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sumTotal-reserv') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma3') {
            // e.currentTarget.querySelector('.checkbox').checked
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
            // e.currentTarget.querySelector('.checkbox').checked
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
    return (
        <>
            <div className="bg"></div>
            <div className="product-card">
                <div
                    style={{
                        padding: '21px 35px 16px 21px',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {podlozhka && (
                        <div
                            className="product-card-podlozhka"
                            onClick={() => {
                                setOpenCardMenu(false);
                                setPodlozhka(false);
                            }}
                        ></div>
                    )}
                    {/* <div>
					</div> */}
                    <button className="np-close" onClick={() => setToggleCard(false)}></button>
                    <div style={{ display: 'flex', marginTop: '15px' }}>
                        <div>
                            <div>
                                <div className="header-text">Товар</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div>Название:</div>
                                            </td>
                                            <td>
                                                <div
                                                    style={{
                                                        width: '200px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >
                                                    {objProduct[getIndex].name}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Отдел:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('otdel', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    {data.otdel?.filter((x) => x.select === true)[0]?.name}
                                                    {/* {data['currency']?.filter((x) => x.select === true)[0]?.name} */}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Страна:</td>
                                            <td>
                                                <div
                                                    className="btn-product-menu"
                                                    onClick={(e) => onClick('flags', e.currentTarget)}
                                                >
                                                    <span className="flags" style={{ fontSize: '16px' }}>
                                                        {data.flags?.filter((x) => x.select === true)[0]?.name}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Валюта:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('currency', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    {data.currency?.filter((x) => x.select === true)[0]?.name}
                                                    {/* {data['currency']?.filter((x) => x.select === true)[0]?.name} */}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <SimpleBar
                                className="platform-block"
                                style={{ marginTop: '26px', maxHeight: '138px' }}
                                autoHide={false}
                            >
                                <div className="header-text">Платформа</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Вид:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('vidPlatformi', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    <img src={data.vidPlatformi?.filter((x) => x.select === true)[0]?.name} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Фото:</td>
                                            <td>
                                                {/* <img
													style={{ width: '16px', height: '16px' }}
													src={objProduct[getIndex].images}
													alt=""
												/> */}
                                                <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
                                                    <label className="addImg">
                                                        <img
                                                            onMouseEnter={zoomImg}
                                                            onMouseLeave={zoomOutImg}
                                                            src={objProduct[getIndex].images}
                                                        />
                                                        <input onChange={loadImg} type="file" accept="image/*" />
                                                    </label>
                                                    <label className="addImg">
                                                        <img
                                                            className="clear"
                                                            onMouseEnter={zoomImg}
                                                            onMouseLeave={zoomOutImg}
                                                            src={addImg}
                                                        />
                                                        <input onChange={loadImg} type="file" accept="image/*" />
                                                    </label>
                                                    <label className="addImg">
                                                        <img
                                                            className="clear"
                                                            onMouseEnter={zoomImg}
                                                            onMouseLeave={zoomOutImg}
                                                            src={addImg}
                                                        />
                                                        <input onChange={loadImg} type="file" accept="image/*" />
                                                    </label>
                                                    <label className="addImg">
                                                        <img
                                                            className="clear"
                                                            onMouseEnter={zoomImg}
                                                            onMouseLeave={zoomOutImg}
                                                            src={addImg}
                                                        />
                                                        <input onChange={loadImg} type="file" accept="image/*" />
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Тип:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('tip', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    {data.tip?.filter((x) => x.select === true)[0]?.name}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Категория:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('category', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    {data.category?.filter((x) => x.select === true)[0]?.name}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Кол-во:</td>
                                            <td>
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Слова:</td>
                                            <td>
                                                <div>Флешкарта, usb</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Произ-тель:</td>
                                            <td>
                                                <div>Китай</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Гарантия:</td>
                                            <td>
                                                <div></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SimpleBar>
                            <div style={{ marginTop: '26px' }}>
                                <div className="header-text">Доставка</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Вид:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('delivery', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    <span
                                                        className={data.delivery?.filter((x) => x.select === true)[0]?.name}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Описание:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('description', e.currentTarget)}
                                                    className="btn-product-menu"
                                                >
                                                    {data.description?.filter((x) => x.select === true)[0]?.name}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ marginTop: '26px' }}>
                                <div className="header-text">Информация</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Создал:</td>
                                            <td>
                                                <div className="info-warehouse-card">
                                                    <SvgCalendar /> Завхоз склада Михаил Пронск...
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Изменил:</td>
                                            <td>
                                                <div className="info-warehouse-card">
                                                    <SvgCalendar /> 14.01.2021 19:54:12
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ProductCardMenu
                                openCardMenu={openCardMenu}
                                searchLine={searchLine}
                                inputRef={inputRef}
                                data={data[typeData]}
                                dataCurrent={data}
                                typeData={typeData}
                                setData={setData}
                                setPodlozhka={setPodlozhka}
                                setOpenCardMenu={setOpenCardMenu}
                                translator={translator}
                            />
                        </div>

                        <div className="attr-block warehouse-products">
                            <div className="header-text">Атрибут</div>
                            <div className="shadow-right" style={{top:0, height: '100%'}}></div>
                            <MaxaScroll


                                // setHideArrow={setHideArrow}
                                updateHover={updateHover}
                                podlozhka={podlozhka}
                            // infiniteScroll={_.throttle(onScroll, 500)}

                            >

                                <table
                                    tabIndex={-1}
                                    style={{ width: '100%' }}
                                    className='warehouse-table'

                                // onMouseEnter={}
                                // style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
                                >
                                    <thead
                                        // onMouseEnter={treugolnikEpptaOn} onMouseLeave={treugolnikEpptaOff}
                                        className="first-tab-header">
                                        {/* <tr>
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
											onClick={clickPodlozhka}
										></div>
									</td>
								)}
							</tr> */}

                                        <tr>

                                            <th className="sticky-head">
                                                <div className="sticky-block" style={{ height: 20 }}>
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
                                                        {/* {translator.getTranslation('warehouse', 'status')} */}
                                                    </div>
                                                    <div>
                                                        <img className="logo-mail" src={crmLogo} alt="" />
                                                    </div>
                                                    <div>

                                                        <img className="logo-mail" src={rozetkaLogo} alt="" />
                                                    </div>
                                                    <div>

                                                        <img className="logo-mail" src={promLogo} alt="" />
                                                    </div>
                                                    <div  style={{ paddingRight: '10px', cursor: 'help' ,width: 56}}
                                            
                                                    >
                                                        ID
                                                    </div>
                                                    <div onMouseEnter={tooltipOn}
                                                        onMouseLeave={tooltipOff} 
                                                        style={{ cursor: 'help', paddingRight: '10px', minWidth: 51 }}>
                                                        {/* {translator.getTranslation('warehouse', 'country')} */}
                                                        Атрибут
                                                    </div>
                                                    <div className="shadow-left"></div>
                                                </div>
                                            </th>

                                            <th
                                                style={{ paddingLeft: '12px', paddingRight: '10px', cursor: 'help' }}>
                                                Вес
                                            </th>
                                            <th
                                                style={{ paddingRight: '10px', cursor: 'help' }}>
                                                Размер
                                            </th>
                                            <th
                                                style={{ paddingRight: '10px', cursor: 'help' }}
                                                colSpan={4}
                                                >
                                                Наличие
                                            </th>
                                            <th
                                                // onMouseEnter={tooltipOn}
                                                // onMouseLeave={tooltipOff}
                                                style={{ paddingRight: '10px', cursor: 'help' }}>
                                                Закупка
                                            </th>
                                            <th
                                                style={{ cursor: 'help' }}
                                                >
                                                Продажа
                                            </th>
                                            <th
                                                style={{ cursor: 'help' }}
                                                >
                                                Маржа
                                            </th>
                                            <th
                                                style={{ cursor: 'help' }}
                                                colSpan={4}
                                                >
                                                Сумма
                                            </th>
                                        </tr>


                                        <tr>
                                            <th className="shadow-vertical" colSpan={19}>
                                                <div />
                                                <div />
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="first-tab-body">
                                        <ProductCardList/>
                                        {/* <tr style={{ height: getTopHeight() }}></tr> */}

                                        {/* {objProduct.length > 0 &&
								objProduct.slice(getStart(), getStart() + visibleRows +1).map((x, index, arr) => (
									<WarehouseProductList
										index={index + getStart()}
										// rowHeight={rowHeight}
										// style={{ height: rowHeight }}
										// indexParent={index}
										// widthColum={widthColum}
										key={index + getStart()}
										// start={getStart()}
										// rowHeight={rowHeight}
										// setChecked={setChecked}'
										setHideMenu={setHideMenu}
										hideMenu={hideMenu}
										setLoadedLabelBlock={setLoadedLabelBlock}
										loadedLabelBlock={loadedLabelBlock}
										// checked={checked}
										setGetIndex={setGetIndex}
										objProduct={objProduct}
										setObjProduct={setObjProduct}
										switchMenu={switchMenu}
										setSwitchMenu={setSwitchMenu}
										podlozhka={podlozhka}
										setPodlozhka={setPodlozhka}
										// focusInput={focusInput}
										// setFocusInput={setFocusInput}
										// setIndexInput={setIndexInput}
										setLastIndex={setLastIndex}
										lastIndex={lastIndex}
										// setBtnMenu={setBtnMenu}
										// btnMenu={btnMenu}
										setToggleCard={setToggleCard}
										// selectAll={selectAll}
										translator={translator}
										// setHoverWidth={setHoverWidth}
										// hoverWidth={hoverWidth}
										// setSelectAll={setSelectAll}
										flagSwitchMenu={flagSwitchMenu}
									/>
								))} */}

                                        {/* <tr colSpan={18} style={{ height: getBottomHeight() }}>
							</tr> */}
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

                            </MaxaScroll>
                        </div>
                    </div>
                    <div>
                        <button className="save-btn">Сохранить и закрыть</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;

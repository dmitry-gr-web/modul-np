import React, { useState, useRef, useEffect } from 'react';
import DropMenu from '../modul-np/dropMenu/dropMenu';
import './ProductCard.scss';
import ProductCardMenu from './ProductCardMenu';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import SwitchBtn from './SwitchBtn';

import {
    rozetkaLogo,
    promLogo,
    crmLogo,
    SvgCalendar,
    SvGBtnPlus
} from '../../img/svg-pack';
// import ProductCardList from './'
import ProductCardList from './ProductCardList';
// import MaxaScroll from './MaxaScroll';
import ScrollBar from './ScrollBar';
import LoadImg from './LoadImg';
let plusminus;
let hover;
const ProductCard = ({ toggleCard, setToggleCard, setObjProduct, objProduct, getIndex, translator }) => {
    const [openCardMenu, setOpenCardMenu] = useState(false);
    const [podlozhka, setPodlozhka] = useState(false);
    const [typeData, setTypeData] = useState('');
    const [search, setSearch] = useState(false);
    const [multiselect,setMultiSelect] = useState(false);
    const [createAttr,setCreateAttr] = useState(false);
    // const inputRef = useRef();
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
            { id: 1, name: 'Отдел номер 2 Отдел номер 2 Отдел номер 2', select: false },
            { id: 2, name: 'Отдел гусей', select: false },
            { id: 3, name: 'Отдел когото', select: false },
            { id: 4, name: 'Магазин', select: false },
            { id: 5, name: 'Склад', select: false },
        ],
        category: [
            { id: 0, name: 'Товар для дома', select: true },
            { id: 1, name: 'Инструменты', select: false },
            { id: 2, name: 'Сад и город', select: false },
            { id: 3, name: 'Электротехника ЭлектротехникаЭлектротехника Электротехника', select: false },
            { id: 4, name: 'Электротехника', select: false },
            { id: 5, name: 'Электротехника', select: false },
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
        attribute: [
            { id: 0, name: '32гб', select: true, idNumber:9 },
            { id: 1, name: 'Синняя Красная', select: false ,idNumber:9},
            { id: 3, name: '42 размер', select: false ,idNumber:43},
            { id: 4, name: 'Синий 42 размер', select: false ,idNumber:94},
            { id: 5, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:99},
            { id: 6, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:36},
            { id: 7, name: 'Размер ыв ыв ы  ыв', select: false ,idNumber:7},
        ],
        delivery: [
            { id: 1, name: 'icon-Union-3 icons', secondName: 'novapochta', select: true },
            { id: 2, name: 'icon-Vector-2 icons', secondName: 'justin', select: false },
            { id: 3, name: 'icon-ukrposhta icons', secondName: 'ukrpochta', select: false },
            { id: 4, name: 'icon-Union-4 icons', secondName: 'samovivoz', select: false },
        ],
        // { id: 0, name: 'Все', select: true },
    });
    const [sortedArr, setSortedArr] = useState([]);
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
                } else if (x.name === objProduct[getIndex].attribute) {
               
                    return { ...x, select: true };
                } else {
                    return { ...x };
                }
            }))
        );
        setSortedArr([...sortedArr, { ...data.attribute[0], select: true }])
        console.log(obj1)
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
        adapEl.style.left = posEl?.x - block.x - 1 + 'px';
        adapEl.style.width = '202px';
        // adapEl.style.top = posEl?.y - block.y + 'px';
        // adapEl.style.left = '115px';
        // adapEl.style.width = '202px';
        setOpenCardMenu(true);
        setPodlozhka(true);
        // console.log(type);
        setSearch(false);
        setMultiSelect(false);
        setCreateAttr(false);
        if (type === 'flags') {
            setTypeData('flags');
        }
        if (type === 'attribute') {
            setTypeData('attribute');
            setSearch(true);
            setCreateAttr(true);
            setMultiSelect(true);
            adapEl.style.width = '128px';
            adapEl.style.top = posEl?.y - block.y -2 + 'px';
        }
        if (type === 'currency') {
            setTypeData('currency');
        }
        if (type === 'otdel') {
            setTypeData('otdel');
            setSearch(true);
            setMultiSelect(true);
        }
        if (type === 'category') {
            setTypeData('category');
            setSearch(true);
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
    // function zoomImg(e) {
    //     if (e.target.className === 'clear') {
    //     } else {
    //         e.target.style.transform = 'scale(3)';
    //     }
    // }
    // function zoomOutImg(e) {
    //     e.target.style.transform = 'scale(1)';
    // }

    // function loadImg(e) {
    //     const fileSize = e.target.files[0].size; // in MiB
    //     // const MB = 500000;
    //     if (fileSize > 500000) {
    //         alert('Файл больше 500кб');
    //         // $(file).val(''); //for clearing with Jquery
    //     } else {
    //         // Proceed further
    //         if (e.target.files[0]) {
    //             var fr = new FileReader();
    //             fr.addEventListener(
    //                 'load',
    //                 function () {
    //                     e.target.previousSibling.src = fr.result;
    //                     e.target.previousSibling.classList.remove('clear');
    //                 },
    //                 false
    //             );
    //             fr.readAsDataURL(e.target.files[0]);
    //         }
    //     }
    // }
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
        if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
            tooltipBlock.style.fontSize = '12px';
        	plusminus = setTimeout(() => {
        		tooltipBlock.innerText = e.target.innerText;
        		tooltipBlock.style.left = posElement.x + 'px';
        		tooltipBlock.style.top = posElement.y + 28 + 'px';
        		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        	}, 250);
        } 
        if (e.currentTarget.className === 'dataChange') {
            tooltipBlock.style.fontSize = '12px';
        	// plusminus = setTimeout(() => {
        		tooltipBlock.innerText = 'Дата изменения заказа';
        		tooltipBlock.style.left = posElement.x + 'px';
        		tooltipBlock.style.top = posElement.y + 23 + 'px';
        		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        	// }, 250);
        } 
        if (e.currentTarget.className === 'dataChangeTime') {
            tooltipBlock.style.fontSize = '12px';
        	// plusminus = setTimeout(() => {
        		tooltipBlock.innerText = 'Время изменения заказа';
        		tooltipBlock.style.left = posElement.x + 'px';
        		tooltipBlock.style.top = posElement.y + 21 + 'px';
        		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        	// }, 250);
        } 
        if (e.currentTarget.className === 'dataCreate') {
            tooltipBlock.style.fontSize = '12px';
        	// plusminus = setTimeout(() => {
        		tooltipBlock.innerText = 'Дата создания заказа';
        		tooltipBlock.style.left = posElement.x + 'px';
        		tooltipBlock.style.top = posElement.y + 23 + 'px';
        		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        	// }, 250);
        } 
        if (e.currentTarget.className === 'dataCreateTime') {
            tooltipBlock.style.fontSize = '12px';
        	// plusminus = setTimeout(() => {
        		tooltipBlock.innerText = 'Время создания заказа';
        		tooltipBlock.style.left = posElement.x + 'px';
        		tooltipBlock.style.top = posElement.y + 21 + 'px';
        		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        	// }, 250);
        } 
        // if (e.currentTarget.children[0]?.className === 'flags') {
        //     tooltipBlock.style.fontSize = '12px';
        // 	plusminus = setTimeout(() => {
        // 		tooltipBlock.innerText = 'pidar';
        // 		tooltipBlock.style.left = posElement.x + 'px';
        // 		tooltipBlock.style.top = posElement.y + 28 + 'px';
        // 		tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        // 	}, 250);
        // } 
        if (e.currentTarget.innerText === '🇺🇦') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y +1+ 'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        }
        if (e.currentTarget.innerText === '🇷🇺') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y +1+'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        }
        if (e.currentTarget.innerText === '🇹🇷') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y + 1+'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
        }
        if (e.currentTarget?.innerText === '$') {
            tooltipBlock.style.fontSize = '12px';
            // console.log('pidar')
            tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y + 2+'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';        }
        if (e.currentTarget.innerText === '€') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y + 2+'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';        }
        if (e.currentTarget.innerText === '₴') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y +2+ 'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';        }
        if (e.currentTarget.innerText === '₽') {
            tooltipBlock.style.fontSize = '12px';
            tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
            tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
            tooltipBlock.style.top = posElement.y + 2+'px';
            tooltipBlock.style.animation = 'delay-btn 0.5s forwards';        }
            if (e.currentTarget.children[0]?.className === 'icon-Union-3 icons') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Новая почта';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
    
        }
        if (e.currentTarget.children[0]?.className === 'icon-Vector-2 icons') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Justin';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
        
        }
        if (e.currentTarget.children[0]?.className === 'icon-ukrposhta icons') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Укрпочта';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
    
        }
        if (e.currentTarget.children[0]?.className === 'icon-Union-4 icons') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Самовывоз';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
        
        }
        if (e.currentTarget.children[0]?.getAttribute('alt') === 'rozetka') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Rozetka';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
        
        }
        if (e.currentTarget.children[0]?.getAttribute('alt') === 'prom') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Prom';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
        
        }
        if (e.currentTarget.children[0]?.getAttribute('alt') === 'lpcrm') {
                tooltipBlock.style.fontSize = '12px';
                tooltipBlock.innerText = 'Lp-crm';
                tooltipBlock.style.left = posElement.x + e.currentTarget.offsetWidth + 'px';
                tooltipBlock.style.top = posElement.y +2+ 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards'; 
        
        }

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
                    <div style={{ display: 'flex', marginTop: '24px', width: '100%' }}>
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
                                             
                                                <div className='text-ellipsis'
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
                                                >{objProduct[getIndex].name}</div>
                                               
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Отдел:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('otdel', e.currentTarget)}
                                                    className="btn-product-menu"
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
                                                >
                                                    {data.otdel?.filter((x) => x.select === true).map(x=> x?.name).join(', ')}
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
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
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
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
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
                                style={{ marginTop: '20px', maxHeight: '138px',overflowX: 'hidden' }}
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
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
                                                >
                                                    <img src={data.vidPlatformi?.filter((x) => x.select === true)[0]?.name} alt={data.vidPlatformi?.filter((x) => x.select === true)[0]?.secondName}/>
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
                                                    <LoadImg style={{marginRight: 6}}/>
                                                    <LoadImg style={{marginRight: 6}}/>
                                                    <LoadImg style={{marginRight: 6}}/>
                                                    <LoadImg style={{marginRight: 6}}/>
                                              
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Тип:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('tip', e.currentTarget)}
                                                    className="btn-product-menu"
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
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
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
                                                >
                                                    {data.category?.filter((x) => x.select === true)[0]?.name}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Кол-во:</td>
                                            <td>
                                                <div><SwitchBtn status={true} data={'objAttribute'} setData={'setObjAttribute'} index={1} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Слова:</td>
                                            <td>
                                                <div 
                                                    className='text-ellipsis'
                                                     onMouseEnter={tooltipOn}
                                                     onMouseLeave={tooltipOff}
                                                >Флешкарта, usb</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Произ-тель:</td>
                                            <td>
                                                <div 
                                                className='text-ellipsis'
                                                onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff}
                                                >Китай</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Гарантия:</td>
                                            <td>
                                                <div className='text-ellipsis'
                                                onMouseEnter={tooltipOn}
                                                onMouseLeave={tooltipOff}
                                                >3 Года</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SimpleBar>
                            <div style={{ marginTop: '20px' }}>
                                <div className="header-text">Доставка</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Вид:</td>
                                            <td>
                                                <div
                                                    onClick={(e) => onClick('delivery', e.currentTarget)}
                                                    className="btn-product-menu"
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
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
                                                    onMouseEnter={tooltipOn}
                                                    onMouseLeave={tooltipOff}
                                                >
                                                    {data.description?.filter((x) => x.select === true)[0]?.name}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <div className="header-text">Информация</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Создал:</td>
                                            <td className="info-warehouse-card"
                                                onMouseLeave={e => {
                                                    e.currentTarget.querySelector('.data').style.width = '0px';
                                                    e.currentTarget.querySelector('.user').style.cssText = `
                                                    opacity: 1;
                                                    visibility:visible;
                                                `;
                                                }}
                                            >
                                                <div className='calen-logo' onMouseEnter={e => {
                                                    e.currentTarget.closest('.info-warehouse-card').querySelector('.data').style.width = '180px';
                                                    e.currentTarget.closest('.info-warehouse-card').querySelector('.user').style.cssText = `
                                                    opacity: 0;
                                                    visibility:hidden;
                                                `;
                                                }}
                                                >
                                                    <SvgCalendar />
                                                </div>
                                                <div className='data'>
                                                    <span className='dataCreate'onMouseEnter={tooltipOn} onMouseLeave={tooltipOff}>14.01.2021 </span><span onMouseEnter={tooltipOn} onMouseLeave={tooltipOff}className='dataCreateTime' style={{ opacity: 0.5, fontSize: '10px' }}>19:54:12</span>
                                                </div>
                                                <div className='user' onMouseEnter={tooltipOn} onMouseLeave={tooltipOff}>
                                                    Завхоз склада Михаил Пронск  Михаил Пронск
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Изменил:</td>
                                            <td className="info-warehouse-card"
                                                onMouseLeave={e => {
                                                    e.currentTarget.querySelector('.data').style.width = '0px';
                                                    e.currentTarget.querySelector('.user').style.cssText = `
                                                    opacity: 1;
                                                    visibility:visible;
                                                `;
                                                }}
                                            >
                                                <div className='calen-logo' onMouseEnter={e => {
                                                    e.currentTarget.closest('.info-warehouse-card').querySelector('.data').style.width = '180px';
                                                    e.currentTarget.closest('.info-warehouse-card').querySelector('.user').style.cssText = `
                                                    opacity: 0;
                                                    visibility:hidden;
                                                `;
                                                }}
                                                >
                                                    <SvgCalendar />
                                                </div>
                                                <div className='data'>
                                                    <span className='dataChange'
                                                    onMouseEnter={tooltipOn} onMouseLeave={tooltipOff}>14.01.2021 </span><span
                                                    onMouseEnter={tooltipOn} onMouseLeave={tooltipOff} className='dataChangeTime' style={{ opacity: 0.5, fontSize: '10px' }}>19:54:12</span>
                                                </div>
                                                <div className='user'  onMouseEnter={tooltipOn} onMouseLeave={tooltipOff}>
                                                    Михаил Стерненко
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    
                        </div>

                        <div className="attr-block">
                            <div className="header-text" style={{ marginBottom: 24 }}>Атрибут
                                <button>
                                    <SvGBtnPlus />
                                </button>
                            </div>
                            <div className="shadow-right" style={{ top: 50, height: 'calc(100% - 50px)' }}></div>
                            <ScrollBar
                                // className={`warehouse-table`}
                                height={`300px`}
                                vertical={true}
                                horizontal={true}
                            // setHideArrow={setHideArrow}
                            // updateHover={updateHover}
                            // podlozhka={podlozhka}
                            // infiniteScroll={_.throttle(onScroll, 500)}

                            >

                                <table
                                    tabIndex={-1}
                                    style={{ width: '100%' }}
                                    className='warehouse-card'


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
                                                    <div style={{ width: 28,display:'flex' }}>
                                                        <img style={{margin:'auto'}} className="logo-mail" src={crmLogo} alt="" />
                                                    </div>
                                                    <div style={{ width: 28,display:'flex'  }}>

                                                        <img style={{margin:'auto'}}className="logo-mail" src={rozetkaLogo} alt="" />
                                                    </div>
                                                    <div style={{ width: 28 ,display:'flex' }}>

                                                        <img style={{margin:'auto'}}className="logo-mail" src={promLogo} alt="" />
                                                    </div>
                                                    <div style={{ padding: '0 10px', cursor: 'help', width: 56 }}

                                                    >
                                                        ID
                                                    </div>
                                                    <div
                                                         onMouseEnter={tooltipOn}
                                                        onMouseLeave={tooltipOff}
                                                        style={{ cursor: 'help', paddingRight: '10px', width: 150 }}>
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
                                                style={{  cursor: 'help' }}>
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
                                                style={{  paddingRight: '10px',cursor: 'help' }}
                                            >
                                                Продажа
                                            </th>
                                            <th
                                                style={{ paddingRight: '10px', cursor: 'help' }}
                                            >
                                                Маржа
                                            </th>
                                            <th
                                                style={{ cursor: 'help' }}
                                                colSpan={4}
                                            >
                                                Сумма
                                            </th>
                                            <th className='delete'></th>
                                        </tr>


                                        <tr>
                                            <th className="shadow-vertical" colSpan={19}>
                                                <div />
                                                <div />
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="first-tab-body">
                                        <ProductCardList
                                              setSortedArr={setSortedArr}
                                              sortedArr={sortedArr}
                                        data2={data} onClick={onClick} tooltipOn={tooltipOn} tooltipOff={tooltipOff} translator={translator} podlozhka={podlozhka} setPodlozhka={setPodlozhka}/>
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

                            </ScrollBar>
                        </div>
                    </div>
                    <div>
                        <button className="save-btn">Сохранить и закрыть</button>
                    </div>
                    <ProductCardMenu
                                openCardMenu={openCardMenu}
                                searchLine={searchLine}
                                // inputRef={inputRef}
                                multiselect={multiselect}
                                inputOn={search}
                                data={data[typeData]}
                                dataCurrent={data}
                                typeData={typeData}
                                setData={setData}
                                podlozhka={podlozhka}
                                setPodlozhka={setPodlozhka}
                                setOpenCardMenu={setOpenCardMenu}
                                translator={translator}
                                createAttr={createAttr}
                                setSortedArr={setSortedArr}
                                sortedArr={sortedArr}

                            />
                </div>
        
            </div>
        </>
    );
};

export default ProductCard;

import React,{useEffect,useState,useRef} from 'react'
import { Minus,Plus } from '../../img/svg-pack';
import SimpleDropMenu from './SimpleDropMenu';
let plusminus;
const PlusMinusBlock = ({translator,objProduct,setObjProduct,setSwitchMenu,podlozhka,setPodlozhka,hideMenu,setHideMenu,index,tooltipOn,tooltipOff}) => {
    const [memoryInput, setMemoryInput] = useState(objProduct[index]?.ostatok); // input-+
	const [addPrice, setAddPrice] = useState(false); // menu pri +
	const [memoryCena, setMemoryCena] = useState(0); // input+- vnutri menu
	const [cena, setCena] = useState(''); //cena zakupki
	const [kurs, setKurs] = useState(''); // kurs
	const [itogoZakupka, setItogoZakupka] = useState(''); // summa
	const [pri4ina, setPri4ina] = useState('');
	// const linkTR = useRef();
	const cenaBlock = useRef();
	const [flagForZakupka, setFlagForZakupka] = useState(false);
	const [memoryChange, setMemoryChange] = useState(objProduct[index]?.ostatok); // stariy input
    function BtnMinus(e) {
		// let oldinput = +memoryChange.replace(/\s/gmu, '');
		if (memoryInput !== '0') {
			// e.stopPropagation();
			setPodlozhka(true);
			setAddPrice(true);
			setFlag(true);
			setHideMenu(true);
			let inputFormat = +memoryInput.replace(/\s/gmu, '');
			// let oldinput = +memoryChange.replace(/\s/gmu, '');
			// let ostatok = newobj[index].ostatok;
			if ((+memoryChange.replace(/\s/gmu, '')) < (+memoryInput.replace(/\s/gmu, ''))) {
				let newMemoryCena = memoryCena === 1 && inputFormat !== 1 ? memoryCena - 2 : inputFormat === 1 ? memoryCena : memoryCena - 1;
				setMemoryCena(newMemoryCena);
				// input = input.toLocaleString('ru-RU', {
				// 		minimumFractionDigits: 0,
				// 		maximumFractionDigits: 0,
				// 	});
				let newinput = memoryCena === 1 && inputFormat !== 1 ? inputFormat - 2 : inputFormat === 1 ? inputFormat : inputFormat - 1;
				setMemoryInput(newinput.toString());

				if (cena !== '') {
					let text = +cena.replace(/\s/gmu, '');
					let textKurs = +kurs.replace(/\s/gmu, '')
					let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
					let text3 = newMemoryCena * (+text) * (+textKurs);
					if (kurs === '') {
						setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
					} else {
						setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
					}
				}
				setTimeout(() => {
					focus.current.querySelector('.input-search')?.focus();
					// focus.current.querySelector('.prichinaInput').focus();
					// focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				}, 300);
			} else {
				let newMemoryCena = memoryCena - 1;
				setMemoryCena(newMemoryCena);
				let newinput = inputFormat - 1;
				setMemoryInput(newinput.toString());
				// setTimeout(() => {
				// 	// focus.current.querySelector('.input-search').focus();
				// 	focus.current.querySelector('.prichinaInput')?.focus();
				// 	focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				// }, 300);
				setPrichinaFocus(true);
				// if (cena !== '') {
				// 	let text = +cena.replace(/\s/gmu, '');
				// 	let textKurs = +kurs.replace(/\s/gmu, '')
				// 	let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
				// 	let text3 = newMemoryCena * (+text) * (+textKurs);
				// 	if (kurs === '') {
				// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	} else {
				// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	}
				// }
				console.log(newMemoryCena , newinput)
			}
			refWrapOstatok.current.closest('tr').classList.add('hover-disabled');
            // console.log(		refWrapOstatok.current.closest('tr'))
			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				x.classList.remove('showBtn');
			});
			// setTimeout(() => {
			// 	focus.current.querySelector('.input-search').focus();
			// 	focus.current.querySelector('.prichinaInput').focus();
			// 	focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
			// }, 300);
			focus.current?.closest('.nal-ostatok')?.classList.add('showBtn')
			document.querySelector('.contentScroll').style.overflow = 'hidden';
			document.querySelector('.track-vertical').style.opacity = 0;
			document.querySelector('.track-horizontal').style.opacity = 0;
			document.getElementById('tooltipBtn').style.animation = '';


		}


	}
	function BtnPlus(e) {
		e.stopPropagation();
		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		let newMemoryCena = memoryCena === -1 ? memoryCena + 2 : memoryCena + 1;
		setMemoryCena(newMemoryCena);
		let inputFormat = +memoryInput.replace(/\s/gmu, '');
		let newinput = memoryCena === -1 ? inputFormat + 2 : inputFormat + 1;
		// input = input.toLocaleString('ru-RU', {
		// 		minimumFractionDigits: 0,
		// 		maximumFractionDigits: 0,
		// 	});
		setMemoryInput(newinput.toString());
		console.log(newMemoryCena , newinput)
		if (cena !== '') {
			let text = +cena.replace(/\s/gmu, '');
			let textKurs = +kurs.replace(/\s/gmu, '')
			let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
			let text3 = newMemoryCena * (+text) * (+textKurs);
			if (kurs === '') {
				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			} else {
				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			}
		}
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		document.getElementById('tooltipBtn').style.animation = '';
		setTimeout(() => {
			focus.current?.querySelector('.input-search')?.focus();
		}, 300);
		refWrapOstatok.current.closest('tr').classList.add('hover-disabled');

	}
    const [flag, setFlag] = useState(false);

    function inputChange(e) {

		setPodlozhka(true);
		setAddPrice(true);
		setFlag(true);
		setHideMenu(true);
		// setMemoryCena(memoryCena + 1);
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		e.target.closest('.nal-ostatok').classList.add('showBtn')
		document.querySelector('.contentScroll').style.overflow = 'hidden';
		document.querySelector('.track-vertical').style.opacity = 0;
		document.querySelector('.track-horizontal').style.opacity = 0;
		document.getElementById('tooltipBtn').style.animation = '';
		refWrapOstatok.current.closest('tr').classList.add('hover-disabled');

		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		let value = e.target.value;
		setMemoryInput(value);

		let res = (+value.replaceAll(/\s/gmu, '')) - (+memoryChange.replaceAll(/\s/gmu, ''))
		setMemoryCena(res);
		// let newMemoryCena = memoryCena;
		if (cena !== '') {
			let text = +cena.replace(/\s/gmu, '');
			let textKurs = +kurs.replace(/\s/gmu, '')
			let text2 = res * (+text) === 0 ? text : res * (+text);
			let text3 = res * (+text) * (+textKurs);
			if (kurs === '') {
				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			} else {
				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
			}
		}
		// setMemoryCena(memoryInput - memoryInput);
		// setMemoryCena(+memoryChange -  +memoryInput)
		// setItogoZakupka(e.target.value);
		// setMemoryChange(e.target.value);
	}
    function inputChangeMemoryCena(e) {
		
		let temp = e.target.value.replace(/[^0-9]/g, '');
		e.target.value = temp.length === 0 ? ' ' : temp;
		e.target.style.width = e.target.value.length * 7 + 'px';
		e.target.style.zIndex = 10001;
		let value = e.target.value;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';
		
		setFlagForZakupka(true);
		setMemoryCena(Number(value));

	}
    const focus = useRef();
    function cenaChange(e) {
		e.target.value = e.target.value.replace(',', '.').match(/^\d+(?:[\.,]\d{0,2})?/);
		// e.target.nextSibling.style.width = '100%';
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		e.target.style.zIndex = 10001;
		setCena(e.target.value);
		setFlagForZakupka(true);
	}
	function pri4inaChange(e) {

		if (e.target.value.length >= 1) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		e.target.style.zIndex = 10001;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		// e.target.value = e.target.value.replace(/\d/g, '');
		setPri4ina(e.target.value);
		setFlagForZakupka(true);
	}
	function kursChange(e) {
		e.target.style.zIndex = 10001;
		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = 'none';

		// e.target.value = e.target.value.replace(/[^0-9.]/g, '');
		e.target.value = e.target.value.replace(',', '.').match(/^\d+(?:[\.,]\d{0,2})?/);

		setKurs(e.target.value);
		setFlagForZakupka(true);
	}
    useEffect(() => {
		// let res = (+memoryInput.replaceAll(/\s/gmu, '')) - (+memoryChange.replaceAll(/\s/gmu, ''))
		// setMemoryCena(res === '0.00' ? '' : res);
		if (flagForZakupka && cena === '0.00') {

			setCena('');


		}
		// if (itogoZakupka === '0.00') {
		// 	setItogoZakupka('');
		// }
		if (kurs === '0.00') {
			setKurs('');
		}
		// console.log(memoryCena, cena, kurs)
	}, [kurs, cena, memoryCena, memoryInput, flagForZakupka]);
    function saveBtn() {

		let newobj = [...objProduct];
		if (memoryInput.length !== 0 || memoryInput !== ' ') {
			let ostatok = memoryInput;
			let zakupka = newobj[index].zakupka;
			zakupka = +zakupka.replace(/\s/gmu, '');
			ostatok = +ostatok.replace(/\s/gmu, '');
			zakupka = zakupka * ostatok;
			ostatok = ostatok.toLocaleString('ru-RU', {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
			zakupka = zakupka.toLocaleString('ru-RU', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).replace(',', '.');

			newobj[index].ostatok = ostatok;
			newobj[index].suma1 = zakupka;
			setMemoryChange(ostatok);
			setMemoryInput(ostatok);
			setObjProduct([...newobj]);
			if (inputRef.current.value) {
				if (inputRef.current.value.length >= 4) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 3 + 'px';
				}
				if (inputRef.current.value.length >= 7) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 7 + 'px';
				}
				if (inputRef.current.value.length < 4) {
					inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
				}
			}
		}
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	x.classList.remove('showBtn');
		// });
		// e.target.closest('.nal-ostatok').classList.add('showBtn')
		refWrapOstatok.current.closest('tr').classList.remove('hover-disabled');
		inputRef.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		// document.getElementById('tooltipBtn').style.animation = '';
		setListenChangeSuppliers('');
		setKurs('');
		setCena('');
		setItogoZakupka('');
		setMemoryCena(0);
		setPri4ina('');
		setHideMenu(false);
		setAddPrice(false);
		setFlag(false);
		setPodlozhka(false);
	}
    useEffect(() => {
		if (!podlozhka && flag) {
			objProduct[index].ostatok = memoryChange;
			refWrapOstatok.current.closest('tr').classList.remove('hover-disabled');
			setObjProduct([...objProduct]);
			setMemoryInput(memoryChange);
			setListenChangeSuppliers('');
			setKurs('');
			setCena('');
			setItogoZakupka('');
			setPri4ina('');
			setMemoryCena(0);
			setAddPrice(false);
			setFlag(false);
		}
	}, [podlozhka]);
    const inputRefMemoryCena = useRef();
	useEffect(() => {
		if (inputRef.current.value) {
			inputRef.current.style.width = inputRef.current.value.length * 7 + 'px';
		}
		if (addPrice) {
			focus.current.querySelector('.memoryCena input').style.width = focus.current.querySelector('.memoryCena input').value.length * 7 + 'px';
		}
	}, [memoryInput, memoryCena])
    const inputRef = useRef();
	function PlusMinusOpen(e) {
		// e.stopPropagation();
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.add('showBtn');
		});
		plusminus = setTimeout(() => {
			if (!objProduct[index].lock) {
				inputRef?.current?.select();
				inputRef?.current?.focus();
			}
		}, 150);
	}
	function PlusMinusClose(e) {
		// e.stopPropagation();
		if (!podlozhka) {
			document.querySelectorAll('.nal-ostatok').forEach((x) => {
				x.classList.remove('showBtn');
			});
			inputRef.current.blur();
		}
		clearTimeout(plusminus);
	}
    let obj = [
		{ id: 0, company: 'Мега ОПТ', select: false },
		{ id: 1, company: 'TrendOpt', select: false },
		{ id: 2, company: 'Imperial Super Group', select: false },
		{ id: 3, company: 'Интернет-магазин VlaRus', select: false },
		{ id: 4, company: '7й километр', select: false },
		{ id: 5, company: 'Концерн Denavi', select: false },
	]
	const [suppliers, setSuppliers] = useState(null);
    useEffect(() => {
		if (addPrice) {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.add('visible');
			});
			let pos = cenaBlock.current.getBoundingClientRect();
			const heightPlus = pos.y + cenaBlock.current.offsetHeight;
			const viewportHeight = document.body.clientHeight;
			if (heightPlus + 78 > viewportHeight) {
				cenaBlock.current.style.bottom = '18px';
			}
		} else {
			document.querySelectorAll('.cena').forEach((x) => {
				x.classList.remove('visible');
			});
		}
	}, [addPrice])
	useEffect(() => {
		setSuppliers(obj)
	}, [])
	const [listenChangeSuppliers, setListenChangeSuppliers] = useState('');
    useEffect(() => {
		if (!flagForZakupka && addPrice) {
			if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
				// let inputFormat = +memoryInput.replace(/\s/gmu, '');
				let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
				let text = +cena.replace(/\s/gmu, '');
				let textKurs = +kurs.replace(/\s/gmu, '')
				let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
				let text3 = newMemoryCena * (+text) * (+textKurs);
				// document.querySelector('.memoryCena inp')
				let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
				setMemoryInput(res.toString());
				setMemoryCena(newMemoryCena);
				// e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
				document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
				if (kurs === '') {
					setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				} else {
					setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				}
				setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				console.log('++')
			} else {
				// let value = e.target.value;
					let value = inputRefMemoryCena.current.value;
					value = Math.abs(Number(value))
					value = Number(value) === 0 ? -1 : Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(value);

					let res =  (+memoryChange.replaceAll(/\s/gmu, ''))-value;
					// e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
					document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
					
					setMemoryCena(-value);
					setMemoryInput(res.toString());
					console.log('--')
					console.log(value , res)
			

				// if (cena !== '') {
				// 	let text = +cena.replace(/\s/gmu, '');
				// 	let textKurs = +kurs.replace(/\s/gmu, '')
				// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
				// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
				// 	if (kurs === '') {
				// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	} else {
				// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
				// 	}
				// }
			}
			// const block = e.currentTarget.closest('.cena').querySelector('.tooltip');																
			// block.style.animation = '';
			// setFlag(false);
		}
	}, [flagForZakupka])
    const refWrapOstatok = useRef();
	function clickVirtualWrapper() {
		// setOpenMenu(false);
		setPodlozhka(false);
		setHideMenu(false);
		// console.log('srabotalo');
		// setFlagSwitchMenu(false);
		setSwitchMenu(false);
		setFlag(false);
		// setVirtualClick(false);
		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.track-horizontal').style.opacity = 1;
		inputRef.current.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
		setFlagForZakupka(false);
		// document.querySelector('.first-tab-body').classList.remove('hoverOff');
		document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
			x.style.zIndex = 1;
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '22px';
		});
		document.querySelectorAll('.telOperator .warehouse-dropmenu').forEach((x) => {
			x.style.minWidth = '22px';
		});
		document.querySelectorAll('.nal-ostatok').forEach((x) => {
			x.classList.remove('showBtn');
		});
		document.querySelector('.width21px').style.maxWidth = '51px';
	}
	function handle(e) {
		if (refWrapOstatok.current && !refWrapOstatok.current.contains(e.target)) {
			clickVirtualWrapper()
		}
	}
    const [prichinaFocus,setPrichinaFocus]=useState(false);
    useEffect(() => {
		if (flag) {
			document.addEventListener("click", handle, true);
		}
		return () => {
			document.removeEventListener("click", handle, true);
		};
	}, [flag]);
	// useEffect(()=> {
	// 	if(focus.current){
	// 		let width = focus.current.querySelector('.memoryCena').offsetWidth;
	// 		focus.current.querySelector('.tooltip').style.left = width+'px';
	// 	}
	// },[memoryCena])
    useEffect(()=> {
		if((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))){
			setPri4ina('');
			setPrichinaFocus(false);
			// setMinusOrPlus(true)
		}else {
			// setPrichinaFocus(true);

			// setMinusOrPlus(false)
			setCena('');
		}
	},[memoryCena,memoryInput])
    useEffect(()=> {
		if(prichinaFocus){
			if (focus.current) {
				setTimeout(() => {
					focus.current.querySelector('.prichinaInput')?.focus();
					focus.current.querySelector('.prichinaInput').nextSibling.style.width = '100%';
				}, 100);
			}
		} 
		else {
			if (focus.current) {
				setTimeout(() => {
					let el = focus.current?.querySelector('.prichinaInput');
					if(el == null) return;
					el?.blur();
					let sibling = el.nextSibling;
					if(sibling!= null){
						sibling.style.width = '0%';
					}
				}, 200);
			}
		}
	
	},[prichinaFocus,focus])
  return (
    <td
    onMouseLeave={addPrice ? null : PlusMinusClose}
    onMouseEnter={addPrice ? null : PlusMinusOpen}
    className={`nal-ostatok ${addPrice ? 'showBtn' : ''}`}
    style={addPrice ? { zIndex: 99 } : {}}
    onClick={addPrice ? (e) => e.stopPropagation() : null}
    onDoubleClick={addPrice ? (e) => e.stopPropagation() : null}
    ref={refWrapOstatok}
>
    <div
        className="wrap-nal-ostatok"

        onMouseEnter={addPrice ? (e)=> {

            // inputRef.current.select()
            // inputRef.current.focus()
                e.stopPropagation()
                inputRef.current.select()
                inputRef.current.focus()
                
            
        } : e=> tooltipOn(e)}
        onMouseLeave={addPrice ? (e)=> {
            e.stopPropagation()
            inputRef.current.blur();
            
        
        }: e=>tooltipOff(e) }
    >
        <button
            onDoubleClick={(e) => e.stopPropagation()}
            onClick={(e) => {BtnMinus();e.stopPropagation()}}
            disabled={objProduct[index].lock ? true : false}
        >
            <Minus />
        </button>

        <input
            ref={inputRef}
            type="text"
            onChange={inputChange}
            // onKeyUp={enterInput}
            maxLength={5}
            onClick={(e) => {
                // setPodlozhka(true);
                e.stopPropagation();
            }}
            // onMouseLeave={e => {
            // 	if (addPrice) {
            // 		let value = e.target.value;
            // 		value = (+value.replaceAll(/\s/gmu, '')) === 0 ? 1 : (+value.replaceAll(/\s/gmu, ''))
            // 		setMemoryInput(value.toString());
            // 		let res = value - (+memoryChange.replaceAll(/\s/gmu, ''))
            // 		setMemoryCena(res);
            // 		if (cena !== '') {
            // 			let text = +cena.replace(/\s/gmu, '');
            // 			let textKurs = +kurs.replace(/\s/gmu, '')
            // 			let text2 = value * (+text) === 0 ? text : value * (+text);
            // 			let text3 = value * (+text) * (+textKurs);
            // 			if (kurs === '') {
            // 				setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
            // 			} else {
            // 				setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
            // 			}
            // 		}
            // 	}

            // }}
            // value={focusInput && inputFormat ? memoryInput : +memoryInput}
            value={memoryInput}
            onDoubleClick={(e) => e.stopPropagation()}
            style={{
                color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.7)'}`,
                lineHeight: '18px',
                // width: ''
                // width: inputLength(memoryInput.toString()),
            }}
            readOnly={objProduct[index].lock ? true : false}
        />

        <button
            // style={btnMenu ? { width: '16px' } : {}}
            onDoubleClick={(e) => e.stopPropagation()}
            onClick={BtnPlus}
            disabled={objProduct[index].lock ? true : false}
        >
            <Plus />
        </button>
        


    </div>
    <div ref={cenaBlock} className='cena'>
            {addPrice && <div ref={focus} className='wrap' >
                <table style={{ borderCollapse: 'collapse', margin: 10 }}>
                    <tbody>
                        {flagForZakupka && <tr style={{ position: 'absolute' }}>
                            <td style={{ height: 0, minHeight: 0 }} colSpan={2}>
                                <div onClick={e => {
                                    // let text = cena;
                                    // console.log( typeof cena)
                                    // let text = +cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                    // setCena(text);
                                    // if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
                                    // 	// let inputFormat = +memoryInput.replace(/\s/gmu, '');
                                    // 	let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
                                    // 	let text = +cena.replace(/\s/gmu, '');
                                    // 	let textKurs = +kurs.replace(/\s/gmu, '')
                                    // 	let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
                                    // 	let text3 = newMemoryCena * (+text) * (+textKurs);
                                    // 	// document.querySelector('.memoryCena inp')
                                    // 	let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
                                    // 	setMemoryInput(res.toString());
                                    // 	setMemoryCena(newMemoryCena);
                                    // 	e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
                                    // 	document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
                                    // 	if (kurs === '') {
                                    // 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	} else {
                                    // 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	}
                                    // 	setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	console.log('++')
                                    // } else {
                                    // 	// let value = e.target.value;
                                    // 		let value = inputRefMemoryCena.current.value;
                                    // 		value = Math.abs(Number(value))
                                    // 		value = Number(value) === 0 ? -1 : Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(value);
                        
                                    // 		let res =  (+memoryChange.replaceAll(/\s/gmu, ''))-value;
                                    // 		e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
                                    // 		document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
                                            
                                    // 		setMemoryCena(-value);
                                    // 		setMemoryInput(res.toString());
                                    // 		console.log('--')
                                    // 		console.log(value , res)
                                    

                                    // 	// if (cena !== '') {
                                    // 	// 	let text = +cena.replace(/\s/gmu, '');
                                    // 	// 	let textKurs = +kurs.replace(/\s/gmu, '')
                                    // 	// 	let text2 = -newMemoryCena * (+text) === 0 ? text : -newMemoryCena * (+text);
                                    // 	// 	let text3 = -newMemoryCena * (+text) * (+textKurs);
                                    // 	// 	if (kurs === '') {
                                    // 	// 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	// 	} else {
                                    // 	// 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                    // 	// 	}
                                    // 	// }
                                    // }
                                    // const block = e.currentTarget.closest('.cena').querySelector('.tooltip');																
                                    // block.style.animation = '';
                                    e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
                                    // const block = e.currentTarget.querySelector('.tooltip');
                                    // block.style.animation = '';
                                    setFlagForZakupka(false);
                                    document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')

                                }} style={{ height: '170px', width: '240px', position: 'absolute', left: -10, zIndex: 10000, top: -10 }}></div>
                            </td>
                        </tr>}
                        <tr>
                            <td>{(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) ? translator.getTranslation('menuAdd/CribProduct', 'add') : translator.getTranslation('menuAdd/CribProduct', 'crib')}</td>
                            <td

                            >
                                <div className="memoryCena"
                                    onMouseEnter={e => {

                                        // let posElement = e.currentTarget.getBoundingClientRect();
                                        // const block = e.currentTarget.querySelector('.tooltip');
                                        // const width = e.currentTarget.offsetWidth;
                                        // block.style.fontSize = '12px';
                                        // block.style.left = width + 'px';
                                        // block.style.top = '-13px';
                                  
                                        setPrichinaFocus(false);
                          
                                        plusminus = setTimeout(() => {
                                            if (!flagForZakupka) {

                                                inputRefMemoryCena?.current?.select();
                                            }
                                            inputRefMemoryCena?.current?.focus();
                                        }, 150);
                                    }}
                                    onMouseLeave={e => {
                                        // const block = e.currentTarget.querySelector('.tooltip');
                                        // block.style.animation = '';
                                        if (!flagForZakupka) {
                                            // const block = e.currentTarget.closest('.memoryCena').querySelector('.tooltip');																
                                            // block.style.animation = '';
                                            // document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
                                            // e.currentTarget.querySelector('input').blur();
                                            inputRefMemoryCena?.current?.blur();
                                        }
                                        clearTimeout(plusminus);

                                    }}
                                >
                                    <button
                                        // onDoubleClick={(e) => e.stopPropagation()}
                                        onClick={BtnMinus}
                                        style={{ top: 0 }}
                                        onMouseEnter={e => e.stopPropagation()}

                                    >
                                        <Minus />
                                        {/* {console.log(memoryCena)} */}
                                    </button>
                                    {/* {Math.abs(memoryCena)} */}
                                    <input
                                        ref={inputRefMemoryCena}
                                        value={memoryCena}
                                        onChange={inputChangeMemoryCena}
                                        maxLength={5}
                                        style={{width: '7px',textAlign: 'center',padding: '0 1px'}}
                                        onKeyDown={e => {
                                            if (e.key === "Enter") {
                                                e.target.blur();
                                                // setFlag(false);
                                                e.target.style.zIndex = '';
                                                e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

                                                // if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
                                                // 	let value = e.target.value;
                                                // 	value = Number(value) === 0 ? 1 : Number(value);
                                                // 	setMemoryCena(value);
                                                // 	let res = (value) + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryInput(res.toString());
                                                // 	if (cena !== '') {
                                                // 		let text = +cena.replace(/\s/gmu, '');
                                                // 		let textKurs = +kurs.replace(/\s/gmu, '')
                                                // 		let text2 = value * (+text) === 0 ? text : value * (+text);
                                                // 		let text3 = value * (+text) * (+textKurs);
                                                // 		if (kurs === '') {
                                                // 			setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 		} else {
                                                // 			setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 		}
                                                // 	}
                                                // } else {
                                                // 	let value = e.target.value;
                                                // 	console.log(value, memoryChange)
                                                // 	value = Number(value) === 0 ? -1 : Number(value) > (+memoryChange.replaceAll(/\s/gmu, '')) ? -1 : Number(value);
                                                // 	let res = -value + (+memoryChange.replaceAll(/\s/gmu, ''));

                                                // 	setMemoryCena(-value);
                                                // 	setMemoryInput(res.toString());
                                        
                                                // }
                                                // const block = e.currentTarget.closest('.memoryCena').querySelector('.tooltip');
                                                // block.style.animation = '';
                                                setFlagForZakupka(false);

                                            }
                                        }}
                                    />
                                    <button
                                        onClick={BtnPlus}
                                        style={{ top: 0 }}
                                        onMouseEnter={e => e.stopPropagation()}
                                    >
                                        <Plus />
                                    </button>
                                    {/* <div className='tooltip'>
                                        {(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) 
                                        ? `Добавляется товаров: ${Math.abs(memoryCena)}` : `Списывается товаров: -${Math.abs(memoryCena)}`}
                                         <br />Итого товаров на складе: {(+memoryChange.replace(/\s/gmu, '')) < (+memoryInput.replace(/\s/gmu, '')) ? (+memoryCena)+ (+memoryChange.replace(/\s/gmu, '')): (+memoryChange.replace(/\s/gmu, ''))-(Math.abs(+memoryCena))}
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        {(+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, '')) ? <>
                            <tr>
                                <td>{translator.getTranslation('menuAdd/CribProduct', 'suppliers')}</td>
                                <td>
                                    <SimpleDropMenu
                                        setListenChangeSuppliers={setListenChangeSuppliers}
                                        listenChangeSuppliers={listenChangeSuppliers}
                                        addPrice={addPrice}
                                        data={suppliers}
                                        setData={setSuppliers}
                                        translator={translator}
                                        setFlagForZakupka={setFlagForZakupka}
                                        flagForZakupka={flagForZakupka}
                                        setCena={setCena}
                                        cena={cena}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>{translator.getTranslation('menuAdd/CribProduct', 'purchase')}</td>
                                <td>
                                    <input className='cenaInput' onChange={cenaChange} value={cena}
                                        onKeyDown={e => {
                                            if (e.key === "Enter") {
                                                e.target.nextSibling.style = '0%';
                                                e.target.blur();
                                                // let text = +e.target.value.replaceAll(/\s/gmu, '');
                                                // text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                                                // console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
                                                // setFlagForZakupka(false);
                                                // setCena(text);
                                                e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

                                                // if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
                                                // 	// let inputFormat = +memoryInput.replace(/\s/gmu, '');
                                                // 	let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
                                                // 	let text = +cena.replace(/\s/gmu, '');
                                                // 	let textKurs = +kurs.replace(/\s/gmu, '')
                                                // 	let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
                                                // 	let text3 = newMemoryCena * (+text) * (+textKurs);
                                                // 	// document.querySelector('.memoryCena inp')
                                                // 	let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryInput(res.toString());
                                                // 	setMemoryCena(newMemoryCena);
                                                // 	document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
                                                // 	if (kurs === '') {
                                                // 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	} else {
                                                // 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	}
                                                // 	setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // } else {
                                                // 	// let value = e.target.value;
                                                // 	let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
                                    
                                                // 	let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryCena(-newMemoryCena);
                                                // 	setMemoryInput(res.toString());
                                            
                                                // }
                                                setFlagForZakupka(false);
                                                // console.log(text)
                                            }
                                        }}
                                        style={{ height: 23, position: 'relative' }}
                                        onMouseEnter={e => {
                                            e.target.nextSibling.style.width = '100%';
                                            e.target.focus()
                                            e.target.select()
                                        }}
                                        onMouseLeave={e => {
                                            if (!flagForZakupka) {
                                                document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
                                                e.target.blur()
                                            }
                                        }}
                                        onClick={e => {
                                            setFlagForZakupka(true);
                                            setCena(prev => prev.replaceAll(/\s/gmu, ''));
                                        }}
                                        maxLength={9}
                                    />
                                    <div className='poloska'></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{translator.getTranslation('menuAdd/CribProduct', 'exchangeRates')}</td>
                                <td>
                                    <input className='kursInput' value={kurs} onChange={kursChange}
                                        onKeyDown={e => {
                                            if (e.key === "Enter") {
                                                e.target.nextSibling.style = '0%';
                                                e.target.blur();
                                                // let text = +e.target.value.replaceAll(/\s/gmu, '');
                                                // text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                                                // // console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
                                                // setKurs(text);
                                                e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';

                                                // if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
                                                // 	// let inputFormat = +memoryInput.replace(/\s/gmu, '');
                                                // 	let newMemoryCena = Number(memoryCena) === 0 ? 1 : Number(memoryCena);
                                                // 	let text = +cena.replace(/\s/gmu, '');
                                                // 	let textKurs = +kurs.replace(/\s/gmu, '')
                                                // 	let text2 = newMemoryCena * (+text) === 0 ? text : newMemoryCena * (+text);
                                                // 	let text3 = newMemoryCena * (+text) * (+textKurs);
                                                // 	// document.querySelector('.memoryCena inp')
                                                // 	let res = (newMemoryCena) + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryInput(res.toString());
                                                // 	setMemoryCena(newMemoryCena);
                                                // 	document.querySelectorAll('.cenaInput, .kursInput, .prichinaInput, .memoryCena input').forEach(x => x.style.zIndex = '')
                                                // 	if (kurs === '') {
                                                // 		setItogoZakupka(text2.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	} else {
                                                // 		setItogoZakupka(text3.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	}
                                                // 	setKurs(textKurs.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // 	setCena(text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
                                                // } else {
                                                // 	// let value = e.target.value;
                                                // 	let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
                                    
                                                // 	let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryCena(-newMemoryCena);
                                                // 	setMemoryInput(res.toString());
                                        
                                                // }
                                                setFlagForZakupka(false);
                                                // setFlagForZakupka(false);
                                                // console.log(text)
                                            }
                                        }}
                                        onMouseEnter={e => {
                                            e.target.nextSibling.style.width = '100%';
                                            e.target.focus()
                                            e.target.select()

                                        }}
                                        onMouseLeave={e => {
                                            if (!flagForZakupka) {
                                                document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
                                                e.target.blur()
                                            }
                                        }}
                                        onClick={e => {
                                            setFlagForZakupka(true);
                                            setKurs(prev => prev.replaceAll(/\s/gmu, ''));
                                        }}
                                        maxLength={9}
                                    />
                                    <div className='poloska'></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{translator.getTranslation('menuAdd/CribProduct', 'total')}</td>
                                <td>{itogoZakupka}</td>
                            </tr>
                        </> :

                            <tr>
                                <td>{translator.getTranslation('menuAdd/CribProduct', 'reason')}</td>
                                <td>
                                    <input className='prichinaInput' onChange={pri4inaChange} value={pri4ina}
                                        onKeyDown={e => {
                                            if (e.key === "Enter") {
                                                e.target.nextSibling.style = '0%';
                                                e.target.blur();
                                                e.target.closest('.nal-ostatok').querySelector('.wrap-nal-ostatok').style.pointerEvents = '';
                                                // if ((+memoryChange.replace(/\s/gmu, '')) <= (+memoryInput.replace(/\s/gmu, ''))) {
                                                    
                                                // } else {
                                                // 	// let value = e.target.value;
                                                // 	let newMemoryCena = Number(memoryCena) === 0  ? -1 : Number(memoryCena) > (+memoryChange.replaceAll(/\s/gmu, '')) ? - 1 : Number(memoryCena);
                                    
                                                // 	let res = -newMemoryCena + (+memoryChange.replaceAll(/\s/gmu, ''))
                                                // 	setMemoryCena(-newMemoryCena);
                                                // 	setMemoryInput(res.toString());
                                        
                                                // }
                                                // let text = +e.target.value.replaceAll(/\s/gmu, '');
                                                // text = text.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                                                // console.log(+cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
                                                setFlagForZakupka(false);
                                                // setKurs(text);
                                                // console.log(text)
                                                setPri4ina(e.target.value)
                                            }
                                        }}
                                        onMouseEnter={e => {
                                            e.target.nextSibling.style.width = '100%';
                                            e.target.focus()
                                            e.target.select()

                                        }}
                                        onMouseLeave={e => {
                                            if (!flagForZakupka) {
                                                document.querySelectorAll('.poloska').forEach(x => x.style.width = '0%')
                                                e.target.blur()
                                            }
                                        }}
                                    /><div className='poloska'></div>
                                </td>
                            </tr>
                        }
                    </tbody>

                </table>

                <button
                    onClick={saveBtn}
                    disabled={cena !== '' ? false :  pri4ina !== '' ? false : true}
                    className="save-btn">
                    Сохранить
                </button>
                {/* <div className='poloska'></div> */}
            </div>}
        </div>

    <span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', position: 'absolute', right: 3, top: 3 }}>/</span>
</td>
  )
}

export default PlusMinusBlock;

import React, { useState, useEffect, useRef } from 'react';
import PodProductList2 from './PodProductList2';

const WarehouseProductList2 = ({
	objProduct,
	index,
	PlusMinusOpen,
	PlusMinusClose,
	setObjProduct,
	podlozhka,
	setPodlozhka,
	setFocusInput,
	focusInput,
	setIndexInput,
}) => {
	const [swtichChecked, setSwitchChecked] = useState(objProduct[index].status.all);

	useEffect(() => {
		if (!objProduct[index].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function BtnMinus(e) {
		let newobj = [...objProduct];
		if (newobj[index].ostatok !== 0) {
			newobj[index].ostatok = newobj[index].ostatok - 1;
		}
		setObjProduct(newobj);
	}
	function BtnPlus(e) {
		let newobj = [...objProduct];
		newobj[index].ostatok = newobj[index].ostatok + 1;
		setObjProduct(newobj);
	}
	function formatNumber(number) {
		let newnum = number
			.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
			.replace(',', '.');
		return newnum;
	}
	function formatNumber2(number) {
		let newnum = number.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newnum;
	}
	function inputChange(e) {
		setIndexInput(index);
		// e.target.style.zIndex = 3;
		setFocusInput(true);
		setPodlozhka(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		let newobj = [...objProduct];
		newobj[index].ostatok = +e.target.value;
		setObjProduct(newobj);
	}
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const prev = usePrevious(objProduct[index].ostatok);
	function enterInput(e) {
		if (e.key === 'Enter') {
			if (podlozhka && prev !== objProduct[index].ostatok) {
				if (e.target.value.length >= 4) {
					e.target.style.width = e.target.value.length * 8 + 4 + 'px';
				}
				if (e.target.value.length >= 7) {
					e.target.style.width = e.target.value.length * 8 + 8 + 'px';
				}
				if (e.target.value.length < 4) {
					e.target.style.width = e.target.value.length * 8 + 'px';
				}
				e.target.blur();
				console.log('enter');
				setFocusInput(false);
			}
			setPodlozhka(false);
		}
	}

	// useEffect(()=> {
	// 	if(!podlozhka){

	// 		let input = document.querySelectorAll('.nal-ostatok input')[index];
	// 		input.style.width = input.value.length * 8 + 4 + 'px';
	// 	}
	// },[focusInput])
	return (
		<>
			<tr>
				<td className="nal-ostatok" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div
						onMouseLeave={PlusMinusClose}
						onMouseEnter={PlusMinusOpen}
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<button onClick={BtnMinus}></button>
						{/* {formatNumber2(x.ostatok)} */}
						<input
							type="text"
							value={
								focusInput ? objProduct[index].ostatok : formatNumber2(objProduct[index].ostatok)
							}
							onChange={inputChange}
							onKeyUp={enterInput}
							onClick={() => setFocusInput(true)}
						/>
						{/* {console.log( formatNumber2(objProduct[index].ostatok))} */}
						<button onClick={BtnPlus}></button>/
					</div>
					{/* <div className="warehouse-nalichie">
            /<div>{formatNumber2(x.rezerv)}</div>
            <div>{formatNumber2(x.otpr)}</div>
            <div>{formatNumber2(x.vozvrat)}</div>
        </div> */}
				</td>
				<td className="nal-rezerv" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber2(objProduct[index].rezerv)}</div>
				</td>
				<td className="nal-otpr" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber2(objProduct[index].otpr)}</div>
				</td>
				<td className="nal-vozvrat" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber2(objProduct[index].vozvrat)}</div>
				</td>
				<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].zakupka)}
				</td>
				<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].prodazha)}
				</td>
				<td style={!swtichChecked ? { opacity: 0.5, textAlign: 'right' } : { textAlign: 'right' }}>
					{formatNumber(objProduct[index].marzha)}
				</td>
				<td className="summa-suma1" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div style={{ textAlign: 'right' }}>
						{formatNumber(objProduct[index].ostatok * objProduct[index].zakupka)}/
					</div>
				</td>
				<td className="summa-suma2" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber(objProduct[index].suma2)}</div>
				</td>
				<td className="summa-suma3" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber(objProduct[index].suma3)}</div>
				</td>
				<td className="summa-suma4" style={!swtichChecked ? { opacity: 0.5 } : {}}>
					<div>{formatNumber(objProduct[index].suma4)}</div>
				</td>
			</tr>
			{objProduct[index].podProduct?.length !== 0
				? objProduct[index].podProduct?.map((x, index2) => (
						<PodProductList2
							index2={index2}
							objProduct={objProduct}
							index={index}
							PlusMinusOpen={PlusMinusOpen}
							PlusMinusClose={PlusMinusClose}
							setObjProduct={setObjProduct}
							setIndexInput={setIndexInput}
							focusInput={focusInput}
							setFocusInput={setFocusInput}
							podlozhka={podlozhka}
							setPodlozhka={setPodlozhka}
						/>
				  ))
				: {}}
		</>
	);
};

export default WarehouseProductList2;

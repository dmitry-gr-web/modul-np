import React, { useEffect, useState, useRef } from 'react';

const PodProductList2 = ({
	objProduct,
	index,
	index2,
	PlusMinusOpen,
	PlusMinusClose,
	setObjProduct,
	setIndexInput,
	focusInput,
	setFocusInput,
	podlozhka,
	setPodlozhka,
}) => {
	const [swtichChecked, setSwitchChecked] = useState(
		objProduct[index].podProduct[index2].status.all
	);
	useEffect(() => {
		if (!objProduct[index].podProduct[index2].status.all) {
			setSwitchChecked(false);
		} else {
			setSwitchChecked(true);
		}
	}, [objProduct]);
	function BtnMinus(e) {
		let newobj = [...objProduct];
		if (newobj[index].podProduct[index2].ostatok !== 0) {
			newobj[index].podProduct[index2].ostatok = newobj[index].podProduct[index2].ostatok - 1;
		}
		setObjProduct(newobj);
	}
	function BtnPlus(e) {
		let newobj = [...objProduct];
		newobj[index].podProduct[index2].ostatok = newobj[index].podProduct[index2].ostatok + 1;
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
	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	const prev = usePrevious(objProduct[index].podProduct[index2].ostatok);
	function inputChange(e) {
		setIndexInput(index);
		setFocusInput(true);
		setPodlozhka(true);
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		let newobj = [...objProduct];
		newobj[index].podProduct[index2].ostatok = +e.target.value;
		setObjProduct(newobj);
	}
	function enterInput(e) {
		if (e.key === 'Enter') {
			if (podlozhka && prev !== objProduct[index].podProduct[index2].ostatok) {
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
	return (
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
							focusInput
								? objProduct[index].podProduct[index2].ostatok
								: formatNumber2(objProduct[index].podProduct[index2].ostatok)
						}
						onChange={inputChange}
						onKeyUp={enterInput}
					/>
					<button onClick={BtnPlus}></button>
					<span style={{ paddingLeft: 3 }}>/</span>
				</div>
			</td>
			<td className="nal-rezerv" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].rezerv)}</div>
			</td>
			<td className="nal-otpr" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].otpr)}</div>
			</td>
			<td className="nal-vozvrat" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber2(objProduct[index].podProduct[index2].vozvrat)}</div>
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
				<div style={{ textAlign: 'right',display: 'flex', justifyContent: 'end' }}>
					{formatNumber(
						objProduct[index].podProduct[index2].ostatok *
							objProduct[index].podProduct[index2].zakupka
					)}{' '}
					<span style={{ paddingLeft: 3 }}>/</span>
				</div>
			</td>
			<td className="summa-suma2" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma2)}</div>
			</td>
			<td className="summa-suma3" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma3)}</div>
			</td>
			<td className="summa-suma4" style={!swtichChecked ? { opacity: 0.5 } : {}}>
				<div>{formatNumber(objProduct[index].podProduct[index2].suma4)}</div>
			</td>
		</tr>
	);
};

export default PodProductList2;

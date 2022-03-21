import React, { useState, useEffect, useRef } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus, videoregistrator } from './img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WarehouseProductList from './components/warehouse/WarehouseProductList';
import WarehouseDropMenu from './components/warehouse/WarehouseDropMenu';

const Warehouse = () => {
	const [selectLink, setSelectLink] = useState(true);
	const [objProduct, setObjProduct] = useState([
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5649-1',
			country: '🇺🇦',
			currency: '₴',
			name: 'Nano USB 2.0 флешка для установки в компьютеры',
			attribute: '32 Гб',
			images: videoregistrator,
			ostatok: 10,
			rezerv: 1239,
			otpr: 2924,
			vozvrat: 655,
			zakupka: 157.0,
			prodazha: 349.0,
			marzha: 40.0,
			suma1: 1570.0,
			suma2: 17925.0,
			suma3: 2924.0,
			suma4: 655.0,
			select: false,
			podProduct: [
				{
					status: { all: true, rozetka: true, prom: true, crm: true },
					id: '5649-2',
					country: '🇺🇦',
					currency: '₴',
					images: videoregistrator,
					name: 'Nano USB 2.0 флешка для установки в компьютеры',
					attribute: '64 Гб',
					ostatok: 10,
					rezerv: 1239,
					otpr: 2924,
					vozvrat: 655,
					zakupka: 157.0,
					prodazha: 349.0,
					marzha: 25.0,
					suma1: 1570.0,
					suma2: 17925.0,
					suma3: 2924.0,
					suma4: 655.0,
					select: false,
				},
				{
					status: { all: true, rozetka: true, prom: true, crm: true },
					id: '5649-6.8',
					country: '🇺🇦',
					currency: '₴',
					images: videoregistrator,
					name: 'Nano USB 2.0 флешка для установки в компьютеры',
					attribute: '128 Гб, Синий',
					ostatok: 10,
					rezerv: 1239,
					otpr: 2924,
					vozvrat: 655,
					zakupka: 157.0,
					prodazha: 349.0,
					marzha: 20.0,
					suma1: 1570.0,
					suma2: 17925.0,
					suma3: 2924.0,
					suma4: 655.0,
					select: false,
				},
			],
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной',
			images: videoregistrator,
			ostatok: 0,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной',
			images: videoregistrator,
			ostatok: 1278,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной и дополнительный',
			images: videoregistrator,
			ostatok: 10000,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной',
			images: videoregistrator,
			ostatok: 0,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной',
			images: videoregistrator,
			ostatok: 0,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
		{
			status: { all: true, rozetka: true, prom: true, crm: true },
			id: '5648-0',
			country: '🇷🇺',
			currency: '₽',
			name: 'Чистящее средство VCle что то там средствто',
			attribute: 'Основной',
			images: videoregistrator,
			ostatok: 0,
			rezerv: 0,
			otpr: 4,
			vozvrat: 1,
			zakupka: 860.0,
			prodazha: 1260.0,
			marzha: 400.0,
			suma1: 0.0,
			suma2: 11924.0,
			suma3: 11924.0,
			suma4: 11924.0,
			select: false,
		},
	]);

	const [checked, setChecked] = useState(true);

	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [focusInput, setFocusInput] = useState(false);
	const [btnMenu, setBtnMenu] = useState(false);
	function PlusMinusOpen(e) {
		setBtnMenu(true);
		// e.querySelectorAll('button').forEach((x) => {
		// 	x.style.width = '16px';
		// });
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('input').focus();
	}
	function PlusMinusClose(e) {
		if (!podlozhka) {
			setBtnMenu(false);
			// e.querySelectorAll('button').forEach((x) => {
			// 	x.style.width = '0px';
			// });
			e.currentTarget.querySelector('input').blur();
		}
	}
	const [indexInput, setIndexInput] = useState(0);

	function clickPodlozhka() {
		setPodlozhka(false);
		setFocusInput(false);
		document.querySelectorAll('.warehouse-dropmenu .underline').forEach((x) => {
			x.style.width = '0%';
		});
		document.querySelectorAll('.nal-ostatok button').forEach((x) => {
			x.style.width = '0px';
		});

		let input = document.querySelectorAll('.nal-ostatok input')[indexInput];

		if (input.value.length >= 4) {
			// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
			input.style.width = input.value.length * 8 + 4 + 'px';
		}
		if (input.value.length >= 7) {
			input.style.width = input.value.length * 8 + 8 + 'px';
		}
		if (input.value.length < 4) {
			input.style.width = input.value.length * 8 + 'px';
		}
	}

	const [inputID, setInputID] = useState('');

	useEffect(() => {
		let curent = document.querySelectorAll('.while');
		let width = [];
		let res = 0;
		setTimeout(() => {
			for (let i = 0; i < curent.length; i++) {
				if (!switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu && i === 1) {
					width.push(0);
				}
				curent[i].style.left = res + 7 + 'px';
				res = width.reduce((prev, curr) => prev + curr, 0);
				curent[0].style.left = '7px';
			}
		}, 200);
		console.log(width);
	}, [objProduct, switchMenu]);
	const linkTR = useRef();
	const [lastIndex, setLastIndex] = useState(0);
	useEffect(() => {
		let curent = linkTR.current.querySelectorAll('th');
		let width = [];
		let res = 0;
		setTimeout(() => {
			for (let i = 0; i < 8; i++) {
				if (!switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu) {
					width.push(curent[i].offsetWidth);
				} else if (switchMenu && i === 1) {
					width.push(0);
				}
				curent[i].style.left = res + 7 + 'px';
				res = width.reduce((prev, curr) => prev + curr, 0);
				curent[0].style.left = '7px';
			}
		}, 200);
	}, [objProduct, switchMenu]);
	// document.addEventListener('keydown' , function(e){

	// 	e.preventDefault();
	// 	if (e.ctrlKey || e.metaKey && e.code.KeyA) {
	// 		let newobj = [...objProduct];
	// 		newobj.map(x => x.select = true);
	// 		setObjProduct(newobj);
	// 	}

	// });

	function formatNumber2(number) {
		let newnum = number.toLocaleString('ru-RU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newnum;
	}
	function formatNumber(number) {
		let newnum = number
			.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
			.replace(',', '.');
		return newnum;
	}
	//rascheti
	let ostatok =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.ostatok, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.ostatok, 0)));
	let rezerv =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.rezerv, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.rezerv, 0)));
	let otpr =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.otpr, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.otpr, 0)));
	let vozvrat =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.vozvrat, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.vozvrat, 0)));
	let zakupka =
		parseInt(objProduct.reduce((prev, curr, _, array) => prev + curr.zakupka, 0)) +
		parseInt(
			objProduct.map((x) => x.podProduct?.reduce((prev, curr, _, array) => prev + curr.zakupka, 0))
		);
	let prodazha =
		(parseInt(objProduct.reduce((prev, curr, _, array) => prev + curr.prodazha, 0)) +
			parseInt(
				objProduct.map((x) =>
					x.podProduct?.reduce((prev, curr, _, array) => prev + curr.prodazha, 0)
				)
			)) /
		(objProduct.length + parseInt(objProduct.map((x) => x.podProduct?.length)));
	let marzha =
		(parseInt(objProduct.reduce((prev, curr) => prev + curr.marzha, 0)) +
			parseInt(
				objProduct.map((x) => x.podProduct?.reduce((prev, curr, _, array) => prev + curr.marzha, 0))
			)) /
		(objProduct.length + parseInt(objProduct.map((x) => x.podProduct?.length)));
	let suma1 =
		parseInt(objProduct.map((x) => x.ostatok * x.zakupka).reduce((prev, curr) => prev + curr, 0)) +
		parseInt(
			objProduct.map((x) =>
				x.podProduct?.map((x) => x.ostatok * x.zakupka).reduce((prev, curr) => prev + curr, 0)
			)
		);
	let suma2 =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.suma2, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.suma2, 0)));
	let suma3 =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.suma3, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.suma4, 0)));
	let suma4 =
		parseInt(objProduct.reduce((prev, curr) => prev + curr.suma4, 0)) +
		parseInt(objProduct.map((x) => x.podProduct?.reduce((prev, curr) => prev + curr.suma4, 0)));
	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
			<div style={{ position: 'absolute', top: 0, right: 0 }}>
				Выбрано{' '}
				{parseInt(objProduct.filter((x) => x.select === true).length) +
					parseInt(objProduct.map((x) => x.podProduct?.filter((y) => y.select === true).length))}
			</div>

			<div
				style={{
					marginLeft: 74,
					paddingTop: 28,
					height: '100vh',
					width: '100%',
					background: 'white',
					display: 'flex',
					cursor: 'default',
				}}
			>
				<aside>
					<div className="warehouse-title">Склад</div>
					<nav className="warehouse-nav">
						<ul>
							<li onClick={() => setSelectLink(true)} className={selectLink ? 'select-link' : ''}>
								Товары
							</li>
							<li>Атрибуты</li>
							<li>Поставщики</li>
							<li>Движение товара</li>
						</ul>
					</nav>
				</aside>

				<div className="warehouse-products">
					<div className="warehouse-products-title">
						Товары
						<button>
							<SvGBtnPlus />
						</button>
					</div>
					<div className="shadow-right"></div>
					<SimpleBar style={{ display: 'flex', maxHeight: 200, maxWidth: 1150 }} autoHide={false}>
						{podlozhka && (
							<div
								className="warehouse-podlozhka"
								style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 3 }}
								onClick={clickPodlozhka}
							></div>
						)}
						<table style={{ width: '100%', height: '100%', paddingLeft: 7, paddingRight: 10 }}>
							<thead className="first-tab-header">
								<tr>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										style={{ textAlign: 'left', paddingLeft: 0, minWidth: 44 }}
										className="adaptive-switch-trigger while statusBefore"
									>
										Статус
									</th>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										className={
											switchMenu
												? 'adaptive-switch adaptive-switch-on while'
												: 'adaptive-switch while'
										}
										style={switchMenu ? { paddingRight: 10 } : {}}
									>
										<div>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
										</div>
									</th>
									<th className="while">ID</th>
									<th style={{ minWidth: 51 ,textAlign: 'left'}} className="while">Страна</th>
									<th style={{ minWidth: 51,textAlign: 'left' }} className="while">
										Валюта
									</th>
									<th className="while">Название </th>
									<th className="while">
										Атрибут
										{/* <div className="shadow-left"></div> */}
									</th>
									<th className="while shadow">
										<div className="shadow-left"></div>
									</th>
									<th colSpan={4}>Наличие</th>
									<th>Закупка</th>
									<th>Продажа</th>
									<th>Маржа</th>
									<th colSpan={4}>Сумма</th>
								</tr>
								<tr ref={linkTR}>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										className="adaptive-switch-trigger"
									>
										Поиск
									</th>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										className={
											switchMenu ? 'adaptive-switch adaptive-switch-on' : 'adaptive-switch'
										}
									>
										<div></div>
									</th>
									<th>
										<div style={{ width: '100%' }}>
											<input
												onChange={(e) => setInputID(e.target.value)}
												value={inputID}
												style={{ width: '100%', border: 'none', padding: 0, outline: 'none' }}
												type="text"
											/>
										</div>
									</th>
									<th>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'country'}
											objProduct={objProduct}
										/>
									</th>
									<th style={{ textAlign: 'left' }}>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'currency'}
											objProduct={objProduct}
										/>
									</th>
									<th style={{ textAlign: 'left' }}>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'name'}
											inputOn={true}
											objProduct={objProduct}
										/>
									</th>
									<th style={{ textAlign: 'left' }}>
										<WarehouseDropMenu
											setPodlozhka={setPodlozhka}
											podlozhka={podlozhka}
											type={'attribute'}
											inputOn={true}
											objProduct={objProduct}
										/>
									</th>
									<th className="shadow">
										<div className="shadow-left"></div>
									</th>
									<th className="nal-ostatok">
										<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
											{formatNumber(ostatok)}
											<span style={{ paddingLeft: 3 }}>/</span>
										</div>
									</th>
									<th className="nal-rezerv">
										<div>{formatNumber(rezerv)}</div>
									</th>
									<th className="nal-otpr">
										<div>{formatNumber(otpr)}</div>
									</th>
									<th className="nal-vozvrat">
										<div>{formatNumber(vozvrat)}</div>
									</th>
									<th style={{ textAlign: 'right' }}>{formatNumber(zakupka)}</th>
									<th style={{ textAlign: 'right' }}>{formatNumber(prodazha)}</th>
									<th style={{ textAlign: 'right' }}>{formatNumber(marzha)}</th>
									<th className="summa-suma1">
										<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
											{formatNumber(suma1)}
											<span style={{ paddingLeft: 3 }}>/</span>
										</div>
									</th>
									<th className="summa-suma2">
										<div>{formatNumber(suma2)}</div>
									</th>
									<th className="summa-suma3">
										<div>{formatNumber(suma3)}</div>
									</th>
									<th className="summa-suma4">
										<div>{formatNumber(suma4)}</div>
									</th>
								</tr>
								<tr>
									<th colSpan='18' className='shadow-vertical'>
										<div></div>
									</th>
								</tr>
							</thead>
							<tbody className="first-tab-body">
								{objProduct
									.filter((x) => x.id.toLowerCase().includes(inputID.toLowerCase()))
									.map((x, index) => (
										<WarehouseProductList
											index={index}
											setChecked={setChecked}
											checked={checked}
											objProduct={objProduct}
											switchMenu={switchMenu}
											setObjProduct={setObjProduct}
											setSwitchMenu={setSwitchMenu}
											PlusMinusOpen={PlusMinusOpen}
											PlusMinusClose={PlusMinusClose}
											podlozhka={podlozhka}
											setPodlozhka={setPodlozhka}
											focusInput={focusInput}
											setFocusInput={setFocusInput}
											setIndexInput={setIndexInput}
											setLastIndex={setLastIndex}
											lastIndex={lastIndex}
											btnMenu={btnMenu}
											setBtnMenu={setBtnMenu}
										/>
									))}
								{/* {console.log(objProduct[0]['id'])} */}
							</tbody>
							<tfoot>
								<tr>
									<td colSpan={18} style={{ height: 12 }}>
										<div className='shadow-vertical-2'></div>
									</td>
								</tr>
							</tfoot>
						</table>
						{/* <SimpleBar forceVisible="x" className="scroll-block" autoHide={false}>
							<table>
								<thead className="second-tab-header">
									<tr>
										<th colSpan={4}> Наличие</th>
										<th>Закупка</th>
										<th>Продажа</th>
										<th>Маржа</th>
										<th colSpan={4}>Сумма</th>
									</tr>
									<tr>
										<th> </th>
									</tr>
								</thead>
								<tbody className="second-tab-body">
									{objProduct
										.filter((x) => x.id.toLowerCase().includes(inputID.toLowerCase()))
										.map((x, index) => (
											<WarehouseProductList2
												PlusMinusOpen={PlusMinusOpen}
												PlusMinusClose={PlusMinusClose}
												setObjProduct={setObjProduct}
												index={index}
												podlozhka={podlozhka}
												setPodlozhka={setPodlozhka}
												setChecked={setChecked}
												checked={checked}
												focusInput={focusInput}
												setFocusInput={setFocusInput}
												objProduct={objProduct}
												switchMenu={switchMenu}
												setIndexInput={setIndexInput}
												setSwitchMenu={setSwitchMenu}
											/>
										))}
								</tbody>
							</table>
						</SimpleBar> */}
					</SimpleBar>
				</div>
			</div>
		</div>
	);
};

export default Warehouse;

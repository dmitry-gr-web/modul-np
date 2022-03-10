import React, { useState, useEffect } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus, videoregistrator } from './img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WarehouseProductList from './components/warehouse/WarehouseProductList';
import WarehouseProductList2 from './components/warehouse/WarehouseProductList2';

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
			marzha: 0.0,
			suma1: 1570.0,
			suma2: 17925.0,
			suma3: 2924.0,
			suma4: 655.0,
			podProduct: [
				{
					status: { all: true, rozetka: true, prom: true, crm: true },
					id: '5649-2',
					images: videoregistrator,
					name: 'Nano USB 2.0 флешка для установки в компьютеры',
					attribute: '64 Гб',
					ostatok: 10,
					rezerv: 1239,
					otpr: 2924,
					vozvrat: 655,
					zakupka: 157.0,
					prodazha: 349.0,
					marzha: 0.0,
					suma1: 1570.0,
					suma2: 17925.0,
					suma3: 2924.0,
					suma4: 655.0,
				},
				{
					status: { all: true, rozetka: true, prom: true, crm: true },
					id: '5649-6.8',
					images: videoregistrator,
					name: 'Nano USB 2.0 флешка для установки в компьютеры',
					attribute: '128 Гб, Синий',
					ostatok: 10,
					rezerv: 1239,
					otpr: 2924,
					vozvrat: 655,
					zakupka: 157.0,
					prodazha: 349.0,
					marzha: 0.0,
					suma1: 1570.0,
					suma2: 17925.0,
					suma3: 2924.0,
					suma4: 655.0,
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
		},
	]);

	const [checked, setChecked] = useState(true);

	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [focusInput, setFocusInput] = useState(false);
	function PlusMinusOpen(e) {
		e.currentTarget.querySelectorAll('button').forEach((x) => {
			x.style.width = '16px';
		});
		e.currentTarget.querySelector('input').select();
		e.currentTarget.querySelector('input').focus();
	}
	function PlusMinusClose(e) {
		if (!podlozhka) {
			e.currentTarget.querySelectorAll('button').forEach((x) => {
				x.style.width = '0px';
			});
			e.currentTarget.querySelector('input').blur();
		}
	}
	const [indexInput, setIndexInput] = useState(0);
	// function numRound(num, precision) {
	// 	return Math.round(num / precision) * precision;
	// }
	function clickPodlozhka() {
		setPodlozhka(false);
		setFocusInput(false);
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
	// function search(e) {
	// 	let newarr = [...objProduct];
	// 	newarr.filter(x => x.id.includes(e.target.value))
	// 	// console.log(newarr)
	// 	setObjProduct(newarr)
	// }
	const [inputID , setInputID] = useState('');
	// function searchText (typeData) {
	// 	return typeData.toLowerCase().includes(inputID.toLowerCase());
	// }

	// let newobj = objProduct.filter(x=> x.id.includes('0'));
	// console.log(newobj)
	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
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
				{podlozhka && (
					<div
						className="warehouse-podlozhka"
						style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 3 }}
						onClick={clickPodlozhka}
					></div>
				)}
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
					<SimpleBar style={{ display: 'flex', maxHeight: 150}}>
						<table style={{ width: '50%', paddingBottom: 15 , height: '100%'}}>
							<thead className="first-tab-header">
								<tr>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										style={{ textAlign: 'left', paddingLeft: 0, paddingRight: 10 }}
										className="adaptive-switch-trigger"
									>
										Статус
									</th>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										className={
											switchMenu ? 'adaptive-switch adaptive-switch-on' : 'adaptive-switch'
										}
										style={switchMenu ? { paddingRight: 10 } : {}}
									>
										<div>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
										</div>
									</th>
									<th style={{ paddingRight: 10 }}>ID</th>
									<th style={{ paddingRight: 10 }}>Страна</th>
									<th style={{ paddingRight: 10 }}>Валюта</th>
									<th style={{ paddingRight: 15 }}>Название </th>
									<th style={{ paddingRight: 15 }}>Атрибут</th>
								</tr>
								<tr>
									<th>
										Поиск
										
									</th>
									<th></th>
									<th>
										<div style={{width: '100%'}}>
											<input onChange={(e) => setInputID(e.target.value)} value={inputID} style={{width: '100%', border: 'none',padding: 0, outline: 'none'}} type="text" />
										</div>
									</th>
								</tr>
							</thead>
							<tbody className="first-tab-body">
								{objProduct.filter(x => x.id.toLowerCase().includes(inputID.toLowerCase())).map((x, index) => (
									
									<WarehouseProductList
										index={index}
										setChecked={setChecked}
										checked={checked}
										objProduct={objProduct}
										switchMenu={switchMenu}
										setObjProduct={setObjProduct}
										setSwitchMenu={setSwitchMenu}
									/>
									
								))}
								{/* {console.log(objProduct[0]['id'])} */}
							</tbody>
						</table>
						<SimpleBar forceVisible="x" className="scroll-block" autoHide={false}>
						
							<table>
								<thead className="second-tab-header">
									<tr>
										<th colSpan={4}>	<div class="shadow-left"></div>Наличие</th>
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
									{objProduct.filter(x => x.id.toLowerCase().includes(inputID.toLowerCase())).map((x, index) => (
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
						</SimpleBar>
					</SimpleBar>
				</div>
			</div>
		</div>
	);
};

export default Warehouse;

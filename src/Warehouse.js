import React, { useState, useEffect } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus } from './img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Warehouse = () => {
	const [selectLink, setSelectLink] = useState(true);
	let objProduct = [
		{
			status: { all: false, rozetka: false, prom: false, crm: false },
			id: '5649-1',
			country: '🇺🇦',
			currency: '₴',
			name: 'Nano USB 2.0 флешка для установки в компьютеры',
			attribute: '32 Гб',
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
	];
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
	const [checked, setChecked] = useState(true);
	useEffect(() => {
		if (document.querySelector('.switch-btn-warehouse input').checked === false) {
			document.querySelectorAll('.switch-btn-small').forEach((x) => {
				x.querySelector('input').checked = false;
			});
		} else {
			document.querySelectorAll('.switch-btn-small').forEach((x) => {
				x.querySelector('input').checked = true;
			});
		}
		console.log(document.querySelector('.switch-btn-warehouse input').checked);
	}, [checked]);

	const [switchMenu, setSwitchMenu] = useState(false);
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
					<div style={{ display: 'flex', maxHeight: 500, overflowY: 'auto', overflowX: 'hidden' }}>
						<table style={{ width: '50%', paddingBottom: 15 }}>
							<thead>
								<tr>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(false)}
										style={{ textAlign: 'left', paddingLeft: 0 }}
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
									>
										<div>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
										</div>
									</th>
									<th>ID</th>
									<th>Страна</th>
									<th>Валюта</th>
									<th>Название </th>
									<th>Атрибут</th>
								</tr>
							</thead>
							<tbody>
								{/* {console.log(objProduct)} */}
								{objProduct.map((x) => (
									<tr>
										<td
											onMouseEnter={() => setSwitchMenu(true)}
											onMouseLeave={() => setSwitchMenu(false)}
											className="adaptive-switch-trigger"
											style={{ paddingLeft: 0 }}
										>
											<label className="switch-btn-warehouse">
												<input
													type="checkbox"
													onChange={() => setChecked(!checked)}
													defaultChecked={checked}
												/>
												<span className="slider round"></span>
											</label>
										</td>
										<td
											style={!checked ? { opacity: 0.5 } : {}}
											onMouseEnter={() => setSwitchMenu(true)}
											onMouseLeave={() => setSwitchMenu(false)}
											className={
												switchMenu ? 'adaptive-switch adaptive-switch-on' : 'adaptive-switch'
											}
										>
											<div>
												<label className="switch-btn-small">
													<input type="checkbox" />
													<span className="slider round"></span>
												</label>

												<label style={{ margin: '0 15px' }} className="switch-btn-small">
													<input type="checkbox" />
													<span className="slider round"></span>
												</label>

												<label className="switch-btn-small">
													<input type="checkbox" />
													<span className="slider round"></span>
												</label>
											</div>
										</td>
										<td className="id-tovara" style={!checked ? { opacity: 0.5 } : {}}>
											{x.id}
										</td>
										<td
											style={
												!checked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }
											}
											className="flags"
										>
											{x.country}
										</td>
										<td
											style={
												!checked ? { opacity: 0.5, textAlign: 'center' } : { textAlign: 'center' }
											}
										>
											{x.currency}
										</td>
										<td className="name-tovara" style={!checked ? { opacity: 0.5 } : {}}>
											{x.name}
										</td>
										<td style={!checked ? { opacity: 0.5 } : {}}>{x.attribute}</td>
									</tr>
								))}
							</tbody>
						</table>
						<SimpleBar className="scroll-block" autoHide={false}>
							<table>
								<thead>
									<tr>
										<th colSpan={4}>Наличие</th>
										<th>Закупка</th>
										<th>Продажа</th>
										<th>Маржа</th>
										<th>Сумма</th>
									</tr>
								</thead>
								<tbody>
									{objProduct.map((x) => (
										<tr>
											<td className="nal-ostatok" style={!checked ? { opacity: 0.5 } : {}}>
												<div>{formatNumber2(x.ostatok)}/</div>
												{/* <div className="warehouse-nalichie">
													/<div>{formatNumber2(x.rezerv)}</div>
													<div>{formatNumber2(x.otpr)}</div>
													<div>{formatNumber2(x.vozvrat)}</div>
												</div> */}
											</td>
											<td className="nal-rezerv" style={!checked ? { opacity: 0.5 } : {}}>
												<div>{formatNumber2(x.rezerv)}</div>
											</td>
											<td className="nal-otpr" style={!checked ? { opacity: 0.5 } : {}}>
												<div>{formatNumber2(x.otpr)}</div>
											</td>
											<td className="nal-vozvrat" style={!checked ? { opacity: 0.5 } : {}}>
												<div>{formatNumber2(x.vozvrat)}</div>
											</td>
											<td style={!checked ? { opacity: 0.5 } : {}}>{formatNumber(x.zakupka)}</td>
											<td style={!checked ? { opacity: 0.5 } : {}}>{formatNumber(x.prodazha)}</td>
											<td style={!checked ? { opacity: 0.5 } : {}}>{formatNumber(x.marzha)}</td>
											<td style={!checked ? { opacity: 0.5 } : {}}>
												<div className="warehouse-summa">
													<div>{formatNumber(x.suma1)}</div>/<div>{formatNumber(x.suma2)}</div>
													<div>{formatNumber(x.suma3)}</div>
													<div>{formatNumber(x.suma4)}</div>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</SimpleBar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Warehouse;

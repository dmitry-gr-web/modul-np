import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Warehouse.scss';
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus } from '../../img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import WarehouseProductList from './WarehouseProductList';
import WarehouseDropMenu from './WarehouseDropMenu';
import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseInput from './WarehouseInput';

const Warehouse = () => {
	const [selectLink, setSelectLink] = useState(true);
	const [objProduct, setObjProduct] = useState(dataWarehouse);

	const [checked, setChecked] = useState(true);

	const [podlozhka, setPodlozhka] = useState(false);
	const [switchMenu, setSwitchMenu] = useState(false);
	const [focusInput, setFocusInput] = useState(false);

	const [indexInput, setIndexInput] = useState(0);
	const [btnMenu, setBtnMenu] = useState(false);
	const [flagSwitchMenu, setFlagSwitchMenu] = useState(false);
	// console.log(flagSwitchMenu);
	function clickPodlozhka() {
		setPodlozhka(false);
		setFocusInput(false);
		setFlagSwitchMenu(false);
		setSwitchMenu(false);
		// document.querySelectorAll('.warehouse-dropmenu .underline').forEach((x) => {
		// 	x.style.width = '0%';
		// });
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.style.visibility = 'visible';
		});
		document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
			x.style.width = '21px';
		});
		document.querySelectorAll('.adaptive-switch').forEach((x) => {
			x.classList.remove('adaptive-switch-on');
		});
		document.querySelectorAll('.adaptive-switch2').forEach((x) => {
			x.classList.remove('adaptive-switch-on2');
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

	// useEffect(() => {
	// 	let curent = document.querySelectorAll('.while');
	// 	let width = [];
	// 	let res = 0;
	// 	setTimeout(() => {
	// 		for (let i = 0; i < curent.length; i++) {
	// 			if (!switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu && i === 1) {
	// 				width.push(0);
	// 			}
	// 			curent[i].style.left = res + 7 + 'px';
	// 			res = width.reduce((prev, curr) => prev + curr, 0);
	// 			curent[0].style.left = '7px';
	// 		}
	// 	}, 200);
	// 	console.log(width);
	// }, [objProduct, switchMenu]);
	const linkTR = useRef();
	const [lastIndex, setLastIndex] = useState(0);
	// useEffect(() => {
	// 	let curent = linkTR.current.querySelectorAll('th');
	// 	let width = [];
	// 	let res = 0;
	// 	setTimeout(() => {
	// 		for (let i = 0; i < 8; i++) {
	// 			if (!switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu && i === 1) {
	// 				width.push(0);
	// 			}
	// 			curent[i].style.left = res + 7 + 'px';
	// 			res = width.reduce((prev, curr) => prev + curr, 0);
	// 			curent[0].style.left = '7px';
	// 		}
	// 	}, 200);
	// }, [objProduct, switchMenu]);
	const [selectAll, setSelectAll] = useState(false);
	useMemo(() => {
		if (!selectAll) {
			document.addEventListener('keydown', function (e) {
				if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
					e.preventDefault();
					setSelectAll(true);
					let newobj = [...objProduct];
					newobj.map((x) => (x.select = true));
					setObjProduct(newobj);
					console.log('asdasdasd');
				}
			});
		} else {
			document.addEventListener('click', function (e) {
				if (!e.target.closest('.warehouse-table')) {
					setSelectAll(false);
					let newobj = [...objProduct];
					newobj.map((x) => (x.select = false));
					setObjProduct(newobj);
				}
			});
		}
	}, [selectAll]);
	// useEffect(()=> {
	// 	document.addEventListener('click',function(e){
	// 		if(!e.target.className.includes('warehouse-table')) {
	// 			setSelectAll(false);
	// 			let newobj = [...objProduct];
	// 			newobj.map(x => x.select = false);
	// 			setObjProduct(newobj);
	// 		}
	// 	});
	// },[selectAll])
	function width() {
		let arr = [];
		document.querySelectorAll('.id-width').forEach((x) => {
			arr.push(x.offsetWidth);
		});
		let maxwidth = Math.max(...arr);
		document.querySelectorAll('.id-width').forEach((x) => {
			x.style.width = maxwidth + 'px';
		});

		let arr2 = [];
		document.querySelectorAll('.name-width').forEach((x) => {
			arr2.push(x.offsetWidth);
		});
		let maxwidth2 = Math.max(...arr2);
		document.querySelectorAll('.name-width').forEach((x) => {
			x.style.width = maxwidth2 + 'px';
		});

		let arr3 = [];
		document.querySelectorAll('.attribute-width').forEach((x) => {
			arr3.push(x.offsetWidth);
		});
		let maxwidth3 = Math.max(...arr3);
		document.querySelectorAll('.attribute-width').forEach((x) => {
			x.style.width = maxwidth3 + 'px';
		});
	}
	useEffect(() => {
		width();
	}, []);

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
	let ostatok = parseInt(objProduct.reduce((prev, curr) => prev + curr.ostatok, 0));
	let rezerv = parseInt(objProduct.reduce((prev, curr) => prev + curr.rezerv, 0));
	let otpr = parseInt(objProduct.reduce((prev, curr) => prev + curr.otpr, 0));
	let vozvrat = parseInt(objProduct.reduce((prev, curr) => prev + curr.vozvrat, 0));
	let zakupka = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.zakupka / array.length, 0)
	);
	let prodazha = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.prodazha / array.length, 0)
	);
	let marzha = parseInt(
		objProduct.reduce((prev, curr, _, array) => prev + curr.marzha / array.length, 0)
	);
	let suma1 = parseInt(
		objProduct.map((x) => x.ostatok * x.zakupka).reduce((prev, curr) => prev + curr, 0)
	);
	let suma2 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma2, 0));
	let suma3 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma3, 0));
	let suma4 = parseInt(objProduct.reduce((prev, curr) => prev + curr.suma4, 0));
	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
			<div style={{ position: 'absolute', top: 0, right: 0 }}>
				Выбрано {parseInt(objProduct.filter((x) => x.select === true).length)}
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
					<SimpleBar
						className="warehouse-table"
						style={{
							display: 'flex',
							maxHeight: 'calc(100vh - 149px)',
							marginBottom: '10px',
							maxWidth: 1150,
						}}
						autoHide={false}
					>
						{podlozhka && (
							<div
								className="warehouse-podlozhka"
								style={{ width: '100%', height: '100%', position: 'fixed', zIndex: 3 }}
								onClick={clickPodlozhka}
							></div>
						)}
						<table style={{ width: '100%', height: '100%', paddingLeft: 7, paddingRight: 10 }}>
							<thead className="first-tab-header">
								<tr>
									{/* <th style={{position:'sticky',left:'7px'}}>
					<div className='hover'></div>
					</th> */}
									<th className="statusBefore sticky-head">
										<div className="sticky-block">
											<div
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												// style={{ display: 'flex' }}
												className="sticky-block-children"
											>
												<div
													style={{
														textAlign: 'left',
														paddingLeft: 0,
														minWidth: 51,
														paddingRight: '10px',
													}}
												>
													Статус
												</div>
												<div
													style={
														switchMenu
															? {
																	transition: '0.2s',
																	paddingRight: '10px',
																	width: '85px',
																	display: 'flex',
																	justifyContent: 'space-between',
																	overflow: '',
															  }
															: {
																	transition: '0.2s',
																	overflow: 'hidden',
																	width: '0px',
																	paddingRight: '0px',
																	justifyContent: 'space-between',
																	display: 'flex',
															  }
													}
												>
													<img className="logo-mail" src={crmLogo} alt="" />
													<img className="logo-mail" src={rozetkaLogo} alt="" />
													<img className="logo-mail" src={promLogo} alt="" />
												</div>
											</div>

											<div className="id-width" style={{ paddingRight: '10px' }}>
												ID
											</div>
											<div style={{ paddingRight: '10px', minWidth: 51 }}>Страна</div>
											<div style={{ paddingRight: '10px', minWidth: 51 }}>Валюта</div>
											<div className="name-width" style={{ paddingRight: '15px' }}>
												Название
											</div>
											<div className="attribute-width" style={{ paddingRight: '3px' }}>
												Атрибут
											</div>
											<div className="shadow-left"></div>
										</div>
									</th>
									{/* <th className="while shadow">
										<div className="shadow-left"></div>
									</th> */}
									<th style={{paddingLeft: '12px',paddingRight: '15px'}} colSpan={4}>Наличие</th>
									<th style={{paddingRight:'15px'}}>Закупка</th>
									<th style={{paddingRight:'15px'}}>Продажа</th>
									<th style={{paddingRight:'15px'}}>Маржа</th>
									<th colSpan={4}>Сумма</th>
								</tr>
								<tr ref={linkTR}>
									{/* <th style={{position:'sticky',left:'7px'}}>
					<div className='hover'></div>
					</th> */}
									<th className="sticky-head">
										<div className="sticky-block">
											<div
												onMouseEnter={() => setSwitchMenu(true)}
												onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
												className="sticky-block-children"
												style={{maxWidth: '156px'}}
											>
												<div style={{ width: '51px', paddingRight: '10px' }}>
													<WarehouseDropMenu
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
													/>
												</div>
												<div
													// style={
													//  {
													// 				transition: '0.2s',
													// 				paddingRight: '10px',
													// 				// width: '85px',
													// 				maxWidth: '125px',
													// 				// minWidth:'85px',
													// 				display: 'flex',
													// 				justifyContent: 'space-between',
													// 				overflow: '',
													// 		  }
													
													// }
													style={
														switchMenu
															? {
																	transition: '0.2s',
																	paddingRight: '10px',
																	// width: '85px',
																	maxWidth: '125px',
																	display: 'flex',
																	justifyContent: 'space-between',
																	overflow: '',
															  }
															: {
																	transition: '0.2s',
																	overflow: 'hidden',
																	maxWidth: '0px',
																	paddingRight: '0px',
																	justifyContent: 'space-between',
																	display: 'flex',
															  }
													}
													className="block-3-btn"
												>
										
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
													/>
												
										
													<div style={{margin: '0 11px'}}>
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
													/>
													</div>
											
													<WarehouseDropMenu
														adaptive={true}
														setPodlozhka={setPodlozhka}
														podlozhka={podlozhka}
														type={'status'}
														objProduct={objProduct}
														setSwitchMenu={setSwitchMenu}
														switchMenu={switchMenu}
														setFlagSwitchMenu={setFlagSwitchMenu}
													/>
												</div>
											</div>

											<div className="id-width" style={{ paddingRight: '10px' }}>
												<WarehouseInput podlozhka={podlozhka} setPodlozhka={setPodlozhka} />
											</div>
											<div style={{ paddingRight: '10px', minWidth: 51 }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'country'}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
												/>
											</div>
											<div style={{ paddingRight: '10px', minWidth: 51 }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'currency'}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
												/>
											</div>
											<div className="name-width" style={{ paddingRight: '15px' }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'name'}
													inputOn={true}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
												/>
											</div>
											<div className="attribute-width" style={{ paddingRight: '3px' }}>
												<WarehouseDropMenu
													setPodlozhka={setPodlozhka}
													podlozhka={podlozhka}
													type={'attribute'}
													inputOn={true}
													objProduct={objProduct}
													setSwitchMenu={setSwitchMenu}
													switchMenu={switchMenu}
												/>
											</div>
											<div className="shadow-left"></div>
										</div>
									</th>
									{/* <th className="shadow">
										<div className="shadow-left"></div>
									</th> */}
									<th style={{paddingLeft: '12px',paddingRight: '3px'}} className="nal-ostatok">
										<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
											{formatNumber2(ostatok)}
											<span style={{ paddingLeft: 3 }}>/</span>
										</div>
									</th>
									<th className="nal-rezerv" style={{paddingRight: '4px'}}>
										<div>{formatNumber2(rezerv)}</div>
									</th>
									<th className="nal-otpr" style={{paddingRight: '4px'}}>
										<div>{formatNumber2(otpr)}</div>
									</th>
									<th className="nal-vozvrat" style={{paddingRight: '15px'}}>
										<div>{formatNumber2(vozvrat)}</div>
									</th>
									<th style={{ textAlign: 'right',paddingRight: '15px' }}>{formatNumber(zakupka)}</th>
									<th style={{ textAlign: 'right',paddingRight: '15px' }}>{formatNumber(prodazha)}</th>
									<th style={{ textAlign: 'right',paddingRight: '15px' }}>{formatNumber(marzha)}</th>
									<th className="summa-suma1">
										<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end',paddingRight:'3px' }}>
											{formatNumber(suma1)}
											<span style={{ paddingLeft: 3 }}>/</span>
										</div>
									</th>
									<th className="summa-suma2">
										<div style={{paddingRight: '4px'}}>{formatNumber(suma2)}</div>
									</th>
									<th className="summa-suma3">
										<div style={{paddingRight: '4px'}}>{formatNumber(suma3)}</div>
									</th>
									<th className="summa-suma4">
										<div>{formatNumber(suma4)}</div>
									</th>
								</tr>
								<tr>
									<th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										className="shadow-vertical"
									>
										<div></div>
									</th>
									{/* <th
										onMouseEnter={() => setSwitchMenu(true)}
										onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
										className="shadow-vertical"
									>
										<div></div>
									</th> */}
									<th colSpan="17" className="shadow-vertical">
										<div></div>
									</th>
								</tr>
							</thead>
							<tbody className="first-tab-body">
								{/* .filter((x) => x.id.toLowerCase().includes(inputID.toLowerCase())) */}
								{objProduct.map((x, index) => (
									<WarehouseProductList
										index={index}
										setChecked={setChecked}
										checked={checked}
										objProduct={objProduct}
										switchMenu={switchMenu}
										setObjProduct={setObjProduct}
										setSwitchMenu={setSwitchMenu}
										podlozhka={podlozhka}
										setPodlozhka={setPodlozhka}
										focusInput={focusInput}
										setFocusInput={setFocusInput}
										setIndexInput={setIndexInput}
										setLastIndex={setLastIndex}
										lastIndex={lastIndex}
										setBtnMenu={setBtnMenu}
										btnMenu={btnMenu}
										selectAll={selectAll}
										setSelectAll={setSelectAll}
										flagSwitchMenu={flagSwitchMenu}
									/>
								))}
								{/* {console.log(objProduct[0]['id'])} */}
							</tbody>
							<tfoot>
								<tr>
									<td colSpan={18} style={{ height: 12 }}>
										<div className="shadow-vertical-2"></div>
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

import React, { useState, useRef, useEffect } from 'react';
import DropMenu from '../dropMenu/dropMenu';
import './ProductCard.scss';
import ProductCardMenu from './ProductCardMenu';
import { rozetkaLogo, promLogo, crmLogo, SvgCalendar } from '../../img/svg-pack';

const ProductCard = ({ toggleCard, setToggleCard, setObjProduct, objProduct, getIndex }) => {
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
			{ id: 0, name: '🇷🇺', nameCountry: 'Россия', select: false },
			{ id: 1, name: '🇺🇦', nameCountry: 'Украина', select: false },
			{ id: 2, name: '🇹🇷', nameCountry: 'Турция', select: false },
		],
		currency: [
			{ id: 0, name: '$', select: false },
			{ id: 1, name: '€', select: false },
			{ id: 2, name: '₴', select: false },
			{ id: 3, name: '₽', select: false },
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
			{ id: 0, name: rozetkaLogo, select: true },
			{ id: 1, name: promLogo, select: false },
			{ id: 3, name: crmLogo, select: false },
		],
		description: [
			{ id: 0, name: 'Флешкарта', select: true },
			{ id: 1, name: 'Флешкарта-1', select: false },
			{ id: 3, name: 'Флешкарта-2', select: false },
		],
		delivery: [
			{ id: 1, name: 'icon-Union-3 icons', select: true },
			{ id: 2, name: 'icon-Vector-2 icons', select: false },
			{ id: 3, name: 'icon-ukrposhta icons', select: false },
			{ id: 4, name: 'icon-Union-4 icons', select: false },
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
		adapEl.style.left = '117px';
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
	function loadImg (e) {
		if (e.target.files[0]) {
			var fr = new FileReader();
		
			fr.addEventListener("load", function () {
			  // document.getElementById("labelImg").style.backgroundImage = "url(" + fr.result + ")";
			  document.getElementById("imgID").src = fr.result;
			}, false);
		
			fr.readAsDataURL(e.target.files[0]);
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
					<div>
						<button className="np-close" onClick={() => setToggleCard(false)}></button>
					</div>
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
							<div style={{ marginTop: '30px' }}>
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
												<img
													style={{ width: '16px', height: '16px' }}
													src={objProduct[getIndex].images}
													alt=""
												/>
												<img id='imgID' src=""/>
												<label for="pct" id="labelImg" />
												<input onChange={loadImg} type="file" id="pct" />
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
									</tbody>
								</table>
							</div>
							<div style={{ marginTop: '30px' }}>
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
							<div style={{ marginTop: '30px' }}>
								<div className="header-text">Информация</div>
								<table>
									<tbody>
										<tr>
											<td>Создал:</td>
											<td>
												<SvgCalendar /> Завхоз склада Михаил Пронск...
											</td>
										</tr>
										<tr>
											<td>Изменил:</td>
											<td>
												<SvgCalendar /> 14.01.2021 19:54:12
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
							/>
						</div>

						<div className="attr-block">
							<div className="header-text">Атрибут</div>
							<div>
								<table>
									<thead>
										<tr>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
											<th>asdas</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td>8</td>
										</tr>
									</tbody>
								</table>
							</div>
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

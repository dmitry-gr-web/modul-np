import React, { useState, useRef,useEffect } from 'react';
import DropMenu from '../dropMenu/dropMenu';
import './ProductCard.scss';
import ProductCardMenu from './ProductCardMenu';

const ProductCard = ({ toggleCard, setToggleCard, setObjProduct, objProduct, getIndex }) => {
	const [openCardMenu, setOpenCardMenu] = useState(false);
	const [podlozhka, setPodlozhka] = useState(false);
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
	function onClick(type, targetBlock) {
		let posEl = targetBlock?.getBoundingClientRect();
		let adapEl = document.querySelector('.productMenu');
		let block = document.querySelector('.product-card').getBoundingClientRect();
		adapEl.style.top = posEl?.y - block.y + 'px';
		adapEl.style.left = '117px';
		adapEl.style.width = '202px';
		setOpenCardMenu(true);
		setPodlozhka(true);
		// console.log(posEl.y - block.y);

		// if (types === 'day') {
		// 	setType('day');
		// 	adapEl.style.top = posEl?.y - block.y + 'px';
		// 	adapEl.style.left = '0px';
		// 	adapEl.style.width = '202px';
		// }
		// if (types === 'status') {
		// 	setType('status');
		// 	adapEl.style.top = posEl?.y - block.y + 'px';
		// 	adapEl.style.left = '210px';
		// 	adapEl.style.width = '503px';
		// }
		// if (types === 'statusNV') {
		// 	setType('statusNV');
		// 	adapEl.style.top = posEl?.y - block.y + 'px';
		// 	adapEl.style.left = '0px';
		// 	adapEl.style.width = '202px';
		// }
		// if (types === 'statusCrm') {
		// 	setType('statusCrm');
		// 	adapEl.style.top = posEl?.y - block.y + 'px';
		// 	adapEl.style.left = '212px';
		// 	adapEl.style.width = '202px';
		// }
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
	const [countryArr, setCountryArr] = useState([
		// { id: 0, name: 'Все', select: true },
		{ id: 0, name: '🇷🇺', nameCountry : 'Россия',select: false },
		{ id: 1, name: '🇺🇦', nameCountry : 'Украина',select: false },
		{ id: 2, name: '🇹🇷', nameCountry : 'Турция',select: false },
	]);
	useEffect(()=> {
		setCountryArr([...countryArr.map(x => {
			if(x.name === objProduct[getIndex].country){
				return {...x, select : true};
			} else {
				return {...x};
			}
		})])
	},[])
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
			<div class="bg"></div>
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
								<div class="header-text">Товар</div>
								<table>
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
										<td>Розничный магазин</td>
									</tr>
									<tr>
										<td>Страна:</td>
										<td>
											<div id="strana" className='btn-product-menu' onClick={(e) => onClick('', e.target)}>
												<span className="flags" style={{ fontSize: '16px' }}>
													{countryArr.filter(x => x.select === true)[0]?.name}
												</span>
											</div>
										</td>
									</tr>
									<tr>
										<td>Валюта:</td>
										<td>{objProduct[getIndex].currency}</td>
									</tr>
								</table>
							</div>
							<div style={{ marginTop: '30px' }}>
								<div class="header-text">Платформа</div>
								<table>
									<tr>
										<td>Вид:</td>
										<td>Nano USB 2.0 флешка Intel ilicon p...</td>
									</tr>
									<tr>
										<td>Фото:</td>
										<td>
											<img
												style={{ width: '16px', height: '16px' }}
												src={objProduct[getIndex].images}
												alt=""
											/>
										</td>
									</tr>
									<tr>
										<td>Тип:</td>
										<td></td>
									</tr>
									<tr>
										<td>Категория:</td>
										<td></td>
									</tr>
								</table>
							</div>
							<div style={{ marginTop: '30px' }}>
								<div class="header-text">Доставка</div>
								<table>
									<tr>
										<td>Вид:</td>
										<td>Nano USB 2.0 флешка Intel ilicon p...</td>
									</tr>
									<tr>
										<td>Описание:</td>
										<td>Розничный магазин, Оптовый м...</td>
									</tr>
								</table>
							</div>
							<div style={{ marginTop: '30px' }}>
								<div class="header-text">Информация</div>
								<table>
									<tr>
										<td>Создал:</td>
										<td>Nano USB 2.0 флешка Intel ilicon p...</td>
									</tr>
									<tr>
										<td>Изменил:</td>
										<td>Розничный магазин, Оптовый м...</td>
									</tr>
								</table>
							</div>
							<ProductCardMenu
								openCardMenu={openCardMenu}
								searchLine={searchLine}
								inputRef={inputRef}
								countryArr={countryArr}
								setCountryArr={setCountryArr}
								setPodlozhka={setPodlozhka}
								setOpenCardMenu={setOpenCardMenu}
							/>
						</div>

						<div class="attr-block">
							<div class="header-text">Атрибут</div>
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

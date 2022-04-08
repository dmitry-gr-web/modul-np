import React from 'react';
import DropMenu from '../dropMenu/dropMenu';
import './ProductCard.scss';

const ProductCard = ({ toggleCard, setToggleCard, setObjProduct, objProduct, getIndex }) => {
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
										<td>Старана:</td>
										<td>
											<div>
												<span className="flags">{objProduct[getIndex].country}</span>
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

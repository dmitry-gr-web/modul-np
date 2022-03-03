import { useState, useEffect } from 'react';
import './npTtnDeafult.scss';

const NpTtnDefault = (props) => {
	const [addresViddilenya, setAddresViddilenya] = useState(true);
	useEffect(() => {
		if (
			props.data3.data.tehnologiaDostavki[0].select === true ||
			props.data3.data.tehnologiaDostavki[1].select === true
		) {
			setAddresViddilenya(true);
		} else {
			setAddresViddilenya(false);
		}
		console.log(addresViddilenya);
	}, [props.data3.data.tehnologiaDostavki, addresViddilenya]);

	// function clickSwitch(e) {
	// 	document.getElementById('tooltipBtn').style.fontSize = '12px';

	// 	// e.target.querySelector('input[type="checkbox"]').click();
	// 	if (e.target.checked) {
	// 		e.target.checked = false;
	// 	} else {
	// 		e.target.checked = true;
	// 	}
	// }
	return (
		<table className="np-ttn-default">
			<thead>
				<tr>
					<th>
						<div className="shadow-gradient"></div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Відправник:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('vidpravnik', e.target)}
						>
							<span>{props.data3.data.vidpravnik.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipDostavki', e.target)}
						>
							<span>{props.data3.data.tipDostavki.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipDostavki', e.target)}
						>
							<span>{props.data3.data.tipDostavki.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipDostavki', e.target)}
						>
							<span>{props.data3.data.tipDostavki.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipDostavki', e.target)}
						>
							<span>{props.data3.data.tipDostavki.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipDostavki', e.target)}
						>
							<span>{props.data3.data.tipDostavki.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Технологія доставки:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tehnologiaDostavki', e.target)}
						>
							<span>
								{props.data3.data.tehnologiaDostavki.filter((x) => x.select === true)[0]?.name}
							</span>
						</div>
					</td>
				</tr>
				{!addresViddilenya && (
					<tr>
						<td>Адреса вiдправки:</td>
						<td>
							<div
								onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
								onMouseLeave={props.toolTipOff}
								className="medium-btn"
								onClick={(e) => props.openMediumMenu('adresaVidpravnika', e.target)}
							>
								<span>
									{props.data3.data.adresaVidpravnika.filter((x) => x.select === true)[0]?.name}
								</span>
							</div>
						</td>
					</tr>
				)}

				{addresViddilenya && (
					<>
						<tr>
							<td>Назва мiста вiдправки:</td>
							<td>
								<div
									onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
									onMouseLeave={props.toolTipOff}
									className="medium-btn"
									onClick={(e) => props.openMediumMenu('nazvaMista', e.target)}
								>
									<span>
										{props.data3.data.nazvaMista.filter((x) => x.select === true)[0]?.name}
									</span>
								</div>
							</td>
						</tr>
						<tr>
							<td>Вiддiлення вiдправки:</td>
							<td>
								<div
									onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
									onMouseLeave={props.toolTipOff}
									className="medium-btn"
									onClick={(e) => props.openMediumMenu('viddilenyaVidpravku', e.target)}
								>
									<span>
										{props.data3.data.viddilenyaVidpravku.filter((x) => x.select === true)[0]?.name}
									</span>
								</div>
							</td>
						</tr>
					</>
				)}

				<tr>
					<td>Платник відправлення:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('platnikVidpravlenya', e.target)}
						>
							<span>
								{props.data3.data.platnikVidpravlenya.filter((x) => x.select === true)[0]?.name}
							</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Платник зворотної до... :</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('platnikZvorotnoiDostavki', e.target)}
						>
							<span>
								{
									props.data3.data.platnikZvorotnoiDostavki.filter((x) => x.select === true)[0]
										?.name
								}
							</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Тип оплати:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('tipOplati', e.target)}
						>
							<span>{props.data3.data.tipOplati.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr>
				{/* <tr>
					<td>Форма сплати:</td>
					<td>
						<div
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerHTML)}
							onMouseLeave={props.toolTipOff}
							className="medium-btn"
							onClick={(e) => props.openMediumMenu('formaOplati', e.target)}
						>
							<span>{props.data3.data.formaOplati.filter((x) => x.select === true)[0]?.name}</span>
						</div>
					</td>
				</tr> */}
				<tr>
					<td>Відправ-ня не в коробці</td>
					<td>
						<span className="switch-btn">
							<label
								className="switch"
					
						
						
							>
								<input type="checkbox"
								 />
								<span className="slider round another"
											onMouseEnter={(e) => {
												props.toolTipOn(
													e,
													e.target.offsetParent.children[0].checked
														? 'Выключить'
														: 'Включить'
												);
												console.log(e.target)
											}}
											onClick={(e) => {
												props.toolTipOn(
													e,
													e.target.offsetParent.querySelector('input').checked
														? 'Выключен'
														: 'Включён'
												);
												props.offTimerTooltip();
												// clickSwitch(e);
												console.log(e.target.offsetParent.querySelector('input').checked)
											}}
											onMouseLeave={props.toolTipOff}
								></span>
							</label>
						</span>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>
						<div className="shadow-gradient"></div>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};
export default NpTtnDefault;

import DropMenu from '../dropMenu/dropMenu';
import './npTtnDeafult.scss';
const NpTtnDefault = (props) => {
	return (
		<table className="np-ttn-default">
			<tbody>
				<tr>
					<td>Відправник:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Назва мiста вiдправки:</td>
					<td>
						<DropMenu data={props.data2} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Відділення вiдправки:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Технологія доставки:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Тип доставки:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Платник відправлення:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Платник зворотної до... :</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Тип оплати:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Форма сплати:</td>
					<td>
						<DropMenu data={props.data} podlozhka={props.podlozhka} btnOff={props.btnOff} />
					</td>
				</tr>
				<tr>
					<td>Відправ-ня не в коробці</td>
					<td>
						<div className="switches">
							<span className="switch-btn">
								<label className="switch">
									<input type="checkbox" />
									<span className="slider round"></span>
								</label>
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};
export default NpTtnDefault;

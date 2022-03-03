import './dropMenu2.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const DropMenu2 = (props) => {
	function selectFilter(id) {
		let newArr = props.data.map((x) => {
			if (x.id === id) return { ...x, select: true };
			else return { ...x, select: false };
		});
		let obj = { ...props.dataChange };
		if (props.type === 'vidpravnik') {
			obj.data = {
				...props.dataChange.data,
				vidpravnik: newArr,
			};
		}
		if (props.type === 'nazvaMista') {
			obj.data = {
				...props.dataChange.data,
				nazvaMista: newArr,
			};
		}
		if (props.type === 'tipDostavki') {
			obj.data = {
				...props.dataChange.data,
				tipDostavki: newArr,
			};
		}
		if (props.type === 'punktVidachi') {
			obj.data = {
				...props.dataChange.data,
				punktVidachi: newArr,
			};
		}
		if (props.type === 'viddilenyaVidpravku') {
			obj.data = {
				...props.dataChange.data,
				viddilenyaVidpravku: newArr,
			};
		}
		if (props.type === 'tipDostavki') {
			obj.data = {
				...props.dataChange.data,
				tipDostavki: newArr,
			};
		}
		if (props.type === 'adresaVidpravnika') {
			obj.data = {
				...props.dataChange.data,
				adresaVidpravnika: newArr,
			};
		}
		if (props.type === 'platnikVidpravlenya') {
			obj.data = {
				...props.dataChange.data,
				platnikVidpravlenya: newArr,
			};
		}
		if (props.type === 'platnikZvorotnoiDostavki') {
			obj.data = {
				...props.dataChange.data,
				platnikZvorotnoiDostavki: newArr,
			};
		}
		if (props.type === 'tipOplati') {
			obj.data = {
				...props.dataChange.data,
				tipOplati: newArr,
			};
		}
		if (props.type === 'formaOplati') {
			obj.data = {
				...props.dataChange.data,
				formaOplati: newArr,
			};
		}
		if (props.type === 'tehnologiaDostavki') {
			obj.data = {
				...props.dataChange.data,
				tehnologiaDostavki: newArr,
			};
		}

		props.setDataChange(obj);
		props.setOpenMenuMedium(false);
		props.podlozhka(false);
	}

	function searchInput(e) {
		if (props.inputRef2.current.value.length === 1) {
			props.inputRef2.current.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}

		props.setValueAdaptiveMenu(e.target.value);
	}

	return (
		<div
			className="dropMenu2"
			style={props.openMenuMedium ? { visibility: 'visible' } : { visibility: 'hidden' }}
		>
		
				<div className={props.inputOn && props.openMenuMedium ? 'btn-menu-input toggle' : 'btn-menu-input'}>
					<input onChange={(e) => searchInput(e)} ref={props.inputRef2} type="text" />
					<div
						className="count"
						onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
						onMouseLeave={props.toolTipOff}
					>
						(
						{props.data.length > 0 &&
							props.data.filter((x) =>
								x.name.toLowerCase().includes(props.valueAdaptiveMenu.toLowerCase())
							).length}
						)
					</div>
				</div>
		
			<SimpleBar
				className={props.openMenuMedium ? 'block-menu block-menu-toggle' : 'block-menu'}
				autoHide={false}
			>
				{/* {console.log(props.data)} */}
				{props.data
					.filter((x) => x.name.toLowerCase().includes(props.valueAdaptiveMenu.toLowerCase()))
					.map((x, index) => (
						<li
							key={x.id}
							onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
							onMouseLeave={props.toolTipOff}
							onClick={(e) => selectFilter(x.id)}
							className={x.select ? 'menu-list menu-select-filter' : 'menu-list'}
						>
							<span
								dangerouslySetInnerHTML={{
									__html: props.searchLine(x.name, props.valueAdaptiveMenu),
								}}
							></span>
						</li>
					))}
			</SimpleBar>
		</div>
	);
};
export default DropMenu2;

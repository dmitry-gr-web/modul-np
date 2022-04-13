import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ProductMenu.scss';

const ProductCardMenu = ({
	openCardMenu,
	typeData,
	setOpenCardMenu,
	inputRef,
	dataCurrent,
	searchLine,
	inputOn,
	data,
	setData,
	setPodlozhka,
}) => {
	const [value, setValue] = useState('');
	// if (type === 'country') {

	// }

	// useEffect(() => {
	// 	let newarr = [...countryArr];
	// 	newarr.filter((x) => {
	// 		if (x.name === document.getElementById('strana').innerText) {
	// 			x.select = true;
	// 		}
	// 	});
	// 	setCountryArr(newarr);
	// }, []);
	function selectFunc(id) {
		// let newarr = [...countryArr];
		// newarr.map((x) => {
		// 	if (x.id === id) return { ...x, select: true };
		// 	else return { ...x, select: false };
		// });
		// if(type === '')
		let newarr = data.map((x) => {
			if (x.id === id) return { ...x, select: true };
			else return { ...x, select: false };
		});
		// setData(newarr);
		setData({ ...dataCurrent, [typeData]: [...newarr] });
		setOpenCardMenu(false);
		setPodlozhka(false);
	}
	return (
		<div
			className="productMenu"
			style={openCardMenu ? { visibility: 'visible' } : { visibility: 'hidden' }}
		>
			<div className={inputOn && openCardMenu ? 'btn-menu-input toggle' : 'btn-menu-input'}>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					ref={inputRef}
					type="text"
				/>
				<div
					className="count"
					// onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					// onMouseLeave={props.toolTipOff}
				>
					(
					{/* {props.data.length > 0 &&
						props.data.filter((x) =>
							x.name.toLowerCase().includes(props.valueAdaptiveMenu.toLowerCase())
						).length} */}
					)
				</div>
			</div>

			<SimpleBar
				className={openCardMenu ? 'block-menu block-menu-toggle' : 'block-menu'}
				autoHide={false}
			>
				{/* {console.log(props.data)} */}
				{data
					?.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()))
					.map((x, index) => (
						<li
							key={x.id}
							// onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
							// onMouseLeave={props.toolTipOff}
							onClick={(e) => selectFunc(x.id)}
							className={x.select ? 'menu-list menu-select-filter' : 'menu-list'}
						>
							{typeData === 'vidPlatformi' ? (
								<img src={x.name} />
							) : typeData === 'delivery' ? (
								<span className={x.name}></span>
							) : (
								<span
									className={typeData === 'flags' ? 'flags' : ''}
									dangerouslySetInnerHTML={{
										__html: searchLine(x.name, value),
									}}
								></span>
							)}
							{/* {typeData === 'delivery' ? <span className={x.name}></span> : ''} */}
							<div style={{ marginLeft: '5px' }}>{x.nameCountry}</div>
						</li>
					))}
			</SimpleBar>
		</div>
	);
};

export default ProductCardMenu;

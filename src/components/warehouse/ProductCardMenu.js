import React, { useState,useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ProductMenu.scss';

const ProductCardMenu = ({ openCardMenu,setOpenCardMenu, inputRef, searchLine, inputOn,setCountryArr, countryArr , setPodlozhka}) => {
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
		let newarr = countryArr.map((x) => {
			if (x.id === id) return { ...x, select: true };
			else return { ...x, select: false };
		});
		setCountryArr(newarr);
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
					// onChange={(e) => searchInput(e)}
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
				{countryArr
					.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()))
					.map((x, index) => (
						<li
							key={x.id}
							// onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
							// onMouseLeave={props.toolTipOff}
							onClick={(e) => selectFunc(x.id)}
							className={x.select ? 'menu-list menu-select-filter' : 'menu-list'}
						>
							<span
								className="flags"
								dangerouslySetInnerHTML={{
									__html: searchLine(x.name, value),
								}}
							></span><div style={{marginLeft: '5px'}}>{x.nameCountry}</div>
						</li>
					))}
			</SimpleBar>
		</div>
	);
};

export default ProductCardMenu;

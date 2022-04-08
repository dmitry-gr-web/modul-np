import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ProductCardMenu = () => {
	return (
		<div
			className="dropMenu2"
			style={props.openMenuMedium ? { visibility: 'visible' } : { visibility: 'hidden' }}
		>
			<div
				className={
					props.inputOn && props.openMenuMedium ? 'btn-menu-input toggle' : 'btn-menu-input'
				}
			>
				<input onChange={(e) => searchInput(e)} ref={props.inputRef2} type="text" />
				<div
					className="count"
					// onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					// onMouseLeave={props.toolTipOff}
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

export default ProductCardMenu;

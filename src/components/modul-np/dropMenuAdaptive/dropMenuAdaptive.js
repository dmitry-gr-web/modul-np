import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './dropMenuAdaptive.scss';
export default function DropMenuAdaptive(props) {
	function searchInput(e) {
		if (props.inputRef.current.value.length === 1) {
			props.inputRef.current.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		props.setValueAdaptiveMenu(e.target.value);
	}
	function selectFilter(id) {
		if (props.multiSelectOn) {
			let temp = { ...props.dataChange };
			let newArr = props.data[props.index].map((x) => {
				if (x.id === id && x.name.includes('Все')) {
					props.setOpenMenu(false);
					props.podlozhka(false);
					return { ...x, select: true };
				} else if (id === 1) {
					return { ...x, select: false };
				} else if (x.id === id && x.id !== 1) {
					return { ...x, select: !x.select };
				} else if (id !== 1 && x.id === 1) {
					return { ...x, select: false };
				} else if (
					x.id === id &&
					props.data[props.index].filter((x) => x.select === true).length > 1
				)
					return { ...x, select: !x.select };
				else if (
					x.id === id &&
					props.data[props.index].filter((x) => x.select === true).length === 1 &&
					!x.select
				)
					return { ...x, select: !x.select };
				else return x;
			});

			if (props.type === 'status') {
				temp.data.status[props.index] = [...newArr];
			} else if (props.type === 'statusAccept') {
				temp.data.statusAccept[props.index] = [...newArr];
			}
			props.setDataChange(temp);
		} else {
			let temp = { ...props.dataChange };

			let newArr = props.data[props.index].map((x) => {
				if (x.id === id) return { ...x, select: true };
				else return { ...x, select: false };
			});
			if (props.type === 'day') {
				temp.data.day[props.index] = [...newArr];
				// props.setCarouselDrop(true);
			}
			if (props.type === 'statusNV') {
				temp.data.statusNV[props.index] = [...newArr];
			}
			if (props.type === 'statusCrm') {
				temp.data.statusCrm[props.index] = [...newArr];
			}

			props.setDataChange(temp);
			props.setOpenMenu(false);
			props.podlozhka(false);
		}
		if (props.btnTogglePage && props.carouselDrop.carousel === true) {
			setTimeout(() => {
				if (props.carouselDrop.menu === 2) {
					let targetBlock =
						document.querySelectorAll('.targetBlock')[props.dataChange.data.day.length - 1];
					props.openAdaptiveMenu('status', targetBlock);
				}
				props.setMultiselect(true);
				props.setOpenMenu(true);
				props.podlozhka(true);
				props.setCarouselDrop({ ...props.carouselDrop, carousel: false });
			}, 70);
		} else if (!props.btnTogglePage && props.carouselDrop.carousel === true) {
			setTimeout(() => {
			if (props.carouselDrop.menu === 2) {
				props.setMultiselect(false);
				let targetBlock =
				document.querySelectorAll('.targetBlock')[props.dataChange.data.statusNV.length - 1];
				props.openAdaptiveMenu('statusCrm', targetBlock);
				props.setCarouselDrop({ ...props.carouselDrop, menu: 3 });
				console.log(props.carouselDrop)
			}
			
			if (props.carouselDrop.menu === 3) {
				props.setMultiselect(true);
				let targetBlock =
				document.querySelectorAll('.targetBlock')[props.dataChange.data.statusNV.length - 1];
				props.openAdaptiveMenu('statusAccept', targetBlock);
				console.log(props.carouselDrop)
				props.setCarouselDrop({ ...props.carouselDrop, carousel: false });
			}
			console.log(props.carouselDrop)
			props.setOpenMenu(true);
			props.podlozhka(true);
		
			}, 70);
		}
	}

	return (
		<div
			className="dropMenuAdaptive"
			style={props.openMenu ? { visibility: 'visible' } : { visibility: 'hidden' }}
		>
			<div
				className={
					props.openMenu && props.podlozhkaToggle ? 'btn-menu-input toggle' : 'btn-menu-input'
				}
			>
				<input onChange={(e) => searchInput(e)} ref={props.inputRef} type="text" />
				<div
					onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
					onMouseLeave={props.toolTipOff}
					className="count"
				>
					(
					{props.data.length > 0 &&
						props.data[props.index]?.filter(
							(x) =>
								x.name !== 'Все' &&
								x.name.toLowerCase().includes(props.valueAdaptiveMenu.toLowerCase())
						)?.length}
					{props.type === 'statusAccept' || props.type === 'status' ? (
						<span>
							/
							<b style={{ fontWeight: 500 }}>
								{props.data.length > 0 &&
									props.data[props.index]?.filter((x) => x.name !== 'Все' && x.select === true)
										.length}
							</b>
						</span>
					) : (
						''
					)}
					)
				</div>
			</div>

			<SimpleBar
				className={
					props.openMenu && props.podlozhkaToggle
						? 'block-menu block-menu-another-toggle'
						: 'block-menu'
				}
				autoHide={false}
			>
				{/* <li className='menu-list'><span>Все</span></li> */}
				{props.data.length > 0 &&
					props.data[props.index]
						?.filter((x) => x.name.toLowerCase().includes(props.valueAdaptiveMenu.toLowerCase()))
						.map((x) => (
							<li
								onMouseEnter={(e) => props.toolTipOn(e, e.target.innerText)}
								onMouseLeave={props.toolTipOff}
								className={x.select ? 'menu-list menu-select-filter' : 'menu-list'}
								onClick={(e) => selectFilter(x.id)}
								key={x.id}
							>
								<span
									className={
										props.type === 'status' ||
										props.type === 'statusCrm' ||
										props.type === 'statusAccept'
											? 'color-form ' + x.status
											: ''
									}
									dangerouslySetInnerHTML={{
										__html: props.searchLine(x.name, props.valueAdaptiveMenu),
									}}
								></span>
							</li>
						))}
			</SimpleBar>
		</div>
	);
}

// export default DropMenuAdaptive;

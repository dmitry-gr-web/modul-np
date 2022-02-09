import './dropMenu.scss';
import { useState, useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const DropMenu = (props) => {
	let dataUser = props.data;
	const [arr, setArr] = useState([
		...dataUser.map((e, index) => {
			if (e.select) {
				return { ...e };
			} else {
				if (index === 0 && dataUser.filter((x) => x.select === true).length === 0) {
					return { ...e, select: true };
				} else {
					return { ...e, select: false };
				}
			}
		}),
	]);
	const [clickMenu, setClickMenu] = useState(false);
	const inputRef = useRef();
	useEffect(() => {
		if (!props.btnOff) {
			setClickMenu(false);
			if (props.dataChange) {
				if (props.btnTogglePage) {
					let temp = { ...props.dataChange };
					if (props.statusOn) {
						temp.back.status[props.index] = [...arr];
					} else if (props.day) {
						temp.back.day[props.index] = [...arr];
					}
					props.setDataChange(temp);
				} else {
					let temp = { ...props.dataChange };

					if (props.statusNV) {
						temp.statusAuto.statusNV[props.index] = [...arr.map(x=> {return {...x}})];
					} else if (props.statusCrm) {
						temp.statusAuto.statusCrm[props.index] = [...arr.map(x=> {return {...x}})];
					} else if (props.statusAccept) {
						temp.statusAuto.statusAccept[props.index] = [...arr.map(x=> {return {...x}})];
					}
					props.setDataChange(temp);
				}
				// else {
				// 	temp.status[props.index] = [...arr];
				// 	props.setDataChange(temp);
				// }
			}
		}
	}, [props.btnOff]);

	function openMenu() {
		document.querySelectorAll('.block-menu .simplebar-content-wrapper').forEach((x) =>
			x.scrollTo({
				top: 0,
			})
		);
		setClickMenu(!clickMenu);
		setValue('');
		props.podlozhka(true);

		if (props.inputOn) {
			setTimeout(() => {
				inputRef.current.value = '';
				inputRef.current.focus();
			}, 100);
		}
	}
	function selectFilter(id) {
		if (props.multiSelect) {
			let temp = arr.map((user) => {
				if (user.id === id && arr.filter((x) => x.select === true).length > 1) return { ...user, select: !user.select };
				else if (user.id === id && arr.filter((x) => x.select === true).length === 1 && !user.select) return { ...user, select: !user.select };
				else return user;
			});
			setArr([...temp]);
		} else {
			let temp = arr.map((user) => {
				if (user.id === id) return { ...user, select: true };
				else return { ...user, select: false };
			});
			setArr([...temp]);
			props.podlozhka(false);
		}
	}
	function toolTipOn(e) {
		const tooltipBlock = document.getElementById('tooltipBtn');
		let posElement = e.target.getBoundingClientRect();
		tooltipBlock.style.fontSize = '12px';
		if (e.target.firstChild.scrollWidth > e.target.firstChild.offsetWidth) {
			tooltipBlock.style.fontSize = '12px';
			tooltipBlock.innerText = e.target.innerText;
			tooltipBlock.style.left = posElement.x + e.target.offsetWidth + 'px';
			tooltipBlock.style.top = posElement.y + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';

			if (e.target.className === 'btn-menu') {
				tooltipBlock.style.left = posElement.x + 5 + 'px';
				tooltipBlock.style.top = posElement.y + 28 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}
			if (e.target.className === 'btn-menu another-style') {
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 35 + 'px';
				tooltipBlock.style.animation = 'delay-header 1s forwards';
			}
		}
		if (e.target.className === 'count') {
			const fixText = e.target.innerHTML.replaceAll('(', '').replaceAll(')', '');
			tooltipBlock.innerHTML = `Элементов в фильтре:<br>- найдено ${fixText}`;
			console.log('shoza');
			tooltipBlock.style.left = posElement.x + 'px';
			tooltipBlock.style.top = posElement.y + 30 + 'px';
			tooltipBlock.style.animation = 'delay-btn 0.3s forwards';
		}
	}
	function toolTipOff() {
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function deleteKeyApi(e, idx) {
		e.stopPropagation();
		let temp = arr.filter((x, index) => index !== idx);
		setArr([...temp]);
	}
	const [value, setValue] = useState('');
	function searchInput(e) {
		if (inputRef.current.value.length === 1) {
			inputRef.current.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		}
		setValue(e.target.value);
	}
	const BtnDelete = ({ index }) => (
		<button className="btnDelete-api-key" onClick={(e) => deleteKeyApi(e, index)}>
			<svg width="15" height="15" viewBox="3 2 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
				<path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
				<path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
				<path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
				<path d="M7.26655 8.03662L12.0888 12.8589" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
				<path d="M7.26655 12.8589L12.0888 8.03659" stroke="black" strokeOpacity="0.7" strokeWidth="1.09116" strokeLinecap="round" strokeLinejoin="round"></path>
			</svg>
		</button>
	);
	return (
		<div className="dropMenu">
			<div onClick={openMenu} className={props.anotherStyle ? 'btn-menu another-style' : 'btn-menu'} onMouseEnter={(e) => toolTipOn(e)} onMouseLeave={toolTipOff}>
				{props.multiSelect ? (
					arr
						.filter((x) => x.select === true)
						.map((x) => (
							<span className={props.status ? 'color-form ' + x.status : ''} style={props.btnActive ? { maxWidth: '155px' } : {} && props.anotherStyle ? { maxWidth: '215px', marginRight: '5px' } : {}}>
								{x.name}
							</span>
						))
				) : (
					<span className={props.status ? 'color-form ' + arr.filter((x) => x.select === true)[0].status : ''} style={props.btnActive ? { maxWidth: '155px' } : {} && props.anotherStyle ? { maxWidth: '170px' } : {}}>
						{arr.filter((x) => x.select === true)[0]?.name}
					</span>
				)}
				{props.btnActive && <BtnDelete />}
			</div>
			{props.inputOn && (
				<div className={clickMenu && props.btnOff ? 'btn-menu-input toggle' : 'btn-menu-input'}>
					<input onChange={(e) => searchInput(e)} ref={inputRef} type="text" />
					<div onMouseLeave={toolTipOff} onMouseEnter={(e) => toolTipOn(e)} className="count">
						({arr.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())).length})
					</div>
				</div>
			)}
			<SimpleBar className={clickMenu && props.btnOff ? `block-menu ${props.anotherStyle ? 'block-menu-another-toggle' : 'block-menu-toggle'}` : 'block-menu'} autoHide={false}>
				{arr
					.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()))
					.map((user, index) => (
						<li key={index} onMouseEnter={(e) => toolTipOn(e)} onMouseLeave={toolTipOff} onClick={(e) => selectFilter(user.id)} className={user.select ? 'menu-list menu-select-filter' : 'menu-list'}>
							{props.status ? <span className={'color-form ' + user.status}>{user.name}</span> : <span>{user.name}</span>}
							{props.btnActive && <BtnDelete index={index} />}
						</li>
					))}
			</SimpleBar>
		</div>
	);
};
export default DropMenu;

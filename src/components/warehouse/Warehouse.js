import React, { useState } from 'react';
import './Warehouse.scss';
import 'simplebar/dist/simplebar.min.css';
import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseBlock from './WarehouseBlock';
import Suppliers from './Suppliers';
import AttributeBlock from './AttributeBlock';

const Warehouse = () => {
	// let newarr = [...dataWarehouse, ...dataWarehouse];
	const [objProduct, setObjProduct] = useState(dataWarehouse);
	// useEffect(() => {
	// 	let curent = document.querySelectorAll('.while');
	// 	let width = [];
	// 	let res = 0;
	// 	setTimeout(() => {
	// 		for (let i = 0; i < curent.length; i++) {
	// 			if (!switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu && i === 1) {
	// 				width.push(0);
	// 			}
	// 			curent[i].style.left = res + 7 + 'px';
	// 			res = width.reduce((prev, curr) => prev + curr, 0);
	// 			curent[0].style.left = '7px';
	// 		}
	// 	}, 200);
	// 	console.log(width);
	// }, [objProduct, switchMenu]);

	// useEffect(() => {
	// 	let curent = linkTR.current.querySelectorAll('th');
	// 	let width = [];
	// 	let res = 0;
	// 	setTimeout(() => {
	// 		for (let i = 0; i < 8; i++) {
	// 			if (!switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu) {
	// 				width.push(curent[i].offsetWidth);
	// 			} else if (switchMenu && i === 1) {
	// 				width.push(0);
	// 			}
	// 			curent[i].style.left = res + 7 + 'px';
	// 			res = width.reduce((prev, curr) => prev + curr, 0);
	// 			curent[0].style.left = '7px';
	// 		}
	// 	}, 200);
	// }, [objProduct, switchMenu]);
	
	
	// useEffect(()=> {
	// 	document.addEventListener('click',function(e){
	// 		if(!e.target.className.includes('warehouse-table')) {
	// 			setSelectAll(false);
	// 			let newobj = [...objProduct];
	// 			newobj.map(x => x.select = false);
	// 			setObjProduct(newobj);
	// 		}
	// 	});
	// },[selectAll])



	// const rootRef = useRef();
	// const [start, setStart] = useState(0);
	// // console.log(objProduct.length);

	// // console.log(	Math.round((document.querySelector('.warehouse-table')?.offsetHeight - 52) / 20))
	// let rowHeight = 20;
	// let visibleRows = Math.round((window.innerHeight - 149 - 52) / 20);
	// console.log(visibleRows)
	// function getTopHeight() {
	// 	return rowHeight * start;
	// }
	// function getBottomHeight() {
	// 	return rowHeight * (objProduct.length - (start + visibleRows + 1));
	// }
	// console.log(objProduct.length)

	// useEffect(() => {
	// 	function onScroll(e) {
	// 		setStart(
	// 			Math.min(objProduct.length - visibleRows - 1, Math.floor(e.target.scrollTop / rowHeight))
	// 		);
	// 	}
	// 	// console.log(rootRef.current.el.children[0].children[1].children[0].children[0]);
	// 	console.log(rootRef.current)
	// 	rootRef.current.addEventListener(
	// 		'scroll',
	// 		onScroll
	// 	);

	// 	return () => {
	// 		rootRef.current.removeEventListener(
	// 			'scroll',
	// 			onScroll
	// 		);
	// 	};
	// }, [objProduct.length, visibleRows, rowHeight]);
	const [ul, setUl] = useState([
		{ id: 0, name: 'Товары', select: true },
		{ id: 1, name: 'Атрибуты', select: false },
		{ id: 2, name: 'Поставщики', select: false },
		{ id: 3, name: 'Движение товара', select: false },
	]);
	function clickNav(i) {
		let obj = ul.map((x, index) => {
			if (index === i) {
				return { ...x, select: true };
			} else {
				return {...x, select: false};
			}
		});
		setUl(obj);
	}
	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
			<div style={{ position: 'absolute', top: 0, right: 0 }}>
				Выбрано {parseInt(objProduct.filter((x) => x.select === true).length)}
			</div>

			<div
				style={{
					marginLeft: 74,
					paddingTop: 28,
					height: '100vh',
					width: '100%',
					background: 'white',
					display: 'flex',
					cursor: 'default',
				}}
			>
				<aside>
					<div className="warehouse-title">Склад</div>
					<nav className="warehouse-nav">
						<ul>
							{ul.map((x, i) => (
								<li onClick={() => clickNav(x.id)} className={x.select ? 'select-link' : ''}>
									{x.name}
								</li>
							))}
						</ul>
					</nav>
				</aside>
				{ul[0].select && <WarehouseBlock setObjProduct={setObjProduct} objProduct={objProduct}/>}
				{ul[1].select && <AttributeBlock/>}
				{ul[2].select && <Suppliers/>}
				{ul[3].select && <div/>}
								
			</div>
		</div>
	);
};

export default Warehouse;

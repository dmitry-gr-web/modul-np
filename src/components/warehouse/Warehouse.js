import React, { useState, useEffect,lazy, Suspense } from 'react';
import './Warehouse.scss';
import 'simplebar/dist/simplebar.min.css';
import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseBlock from './WarehouseBlock';
import Suppliers from './Suppliers';
import AttributeBlock from './AttributeBlock';
import ProductCard from './ProductCard';
import translator from '../data/translator';
// const WarehouseBlock = lazy(() => import('./WarehouseBlock'));
const Warehouse = () => {
	// let newarr = [...dataWarehouse, ...dataWarehouse];
	// const ProductCard = React.createContext();

	const [toggleCard, setToggleCard] = useState(false);
	// console.log(dataWarehouse)
	// const obj = [...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse]
	// console.log(obj)
	// const obj1 = JSON.parse(JSON.stringify(dataWarehouse));
	// // console.log(obj.length)
	// const obj = [...dataWarehouse, ...obj1]
	const [objProduct, setObjProduct] = useState(dataWarehouse);
	const [getIndex, setGetIndex] = useState(0);

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
		{ id: 0, name: "goods", select: true },
		{ id: 1, name: "attributes", select: false },
		{ id: 2, name: "suppliers", select: false },
		{ id: 3, name: "movementOfGoods", select: false },
	]);
	// .map(x => ({...x,['name']:translator.getTranslation('card',x.name)}))
	function clickNav(i) {
		let obj = ul.map((x, index) => {
			if (index === i) {
				return { ...x, select: true };
			} else {
				return { ...x, select: false };
			}
		});
		setUl(obj);
	}
	function ruBtn() {
		// translator.setLang('UA');
		// console.log(translator.getTranslation('order'));
		translator.setLang('RU');
		console.log(this)

		// let obj = ul.map(x => ({...x,['name']:translator.getTranslation('warehouse',x.name)}));
		// setUl(obj);

	}
	
	function uaBtn () {
		translator.setLang('UA');

		// let obj = ul.map(x => ({...x,['name']:translator.getTranslation('warehouse',x.name)}));
		// setUl(obj);
	}


	// useEffect(()=> {
	// },[translator])
	// console.log(ul)
	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
			<div style={{ position: 'absolute', top: 0, left: '200px' }}>
				<button onClick={ruBtn}>RU</button>
				<button onClick={uaBtn}>UA</button>
			</div>
			<div style={{ position: 'absolute', top: 0, right: 0 }}>
				Выбрано {parseInt(objProduct.filter((x) => x.select === true).length)}
			</div>

			<div
				style={{
					marginLeft: 74,
					paddingTop: 28,
					height: '100vh',
					width: 'calc(100vw - 200px)',
					background: 'white',
					display: 'flex',
					cursor: 'default',
					justifyContent: 'space-between',
				}}
			>
				<div style={{position:'absolute', width: 54,height: 400, left: '100px',backdropFilter: 'blur(4px)',    boxShadow: '-4px 4px 4px rgb(0 0 0 / 25%)',background: 'rgba(81,81,81,.7)'}}>

				</div>
				<aside>
					<div className="warehouse-title">{translator.getTranslation('warehouse', 'warehouse')}</div>
					<nav className="warehouse-nav">
						<ul>
							{ul.map((x, i) => (
								<li
									key={i}
									onClick={() => clickNav(x.id)}
									className={x.select ? 'select-link' : ''}
								>
									{translator.getTranslation('warehouse', x.name)}
								</li>
							))}
						</ul>
					</nav>
				</aside>
				{ul[0].select && (
					// <Suspense fallback={<div>Loading</div>}>
						<WarehouseBlock
						setToggleCard={setToggleCard}
						setGetIndex={setGetIndex}
						setObjProduct={setObjProduct}
						objProduct={objProduct}
						translator={translator}
						/>
					// {/* </Suspense> */}
				)}
				{ul[1].select && <AttributeBlock />}
				{ul[2].select && <Suppliers />}
				{ul[3].select && <div />}

				{toggleCard && (
					<ProductCard
						getIndex={getIndex}
						toggleCard={toggleCard}
						setToggleCard={setToggleCard}
						setObjProduct={setObjProduct}
						objProduct={objProduct}
						translator={translator}
					/>
				)}
			</div>
		</div>
	);
};

export default Warehouse;

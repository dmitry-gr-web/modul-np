import React, { useState, useEffect,lazy, Suspense } from 'react';
import './Warehouse.scss';
import 'simplebar/dist/simplebar.min.css';
import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseBlock from './WarehouseBlock';
import Suppliers from './Suppliers';
import AttributeBlock from './AttributeBlock';
import ProductCard from './ProductCard';
import translator from '../data/translator';
// import { useFetch } from '../data/useFetch';
// const WarehouseBlock = lazy(() => import('./WarehouseBlock'));
const Warehouse = () => {
	// let newarr = [...dataWarehouse, ...dataWarehouse];
	// const ProductCard = React.createContext();
	// const {data,error,isLoading} = useFetch('http://192.168.0.197:3005/folders', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		"query": {},
	// 		"start": 10,
	// 		// "start": props.folder.at(-1)?.id,
	// 		"end": 20
	// 	})
	// });
	// console.log(data)
	// console.log(data)
	const [toggleCard, setToggleCard] = useState(false);
	// console.log(dataWarehouse)
	// const obj = [...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse,...dataWarehouse]
	// console.log(obj)
	// const obj1 = JSON.parse(JSON.stringify(dataWarehouse));
	// // console.log(obj.length)
	// const obj = [...dataWarehouse, ...obj1]
	// setTimeout(() => {
	// 	// Сортировать данные
	// 	setObjProduct(dataWarehouse);
	// }, 2000);
	const [objProduct, setObjProduct] = useState(dataWarehouse);
	const [getIndex, setGetIndex] = useState(0);

	
	const [ul, setUl] = useState([
		{ id: 0, name: "goods", select: true },
		{ id: 1, name: "attributes", select: false },
		{ id: 2, name: "suppliers", select: false },
		{ id: 3, name: "movementOfGoods", select: false },
	]);
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
		translator.setLang('RU');
	}
	function uaBtn () {
		translator.setLang('UA');
	}
	const Preloaded = () => (
		<svg id="" className="header-logo__svg-logo" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                            <path className="logo-yellow" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                            <path className="logo-red" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                            <path className="logo-blue" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/></svg>
	)

	return (
		<div
			style={{
				marginLeft: 60,
				marginTop: 50,

				background: 'white',
			}}
		>
			{/* <Preloaded/> */}
			{/* {isLoading ? (<div className='loading'><Preloaded/></div>) : 
				<div style={{position: 'absolute'}}>
					{data?.map(x=> <div>{x.title}</div>)}
				</div>
			} */}
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
					width: 'calc(100vw - 180px)',
					background: 'white',
					display: 'flex',
					cursor: 'default',
					justifyContent: 'space-between',
				}}
			>
				<div style={{position:'absolute', width: 54,height: 500, left: '100px',backdropFilter: 'blur(4px)',    boxShadow: '-4px 4px 4px rgb(0 0 0 / 25%)',background: 'rgba(81,81,81,.7)'}}>

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
				{
					ul[0].select && 
						// <Suspense fallback={<div>Loading</div>}>
							<WarehouseBlock
							setToggleCard={setToggleCard}
							setGetIndex={setGetIndex}
							setObjProduct={setObjProduct}
							objProduct={objProduct}
							translator={translator}
							/>
						// {/* </Suspense> */}
					
				}
				{/* {error && <div style={{fontSize: 100}}>PIZDA {error}</div>} */}
				{ul[1].select && <AttributeBlock translator={translator}/>}
				{ul[2].select && <Suppliers translator={translator}/>}
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

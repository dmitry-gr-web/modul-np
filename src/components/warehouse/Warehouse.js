import React, { useState, useEffect } from 'react';
import './Warehouse.scss';
import 'simplebar/dist/simplebar.min.css';
import { dataWarehouse } from '../data/dataWarehouse';
import WarehouseBlock from './WarehouseBlock';
import Suppliers from './Suppliers';
import AttributeBlock from './AttributeBlock';
import ProductCard from './ProductCard';
import translator from '../data/translator';
import {dataAttribute} from '../data/dataAttribute';
import {dataSuppliers} from '../data/dataSuppliers';
const Warehouse = () => {

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
	const [objProduct, setObjProduct] = useState(null);
	const [objAttribute,setObjAttribute] = useState(null);
	const [objSuppliers,setObjSuppliers] = useState(null);
	const [getIndex, setGetIndex] = useState(0);
	useEffect(()=> {
		setObjAttribute(dataAttribute)
		setObjSuppliers(dataSuppliers)
		setObjProduct(dataWarehouse)
	},[])
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
				Выбрано {parseInt(objProduct?.filter((x) => x.select === true).length)}
			</div>

			<div
				style={{
					paddingTop: 28,
					height: '100vh',
					background: 'white',
					display: 'flex',
					cursor: 'default',
					width: '100%'
				}}
			>
				<div style={{position:'absolute', width: 54,height: 500, left: '100px',backdropFilter: 'blur(4px)',    boxShadow: '-4px 4px 4px rgb(0 0 0 / 25%)',background: 'rgba(81,81,81,.7)'}}>

				</div>
				<aside style={{marginLeft: 74,height: 'max-content'}}>
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
							<WarehouseBlock
							setToggleCard={setToggleCard}
							setGetIndex={setGetIndex}
							setObjProduct={setObjProduct}
							objProduct={objProduct}
							translator={translator}
							/>
					
				}
				{ul[1].select && <AttributeBlock setObjAttribute={setObjAttribute}  objAttribute={objAttribute} translator={translator}/>}
				{ul[2].select && <Suppliers setObjSuppliers={setObjSuppliers}  objSuppliers={objSuppliers} translator={translator}/>}
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

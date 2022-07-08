import React,{useEffect,useLayoutEffect,useRef,useState,useMemo} from 'react'
import {SvGBtnPlus,Preloaded} from '../../img/svg-pack';
import _, { set } from 'lodash';
import ScrollBox from './reactScroll';
// import {dataAttribute} from '../data/dataAttribute';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import { useFetch } from '../data/useFetch';
// import SimpleBar from 'simplebar-react';
import SwitchBtn from './SwitchBtn';
import MaxaScroll from './MaxaScroll';
import WarehouseInputField from './WarehouseInputField';
import AttributeList from './AttributeList';
let hover;
let plusminus;
const AttributeBlock = ({translator,setObjAttribute,objAttribute}) => {
	const {data,error,isLoading} = useFetch(
	// 	'http://192.168.0.197:3005/goodAttributes', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		"query": {},
	// 		// "start": 10,
	// 		// "start": props.folder.at(-1)?.id,
	// 		"end": 20
	// 	})
	// }
	);

	console.log(data)
	const [lastIndex, setLastIndex] = useState(0);
	const [hideMenu, setHideMenu] = useState(false);

	const linkTR = useRef();
	const [podlozhka, setPodlozhka] = useState(false);
	const [start, setStart] = useState(0);
	let rowHeight = 18;
	// if (start >= data.length + getStart()){

	// }
	const [visibleRows, setVisible] = useState(
		Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight)
	);
	useEffect(() => {
		setVisible(Math.floor((document.body.clientHeight * 1.2 - 170) / rowHeight));
	}, [visibleRows]);
	function getStart() {
		let temp = start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}

	function getTopHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return rowHeight * Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight));
	}
	function getBottomHeight() {
		let temp =
			start - Math.floor(document.body.clientHeight * 0.15) < 0
				? 0
				: start - Math.floor(document.body.clientHeight * 0.15);
		return (
			rowHeight *
			(objAttribute.length -
				(Math.min(objAttribute.length - visibleRows - 1, Math.floor(temp / rowHeight)) +
					visibleRows +
					1))
		);
	}
	async function updateHover(e) {
		clearTimeout(hover);
		if (!document.querySelector('.first-tab-body').classList.contains('hoverOff')) {
			document.querySelector('.first-tab-body').classList.add('hoverOff');
		}
		
		hover = setTimeout(() => {
			document.querySelector('.first-tab-body').classList.remove('hoverOff');
		}, 400);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function clickPodlozhka() {
		setPodlozhka(false);
		setHideMenu(false);
		// setFlagSwitchMenu(false);
		// setSwitchMenu(false);
		setAddOneItem(false);
		document.querySelector('.track-vertical').style.opacity = 1;
		document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').querySelector('span').style.width = '0%';
		document.querySelector('.first-tab-body tr:nth-child(2) td:nth-child(4)').style.color = '';

		// linkTR.current.classList.remove('hover-disabled');
		// document.querySelector('.first-tab-body tr:nth-child(2)').classList.remove('hover-disabled');
		document.querySelector('.track-horizontal').style.opacity = 1;
		document.querySelector('.contentScroll').style.overflow = 'auto';

	}
	const btnUp = useRef();
	useEffect(() => {
		if(btnUp.current){
			if (start > 600) {
				btnUp.current.style.visibility = 'visible';
			} else {
				btnUp.current.style.visibility = 'hidden';
			}
		}
	
	}, [start]);
	function clickScrollUp() {
		// rootRef.current.el.querySelector('.simplebar-content-wrapper').scrollTop = 0;
		// rootRef.current.scrollTop = 0;
		document.querySelector('.contentScroll').scrollTop = 0;
	}
	async function onScroll(e) {
		e.stopPropagation();
		setStart(e.target.scrollTop);
		updateHover();
		// setSwitchMenu(false);
	}
	
	function clickTr(e,index) {
		// e.preventDefault();
		// e.stopPropagation();
		// console.log(e.currentTarget)
		if (e.currentTarget && !objAttribute[index].lock) {
			let newobj = [...objAttribute];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj = newobj.map((x) => {
					return { ...x, select: false };
				});
				if (lastIndex < index) {
					newobj.slice(lastIndex , index + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				} else {
					newobj.slice(index , lastIndex + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				}
			} else {
				// e.preventDefault();
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				// if (newobj[index].select !== true) {
				// 	newobj.map((x) => (x.select = !newobj[index].select));
				// }
				// if(newobj[index].select !== undefined)	
				newobj[index].select = !newobj[index].select;
				// else {}
			
			}
			setObjAttribute([...newobj]);
		}
	}
	// const [percentScroll, setPercentScroll] = useState(0.87);

	// useEffect(() => {
		
	// 		if(rootRef.current?.content.offsetHeight < 614) {
	// 			setPercentScroll(0.81);
	// 		}
	// }, [objAttribute]);
	function searchLine(text, value) {
		if (value !== '') {
			let re = new RegExp(value, 'gui');
			let text_pr = text?.replace(re, (x) => '<span class="findUnderline">' + x + '</span>');

			return text_pr;
		} else {
			return text;
		}
	}
	// function showScrollbar () {
	// 	document.querySelector('.scrollbar').style.opacity = 1;
	// 	document.querySelector('.scrollbarHorizont').style.opacity = 1;
	// }
	// function hideScrollbar () {
	// 	document.querySelector('.scrollbar').style.opacity = 0;
	// 	document.querySelector('.scrollbarHorizont').style.opacity = 0;
	// }
	const [sortActive, setSortActive] = useState(false);
	const [hideArrow, setHideArrow] = useState(false);
	// export default React.memo(SwitchBtn);
	const [selectAll, setSelectAll] = useState(false);


	useEffect(() => {
		function clickDocument(e) {
			if (!e.target.closest('.warehouse-table')) {
				setSelectAll(false);
				let newobj = objAttribute.map((x) => ({...x, select: false}));
				setObjAttribute([...newobj]);
			}
		}
		if (!selectAll) {
			document.addEventListener('keydown', function (e) {
				if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
					e.preventDefault();
					setSelectAll(true);
					// let newobj = [...objAttribute];
					let arr = objAttribute.map((x) => {
						if (x.lock) {
							return {...x , select: false};
						} else {
							return {...x , select: true};
						}
					});
					setObjAttribute([...arr]);
				}
			});
		}
		document.addEventListener('click', clickDocument);
		return () => {
			document.removeEventListener('click', clickDocument);
		};
	}, [selectAll, objAttribute]);



	const [addOneItem,setAddOneItem] = useState(false);
	const [count,setCount]= useState(0);
	let newAttribute = {
		status:false,
		product: 'XXXX-',
		id: 'XXXX',
		select:false,
		lock:false,
		attribute: ''
	}
	function addAttribute() {

		// setCount(prev=> prev+1)
		document.querySelector('.contentScroll').scrollTop = 0;
		setPodlozhka(true);
		setAddOneItem(true);
		setHideMenu(true);
		let arr = [newAttribute,...objAttribute];
		setObjAttribute(arr);
		// let arr = [newAttribute,...JSON.parse(JSON.stringify(objAttribute))];
		// setObjAttribute([...arr]);
		setTimeout(() => {
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child input').focus()
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').style.zIndex = 99;
			document.querySelector('.first-tab-body tr:nth-child(2) td:nth-child(4)').style.color = 'rgba(0,0,0,0.4)';
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').classList.add('hover-disabled');
			document.querySelector('.first-tab-body tr:nth-child(2) td:last-child').querySelector('span').style.width = '100%';
		}, 100);
	}

	// const memo = React.memo(AttributeBlock)

	// console.log(objAttribute)
	return (
		<>
		{isLoading ? (<div className='loading'><Preloaded/></div>) : (
			<div className="warehouse-products">
					<div className="warehouse-products-title">
						<hr/>
						<span>{translator.getTranslation('warehouse', 'attributes')}</span>
						<button onClick={(e) => {addAttribute(); e.stopPropagation()}} disabled={addOneItem} className='btnAddItem'>
							<SvGBtnPlus />
						</button>
					</div>
					<div className="shadow-right"></div>
					<div
						style={{
							position: 'relative',
							// maxHeight: 'calc(100vh - 170px)',
							// width: '100%',
							// height:  'calc(100vh - 216px)',
							height:  'calc(100vh - 210px)',
						}}
						className='warehouseAttributeBlock'
					>
			
							<MaxaScroll
								setHideArrow={setHideArrow}
								updateHover={updateHover}
								podlozhka={podlozhka}
								infiniteScroll={_.throttle(onScroll, 500)}
			
							>

							<table
								tabIndex={-1}
								className='warehouse-table'
								// onMouseEnter={showScrollbar}
								// onMouseLeave={hideScrollbar}
								// style={{ width: '100%' }}
								// style={{ width: '100%', height: '100%', paddingLeft: 13, paddingRight: 10 }}
							>
								<thead className="first-tab-header">
									<tr>
										{podlozhka && (
											<td style={{ padding: '0px' }}>
												<div
													className="warehouse-podlozhka"
													style={{
														width: document.querySelector('.contentScroll').offsetWidth + 'px',
														height: document.body.clientHeight + 'px',
														position: 'absolute',
														left: 0,
														top: 0,
														zIndex: 3,
													}}
													onClick={clickPodlozhka}
												></div>
											</td>
										)}
									</tr>

									<tr>
										<th></th>
										<th style={{ paddingRight: '15px' }}>
											Статус
										</th>
										<th style={{ paddingRight: '5px' }}>
											Товар
										</th>
										<th style={{ paddingRight: '15px' }}>
											ID
										</th>
										<th>
											Название
										</th>
									</tr>
									<tr>
										<th></th>
										<th style={{paddingRight: '15px', minWidth:51}}>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												// width21px={width21px}
												// setWidth21px={setWidth21px}
												// labelForWidth={labelForWidth}
												// setLabelForWidth={setLabelForWidth}
												type={'status'}
												translator={translator}
												objProduct={objAttribute}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
												// setSwitchMenu={setSwitchMenu}
												// switchMenu={switchMenu}
												// setFlagSwitchMenu={setFlagSwitchMenu}
											/>
										</th>
										<th style={{paddingRight: '5px', position:'relative'}}>
											<div
												style={{
												width: 'calc(100% - 5px)',
												background: '#9c9b9e',
												height: 1,
												bottom: 2,
												left: 0,
												position: 'absolute',
												opacity: `${!hideMenu ? '1': '0'}`,
												transition: 'opacity 0.2s'
												}}
											></div>
										</th>
										<th style={{ paddingRight: '15px' }}>
											<WarehouseInput 
												podlozhka={podlozhka} 
												setPodlozhka={setPodlozhka} 
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
											/>
										</th>
										<th>
											<WarehouseDropMenu
												setPodlozhka={setPodlozhka}
												podlozhka={podlozhka}
												type={'attribute'}
												translator={translator}
												searchLine={searchLine}
												inputOn={true}
												objProduct={objAttribute}
															// setSwitchMenu={setSwitchMenu}
															// switchMenu={switchMenu}
												sortActive={sortActive}
												setSortActive={setSortActive}
												hideArrow={hideArrow}
												setHideMenu={setHideMenu}
												hideMenu={hideMenu}
															// setWidth21px={setWidth21px}
															// setLabelForWidth={setLabelForWidth}
											/>
										</th>
										
									</tr>
									<tr>
										<th className="shadow-vertical" colSpan={19}>
											<div />
											<div />
										</th>
									</tr>
								</thead>

								<tbody className="first-tab-body">
									<tr style={{ height: getTopHeight() }}></tr>
									{objAttribute.length > 0 &&
										objAttribute.slice( (getStart() < 0 ? 0 : getStart()),  (getStart() < 0 ? 0 : getStart()) + visibleRows + 1).map((x, index) => (
											<tr onClick={(e) => clickTr(e,(index + (getStart() < 0 ? 0 : getStart())))}
											className={
												objAttribute[index + (getStart() < 0 ? 0 : getStart())].select
												? 'select speed hoverAttributeBlock'
												: objAttribute[index + (getStart() < 0 ? 0 : getStart())].lock
												? 'lockOrder speed hoverAttributeBlock'
												: 'speed hoverAttributeBlock'
											}
											onMouseEnter={objAttribute[index+(getStart() < 0 ? 0 : getStart())].lock ? (e) => {
												
												let posElement = e.target.getBoundingClientRect();
												const tooltipBlock = document.getElementById('tooltipBtn');
												tooltipBlock.style.fontSize = '12px';
												const widthPlus = e.pageX + tooltipBlock.offsetWidth;
												const viewportWidth = document.body.clientWidth;
												plusminus = setTimeout(() => {
													const name = 'Олександр';
													tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
													// tooltipBlock.style.left = posElement.x + 'px';
													// tooltipBlock.style.top = posElement.y + 23 + 'px';
													if (widthPlus > viewportWidth) {
														tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
														tooltipBlock.style.top = posElement.y + 23 + 'px';
													} else {
														tooltipBlock.style.left = posElement.x + 'px';
														tooltipBlock.style.top = posElement.y + 23 + 'px';
													}
													tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
												}, 250);
												
											} : () => { }}
											onMouseLeave={objAttribute[index+(getStart() < 0 ? 0 : getStart())].lock ? (e) => {
												clearTimeout(plusminus);
												document.getElementById('tooltipBtn').style.animation = '';
											} : () => { }}
											key={index+getStart()}
											// index={index+getStart()}
											>
												{/* {console.log(objAttribute)} */}
												<td><div className='stickyBeforeBody'></div></td>
												<td style={{paddingRight:15}}><SwitchBtn status={x.status} data={objAttribute} setData={setObjAttribute} index={index+(getStart() < 0 ? 0 : getStart())}/></td>
												<td style={{paddingRight:5, color: `rgba(0,0,0,0.4)`, textAlign: 'right'}}>{x.product}</td>
												<td style={{paddingRight:15,color: `${x.status ? 'rgba(0,0,0,0.4)': ''}`, minWidth: 40}}>{x.id}</td>
												<td style={{position: "relative",minWidth:300}}>
													<WarehouseInputField 
													setCount={setCount} 
													type={'attribute'} 
													addOneItem={addOneItem} 
													setPodlozhka={setPodlozhka} 
													podlozhka={podlozhka} 
													data={objAttribute} 
													// data={JSON.parse(JSON.stringify(objAttribute))} 
													value={x.attribute} 
													setData={setObjAttribute} 
													index={index+(getStart() < 0 ? 0 : getStart())} 
													setHideMenu={setHideMenu} 
													setHideArrow={setHideArrow}/>
													{/* <input onMouseEnter={(e) => inputOn(e, index + (getStart() < 0 ? 0 : getStart()))} onMouseLeave={e => inputOff(e,index + (getStart() < 0 ? 0 : getStart()))} style={{color: `${x.status ? 'rgba(0,0,0,0.4)': ''}`}} className='attributeInput' value={x.attribute} onChange={null}/> */}
												</td>
											</tr>
											// <AttributeList 
											// 	index={index+ (getStart() < 0 ? 0 : getStart())}
											// 	key={index+ (getStart() < 0 ? 0 : getStart())}
											// 	objAttribute={objAttribute}
											// 	setObjAttribute={setObjAttribute}
											// 	translator={translator}
											// 	addOneItem={addOneItem}
											// 	podlozhka={podlozhka}
											// 	setPodlozhka={setPodlozhka}
											// 	setHideArrow={setHideArrow}
											// 	setHideMenu={setHideMenu}
											// />
										))}

									<tr style={{ height: getBottomHeight() }}></tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={18} style={{ height: 18 }}>
											<div className="shadow-vertical-footer"></div>
											<div style={{position:'absolute',bottom:0,left:0,height:8,width:'100%',background:'white'}}></div>
										</td>
									</tr>
								</tfoot>
							</table>
							</MaxaScroll>
						{/* </ScrollBox> */}
					</div>
					<div ref={btnUp} onClick={clickScrollUp} className="btnUp">
						<svg
							height="20"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
								fill="black"
							></path>
						</svg>
					</div>
			</div>)
		}
		</>
  )
}

export default AttributeBlock;

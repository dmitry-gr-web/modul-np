import React,{useEffect,useLayoutEffect,useRef,useState} from 'react'
import {SvGBtnPlus,Preloaded} from '../../img/svg-pack';
import _, { set } from 'lodash';
import ScrollBox from './reactScroll';
import {dataAttribute} from '../data/dataAttribute';
import WarehouseDropMenu from './WarehouseDropMenu';
import WarehouseInput from './WarehouseInput';
import { useFetch } from '../data/useFetch';

let hover;
const AttributeBlock = ({translator}) => {
	const {data,error,isLoading} = useFetch('http://192.168.0.197:3005/goodAttributes', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"query": {},
			// "start": 10,
			// "start": props.folder.at(-1)?.id,
			"end": 20
		})
	});
	console.log(data)
	const [objAttribute,setObjAttribute] = useState(dataAttribute);
	const [podlozhka, setPodlozhka] = useState(false);
	const rootRef = useRef();
	const [start, setStart] = useState(0);
	let rowHeight = 18;

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
		// setFlagSwitchMenu(false);
		// setSwitchMenu(false);

		document.querySelector('.contentScroll').style.overflow = 'auto';
		document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			x.classList.remove('hide-menu');
		});
		// document.querySelectorAll('.warehouse-dropmenu.ranges').forEach((x) => {
		// 	x.style.zIndex = 1;
		// });
		// document.querySelectorAll('.block-3-btn .warehouse-dropmenu').forEach((x) => {
		// 	x.style.width = '21px';
		// });
		// document.querySelectorAll('.nal-ostatok').forEach((x) => {
		// 	x.classList.remove('showBtn');
		// });
		// document.querySelector('.width21px').style.maxWidth = '51px';
		// let input = document.querySelectorAll('.nal-ostatok input')[indexInput];
		// if (input.value.length >= 4) {
		// 	// input.style.width = input.value.length * 8 + (4 * parseInt(numRound((input.value.length / 4), 1.1))) + 'px';
		// 	input.style.width = input.value.length * 7 + 3 + 'px';
		// }
		// if (input.value.length >= 7) {
		// 	input.style.width = input.value.length * 7 + 7 + 'px';
		// }
		// if (input.value.length < 4) {
		// 	input.style.width = input.value.length * 7 + 'px';
		// }
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
	const [percentScroll, setPercentScroll] = useState(0.87);

	useEffect(() => {
		
			if(rootRef.current?.content.offsetHeight < 614) {
				setPercentScroll(0.81);
			}
	}, [objAttribute]);
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
	const SwitchBtn = ({status,index}) => {
		function switchBtn(e) {
			e.stopPropagation();
				let temp = (getStart() < 0 ? 0 : getStart());
				console.log(index + temp);
				// let newobj = [...objAttribute];
				objAttribute[index + temp].status = !objAttribute[index + temp].status;
				setObjAttribute([...objAttribute]);
				// console.log(objProduct);
			
			
		}
		return (
			<label className="switch-btn-warehouse">
				<input
					type="checkbox"
					className="status-all"
					onChange={switchBtn}
					// defaultChecked={objProduct[index].status.all}
					checked={status}
				/>
				<span className="slider round"></span>
			</label>
		)
	}
  	return (
		<>
		{isLoading ? (<div className='loading'><Preloaded/></div>) : (
			<div className="warehouse-products">
					<div className="warehouse-products-title">
						Атрибуты
						<button>
							<SvGBtnPlus />
						</button>
					</div>
					<div
						style={{
							position: 'relative',
							// maxHeight: 'calc(100vh - 170px)',
							// width: '100%',
							height:  'calc(100vh - 216px)',
							height:  'calc(100vh - 190px)',
						}}
					>
						<ScrollBox
							ref={rootRef}
							// scrollVertMinus={0.07}
							percent={percentScroll}
							scroll={_.throttle(onScroll, 500)}
							color="rgba(0, 0, 0, 0.3)"
						>
			

							<table
								tabIndex={-1}
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
														width: '100%',
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
										<th style={{ paddingLeft: '12px', paddingRight: '15px' }}>
											Статус
										</th>
										<th style={{ paddingRight: '15px' }}>
											Товар
										</th>
										<th style={{ paddingRight: '20px' }}>
											ID
										</th>
										<th>
											Название
										</th>
									</tr>
									<tr>
										<th style={{paddingLeft:12,paddingRight: '15px', minWidth:51}}>
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
												// setSwitchMenu={setSwitchMenu}
												// switchMenu={switchMenu}
												// setFlagSwitchMenu={setFlagSwitchMenu}
											/>
										</th>
										<th style={{paddingRight: '15px', position:'relative'}}>
											<div
												style={{
												width: 'calc(100% - 15px)',
												background: '#9c9b9e',
												height: 1,
												bottom: 2,
												left: 0,
												position: 'absolute',
												}}
											></div>
										</th>
										<th style={{ paddingRight: '20px' }}>
											<WarehouseInput 
												podlozhka={podlozhka} 
												setPodlozhka={setPodlozhka} 
												sortActive={sortActive}
												setSortActive={setSortActive}
												translator={translator}
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
										objAttribute.slice(getStart(), getStart() + visibleRows +1).map((x, index) => (
											<tr key={index+getStart()}>
												<td style={{paddingLeft:12,paddingRight:15}}><SwitchBtn status={x.status} index={index}/></td>
												<td style={{paddingRight:15}}>{x.product}</td>
												<td style={{paddingRight:20}}>{x.id}</td>
												<td>{x.attribute}</td>
											</tr>
										))}

									<tr colSpan={18} style={{ height: getBottomHeight() }}></tr>
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
						</ScrollBox>
					</div>
					<div ref={btnUp} onClick={clickScrollUp} className="btnUp">
						<svg
							width="20"
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

export default AttributeBlock

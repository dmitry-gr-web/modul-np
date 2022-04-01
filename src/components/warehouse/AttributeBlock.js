import React from 'react'
import { rozetkaLogo, promLogo, crmLogo, SvGBtnPlus } from '../../img/svg-pack';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const AttributeBlock = () => {
  return (
    <div className="warehouse-products">
			<div className="warehouse-products-title">
				Атрибуты
				<button>
					<SvGBtnPlus />
				</button>
			</div>
			<div className="shadow-right"></div>
			<SimpleBar
				className="warehouse-table"
				style={{
					display: 'flex',
					maxHeight: 'calc(100vh - 149px)',
					marginBottom: '10px',
					maxWidth: 1150,
					// overflow:'auto',
					// height:'800px',
					// height: rowHeight * visibleRows + 1,
				}}
				autoHide={false}
				// ref={rootRef}
			>
				{/* {podlozhka && (
					<div
						className="warehouse-podlozhka"
						style={{ width: '100%', height: '100%', position: 'fixed', zIndex: 3 }}
						onClick={clickPodlozhka}
					></div>
				)} */}
				{/* <div style={{ height: getTopHeight() }} /> */}
				<table style={{ width: '100%', height: '100%', paddingLeft: 7, paddingRight: 10 }}>
					<thead className="first-tab-header">
						<tr>
							<th className="statusBefore sticky-head">
								<div className="sticky-block">
									<div
										// style={{ display: 'flex' }}
										className="sticky-block-children"
									>
										<div
											style={{
												textAlign: 'left',
												paddingLeft: 0,
												minWidth: 51,
												paddingRight: '10px',
											}}
										>
											Статус
										</div>
										<div
						
										>
											<img className="logo-mail" src={crmLogo} alt="" />
											<img className="logo-mail" src={rozetkaLogo} alt="" />
											<img className="logo-mail" src={promLogo} alt="" />
										</div>
									</div>

									<div className="id-width" style={{ paddingRight: '10px' }}>
										ID
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>Страна</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>Компания</div>
									<div className="name-width" style={{ paddingRight: '15px' }}>
                                    Контакт
									</div>
									<div className="attribute-width" style={{ paddingRight: '3px' }}>
                                    Телефон
									</div>
									<div className="shadow-left"></div>
								</div>
							</th>

							<th style={{ paddingLeft: '12px', paddingRight: '15px' }} colSpan={4}>
                            Комментарий
							</th>

						</tr>
						<tr>

							<th className="sticky-head">
								<div className="sticky-block">
									<div
										className="sticky-block-children"
										style={{ maxWidth: '156px' }}
									>
										<div style={{ width: '51px', paddingRight: '10px' }}>
									
										</div>
										<div
										
										
											className="block-3-btn"
										>
									

											<div style={{ margin: '0 11px' }}>
									
											</div>

									
										</div>
									</div>

									<div className="id-width" style={{ paddingRight: '10px' }}>
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>
									
									</div>
									<div style={{ paddingRight: '10px', minWidth: 51 }}>
								
									</div>
									<div className="name-width" style={{ paddingRight: '15px' }}>
								
									</div>
									<div className="attribute-width" style={{ paddingRight: '3px' }}>
									
									</div>
									<div className="shadow-left"></div>
								</div>
							</th>

							<th style={{ paddingLeft: '12px', paddingRight: '3px' }} className="nal-ostatok">
								<div style={{ textAlign: 'right', display: 'flex', justifyContent: 'end' }}>
									<span style={{ paddingLeft: 3 }}>/</span>
								</div>
							</th>
							<th className="nal-rezerv" style={{ paddingRight: '4px' }}>
							</th>
							<th className="nal-otpr" style={{ paddingRight: '4px' }}>
								
							</th>
							<th className="nal-vozvrat" style={{ paddingRight: '15px' }}>
							
							</th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}></th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}></th>
							<th style={{ textAlign: 'right', paddingRight: '15px' }}></th>
							<th className="summa-suma1">
								<div
									style={{
										textAlign: 'right',
										display: 'flex',
										justifyContent: 'end',
										paddingRight: '3px',
									}}
								>
							
									<span style={{ paddingLeft: 3 }}>/</span>
								</div>
							</th>
							<th className="summa-suma2">
								<div style={{ paddingRight: '4px' }}></div>
							</th>
							<th className="summa-suma3">
								<div style={{ paddingRight: '4px' }}></div>
							</th>
							<th className="summa-suma4">
								<div></div>
							</th>
						</tr>
						<tr>
							<th className="shadow-vertical" colSpan={1}>
								<div
						
								
									style={{ width: '90px' }}
								></div>
							</th>
							<th colSpan="17" className="shadow-vertical">
								<div></div>
							</th>
						</tr>
					</thead>
					<tbody className="first-tab-body">
                 
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={18} style={{ height: 12 }}>
								<div className="shadow-vertical-2"></div>
							</td>
						</tr>
					</tfoot>
				</table>
				{/* <div style={{ height: getBottomHeight() }} /> */}
			</SimpleBar>
		</div>
  )
}

export default AttributeBlock

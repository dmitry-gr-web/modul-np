import React from 'react';
// import { crmLogo } from '../../img/svg-pack';
// import SwitchBtn from './SwitchBtn';
let tooltip;
// let plusminus;
const GoodsMovementList = ({
    data,
    index,
    translator,
}) => {

    function tooltipOn(e, html) {
        let posElement = e.currentTarget.getBoundingClientRect();
        const tooltipBlock = document.getElementById('tooltipBtn');
        tooltipBlock.style.fontSize = '12px';
        if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        } else {
            if (e.currentTarget.className === 'attribute-width') {
                const src = e.currentTarget.children[0].getAttribute('src');
                const memory = e.currentTarget.children[1].innerText;
                const img = `<img style='width:100%;height:100%;object-fit:cover;padding-bottom:3px' src="${src}"/>`;
                const heightPlus = posElement.y + tooltipBlock.offsetHeight;
                const viewportHeight = document.body.clientHeight;
                tooltip = setTimeout(() => {
                    if (heightPlus > viewportHeight) {
                        tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column-reverse;width:300px;height:300px'>${memory}${img}</div>`;
                        tooltipBlock.style.left = posElement.x + 'px';
                        tooltipBlock.style.top = posElement.y - tooltipBlock.offsetHeight - 5 + 'px';
                    } else {
                        tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column;width:300px;height:300px'>${memory}${img}</div>`;
                        tooltipBlock.style.left = posElement.x + 'px';
                        tooltipBlock.style.top = posElement.y + 23 + 'px';
                    }
                    tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
                }, 250);
            }
        }
        if (e.currentTarget.innerText === '🇺🇦') {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
      
        if (e.currentTarget.className === 'slider round') {
            tooltip = setTimeout(() => {
                if (e.target.offsetParent.children[0].checked) {
                    tooltipBlock.innerText = html;
                } else {
                    tooltipBlock.innerText = html;
                }
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);


        }
        if (e.currentTarget.className === 'wrap-nal-ostatok') {
            const childInput = e.currentTarget.children[1].value;
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + childInput;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-rezerv') {
            const memoryInput = e.currentTarget.closest('tr').querySelector('.wrap-nal-ostatok').children[1].value;
            let res = +e.target.innerText.replace(/\s/gu, '') === +memoryInput.replace(/\s/gu, '') ? '' : +e.target.innerText.replace(/\s/gu, '') - +memoryInput.replace(/\s/gu, '');
            let newres = res.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0, });
            tooltip = setTimeout(() => {
                tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText + (res === '' ? '' : `<br>Недостаёт по выбранным фильтрам: : ${newres}`);
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-otpr') {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'nal-vozvrat') {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma1') {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + e.target.innerText.replace('/', '');
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma2') {
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText;
                tooltipBlock.style.left = posElement.x + 'px';
                tooltipBlock.style.top = posElement.y + 23 + 'px';
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma3') {
            const widthPlus = posElement.x + tooltipBlock.offsetWidth;
            const viewportWidth = document.body.clientWidth;
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
                if (widthPlus > viewportWidth) {
                    tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                } else {
                    tooltipBlock.style.left = posElement.x + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                }
                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
        if (e.currentTarget.className === 'summa-suma4') {
            const widthPlus = posElement.x + tooltipBlock.offsetWidth;
            const viewportWidth = document.body.clientWidth;
            tooltip = setTimeout(() => {
                tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
                if (widthPlus > viewportWidth) {
                    tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                } else {
                    tooltipBlock.style.left = posElement.x + 'px';
                    tooltipBlock.style.top = posElement.y + 23 + 'px';
                }

                tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
            }, 250);
        }
    }
    function tooltipOff() {
        clearTimeout(tooltip);
        document.getElementById('tooltipBtn').style.animation = '';
    }

    let dateFormat = data[index].date.split(' ')[0]
    let timeFormat = data[index].date.slice(10, data[index].date.length)
    // {console.log(dateFormat,dateFormat2)}
    return (
        <>
            {data.length > 0 && (
                <tr
                    className={'speed'
                    }
                    key={index}
                >
                    <td className="sticky-body">
                        <div className="sticky-block">
                            <div className="stickyBeforeBody"></div>
                            <div style={{ width: 51, paddingRight: 10, display: 'flex', alignItems: 'center' }}>
                                <img style={{ marginLeft: 5 }} src={data[index].status[0]} alt='' />
                                <img style={{ marginLeft: 5 }} src={data[index].status[1]} alt='' />
                                {/* <SwitchBtn status={data[index].status} data={data} setData={setData} index={index} /> */}
                            </div>
                            <div
                                // className="id-width"
                                // onMouseLeave={data[index].lock ? () => { } : tooltipOff}
                                // onMouseEnter={data[index].lock ? () => { } : tooltipOn}
                                style={{ textAlign: 'right', paddingRight: '10px', width: 51, height: 18, lineHeight: '18px' }}
                            >
                                {data[index].id}
                            </div>
                            <div
                                // onMouseLeave={data[index].lock ? () => { } : tooltipOff}
                                // onMouseEnter={data[index].lock ? () => { } : tooltipOn}
                                style={{ width: 106, paddingRight: '10px', height: 18, lineHeight: '18px' }}
                            >
                                {dateFormat}<span style={{ fontSize: '10px', color: 'rgba(0,0,0,0.5)' }}>{timeFormat}</span>
                            </div>
                            <div
                                onMouseLeave={tooltipOff}
                                onMouseEnter={tooltipOn}
                                style={
                                    { width: 120, height: 18, lineHeight: '18px', overflow: 'hidden', textOverflow: 'ellipsis' }
                                }
                            >
                                {data[index].employee}
                            </div>
                            <div className="shadow-left"></div>
                        </div>
                    </td>
                    <td style={{ paddingLeft: 12, height: 18, lineHeight: '18px', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 53 }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].idAttribute}
                    </td>
                    <td style={{ padding: '0px 10px', height: 18, lineHeight: '18px', maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis' }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].goods}
                    </td>
                    <td style={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: 110,
                        paddingRight: 10
                    }}
                        className="attribute-width"
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        <img
                            style={{ width: 16, height: 16, position: 'absolute' }}
                            src={data[index].images}
                            alt=""
                        />
                        <span className="attribute">
                            {data[index].attribute}
                        </span>

                    </td>
                    <td style={{ textAlign: 'center' }}>

                        {data[index].plusMinus ? '+' : '-'}
                    </td>
                    <td style={{ minWidth: 51, maxWidth: 51, textAlign: 'right', height: 18, lineHeight: '18px' }}>
                        {data[index].count} <span style={{ paddingRight: '3px', color: 'rgba(0,0,0,0.5)' }}>/</span>
                    </td>
                    <td
                        className="izStatusa"
                        style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            paddingRight: '4px',
                        }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].izStatusa.name}
                        <span style={{ pointerEvents: 'none', background: data[index].izStatusa.color }}></span>
                    </td>
                    <td
                        className="vStatus"
                        style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            paddingRight: '4px',
                        }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].vStatus.name}
                        <span style={{ pointerEvents: 'none', background: data[index].vStatus.color }}></span>
                    </td>
                    <td
                        className="defaultGray"
                        style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            paddingRight: '10px',
                        }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].ostatok}
                        <span style={{ pointerEvents: 'none' }}></span>
                    </td>
                    <td style={{ paddingRight: '10px', textAlign: 'right', height: 18, lineHeight: '18px' }}>
                        {data[index].plusMinus ? '' : '-'}{data[index].suma}
                    </td>
                    <td style={{ paddingRight: '10px', height: 18, lineHeight: '18px', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: 120 }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].suppliers}
                    </td>
                    <td style={{ height: 18, lineHeight: '18px', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: 150 }}
                        onMouseEnter={tooltipOn}
                        onMouseLeave={tooltipOff}
                    >
                        {data[index].commentary}
                    </td>
                </tr>
            )}
        </>
    );
};

export default GoodsMovementList;

import React,{useState} from 'react'

const WarehouseInput = ({setPodlozhka, podlozhka}) => {
    const [inputID, setInputID] = useState('');
    function warehouseInputOn(e) {
		e.currentTarget.querySelector('input').focus();
		// e.currentTarget.querySelector('.underline').style.width = '100%';
	}
	function warehouseInputOff(e) {
        if(podlozhka){

        } else {
            
            e.currentTarget.querySelector('input').blur();
        }
		// e.currentTarget.querySelector('.underline').style.width = '0%';
	}
    function changeInput(e) {
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.style.visibility = 'hidden';
		// });
        document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			// x.style.visibility = 'visible';
			x.classList.add('hide-menu');
		});
        e.target.closest('.warehouse-input').classList.remove('hide-menu');
        document.querySelector('.contentScroll').style.overflow = 'hidden';

        // document.querySelector('.warehouse-table').style.overflow = 'hidden';

		// e.target.closest('.warehouse-input').style.visibility = 'visible';
        setInputID(e.target.value);
        if (e.target.value.length === 1) {
            e.target.value =
                e.target.value[0].toUpperCase() + e.target.value.slice(1);
            setInputID(e.target.value);
        }
		setPodlozhka(true);
	}
    function enter(e) {
        if(e.key === "Enter") {
            document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
                // x.style.visibility = 'visible';
                x.classList.remove('hide-menu');
            });
            document.querySelector('.warehouse-table').style.overflow = '';

            setPodlozhka(false);
            e.currentTarget.blur();
        }
    }
  return (
    <div
    onMouseLeave={warehouseInputOff}
    onMouseEnter={warehouseInputOn}
    className="warehouse-input"
>
    <input
        onChange={changeInput}
        onKeyDown={enter}
        value={inputID}
        type="text"
        style={{color: 'rgba(0, 0, 0, 0.65)'}}
    />
    <span className="underline"></span>
</div>
  )
}

export default WarehouseInput;

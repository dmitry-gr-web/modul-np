import React,{useState} from 'react'

const WarehouseInput = ({setPodlozhka}) => {
    const [inputID, setInputID] = useState('');
    function warehouseInputOn(e) {
		e.currentTarget.querySelector('input').focus();
		// e.currentTarget.querySelector('.underline').style.width = '100%';
	}
	function warehouseInputOff(e) {
		e.currentTarget.querySelector('input').blur();
		// e.currentTarget.querySelector('.underline').style.width = '0%';
	}
    function changeInput (e) {
		// document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
		// 	x.style.visibility = 'hidden';
		// });
        document.querySelectorAll('.warehouse-dropmenu , .warehouse-input').forEach((x) => {
			// x.style.visibility = 'visible';
			x.classList.add('hide-menu');
		});
        e.target.closest('.warehouse-input').classList.remove('hide-menu');
		// e.target.closest('.warehouse-input').style.visibility = 'visible';
        setInputID(e.target.value);
        if (e.target.value.length === 1) {
            e.target.value =
                e.target.value[0].toUpperCase() + e.target.value.slice(1);
            setInputID(e.target.value);
        }
		setPodlozhka(true);
	}
  return (
    <div
    onMouseLeave={warehouseInputOff}
    onMouseEnter={warehouseInputOn}
    className="warehouse-input"
>
    <input
        onChange={changeInput}
        value={inputID}
        type="text"
    />
    <span className="underline"></span>
</div>
  )
}

export default WarehouseInput;

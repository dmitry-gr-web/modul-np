import React from "react";
export default function SwitchBtn ({status,index,data,setData,getStart}) {
    // const [st,setSt] = useState(status);
    // useEffect(()=> {
    // 	// e.stopPropagation();
    // 	setSt(status)
    // 	// setSt(!st)
    // }, [])
    function switchBtn(e) {
        e.stopPropagation();
        let temp = (getStart() < 0 ? 0 : getStart());
        data[index + temp].status = !data[index + temp].status
        setData([...data]);
        // setSt(!st)
        // let temp = (getStart() < 0 ? 0 : getStart());
        // objAttribute[index + temp].status = !objAttribute[index + temp].status;
        // setObjAttribute([...objAttribute]);
    }
    
    // React.memo(status)
    // useMemo(()=>{

    // },[SwitchBtn])
    // useMemo(switchBtn,[status])

    return (
        <label className="switch-btn-warehouse">
            <input
                type="checkbox"
                className="status-all"
                onChange={switchBtn}
                // defaultChecked={objProduct[index].status.all}
                checked={!status}
            />
            <span className="slider round"></span>
        </label>
    )
}
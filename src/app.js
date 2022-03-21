import React,{useState} from 'react';
import ModulNp from './ModulNp';
import Warehouse from './components/warehouse/Warehouse';

const App = () => {
    const [btn,setBtn] = useState(true);
	return (
		<>  
            <button style={{position: "absolute", top: 0}} onClick={() => setBtn(!btn)}>Переключатель</button>
      
            {!btn ? <ModulNp /> : <Warehouse/>}
		
		</>
	);
};

export default App;

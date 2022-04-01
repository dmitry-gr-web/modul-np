function App({ data, rowHeight, visibleRows }) {
    const rootRef = React.useRef();
    const [start, setStart] = React.useState(0);
    
    
    function getTopHeight() {
      return rowHeight * start;
    }
    function getBottomHeight() {
      return rowHeight * (data.length - (start + visibleRows + 1));
    }
    
    React.useEffect(() => {
      function onScroll(e) {
        setStart(Math.min(
          data.length - visibleRows - 1,
          Math.floor(e.target.scrollTop / rowHeight)
        ));
      }
      rootRef.current.addEventListener('scroll', onScroll);
  
      return () => {
        rootRef.current.removeEventListener('scroll', onScroll);
      }
    }, [data.length, visibleRows, rowHeight]);
    
    return (
      <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
      <table>
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
            <tr
              style={{ height: rowHeight }}
              key={start + rowIndex}
            >{row.map((text, colIndex) => (
              <td key={start + '' + rowIndex + colIndex}>{text}</td>
            ))}</tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }} />  
      </div>
  
    )
  }
  
  function makeTableData(w, h) {
    return new Array(h).fill(0).map((_, row) => {
      return new Array(w).fill(0).map((_, col) => {
        return row * 10 + col;
      });
    });
  }
  
  ReactDOM.render(<App
    data={makeTableData(5, 10000)}
    rowHeight={40}
    visibleRows={3}
  />, document.getElementById('root'));


import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";

import "./styles.css";

const Row = ({ index, style, data }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {/* {data && console.log(data[index])} */}
    {data && data[index].userId}
    <br />
    {data && data[index].title}
  </div>
);

const Example = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  // const Trlist = () => {
  //   return (
  //     <div>
  //       {data.map((x) => (
  //         <div>
  //           {x.userId}
  //           {x.title}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  return (
    <List
      className="List"
      height={150}
      itemCount={200}
      itemSize={35}
      width={300}
      itemData={data}
    >
      {Row}
    </List>
  );
};

ReactDOM.render(<Example />, document.getElementById("root"));

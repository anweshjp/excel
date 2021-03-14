import './App.css';

import React, { useState } from 'react';

import ExcelSheet from './components/ExcelSheet';

function App() {
  const [row,setRow]=useState(0);
  const [column,setColumn]=useState(0);
  const [showExcel, setshowExcel] = useState(false)

  return (
    <div className="App">
      Excel sheet
      <input type="text" placeholder="enter row" onChange={(e)=>{setRow(e.target.value)}}></input>
      <input type="text" placeholder="enter column" onChange={(e)=>{setColumn(e.target.value)}}></input>
      <button type="submit" onClick={()=>{setshowExcel(true)}}> Submit </button>
      {showExcel && <ExcelSheet row={row} column={column}>
        </ExcelSheet>}
    </div>
  );
}

export default App;

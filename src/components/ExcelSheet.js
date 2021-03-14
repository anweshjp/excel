import React, { useState } from "react";

const ExcelSheet =({row, column})=>{
    const[data, setData] = useState({})
    console.log("data----",data)
    return (
        <div onChange = {()=>{}}>
            {/* //generate  excel sheet based on dimension*/}
            <GenerateRowColumn column={column} row={row} setData={setData} data={data}/>
        </div>
    )
}

const GenerateRows = ({rowNo, columnNo, setData, data})=>{
    var rows=[];
    for(var i=1;i<=rowNo;i++){
        
        let alphabetColumn = (i + 9).toString(36).toUpperCase();
        let cellKey = alphabetColumn+columnNo
        rows.push(
        <input onChange={(e)=>{
            let value = e.target.value;
            if(value.includes("SUM")){
                evaluateSum(data, value)
            }else{
                console.log(cellKey)
                setData({...data, [cellKey]:value})
            }
            }} 
            key={cellKey}>
        </input>);
    }
    return (
        <div>
            {rows}
        </div>
    )
}

const evaluateSum= (data, value)=>{
    console.log("data----",data)
    console.log("value---",value)
    let getCellAddress = value.split(":")[1];
    if(getCellAddress){
        let cellAddress = getCellAddress.split("+");
        let sum = cellAddress.reduce((acc,ini)=>{
            
        })
    }
    console.log("type---",typeof(getCellAddress));
    console.log("value----",getCellAddress);
}

const GenerateRowColumn = ({column, row, setData, data})=>{
    var sheet=[];
    for(let i=0; i<column; i++){
        sheet.push(<GenerateRows key={i} rowNo={row} columnNo={i} setData={setData} data={data}></GenerateRows>);
    }
    return (
        <div>
            {sheet}
        </div>
    )
}
export default ExcelSheet
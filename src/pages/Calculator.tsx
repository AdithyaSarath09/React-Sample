import React, { useState } from 'react'


const calculator = () => {
const[text,setText] = useState<string>('');


const handleClick = (value: string) =>{
    setText((pre)=>pre + value);
}

function HandleReset(){
  setText('');
}
const HandleCalc =()=>{
    try{
        setText(eval(text).toString());
    }
    catch{
        setText("Error");
    }

}
  return (
    <div>
      <h1>Calculator</h1> 
    
    
        <input type="text" value={text} placeholder="Enter number"/><br></br>
        {
            [1,2,3,4,5,6,7,8,9,0].map((num) => (
                <button key={num} onClick={() => handleClick(num.toString())}>{num}
                </button>
            ))
                
            
        }
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button type="submit" onClick={HandleReset}>C</button>
        <button onClick={HandleCalc} >=</button>
        

    </div>
  )
}

export default calculator

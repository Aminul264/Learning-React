import React,{useState} from 'react';

import  './counter.css'

const Counter = () => {


  const [Count, setCount] = useState(0);

  const HandleInc = ()=>{
    setCount((Count)=>Count+1);
  };
  const HandleDec=()=>{
    setCount((prevCount)=>{
        return  prevCount-1;
    })
  }
  const HandleReset=()=>{
    setCount((Count)=>0)
  }
  const controlDisable= ()=>{
    if(Count===-5) {
      return true;
    }
  }


  return (
    <div className='Card'>
      <h1 className='cardTitle'>Counter : {Count}</h1>
      <div className='btnGroup'>
        <button className='btn' onClick={HandleInc} disabled={Count===5}>+</button>
        <button className='btn' onClick={HandleDec} disabled={controlDisable()}>-</button>
        <button className='btn' onClick={HandleReset} >Reset</button>
      </div>


    </div>
  );
};

export default Counter;

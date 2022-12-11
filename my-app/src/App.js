import React, {useState} from "react";
import Aminer from './Aminer';
import './index.css'
const Amin = () => {
  const [state, setState] = useState(18)
  const [num, setnum] = useState("")
  const increment = () => {
    setState(state +1);
    if(state % 2){setnum("is divided by two");}
    else{setnum("is not divided by two")}
};
const decrement = () => {
  setState(state -1);
  if(state%2){setnum("is divided by two");}
  else{setnum("is not divided by two")};
};

    return( <div className='holder'>
    <p>{num}</p>
    <p>{state}</p>
    <button onClick={increment} className="amin" id='amin'>increment</button>
    <button onClick={decrement} className="amin" id='aminer'>decrement</button>
    <Aminer/>
    </div>)
    }



export default Amin;

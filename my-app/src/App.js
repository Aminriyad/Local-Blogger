import React from "react";
import Aminer from './Aminer';
import './index.css'
const Amin = () => {
  var state = {
    age : 18,
    isit: "Click increment to see if it divided by two"
  };
  var increment = () => {
    this.setState({age: this.state.age+1});
    if(this.state.age % 2){
      this.setState({second:"is divided by two"});
    document.getElementById('amin').style.backgroundColor = "red"}
    else{
    this.setState({second:"is not divided by two"})
    document.getElementById('amin').style.backgroundColor = "blue";}
};
var decrement = () => {
  this.setState({age: this.state.age-1});
  if(this.state.age %2){
    this.setState({second:"is divided by two"});
  document.getElementById('aminer').style.backgroundColor = "red"}
  else{
  this.setState({second:"is not divided by two"})
  document.getElementById('aminer').style.backgroundColor = "blue";};
};

    return( <div className='holder'>
    <p>{state.second}</p>
    <p>{state.age}</p>
    <button onClick={increment} className="amin" id='amin'>increment</button>
    <button onClick={decrement} className="amin" id='aminer'>decrement</button>
    <Aminer/>
    </div>)
    }



export default Amin;

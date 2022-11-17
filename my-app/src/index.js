import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Amin extends React.Component{
  state = {
    age : 18,
    isit: "Click increment to see if it divided by two",
  }
  increment = () => {
    this.setState({age: this.state.age+1});
    if(this.state.age %2){
      this.setState({second:"is divided by two"});
    document.getElementById('amin').style.backgroundColor = "red"}
    else{
    this.setState({second:"is not divided by two"})
    document.getElementById('amin').style.backgroundColor = "blue";}
}
decrement = () => {
  this.setState({age: this.state.age-1});
  if(this.state.age %2){
    this.setState({second:"is divided by two"});
  document.getElementById('aminer').style.backgroundColor = "red"}
  else{
  this.setState({second:"is not divided by two"})
  document.getElementById('aminer').style.backgroundColor = "blue";};
}
  render() {
    return <div className='holder'>
    <p>{this.state.second}</p>
    <p>{this.state.age}</p>
    <button onClick={this.increment} className="amin" id='amin'>Increment</button>
    <button onClick={this.decrement} className="amin" id='aminer'>Decrement</button>
    </div>;
  }

}
const el = <Amin/>
ReactDOM.render(
  el,
  document.getElementById("root"))

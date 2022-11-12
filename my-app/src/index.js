import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Amin extends React.Component{
  state = {
    age : 18
  }
  increment = () => {
    this.setState({age: this.state.age+1});
  }
  render() {
    return <div>
    <p>{this.state.age}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
const el = <Amin/>
ReactDOM.render(
  el,
  document.getElementById("root"))

import React from "react";
import './index.css';
import Home from './Home';
import Navbar from "./Navbar";
const Amin = () => {
  return(
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  )
    }



export default Amin;

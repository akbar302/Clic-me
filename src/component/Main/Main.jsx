import React,{useState} from "react";
import "./main.css";
import Mini from "./Mini.jsx"
import img from "../../images/netfix-main-img.png"

const Main = () => {

  const[number,setnumber]=useState(0)

  const inc=()=>{
setnumber(number+1)
  }

  const dec=()=>{
    setnumber(number-1)
      }

  return (
    
    
    <div className="main">
    <Mini number={number}/>
<card>
  <img src={img} alt="" />
<div className="main-item">
  <div className="main-hd">
    <h1>{number}</h1>
  </div>
  <div className="main-btn">
    <button onClick={inc}><h2>inc</h2></button>
    <button onClick={dec}><h2>dec</h2></button>
  </div>
</div>


</card>

  </div>
  
  )
};

export default Main;

import React, { useEffect, useState } from "react";
import Home from "../src/Home/index";
import Income from '../src/Income/index';
import Expense from '../src/Expense/index';
import Practice from "../src/Practice/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {



  
  let sum=0;
  const[inputval,setInputVal]=useState([])
  inputval.map((x) => {
    sum += x;
    return sum;
  });
  let string = JSON.stringify([...inputval])
  useEffect(()=>{
    localStorage.setItem("arr",string);
  },[inputval])
 
  return (
         <Routes>
      <Route path="/" element={<Home inputval={inputval} sum={sum}/>}/>
      <Route path="/income" element={<Income inputval={inputval} setInputVal={setInputVal}/>} />
      <Route path="/expense" element={<Expense/>}/>
       </Routes>
     
  );
}

export default App;

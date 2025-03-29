import React, { useEffect, useState } from "react";
import Home from "../src/Home/index";
import Income from '../src/Income/index';
import Expense from '../src/Expense/index';
import Practice from "../src/Practice/index";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

function App() {



  
  let sum=0;
  const[change,setChange] = useState(false);
  const[catarr,setcatarr] = useState([]);
  const[storedarr,setStoredArr] = useState(() => {
   
    const saved = localStorage.getItem("finalval");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });;
  


  for(let i=0; i<storedarr.length; i++){
  
    if(!isNaN(storedarr[i])){
    sum+=Number(storedarr[i])
    console.log(sum);
    }
  }

  localStorage.setItem("finalval",JSON.stringify(storedarr))
  
console.log(catarr);


catarr.map((x)=>{
  console.log(x.input);
})
 
   
  return (
         <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home  sum={sum} storedarr={storedarr}/>}/>
      <Route path="/income" element={<Income setcatarr={setcatarr} setStoredArr={setStoredArr} change={change} setChange={setChange} storedarr={storedarr}/>} />
      <Route path="/expense" element={<Expense/>}/>
       </Routes>
     
  );
}

export default App;

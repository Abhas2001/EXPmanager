import React, { useEffect, useState } from "react";
import Home from "../src/Home/index";
import Income from '../src/Income/index';
import Expense from '../src/Expense/index';
import Practice from "../src/Practice/index";
import Transaction from "../src/Transaction/index";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

function App() {



  
  let sum=0;
  
  

  const[change,setChange] = useState(false);
  const[transaction,settransaction] = useState(false);
  const[home,sethome] = useState(true);
  const[catarr,setcatarr] = useState(()=>{
    const Saved = localStorage.getItem("Recent")
    const initials = JSON.parse(Saved);
    return Array.isArray(initials) ? initials : [];
  });
  const[storedarr,setStoredArr] = useState(() => {
   
    const saved = localStorage.getItem("finalval");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });;
  

  useEffect(()=>{
       localStorage.setItem("Recent",JSON.stringify(catarr))
       
  },[catarr])


  for(let i=0; i<storedarr.length; i++){
  
    if(!isNaN(storedarr[i])){
    sum+=Number(storedarr[i])
    console.log(sum);
    }
  }

  localStorage.setItem("finalval",JSON.stringify(storedarr))
  console.log("YAHI NA CHAHIYE", catarr);
  

const newarr = catarr.filter((x)=>x.CurrentD===2);
    

var newbeta = catarr;  

for(let i=0;i<newbeta.length;i++){
  for(let j=i+1;j<newbeta.length;j++){
    if(Number(newbeta[i].input)<Number(newbeta[j].input)){
      

      
      console.log(i,j);
      
      let temp=newbeta[i];

      console.log("temp:",temp);
      newbeta[i] = newbeta[j];

      console.log("newbeta[i]:",newbeta[i],i);
      newbeta[j]=temp;

      console.log(" newbeta[j]:", newbeta[j],j);
    
    }
  }
}

  
console.log(newbeta);



 
   
  return (
         <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home home={home} sethome={sethome} transaction={transaction} settransaction={settransaction} catarr={catarr} sum={sum} storedarr={storedarr}/>}/>
      <Route path="/income" element={<Income  setcatarr={setcatarr} setStoredArr={setStoredArr} change={change} setChange={setChange} storedarr={storedarr}/>} />
      <Route path="/expense" element={<Expense/>}/>
      <Route path="/recenttransaction" element={<Transaction sethome={sethome} settransaction={settransaction} transaction={transaction} catarr={catarr}/>}/>
       </Routes>
     
  );
}

export default App;

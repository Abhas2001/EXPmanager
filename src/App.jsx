import React, { useEffect, useState } from "react";
import Home from "../src/Home/index";
import Income from '../src/Income/index';
import Expense from '../src/Expense/index';
import Practice from "../src/Practice/index";
import Transaction from "../src/Transaction/index";
import Detailed from "../src/Detailed/index"
import Report from '../src/FinancialReport/index';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

function App() {



  
  let sum=0;
  let negatives=0;
  
  

  const[change,setChange] = useState(false);
  const[transaction,settransaction] = useState(false);
  const[home,sethome] = useState(true);
  const[catarr,setcatarr] = useState(()=>{
    const Saved = localStorage.getItem("Recent")
    const initials = JSON.parse(Saved);
    return Array.isArray(initials) ? initials : [];
  });

  const[negarr,setnegarr] = useState(()=>{
    const Saved = localStorage.getItem("Recentneg")
    const initials = JSON.parse(Saved);
    return Array.isArray(initials) ? initials : [];
  });
  const[storedarr,setStoredArr] = useState(() => {
   
    const saved = localStorage.getItem("finalval");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });

  const[storednegarr,setStorednegArr] = useState(() => {
   
    const saved = localStorage.getItem("negval");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });;
  
  
const[detailed,setDetailed] = useState([]);
const[imgLinks,setImgLinks] = useState()



  useEffect(()=>{
       localStorage.setItem("Recentneg",JSON.stringify(catarr))
       
  },[catarr])

  useEffect(()=>{
    localStorage.setItem("Recent",JSON.stringify(negarr))
    
},[negarr])


  for(let i=0; i<storedarr.length; i++){
  
    if(!isNaN(storedarr[i])){
    sum+=Number(storedarr[i])
    console.log(sum);
    }
  }


  
  for(let i=0; i<storednegarr.length; i++){
  
    if(!isNaN(storednegarr[i])){
      negatives+=Number(storednegarr[i])
    console.log(negatives);
    }
  }

  localStorage.setItem("finalval",JSON.stringify(storedarr))
  localStorage.setItem("negval",JSON.stringify(storednegarr))
 
 

   
  return (
         <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home setDetailed={setDetailed} home={home} sethome={sethome} transaction={transaction} settransaction={settransaction} catarr={catarr} negatives={negatives} sum={sum} storednegarr={storednegarr} storedarr={storedarr}/>}/>
      <Route path="/income" element={<Income setImgLinks={setImgLinks} setcatarr={setcatarr} setStoredArr={setStoredArr} change={change} setChange={setChange} storedarr={storedarr}/>} />
      <Route path="/expense" element={<Expense setImgLinks={setImgLinks} setnegarr={setnegarr} setStorednegArr={setStorednegArr} change={change} setChange={setChange} storedarr={storedarr}/>}/>
      <Route path="/recenttransaction" element={<Transaction sethome={sethome} settransaction={settransaction} transaction={transaction} catarr={catarr}/>}/>
      <Route path="/detailed" element={<Detailed catarr={catarr} setcatarr={setcatarr} detailed={detailed} imgLinks={imgLinks}/>} />
      <Route path="/report" element={<Report/>}/>
       </Routes>
     
  );
}

export default App;

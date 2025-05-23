import React, { useEffect, useState } from "react";
import Home from "../src/Home/index";
import Income from '../src/Income/index';
import Expense from '../src/Expense/index';
import Practice from "../src/Practice/index";
import Transaction from "../src/Transaction/index";
import Detailed from "../src/Detailed/index"
import Report from '../src/FinancialReport/index';
import Onboarding from '../src/Onboarding/index';
import SignUp from '../src/SignUp/index';
import Login from '../src/Login/index';
import Account from '../src/Account/index'
import Transfer from '../src/Transfer/index'
import Traffic from '../src/Components/traffic';
import Budget from '../src/Budget/index';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

function App() {



  let sum=0;
  let negatives=0;
  
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[pass,setPass] = useState('');
  const[change,setChange] = useState(false);
  const[totexpense,settotexpense]=useState()
  const[totIncome,settotIncome]=useState()
  const[transaction,settransaction] = useState(false);
  const[home,sethome] = useState(true);
  const[catarr,setcatarr] = useState(()=>{
    const Saved = localStorage.getItem("Recent")
    const initials = JSON.parse(Saved);
    return Array.isArray(initials) ? initials : [];
  });

  const[negarr,setnegarr] = useState(()=>{
    const Savedneg = localStorage.getItem("Recentneg")
    const initials = JSON.parse(Savedneg);
    return Array.isArray(initials) ? initials : [];
  });
  const[storedarr,setStoredArr] = useState(() => {
   
    const saved = localStorage.getItem("finalval");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });

  const[storednegarr,setStorednegArr] = useState(() => {
   
    const savedneg = localStorage.getItem("negval");
    const initialValue = JSON.parse(savedneg);
    return initialValue || ""
  });;
  

  
const[detailed,setDetailed] = useState([]);
const[imgLinks,setImgLinks] = useState()
const[Incomes,setIncomes] = useState(false);
const[Expenses,setExpenses] = useState(false);
const[showincomepage,setshowincomepage] = useState(false);
const[edit,setedit] = useState(false);
const[profilecolored,setprofilecolored] = useState(false);
const[budgetcolored,setBudgetcolored] = useState(false);
const[loader,setloader] = useState(false);
const[dark,setdark] = useState(false);
console.log("DARK",dark);

  useEffect(()=>{
       localStorage.setItem("Recent",JSON.stringify(catarr))
       
  },[catarr])

  
  useEffect(()=>{
    localStorage.setItem("Recentneg",JSON.stringify(negarr))
    
},[negarr])

const handlesum = () =>{

  for(let i=0; i<storedarr.length; i++){
   
    if(!isNaN(storedarr[i])){
    sum+=Number(storedarr[i])
     
    }
  }
  settotexpense(sum);

  
}


useEffect(()=>{
  handlesum();
},[storedarr])



const handlenegatives = () =>{
  
  for(let i=0; i<storednegarr.length; i++){
  
    if(!isNaN(storednegarr[i])){
      negatives+=Number(storednegarr[i])
 
    }
  }
  settotIncome(negatives);

}


useEffect(()=>{
  handlenegatives();
},[storednegarr])

  localStorage.setItem("finalval",JSON.stringify(storedarr))
  localStorage.setItem("negval",JSON.stringify(storednegarr))


   
  return (
         <Routes>
          <Route path="/" element={<Onboarding/>} />
          <Route path="/account" element={<Account budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored} setdark={setdark} home={home} setloader={setloader} loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} name={name} sethome={sethome} transaction={transaction} settransaction={settransaction}  Expenses={Expenses}  Incomes={Incomes} setExpenses={setExpenses} setIncomes={setIncomes} setDetailed={setDetailed} negarr={negarr}  catarr={catarr} negatives={negatives} totIncome={totIncome} totexpense={totexpense} storednegarr={storednegarr} storedarr={storedarr} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp pass={pass} setPass={setPass} email={email} setEmail={setEmail} name={name} setName={setName}/>}/>
      <Route path="/home"  element={<Home budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored} dark={dark} setloader={setloader} loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} Expenses={Expenses}  Incomes={Incomes} setExpenses={setExpenses} setIncomes={setIncomes} setDetailed={setDetailed} negarr={negarr} home={home} sethome={sethome} transaction={transaction} settransaction={settransaction} catarr={catarr} negatives={negatives} totIncome={totIncome} totexpense={totexpense} storednegarr={storednegarr} storedarr={storedarr}/>}/>
      <Route path="/income" element={<Income catarr={catarr} edit={edit} detailed={detailed} showincomepage={showincomepage} setshowincomepage={setshowincomepage} setImgLinks={setImgLinks} setcatarr={setcatarr} setStoredArr={setStoredArr} change={change} setChange={setChange} storedarr={storedarr}/>} />
      <Route path="/expense" element={<Expense showincomepage={showincomepage} setshowincomepage={setshowincomepage} setImgLinks={setImgLinks} setnegarr={setnegarr} setStorednegArr={setStorednegArr} change={change} setChange={setChange} storedarr={storedarr}/>}/>
      <Route path="/transfer" element={<Transfer showincomepage={showincomepage} setshowincomepage={setshowincomepage} setImgLinks={setImgLinks} setnegarr={setnegarr} setStorednegArr={setStorednegArr} change={change} setChange={setChange} storedarr={storedarr} /> }/>
      <Route path="/recenttransaction" element={<Transaction budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored} home={home}  profilecolored={profilecolored} setprofilecolored={setprofilecolored} setloader={setloader} loader={loader} totexpense={totexpense} totIncome={totIncome} storednegarr={storednegarr} Expenses={Expenses} Incomes={Incomes} setExpenses={setExpenses} setIncomes={setIncomes} setDetailed={setDetailed} sethome={sethome} settransaction={settransaction} transaction={transaction} catarr={catarr} negarr={negarr}/>}/>
      <Route path="/detailed" element={<Detailed setedit={setedit} setnegarr={setnegarr} storednegarr={storednegarr} setStorednegArr={setStorednegArr} negarr={negarr}  catarr={catarr} setcatarr={setcatarr} detailed={detailed} imgLinks={imgLinks} storedarr={storedarr} setStoredArr={setStoredArr}/>} />
      <Route path="/report" element={<Report totexpense={totexpense} totIncome={totIncome} negarr={negarr} catarr={catarr} storedarr={storedarr} storednegarr={storednegarr}/>}/>
      <Route path="/budget" element={<Budget negarr={negarr}  budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored} loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} setloader={setloader} sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>}/>
       </Routes>
     
  );
}

export default App;

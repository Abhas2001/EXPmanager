import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import homes from '../images/homes.svg';
import unhome from '../images/uncoloredhome.svg';
import notification from '../images/user.svg';
import noncolored from '../images/noncolored.svg';
import pie from '../images/pie-chart.svg';
import add from '../images/Add.svg';
import income from '../images/Income.svg';
import ex from '../images/Expense.svg';
import Trans from '../images/Trans.svg';
import transcolored from '../images/transcolored.svg';

import profileuncolored from '../assets/colorprof.svg';
import budgetcolores from '../assets/Budgetcolored.svg';
import profilec from '../assets/coloredprofile.svg';
import budget from '../assets/Budget.svg';

const index = ({setloader,sethome,transaction,home,settransaction,setprofilecolored,profilecolored,loader,budgetcolored,setBudgetcolored}) => {

  const[btn,setBtn] = useState(false);
  const[colored,setcolored] = useState(false);

 

  const navigate = useNavigate();
  const handletrans = () =>{
    setloader(true);
    sethome(false);
    setcolored(true);
    setprofilecolored(false);
    setBudgetcolored(false);
    setTimeout(() => {
      setloader(false)
      settransaction(true);
      setprofilecolored(false);
      navigate("/recenttransaction")
    
    },1000);
  
  
  
  }

  const handleOpen = () =>{
    setBtn(!btn);
  }

  const handleIncome = () =>{
    console.log("clicked");
    navigate("/income");
  }
  const handlehomes = () => {
    console.log("clicked");
   
    settransaction(false);
    setprofilecolored(false);
    setBudgetcolored(false);
    sethome(true);
    navigate("/home")
    
  }

  const handleExpense = () =>{
    navigate("/expense")
  }


  const handleTransfer = () =>{
    navigate("/transfer")
  }

  const handleBudget = () =>{
    settransaction(false);
     sethome(false);
     setprofilecolored(false);
    setBudgetcolored(true);
    navigate("/budget")
  }
  const handleAccount = () =>{
    setBudgetcolored(false);
    setloader(true);
    console.log("GOBHII",loader);
    setprofilecolored(true);
    setcolored(false)
    sethome(false)
    settransaction(false);

    setTimeout(() => {
      setloader(false)
      settransaction(false);
 
      navigate("/account")
    
    },1000);
 
  }
  return (
    <section>
      <div className={`text-black w-full flex gap-0 justify-center items-center cursor-pointer ${btn?'translate-y-[-30px] duration-1000':'translate-y-[60px]'} `}>
        <span onClick={handleIncome}><img src={income} alt="" srcset="" /></span>
        <span onClick={handleTransfer} className={`${btn?'translate-y-[-50px]':'translate-y-[60px]'}`}><img src={Trans} alt="" srcset="" /></span>
        <span onClick={handleExpense}><img src={ex} alt="" srcset="" /></span>

      </div>
    <div className="w-full h-20 bg-[#FCFCFC] relative flex justify-between px-6 pt-3">
    <div className={`${home&&' transition-all duration-500 ease-in-out '}`} onClick={()=>handlehomes()}  >{home?<img src={homes} alt="" srcset="" />:<img src={unhome}/>}</div>
    <div className={`${transaction&&'  transition-all duration-500 ease-in-out '}`} onClick={()=>handletrans()}>{colored||transaction? <img src={transcolored} alt="" srcset="" />:<img src={noncolored} alt="" srcset="" />}</div>
    <div className={`relative bottom-9 w-16 h-16 bg-white rounded-full flex justify-center items-center p-2 cursor-pointer`} onClick={handleOpen}> 
    
      <img className={`${btn?"rotate-45":"rotate-0"}`} src={add} alt="" srcset="" />
  
    
    </div>
    <div onClick={()=>handleBudget()}>{budgetcolored?<img src={budgetcolores} alt="" srcset="" />:<img src={budget} alt="" srcset="" />}</div>
    <div onClick={()=>handleAccount()}>{profilecolored?<img src={profilec} alt="" srcset="" />:<img src={profileuncolored}/>}</div>
   
  </div>
  </section>
  )
}

export default index

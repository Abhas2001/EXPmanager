import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import home from '../images/home.svg';
import notification from '../images/user.svg';
import transaction from '../images/transaction.svg';
import pie from '../images/pie-chart.svg';
import add from '../images/Add.svg';
import income from '../images/Income.svg';
import ex from '../images/Expense.svg';
import Trans from '../images/Trans.svg';

const index = () => {

  const[btn,setBtn] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () =>{
    setBtn(!btn);
  }

  const handleIncome = () =>{
    console.log("clicked");
    navigate("/income");
  }

  const handleExpense = () =>{
    navigate("/expense")
  }
  return (
    <section>
      <div className={`text-black w-full flex gap-0 justify-center items-center cursor-pointer ${btn?'translate-y-[-30px] duration-1000':'translate-y-[60px]'} `}>
        <span onClick={handleIncome}><img src={income} alt="" srcset="" /></span>
        <span className={`${btn?'translate-y-[-50px]':'translate-y-[60px]'}`}><img src={Trans} alt="" srcset="" /></span>
        <span onClick={handleExpense}><img src={ex} alt="" srcset="" /></span>

      </div>
    <div className="w-full h-20 bg-[#FCFCFC] relative flex justify-between px-6 pt-3">
    <div><img src={home} alt="" srcset="" /></div>
    <div><img src={transaction} alt="" srcset="" /></div>
    <div className={`relative bottom-9 w-16 h-16 bg-white rounded-full flex justify-center items-center p-2 cursor-pointer`} onClick={handleOpen}> 
    
      <img className={`${btn?"rotate-45":"rotate-0"}`} src={add} alt="" srcset="" />
  
    
    </div>
    <div><img src={pie} alt="" srcset="" /></div>
    <div><img src={notification} alt="" srcset="" /></div>
   
  </div>
  </section>
  )
}

export default index

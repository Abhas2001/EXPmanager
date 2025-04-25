import React, { useState } from 'react';
import notification from '../images/notifiaction.svg';
import arrow from '../images/arrow-down-2.svg';
import down from '../images/Frame 26.svg';
import up from '../images/Frame 27.svg';
import { useNavigate } from 'react-router-dom';


const index = ({settransaction,setloader,Incomes,Expenses,inputval,totexpense,negatives,setExpenses,setIncomes,totIncome}) => {
 
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let d=new Date();
  let m=d.getMonth();

  const navigate= useNavigate();
  const[move,setMove] = useState(false);

  const handleExpenses = () =>{
    setIncomes(false);
    setExpenses(true);
    setTimeout(() => {
      setloader(true);
    }, 200);
    
    setTimeout(() => {
      setloader(false);
      settransaction(true);
      navigate("/recenttransaction")
    }, 1000);
  }

  
  const handleIncomes = () =>{
    setIncomes(true);
    setMove(true);
    setExpenses(false);
    setTimeout(() => {
      setloader(true);
    }, 1200);
    
    setTimeout(() => {
      setloader(false);
      settransaction(true);
      navigate("/recenttransaction")
    }, 1800);
 
  }
  return (
    <section className='w-full h-[170px] text-black rounded-b-[32px] bg-linear-to-b from-[#FFF6E5] to-[#F8EDD8]'>
        <section>
        {/* <section className='w-full flex justify-between p-4'>
            <div></div>
             <section className='flex'> <div><img src={arrow} alt="" srcset="" /></div><div className='text-sm font-medium text-[#212325]'>{month[m]}</div></section> 
            <div> <img src={notification} alt="" srcset="" /></div>
        </section> */}

        <section className='pt-2'>
        <section className='full flex justify-center items-center'>
            <span className='text-xs text-[#91919F] font-semibold'>Account Balances</span>
        </section>
        <section className='full flex justify-center items-center'>
        <span className='text-4xl font-semibold text-[#161719]'>{totexpense-totIncome}</span>
        </section>
        </section>
        

        <section className='flex w-full justify-center items-center gap-4 pt-3'>
            <div className={`bg-[#00A86B] ${!Incomes?'w-[150px] h-[70px] shadow-[0_0_2px_2px_rgba(0,0,0,0.3)]':'w-[150px] h-[70px] shadow-[0_0_1px_1px_rgba(0,0,0,0.3)] translate-y-[4px]'} rounded-3xl text-white`}>
              <section className='flex gap-2 w-full h-full justify-center items-center' onClick={()=>handleIncomes()}>
               
               <div className={`${move&&'translate-y-[350px] translate-x-[150px]  transition-all duration-500 ease-in-out '} bg-[#FCFCFC] p-1 rounded-xl`}><img  src={up} alt="" srcset="" /></div>
         
              <div className={`${move&&'w-full flex gap-2 justify-center items-center transition-all duration-900 ease-in-out'}`}>
              <span className={`${move&&'text-[22px] transition-all duration-500 ease-in-out '} text-[#FCFCFC] text-sm font-medium`}>Income</span>
              <h1 className='text-[22px] font-semibold'>{totexpense?totexpense:"$000"}</h1>
              </div>
              </section>  
              </div>
            <div className={`bg-[#FD3C4A] ${!Expenses?'w-[150px] h-[70px] shadow-[0_0_2px_2px_rgba(0,0,0,0.3)]':'w-[150px] h-[70px] shadow-[0_0_1px_1px_rgba(0,0,0,0.3)] translate-y-[4px]'}  rounded-3xl text-white`}>
                  
            <section className='flex gap-2 w-full h-full justify-center items-center' onClick={()=>handleExpenses()}>
               
               <div className='bg-[#FCFCFC] p-1 rounded-xl'><img src={down} alt="" srcset="" /></div>
              <div>
              <span className='w-full flex justify-center items-center text-[#FCFCFC] text-sm font-medium'>Expenses</span>
              <h1 className='text-[22px] font-semibold'>{totIncome?totIncome:"$000"}</h1>
              </div>
              </section>  

            
              </div>
        </section>

        </section>
    </section>
  )
}

export default index

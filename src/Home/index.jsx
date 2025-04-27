import React, { useEffect } from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index'
import { useState } from 'react';
import Loader from '../Loader/index';

const index = ({budgetcolored,setBudgetcolored,Incomes,dark,loader,setloader,profilecolored,setprofilecolored,Expenses,setIncomes,setExpenses, setDetailed,home,sethome,transaction,catarr,negarr,inputval,totexpense,totIncome,negatives,storedarr,settransaction,storednegarr}) => {

useEffect(()=>{
  sethome(true);
  
},[])
 


  


  return (
       
    <section className={`w-full h-screen flex justify-center items-center bg-black overflow-hidden`}>
     
    <section className={`flex flex-col justify-between text-white w-[420px] h-screen ${dark?'bg-gray':'bg-[#FFFFFF]'} `}>
    {loader?
         
         <section className='w-full h-screen flex justify-center items-center'>
      <Loader/>
      </section>
      :
      <section>
      <section className='overflow-y-auto overflow-x-hidden h-[80vh]'>
      <Header settransaction={settransaction} setloader={setloader} Expenses={Expenses} Incomes={Incomes} setIncomes={setIncomes} setExpenses={setExpenses} inputval={inputval} totexpense={totexpense} totIncome={totIncome} negatives={negatives} />
        <section> <span className={`text-lg font-semibold ${!dark?'text-[#292B2D]':'text-[#FFFFFF]'} px-3`}>Spend Frequency</span>
      <Frequency dark={dark} storedarr={storedarr} storednegarr={storednegarr}/>
      </section>
       <Recent dark={dark} home={home} setloader={setloader}  setDetailed={setDetailed} sethome={sethome} catarr={catarr} negarr={negarr} settransaction={settransaction}/>
      </section>
      
        </section>
}
    </section>
    <section className="fixed w-full bottom-0 md:static md:w-auto md:bottom-auto">
          <Footer budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored} loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} setloader={setloader} sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>
        </section>

    </section>
    
  )
}

export default index

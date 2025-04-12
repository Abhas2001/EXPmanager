import React, { useEffect } from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index'
import { useState } from 'react';

const index = ({setIncomes,setExpenses, setDetailed,home,sethome,transaction,catarr,negarr,inputval,totexpense,totIncome,negatives,storedarr,settransaction,storednegarr}) => {
 

  
  settransaction(false);

  return (
       
    <section className={`w-full h-screen flex justify-center items-center bg-black overflow-hidden`}>
    <section className='flex flex-col justify-between text-white w-[420px] h-screen bg-[#FFFFFF] '>
      <section className='overflow-y-auto overflow-x-hidden h-[80vh]'>
      <Header setIncomes={setIncomes} setExpenses={setExpenses} inputval={inputval} totexpense={totexpense} totIncome={totIncome} negatives={negatives} />

      <Frequency storedarr={storedarr} storednegarr={storednegarr}/>
       <Recent setDetailed={setDetailed} sethome={sethome} catarr={catarr} negarr={negarr} settransaction={settransaction}/>
      </section>
      <section className="fixed w-full bottom-0 md:static md:w-auto md:bottom-auto">
          <Footer  sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>
        </section>
    </section>
    </section>
    
  )
}

export default index

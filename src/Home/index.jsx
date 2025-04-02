import React, { useEffect } from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index'
import { useState } from 'react';

const index = ({home,sethome,transaction,catarr,inputval,sum,storedarr,settransaction}) => {

 

  return (
       
    <section className={`w-full h-[95vh] flex justify-center items-center bg-black overflow-hidden`}>
    <section className='flex flex-col justify-between text-white w-[395px] h-screen bg-[#FFFFFF] '>
      <section className='overflow-y-auto'>
      <Header inputval={inputval} sum={sum} />

      <Frequency storedarr={storedarr}/>
       <Recent sethome={sethome} catarr={catarr} settransaction={settransaction}/>
      </section>
      <section className="sticky  ">
          <Footer  sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>
        </section>
    </section>
    </section>
    
  )
}

export default index

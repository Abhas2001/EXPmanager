import React, { useEffect } from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index'
import { useState } from 'react';

const index = ({catarr,inputval,sum,storedarr}) => {
   
 

  return (
       
    <section className='w-full h-screen flex justify-center items-center bg-black overflow-hidden'>
    <section className='flex flex-col justify-between text-white w-[395px] h-screen bg-[#FFFFFF] '>
      <section className='overflow-y-auto'>
      <Header inputval={inputval} sum={sum} />

      <Frequency storedarr={storedarr}/>
       <Recent catarr={catarr}/>
      </section>
      <section className="sticky bottom-[22px] ">
          <Footer />
        </section>
    </section>
    </section>
    
  )
}

export default index

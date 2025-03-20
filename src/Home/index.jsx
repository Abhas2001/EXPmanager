import React, { useEffect } from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';
import { useState } from 'react';

const index = ({inputval,sum,storedarr}) => {
   
  const[showgraph,setShowgraph]  = useState(false);

  useEffect(()=>{
    setShowgraph(true);
  },[])

  return (
       
    <section className='w-full h-screen flex justify-center items-center bg-black overflow-hidden'>
    <section className='flex flex-col justify-between text-white w-[395px] h-screen bg-[#FFFFFF] '>
      <section>
      <Header inputval={inputval} sum={sum} />
      { showgraph&&
      <Frequency storedarr={storedarr}/>
}
      </section>
      <Footer/>
    </section>
    </section>
    
  )
}

export default index

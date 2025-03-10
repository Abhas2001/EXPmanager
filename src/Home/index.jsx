import React from 'react'
import Header from '../Header/index'
import Frequency from '../Frequency/index';
import Footer from '../Footer/index';

const index = ({inputval,sum,storedarr}) => {
  return (
       
    <section className='w-full h-screen flex justify-center items-center bg-black overflow-hidden'>
    <section className='flex flex-col justify-between text-white w-[395px] h-screen bg-[#FFFFFF] '>
      <section>
      <Header inputval={inputval} sum={sum} />
      <Frequency storedarr={storedarr}/>
      </section>
      <Footer/>
    </section>
    </section>
    
  )
}

export default index

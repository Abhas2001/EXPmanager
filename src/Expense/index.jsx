import React from 'react';
import {useNavigate} from "react-router-dom"

const index = () => {
   
  const navigate = useNavigate();

 const handleBack = () => {

  navigate("/");
 }

 const handleCont = () =>{
  navigate("/")
 }
  
  return (
    <section className='w-full h-screen flex justify-center items-center bg-black overflow-hidden'>
    <section className='flex flex-col justify-between text-white w-[375px] h-screen bg-[#FFFFFF] '>
      <section>
        <section className='text-black'>bgfhddsh</section>
      <button className='text-black cursor-pointer' onClick={handleBack}>back</button>
      </section>
      <section className='w-full flex justify-center items-center'>
        <input type="number" className='border-2 border-black' />
      </section>
       <section className='w-full flex justify-center items-center mb-12'>
        <button className='bg-[#7F3DFF] text-white p-4 px-32 rounded-2xl font-semibold cursor-pointer' onClick={handleCont}>Continue</button>
       </section>
    </section>
    </section>
  )
}

export default index

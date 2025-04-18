import React from 'react'
import left from '../images/Back.svg';
import show from '../assets/show.svg';
import { useState } from 'react';

const index = () => {

    
    const[name,setName] = useState('');

  return (
    <div>
      
      <section className='w-full flex justify-between p-4 mt-6'>
        <img src={left} alt="" srcset="" />
        <p className='text-lg font-bold text-[#212325]'>Sign Up</p>
        <p></p>
      </section>
      <section className='w-full flex flex-col gap-4 p-3 mt-10'>
        <input className='border-[1px] border-[#F1F1FA] p-3 rounded-2xl' type="text" placeholder='Name'/>
        <input className='border-[1px] border-[#F1F1FA] p-3 rounded-2xl' type="text" placeholder='Email' />
        <section className='w-full flex'>
        <input className='w-full border-[1px] border-[#F1F1FA] p-3 rounded-2xl' type="text" placeholder='Password' />
        <img className='fixed right-3 mt-2' src={show} alt="" srcset="" />
        </section>
      
      </section>


      <section className='w-full flex gap-3 justify-center items-center p-6'>
       <input className='border-2 border-black' style={{ transform: "scale(2.0)" }} type="checkbox" />
       <span className='w-full flex justify-center items-center'>By signing up, you agree to the Terms of Service and Privacy Policy</span>
      </section>

      <section className='w-full p-4'>
      <button className="w-full text-[#FCFCFC] bg-[#7F3DFF] text-[18px] font-[600] p-3 rounded-xl" >Sign Up</button>
      </section>
      <section className='w-full flex justify-center items-center'>
        <span className='flex font-[700] text-[14px] gap-1 text-[#91919F]'>Already have an account? <a className='text-[#8B50FF] font-[700] text-[14px] border-b-[1px] border-b-[#8B50FF]' href="">Login</a> </span>
      </section>
    </div>
  )
}

export default index

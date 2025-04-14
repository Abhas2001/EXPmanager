import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {
      const navigate = useNavigate();
    const[inputval,setinputval] = useState('')

    const[finalarr,setfinalarr] = useState()
  
    const[otp,setotp] = useState(["","","",""]);
    const handlechange = (e,index) =>{
         setinputval(e.target.value)
       
         otp[index] = e.target.value
         setotp(otp)
         let newarr = [...otp]
         setfinalarr(newarr)
        //  console.log(newarr)
        
    }

    const handlelogin = () =>{

        let value = finalarr.join('');



        if(Number(value) === 3416){
            navigate("/home")
          }
    }
   
   
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#7F3DFF]'>
        <section className='flex flex-col gap-10'>
      
        <section className='flex gap-3 ' >
      <input className='flex justify-center items-center text-center border-3 border-[#FCFCFC] rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]' maxLength={1} type="text" onChange={(e)=>handlechange(e,0)} />
      <input className='flex justify-center items-center text-center border-3 border-[#FCFCFC] rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]' maxLength={1} type="text" onChange={(e)=>handlechange(e,1)} />
      <input className='flex justify-center items-center text-center border-3 border-[#FCFCFC] rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]' maxLength={1} type="text" onChange={(e)=>handlechange(e,2)} />
      <input className='flex justify-center items-center text-center border-3 border-[#FCFCFC] rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]' maxLength={1} type="text" onChange={(e)=>handlechange(e,3)} />
      </section>
      <button className='font-bold text-[#FCFCFC] text-2xl' onClick={()=>handlelogin()}>Login</button>
      </section>

    </div>
  )
}

export default index

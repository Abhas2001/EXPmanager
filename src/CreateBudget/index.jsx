import React, { useState } from 'react'
import Footer from '../Footer/index'
import prev from '../assets/prev.svg';
import Create from '../CreateBudget/index'

const index = () => {
     
    const[slide,setslide] = useState(false)
    const[count,setcount] = useState(1);
   

    const handleslide = () =>{
        setcount((prev)=>prev+1);
        console.log(count);
       if(count%2!==0){
        setslide(true);
       }
       else{
        setslide(false);
       }
    }

    const handleChange = (vak) =>{
      
        console.log(vak);
    }

  return (
    <div className='w-full h-screen bg-[#7F3DFF]'>
        
    <section className='w-full h-[60%] flex flex-col justify-between bg-[#7F3DFF]'>
      <section className='w-full flex justify-between text-[#ffffff] p-8'>
        <span><img src={prev} alt="" srcset="" /></span>
        <span className='text-[24px] font-[500]'>Create Budget</span>
        <span><img className='hidden' src={prev} alt="" srcset="" /></span>
      </section>
      <section className='flex flex-col ml-4 mb-4 text-white '>
        <span>How much do you want to spend?</span>
        <span className='text-4xl font-bold'> $0 </span>
      </section>
    </section>
   <section className='h-[40%] w-full bg-[#ffffff] rounded-t-4xl'>
    <section className='w-full h-full flex flex-col '>
        <section className='text-[#91919F] h-full flex flex-col px-4 py-4 '>
         <select onChange={(e)=>handleChange(e.target.value)}  className='border-2 border-black w-[344px] p-2 rounded-3xl' id="hdfbjhdbhf">
            
         <option value="" disabled selected hidden>Category</option>
        
            <option value="Shopping" >Shopping</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Subscription">Subscription</option>
         </select>

         <section className='w-full flex justify-between p-3'>
            <div className='flex flex-col'>
  <span className='text-[#292B2D] text-lg font-medium'>Receive Alert</span>
  <span>Receive alert when it reaches some point</span>
  </div>

  <div className={`w-20 h-8  ${slide?'bg-[#7F3DFF]':'bg-[#EEE5FF]'} rounded-full`}>
     <div className={`${slide&&'translate-x-[40px]'} w-8 h-8 rounded-full bg-[#FCFCFC]`} onClick={()=>handleslide()}></div>
  </div>
  
</section>
</section>


<section className='bg-[#7F3DFF] text-[#ffffff] w-[343px] h-14 rounded-2xl flex justify-center items-center fixed bottom-4 left-4'>
<span className='font-semibold'>Continue</span>
</section>
    </section>

   </section>


</div>
  )
}

export default index

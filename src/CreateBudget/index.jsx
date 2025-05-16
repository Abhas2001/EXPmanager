import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import prev from '../assets/prev.svg';


const index = ({setShowCreate,setBgtvalue,setOption}) => {
     
    const[slide,setslide] = useState(false)
    const[count,setcount] = useState(1);
    const[selected,setselected] = useState('');
    const[sliderValue,setSliderValue] = useState();
    const navigate = useNavigate();

   const[values,setValues] = useState()

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
       setselected(vak);
       setOption(vak)
    }

    const handleComplete = () =>{
        setShowCreate(false);
    }


    const handleback = () =>{
     setShowCreate(false)
    }

    const handleChangeslider = (e) =>{

        setSliderValue(e.target.value);
        console.log("hfdjhfbhhgfyer",e.target.value) 
    }

    const handleInputval = (e) =>{
        setValues(e.target.value)
        setBgtvalue(e.target.value)
        console.log(values);
    }

  return (
    <div className='w-full h-screen bg-[#7F3DFF] flex flex-col justify-center items-center'>
        
    <section className='w-full h-[60%] flex flex-col justify-between bg-[#7F3DFF]'>
      <section className='w-full flex justify-between text-[#ffffff] p-8'>
        <span onClick={()=>handleback()}><img src={prev} alt="" srcset="" /></span>
        <span className='text-[24px] font-[500]'>Create Budget</span>
        <span><img className='hidden' src={prev} alt="" srcset="" /></span>
      </section>
      <section className='flex flex-col ml-4 mb-4 text-white '>
        <span>How much do you want to spend?</span>
        <input
              type="number"
              placeholder="0"
          
               onChange={handleInputval}
              value={values}
              className="text-xl font-bold text-white p-0 border-2 border-[#7F3DFF] enabled:outline-none focus:text-white focus:border-2 focus:outline-[#7F3DFF] focus:border-[#7F3DFF]  placeholder:text-2xl placeholder:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
             
            />
      
      </section>
    </section>
   <section className='h-[40%] w-full bg-[#ffffff] rounded-t-4xl flex justify-center items-center'>
    <section className='w-full h-full flex flex-col '>
        <section className='text-[#91919F] h-full flex flex-col gap-4 px-4 py-6 '>
            <select onChange={(e)=>handleChange(e.target.value)}  className='border-2 border-[#F1F1FA] w-[384px] py-3 p-2 rounded-3xl' id="hdfbjhdbhf">
            
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
     <div className={`${slide&&'translate-x-[48px]'} w-8 h-8 rounded-full bg-[#FCFCFC]`} onClick={()=>handleslide()}></div>
  </div>
  
</section>
{ slide&&
<section className='w-full'>
    <input className='w-full' placeholder={sliderValue?sliderValue:0} type="range" value={sliderValue?sliderValue:0}  onChange={(e)=>handleChangeslider(e)}/>
    <div className='w-full flex justify-center items-center'>
    <span>{`${sliderValue?sliderValue:0}%`}</span>
    </div>
</section>
}

</section>


<section className='w-full flex justify-center items-center fixed bottom-4 '>
<section className=' bg-[#7F3DFF] text-[#ffffff] w-[375px] h-14 rounded-2xl flex justify-center items-center '>
<span className='font-semibold' onClick={()=>handleComplete()}>Continue</span>
</section>
</section>
    </section>

   </section>


</div>
  )
}

export default index

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const index = ({storednegarr,totIncome,totexpense}) => {
  
    const[exp,setexp] = useState(true);
    const[inc,setinc] = useState(false);
    const[bud,setbud] = useState(false);
    const[qoute,setqoute] = useState(false);
    const[financereport,setFinancereport] = useState(false);
    const navigate= useNavigate();
    
  let numarr = storednegarr.map(Number);

   let final=numarr.sort(function(a, b){return b - a});
  console.log(final);

 const handleexp = () =>{
    setexp(true);
    setinc(false);
    setbud(false);
    setqoute(false);

 }

 const handleinc = () =>{
    setexp(false);
    setinc(true);
    setbud(false);
    setqoute(false);

 }

 const handlebud = () =>{
    setexp(false);
    setinc(false);
    setbud(true);
    setqoute(false);

 }


 const handleqoute = () =>{
    setexp(false);
    setinc(false);
    setbud(false);
    setqoute(true);

 }

 const handlefinancreport = () =>{
    //,lvd,,vfl,;f
  navigate("/report");
 }

  return (
        <div className={`w-full h-screen ${exp?'bg-[#FD3C4A]':inc?'bg-[#00A86B]':bud?'bg-[#7F3DFF]':'bg-[#7F3DFF]'}`}>
            
            <section className={`w-full  flex justify-between p-4 gap-2`}>
                <div onClick={()=>handleexp()} className={`w-[90px] rounded-2xl border-[4px] border-[#FFFFFF] ${exp?'':'opacity-25'}`}></div>
                <div onClick={()=>handleinc()} className={`w-[90px] rounded-2xl border-[4px] border-[#FFFFFF] ${inc?'':'opacity-25'}`}></div>
                <div onClick={()=>handlebud()} className={`w-[90px] rounded-2xl border-[4px] border-[#FFFFFF] ${bud?'':'opacity-25'}`}></div>
                <div onClick={()=>handleqoute()} className={`w-[90px] rounded-2xl border-[4px] border-[#FFFFFF] ${qoute?'':'opacity-25'}`}></div>
            </section>

            <section className='w-full flex justify-center items-center mt-10'>
                <p className='text-[#ffffff] opacity-60 text-[24px] font-semibold'>This Month</p>
            </section>

            <section className='w-full h-56 flex flex-col gap-4 justify-center items-center'>
                <p className='font-bold text-3xl text-[#ffffff]'>{exp?'You Spend 💸':'You Earned 💰'}</p>
                <p className='font-bold text-3xl text-[#ffffff]'>{exp? totIncome:totexpense}</p>
            </section>
            { qoute&&
            <section className='w-full flex justify-center items-center fixed bottom-8'>
                <button onClick={()=>handlefinancreport()} className='bg-[#ffffff] text-[#7F3DFF] w-[343px] h-[56px] rounded-2xl font-semibold text-lg'>See the full detail</button>
            </section>
}
      
    </div>
  )
}

export default index

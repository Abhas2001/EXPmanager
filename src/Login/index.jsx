import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import right from '../assets/arrow-right.svg'

const index = () => {
      const navigate = useNavigate();
    const[inputval,setinputval] = useState('')

    const[finalarr,setfinalarr] = useState([])

   const[count,setcount] = useState(0);
   const[first,setfirst] = useState(false);
   const[second,setsecond] = useState(false);
   const[third,setthird] = useState(false);
   const[fourth,setfourth] = useState(false);
   const[shake,setshake] = useState(false);
   const[login,setlogin] = useState(false);
  
    const[otp,setotp] = useState();
   

    const handlelogin = (option) =>{

        // let value = finalarr.join('');
       setfinalarr((prev)=>[...prev,option])
       setcount((prev)=>prev+1);

      

        // if(Number(value) === 3416){
        //     navigate("/home")
        //   }
    }
   
    useEffect(()=>{
     let value = finalarr.join('')
   setotp(value)
    },[finalarr])


    useEffect(()=>{
      if(count===1){
        setfirst(true);
      }
      else if(count===2){
        setsecond(true);
      }
      else if(count===3){
        setthird(true);
      }

      else if(count===4){
        setfourth(true);
      }
    },[count])

    const handlelogindone = () =>{
      setlogin(true);
    }

    useEffect(()=>{
           if(finalarr.length===4){

            
                if(Number(otp)===3416){
                  navigate("/home")
                }
                else{
                  setfirst(false);
                  setsecond(false);
                  setthird(false);
                  setfourth(false);
                  setfinalarr([]);
                  setcount(0);
                  setshake(true);
                }
           }   
    },[login])
  
   useEffect(()=>{
    if(shake === true){
      setTimeout(() => {
        setshake(false);
      }, 100);
    }
  },[shake])
   
  return (
    <div className='w-full h-screen flex flex-col  justify-between bg-[#7F3DFF] overflow-hidden'>
      <section className='w-full flex justify-center items-center'></section>
        <section className='w-full flex flex-col gap-10 justify-center items-center'>
       <section className='font-semibold text-lg text-[#FCFCFC]'>Let’s  setup your PIN</section>
        <section className={`${shake&&'translate-x-[6px]'} flex gap-3 `} >
      <input className={`${first?'bg-[#FCFCFC]':''} flex justify-center items-center text-center border-[4px] ${!first?'border-[#EEE5FF]':'border-[#FCFCFC]'} rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]`} maxLength={1} type="text" disabled={true}/>
      <input className={`${second&&'bg-[#FCFCFC]'} flex justify-center items-center text-center border-[4px]  ${!second?'border-[#EEE5FF]':'border-[#FCFCFC]'} rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]`} maxLength={1} type="text" disabled={true} />
      <input className={`${third&&'bg-[#FCFCFC]'} flex justify-center items-center text-center border-[4px]   ${!third?'border-[#EEE5FF]':'border-[#FCFCFC]'} rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]`} maxLength={1} type="text" disabled={true} />
      <input className={`${fourth&&'bg-[#FCFCFC]'}  flex justify-center items-center text-center border-[4px] ${!fourth?'border-[#EEE5FF]':'border-[#FCFCFC]'} rounded-full w-10 h-10 text-[#FCFCFC] focus:outline-none focus:ring-0 focus:border-[#FCFCFC]`} maxLength={1} type="text" disabled={true} />
      </section>
    
      </section>


            <section className='w-full flex flex-col gap-20 mb-2'>
              <section className='w-full flex justify-around '>
              {
              ['1','2','3'].map((x)=>{
                return(
                  <button className='font-medium text-[#FCFCFC] text-5xl' onClick={()=>handlelogin(x)}>{x}</button>
                )
              })
             
       
              }
               </section>

               <section className='w-full flex justify-around text-5xl font-medium'>
              {
              ['4','5','6'].map((x)=>{
                return(
                  <button className='font-medium text-[#FCFCFC] text-5xl' onClick={()=>handlelogin(x)}>{x}</button>
                )
              })
             
       
              }
               </section>
               
               <section className='w-full flex justify-around text-5xl font-medium'>
              {
              ['7','8','9'].map((x)=>{
                return(
                  <button className='font-medium text-[#FCFCFC] text-5xl' onClick={()=>handlelogin(x)}>{x}</button>
                )
              })
             
       
              }
               </section>
               <section className='w-full flex gap-24 ml-26 text-5xl font-medium '>
               <button className='font-medium text-[#FCFCFC] text-5xl' ></button>
               <button className='font-medium text-[#FCFCFC] text-5xl' onClick={()=>handlelogin(0)} >0</button>
               <button onClick={()=>handlelogindone()}><img src={right} alt="" srcset="" /></button>
                </section>
            </section>
    </div>
  )
}

export default index

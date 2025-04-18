import React, { useState } from 'react'
import { useEffect } from 'react';
//red?'bg-[#FD3C4A]': green ?'bg-[#00A86B]' : 'bg-[#7F3DFF]'
const traffic = () => {


    const[start,setstart] = useState(false);
    const[red,setred] = useState(false);
    const[green,setgreen] = useState(false);
    const[yellow,setyellow] = useState(false);


    const handlestart = () =>{
             
        setTimeout(() => {
            setstart(true)
        }, 2000);
    }

    const handlestop = () =>{
        setstart(false);
        setred(false);
        setyellow(false);
        setgreen(false);
    }

    const handleredlight = () =>{
        setTimeout(() => {
            setred(true);
            setyellow(false);
        }, 2000);
    }

    const handlegreenlight = () =>{
        setTimeout(() => {

      
            setgreen(true);
            setred(false);
        }, 2000);
    }

    const handleyellow = () =>{
        setTimeout(() => {
            setyellow(true);
            setgreen(false);
        }, 2000);
    }
   
    useEffect(()=>{
        
        if(start){
            handleredlight();
        }

    },[start])


    useEffect(()=>{

        if(red){
            handlegreenlight();
        }

    },[red])

    useEffect(()=>{
        if(green){
            handleyellow();
        } 

    },[green])

    useEffect(()=>{
          if(yellow){
            handleredlight();
          }
    },[yellow])

  return (
    <div>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className={`w-24 h-54 flex flex-col gap-2 justify-center items-center border-2 border-[#393939] rounded-t-[50px] bg-[#393939]`}>
          <div className={`w-10 h-10 rounded-full border-2 border-white ${red?'bg-[#FD3C4A]':'#FFFFFF'}`}></div>
          <div className={`w-10 h-10 rounded-full border-2 border-white ${green?'bg-[#00A86B]':'#FFFFFF'}`}></div>
          <div className={`w-10 h-10 rounded-full border-2 border-white ${yellow?'bg-[#FFFF00]':'#FFFFFF'}`}></div>
        </div>
        <section className='flex flex-col gap-4'>
            <button onClick={()=>handlestart()} className='bg-blue'>Start</button>
            {/* <button onClick={()=>handlestop()} className='bg-blue'>Stop</button> */}
        </section>
      </section>
    </div>
  )
}

export default traffic

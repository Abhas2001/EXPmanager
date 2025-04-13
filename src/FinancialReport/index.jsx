import React from 'react'
import { useNavigate } from 'react-router-dom'
import left from '../images/Back.svg';
import chart1 from '../assets/chart10.svg';
import chart2 from '../assets/chart2.svg';
import Frequency from '../Frequency/index';
import Bar from '../Bar/index'
import shopping from "../images/shopping.svg";
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";
import full from "../assets/full.svg"

import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";
import { useState } from 'react';
import { useEffect } from 'react';

const index = ({storedarr,storednegarr,catarr,negarr,totexpense,totIncome}) => {

    const navigate = useNavigate()
    const[incomehilight,setIncomehilight] = useState(true);
    const[expensehilight,setexpensehilight] = useState(false);
    const[openBar,setOpenBar] = useState(false);
    const[Total,setTotal]=useState()
     

    const handleback = () =>{
        navigate(-1);
    }

    const handlebar = () =>{
        setOpenBar(true);
    }

    const handlenonbar  = () =>{
        setOpenBar(false);
    }

    const handleincomehilight = () =>{
        setIncomehilight(true)
        setexpensehilight(false)
      
    }

    const handleexpensehilight = () =>{
        setIncomehilight(false)
        setexpensehilight(true)
       
    }

    useEffect(()=>{

        if(incomehilight){
            
            setTotal(negarr)
        }
        else{
            setTotal(catarr)
        }


    },[incomehilight,expensehilight])


  return (
    <div className='w-full h-screen bg-white'>
        <section className='w-full flex justify-between p-6'>
        <button onClick={()=>handleback()}> <img src={left} alt="" srcset="" /></button>

            <p className='text-lg font-bold text-black'>
                Financial Report
            </p>
            <p></p>
        </section>

        <section className='w-full flex justify-between p-2'>
                <div className='flex gap-1 ml-5 font-bold text-[32px] text-[#000000]'> 
                 <p className="flex justify-center items-center text-[24px] font-bold">
              &#8377;
            </p>{!incomehilight?totexpense:totIncome}</div>
          <div className='flex'>
            { openBar?
            <div onClick={()=> handlenonbar()}>
            <img  src={full} alt="" srcset="" />
            </div>
            :
            <div className='flex'>
            <img onClick={()=> handlenonbar()} src={chart1} alt="" srcset="" />
            <img onClick={()=>handlebar()} src={chart2} alt="" srcset="" />
            </div>
}
          </div>
        </section>

        <section>
            {!openBar?
        <Frequency storedarr={storedarr} storednegarr={storednegarr}/>
        :
        <Bar storednegarr={storednegarr}/>
            }
        </section>

        <section>
            <div className='w-full flex justify-center'>
                <section className='w-[342px] h-16 bg-[#F1F1FA] flex justify-between rounded-4xl'>
                     <button onClick={()=>handleincomehilight()} className={`${!expensehilight&&incomehilight?'bg-[#7F3DFF] text-[#FCFCFC]':'text-[#000000]'}  ml-3 px-12 my-2 rounded-4xl  font-semibold`}>Expense</button>
                     <button onClick={()=>handleexpensehilight()} className={`${expensehilight&&!incomehilight?'bg-[#7F3DFF] text-[#FCFCFC]':'text-[#000000]'} mr-3 px-12 my-2 rounded-4xl  font-semibold`}>Income</button>
                </section>
            </div>
        </section>

        <section className='w-full flex flex-col justify-center items-center mt-5'>
               
        {
       Total?.map((x) => {
            return (
              <button className="w-[90%] mx-5 px-4 bg-[#FCFCFC] rounded-3xl mb-2">
                <section className="flex justify-between py-3">
                  <div className="text-black flex gap-2">
                    <section className="flex justify-center items-center">
                      {x.label[0] === "Shopping" ? (
                        <img src={shopping} alt="" srcset="" />
                      ) : x.label[0] === "Food" ? (
                        <img src={Food} alt="" srcset="" />
                      ) : x.label[0] === "Subscription" ? (
                        <img src={subs} alt="" srcset="" />
                      ) : x.label[0] === "Salary" ? (
                        <img src={salary} alt="" srcset="" />
                      ) : (
                        <img src={Tran} alt="" srcset="" />
                      )}
                    </section>
                    <section className="flex flex-col" onClick={()=>handledetailed({"label":x.label[0],"exp":x.Exp ,"description":x.description,"input":x.input,"time":x.time,"Exp":x.Exp,"img":x.imglink})}>
                      {" "}
                      <span className="text-[#292B2D] text-base font-medium">
                        {x.label[0]}
                        
                      </span>
                      <span className="text-[#91919F] font-medium text-[13px] pt-2">
                        {x.description}
                      </span>
                    </section>
                  </div>
                  <div className="text-black flex flex-col">
                    <span className={`w-full flex justify-end ${x.Exp?'text-[#FD3C4A]':'text-[#00A86B]'} text-base font-semibold`}>
                    {x.input}
                    </span>{" "}
                    <span className="text-[#91919F] font-medium text-[13px] pt-2">
                      {x.time}
                    </span>
                  </div>
                </section>
              </button>
            );
          })}
        </section>
      
    </div>
  )
}

export default index

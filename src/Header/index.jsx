import React from 'react';
import notification from '../images/notifiaction.svg';
import arrow from '../images/arrow-down-2.svg';
import down from '../images/Frame 26.svg';
import up from '../images/Frame 27.svg';


const index = ({inputval,sum}) => {
  return (
    <section className='w-full h-[220px] text-black rounded-b-[32px] bg-linear-to-b from-[#FFF6E5] to-[#F8EDD8]'>
        <section>
        <section className='w-full flex justify-between p-4'>
            <div></div>
             <section className='flex'> <div><img src={arrow} alt="" srcset="" /></div><div className='text-sm font-medium text-[#212325]'>October</div></section> 
            <div> <img src={notification} alt="" srcset="" /></div>
        </section>

        <section>
        <section className='full flex justify-center items-center'>
            <span className='text-xs text-[#91919F] font-semibold'>Account Balance</span>
        </section>
        <section className='full flex justify-center items-center'>
        <span className='text-4xl font-semibold text-[#161719]'>$000</span>
        </section>
        </section>
        

        <section className='flex w-full justify-center items-center gap-4 pt-3'>
            <div className='bg-[#00A86B] w-[150px] h-[70px] rounded-3xl text-white'>
              <section className='flex gap-2 w-full h-full justify-center items-center'>
               
               <div className='bg-[#FCFCFC] p-1 rounded-xl'><img src={up} alt="" srcset="" /></div>
              <div>
              <span className='text-[#FCFCFC] text-sm font-medium'>Income</span>
              <h1 className='text-[22px] font-semibold'>{sum?sum:"$000"}</h1>
              </div>
              </section>  
              </div>
            <div className='bg-[#FD3C4A] w-[150px] h-[70px] rounded-3xl text-white'>
                  
            <section className='flex gap-2 w-full h-full justify-center items-center'>
               
               <div className='bg-[#FCFCFC] p-1 rounded-xl'><img src={down} alt="" srcset="" /></div>
              <div>
              <span className='w-full flex justify-center items-center text-[#FCFCFC] text-sm font-medium'>Expenses</span>
              <h1 className='text-[22px] font-semibold'>$4000</h1>
              </div>
              </section>  

            
              </div>
        </section>

        </section>
    </section>
  )
}

export default index

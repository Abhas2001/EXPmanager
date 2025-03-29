import React from 'react'
import shopping from "../images/shopping.svg";

const index = ({catarr}) => {
  return (
      <section>
        <div className='w-full flex justify-between items-between text-black p-4'> <span className='text-lg font-semibold text-[#292B2D]'>Recent Transaction</span> <div className='p-1 px-3 bg-[#EEE5FF] rounded-full flex justify-center items-center'><button className='text-[#7F3DFF] text-sm font-medium'>See All</button></div> </div>
         { catarr.map((x)=>{
            return(
                <section className='w-[90%] mx-5 px-4 bg-[#FCFCFC] rounded-3xl mb-2'>
                <section className='flex justify-between py-3'>
                    <div className='text-black flex gap-2'> <section className='flex justify-center items-center'> <img src={shopping} alt="" srcset="" /> </section> <section className='flex flex-col'> <span className='text-[#292B2D] text-base font-medium'>{x.label[0]}</span><span className='text-[#91919F] font-medium text-[13px] pt-2'>Buy something</span></section></div>
                    <div className='text-black flex flex-col'><span className='w-full flex justify-end text-[#00A86B] text-base font-semibold'>{x.input}</span> <span className='text-[#91919F] font-medium text-[13px] pt-2'>10:00 AM</span></div>
                </section>
            </section>
            )
         })
        
}
        
      </section>
  )
}

export default index


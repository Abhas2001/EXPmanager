import React from 'react'
import { useNavigate } from 'react-router-dom'
import trash from '../images/trash.svg'
import left from "../images/left.svg";

const index = ({detailed,imgLinks}) => {
 
    const navigate = useNavigate()
     
    const handleback = () =>{
        navigate("/")
    }

    console.log(detailed[0]);
  return (
    <div>
      <section className='w-full h-[282px] bg-[#00A86B] rounded-b-3xl'>
        <section className='flex justify-between p-2'>
        <button onClick={()=>handleback()}> <img src={left} alt="" srcset="" /> </button>
        <span className='text-[#FCFCFC] font-semibold text-[18px]'>Detail Transaction</span>
        <img src={trash} alt="" srcset="" />
        </section>

        <section className='w-full flex justify-center items-center mt-6'>
        <p className='text-[#FCFCFC] font-bold text-[48px]'>
              &#8377;
            </p>
            <section className='felx flex-col'>
            <span className='text-[#FCFCFC] font-bold text-[48px]'>{detailed[0].input}</span>
            <span className='text-[#FCFCFC] font-medium text-[13px] mt-2'> {detailed[0].time}</span>
            </section>
        </section>

      </section>


      <section>
        <span className='font-semibold text-lg text-[#91919F]'>Description</span>
            <p className='text-[#0D0E0F] font-medium text-[16px]'>{detailed[0].description}</p>
      </section>

{ imgLinks&&
   <section className='mt-8'>
        <span className='font-semibold text-[16px] text-[#91919F]'>Attachment</span>
    <section className='flex justify-center items-center p-4'>
    <img className='w-[500px] h-[130px] rounded-3xl' src={imgLinks}  alt="" srcset="" />
    </section>
   </section>
}
   <section className='w-full flex justify-center items-center'>
    <button>Edit</button>
   </section>
   
    </div>
  )
}

export default index

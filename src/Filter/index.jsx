import React, { useState } from 'react'
import left from '../images/leftt.svg'

const index = ({setcount,setShowFilter,setHighest,highest,setNewest,setOldest, setLowest, lowest,newest,oldest,option,setOption}) => {

    const[showdrop,setShowdrop] = useState(false);
   

    const showdropdown = () =>{
        setShowdrop(true);
    }


    const handleApply =() =>{
        setShowFilter(false);
    }

  const handleNewest  = () =>{
    setNewest(true);
    setOldest(false);
    setHighest(false);
    setLowest(false);
  }


  const handleOldest = () => {
    setOldest(true);
    setNewest(false);
    setHighest(false);
    setLowest(false);
  }

    const handleHighest = () =>{
        setHighest(true);
        setLowest(false);
        setNewest(false);
        setOldest(false);

    }

    const handleLowest = () =>{
        setLowest(true);
        setHighest(false);
        setNewest(false);
        setOldest(false);
    }

    const handleReset = () =>{
        setHighest(false);
        setLowest(false);
        setNewest(false);
        setOldest(false);
        setOption('')
        setcount(0);
    }

    const handleClose = () =>{
        setShowFilter(false);
    }
    const handleSelect = (options) =>{
            setOption(options);
            setShowdrop(false);
    }
   
    if(newest||lowest||highest||oldest){
        setcount(1);
    }
    if(newest||lowest||highest||oldest && option){
        setcount(2);
    }

  return (
    <div className='p-0'>
        <section className='w-full flex justify-center items-center' onClick={()=>handleClose()}> <div className='w-[36px] rounded-3xl border-[4px] border-[#D3BDFF]'></div> </section>
      <section className='flex justify-between mt-4 p-4'>
        <span  className='text-[#000000] font-semibold text-lg'>Filter Transaction</span>
        <div className='p-1 px-3 bg-[#EEE5FF] rounded-full flex justify-center items-center'><button className='text-[#7F3DFF] text-sm font-medium' onClick={()=>handleReset()}>{'Reset'}</button></div>
      </section>

      <section className='mt-1 p-4'>
        <span className='text-[#0D0E0F] font-semibold text-lg'>Filter By</span>
        <section className='flex justify-between mt-3'>
            <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Income  </span> </button>
            <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Expense </span>  </button>
            <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Transfer</span>  </button>
        </section>
      </section>


      <section className='mt-1 p-4'>
        <span className='text-[#0D0E0F] font-semibold text-lg'>Sort By</span>
        <section className='flex justify-between mt-3'>
            <button onClick={()=>handleHighest()} className={`${highest?'bg-[#EEE5FF]':''} border-[1px] border-[#E3E5E5] rounded-full px-6 py-3`}> <span className={`font-medium text-sm ${highest?'text-[#7F3DFF]':'text-[#0D0E0F]'}`}>Highest  </span> </button>
            <button onClick={()=>handleLowest()} className={`${lowest?'bg-[#EEE5FF]':''} border-[1px] border-[#E3E5E5] rounded-full px-6 py-3`}> <span className={`font-medium text-sm ${lowest?'text-[#7F3DFF]':'text-[#0D0E0F]'}`}>Lowest </span>  </button>
            <button onClick={()=>handleNewest()} className={`${newest?'bg-[#EEE5FF]':''} border-[1px] border-[#E3E5E5] rounded-full px-6 py-3`}> <span className={`font-medium text-sm ${newest?'text-[#7F3DFF]':'text-[#0D0E0F]'}`}>Newest</span>  </button>
        </section>
        <button onClick={()=>handleOldest()} className={`${oldest?'bg-[#EEE5FF]':''} border-[1px] border-[#E3E5E5] rounded-full px-6 py-3 mt-3`}> <span className={`font-medium text-sm ${oldest?'text-[#7F3DFF]':'text-[#0D0E0F]'}`}>Oldest</span>  </button>
      </section>


      <section className='mt-1 p-4'>
        <span className='text-[#0D0E0F] font-semibold text-lg'>Category</span>
        <section className='flex flex-col justify-between mt-3'>
            <div className={`  rounded-full px-6 py-3 w-full flex justify-between`}> 
            <span className={`font-medium text-sm ${highest?'text-[#7F3DFF]':'text-[#0D0E0F]'}`}>Choose Category  </span> 
             
             <div className='flex'>
                <span>{option?option:'0 Selected'}</span>
                <button onClick={()=>showdropdown()}> <img src={left} alt="" srcset="" /></button>
             </div>
            
            
             </div>

             <section className={` ${!showdrop?'hidden':""} w-[85%] mx-5  bg-gray-50 flex flex-col h-16 overflow-y-scroll`}>
                <span onClick={()=>handleSelect('Food')} className='border-b-[1px] border-gray-100'>Food</span>
                <span  onClick={()=>handleSelect('Transportation')} className='border-b-[1px] border-gray-100'>Transportation</span>
                <span  onClick={()=>handleSelect('Shopping')} className='border-b-[1px] border-gray-100'>Shopping</span>
                <span  onClick={()=>handleSelect('Salary')} className='border-b-[1px] border-gray-100'>Salary</span>
             </section>
 
        </section>
 
      </section>

      <section className={`${!showdrop?'':'hidden'} w-full mt-4 flex justify-center items-center`} onClick={()=>handleApply()}> <button className='w-[343px] rounded-2xl h-14 bg-[#7F3DFF] flex justify-center items-center'><span className='font-semibold text-[#FCFCFC] text-[18px]'>Apply</span></button> </section>
    </div>
  )
}

export default index

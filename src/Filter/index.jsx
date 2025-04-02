import React from 'react'

const index = ({setShowFilter,setHighest,highest}) => {

    const handleApply =() =>{
        setShowFilter(false);
    }

    const handleHighest = () =>{
        setHighest(true);

    }

    const handleReset = () =>{
        setHighest(false);
    }

    const handleClose = () =>{
        setShowFilter(false);
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
            <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Lowest </span>  </button>
            <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Newest</span>  </button>
        </section>
        <button className='border-[1px] border-[#E3E5E5] rounded-full px-6 py-3 mt-3'> <span className='font-medium text-sm text-[#0D0E0F]'>Oldest</span>  </button>
      </section>

      <section className='w-full mt-4 flex justify-center items-center' onClick={()=>handleApply()}> <button className='w-[343px] rounded-2xl h-14 bg-[#7F3DFF] flex justify-center items-center'><span className='font-semibold text-[#FCFCFC] text-[18px]'>Apply</span></button> </section>
    </div>
  )
}

export default index

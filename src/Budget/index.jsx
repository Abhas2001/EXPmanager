
import React, { use, useEffect, useState } from 'react'
import Footer from '../Footer/index'
import prev from '../assets/prev.svg';
import Create from '../CreateBudget/index'

const index = ({setloader,sethome,negarr,transaction,home,settransaction,setprofilecolored,profilecolored,loader, budgetcolored,setBudgetcolored}) => {
      

    const[showCreate,setShowCreate] = useState(false);
    const handleCreate = () =>{
            setShowCreate(true);
    }

    const[option,setOption] = useState('');
    const[bgtvalue,setBgtvalue] = useState()
    const[Fiver,setFiver] = useState(0)
    const[total,setTotal] = useState(0)

    useEffect(()=>{

        if(option){
              
            negarr.map((x)=>{
                console.log("dayna", String(x.label[0]) === String(option));
                
            
                if(
                    String(x.label[0]) === String(option)
                ){
                    console.log("day", x.input);
                    setFiver((prev)=>prev + x.input)
                  
                }
            })

        }

    },[option])

const progress =  (Math.abs(Fiver)/bgtvalue ) * 100;

    
  return (
    <>
    { showCreate?
    <Create setShowCreate={setShowCreate} setOption={setOption} setBgtvalue={setBgtvalue}/>
    :
    <div className='w-full h-screen bg-[#7F3DFF]'>
        
        <section className='w-full h-[20%] bg-[#7F3DFF]'>
          <section className='w-full flex justify-between text-[#ffffff] p-8'>
            <span><img src={prev} alt="" srcset="" /></span>
            <span className='text-[24px] font-[500]'>May</span>
            <span className='rotate-180'><img src={prev} alt="" srcset="" /></span>
          </section>
        </section>
       <section className='h-[90%] w-full bg-[#FCFCFC] rounded-t-4xl p-3'>
          {option&&bgtvalue &&
          <section className='w-full flex flex-col py-4 w-[80%] h-[230px] bg-[#FFFFFF] shadow-xl rounded-xl px-3'>
            <section className='flex flex-col'>
                <div className='flex items-center gap-2 border-2 border-[#F1F1FA] rounded-2xl p-2'>
                    <div className='w-4 h-4 rounded-full bg-[#0077FF]'></div>
                <span className='text-[14px] text-[#212325] font-bold '>{ option}</span>
                </div>
            <span className='text-[#212325] font-bold text-[24px]'>Remaining Amount {bgtvalue-Math.abs(Fiver)}</span>
            <div className='bg-[#F1F1FA] rounded-lg h-6' >
                <div className={`bg-[#0077FF] h-6 rounded-r-lg`}   style={{ width: `${progress}%` }}></div>
            </div>
            <span>{'$500 of $700'}</span>
            </section>
          </section>
}

        <section className='w-full h-full flex flex-col justify-center items-center'>
            <section className='text-[#91919F] h-full flex flex-col justify-center items-center mb-16'>
                { option?'':
            <span className='w-full flex justify-center items-center'>You don’t have a budget.</span>
                }
                { option?'':
                <span>
Let’s make one so you in control.
</span>
}

</section>
<section onClick={()=>handleCreate()} className='bg-[#7F3DFF] text-[#ffffff] w-[343px] h-14 rounded-2xl flex justify-center items-center fixed bottom-28'>
<span className='font-semibold'>Create Budget</span>
</section>
        </section>

       </section>

      <section className='w-full fixed bottom-0'>
        <Footer  budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored}  loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} setloader={setloader} sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>
      </section>
    </div>
}
    </>
  )
}

export default index

import React, { useState } from 'react';
import filter from '../images/Filter.svg';
import drop from '../images/drop.svg';
import financial from '../images/financial.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index';
import Filter from '../Filter/index';
import Financial from '../Financial/index';
import arrow from '../images/Vector.svg'
import Left from '../images/Back.svg';

const Index = ({sethome,totexpense,storednegarr,totIncome,catarr,transaction,settransaction,negarr,setDetailed,Expenses,Incomes,setExpenses,setIncomes }) => {
  const navigate = useNavigate();
  const[showfilter,setShowFilter]  = useState(false);
  const[highest,setHighest] = useState(false);
  const[lowest,setLowest] = useState(false);
  const[newest,setNewest] = useState(false);
  const[oldest,setOldest] = useState(false);
  const[option,setOption] = useState('')
  const[count,setcount]= useState(0);
  const[financialreport,setFinancialreport] = useState(false);
  
  console.log(option);
  
  const handleBack = () => {
    sethome(true);
    settransaction(false);
    setIncomes(false)
    setExpenses(false);
    navigate("/home");
  };

  const handleClose = () =>{
    setShowFilter(false);
}
  const handlefilter = () => {
         setShowFilter(true);
  }

  const handlefinancial = () =>{
    setFinancialreport(true);
  }

  return (
    <section className={`w-full h-screen flex justify-center items-center bg-black `}>
{ financialreport?
 
 <Financial totexpense={totexpense} storednegarr={storednegarr} totIncome={totIncome}/>
 :

    <section className="md:w-auto md:flex md:justify-center md:items-center w-full h-screen flex flex-col bg-gray-50 ">


   
      <section className={`flex-1 overflow-y-auto h-screen ${showfilter?'opacity-60':""}`}>
        <section className="flex justify-between  p-4 mt-4" >
        
        <section className='flex md:w-full md:flex md:justify-start w-full justify-start' onClick={()=>handleClose()}>

      <button onClick={handleBack}><img className='text-black color-black' src={Left} alt="" srcset="" /></button>
      </section>
            <div className='flex' onClick={()=>handlefilter()}><img src={filter} alt="Filter" /> <span className={`${count==0?'hidden':''}  bg-[#7F3DFF] text-white relative right-4 w-[24px] h-[24px] flex justify-center items-center rounded-full`}>{count}</span></div>
        </section>

        <section className='w-full flex justify-center items-center'>
        <section className="flex justify-between px-4">
          <div onClick={()=>handlefinancial()}>
            
          
           <section className='w-[363px] bg-[#EEE5FF] h-12  rounded-xl px-4'>
            <section className='w-full h-full flex justify-between items-center '>
                  <p className='text-[#7F3DFF] text-[16px] font-normal'>See your financial report</p>
                  <span><img src={arrow} alt="" srcset="" /></span>
                  
           </section>
           </section>

          </div>
        </section>
        </section>
        <section className='w-full h-full overflow-y-auto'>
          <Recent Expenses={Expenses} Incomes={Incomes} setDetailed={setDetailed} negarr={negarr} label={'detailed'} option={option} catarr={catarr} newest={newest}  highest={highest} lowest={lowest}  oldest={oldest}/>
        </section>
      </section>


      <section className={`${showfilter?'':'hidden'} h-[95%] w-full bg-[#FFFFFF] rounded-t-4xl shadow-2xl fixed bottom-0`}>
        <Filter Expenses={Expenses} Incomes={Incomes} setIncomes={setIncomes}  setExpenses={setExpenses} setcount={setcount} option={option} setOption={setOption} setShowFilter={setShowFilter} setHighest={setHighest} highest={highest} newest={newest} oldest={oldest} setNewest={setNewest} setOldest={setOldest}  setLowest={setLowest} lowest={lowest}/> 
        </section>
      <section className={`bg-white shadow-md md:w-full md:static w-full fixed bottom-0 ${showfilter?'hidden':""}`}>
    
        <Footer sethome={sethome} transaction={transaction} settransaction={settransaction} />
      </section>
    </section>
}
    </section>
  );
};

export default Index;

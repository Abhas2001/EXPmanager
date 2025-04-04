import React, { useState } from 'react';
import filter from '../images/Filter.svg';
import drop from '../images/drop.svg';
import financial from '../images/financial.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index';
import Filter from '../Filter/index';

const Index = ({sethome,catarr,transaction,settransaction }) => {
  const navigate = useNavigate();
  const[showfilter,setShowFilter]  = useState(false);
  const[highest,setHighest] = useState(false);
  const[lowest,setLowest] = useState(false);
  
  const handleBack = () => {
    sethome(true);
    settransaction(false);
    navigate("/home");
  };

  const handleClose = () =>{
    setShowFilter(false);
}
  const handlefilter = () => {
         setShowFilter(true);
  }

  return (
    <section className={`w-full h-screen flex justify-center items-center bg-black overflow-hidden`}>
    <section className="md:w-auto md:flex md:justify-center md:items-center w-full h-screen flex flex-col bg-gray-50 overflow-hidden">

        <section className='flex md:w-full md:flex md:justify-start w-full justify-start' onClick={()=>handleClose()}>

      <button onClick={handleBack}>Back</button>
      </section>

   
      <section className={`flex-1 overflow-y-auto ${showfilter?'opacity-60':""}`}>
        <section className="flex justify-between  p-4 mt-4" >
          <div><img src={drop} alt="Drop" /></div> 
          <div onClick={()=>handlefilter()}><img src={filter} alt="Filter" /></div>
        </section>

        <section className="flex justify-between px-4">
          <div><img src={financial} alt="Financial" /></div>
        </section>

        <section>
          <Recent label={'detailed'} catarr={catarr} highest={highest} lowest={lowest}/>
        </section>
      </section>


      <section className={`${showfilter?'':'hidden'} h-[495px] w-full bg-[#FFFFFF] rounded-t-4xl shadow-2xl fixed bottom-0`}>
        <Filter setShowFilter={setShowFilter} setHighest={setHighest} highest={highest}  setLowest={setLowest} lowest={lowest}/> 
        </section>
      <section className={`bg-white shadow-md md:w-full md:static w-full fixed bottom-0 ${showfilter?'hidden':""}`}>
    
        <Footer sethome={sethome} transaction={transaction} settransaction={settransaction} />
      </section>
    </section>
    </section>
  );
};

export default Index;

import React from 'react';
import filter from '../images/Filter.svg';

import drop from '../images/drop.svg';
import financial from '../images/financial.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/index';
import Recent from '../RecentTrans/index';

const Index = ({sethome,catarr,transaction,settransaction }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    sethome(true);
    settransaction(false);
    navigate("/home");
  };

  return (
    <section className="h-screen flex flex-col">

        <section className='flex w-full justify-start'>

      <button onClick={handleBack}>Back</button>
      </section>

   
      <section className="flex-1 overflow-y-auto">
        <section className="flex justify-between p-4 mt-4">
          <div><img src={drop} alt="Drop" /></div> 
          <div><img src={filter} alt="Filter" /></div>
        </section>

        <section className="flex justify-between px-4">
          <div><img src={financial} alt="Financial" /></div>
        </section>

        <section>
          <Recent catarr={catarr} />
        </section>
      </section>

      {/* Sticky Footer at Bottom */}
      <section className="bg-white shadow-md sticky bottom-0">
        <Footer transaction={transaction} settransaction={settransaction} />
      </section>
    </section>
  );
};

export default Index;

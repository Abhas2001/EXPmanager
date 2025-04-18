import React from "react";
import Footer from '../Footer/index';

const index = ({sethome,settransaction,transaction,name}) => {
  return (
    <div className="w-full h-screen bg-[#F6F6F6]">
      <section className="w-full flex justify-between p-4">
        <div className="flex flex-col gap-1">
          <span>username</span>
          <span>{name&&name}</span>
        </div>

        <div>edit</div>
      </section>

      <section className="w-full flex justify-center items-center p-4">
        <section className="w-full flex flex-col bg-[#ffffff]  rounded-xl">
            <span className="border-b-2 border-black">Account</span>
            <span  className="border-b-2 border-black">Settings</span>
            <span  className="border-b-2 border-black">Export Data</span>
            <span  >Logout</span>
        </section>
      </section>

      <section className={`bg-white shadow-md md:w-full md:static w-full fixed bottom-0`}>
    
    <Footer sethome={sethome} transaction={transaction} settransaction={settransaction} />
  </section>
    </div>
  );
};

export default index;

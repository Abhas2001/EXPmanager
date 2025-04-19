import React from "react";
import Footer from '../Footer/index';
import Loader from '../Loader/index';
import Acc from '../assets/Acc.svg';
import setting from '../assets/setting.svg';
import expot from '../assets/exrt.svg'
import logout from '../assets/logout.svg';
import edit from '../assets/edit.svg';
import user from '../assets/userlogo.svg';
import { useNavigate } from "react-router-dom";

const index = ({sethome,settransaction,transaction,name,profilecolored,setprofilecolored,setloader,loader,home}) => {

    const navigate = useNavigate()

    const handleAccount = () =>{
        navigate("/recenttransaction")
    }

    const handlelogout = () =>{
        navigate("/")
    }
  return (
    <div className="w-full h-screen bg-[#F6F6F6]">
          {loader?
         
         <section className='w-full h-screen flex justify-center items-center'>
      <Loader/>
      </section>
      :
        <section>
      <section className="w-full flex justify-between items-center p-4 py-12 ">
        <section className="flex gap-2 justify-center items-center">
            <img src={user} alt="" srcset="" />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-[14px] text-[#91919F]">Username</span>
          <span className="font-[700] text-[#161719] text-[24px]">{name?name:'Ayush'}</span>
        </div>
        </section>

        <div><img src={edit} alt="" srcset="" /></div>
      </section>

      <section className="w-full flex justify-center items-center p-4">
        <section className="w-full flex flex-col bg-[#ffffff]  rounded-2xl">
            <section className="flex  gap-2 border-b-2 border-[#E3E5E5] p-3" onClick={()=>handleAccount()}><img src={Acc} alt="" srcset="" />   <span className=" flex justify-center items-center font-medium text-[16px] "> Account</span> </section>
            <section className="flex  gap-2 border-b-2 border-[#E3E5E5] p-3"><img src={setting} alt="" srcset="" />   <span className=" flex justify-center items-center font-medium text-[16px] ">Settings</span> </section>
            <section className="flex  gap-2 border-b-2 border-[#E3E5E5] p-3"><img src={expot} alt="" srcset="" />   <span className=" flex justify-center items-center font-medium text-[16px] ">Export Data</span> </section>
            <section onClick={()=>handlelogout()} className="flex  gap-2 p-3"><img src={logout} alt="" srcset="" />   <span className=" flex justify-center items-center font-medium text-[16px] ">Logout</span> </section>
  
        </section>
      </section>
      </section>
}
      <section className={`bg-white shadow-md md:w-full md:static w-full fixed bottom-0`}>
    
    <Footer home={home} setloader={setloader} loader={loader} setprofilecolored={setprofilecolored} profilecolored={profilecolored} sethome={sethome} transaction={transaction} settransaction={settransaction} />
  </section>
    </div>
  );
};

export default index;

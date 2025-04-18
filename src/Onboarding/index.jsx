import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hand from "../assets/hand.svg";

const index = () => {
    
    const navigate = useNavigate()

    const handleSignup = () =>{
          navigate("/signup")
    }
    


  return (
    <div className="w-full h-screen flex flex-col  justify-center items-center">
      <section className="w-full flex justify-center items-center ">
        <img loading="lazy" src={hand} alt="" srcset="" />
      </section>
      <section className="w-full flex flex-col justify-center items-center ">
        <p className="font-[700] text-[32px] text-[#212325]">Gain total control</p>
        <p className="font-[700] text-[32px] text-[#212325]">of your money</p>
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-4 ">
        <p className="font-[500] text-[16px] text-[#91919F]">Become your own money manager </p>
        <p className="font-[500] text-[16px] text-[#91919F]">and make every cent count</p>
      </section>
      <section className="w-full flex flex-col gap-4 p-4  fixed bottom-2">
        <button className="text-[#FCFCFC] bg-[#7F3DFF] text-[18px] font-[600] p-3 rounded-xl" onClick={()=>handleSignup()}>Sign Up</button>
        <button  className="text-[#8B50FF] bg-[#EEE5FF] text-[18px] font-[600] p-3 rounded-xl">Login</button>
      </section>
    </div>
  );
};

export default index;

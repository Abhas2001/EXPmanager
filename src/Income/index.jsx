import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const index = ({ setChange,change,storedarr }) => {
  let inputval=localStorage.getItem("ar1");
  console.log(inputval);
  
  
  const [val, setVal] = useState();
  const [finalval, setfinalVal] = useState([]);
 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleCont = () => {
    setChange(!change)
    localStorage.setItem("ar1",val)
   
    storedarr.push(localStorage.getItem("ar1"))
   

    
    finalval.push(val);
 

    navigate("/home")
  };
  const handlechange = (e) => {
    setVal(Number(e.target.value));
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <section className="flex flex-col justify-between text-white w-[375px] h-screen bg-[#FFFFFF] ">
        <section>
          <button className="text-black cursor-pointer" onClick={handleBack}>
            back
          </button>
        </section>
        <section className="w-full flex justify-center items-center">
          <input
            type="string"
            className="border-2 border-black text-black"
            onInput={handlechange}
          />
        </section>
        <section className="w-full flex justify-center items-center mb-12">
          <button
            className="bg-[#7F3DFF] text-white p-4 px-32 rounded-2xl font-semibold cursor-pointer"
            onClick={handleCont}
          >
            Continue
          </button>
        </section>
      </section>
    </section>
  );
};

export default index;

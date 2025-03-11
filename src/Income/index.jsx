import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from '../images/left.svg';
import down from '../images/down.svg';

const index = ({ setChange,change,storedarr,setStoredArr }) => {
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
   
    const newItem = localStorage.getItem("ar1");
    if (newItem) {
      setStoredArr(prevArr => [...prevArr, newItem]);
    }
   

    
    finalval.push(val);
 

    navigate("/home")
  };
  const handlechange = (e) => {
    setVal(Number(e.target.value));
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <section className="flex flex-col justify-between text-white w-[375px] h-screen bg-[#00A86B] ">
        <section className="w-full flex justify-between p-4">
          <button className="text-white cursor-pointer" onClick={handleBack}>
            <img src={left} alt="" srcset="" />
          </button>
          <span className=" text-lg font-semibold">
            Income
          </span>
          <span>
            
          </span>
        </section>
      
        <section className="w-full flex flex-col justify-start p-4">
          <span>How much?</span>
          <section className="pt-2">
          <input
            type="number"
            
            placeholder="$000"
            className="p-2 border-2 border-[#00A86B] enabled:outline-[#00A86B] focus:text-white focus:border-2 focus:outline-[#00A86B] focus:border-[#00A86B] text-black placeholder:text-2xl placeholder:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onInput={handlechange}
          />
          </section>
        </section>
        <section className="bg-[#FFFFFF] rounded-t-4xl w-full ">
          
        <section className="relative w-full flex justify-center items-center p-4">
         <div className="border-[1px] py-6 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"></div>
          <section className=" absolute right-[20px]">
          <img src={down} alt="" srcset="" />
          </section>
        </section>

        
        <section className="relative w-full flex justify-center items-center p-4">
          <input
            type="string"
            placeholder="Description"
            className="border-[1px] py-3 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"
            onInput={handlechange}
          />
        
        </section>
        <section className="relative w-full flex justify-center items-center p-4">
          <input
            type="string"
            placeholder="Wallet"
            className="border-[1px] py-3 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"
            onInput={handlechange}
          />
            <section className=" absolute right-[20px]">
          <img src={down} alt="" srcset="" />
          </section>

          
          
        </section>
        <section className="relative w-full flex justify-center items-center p-4">
          <input
            type="string"
            placeholder="Wallet"
            className="border-[1px] py-3 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"
            onInput={handlechange}
          />
            <section className=" absolute right-[20px]">
          <img src={down} alt="" srcset="" />
          </section>

          
          
        </section>
        <section className="relative w-full flex justify-center items-center p-4">
          <input
            type="string"
            placeholder="Wallet"
            className="border-[1px] py-3 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"
            onInput={handlechange}
          />
            <section className=" absolute right-[20px]">
          <img src={down} alt="" srcset="" />
          </section>

          
          
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
    </section>
  );
};

export default index;

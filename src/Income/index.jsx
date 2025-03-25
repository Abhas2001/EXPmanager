import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "../images/left.svg";
import down from "../images/down.svg";
import Dropdown from "../Dropdown/Dropdown";



const index = ({ setChange, change, storedarr, setStoredArr }) => {

  const [flag, setflag] = useState(false);
 let label=''
  let inputval = localStorage.getItem("ar1");
  console.log(inputval);

  const [val, setVal] = useState();
  const [finalval, setfinalVal] = useState([]);

  const navigate = useNavigate();
 

  

 

  const handleBack = () => {
    navigate("/home");
  };

  const handleCont = () => {
    setChange(!change);
    localStorage.setItem("ar1", val);

    const newItem = localStorage.getItem("ar1");
    if (newItem) {
      setStoredArr((prevArr) => [...prevArr, newItem]);
    }

    finalval.push(val);

    navigate("/home");
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
          <span className=" text-lg font-semibold">Income</span>
          <span></span>
        </section>

        <section className="w-full flex flex-col justify-start px-4">
          <span>How much?</span>
          <section className="pt-2 flex">
            <p className="flex justify-center items-center text-lg font-bold">
              &#8377;
            </p>
            <input
              type="number"
              placeholder="0"
              className="text-xl font-bold text-white p-0 border-2 border-[#00A86B] enabled:outline-none focus:text-white focus:border-2 focus:outline-[#00A86B] focus:border-[#00A86B]  placeholder:text-2xl placeholder:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onInput={handlechange}
            />
          </section>
        </section>
        <section className="bg-[#FFFFFF] rounded-t-4xl w-full min-h-[556px]">
          <section className="max-h-[458px]">
          {
            <Dropdown flag={flag} setflag={setflag} label={'Category'}/>
          }

            <section
              className={`relative w-full flex justify-center items-center p-4 ${
                flag ? "hidden" : ""
              } `}
            >
              <input
                type="string"
                placeholder="Description"
                className="w-full border-[1px] py-3 border-[#F1F1FA] p-2 rounded-2xl text-black placeholder:text-[#91919F]"
                onInput={handlechange}
              />
            </section>
           {
            <Dropdown flag={flag} setflag={setflag} label={'Wallet'}/>
           }
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
    </section>
  );
};

export default index;

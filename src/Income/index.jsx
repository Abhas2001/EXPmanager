import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "../images/left.svg";
import down from "../images/down.svg";
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";
import shopping from "../images/shopping.svg";
import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";


const index = ({ setChange, change, storedarr, setStoredArr }) => {
  const [showdropdown, setDropdown] = useState(false);
  const [flag, setflag] = useState(false);
  const handleShowdropdown = () => {
    setDropdown(!showdropdown);
    setflag(!flag);
  };
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
            <section className="flex flex-col ">
              <section className="relative w-full flex justify-center items-center px-4 pt-4">
                <div className="border-[1px] py-4 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]">
                  {" "}
                  <p className="text-[#91919F]">Category</p>{" "}
                </div>
                <button
                  className=" absolute right-[20px]"
                  onClick={handleShowdropdown}
                >
                  <img src={down} alt="" srcset="" />
                </button>
              </section>
              {showdropdown && (
                <section className=" border-[1px] border-[#F1F1FA]  h-[15vh] w-[340px] ml-4 rounded-2xl overflow-y-scroll">
                  <section className="w-full text-[#212325]">
                    <ul className="w-full flex flex-col  ">
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex gap-2 border-b-[1px] border-gray-100">
                        <img src={Food} width={30} /> <p>Food</p>
                      </li>
                      <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100">
                        {" "}
                        <img src={shopping} width={30} /> <p> Shopping </p>{" "}
                      </li>
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100">
                        {" "}
                        <img src={subs} width={30} /> <p> Subscription </p>{" "}
                      </li>
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100">
                        {" "}
                        <img src={salary} width={30} /> <p> Salary </p>{" "}
                      </li>
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 ">
                        {" "}
                        <img src={Tran} width={30} /> <p>Transportation</p>
                      </li>
                    </ul>
                  </section>
                </section>
              )}
            </section>

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
    </section>
  );
};

export default index;

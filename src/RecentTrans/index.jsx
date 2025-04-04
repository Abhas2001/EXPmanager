import React, { useState } from "react";
import shopping from "../images/shopping.svg";
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";

import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const index = ({ catarr, settransaction, sethome, label, highest,lowest}) => {
  const navigate = useNavigate();
  console.log(label);
  const d = new Date();

  let Today = catarr.filter((x) => x.CurrentD === d.getDate());
  let Yesterday = catarr.filter((x) => x.CurrentD !== d.getDate());

  console.log("AJ", Today);

  

  const Highest = () => {
    let finalarr = [...catarr];

    for (let i = 0; i < finalarr.length; i++) {
      for (let j = i + 1; j < finalarr.length; j++) {
        if (Number(finalarr[i].input) < Number(finalarr[j].input)) {
          let temp = finalarr[i];

          console.log("temp:", temp);
          finalarr[i] = finalarr[j];

          finalarr[j] = temp;
        }
      }
    }

    catarr = finalarr;
  };



  

  const Lowest = () => {
    let finalarr = [...catarr];

    for (let i = 0; i < finalarr.length; i++) {
      for (let j = i + 1; j < finalarr.length; j++) {
        if (Number(finalarr[i].input) > Number(finalarr[j].input)) {
          let temp = finalarr[i];

          console.log("temp:", temp);
          finalarr[i] = finalarr[j];

          finalarr[j] = temp;
        }
      }
    }

    catarr = finalarr;
  };

  if (highest) {
    Highest();
  }

  if(lowest){
   Lowest();
  }
  const handleTransactions = () => {
    sethome(false);
    settransaction(true);
    console.log("click");
    navigate("/recenttransaction");
  };
  return (
    <section>
      {label === "detailed" && !highest && !lowest ? (
        <section>
          <div
            className={` w-full flex justify-between items-between text-black p-4`}
          >
            {" "}
            <span className="text-lg font-semibold text-[#292B2D]">
              {label === "detailed" ? "Today" : "Recent Transaction"}
            </span>{" "}
          </div>
          {Today?.map((x) => {
            return (
              <section className="w-[90%] mx-5 px-4 bg-[#FCFCFC] rounded-3xl mb-2">
                <section className="flex justify-between py-3">
                  <div className="text-black flex gap-2">
                    <section className="flex justify-center items-center">
                      {x.label[0] === "Shopping" ? (
                        <img src={shopping} alt="" srcset="" />
                      ) : x.label[0] === "Food" ? (
                        <img src={Food} alt="" srcset="" />
                      ) : x.label[0] === "Subscription" ? (
                        <img src={subs} alt="" srcset="" />
                      ) : x.label[0] === "Salary" ? (
                        <img src={salary} alt="" srcset="" />
                      ) : (
                        <img src={Tran} alt="" srcset="" />
                      )}
                    </section>
                    <section className="flex flex-col">
                      {" "}
                      <span className="text-[#292B2D] text-base font-medium">
                        {x.label[0]}
                      </span>
                      <span className="text-[#91919F] font-medium text-[13px] pt-2">
                        {x.description}
                      </span>
                    </section>
                  </div>
                  <div className="text-black flex flex-col">
                    <span className="w-full flex justify-end text-[#00A86B] text-base font-semibold">
                      {x.input}
                    </span>{" "}
                    <span className="text-[#91919F] font-medium text-[13px] pt-2">
                      {x.time}
                    </span>
                  </div>
                </section>
              </section>
            );
          })}

          <div className="w-full flex justify-between items-between text-black p-4">
            {" "}
            <span className="text-lg font-semibold text-[#292B2D]">
              {label === "detailed" ? "Yesterday" : "Recent Transaction"}
            </span>{" "}
          </div>
          {Yesterday?.map((x) => {
            return (
              <section className="w-[90%] mx-5 px-4 bg-[#FCFCFC] rounded-3xl mb-2">
                <section className="flex justify-between py-3">
                  <div className="text-black flex gap-2">
                    <section className="flex justify-center items-center">
                      {x.label[0] === "Shopping" ? (
                        <img src={shopping} alt="" srcset="" />
                      ) : x.label[0] === "Food" ? (
                        <img src={Food} alt="" srcset="" />
                      ) : x.label[0] === "Subscription" ? (
                        <img src={subs} alt="" srcset="" />
                      ) : x.label[0] === "Salary" ? (
                        <img src={salary} alt="" srcset="" />
                      ) : (
                        <img src={Tran} alt="" srcset="" />
                      )}
                    </section>
                    <section className="flex flex-col">
                      {" "}
                      <span className="text-[#292B2D] text-base font-medium">
                        {x.label[0]}
                      </span>
                      <span className="text-[#91919F] font-medium text-[13px] pt-2">
                        {x.description}
                      </span>
                    </section>
                  </div>
                  <div className="text-black flex flex-col">
                    <span className="w-full flex justify-end text-[#00A86B] text-base font-semibold">
                      {x.input}
                    </span>{" "}
                    <span className="text-[#91919F] font-medium text-[13px] pt-2">
                      {x.time}
                    </span>
                  </div>
                </section>
              </section>
            );
          })}
        </section>
      ) : (
        <section>
          <div className="w-full flex justify-between items-between text-black p-4">
            {" "}
            <span className="text-lg font-semibold text-[#292B2D]">
              {label === "detailed" && !highest && !lowest
                ? "Today"
                : "Recent Transaction"}
            </span>{" "}
            <div className="p-1 px-3 bg-[#EEE5FF] rounded-full flex justify-center items-center">
              <button
                className="text-[#7F3DFF] text-sm font-medium"
                onClick={() => handleTransactions()}
              >
                {label === "detailed" ? "" : "See All"}
              </button>
            </div>{" "}
          </div>
          {catarr?.map((x) => {
            return (
              <section className="w-[90%] mx-5 px-4 bg-[#FCFCFC] rounded-3xl mb-2">
                <section className="flex justify-between py-3">
                  <div className="text-black flex gap-2">
                    <section className="flex justify-center items-center">
                      {x.label[0] === "Shopping" ? (
                        <img src={shopping} alt="" srcset="" />
                      ) : x.label[0] === "Food" ? (
                        <img src={Food} alt="" srcset="" />
                      ) : x.label[0] === "Subscription" ? (
                        <img src={subs} alt="" srcset="" />
                      ) : x.label[0] === "Salary" ? (
                        <img src={salary} alt="" srcset="" />
                      ) : (
                        <img src={Tran} alt="" srcset="" />
                      )}
                    </section>
                    <section className="flex flex-col">
                      {" "}
                      <span className="text-[#292B2D] text-base font-medium">
                        {x.label[0]}
                      </span>
                      <span className="text-[#91919F] font-medium text-[13px] pt-2">
                        {x.description}
                      </span>
                    </section>
                  </div>
                  <div className="text-black flex flex-col">
                    <span className="w-full flex justify-end text-[#00A86B] text-base font-semibold">
                      {x.input}
                    </span>{" "}
                    <span className="text-[#91919F] font-medium text-[13px] pt-2">
                      {x.time}
                    </span>
                  </div>
                </section>
              </section>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default index;

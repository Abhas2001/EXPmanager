import React, { useState } from "react";
import shopping from "../images/shopping.svg";
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";

import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const index = ({setDetailed, catarr,newest,negarr, settransaction, sethome, label, highest,lowest,oldest,option}) => {
  const navigate = useNavigate();
  console.log(label);
  const d = new Date();
  console.log("NGARR",negarr);
  console.log(catarr);

  let Today = catarr.filter((x) => x.CurrentD === d.getDate()).concat(negarr?.filter((x) => x.CurrentD === d.getDate()));
  let Todayexp = negarr?.filter((x) => x.CurrentD === d.getDate())
  let Yesterday = catarr.filter((x) => x.CurrentD !== d.getDate());
 
Today.map((x)=>{
    if(x.Exp){
    console.log(x.Exp);
    }
})

 let Naya = catarr.filter((x)=>
   
    x.label[0]==option

  )


 


  const Newest = () => {
 

    let finalarr = [...catarr];


    for (let i = 0; i < finalarr.length; i++) {
        for (let j = i + 1; j < finalarr.length; j++) {
          if (Number(finalarr[i].time.split(':')[0]) < Number(finalarr[j].time.split(':')[0])) {
            let temp = finalarr[i];
  
           
            finalarr[i] = finalarr[j];
  
            finalarr[j] = temp;
          }
        }
      }
  
      catarr = finalarr;
      
    

  }
  


  const Oldest = () => {

    let finalarr = [...catarr];


    for (let i = 0; i < finalarr.length; i++) {
        for (let j = i + 1; j < finalarr.length; j++) {
          if (finalarr[i].time.split(':')[0]> finalarr[j].time.split(':')[0]) {

            console.log(finalarr[i].time.split(':')[0]);
            console.log(finalarr[j].time.split(':')[0]);
            let temp = finalarr[i];
  
           
            finalarr[i] = finalarr[j];
  
            finalarr[j] = temp;

          }
        }
      }
  
      catarr = finalarr;

  }

  const Highest = () => {
    if(option){

    let finalarr = [...Naya];


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

   Naya = finalarr;
}
else{

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


}
  };



  

  const Lowest = () => {
    if(option){

        let finalarr = [...Naya];
    
    
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
    
       Naya = finalarr;
    }
    else{
    
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
    
    
    }
  };

  if (highest) {
    Highest();
  }

  if(lowest){
   Lowest();
  }

  if(oldest){
    Oldest();
  }

  if(newest){
    Newest();
  }
const handledetailed = (values) =>{
    navigate("/detailed");
    setDetailed([values])
}
  const handleTransactions = () => {
    sethome(false);
    settransaction(true);
    console.log("click");
    navigate("/recenttransaction");
  };
  return (
    <section>
      {label === "detailed" && !highest && !lowest && !newest && !oldest && !option ? (
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
                  <div className=" flex flex-col">
                        <span className={`w-full flex justify-end ${x.Exp?'text-[#FD3C4A]':'text-[#00A86B]'} text-base font-semibold`}>
                      {x.Exp? -x.input:x.input}
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
                    <section className="flex flex-col" >
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
              {label === "detailed" && !highest && !lowest && !newest && !oldest
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
        {option?      
        
        Naya?.map((x) => {
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
          })
        
        
        
        
        
        :
        
        
        
        
        catarr?.map((x) => {
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
                    <section className="flex flex-col" onClick={()=>handledetailed({"label":x.label[0],"description":x.description,"input":x.input,"time":x.time})}>
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

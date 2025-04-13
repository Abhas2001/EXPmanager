import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import trash from "../images/trash.svg";
import left from "../images/left.svg";
import correct from "../images/correct.svg"

const index = ({ detailed,setnegarr,negarr, imgLinks,catarr,setcatarr,storedarr,setStoredArr,setStorednegArr,storednegarr }) => {

    const[deletedialog,setDeletedialog]=useState(false);
    const[deletesuccess,setDeletesuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    console.log(detailed);
  const navigate = useNavigate();


  console.log("OLD",storedarr);

  let New = catarr
  let summation = storedarr
  let negation = storednegarr
  

const  handleDeleteTransaction = (value) =>{
   
      
        if(detailed[0].exp===true){
          New= negarr.filter((x)=>Number(x.input)!==Number(value));
      
          setnegarr(New)
          negation = storednegarr.filter((x)=>Number(x)!==Number(-value))
          console.log(negation);
          setStorednegArr(negation);
        
          setDeletesuccess(true);
          setDeletedialog(false);
         
        }
        else{
          New= catarr.filter((x)=>Number(x.input)!==Number(value));
      
          setcatarr(New)
          summation = storedarr.filter((x)=>Number(x)!==Number(value))
          setStoredArr(summation)
        
          console.log("NAYAAA",catarr);
          setDeletesuccess(true);
          setDeletedialog(false);
  
         
        }
       
  }
  
  if(deletesuccess){
    setTimeout(() => {
      navigate("/home");
        
    }, 2000);
  }




  const handleback = () => {
    navigate("/");
  };

  const handleDeletedialog = () =>{
    setDeletedialog(true);
  }
  return (
    <div>
            { deletesuccess &&
        <section className="w-full h-screen flex justify-center items-center">
        <section className="flex justify-center items-center bg-[#ffffff] rounded-3xl shadow-2xl p-6 fixed ">
            <section>
                <div className="w-full flex justify-center items-center">
            <img src={correct} alt="" srcset="" />
            </div>
            <span>Transaction has been successfully removed</span>
            </section>
        </section>
        </section>
}

      <section className={`w-full h-[282px] ${detailed[0]?.Exp?'bg-[#FD3C4A]':'bg-[#00A86B]'} rounded-b-3xl ${(deletedialog||deletesuccess)?'opacity-50':''}`}>
        <section className="flex justify-between p-2 pt-4">
          <button onClick={() => handleback()}>
            {" "}
            <img src={left} alt="" srcset="" />{" "}
          </button>
          <span className="text-[#FCFCFC] font-semibold text-[18px]">
            Detail Transaction
          </span>
          <button onClick={()=>handleDeletedialog()}>
          <img src={trash} alt="" srcset="" />
          </button>
        </section>

        <section className={`${deletesuccess&&'hidden'} w-full flex justify-center items-center mt-6`}>
          <p className="text-[#FCFCFC] font-bold text-[48px]">&#8377;</p>
          <section className="felx flex-col">
            <span className="text-[#FCFCFC] font-bold text-[48px]">
              {detailed[0]?.input ? detailed[0].input : 0}
            </span>
            <span className="text-[#FCFCFC] font-medium text-[13px] mt-2">
              {" "}
              {detailed[0]?.time}
            </span>
          </section>
        </section>
      </section>

      <section className={`flex justify-center items-center ${(deletedialog||deletesuccess)?'opacity-50':''}`}>
        <div className="flex gap-12 bg-[#FFFFFF] border-[1px] border-[#F1F1FA] p-4   rounded-2xl relative bottom-8">
          <div className="flex flex-col ">
            <span className="font-medium text-[12px] text-[#91919F]">Type</span>
            <span className="font-semibold text-[16px] text-[#0D0E0F]">
            {detailed[0]?.Exp?'Expense' :'Income'}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-medium text-[12px] text-[#91919F]">
              Category
            </span>
            <span className="font-semibold text-[16px] text-[#0D0E0F]">
             {detailed[0].label}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-medium text-[12px] text-[#91919F]">
              Wallet
            </span>
            <span className="font-semibold text-[16px] text-[#0D0E0F] w-full">
              Chase
            </span>
          </div>
        </div>
      </section>

      <section className="flex gap-3 justify-center items-center">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((x) => {
          return (
            <span className="border-[2px] border-[#E3E5E5] h-0 w-4"></span>
          );
        })}
      </section>


      <section className={`${deletesuccess&&'hidden'} mt-4 px-4 ${(deletedialog)?'opacity-50':''}`}>
        <span className="font-semibold text-lg text-[#91919F]">
          Description
        </span>
 
        <p className="text-[#0D0E0F] font-medium text-[16px]">
          {detailed[0]?.description}
        </p>
      </section>

      {detailed[0].img && (
        <section className={`${deletesuccess&&'hidden'} mt-8`}>
          <span className="font-semibold text-[16px] text-[#91919F] ml-5">
            Attachment
          </span>
          <section className="flex justify-center items-center p-4">
            <img
              className="w-[500px] h-[130px] rounded-3xl"
              src={detailed[0].img}
              alt=""
              srcset=""
            />
          </section>
        </section>
      )}
          {deletedialog?
        <section className="w-full h-56 bg-[#ffffff] fixed bottom-0 rounded-t-4xl shadow-2xl shadow-black">
            <section className="w-full flex justify-center items-center">
            <button className="border-2 border-[#D3BDFF] w-8"></button>
            </section>
            <section className="w-full flex flex-col justify-center items-center pt-4">
            <span className="font-semibold text-[18px]">Remove this transaction?</span>
            <span>Are you sure do you wanna remove this <br /> transaction?</span>
            </section>
      <section className=" w-full flex gap-3 justify-center items-center bg-[#ffffff] h-14 rounded-3xl fixed bottom-3">
        <button onClick={()=>setDeletedialog(false)} className="text-[#7F3DFF] text-lg font-semibold rounded-4xl bg-[#EEE5FF] w-[164px] h-14">No</button>
        <button onClick={()=>handleDeleteTransaction(detailed[0]?.input ? detailed[0].input : 0)} className="text-[#ffffff] text-lg font-semibold bg-[#7F3DFF] w-[164px] h-14 rounded-4xl">Yes</button>
      </section>
      </section>
    :
      <section className={` w-full flex justify-center items-center fixed bottom-7 ${(deletedialog||deletesuccess)?'opacity-30':''}`}>
      <section className=" w-[90%] flex justify-center items-center bg-[#7F3DFF] h-14 rounded-3xl">
        <button className="text-[#ffffff] text-lg font-semibold">Edit</button>
      </section>
      </section>
      }
    </div>
  );
};

export default index;

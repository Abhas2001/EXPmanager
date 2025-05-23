import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "../images/left.svg";
import down from "../images/down.svg";
import attachment from "../images/attachment.svg";
import close from "../assets/close.svg";
import Dropdown from "../Dropdown/Dropdown";
import Overlay from "../Overlay/index";
import Webcam from "react-webcam";
import Loader from '../Loader/index'
import correct from "../images/correct.svg"
import zigzag from "../assets/zigzag.svg";



const index = ({showincomepage, setshowincomepage, setnegarr,setImgLinks, setChange, change, storedarr, setStorednegArr }) => {

  setshowincomepage(false);
  useEffect(()=>{
    console.log(showincomepage);
  },[showincomepage])
  const [flag, setflag] = useState(false);
 let label=''
  let inputval = localStorage.getItem("ar1");
  console.log(inputval);

  const [val, setVal] = useState();
  const [Input, setInput] = useState('');
  const [finalval, setfinalVal] = useState([]);
  const[openCamera,setOpenCamera] = useState(false);
  const[showoverlay,setShowoverlay] = useState(false);
  const[gallery,setGallery] = useState(false);
  const[finalInput,setFinalInput]= useState('');
  const[disabled,setDisabled] = useState(false);
  const[loader,setloader] = useState(false);
  const[loading,setloading] = useState(false);
  const navigate = useNavigate();
 
  const[dropdownarr,setDropdownarr] = useState([]);
  const[walletdropdownarr,setwalletDropdownarr] = useState([]);
  

    
  const now = new Date();

 console.log("TODAY",now.getDate());
  const handleBack = () => {
    navigate("/home");
  };

  const handleCont = () => {
    setTimeout(() => {
      setloading(true);
      console.log(loading);
    }, 200);
    setTimeout(() => {
      setloader(true);
      setloading(false);
    }, 1000);
    setChange(!change);
    localStorage.setItem("ar8", val);

    const newItem = localStorage.getItem("ar8");
    console.log(newItem);
    if (newItem) {
      setStorednegArr((prevArr) => [...prevArr, newItem]);
    }

    finalval.push(val);
    setnegarr((prev)=>[...prev, {"label":dropdownarr,"Exp":true,"imglink":imgLink, "input":-(val),"description":Input,"time":now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),"CurrentD":now.getDate()}])
    setTimeout(() => {
      navigate("/home");
      setloader(false);
    }, 2000);
  };
 
  const handlechange = (e) => {
    localStorage.setItem("inputval",e.target.value);
    setVal(e.target.value);
    console.log(val);
  };
   
  let inputvalue = localStorage.getItem('inputval')
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(Input);
  };
  const handleopenCamera = () =>{
    setShowoverlay(true);
  }

  const[imgLink,setImgLink] = useState()
  
  const videoConstraints = {
    width: 1280,
    height: 1720,
    facingMode: "environment"
  };
  const handleClick = ({ getScreenshot }) =>{
    const imageSrc = getScreenshot()
    setImgLink(imageSrc);
    console.log(imgLink);
    setImgLinks(imageSrc);
    setOpenCamera(false);
    setShowoverlay(false);
    
  }

  const handlecloseimg = () =>{
    setImgLink();
  }
  const handleinputdisabled = () =>{
       if(showoverlay){
        return true;
       }
       else false;
  }
  const handledesc = (event) =>{
    if(event.key === "Enter"){
      console.log("ENTERED VALUE",Input);
      setFinalInput(Input);
      event.target.blur();
    }
  }

  const handleamount  = (event) =>{
    if(event.key==="Enter"){
       event.target.blur();
    }
  }

  useEffect(()=>{

  if(dropdownarr.length>0&&walletdropdownarr.length>0){
    setDisabled(true);
   
   
  }
},[dropdownarr,walletdropdownarr])


  return (
   
    <section className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {openCamera?  
    
      <Webcam
      audio={false}
     height={1280}
     screenshotFormat="image/jpeg"
     width={2280}
     videoConstraints={videoConstraints}
     style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",  // Ensures full width
      height: "100vh", // Ensures full height
      objectFit: "cover", // Keeps aspect ratio while covering full area
    }}
  >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
         handleClick( { getScreenshot } )
        }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-5 py-2 rounded shadow-md"
           
      >
        Capture photo
      </button>
    )}
  </Webcam>
 
  :
      <section className="flex flex-col justify-between text-white w-[420px] h-screen bg-[#0077FF] ">

        <section className=" w-full flex justify-between p-4">
          <button className="text-white cursor-pointer" onClick={handleBack}>
            <img src={left} alt="" srcset="" />
          </button>
          <span className=" text-lg font-semibold">Transfer</span>
          <span></span>
        </section>

        <section className="w-full flex flex-col justify-start px-6">
          <span>How much?</span>
          <section className="pt-2 flex">
            <p className="flex justify-center items-center text-lg font-bold">
              &#8377;
            </p>
            <input
              type="number"
              placeholder="0"
              value={val}
              disabled={handleinputdisabled()}
              onKeyUp={()=>handleamount(event)}
              className="text-xl font-bold text-white p-0 border-2 border-[#0077FF] enabled:outline-none focus:text-white focus:border-2 focus:outline-[#FD3C4A] focus:border-[#FD3C4A]  placeholder:text-2xl placeholder:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onInput={handlechange}
            />
          </section>
        </section>
        <section className={` ${showoverlay?'bg-gray-50':'bg-[#ffffff]'} rounded-t-4xl w-full min-h-[416px] px-2`}>
          <section className={`max-h-[458px] ${showoverlay&&'opacity-40'}`}>
          {<section className="w-full flex  p-4">
            <input
            type="string"
            placeholder="From"
            value={finalInput?finalInput:Input}
            onKeyUp={()=>handledesc(event)}
            className="w-full border-[1px] py-3 border-[#F1F1FA] p-2 rounded-2xl text-black placeholder:text-[#91919F]"
            onInput={handleInput}
          />

          <img className="rounded-full" src={zigzag} alt="" srcset="" />

          <input
                type="string"
                placeholder="To"
                value={finalInput?finalInput:Input}
                onKeyUp={()=>handledesc(event)}
                className="w-full border-[1px] py-3 border-[#F1F1FA] p-2 rounded-2xl text-black placeholder:text-[#91919F]"
                onInput={handleInput}
              />
              </section>
            
            
          }

            <section
              className={`relative w-full flex justify-center items-center p-4 ${
                flag ? "hidden" : ""
              } `}
            >
              <input
                type="string"
                placeholder="Description"
                value={finalInput?finalInput:Input}
                onKeyUp={()=>handledesc(event)}
                className="w-full border-[1px] py-3 border-[#F1F1FA] p-2 rounded-2xl text-black placeholder:text-[#91919F]"
                onInput={handleInput}
              />
            </section>
          
            <section className="relative w-full flex justify-center items-center p-4">
              {imgLink?

             <section className="mb-4 w-32 h-18 flex justify-start">  <section className={`${ gallery?'w-24 h-16 mb-14':'w-40 h-18 mb-6'}`}> <img className="rounded-lg w-32 h-16" src={imgLink} alt="" srcset="" /> </section>
             <span className="relative right-[10px] bottom-[10px]" onClick={()=>handlecloseimg()}> <img src={close} alt="" srcset="" /></span>
             </section> 
              
              :
             <button onClick={()=>handleopenCamera()} className="cursor-pointer border-[1px] py-3 border-[#F1F1FA] w-[790px] rounded-2xl  flex justify-center items-center">
              <section className="flex">
               <img src={attachment} alt="" srcset="" />
               <span className="font-normal text-[#91919F]">Add attachment</span>
              
               </section> 
             </button>
}
            
            </section>
             {/* <section className={`${showoverlay?'hidden':""} relative w-full flex justify-center items-center p-4`}>
              <input
                type="string"
                placeholder="Wallet"
                className="border-[1px] py-3 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]"
                onInput={handlechange}
              />
              <section className=" absolute right-[20px]">
                <img src={down} alt="" srcset="" />
              </section>
            </section> */}
            <section className={`${showoverlay?'hidden':""} w-full flex justify-center items-center mb-12`}>
            <button
                className={`${!disabled&&'opacity-[0.4]'}  ${!loader?'w-[340px] bg-[#7F3DFF]':'w-[80px] bg-[#FFFFFF] transition-all duration-500 ease-in-out '} h-[56px] text-white  rounded-2xl font-semibold cursor-pointer `}
                onClick={handleCont}
                disabled={!disabled}
              >
{loading?(
     <section className="w-full flex justify-center items-center">
    <Loader/>
    </section>

  ):
  
  loader ? (
  <div className="w-full flex items-center justify-center">
   <img src={correct} alt="" srcset="" />
  </div>
) : (
  'Continue'
)}

              </button>
             
            </section> 
           
          </section>
          {showoverlay&&
          <Overlay setGallery={setGallery}  setShowoverlay={setShowoverlay} setOpenCamera={setOpenCamera} setImgLink={setImgLink}/>
}
        </section>
       
      </section>
}
    </section>
  );
};

export default index;

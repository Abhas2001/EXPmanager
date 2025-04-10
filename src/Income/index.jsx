import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "../images/left.svg";
import down from "../images/down.svg";
import attachment from "../images/attachment.svg";
import Dropdown from "../Dropdown/Dropdown";
import Overlay from "../Overlay/index";
import Webcam from "react-webcam";




const index = ({setcatarr,setImgLinks, setChange, change, storedarr, setStoredArr }) => {

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
  const navigate = useNavigate();
 
  const[dropdownarr,setDropdownarr] = useState([]);
  const[walletdropdownarr,setwalletDropdownarr] = useState([]);
  

    
  const now = new Date();

 console.log("TODAY",now.getDate());
  const handleBack = () => {
    navigate(-1);
  };

  const handleCont = () => {
    setChange(!change);
    localStorage.setItem("ar7", val);

    const newItem = localStorage.getItem("ar7");
    console.log(newItem);
    if (newItem) {
      setStoredArr((prevArr) => [...prevArr, newItem]);
    }

    finalval.push(val);
    setcatarr((prev)=>[...prev, {"label":dropdownarr,"Exp":false,"input":val,"description":Input,"time":now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),"CurrentD":now.getDate()}])
    navigate("/home");
  };
 
  const handlechange = (e) => {
    setVal(e.target.value);
    console.log(val);
  };

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
      <section className=" flex flex-col justify-between text-white w-[375px] h-screen bg-[#00A86B] ">

        <section className=" w-full flex justify-between p-4">
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
              disabled={handleinputdisabled()}
              onKeyUp={()=>handleamount(event)}
              className="text-xl font-bold text-white p-0 border-2 border-[#00A86B] enabled:outline-none focus:text-white focus:border-2 focus:outline-[#00A86B] focus:border-[#00A86B]  placeholder:text-2xl placeholder:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onInput={handlechange}
            />
          </section>
        </section>
        <section className={` ${showoverlay?'bg-gray-50':'bg-[#ffffff]'} rounded-t-4xl w-full min-h-[556px]`}>
          <section className={`max-h-[458px] ${showoverlay&&'opacity-40'}`}>
          {
            <Dropdown showoverlay={showoverlay} dropdownarr={dropdownarr} setDropdownarr={setDropdownarr} setDisabled={setDisabled} flag={flag} setflag={setflag} label={'Category'}/>
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
           {
            <Dropdown showoverlay={showoverlay} walletdropdownarr={walletdropdownarr} setwalletDropdownarr={setwalletDropdownarr} setDisabled={setDisabled} flag={flag} setflag={setflag} label={'Wallet'}/>
           }
            <section className="relative w-full flex justify-center items-center p-4">
              {imgLink?

             <section className="mb-4 w-32 h-18"><section className={`${ gallery?'w-24 h-16 mb-14':'w-40 h-18 mb-6'}`}> <img className="rounded-lg w-32 h-16" src={imgLink} alt="" srcset="" /> </section></section> 
              
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
                className="bg-[#7F3DFF] text-white p-4 px-32 rounded-2xl font-semibold cursor-pointer"
                onClick={handleCont}
                disabled={!disabled}
              >
                Continue
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

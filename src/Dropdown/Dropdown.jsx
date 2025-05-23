import React,{useState} from 'react'
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";
import shopping from "../images/shopping.svg";
import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";
import down from "../images/down.svg";
import { useEffect } from 'react';

const Dropdown = ({edit,detailed,showincomepage,showoverlay,walletdropdownarr, setwalletDropdownarr,dropdownarr,setDropdownarr,flag,setflag,label,setDisabled}) => {
   


    const [showdropdown, setDropdown] = useState(false);
    
   
    const[bold,setBold] = useState(false);


   
   console.log("HUSDHF",dropdownarr);
    const handleShowdropdown = () => {
        setDropdown(!showdropdown);
        setflag(!flag);
        setBold(false);
      };

    const handledropdown = (x) =>{
       
        setDropdown(false);
        setBold(true);
      setflag(false);
      setDropdownarr([x]);
    
    
    }
   
    const handleShowwallet = () => {
        setDropdown(!showdropdown);
       
        setBold(false);
      };

      const handlewalletdropdown = (x) =>{
        setDropdown(false);
      
      setwalletDropdownarr([x]);
      setBold(true);
      setflag(false);
    }

    const handledisabledrop = () => {
       if(showoverlay===true){
        return true;
       }
       else{
        return false;
       }
      
    }
 
  return (
    <div>
           <section className="flex flex-col ">
              <section className="relative w-full flex justify-center items-center px-4 pt-4">
                <div className="border-[1px] py-4 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]">
                  {" "}
                  {label==='Category'?
                  <section className='w-16 flex rounded-2xl  justify-center items-center  gap-3' >
                  
                  
                  
              
                  <p className={`${dropdownarr.length>0?'text-[#393939] font-medium':'text-[#91919F]'}`}>
                    {dropdownarr.length>0?
                    
                  (
                    dropdownarr[0]==='Food'?
                  <section className='flex gap-3 '>     
                    <img src={Food} width={30} />
                    {dropdownarr[0]}
                    </section>
                    :dropdownarr[0]==='Shopping'?
                    <section className='flex gap-3 ml-3'> 
                    <img src={shopping} width={30} />
                    {dropdownarr[0]}
                    </section>
                    : dropdownarr[0]==='Subscription'?
                    <section className='flex gap-3 ml-12'> 
                    <img src={subs} width={30} />
                    {dropdownarr[0]}
                    </section>
                    :dropdownarr[0]==='Salary'?
                    <section className='flex gap-3 '> 
                    <img src={salary} width={30} />
                    {dropdownarr[0]}
                    </section>
                    :
                    <section className='flex gap-3 ml-12'> 
                    <img src={Tran} width={30} /> 
                    {dropdownarr[0]}
                    </section>

                    )
                  :
                  label}</p>
                  
                  
                  {" "}
                  </section>
                  :
                  <section>
                    <p className={`${walletdropdownarr.length>0?'text-[#393939] font-medium':'text-[#91919F]'}`}>{walletdropdownarr.length>0?walletdropdownarr[0]:label}</p>{" "}
                  </section>
}
                </div>
                <button
                  className=" absolute right-[20px]"
                  disabled={handledisabledrop()}
                  onClick={label==='Category'?handleShowdropdown:handleShowwallet}
                >
                  <img src={down} alt="" srcset="" />
                </button>
              </section>
              {showdropdown&&label==='Category'&& (
                <section className={` border-[1px] border-[#F1F1FA]  ${!showincomepage?'h-[15vh]':'h-[6vh]'} w-[90%] ml-4 rounded-2xl overflow-y-scroll`}>
                  <section className="w-full text-[#212325]">
                  { !showincomepage?
                    <ul className="w-full flex flex-col  ">
                   
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex gap-2 border-b-[1px] border-gray-100" 
                      onClick={()=>handledropdown('Food')}
                      >
                        <img src={Food} width={30} /> <p>Food</p>
                      </li>
                      <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100"
                       onClick={()=>handledropdown('Shopping')}
                      >
                        {" "}
                        <img src={shopping} width={30} /> <p> Shopping </p>{" "}
                      </li>
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100"
                           onClick={()=>handledropdown('Subscription')}
                      >
                        {" "}
                        <img src={subs} width={30} /> <p> Subscription </p>{" "}
                      </li>
                     
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 "
                      
                      onClick={()=>handledropdown('Transportation')}
                      >
                        {" "}
                        <img src={Tran} width={30} /> <p>Transportation</p>
                      </li>

                     
                    </ul>
                    :
                    <ul>
                           <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100"
                           onClick={()=>handledropdown('Salary')}
                      >
                        {" "}
                        <img src={salary} width={30} /> <p> Salary </p>{" "}
                      </li>

                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100"
                           onClick={()=>handledropdown('Salary')}
                      >
                        {" "}
                        <img src={salary} width={30} /> <p> Others </p>{" "}
                      </li>
                    </ul>
}
                  </section>
                </section>
              )
          
              
              
              

            }
            { showdropdown&&label==='Wallet'&&
                (
                                  
                <section className=" border-[1px] border-[#F1F1FA]  h-[15vh] w-[90%] ml-4 rounded-2xl overflow-y-scroll">
                <section className="w-full text-[#212325]">
                  <ul className="w-full flex flex-col  ">
                    <li className="bg-gray-50 font-medium px-3 p-1 w-full flex gap-2 border-b-[1px] border-gray-100" 
                    onClick={()=>handlewalletdropdown('Paytm')}
                    >
                       <p>Paytm</p>
                    </li>
                    <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100"
                     onClick={()=>handlewalletdropdown('GPAY')}
                    >
                      {" "}
                       <p> GPAY </p>{" "}
                    </li>
                    <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100"
                     onClick={()=>handlewalletdropdown('PAYPAL')}
                    >
                      {" "}
                      <p> PAYPAL </p>{" "}
                    </li>
                    <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100"
                     onClick={()=>handlewalletdropdown('Mobiwik')}
                    >
                      {" "}
                      <p> Mobiwik </p>{" "}
                    </li>
                    </ul>
                    </section>
                    </section>
                )
            }
            </section>
      
    </div>
  )
}

export default Dropdown

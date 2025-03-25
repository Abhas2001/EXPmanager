import React,{useState} from 'react'
import Food from "../images/Food.svg";
import salary from "../images/salary.svg";
import shopping from "../images/shopping.svg";
import subs from "../images/subs.svg";
import Tran from "../images/Tran.svg";
import down from "../images/down.svg";

const Dropdown = ({flag,setflag,label}) => {
   
    console.log(label);
    const [showdropdown, setDropdown] = useState(false);
    const[dropdownarr,setDropdownarr] = useState([]);
    const[bold,setBold] = useState(false);
    const handleShowdropdown = () => {
        setDropdown(!showdropdown);
        setflag(!flag);
        setBold(false);
      };

    const handledropdown = (x) =>{
        setDropdown(false);
      setDropdownarr([x]);
      setBold(true);
      setflag(false);
    }
    const handleShowwallet = () => {
        setDropdown(!showdropdown);
       
        setBold(false);
      };
   
  return (
    <div>
           <section className="flex flex-col ">
              <section className="relative w-full flex justify-center items-center px-4 pt-4">
                <div className="border-[1px] py-4 border-[#F1F1FA] p-2 w-[790px] rounded-2xl text-black placeholder:text-[#91919F]">
                  {" "}
                  <section className='w-32 flex rounded-2xl bg-[#FCFCFC] justify-center items-center  gap-3'>
                  
                    <div className='rounded-full bg-[#00A86B] w-3 h-3'></div>

                  <p className={`${dropdownarr.length>0?'text-[#393939] font-medium':'text-[#91919F]'}`}>{dropdownarr.length>0?dropdownarr[0]:label}</p>{" "}
                  </section>
                </div>
                <button
                  className=" absolute right-[20px]"
                  onClick={label==='Category'?handleShowdropdown:handleShowwallet}
                >
                  <img src={down} alt="" srcset="" />
                </button>
              </section>
              {showdropdown&&label==='Category'&& (
                <section className=" border-[1px] border-[#F1F1FA]  h-[15vh] w-[340px] ml-4 rounded-2xl overflow-y-scroll">
                  <section className="w-full text-[#212325]">
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
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 border-b-[1px] border-gray-100"
                           onClick={()=>handledropdown('Salary')}
                      >
                        {" "}
                        <img src={salary} width={30} /> <p> Salary </p>{" "}
                      </li>
                      <li className="bg-gray-50 font-medium px-3 p-1 w-full flex  gap-2 "
                      
                      onClick={()=>handledropdown('Transportation')}
                      >
                        {" "}
                        <img src={Tran} width={30} /> <p>Transportation</p>
                      </li>
                    </ul>
                  </section>
                </section>
              )
          
              
              
              

            }
            { showdropdown&&label==='Wallet'&&
                (
                                  
                <section className=" border-[1px] border-[#F1F1FA]  h-[15vh] w-[340px] ml-4 rounded-2xl overflow-y-scroll">
                <section className="w-full text-[#212325]">
                  <ul className="w-full flex flex-col  ">
                    <li className="bg-gray-50 font-medium px-3 p-1 w-full flex gap-2 border-b-[1px] border-gray-100" 
                    onClick={()=>handledropdown('Food')}
                    >
                      <img src={Food} width={30} /> <p>Phonepe</p>
                    </li>
                    <li className="bg-gray-50 font-medium px-3  p-1 w-full flex gap-2 border-b-[1px] border-gray-100"
                     onClick={()=>handledropdown('Shopping')}
                    >
                      {" "}
                      <img src={shopping} width={30} /> <p> GPAY </p>{" "}
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

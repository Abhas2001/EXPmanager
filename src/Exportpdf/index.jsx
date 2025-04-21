import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import Home from '../Home/index';
import html2pdf from 'html2pdf.js'

const index = ({setdark,sethome,settransaction,transaction,name,profilecolored,setprofilecolored,setloader,loader,home,Expenses,Incomes,setExpenses,setIncomes,setDetailed,negarr,catarr,totIncome,totexpense,negatives,storednegarr,storedarr,setExportpdf}) => {

    const navigate = useNavigate();
    const[showhidden,setShowhidden] = useState(false);

    const handleback = () =>{
        setExportpdf(false);
    }

   

 
    const csvData = [
        ["firstname", "lastname", "email"],
       storedarr,
      
      ];

  
    const handleDownload = async () => {
        
       setShowhidden(true);
      };
      
      const handleHome = () =>{
        navigate("/home")
      }

      const handlelight = (value) =>{
           if(value==='dark'){
            setdark(true);
            navigate("/home")
           }
           else{
              setdark(false);
           }
      }

  return (
    <div>{
     <section>
   
        {showhidden?
        <div onClick={()=>handleHome()} className='w-full flex justify-center items-center fixed bottom-0'>Back To Home</div>
        :
        <section>

      <section className='flex justify-between'>
        <button onClick={()=>handleback()}>back</button>
        <span>Export</span>
        <div className='flex'>
        
        <button onClick={()=>handlelight('dark')}>dark</button>
        <button onClick={()=>handlelight('light')}>light</button>

        </div>
      </section>


      <section className='w-full flex justify-center items-center fixed bottom-0'>
      <CSVLink  onClick={()=>handleDownload()} data={csvData}>Download me</CSVLink>;
      
      </section>
      </section>
}
      </section>
}
    </div>
  )
}

export default index

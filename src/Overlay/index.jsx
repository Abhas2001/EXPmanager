import React from 'react'
import Image from '../images/Camera.svg'
import Document from '../images/Document.svg'
import Imageselect from '../images/Imageselect.svg'
import { useRef, useState } from 'react'


const index = ({setShowoverlay,setOpenCamera,setImgLink,setGallery}) => {
    const handleclose = () =>{
        setShowoverlay(false);
    }
    const handleopencamera = () =>{
        setOpenCamera(true)
    }
    

    const fileInputRef = useRef(null);
   
  
    const openGallery = () => {
      fileInputRef.current.click(); // Programmatically trigger file input
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImgLink(imageUrl);
        setShowoverlay(false);
        setOpenCamera(false);
        setGallery(true);
      }
    };
  
   
  
  return (
    <section className='bg-[#ffffff] w-full h-60 flex flex-col gap-4 justify-between  text-black opacity-100 rounded-t-4xl shadow-2xl'>
            <section className='w-full flex justify-center items-center cursor-pointer'><button onClick={()=>handleclose()} className='w-12 h-0 mt-2 border-2 border-[#D3BDFF] bg-[#D3BDFF] cursor-pointer'></button></section> 
            <section className='w-full h-full flex justify-center items-center gap-3'>
                <div className='cursor-pointer' onClick={()=>handleopencamera()}><img src={Image} alt="" srcset="" /></div>
                <button onClick={openGallery} className='cursor-pointer'><img src={Imageselect} alt="" srcset="" /></button>
                <input
                  type="file"
                   accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }} // Hide file input
                     onChange={handleFileChange}
                        />
                <div className='cursor-pointer'><img src={Document} alt="" srcset="" /></div>
               
               
            </section>
    </section>
  )
}

export default index

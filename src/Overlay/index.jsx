import React from 'react'
import Image from '../images/Camera.svg'
import Document from '../images/Document.svg'
import Imageselect from '../images/Imageselect.svg'

const index = ({setShowoverlay,setOpenCamera}) => {
    const handleclose = () =>{
        setShowoverlay(false);
    }
    const handleopencamera = () =>{
        setOpenCamera(true)
    }

  return (
    <section className='bg-[#ffffff] w-full h-60 flex flex-col gap-4 justify-between  text-black opacity-100 rounded-t-4xl shadow-2xl'>
            <section className='w-full flex justify-center items-center cursor-pointer'><button onClick={()=>handleclose()} className='w-12 h-0 mt-2 border-2 border-[#D3BDFF] bg-[#D3BDFF]'></button></section> 
            <section className='w-full h-full flex justify-center items-center gap-3'>
                <div onClick={()=>handleopencamera()}><img src={Image} alt="" srcset="" /></div>
                <div><img src={Document} alt="" srcset="" /></div>
                <div><img src={Imageselect} alt="" srcset="" /></div>
            </section>
    </section>
  )
}

export default index

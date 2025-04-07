import React from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()


    const handleback = () =>{
        navigate(-1);
    }


  return (
    <div className='w-full h-screen bg-white'>
        <button onClick={()=>handleback()}>back</button>

        <section>
            <p className='text-lg font-bold text-black'>
                Financial Report
            </p>
        </section>
      
    </div>
  )
}

export default index

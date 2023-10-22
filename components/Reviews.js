"use client"
import { useState, useEffect } from 'react'

const Reviews = () => {
  const [index, setIndex] = useState(false)
  
    useEffect(() => {         
        setInterval(() =>  {
            setIndex((index) => !index)
        }, 4000)

    }, [])
    
  return (
    <div className='text-[#452b1a] font-bold text-3xl justify-center text-center'>
        <h3 className='p-2 text-white text-xs font-light'>{index ? ("THE BRAND THAT SELLS A HOODIE EVERY 20 SECONDS") : ("THE FASTEST GROWING STREETWEAR BRAND IN NIGERIA")}</h3>
        <h3>
          <span className='text-[12px] font-normal text-[#452b1a]'></span>
          
        </h3>
    </div>
  )
}

export default Reviews
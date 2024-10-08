import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const EditProductTopbar = () => {
  return (
    <div className='flex justify-between p-4 items-center'>
        <div className='flex gap-x-4  cursor-pointer'>
            <span className='flex justify-center items-center'>
                <FaArrowLeftLong />
            </span>
            <div className='flex flex-col '>
                <p className='text-[12px] text-gray-500'>Back</p>
                <h1 className='text-[15px] text-[#452b1a] font-bold'>Add New Product</h1>
            </div>
        </div>
        <button className='py-2 px-6 bg-[#452b1a] text-white text-[14px] mr-4' onClick={() => {}}>
            Save Product
        </button>
    </div>
  )
}

export default EditProductTopbar
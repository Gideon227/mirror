import React from 'react'
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='flex justify-between relative font-normal text-[#452b1a] bg-white'>
        <div className='flex outline-1 outline rounded-lg w-96 outline-gray-400'>
          <AiOutlineSearch size={32} className="absolute opacity-70 my-auto mt-1 text-gray-500 ps-4"/>
          <input 
            type='text'
            className=" ps-10 pe-5 py-1.5 placeholder-[#452b1a] outline-none focus:outline-none w-full placeholder:text-[12px]" 
            placeholder="Search for anything..."
          />
        </div>

        <div className='flex space-x-4'>
          <AiOutlineBell size={20} className='relative'/>
          <div>GO</div>
        </div>
    </div>
  )
}

export default Topbar
'use client'
import { useState } from 'react'
import Box from './Box'
import CreateProducts from './CreateProducts'

import { AiOutlineDollarCircle, AiOutlineShopping } from 'react-icons/ai'
import { LiaDownloadSolid, LiaUserCircle} from 'react-icons/lia'
import { BiPlus } from 'react-icons/bi'

const Overview = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false)
  return (
    <div className='py-5 px-2'>
      <div className='flex pb-5 justify-between'>
        <h1 className='text-[20px] font-medium'>Overview</h1>
        <div className='flex space-x-4'>
          <div className=' bg-[#25AAFF] flex relative rounded-lg '>
              <BiPlus size={23} className='text-white ps-2 my-auto' />
              <button onClick={() => setShowCreateProduct(true)} className='py-2 font-medium pe-2 ps-1 text-[12px] text-white'>
                Add New Product
              </button>
          </div>

          <div className=' bg-transparent outline-1 outline-[#F0F0F0] outline flex relative rounded-lg '>
              <LiaDownloadSolid size={23} className='text-black ps-2 my-auto' />
              <button className='py-2 font-medium pe-2 ps-1 text-[12px] text-black'>
                Download Result
              </button>
          </div>
          
        </div>
      </div>

      {
        showCreateProduct && (
          <div className='md:px-20 md:py-8 px-2 py-4 fixed z-50 top-0 w-screen h-full overflow-scroll left-0 bg-black bg-opacity-50 '>
            <CreateProducts setShowCreateProduct={setShowCreateProduct} />
          </div>
        )
      }

      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <div className='flex space-x-2'>
            <Box icon={<AiOutlineDollarCircle size={25}/>} total='₦259,000' />
            <Box icon={<LiaUserCircle size={20} />} total='₦259,000' />
            <Box icon={<AiOutlineShopping />} total='₦259,000' />
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>

    </div>
  )
}

export default Overview
import { useState, useEffect } from 'react'
import { useStateContext } from '@context/StateContext'
import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

import CreateProducts from './CreateProducts'
import { RxCross2 } from 'react-icons/rx'

const AdminProducts = () => {
  const { allProducts, handleRemoveProductFromDb } = useStateContext()
  const [showCreateProduct, setShowCreateProduct] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  return (
    <div className='pt-8'>
      <div className='flex justify-between'>
        <h1 className='text-[20px] font-medium text-black'>Product <span className='text-slate-300 ps-2 text-[12px]'>{allProducts.length} Products found</span></h1>
        <div className=' bg-[#25AAFF] flex relative rounded-lg '>
          <BiPlus size={23} className='text-white ps-2 my-auto' />
          <button onClick={() => setShowCreateProduct(true)} className='py-2 font-medium pe-2 ps-1 text-[12px] text-white'>              
            Add New Product
          </button>
        </div>
      </div>

      <div className='flex justify-between pt-6'>
        <div className="flex justify-between bg-white relative py-2 text-[16px] font-normal text-[#452b1a]">
          <AiOutlineSearch size={18} className="absolute top-2 text-[#452b1a] left-2 opacity-80"/>      
            <input 
              type="text" 
              className="ps-10 pe-5 focus:outline-none underline-[#452b1a] underline underline-offset-8 w-full" 
              placeholder="Search Product..." />
        </div> 
      </div>



      <div className="rounded-lg border border-[#ECECEE] px-5 py-3 space-y-3">
        <div className='grid grid-cols-7 gap-2 items-start text-start text-gray-900 text-[16px] font-bold'>
          <p className="col-span-1 text-[14px]">Product ID</p>
          <p className="col-span-2 text-[14px]">Product Name</p>
          <p className="col-span-1 text-[14px]">Categories</p>
          <p className="col-span-1 text-[14px]">Collections</p>
          <p className="col-span-1 text-[14px]">Price</p>
          <p className="col-span-1 text-[14px]">Action</p>
          
      </div>

      <div className="space-y-4 pb-2">
        {allProducts?.map((item) => (
          <div className='grid grid-cols-7 gap-2 items-start text-start border-t-[1px] border-[#ECECEE] pt-4 text-gray-900 text-[14px] font-medium' key={item._id}>
            <p className="col-span-1">{item._id.slice(0,9)}</p>
            <div className="col-span-2 space-x-2.5 flex">
              <Image src={item.imageURL[0]} alt='Product Image' width={30} height={30} className='rounded-lg object-contain'/>
              <p className='font-bold my-auto text-[14px]'>{item.title}</p>
            </div>
            <p className="col-span-1 flex text-[15px] capitalize">{item.category.join(', ')}</p>
            <p className="col-span-1 flex text-[15px] capitalize ps-2">{item.collections.join(', ')}</p>
            <p className="col-span-1">{item.price}</p>
            <div className='col-span-1 flex space-x-4 my-auto'>
              <Link href={`/admin/products/${item._id}`} className='cursor-pointer'><AiOutlineEdit size={16}/></Link>
              <button onClick={() => setShowDeleteConfirmation(true)} className='cursor-pointer'><AiOutlineDelete size={16} className='text-[#FF0000]'/></button>
            </div>

            {showDeleteConfirmation && (
              <div className='md:px-20 md:py-8 flex justify-center items-center px-2 py-4 fixed z-50 top-0 w-screen h-full overflow-scroll left-0 bg-black bg-opacity-50'>
                <div className='bg-white rounded-lg w-1/2'>
                  <button onClick={() => {setShowDeleteConfirmation(false)}} className='py-6 relative'>
                      <RxCross2 className='absolute top-3 left-4 text-gray-700' size={24}/>
                  </button>

                  <hr className='w-full text-gray-600 opacity-70 h-px'/>

                  <div className='md:mx-12 md:my-8 my-4 mx-2 md:space-y-6 space-y-2'>
                    <p>Are you sure you want to delete this product?</p>
                    <div className='flex gap-x-4 items-center w-full'>
                      <button onClick={() => setShowDeleteConfirmation(false)} className='border-[#452b1a] border text-[452b1a] py-2 px-6'>Cancel</button>
                      <button onClick={() => handleRemoveProductFromDb(item._id)} className='bg-[#DC3545] text-[#fff] py-2 px-6 '>Delete</button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

        ))}
        
      </div>
    </div>



      {showCreateProduct && (
          <div className='md:px-20 md:py-8 px-2 py-4 fixed z-50 top-0 w-screen h-full overflow-scroll left-0 bg-black bg-opacity-50 '>
            <CreateProducts setShowCreateProduct={setShowCreateProduct} />
          </div>
        )
      }

      
    </div>
  )
}

export default AdminProducts
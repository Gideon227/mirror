'use client'
import React from 'react'
import Image from 'next/image'
import { useStateContext } from '@context/StateContext'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'

const page = () => {
    const { cartFromLocaleStorage, onCartItemQuantity, onRemove, totalPriceFromLocalStorage } = useStateContext()

  return (
    <section className='sm:px-20 px-6 sm:pt-8'>
        <p className='text-[13px] max-sm:hidden text-[#452b1a] font-semibold text-center mx-auto'>only 10% fee for delivery around Lagos!</p>
        <div className='py-8 space-y-6'>
            <div className='space-y-2 max-sm:hidden'>
                <div className='flex justify-between my-auto'>
                    <h1 className='text-[12px] font-light'>PRODUCT</h1>
                    <div className='flex space-x-16'>
                        <h1 className='text-[12px] font-light'>QUANTITY</h1>
                        <h1 className='text-[12px] font-light'>TOTAL</h1>
                    </div>
                </div>
            <hr className='text-[#452b1a] w-full h-px block'/>
            </div>


            <div className='space-y-2'>
            {cartFromLocaleStorage?.map((item) => (
                <div className='flex justify-between my-auto' key={item}>
                    <div className='flex space-x-1.5 max-sm:space-x-3'>
                        <Image src={item.imageURL[0]} width={140} height={180} alt='product in cart'/>
                        <div className='max-sm:flex max-sm:flex-col max-sm:justify-between sm:my-auto'>
                            <div className='flex flex-col sm:my-auto max-sm:justify-between justify-start items-start'>
                                <h1 className='text-xs font-bold text-[#452b1a]'>{item.title}</h1>
                                <p className='text-[#452b1a] text-xs font-light'>${item.price}</p>
                                <p className='text-[#452b1a] text-xs font-medium pt-1'>XS</p>
                            </div>
                            <div className='flex justify-between sm:hidden'>
                                <div className='mt-4 flex flex-row space-x-2 my-auto align-middle'>
                                    <span className="text-xs font-thin my-auto cursor-pointer" onClick={() => onCartItemQuantity(item._id, 'dec') }>
                                        <AiOutlineMinus />
                                    </span>
                                    <span className="text-xs font-thin text-[#452b1a]" onClick="">{item.quantity}</span>
                                    <span className="text-xs font-thin text-[#452b1a] cursor-pointer my-auto" onClick={() => onCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                                </div>
                                <button className='text-[12px] font-thin underline hover:decoration text-[#452b1a]  transition ease-out delay-150' onClick={() => onRemove(item)}>Remove</button>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2.5 my-auto max-sm:hidden'>
                        <div className='mt-4 flex flex-row space-x-2 align-middle'>
                            <span className="text-xs font-thin my-auto cursor-pointer" onClick={() => onCartItemQuantity(item._id, 'dec') }>
                                <AiOutlineMinus />
                            </span>
                            <span className="text-xs font-thin text-[#452b1a]" onClick="">{item.quantity}</span>
                            <span className="text-xs font-thin text-[#452b1a] cursor-pointer my-auto" onClick={() => onCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                        </div>
                        <button className='text-[12px] font-thin underline hover:decoration text-[#452b1a]  transition ease-out delay-150' onClick={() => onRemove(item)}>Remove</button>
                    </div>

                    <p className='text-[14px] my-auto max-sm:hidden'>₦{item.price * item.quantity}</p>
                </div>
                ))}        
            </div>

            <hr className='text-[#452b1a] w-full h-px block'/>

            <div className='justify-end flex flex-col space-y-3.5 items-end '>
                <h1 className='text-[13px]'>TOTAL: ₦{totalPriceFromLocalStorage}</h1>
                <p className='text-[11px]'>Shipping & taxes calculated at checkout</p>
                <Link href='/checkout' className='text-[10px] font-semibold p-4 max-sm:w-full bg-[#452b1a] text-center text-white hover:bg-white hover:border hover:border-[#452b1a] hover:text-[#452b1a]'>CHECKOUT</Link>
            </div>

        </div>
    </section>
  )
}

export default page
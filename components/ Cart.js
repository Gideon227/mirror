"use client"
import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image';
import toast from 'react-hot-toast';

import { useStateContext } from '@context/StateContext';
import Link from 'next/link';

const  Cart = () => {
    const { onCartItemQuantity, onRemove, setShowCart, totalQuantities, totalPrice, cartItems } = useStateContext()
  
    return (
    <div className='cart-wrapper transition ease-in-out delay-150'>
        <div className='cart-container transition ease-in-out delay-150'>
            <div className='flex flex-row justify-between ps-2.5'>
                <h1 className='text-[#452b1a] text-xs font-bold'>CART</h1>
                <button className='text-[#452b1a] text-2xl font-bold' onClick={() => setShowCart(false)}><RxCross2  /></button>
            </div>

            {cartItems.length < 1 && (
                <div className='items-center justify-center flex h-5/6 '>
                    <h1 className='text-[15px] font-semibold text-[#452b1a]'>YOUR CART IS EMPTY</h1>
                </div>
            )}

            {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id} className='flex flex-col overflow-y-scroll no-scrollbar'>
                <div className='flex gap-x-3 p-5'>
                    <Image src={item.imageURL[0]} width={100} height={150} alt='product'/>
                    <div className='flex flex-col items-start ps-4 gap-y-1'>
                        <div>
                            <h1 className='text-sm font-semibold text-[#452b1a]'>{item.title}</h1>
                            <p className='text-[#452b1a] text-xs font-light'>${item.price}</p>
                            <p className='text-[#452b1a] text-xs font-thin pt-1'>XS</p>
                        </div>

                        <div className='mt-4 flex flex-row gap-2 align-middle'>
                            <span className="text-xs font-thin my-auto" onClick={() => onCartItemQuantity(item._id, 'dec') }>
                                <AiOutlineMinus />
                            </span>
                            <span className="text-xs font-thin text-[#452b1a]" onClick="">{item.quantity}</span>
                            <span className="text-xs font-thin text-[#452b1a] my-auto" onClick={() => onCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                        </div>

                        <div>
                            <button className='text-[12px] font-thin underline hover:decoration text-[#452b1a]  transition ease-out delay-150' onClick={() => onRemove(item)}>Remove</button>
                        </div>

                    </div>
                </div>
            </div>
            ))}

            

            <div className='flex flex-col w-full absolute bottom-0'>
                <p className='text-xs font-thin text-[#452b1a] py-2 top-[490px] text-center border-y-[#452b1a] border'>
                    <span>You are eligible for free shipping!</span>
                </p>
                <div className="flex justify-between ms-1 me-2 py-1">
                    <div className='flex flex-col'>
                        <span className='flex flex-col text-[#452b1a] font-medium text-[12px] text'>
                            CART
                            <span className='font-medium'>{totalQuantities} items</span>
                        </span>
                    </div>
                        <h2 className='text-[#452b1a] font-medium text-right flex text-[12px] flex-col'>
                            SUBTOTAL
                            <span>₦{totalPrice}</span>
                        </h2>
                </div>

                <button onClick={() => setShowCart(false)} className='bg-[#452b1a] mx-1 hover:bg-[#fff] border hover:text-black text-white border-[#452b1a] py-2 text-[12px] font-semibold'>
                    <Link href='/checkout'>CHECKOUT</Link>
                </button>
                <p className='text-[10px] text-[#452b1a] text-center font-bold'>Shipping & taxes calculated at checkout</p>
            </div>

        </div>
        
    </div>
  )
}

export default  Cart
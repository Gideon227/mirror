'use client'
import Image from "next/image"


import { useStateContext } from "@context/StateContext"

const CheckoutRightbar = ({ shipping }) => {
    const { cartFromLocaleStorage, totalPriceFromLocalStorage } = useStateContext()
 
  return (
    <div className='col-span-2 ps-10 py-14 pe-14 bg-[#452B19] space-y-4'>
      <div className="space-y-4">
        {cartFromLocaleStorage?.map((item) => (
          <div className="flex justify-between " key={item}>
            <div className="flex gap-x-4">
              <div className="relative">
                <Image src={item.imageURL[0]} alt={item?.title} width={75} height={80} className="border object-cover"/> 
                <span className='bg-[#6E6B6A] h-[22px] w-[22px] -translate-y-1/2 whitespace-nowrap z-10 absolute text-white -right-3 top-0 p-1 rounded-full font-white text-[11px] text-center '>{item.quantity}</span>
              </div>
              
              <div className="flex flex-col gap-y-1 align-middle my-auto items-start">
                <h2 className="text-white font-medium text-[14px]">{item?.title}</h2>
                <h6 className="text-white text-xs ">{item?.selectedSize || 'UNKNOWN'} / {item?.color || 'UNKNOWN'} </h6>
              </div>
            </div>

            <div className="flex align-middle my-auto">
              <h2 className="text-[14px] font-normal text-white">₦{item.price * item.quantity}</h2>
            </div>
          </div>
        ))}
      </div>

      <span className='bg-[#e6e6e6] w-full block h-px mx-auto z-20'> </span>

      <div className="flex gap-x-2 py-2 align-middle">
        <input 
          type="text"
          placeholder="Coupon code or gift cards"
          className="placeholder:text-[#2e2e2d] placeholder:text-[14px] outline-none text-[14px] px-2 py-3 border-lg bg-white w-full"
        />
        <button type='submit' className="px-3 py-2 text-white font-semibold text-[12px] bg-[#746053] hover:bg-transparent">Apply</button>
      </div>

      <span className='bg-[#e6e6e6] w-full block h-px mx-auto z-20'> </span>

      <div className="flex justify-between">
          <h2 className='text-white text-[15px] font-normal'>Subtotal</h2>
          <h2 className='text-white text-[14px] font-normal'>₦{totalPriceFromLocalStorage}</h2>
      </div>

      <div className="flex justify-between">
          <h2 className='text-white text-[15px] font-normal'>Shipping</h2>
          <h2 className='text-white text-[14px] font-normal'>{shipping}</h2>
      </div>
      <span className='bg-[#e6e6e6] w-full block h-px mx-auto z-20'> </span>

      <div className="flex justify-between">
          <h2 className='text-white text-[15px] font-normal'>Total</h2>
          <h2 className='text-white text-[20px] font-normal'> <span className="text-[14px] text-gray-400">NGN</span> ₦{totalPriceFromLocalStorage + parseInt(shipping) || totalPriceFromLocalStorage} </h2>
      </div>

    </div>
  )
}

export default CheckoutRightbar
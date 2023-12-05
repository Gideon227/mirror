'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image";
import { useStateContext } from "@context/StateContext";
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia'

import toast from 'react-hot-toast';

const Payment = ({ shipping }) => {
    const { totalPriceFromLocalStorage, cartFromLocaleStorage, totalQuantitiesFromLocalStorage } = useStateContext()
    const userInformationLocalStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInformation"));
    const router = useRouter()

    const [submitting, setSubmitting ] = useState(false)
    
    useEffect(() => {
        const createUserId = () => {
            if (!userInformationLocalStorage.userId) {
                const randomUserId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString().slice(0, 9);
                userInformationLocalStorage.userId = randomUserId 
                const updatedData = JSON.stringify(userInformationLocalStorage);
                localStorage.setItem('userInformation', updatedData);
            }
            else return;
        }
        createUserId()
        console.log(userInformationLocalStorage)
    }, [])
    

    const handlePayment = async (e) => {
        e.preventDefault()
        setSubmitting

        try {
            const response = await fetch ('/api/orders/new',{
                method: 'POST',
                body: JSON.stringify({
                    items: cartFromLocaleStorage,
                    userInformation: userInformationLocalStorage,
                    totalBill: totalPriceFromLocalStorage + shipping,
                    totalQuantity: totalQuantitiesFromLocalStorage
                  }),
            })
            if(response.ok){
                console.log('New Product Added')

            }    
            if(!response.ok){
                console.log('Failed to Post Data')
            }    
            } catch (error) {
                console.log(error)  
                toast.error(error.message)
            } finally{
                setSubmitting(false)
                toast.success('Your order is complete', {
                    style: {
                        fontSize: '12px',
                    }
                })
                router.push(`/track-orders/${parseInt(userInformationLocalStorage.userId)}`)
                // localStorage.removeItem('cart')
                // localStorage.removeItem('totalQuantitiesFromLocalStorage')
                // localStorage.removeItem('totalPriceFromLocalStorage')
            }
    }

    const paymentPage = userInformationLocalStorage && (
        <div className="space-y-5 mx-12 max-md:pb-10 ">
            <Link href='/' className="flex justify-center items-center mx-3">
                <Image alt="logo" src='/website-logo.png' width={100} height={10} className="pt-16 pb-2"/>
            </Link>                  
            <div className='flex justify-center items-center '>
                <Link href='/cart' className="text-[14px] flex text-[#452b1a] font-normal gap-2 ">Cart <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
                <Link href='/checkout' className="text-[14px] flex text-[#452b1a] font-normal gap-2">Information <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
                <Link href='/checkout/shipping' className="text-[14px] flex text-[#452b1a] font-normal gap-2">Shipping <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
                <Link href='/checkout/payment' className="text-[14px] flex text-[#452b1a] font-semibold gap-2">Payment </Link>
            </div>
            <div className="rounded-md border-[#d9d9d9] border px-4 py-3">
                <div className="flex justify-between">
                    <div className="flex space-x-8 my-auto">
                        <p className="text-[#737373] text-[15px] ">Contact</p>
                        <p className="text-[15px] font-medium">{userInformationLocalStorage?.email || 'No email'}</p>
                    </div>
                    <Link href='/checkout' className="text-[12px]">Change</Link>
                </div>
                    <hr className="h-px bg-[#e6e6e6] w-full opacity-60 my-3"/>
                <div className="flex justify-between">
                    <div className="flex space-x-8 my-auto">
                        <p className="text-[#737373] text-[15px]">Ship to</p>
                        <p className="text-[15px] font-medium">{userInformationLocalStorage?.address + ', ' + userInformationLocalStorage?.postalCode + ' ' + userInformationLocalStorage?.city + ', ' + userInformationLocalStorage?.state.slice(0, 2) + ', ' + userInformationLocalStorage?.country.label || 'No address'}</p>
                    </div>
                    <Link href='/checkout' className="text-[12px]">Change</Link>
                </div>
                    <hr className="h-px bg-[#e6e6e6] w-full opacity-60 my-3"/>
                <div className="flex justify-start items-start">
                    <div className="flex space-x-8 my-auto">
                        <p className="text-[#737373] text-[15px]">Shipping Method</p>
                        <p className="text-[15px] font-medium">
                            {userInformationLocalStorage?.state === 'LAGOS' ? (
                                <span className="text-[#737373] text-[14px]">Shipping Around Lagos . ₦{0.1 * totalPriceFromLocalStorage}</span>
                                ): (
                                <span className="text-[#737373] text-[14px]">Shipping Outside of Lagos . ₦{0.33 * totalPriceFromLocalStorage}</span>   
                            )}
                        </p>
                    </div>
                </div>
            </div>   
    
            <div className="flex justify-between my-2">
                <div className="flex space-x-1.5">
                    <LiaLessThanSolid size={16} className="my-auto "/>
                    <Link href='/checkout' className="text-[15px] font-normal my-auto">Return to Information</Link>
                </div>
    
                <button 
                onClick={handlePayment}
                className='px-4 py-2.5 font-normal text-[15px] text-white bg-[#452b1a] rounded-md'>
                    <span className={`${submitting && 'animate-spin'} my-auto`}></span>
                    Pay now
                </button>
          </div>
    
        </div>
    ) 
    
        return paymentPage;
}

export default Payment
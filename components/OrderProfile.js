"use client"
import { useState, useEffect } from 'react'
import getSingleOrderA from '@libs/getSingleOrder';
import Link from 'next/link';

import { BsArrowLeft } from 'react-icons/bs'
import { LiaEdit } from 'react-icons/lia'
import Image from 'next/image';
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useStateContext } from "@context/StateContext"

const OrderProfile = ({ orderId, userId }) => {
    const [order, setOrder] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const { onAdd } = useStateContext()

    const userInformation = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInformation"));

    useEffect(() => {
        const fetchOrder = async () => {
            const data = await getSingleOrderA(userId,orderId)
            setOrder(data)
            setIsLoaded(true)
        } 
        fetchOrder() 
        console.log(order)
        console.log(userInformation)
    }, [userId, orderId])

    function calculateDateDifference(targetDate) {
        const targetDateTime = new Date(targetDate);
        const currentDate = new Date();
        const differenceInMilliseconds = currentDate - targetDateTime;
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        
        return differenceInDays;
    }
    function returnDate(inputDate) {
        const inputDateTime = new Date(inputDate);

        const sevenDaysLater = new Date(inputDateTime);
        sevenDaysLater.setDate(inputDateTime.getDate() + 7);
        
        // Format the result as a string in "YYYY-MM-DD" format
        const year = sevenDaysLater.getFullYear();
        const month = String(sevenDaysLater.getMonth() + 1).padStart(2, '0');
        const day = String(sevenDaysLater.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        
        return formattedDate;
    }

    const orderProfilePage = isLoaded && (
        <div>
            <div className='flex justify-between mx-5 max-lg:mx-1 py-2.5'>
                <div className='flex lg:space-x-4 space-x-1'>
                    <Link href={`/track-orders/${userInformation.userId}`} className='p-2 border border-[#ECECEE] rounded-md text-gray-600 my-auto'><BsArrowLeft size={10} /></Link>
                    <div className='my-auto'>
                        <p className='text-[12px] text-gray-600 font-normal'>{order?.date_added.slice(0, 10)} {order?.date_added.slice(12, 19)} - {order?.updatedAt.slice(0, 10)} {order?.updatedAt.slice(12, 19)}</p> 
                        <h1 className='text-[16px] max-sm:text-[14px] text-semibold font-bold'>{order.items[1][0].title}</h1>
                    </div>
                </div>

                <div className='flex space-x-4 pt-2'>
                    <h1 className='text-[14px]'>Status: <span className={`${order.status === 'Completed' ? 'text-[#229655]' : order.status == 'Pending' ? 'text-[#FCA925]' : 'text-[#F93331]' }`}>{order.status}</span></h1>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-6 max-lg:flex max-lg:flex-col py-4 mx-7'>
                <div className='lg:col-span-2'>
                    <h1 className='text-[18px] py-2 font-semibold text-start'>Order Details</h1>
                    <div className='border border-[#ECECEE] rounded-lg px-5 py-4 flex justify-between'>
                        <div className='space-y-4'>
                            <button className={`${order.status === 'Completed' ? 'bg-[#229655]' : order.status == 'Pending' ? 'bg-[#FCA925]' : 'bg-[#F93331]' } px-4 py-1 text-white text-[11px] font-light`}>{order.status}</button>
                            <h1 className='text-[14px] font-medium'>Ordered on: {order?.date_added.slice(0, 10)}</h1>
                            <div className='flex space-x-4'>
                                <Image src={order.items[1][0].imageURL} width={104} height={104} className='object-contain '/>
                                <div className='flex-col flex justify-between items-start mb-2'>
                                    <h1 className='text-[15px] font-medium'>{order.items[1][0].title}</h1>
                                    <h1 className='text-[14px] font-light'>Quantity: <span className='font-medium'>{order.totalQuantity}</span></h1>
                                    <h1 className='text-[16px] font-medium'>₦{order.totalBill}</h1>
                                </div>
                            </div>
                            <h1 className='flex text-[15px] max-lg:hidden font-medium'> <IoReturnUpBackOutline className='text-[30px] pb-2 pe-3'/> {calculateDateDifference(order?.date_added.slice(0, 10)) > 7 ? `The return period ended on ${returnDate(order?.date_added.slice(0, 10))}` : `The return period will last for only 7 days and will end on  ${returnDate(order?.date_added.slice(0, 10))}` }</h1>
                        </div>
                        <div className='items-end max-lg:hidden space-y-2'>
                            <button className='bg-[#452b1a] hover:bg-[#fff] hover:border hover:text-black text-white border-[#452b1a] rounded py-2.5 w-44 text-[12px] font-semibold' onClick={() => onAdd(order, 1)}>BUY AGAIN</button>
                            <h1 className='text-[14px] font-semibold'>SEE STATUS HISTORY</h1>
                        </div>
                    </div>
                </div>

                <div className='items-end lg:hidden space-y-2'>
                    <button className='bg-[#452b1a] hover:bg-[#fff] hover:border hover:text-black text-white border-[#452b1a] rounded py-2.5 w-44 text-[12px] font-semibold' onClick={() => onAdd(order, 1)}>BUY AGAIN</button>
                    <h1 className='text-[14px] font-semibold'>SEE STATUS HISTORY</h1>
                </div>

                <h1 className='flex lg:hidden text-[15px] font-medium'> <IoReturnUpBackOutline className='text-[30px] pb-2 pe-3'/> {calculateDateDifference(order?.date_added.slice(0, 10)) > 7 ? `The return period ended on ${returnDate(order?.date_added.slice(0, 10))}` : `The return period will last for only 7 days and will end on  ${returnDate(order?.date_added.slice(0, 10))}` }</h1>
                
                <div className='lg:col-span-1 space-y-3 '>
                    <h1 className='text-[18px] font-semibold text-start'>Customer Information</h1>
                    <div className='rounded-lg relative border border-[#ECECEE] ps-4 py-3 space-y-3'>
                        <button className="absolute top-5 right-2"><LiaEdit size={18}/></button>
                        <div className='space-y-2'>
                            <h1 className='text-slate-400 text-[14px] font-medium'>Name</h1>
                            <h1 className='text-black text-[14px] font-medium'>{userInformation.firstName + ' ' + userInformation.lastName}</h1>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-slate-400 text-[14px] font-medium'>Email</h1>
                            <h1 className='text-black text-[14px] font-medium'>{userInformation.email}</h1>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-slate-400 text-[14px] font-medium'>Phone Number</h1>
                            <h1 className='text-black text-[14px] font-medium'>{userInformation.phone}</h1>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-slate-400 text-[14px] font-medium'>Shipping Address</h1>
                            <h1 className='text-black text-[14px] font-medium'>{userInformation.address + ', ' + userInformation.city + ', ' + userInformation.state + ', ' + userInformation.country?.label}</h1>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-slate-400 text-[14px] font-medium'>Billing</h1>
                            <h1 className='text-black text-[14px] font-medium'>Same as Shipping Address</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

  return orderProfilePage
}

export default OrderProfile
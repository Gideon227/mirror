"use client"
import { useState, useEffect } from 'react'
import getOrder from '@libs/getOrder';
import TrackOrders from './TrackOrders';

 
 const TrackOrderPage = ({ userId }) => {
    const userInformationLocalStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInformation"));

    const [orderItem, setOrderItem] = useState([])
    const [orderFromStatus, setOrderFromStatus] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrderItem = async () => {
        const data = await getOrder(parseInt(userId))
        setOrderItem(data)
        setOrderFromStatus(orderItem)
        setLoading(false)
      }
        fetchOrderItem()    
    }, [])
    
    const trackOrder = !loading && orderItem.length > 0
    ? <TrackOrders userInformation={userInformationLocalStorage} orderItem={orderItem} setOrderItem={setOrderItem} userId={userId} /> 
    : (
      <div className='relative h-screen w-screen'>
        <h1 className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[50px] max-lg:text-[35px] max-sm:text-[25px] font-bold'>Your Order tab is empty!</h1>
        {console.log(orderItem)}
    </div>
  )

    return trackOrder
 }
 
 export default TrackOrderPage
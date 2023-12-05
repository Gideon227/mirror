'use client'
import { useEffect, useState } from 'react'
import getAllOrders from '@libs/getAllOrders';
import Overview from './Overview'
import Orders from './Orders'
import AdminProducts from './AdminProducts'
import AdminAnalytics from './AdminAnalytics'
import Customers from './Customers'

import Topbar  from './Topbar'
import { useStateContext } from '@context/StateContext'


const AdminContent = () => {
    const { adminNavigation } = useStateContext()

    const [orders, setOrders] = useState([])

    useEffect(() => {
      const fetchOrders = async () => {
        const data = await getAllOrders()
        setOrders(data)
      }
     fetchOrders()
     console.log(tableData)
    }, [])

    const tableData = orders?.map((item) => {
        let datas = {
          "id": item._id,
          "image": item.items[1][0].imageURL[0],
          "product": item.items[1][0]?.title,
          "email": item.userInformation.email,
          "address": item.userInformation?.address,
          "name": item.userInformation.name,
          "status": item.status,
          "price": item.items[1][0]?.price,
          'quantity': item.items[1][0]?.quantity,
          "date": item.createdAt.slice(0, 10)
        }
        return datas
      })

      const columns = [
        { label: "Product", accessor: "product" },
        { label: "Email", accessor: "email" },
        { label: "Address", accessor: "address"},
        { label: "Name", accessor: "name"},
        { label: "Status", accessor: "status" },
        { label: "Price", accessor: "price" },
        { label: "Qty", accessor: "quantity" },
        { label: "Date", accessor: "date" },
       ];

  return (
    <div className='p-5'>
        <Topbar />
        {adminNavigation === 'Overview' 
            ? <Overview />
            : adminNavigation === 'Orders' 
            ? <Orders orders={orders} tableData={tableData} columns={columns}/>
            : adminNavigation === 'Products'
            ? <AdminProducts />
            : adminNavigation === 'Customers'
            ? <Customers />
            : adminNavigation === 'Analytics'
            ? <AdminAnalytics />
            : <Overview />
        }
    </div>
  )
}

export default AdminContent
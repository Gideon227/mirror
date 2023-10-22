'use client'
import React from 'react'
import Overview from './Overview'
import Orders from './Orders'
import AdminProducts from './AdminProducts'
import AdminAnalytics from './AdminAnalytics'
import Customers from './Customers'

import Topbar  from './Topbar'
import { useStateContext } from '@context/StateContext'


const AdminContent = () => {
    const { adminNavigation } = useStateContext()
  return (
    <div className='p-5'>
        <Topbar />
        {adminNavigation === 'Overview' 
            ? <Overview />
            : adminNavigation === 'Orders' 
            ? <Orders />
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
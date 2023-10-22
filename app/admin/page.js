
import React from 'react'

import AdminNavigation from '@components/AdminNavigation'
import AdminContent from '@components/AdminContent'

const page = () => {
  return (
    <div className='grid grid-cols-5 gap-0'>
        <div className='col-span-1 sticky h-screen top-0 bg-[#F6F8F9]'> <AdminNavigation /></div>
        <div className='col-span-4 h-[1000px]'> <AdminContent /></div>
    </div>
  )
}

export default page
'use client'
import Link from "next/link"
import Image from "next/image"
import { AiOutlineCompass, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai'
import { LiaStoreAltSolid } from 'react-icons/lia'
import { MdOutlineSell } from 'react-icons/md'
import { IoIosLogOut } from 'react-icons/io'

import { useStateContext } from '@context/StateContext'

const AdminNavigation = () => {
    const { setAdminNavigation } = useStateContext()
    const navigationData = [
        {
            text: 'Overview',
            icon: <AiOutlineCompass size={18}/>
        },
        {
            text: 'Orders',
            icon: <AiOutlineShoppingCart size={18}/>
        },
        {
            text: 'Products',
            icon: <MdOutlineSell size={18}/>
        },
        {
            text: 'Customers',
            icon: <AiOutlineUser size={18}/>
        },
        {
            text: 'Analytics',
            icon: <AiOutlineBarChart size={18}/>
        },
    ]

    const logoutNavigation = [
        {
            text: 'Settings',
            icon: <AiOutlineSetting size={18}/>
        },
        {
            text: 'Log Out',
            icon: <IoIosLogOut size={18}/>
        },
    ]

  return (
    <main className='p-3 flex flex-col justify-between'>
        <div className='flex flex-col space-y-16 p-2'>
            <Link href='/admin' className='flex justify-start ps-5'><Image src='/website-logo.png' width={85} height={10} alt='logo' className="object-contain" /></Link>

            <div className="flex flex-col space-y-3">
                {navigationData?.map((item) => (
                    <button key={item.text} onClick={() => setAdminNavigation(item.text)} className="hover:bg-white active:bg-white focus:bg-white hover:shadow-sm rounded-lg py-1.5 cursor-pointer flex space-x-2 justify-start items-start my-auto ps-2">
                        <div>{item.icon}</div>
                        <p className="text-[14px] text-black font-medium">{item.text}</p>
                    </button>
                ))}
            </div>
        </div>

        <div className="flex flex-col space-y-4 w-11/12 absolute bottom-10">
            {logoutNavigation?.map((item) => (
                <button key={item.text} onClick={() => setAdminNavigation(item.text)} className="hover:bg-white focus:bg-white hover:shadow-sm rounded-lg py-1.5 cursor-pointer flex space-x-2 justify-start items-start my-auto ps-2">
                    <div>{item.icon}</div>
                    <p className="text-[14px] text-black font-medium">{item.text}</p>
                </button>
            ))}
        </div>


    </main>
  )
}

export default AdminNavigation
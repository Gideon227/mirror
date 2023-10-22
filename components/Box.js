import React from 'react'


const Box = ({ icon, total }) => {
  return (
    <div className='rounded-2xl border-[#EFEFF1] border-[1.5px] flex w-full h-full'>
        <div className='space-y-1 py-3 ps-2'>
            <div className='border-gray-300 border rounded-md p-1.5 w-8 h-8 items-center justify-center flex'>
                {icon}
            </div>
            <h2 className='text-[#919294] text-[14px] py-1 font-medium'>Total Sales</h2>
            <h1 className='text-black text-[16px] -mt-3 font-bold'>{total}</h1>
        </div>
        <div className='flex flex-col justify-end pt-3'>
            chart
        </div>

    </div>
  )
}

export default Box
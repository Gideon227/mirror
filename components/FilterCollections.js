'use client'
import { useState } from 'react'
import { useStateContext } from '@context/StateContext';

const FilterCollections = ({ title }) => {
    const { setSortProducts } = useStateContext()
    const [trigger, setTrigger] = useState(false)
    const toggleTrigger = () => {
        setTrigger(prev => !prev)
    }
    const incSort = () => {
        setSortProducts('inc')
        setTrigger(false)
    }

    const decSort = () => {
        setSortProducts('dec')
        setTrigger(false)
    }
    const featuredSort = () => {
        setSortProducts('')
        setTrigger(false)
    }

  return (
    <div className='flex flex-row justify-between'>
        <h1 className='text-[14px] font-bold text-[#452b1a] capitalize'>{title}</h1>
        <div className='items-end flex flex-col'>
            <button 
                onClick={toggleTrigger}
                className='text-[14px] font-normal text-[#452b1a] mb-2 underline-offset-8 hover:underline underline-[#452b1a]'
            >SORT
            </button>
            {trigger && (
                <div className='bg-white absolute top-28 right-4 z-10 filter p-5 text-[#452b1a]'>
                    <div className='flex flex-col items-end gap-y-1.5'>
                        <button onClick={featuredSort} className='text-[#452b1a] text-[12px] font-normal hover:underline hover:underline-[#452b1a]'>FEATURED</button>
                        <button onClick={incSort} className='text-[#452b1a] text-[12px] font-normal hover:underline hover:underline-[#452b1a]'>PRICE, LOW TO HIGH</button>
                        <button onClick={decSort} className='text-[#452b1a] text-[12px] font-normal hover:underline hover:underline-[#452b1a]'>PRICE, HIGH TO LOW</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default FilterCollections
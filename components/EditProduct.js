'use client'
import { useEffect, useState } from 'react'
import getProduct from '@libs/getProduct'
import Image from 'next/image'

const EditProduct = ({ slug }) => {
    const [productItems, setProductItems] = useState([])

    useEffect(() => {
        const fetchProductItem = async() => {
          const data = await getProduct(slug)
          setProductItems(data)
        }
        fetchProductItem()      
    }, [])
    

  return (
    <div className='grid grid-cols-4 gap-4 pt-6'>
        <div className='col-span-1'>
            <div className='bg-gray-800 rounded-lg p-4 space-y-4'>
                <Image src={productItems?.imageURL} width={400} height={400} className='rounded-lg object-contain' />
                <h1 className='font-normal text-[12px]'>{productItems?.title}</h1>
            </div>
        </div>
        <div className='col-span-3 bg-gray-800 rounded-lg p-4'>

        </div>
    </div>
  )
}

export default EditProduct
'use client'
import { useEffect, useState } from 'react'
import getProduct from '@libs/getProduct'
import Image from 'next/image'

import EditProductTopbar from './EditProductTopbar'
import EditProductContent from './EditProductContent'

const EditProduct = ({ slug }) => {
    const [productItems, setProductItems] = useState([])
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        const fetchProductItem = async() => {
          const data = await getProduct(slug)
          setProductItems(data)
        }
        fetchProductItem()      
    }, [])
    

  return (
    <div className='flex flex-col space-y-6'>
      <EditProductTopbar submitting={submitting}/>
      <EditProductContent productItems={productItems} submitting={submitting} setSubmitting={setSubmitting} slug={slug}/>  
    </div>
  )
}

export default EditProduct
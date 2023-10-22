'use client'
import getCategories from "@libs/getCategories"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

import { useStateContext } from '@context/StateContext';

export const Categorypage = ({ category }) => {
  const { sortProducts } = useStateContext()
  const [categoryProducts, setCategoryProduct] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getCategories(category)
      setCategoryProduct(data)
    } 
    fetchCollections()
  },[])

  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-4'>
      { categoryProducts.length >= 1 ? 
      categoryProducts?.map((item) => (
          <ProductCard key={item} product={item} />
      ))
      : (
        <div className='justify-center'>
          <h2 className="text-[18px] whitespace-nowrap font-light text-center">No Product Available</h2>
        </div>
      )
    }
      
    </div>
  )
}

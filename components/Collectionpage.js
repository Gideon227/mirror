'use client'
import { useEffect, useState } from 'react'
import getCollections from '@libs/getCollections'
import ProductCard from './ProductCard'
import { useStateContext } from '@context/StateContext';
const CollectionPage = ({ collection }) => {
  const { sortProducts } = useStateContext()
  const [collectProduct, setCollectionProduct] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getCollections(collection)
      setCollectionProduct(data)
    } 
    fetchCollections()
  },[])

  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-4'>
      { sortProducts == 'inc' ?
        collectProduct.sort((a, b) => a.price - b.price).map((item) => (
          <ProductCard key={item} product={item} />  
        ))
        :
        ( sortProducts == 'dec' ?
          collectProduct.sort((a, b) => b.price - a.price).map((item) => (
            <ProductCard key={item} product={item} />  
          )) :
          collectProduct.map((item) => (
            <ProductCard key={item} product={item} />  
          ))
        )
      }
      
    </div>
  )
}

export default CollectionPage
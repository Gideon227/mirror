'use client'
import { useStateContext } from '@context/StateContext'
import ProductCard from './ProductCard'

const Bestsellers = () => {
    const { allProducts } = useStateContext()

  return (
    <div className='flex flex-col p-4'>
        <h1 className='text-xs font-bold'>BEST SELLERS</h1>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-4'>
          {allProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />   
          ))}
        </div>
      </div>
  )
}

export default Bestsellers
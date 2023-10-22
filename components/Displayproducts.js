"use client"
import ProductCard from '@components/ProductCard'
import { useStateContext } from '@context/StateContext'

const Displayproducts = () => {
    const { allProducts } = useStateContext()

    const twentyProducts = allProducts.slice(0, 20)
  return (
    <div>
        <div className='flex flex-col p-4'>
            <h1 className='text-xs font-bold'>NEW ARRIVALS</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-4'>
            {twentyProducts?.map((product) => (
                <ProductCard key={product._id} product={product} />   
            ))}
            </div>
        </div>
        <div className='justify-center flex'>
            <button href='/collections/all-products' className='text-[12px] font-bold px-3 py-1.5 border-[#452b1a] border my-6'>VIEW ALL</button>
        </div>
    </div>
  )
}

export default Displayproducts
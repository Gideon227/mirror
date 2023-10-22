"use client";
import { useEffect, useState } from "react";


const getProducts = () => {
    const [myProducts, setMyProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products')
            const data = await response.json();
            setMyProducts(data)
        }
        fetchProducts()
    })
    
  return (
    <div>{myProducts?.map((product) => {
        <div key={product.title}>{product.price}</div>
    })}</div>
  )
}
export default getProducts;
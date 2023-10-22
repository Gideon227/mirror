"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const ProductCard = ({ product }) => {
    /*function changeBackground(e) {
        e.target.src = product.image[1];
    }*/

  return (
    <div>      
        <div className="p-2">
            <Link href={`/products/${product._id}`} className='flex cursor-pointer flex-col'> 
                <Image 
                    src={product.imageURL[0]}
                    width={300}
                    height={470} 
                    alt={product.title} 
                    //onMouseEnter={changeBackground} 
                    className='w-full h-full max-md:h-full object-contain'
                />
                <div className="flex flex-col items-start">
                    <h2 className='text-[13px] max-lg:text-[10px] font-bold capitalize text-[#452b1a] mt-1 mb-0.5'>{product.title}</h2>
                    <p className='text-[12px] max-lg:text-[10px] text-[#452b1a] capitalize font-normal pb-2'>${product.price}</p>
                </div>
                
            </Link>
        </div>
    </div>
  )
}

export default ProductCard
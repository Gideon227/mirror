import { Categorypage } from "@components/Categorypage"
import FilterCollections from "@components/FilterCollections"

import Link from "next/link"
const page = () => {
  return (
    <div className='flex flex-col px-6 py-5'>
      <FilterCollections title= 'ALL PRODUCTS | ACCESSORIES'/> 
      <div className="no-scrollbar max-lg:overflow-x-scroll">
        <div className="flex flex-row whitespace-nowrap gap-x-10 my-auto pt-2 max-lg:justify-between max-lg:gap-x-7 max-lg:gallery no-scrollbar max-lg:w-full">
          <Link href='/collections/all-products' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px] '>ALL PRODUCTS</Link>
          <Link href='/collections/all-products/t-shirt' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>T-SHIRT</Link>
          <Link href='/collections/all-products/hoodies' className='font-normal text-[#452b1a] opacity-60  text-[13px]/[20px]'>HOODIES</Link>
          <Link href='/collections/all-products/shirts-and-polos' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>SHIRTS & POLOS</Link>
          <Link href='/collections/all-products/outerwear' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>OUTERWEAR</Link>
          <Link href='/collections/all-products/caps' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>CAPS</Link>
          <Link href='/collections/all-products/headwarmer' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>HEAD WARMERS</Link>
          <Link href='/collections/all-products/swimwear' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>SWIMWEAR</Link>
          <Link href='/collections/all-products/knitwear' className='font-normal text-[#452b1a] opacity-60 text-[13px]/[20px]'>KNITWEAR</Link>
          <Link href='/collections/all-products/accessories' className='font-normal text-[#452b1a] opacity-100 underline underline-[#452b1a] text-[13px]/[20px]'>ACCESSORIES</Link>
        </div> 
      </div>  
      <Categorypage category='accessories' />
    </div>
  )
}

export default page
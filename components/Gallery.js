import Link from "next/link"
import Image from "next/image"

const Gallery= ({ width, height }) => {
  return (
    <div>
    <div className= " no-scrollbar mx-4 overflow-x-scroll mt-8">
      <div className='gallery flex flex-row no-scrollbar space-x-5 w-full mx-3'>
        <Link href='collections/all-products' className="hover:opacity-50 flex flex-row group relative">
          <Image src='/collectionA.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover" />  
            <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 font-bold bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>

        <Link href='collections/all-products/hoodies' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionB.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover"/> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>
        <Link href='collections/all-products' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionC.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover" /> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>
        <Link href='collection/all-products' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionD.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover"/> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>
        <Link href='collection/all-products' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionE.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover"/> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4  bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>
        <Link href='collection/all-products' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionF.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover" /> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>          
        </Link>
        <Link href='collection/all-products' className="hover:opacity-50 flex flex-row group relative"> 
          <Image src='/collectionG.webp' alt='collection image' width={width} height={height} className="group-hover:opacity-75 object-cover"/> 
          <button className="absolute border border-[#452b1a] text-[#452b1a] text-[11px] py-1.5 px-5 translate-x-2/4 bg-transparent top-1/2 right-1/2 opacity-0 group-hover:opacity-100">SHOP</button>
        </Link>

      </div>
    </div>
    </div>
  )
}

export default Gallery
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Collections = () => {
  return (
    <div className='flex py-2 pb-5'>
        <div className='max-lg:hidden px-8 flex gap-x-2 w-full h-[500px] relative'>
            <Link href='/collections/all-products/t-shirt' className='relative w-full h-full cursor-pointer hover:opacity-80'>
                <Image src='/tees-collection.webp' fill style={{ objectFit: 'fill'}} alt='Tees Collection'/>
                <h1 className='absolute top-1/2 right-1/2 center text-white text-[22px] font-semibold'>T-SHIRT</h1>
            </Link>

            <Link href='/collection/all-products/hoodies' className='relative w-full h-full cursor-pointer hover:opacity-90'>
                <Image src='/hoodies-collection.webp' fill style={{ objectFit: 'fill'}} alt='Tees Collection'/>
                <h1 className='absolute top-1/2 right-1/2 center text-white text-[22px] font-semibold'>HOODIES</h1>
            </Link>

            <Link href='/collections/all-products' className='relative w-full h-full cursor-pointer hover:opacity-90'>
                <Image src='/mobile-hero.webp' fill style={{ objectFit: 'fill'}} alt='Tees Collection'/>
                <h1 className='absolute top-1/2 right-1/2 text-center center text-white text-[22px] w-full font-semibold'>ALL PRODUCTS</h1>
            </Link>
        </div>

        {/** MOBILE AND TABLET SCREEN */}
        <div className='lg:hidden flex items-center flex-col'>
            <div className='flex gap-4 px-2 mb-2'>
                <Link href='/collections/all-products/t-shirt' className='relative cursor-pointer hover:opacity-80'>
                    <Image src='/tees-collection.webp' width={400} height={800} alt='Tees Collection'/>
                    <h1 className='absolute top-1/2 right-1/2 text-white text-[20px] font-bold center'>TEES</h1>
                </Link>

                <Link href='/collection/all-products/hoodies' className='relative cursor-pointer hover:opacity-90'>
                    <Image src='/hoodies-collection.webp' width={400} height={800} alt='Tees Collection'/>
                    <h1 className='absolute top-1/2 right-1/2 text-white text-[20px] font-bold center'>HOODIES</h1>
                </Link>
            </div>
            

            <Link href='/collections/all-products' className='relative cursor-pointer hover:opacity-90 px-2'>
                <Image src='/mobile-hero.webp' width={400} height={250} alt='Tees Collection' className='w-screen'/>
                <h1 className='absolute top-1/2 right-1/2 text-white text-[20px] font-bold center'>ALL PRODUCTS</h1>
            </Link>
        </div>
    </div>
  )
}

export default Collections
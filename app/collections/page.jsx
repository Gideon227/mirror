import Image from 'next/image'
import Link from 'next/link'

const allCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-y-8">
      <h1 className="text-[#452b1a] text-[18px] font-semibold">ALL COLLECTIONS</h1>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-12">
          <Link href='/collections' className="flex flex-col"><Image src='/collection-image1.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>SALAO</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-2.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>TRUENO X NUDE PROJECT</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-3.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>CHAMPAGNE PROBLEMS</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection-image1.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>BESTSELLERS</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-4.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>ALL PRODUCTS</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-4.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>ALL PRODUCTS</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-4.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>ALL PRODUCTS</p> </Link>
          <Link href='/collections' className="flex flex-col"><Image src='/collection image-4.webp' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-bold'>ALL PRODUCTS</p> </Link>    
      </div>
    </div>
  )
}

export default allCollection
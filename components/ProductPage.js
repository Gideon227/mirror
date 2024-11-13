"use client"
import {useState, useEffect} from 'react'
import getProduct from '@libs/getProduct';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { GoDotFill, GoDot } from 'react-icons/go'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image';
import { useStateContext } from "@context/StateContext"
import Gallery from './Gallery';

const ProductPage = ({ slug }) => {
  const { onAdd, qty } = useStateContext()
  const [productItem, setProductItem] = useState()
  const [expanded, setExpanded] = useState(false)
  const [expandedSecond, setExpandedSecond] = useState(false)
  const [expandedThird, setExpandedThird] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const onExpand = () => {
    setExpanded((prev) => !prev)
  }
  const onExpandSecond = () => {
    setExpandedSecond((prev) => !prev)
  }
  const onExpandThird = () => {
    setExpandedThird((prev) => !prev)
  }

  const unAvailableSizes = (inputSizes) => {
    const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const missingSizes = availableSizes.filter(size => !inputSizes?.includes(size));
    return missingSizes;
  }

  useEffect(() => {
    const fetchProductItem = async() => {
      const data = await getProduct(slug)
      setProductItem(data)
    }
    fetchProductItem()  
    
  }, [])


  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? productItem.imageURL.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const newIndex = currentIndex === productItem.imageURL.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='flex gap-x-1 w-screen p-2 flex-col'>
      <div className='flex w-screen flex-col py-2.5 lg:flex-row'>
        <div className='w-3/5 grid grid-cols-2 grid-rows-2 gap-2 max-lg:hidden'>
          {productItem?.imageURL.map((item, index) => (
            <div className='flex h-[362px] w-full relative' key={index} >
              <Image fill style={{ objectFit: 'cover'}} src={productItem?.imageURL[index]} alt='product images' className='object-cover'/>
            </div>
          ))}
        </div>

          
        {/**Product Images for laptop and mobile devices */}
        <div className='lg:hidden max-w-[1200px] h-[780px] max-sm:h-[380px] w-full m-auto py-16 px-4 relative group'>
          <Image src={productItem?.imageURL[currentIndex]} width={800} height={480} alt='product' className='w-full h-full object-contain duration-500'/>
            {/**Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-[#452b1a] cursor-pointer'>
              <AiOutlineLeft onClick={() => prevSlide()} size={21} />
            </div>
            
            {/**Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-[#452b1a] cursor-pointer'>
              <AiOutlineRight onClick={() => nextSlide()} size={21} />
            </div>
            
            <div className='flex top-4 justify-center py-2'>
              {productItem?.imageURL.map((item, index) => (
                <div className='cursor pointer' key={item}>
                  {index === currentIndex ? 
                    <GoDotFill color='#452b1a' size='18' onClick={() => goToSlide(index)}/> : 
                    <GoDot color='#452b1a' size='18' onClick={() => goToSlide(index)}/>}
                </div>
              ))}
            </div>
        </div>
       
       {/**Desktop */}
        <div className='lg:w-2/5 w-screen px-6 flex flex-col'>
            <div className='mb-5'>
              <h1 className='text-[16px] font-bold capitalize text-[#452b1a]'>{productItem?.title}</h1>
              <h1 className='text-[16px] font-normal text-[#452b1a] mt-2'>₦{productItem?.price}</h1>
            </div>
            <h1 className='text-[14px] font-normal text-[#452b1a] my-4 leading-5'>{productItem?.desc} </h1>

            <span className='bg-[rgb(69,43,26)] opacity-25 w-full h-px mx-auto border-0 z-2'> </span>
            
            <div className='flex flex-col py-2 gap-y-1'>
              <h1 className='text-[14px] opacity-50 ps-4 '>Available Sizes:</h1>

              <div className='align-middle flex flex-row'>
                <div>
                  {productItem?.size.map((item) => (
                    <button key={item} className='text-[15px] cursor-pointer max-md:px-5 px-6 py-2 justify-between focus:border-b focus:border-[#452b1a] font-medium text-[#452b1a]'>
                      {item}
                    </button>
                  ))}
                </div>
                
                <div>
                  {unAvailableSizes(productItem?.size).map((item) => (
                    <button key={item} className='text-[15px] line-through max-md:px-5 px-6 py-2 justify-between cursor-pointer font-light text-[#DAD5D1]'>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

            </div>
            

            <span className='bg-[#452b1a] opacity-25 w-full h-px mx-auto mb-6 border-0 z-2'> </span>

            <button className='bg-[#452b1a] hover:bg-[#fff] hover:border hover:text-black text-white border-[#452b1a] py-4 w-full text-[12px] font-semibold' onClick={() => onAdd(productItem, qty)}>ADD TO CART</button>
            <p className='text-[12px] text-start font-normal text-[#452b1a] my-1'>more payment options</p>



                                {/* Accordion */}
            <span className='bg-[#452b1a] opacity-25 w-full h-px mx-auto mt-6 border-0 z-2'> </span>
            <div className='flex flex-col py-4 mx-2 transition-all overflow-hidden duration-500 ease-in'>
              <button className='flex justify-between cursor-pointer' onClick={onExpand}>
                <div className='text-[#452b1a] font-medium text-[12px]'>DETAILS</div>
                {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expanded && <div>
                <ul className='list-disc ps-8 pt-5'>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Hand made spray bleach</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Garment dye</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Boxy fit</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Tone to Tone puff print on the chest</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>100% Cotton</li>
                </ul>
              </div>}
            </div>

            <span className='bg-[#452b1a] opacity-25 w-full h-px mx-auto mt-1 border-0 z-2'> </span>
            <div className='flex flex-col py-4 mx-2 transition-all'>
              <button className='flex justify-between cursor-pointer' onClick={onExpandSecond}>
                <div className='text-[#452b1a] font-medium text-[12px]'>SIZE GUIDE</div>
                {expandedSecond ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expandedSecond && <div>
                <ul className='list-disc ps-8 pt-5'>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Hand made spray bleach</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Garment dye</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Boxy fit</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>Tone to Tone puff print on the chest</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[14px]'>100% Cotton</li>
                </ul>
              </div>}
            </div>


            <span className='bg-[#452b1a] opacity-25 w-full h-px mx-auto mt-1 border-0 z-2'> </span>
            <div className='flex flex-col py-4 mx-2 transition-all'>
              <button className='flex justify-between cursor-pointer' onClick={onExpandThird}>
                <div className='text-[#452b1a] font-medium text-[12px]'>SHIPPING</div>
                {expandedThird ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expandedThird && <div>
                <p className='text-[14px] pt-2 ps-3 text-[#452b1a] font-normal'>Due to logistical improvements, orders may take longer than usual.
                  <br /> <br />
                  - National orders 7-8 working days, approximately.
                  <br /> <br />
                  - International orders 12-14 working days approximately.
                  <br /> <br />
                  If you have any issues with your order email us at help@nude-project.com and we will be there to help you. Please note, orders placed after 2PM (CET) will be shipped the following business day.    </p>
              </div>}
            </div>
            <span className='bg-[#452b1a] opacity-25 w-full h-px mx-auto mt-1 border-0 z-2'> </span>
          
            </div>  
      </div>

      <div className='mt-20'> <Gallery width='289' height='441' /></div>
      
    </div>
  )
}

export default ProductPage


"use client"

import { useEffect, useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
import { easeInOut, motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4 } from 'react-icons/hi'
import { SlBasket } from 'react-icons/sl'
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import Cart from './ Cart'
import { useStateContext } from '@context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities, handleSearchToggle } = useStateContext();

    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const [toggleClothing, setToggleClothing] = useState(false)
    const [toggleCollections, setToggleCollections] = useState(false)
    const [toggleSupport, setToggleSupport] = useState(false)
    

    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setDropdown((prev) => !prev)
    }
    const handleToggle = (setstate) => {
        setstate((prev) => !prev)
    }

  return (

    <nav className='flex flex-col bg-white relative'>
        <div className='xl:flex hidden'>
            <div className='grid grid-cols-3 w-screen'>
                <div className="flex justify-start text-center align-middle ms-6 mt-2 gap-x-6">
                    <ul className='flex flex-row space-x-8'>
                        <li className='top-0 group'>
                            <Link href='/' className=' group-hover:bg-white text-[#452b1a] focus:font-extrabold hover:font-extrabold relative button font-semibold text-[11px]'>SHOP</Link>

                            <div className='object group-hover:flex group-hover:bg-white hidden gap-x-7 absolute pt-5 pb-4 px-4 justify-start items-start w-full h-fit bg-white z-50 right-0 left-0 flex-row'>
                                <div className="flex flex-col justify-start p-4">
                                    <Link href='/collections/new-arrivals' className='font-bold text-[11px]/[20px] '>NEW ARRIVALS</Link>
                                    <Link href='/collections/bestsellers' className='font-bold text-[11px]/[20px]'>BESTSELLERS</Link>
                                    <Link href='/collections/all-products' className='font-bold text-[11px]/[20px]'>ALL PRODUCTS</Link>
                                    <Link href='/collections/bestsellers' className='font-bold text-[11px]/[20px]'>CLASSICS</Link>
                                    <Link href='/collections/womens' className='font-bold text-[11px]/[20px]'>WOMEN</Link>
                                </div>
                                <div className='flex flex-col justify-start p-4'>
                                    <Link href='/collections/all-products' className='font-medium text-[11px]/[20px]'>ALL</Link>
                                    <Link href='/collections/all-products/t-shirt' className='font-medium text-[11px]/[20px]'>T-SHIRT</Link>
                                    <Link href='/collections/all-products/hoodies' className='font-medium text-[11px]/[20px]'>HOODIES</Link>
                                    <Link href='/collections/all-products/shirts-and-polos' className='font-medium text-[11px]/[20px]'>SHIRTS & POLOS</Link>
                                    <Link href='/collections/all-products/outerwear' className='font-medium text-[11px]/[20px]'>OUTERWEAR</Link>
                                    <Link href='/collections/all-products/knitwear' className='font-bold text-[11px]/[20px] '>KNITWEAR</Link>
                                </div>
                                <div className='flex flex-col justify-start p-4'>
                                    <Link href='/collections/all-products' className='font-medium text-[11px]/[20px]'>ALL</Link>
                                    <Link href='/collections/all-products/accessories' className='font-bold text-[11px]/[20px] '>ACCESSORIES</Link>
                                    <Link href='/collections/all-products/caps' className='font-medium text-[11px]/[20px]'>CAPS</Link>
                                    <Link href='/collections/all-products/headwarmer' className='font-medium text-[11px]/[20px]'>HEAD WARMER</Link>
                                    <Link href='/collections/all-products/swimwear' className='font-medium text-[11px]/[20px]'>SWIMWEAR</Link>
                                </div>
                            </div>

                        </li>


                        <li className='top-0 group'>
                            <Link href='/collections' className=' group-hover:bg-white text-[#452b1a] focus:font-extrabold hover:font-extrabold relative button font-semibold text-[11px]'>COLLECTIONS</Link>

                            <div className='object group-hover:block group-hover:bg-white hidden absolute pt-2 pb-12 w-full h-fit bg-white z-50 right-0 left-0 flex-col'>
                                <div className="flex flex-row gap-x-4 p-4">
                                    <Link href='/collections/teens' className="flex flex-col"><Image src='/collection-image1.webp' alt='collection-image' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-extrabold'>TEENS</p> </Link>
                                    <Link href='/collections/mens' className="flex flex-col"><Image src='/collection image-2.webp' alt='collection-image' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-extrabold'>MENS</p> </Link>
                                    <Link href='/collections/womens' className="flex flex-col"><Image src='/collection image-3.webp' alt='collection-image' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-extrabold'>WOMENS</p> </Link>
                                    <Link href='/collections/bestsellers' className="flex flex-col"><Image src='/collection-image1.webp' alt='collection-image' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-extrabold'>BESTSELLERS</p> </Link>
                                    <Link href='/collections/all-products' className="flex flex-col"><Image src='/collection image-4.webp' alt='collection-image' width={250} height={350} className='object-contain'/> <p className='text-[12px] pt-3 font-extrabold'>ALL PRODUCTS</p> </Link>
                                </div>
                                <div className='justify-center mt-6'>
                                    <button className='text-xs bg-[#452b1a] p-1 text-white w-20'>VIEW ALL</button>
                                </div>
                            </div>

                        </li>

                        <li><Link href='/about' className='font-semibold text-[#452b1a] focus:font-extrabold hover:font-extrabold text-[11px]'>ABOUT</Link></li>
                        <li><Link href='/' className='font-semibold text-[#452b1a] focus:font-extrabold hover:font-extrabold text-[11px]'>STORES</Link></li>
                    </ul>
                </div>

                <div className="m-2">
                    <h1 className='text-[18px] font-bold flex text-center justify-center'> 
                        <Link href='/'> 
                            <Image src='/website-logo.png' width={106} height={10} alt='logo' className='object-fit items-center mx-auto'/>
                        </Link>
                    </h1>
                </div>

                <div className="flex text-center justify-end align-middle mt-4 me-6 gap-x-8">
                    <div className="font-semibold focus:font-extrabold hover:font-extrabold text-[11px]">NGN </div>

                    <button type='button' onClick={handleClick} className="font-semibold focus:font-extrabold hover:font-extrabold flex flex-row justify-center gap-x-1 text-[11px]">
                        ENG <AiOutlineDown className='mt-0.5'/> 
                            { dropdown &&
                        <div class="absolute right-35 z-10 mt-7 w-26 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="hover:bg-grey-600 py-1" role="none">
                                <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">ESP</Link>
                                <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">GER</Link>
                                <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">POR</Link>
                                <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">YOR</Link>
                            </div>
                        </div>
                        }
                    </button>

                    <button onClick={handleSearchToggle} className="font-semibold focus:font-extrabold hover:font-extrabold flex align-middle text-[11px]">SEARCH </button >
                        
                    <div className="font-semibold text-[11px]">
                        <button className='-mt-1' onClick={() => setShowCart(true)}>
                            <SlBasket className='me-2' style={{fontSize:'20px'}}/>
                            <span className="absolute right-4 top-4 text-[#452b1a] text-[10px] ms-1 w-5 h-5 rounded">({totalQuantities})</span>
                        </button> 
                    </div>
                </div>
            
                {showCart && <Cart />}
            </div>
            
        </div>
        <div>
            <span className='bg-[#452b1a] w-full h-px mx-auto border-0 z-20 opacity-70 absolute bottom-0 right-0 '> </span>
        </div>


        {/* Tab and Mobile Navigation */}
        <div className="xl:hidden flex">
            <div className='grid grid-cols-3 w-full justify-between mx-2'>
                <div className='mx-2 my-0'>
                    <button onClick={() => setToggle(!toggle)} className='m-0 p-0'>
                        <Hamburger 
                            toggled={isOpen} 
                            toggle={setOpen} 
                            size={20}
                            duration={0.4}
                            color='#452b1a'
                            easing="ease-in"       
                            />
                    </button>
                    {/**<HiMenuAlt4 style={{fontSize:'25px'}} onClick={() => setToggle(!toggle)} className='cursor-pointer font-light'/>*/}

                    <AnimatePresence>
                    {toggle && (
                        <motion.div 
                            key='modal'
                            initial={{left: '-100vw'}}
                            animate={{left: '0'}}
                            exit={{left: '-100vw'}}
                            transition={{duration: 0.75, ease: easeInOut }}
                            className='absolute right-0 w-screen overflow-hidden z-50 ps-4 rounded-lg bg-white flex flex-col gap-2 justify-start items-start'>
                            <div className="flex flex-start mt-12 ">
                                <ul className='flex flex-col text-[#452b1a] flex-start'>
                                    <li><Link href='/collections/new-arrivals' className='font-bold text-[13px]/[20px] leading-8 '>NEW ARRIVALS</Link></li>
                                    <li><Link href='/collections/bestsellers' className='font-bold text-[13px]/[20px] leading-8'>BESTSELLERS</Link></li>
                                    <li>
                                        <button onClick={() => handleToggle(setToggleClothing)} className={`${toggleClothing && 'underline underline-[#452b1a] underline-offset-2'} font-bold flex text-[13px]/[20px] leading-8`}>
                                        CLOTHING 
                                        <span className='m-auto ps-1'>{toggleClothing ? <HiMinusSm size={16} /> : <HiPlusSm size={16}/>}</span>
                                        </button>
                                    </li>
                                    {toggleClothing && (
                                        <div className='flex flex-col gap-y-2 px-6 my-3'>
                                          <Link href='/collections/all-products' className='text-[13px] text-[#452b1a] font-medium'>ALL</Link>  
                                          <Link href='/collections/all-products/t-shirt' className='text-[13px] text-[#452b1a] font-medium'>T-SHIRT</Link>  
                                          <Link href='/collections/all-products/hoodies' className='text-[13px] text-[#452b1a] font-medium'>HOODIES</Link>  
                                          <Link href='/collections/all-products/shirts-and-polos' className='text-[13px] text-[#452b1a] font-medium'>SHIRTS & POLOS</Link>  
                                          <Link href='/collections/all-products/outerwear' className='text-[13px] text-[#452b1a] font-medium'>OUTERWEAR</Link>  
                                        </div>
                                    )}

                                    <li><Link href='/collections/all-products/accessories' className='font-bold text-[13px]/[20px] leading-8'>ACCESSORIES</Link></li>

                                    <li><button onClick={() => handleToggle(setToggleCollections)} className={`${toggleCollections && 'underline underline-[#452b1a] underline-offset-2'} font-bold flex text-[13px]/[20px] leading-8`}>
                                        COLLECTIONS 
                                        <span className='m-auto ps-1'>{toggleCollections ? <HiMinusSm size={16} /> : <HiPlusSm size={16}/>}</span>    
                                        </button>
                                    </li>
                                    {toggleCollections && (
                                        <div className='flex flex-col gap-y-2 px-6 my-3'>
                                          <Link href='/collections/mens' className='text-[13px] text-[#452b1a] font-medium'>MENS</Link>  
                                          <Link href='/collections/womens' className='text-[13px] text-[#452b1a] font-medium'>WOMENS</Link>  
                                          <Link href='/collections/teens' className='text-[13px] text-[#452b1a] font-medium'>TEENS</Link>  
                                          <Link href='/collections/kids' className='text-[13px] text-[#452b1a] font-medium'>KIDS</Link>  
                                        </div>
                                    )}
                                    <li><Link href='/collections/all-products' className='font-bold text-[13px]/[20px] leading-8'>ALL PRODUCTS</Link></li>
                                    <li><Link href='/collections/new-arrivals' className='font-bold text-[13px]/[20px] leading-8'>CLASSICS</Link></li>
                                    <li><Link href='/collections/womens' className='font-bold text-[13px]/[20px] leading-8'>WOMAN</Link></li>
                                </ul>
                            </div>

                            <div className="flex flex-col flex-start py-8">
                                <ul>
                                    <li><Link href='/' className='font-bold text-[13px]/[20px] leading-8'>GIFT CARD</Link></li>
                                    <li><Link href='/about' className='font-bold text-[13px]/[20px] leading-8'>ABOUT US</Link></li>
                                    <li>
                                        <button onClick={() => handleToggle(setToggleSupport)} className={`${toggleSupport && 'underline underline-[#452b1a] underline-offset-2'} font-bold flex text-[13px]/[20px] leading-8`}>
                                            SUPPORT 
                                            <span className='m-auto ps-1'>{toggleSupport ? <HiMinusSm size={16} /> : <HiPlusSm size={16}/>}</span>   
                                        </button>
                                    </li>
                                    {toggleSupport && (
                                        <div className='flex flex-col gap-y-2 px-6 my-3'>
                                          <Link href='/' className='text-[13px] text-[#452b1a] font-medium'>HELP</Link>  
                                          <Link href='/' className='text-[13px] text-[#452b1a] font-medium'>RETURN</Link>  
                                          <Link href='/' className='text-[13px] text-[#452b1a] font-medium'>FAQ</Link>   
                                        </div>
                                    )}

                                    <li><Link href='/about' className='font-bold text-[13px]/[20px] leading-8'>ABOUT</Link></li>
                                </ul>
                                <div className='flex flex-row gap-x-6 py-16 ps-2'>
                                    <button type='button' onClick={handleClick} className="font-normal flex flex-row justify-center gap-x-1 text-[13px]">
                                        ENG <AiOutlineDown className='m-auto'/> 
                                        { dropdown &&
                                        <div class="absolute right-35 z-10 mt-7 w-26 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div class="hover:bg-grey-600 py-1" role="none">
                                            <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">ESP</Link>
                                            <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">GER</Link>
                                            <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">POR</Link>
                                            <Link href="#" class="text-gray-700 block px-4 hover:bg-gray-100 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">YOR</Link>
                                            </div>
                                        </div>
                                    }
                                    </button>

                                    <h1 className='font-normal text-[13px]'>NGN(₦)</h1>
                                </div>
                            </div>
                            
                        </motion.div> 
                    )}
                    </AnimatePresence>   
                
                </div>

                                    {/** LOGO */}
                <div className="mx-2 m-auto">
                    <Link href='/'>
                        <Image src='/website-logo.png' width={86} height={6} alt='logo' className='object-contain items-center mx-auto'/>
                    </Link>                    
                </div>
                
                <div className="flex flex-row text-center gap-x-5 justify-end align-middle me-6 my-1">
                    <button 
                        onClick={handleSearchToggle}
                        className='font-medium text-xs -mt-1.5'>
                            <AiOutlineSearch className='text-[23px]' />
                    </button>
                    <button style={{marginBottom: "8px"}} onClick={() => setShowCart(true)}>
                        <SlBasket className='' style={{fontSize:'20px'}}/>
                        <span className="absolute right-3 top-[18px] text-[#452b1a] text-[10px] ms-1 w-5 h-5 rounded">({totalQuantities})</span>
                    </button>
                </div>
            </div>
            {showCart && <Cart />}
        </div>
    </nav>
  )
}

export default Navbar
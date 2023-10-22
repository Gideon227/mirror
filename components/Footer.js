"use client"
import { useState } from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import Link from 'next/link'
import Image from 'next/image'
import { CiCreditCard1, CiGift } from 'react-icons/ci'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiOutlineMail, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTiktok, FaFacebookMessenger } from 'react-icons/fa'

const Footer = () => {

  const [expandFirstAccordion, setExpandFirstAccordion] = useState(false)
  const [expandSecondAccordion, setExpandSecondAccordion] = useState(false)
  const [expandThirdAccordion, setExpandThirdAccordion] = useState(false)

  const onExpand = () => {
    setExpandFirstAccordion((prev) => !prev)
  }
  const onExpandSecond = () => {
    setExpandSecondAccordion((prev) => !prev)
  }
  const onExpandThird = () => {
    setExpandThirdAccordion((prev) => !prev)
  }

  return (
    
    <div className="pt-10 z-10 mt-2">
      <div className='py-5 flex items-center justify-center'>
        <span className='text-[#452b1a] max-md:hidden text-[14px] justify-center font-medium'>Our customers say</span>
        <div className='px-5 flex justify-between space-x-0.5'> 
          <h1 className='text-[#452b1a] max-md:hidden px-2 font-semibold text-[18px]'>Great</h1>        
          <div className='bg-[#73CF11] p-1'> <VscStarFull className='text-white text-lg'/> </div>
          <div className='bg-[#73CF11] p-1'> <VscStarFull className='text-white text-lg'/> </div>
          <div className='bg-[#73CF11] p-1'> <VscStarFull className='text-white text-lg'/> </div>
          <div className='bg-[#73CF11] p-1'> <VscStarFull className='text-white text-lg'/> </div>
          <div className='bg-[#DCDCE6] p-1'> <VscStarFull className='text-white text-lg'/> </div>
        </div>
        <p className='text-[#452b1a] max-md:hidden text-[14px] font-medium'>4.0 out of 5 based on <span className='font-semibold'>662 reviews</span></p>
        <div className='flex ps-4'>
          <VscStarFull className='text-[#2AB67A] justify-center text-[24px] px-1' />
          <p className='text-[#452b1a] text-[16px] font-semibold'>Trustpilot</p>
        </div>

      </div>
      <hr  className='bg-[#452b1a] h-0.5 opacity-50'/>

      <div className="grid grid-cols-2 max-md:flex max-md:flex-col md:gap-x-10 max-md:mx-2 mx-48">
        <div className='flex flex-col items-center max-md:pt-9 md:py-9'>
          <CiGift className='h-10 w-10'/>
          <h1 className='text-xs font-bold text-[#452b1a] py-3'>EMBLEMATIC PACKAGING</h1>
          <p className='font-normal text-xs text-[#452b1a]'>Includes Close Friends access, stickers and many more.</p>
        </div>
        <div className='flex flex-col items-center py-9'>
          <CiCreditCard1 className='h-10 w-10'/>
          <h1 className='text-xs font-bold text-[#452b1a] py-3'>SECURE PAYMENT</h1>
          <p className='font-normal text-xs text-[#452b1a] text-center'>Paypal, Apple-Pay, Klarna, Bitcoin and all major credit and debit <br /> cards accepted</p>
        </div>
      </div>

      <hr  className='bg-[#452b1a] h-0.5 opacity-50'/>

      {/**MAIN FOOTER */}

      <footer className='max-md:hidden flex flex-row mx-20 max-lg:mx-5 my-20 space-x-12 justify-between align-middle'>
        <div className='gap-y-8 justify-start -mt-6'>
          <Link href='/'><Image src='/website-logo.png' width={85} height={6} alt='Logo' className='object-contain'/></Link>
          <button 
            onClick={() => window.location = 'mailto:golaiya123@gmail.com'}>
              <p className='text-xs font-normal'>help@mirror-store.com</p>
          </button>
          <div className='flex space-x-6 my-2'>
            <Link href='/'><AiOutlineInstagram className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><AiOutlineTwitter className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><AiFillYoutube className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><FaTiktok className='text-[#452b1a] text-[14px]'/></Link>
            <Link href='/'><FaFacebookMessenger className='text-[#452b1a] text-[14px]'/></Link>
          </div>
        </div>

        <div className='gap-y-6 justify-start'>
          <h1 className='text-[12px] font-extrabold'>POLICIES</h1>
          <div className='gap-y-2 flex flex-col mt-4'>
            <Link href='/about-us' className='text-[11px] font-medium'>ABOUT US</Link>
            <Link href='/' className='text-[11px] font-medium'>PRIVACY POLICIES</Link>
            <Link href='/' className='text-[11px] font-medium'>RETURN POLICIES</Link>
            <Link href='/' className='text-[11px] font-medium'>FAQ's</Link>
          </div>
        </div>

        <div className='gap-y-6 justify-start'>
          <h1 className='text-[12px] font-extrabold'>QUICK LINKS</h1>
          <div className='gap-y-2 flex flex-col mt-4'>
            <Link href='/about-us' className='text-[11px] font-medium'>SEARCH</Link>
            <Link href='/' className='text-[11px] font-medium'>LEGAL NOTICE</Link>
            <Link href='/' className='text-[11px] font-medium'>TRACK ORDER</Link>
            <Link href='/' className='text-[11px] font-medium'>TERMS OF SERVICE</Link>
          </div>
        </div>

        <div className='gap-y-6 justify-start'>
          <h1 className='text-[12px] font-extrabold'>SUPPORT</h1>
          <div className='gap-y-2 flex flex-col mt-4'>
            <Link href='/about-us' className='text-[11px] font-medium'>RETURNS</Link>
            <Link href='/' className='text-[11px] font-medium'>FAQ</Link>
            <Link href='/' className='text-[11px] font-medium'>CONTACT</Link>
          </div>
        </div>

        <div className='gap-y-6 justify-start'>
          <h1 className='text-[12px] font-extrabold'>JOIN OUR NEWSLETTER</h1>
          <p className='text-[11px] mt-4 font-medium leading-6'>SUBSCRIBE TO GET SPECIAL OFFERS, FREE GIVEAWAYS <br /> AND ONCE-IN-A-LIFETIME DEALS</p>
          <div className='flex flex-col mt-2'>
            <div className='flex mt-2 align-middle underline-[#452b1a]'>
              <input 
                type='email'
                placeholder='Enter your email'
                className='placeholder:text-[11px] placeholder:text-[#452b1a] pe-4 outline-none text-[11px] text-[#452b1a]'
              />
              <AiOutlineMail className='mt-1.5'/>
            </div>
            <hr className='bg-[#452b1a] w-[180px] -ms-1.5 h-0.5 mt-1 opacity-75'/>
          </div>
        </div>

      </footer>

        {/**MOBILE FOOTER */}
      <footer className='md:hidden pb-4'>
        <div className='gap-y-3 mx-12 flex flex-col items-center justify-start py-10'>
          <Link href='/'><Image src='/website-logo.png' width={85} height={6} alt='Logo' className='object-contain'/></Link>
          <button 
            onClick={() => window.location = 'mailto:golaiya123@gmail.com'}>
              <p className='text-xs font-normal'>help@mirror-store.com</p>
          </button>
          <div className='flex space-x-6 my-2'>
            <Link href='/'><AiOutlineInstagram className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><AiOutlineTwitter className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><AiFillYoutube className='text-[#452b1a] text-[16px]'/></Link>
            <Link href='/'><FaTiktok className='text-[#452b1a] text-[14px]'/></Link>
            <Link href='/'><FaFacebookMessenger className='text-[#452b1a] text-[14px]'/></Link>
          </div>
        </div>


        {/** ACCORDION */}

        <span className='bg-[#452b1a] w-screen block opacity-50 h-px border-0 z-2'> </span>
            <div className='flex flex-col py-3 mx-4 transition-all overflow-hidden duration-500 ease-in'>
              <button className='flex justify-between cursor-pointer' onClick={onExpand}>
                <div className='text-[#452b1a] font-semibold text-[11px]'>POLICIES</div>
                {expandFirstAccordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expandFirstAccordion && (
                <div>
                  <ul className='ps-4 py-4'>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>ABOUT US</li>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>PRIVACY POLICIES</li>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>RETURN POLICIES</li>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>FAQ'S</li>
                  </ul>
                </div>)}
            </div>

            <span className='bg-[#452b1a] w-screen block opacity-50 h-px mx-auto mt-1 border-0 z-2'> </span>
            <div className='flex flex-col py-3 mx-4 transition-all'>
              <button className='flex justify-between cursor-pointer' onClick={onExpandSecond}>
                <div className='text-[#452b1a] font-semibold text-[11px]'>QUICK LINKS</div>
                {expandSecondAccordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expandSecondAccordion && <div>
                <ul className='ps-4 py-4'>
                  <li className='text-[#452b1a] py-1 font-normal text-[11px]'>SEARCH</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[11px]'>LEGAL NOTICE</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[11px]'>TRACK ORDER</li>
                  <li className='text-[#452b1a] py-1 font-normal text-[11px]'>TERMS OF SERVICE</li>
                </ul>
              </div>}
            </div>


            <span className='bg-[#452b1a] w-screen block opacity-50 h-px mx-auto mt-1 border-0 z-2'> </span>
            <div className='flex flex-col py-4 mx-4 transition-all'>
              <button className='flex justify-between cursor-pointer' onClick={onExpandThird}>
                <div className='text-[#452b1a] font-semibold text-[11px]'>SUPPORT</div>
                {expandThirdAccordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {expandThirdAccordion && 
                <div>
                  <ul className='ps-4 py-4'>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>RETURNS</li>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>FAQ</li>
                    <li className='text-[#452b1a] py-1 font-normal text-[11px]'>CONTACT</li>
                  </ul>
                </div>}
            </div>
            <span className='bg-[#452b1a] w-screen block opacity-50 h-px mx-auto border-0 z-2'> </span>

            <div className='py-5 ms-6 gap-y-3 mt-8 flex flex-col justify-start'>
                <h1 className='text-[13px] font-bold'>JOIN OUR NEWSLETTER</h1>
                <p className='text-[11px] font-medium whitespace-nowrap leading-5'>SUBSCRIBE TO GET SPECIAL OFFERS, FREE GIVEAWAYS <br /> AND ONCE-IN-A-LIFETIME DEALS</p>
                <div className='flex mt-2 align-middle w-4/5 underline-[#452b1a]'>
                  <input 
                    type='email'
                    placeholder='Email address'
                    className='placeholder:text-[11px] placeholder:text-[#452b1a] ps-2 pt-0.5 border border-[#452b1a] w-full outline-[#452b1a] text-[11px] text-[#452b1a]'
                  />
                  <button className='bg-[#452b1a] px-4 py-1.5 text-white font-semibold text-[11px] ms-0.5'>JOIN</button>
                </div>
              </div>     
      </footer>

      <div className='bg-[#452b1a] justify-center text-center'>
          <h3 className='py-4 text-white text-[12px] font-light'>© MIRROR</h3>
      </div>

  </div>
  )
}

export default Footer
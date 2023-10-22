'use client'
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

import Image from "next/image"
import Link from "next/link"
import CheckoutRightbar from "@components/CheckoutRightbar"
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia'

import { useStateContext } from '@context/StateContext';

const page = () => {
  const { cartFromLocaleStorage, totalPriceFromLocalStorage } = useStateContext()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    phone: ''
});

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm()
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
      setFormData({ ...formData, country: value })
    }

    const handleInformation = () => {
      // e.preventDefault()
      setSubmitting(true)
  
      try {
        typeof window !== "undefined" && localStorage.setItem("userInformation", JSON.stringify(formData));
      }
      catch (error) {
        console.log(error)  
      } finally{
        setSubmitting(false)
        router.push('/checkout/shipping')
      }
    }
  
  const checkoutPage =  cartFromLocaleStorage.length > 0 ? (
    <div className='grid grid-cols-5 max-lg:flex max-lg:flex-col max-lg:gap-6'>
    <div className='col-span-3 py-2 px-24 max-sm:px-6 space-y-5'>
      <Link href='/' className="flex justify-center items-center mx-3">
        <Image alt="logo" src='/website-logo.png' width={100} height={10} className="pt-16 pb-2"/>
      </Link>           
      <div className='flex justify-center items-center '>
        <Link href='/cart' className="text-[14px] flex text-[#452b1a] font-normal gap-2 focus:font-extrabold">Cart <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
        <Link href='/checkout' className="text-[14px] flex text-[#452b1a] font-extrabold gap-2 active:font-extrabold focus:font-extrabold">Information <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
        <Link href='/checkout/shipping' className="text-[14px] flex text-[#452b1a] font-normal gap-2 active:font-extrabold focus:font-extrabold">Shipping <LiaGreaterThanSolid size={18} className="my-auto pe-2" /> </Link>
        <Link href='/checkout/payment' className="text-[14px] flex text-[#452b1a] font-normal gap-2 active:font-extrabold focus:font-extrabold">Payment</Link>
      </div>

      <div className='divider'>OR</div>

      {/** INFORMATION FORM */}

      <div>
        <h1 className="font-medium text-[18px] mb-2">Contact</h1>
        <label className="relative">
          <input 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className={`${formData.email && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`}
          />
          <span className={`${formData.email && 'input-text'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-0 mx-4 transition duration-200`}>Email</span>
        </label>
      </div>

      <div className="pt-6 space-y-4 flex flex-col">
        <h1 className="text-[18px] mb-2">Shipping address</h1>

        {/* Countries Select input */}
        <Select 
          options={options} 
          value={formData.country} 
          onChange={changeHandler}
          placeholder='Select Country'
          className="text-[14px] focus:outline-[#545454]"
        />
        {console.log(formData)}

        <div className="flex w-full focus:outline-[#545454] space-x-3 transition duration-200">
          <label className="relative w-1/2">
            <input 
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required 
              type="text" 
              className={`${formData.firstName && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`}
              {...register("singleErrorInput", { required: "This is required." })}
              />
              <ErrorMessage errors={errors} name="singleErrorInput" />
              <ErrorMessage
                errors={errors}
                name="singleErrorInput"
                render={({ message }) => <p>{message}</p>}
              />
            <span className={`${formData.firstName && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>First Name</span>
          </label>

          <label className="relative w-1/2">
            <input 
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required 
              type="text"  
              className={`${formData.lastName && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`} />
            <span className={`${formData.lastName && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>Last Name</span>
          </label>
        </div>

        <label className="relative">
          <input 
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
            className={`${formData.address && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`}
          />
          <span className={`${formData.address && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>Address</span>
        </label>

        <label className="relative">
          <input 
            type="text"
            value={formData.apartment}
            onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
            className={`${formData.apartment && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`}
          />
          <span className={`${formData.apartment && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>Apartment, suite, etc. (optional)</span>
        </label>

        <div className="flex w-full focus:outline-[#545454] space-x-3">
          <label className="relative">
            <input 
              required 
              type="text"  
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={`${formData.city && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`} />
          
            <span className={`${formData.city && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>City</span>
          </label>


          <label className="relative">
            <input 
              required 
              type="text"  
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value.toUpperCase() })}
              className={`${formData.state && 'pt-4'} uppercase rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`} />
          
            <span className={`${formData.state && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>State</span>
          </label>
          
          <label className="relative">
            <input 
              required 
              type="text"  
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              className={`${formData.postalCode && 'pt-4'} rounded-md uppercase text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`} />
          
            <span className={`${formData.postalCode && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>Postal code(optional)</span>
          </label>

        </div>

        <label className="relative">
          <input 
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`${formData.phone && 'pt-4'} rounded-md text-[14px] font-normal text-[#333333] w-full focus:outline-[#545454] focus:outline-2 transition duration-200 outline outline-1 outline-[#bbbbbb] py-3 px-4 me-6`}
          />
          <span className={`${formData.phone && 'input-name'} text-[14px] text-[#737373] font-thin text-opacity-80 absolute left-0 top-3 mx-4 transition duration-200`}>Phone</span>
        </label>

        <label className="flex space-x-2 cursor-pointer">
          <input 
            type="checkbox" 
            name="checkout" 
            value="1" 
            className="border-[#d9d9d9] border bg-white"
          />
          <p className="text-[15px] font-normal">Text me with news and offers</p>
        </label>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex space-x-1.5">
          <LiaLessThanSolid size={14} className="my-auto "/>
          <Link href='/cart' className="text-[15px] font-normal my-auto">Return to cart</Link>
        </div>

        <button 
          onClick={handleInformation} 
          disabled={submitting}
          className="p-4 font-normal text-[15px] text-white bg-[#452b1a] rounded-md">
            {submitting ? "Loading..." : "Continue to shipping"}
        </button>
      </div>

    </div>

    {/** Right Side */}
    <CheckoutRightbar shipping='Calculated in the next step'/>    
</div>


    ): (
      <div className="absolute top-1/2 left-1/2 text-center">
        <h1 className="text-[18px] ">
          No product is in the cart
        </h1>
      </div>
    )
  return checkoutPage;
}

export default page
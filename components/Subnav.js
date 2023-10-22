"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "@context/StateContext";
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import ProductCard from "./ProductCard";

const Subnav = () => {
    const { toggleSearch, handleSearchToggle, allProducts } = useStateContext()
    const [index, setIndex] = useState(false)
    const [searchedProducts, setSearchedProducts] = useState([])
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
  
    useEffect(() => {         
        setInterval(() =>  {
            setIndex((index) => !index)
        }, 4000)

    }, [])

    const filterProducts = (searchtext) => {
      /*return allProducts.filter((item) => {
        item.title.includes(searchtext) ||
        item.category.includes(searchtext) ||
        item.collection.includes(searchtext) 
      })*/


      const regex = new RegExp(searchtext, "i"); 
      return allProducts.filter((item) => 
        regex.test(item.category) ||
        regex.test(item.title) 
      ) 
    }

    const handleSearchChange = (e) => {
      clearTimeout(searchTimeout);
      setSearchText(e.target.value)

      setSearchTimeout(
        setTimeout(() => {
          const searchResult = filterProducts(e.target.value);
          setSearchedProducts(searchResult);
        }, 500)
      );
    }


    
  return (         
    <div className="flex flex-col ">
      {/** MOBILE CATEGORY */}
      <div className="flex flex-col md:hidden">        
        <div className="no-scrollbar mx-2 overflow-x-scroll">
          <div className="gallery flex flex-row justify-between align-middle px-1 no-scrollbar space-x-7 py-1 w-full">
            <Link href='/collections/new-arrivals' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">NEW IN</Link>
            {/**TODO */}
            <Link href='/collections/new-arrivals' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">BESTSELLERS</Link>
            <Link href='/collections/all-products/t-shirt' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">T-SHIRT</Link>
            <Link href='/collections/mens' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">MENS</Link>
            <Link href='/collections/womens' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">WOMENS</Link>
            <Link href='/collections/teens' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">TEENS</Link>
            <Link href='/collections/kids' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">KIDS</Link>
            <Link href='/collections/all-products/hoodies' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">HOODIES & SWEATERS</Link>
            <Link href='/collections/all-products/shirts-and-polos' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">SHIRTS & POLOS</Link>
            <Link href='/about' className="text-[#452b1a] font-medium text-[13px] pt-0.5 capitalize">ABOUT US</Link>
          </div>
        </div>

        <span className='bg-[#452b1a] w-full h-px p-0 m-0 mx-auto border-0 z-20'> </span>
      </div>

      <div className='bg-[#452b1a] justify-center relative text-center'>
          <h3 className='p-2 text-white text-xs font-light'>{index ? ("FREE SHIPPING: NATIONAL OVER 100€ | INTERNATIONAL OVER 200€") : ("DUE TO HIGH DEMAND ORDERS CAN SUFFER DELAYS")}</h3>
      </div>

          {/** TODO */}
      {toggleSearch && ( 
            <div className="w-screen flex flex-row justify-between bg-white relative py-2 text-[13px] font-normal text-[#452b1a]">
              <AiOutlineSearch size={37} className="absolute -mt-1.5 text-[#452b1a] ps-4 opacity-80"/>
              
              <input 
                type="text" 
                onChange={handleSearchChange}
                value={searchText}
                className=" ps-14 pe-5 placeholder-[#452b1a] outline-none focus:outline-none w-full" 
                placeholder="SEARCH..." />

              <RxCross2 onClick={handleSearchToggle} size={23} className="me-4 text-[#452b1a] opacity-80 cursor-pointer"/>
            </div>         
            )}
          
            
          {searchText && toggleSearch && (
            
            <div className="flex flex-col max-md:p-2 p-4">
              <div className="flex flex-row justify-between py-2">
                <h1 className="font-semibold text-[#452b1a] justify-start text-[12px]">{searchedProducts.length} RESULTS</h1>
                {searchedProducts && (<button className='font-semibold text-[#452b1a] text-[12px]'>VIEW ALL</button>)}
                
              </div>

              <span className="bg-[#452b1a] h-px w-full opacity-75 my-1"></span>

             {searchedProducts ? (
              <div className="grid xl:grid-cols-4 py-4 grid-cols-2 gap-4">
                {searchedProducts.map((item) => (
                  <ProductCard key={item._id} product={item} />
                ))}              
              </div>) : (
                <p className='font-semibold text-center text-[#452b1a] text-[200px]'>No results could be found</p>
              )} 
            </div>
            
          )} 
          
    </div>
  )
}

export default Subnav
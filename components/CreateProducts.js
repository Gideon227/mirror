'use client'
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Select from 'react-select';

const CreateProducts = ({ setShowCreateProduct }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCollection, setSelectedCollection] = useState(null)
    const [selectedSizes, setSelectedSizes] = useState(null)


    const categoryOptions = [
        { value: 'accessories', label: 'Accessories' },
        { value: 'caps', label: 'Caps' },
        { value: 'headwarmer', label: 'Headwarmer' },
        { value: 'hoodie', label: 'Hoodies' },
        { value: 'knitwear', label: 'Knitwear' },
        { value: 'outerwear', label: 'Outerwear' },
        { value: 'shirt-and-polo', label: 'Shirts & polo' },
        { value: 'swimwear', label: 'Swimwear' },
        { value: 't-shirt', label: 'T-shirt' },
    ]

    const collectionOptions = [
        { value: 'mens', label: 'Mens' },
        { value: 'womens', label: 'Womens' },
        { value: 'teens', label: 'Teens' },
        { value: 'kids', label: 'Kids' },
    ]
    const sizeOptions = [
        { value: 'XS', label: 'XS' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' }
    ]

    const handleSubmit = () => {
        
    }

  return (
    <div className='bg-white pb-12 overflow-y-scroll rounded-lg'>
        <button onClick={() => {setShowCreateProduct(false)}} className='py-6 relative'>
            <RxCross2 className='absolute top-3 left-4 text-gray-700' size={24}/>
        </button>
        <hr className='w-full text-gray-600 opacity-70 h-px'/>
        <div className='md:mx-20 md:my-8 my-4 mx-2 md:space-y-6 space-y-2'>
            <h1 className='text-[16px] font-semibold'>Product Details</h1>
            <hr className='w-full text-gray-600 opacity-70 h-px'/>

            <div className='flex space-x-10'>
                <form onSubmit = {handleSubmit} className='flex w-1/2 flex-col gap-y-4'>
                    <label className='space-y-2'>
                        <span className='font-medium text-[14px] text-gray-600'>
                        Product Title:
                        </span>

                        <input
                        // value={formData.title}
                        // onChange={(e) => setFormData({ ...formData, title: e.target.value.toUpperCase() })}
                        type='text'
                        placeholder='Product Title'
                        required
                        className='w-[100%] uppercase flex border mt-2 mb-8 px-3 py-2 text-sm text-gray-500 outline-0'
                        />  
                    </label>

                    <label className='space-y-2'>
                        <span className='font-medium text-[14px] text-gray-600'>
                        Product Description:
                        </span>

                        <textarea
                        // value={formData.title}
                        // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        type='text'
                        placeholder='Product Description'
                        rows={8}
                        cols={20}
                        required
                        className='w-[100%] flex border mt-2 mb-8 px-3 py-2 text-sm text-gray-500 outline-0'
                        />  
                    </label>

                    <label>
                        <span className='font-medium text-[14px] text-gray-600'>
                            Product Category:
                        </span>
                        <Select 
                            defaultValue={selectedCategory}
                            onChange={setSelectedCategory}
                            options={categoryOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            isSearchable
                            className='bg-blue-600'
                        />

                    </label>

                    <label>
                        <span className='font-medium text-[14px] text-gray-600'>
                            Product Collections:
                        </span>
                        <Select 
                            defaultValue={selectedCollection}
                            onChange={setSelectedCollection}
                            options={collectionOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            isSearchable
                            className='bg-blue-600'
                        />

                    </label>

                    <label>
                        <span className='font-medium text-[14px] text-gray-600'>
                            Product Sizes:
                        </span>
                        <Select 
                            defaultValue={selectedSizes}
                            onChange={setSelectedSizes}
                            options={sizeOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            isSearchable
                            className='bg-blue-600'
                        />

                    </label>

                    <label className='space-y-2'>
                        <span className='font-medium text-[14px] text-gray-600'>
                        Product price:
                        </span>

                        <input
                        // value={formData.title}
                        // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        type='number'
                        placeholder='Product Price'
                        required
                        className='w-[100%] flex border mt-2 mb-8 px-3 py-2 text-sm text-gray-500 outline-0'
                        />  
                    </label>


                </form>

                <div></div>
            </div>
        </div> 
    </div>
  )
}

export default CreateProducts
'use client'
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Select from 'react-select';
import UploadImage from './UploadImage';

const CreateProducts = ({ setShowCreateProduct }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCollection, setSelectedCollection] = useState(null)
    const [selectedSizes, setSelectedSizes] = useState(null)
    const [submitting, setSubmitting] = useState(false)
    const [images, setImages] = useState([])
    const [formData, setFormData] = useState({
        title:"",
        desc: '',
        category: [],
        collections: [],
        size: [],
        color: [],
        price: 0,
    });


    //Image upload logic
    const [previewSources, setPreviewSources] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState('');
    const [imageUrls, setImageUrls] = useState([])


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

    const handleCategoryChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSelectedCategory(selectedOptions);
        setFormData((prevData) => ({
            ...prevData,
            category: selectedValues,
        }));
    };

    const handleCollectionChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSelectedCollection(selectedOptions);
        setFormData((prevData) => ({
            ...prevData,
            collections: selectedValues,
        }));
    };

    const handleSizeChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSelectedSizes(selectedOptions);
        setFormData((prevData) => ({
            ...prevData,
            size: selectedValues,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        
        const imageData = await Promise.all(
            images.map((image) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(image);
              });
            })
          );

        try {
            const res = await fetch('/api/upload',{
                method: 'POST',
                body: JSON.stringify({
                    images: imageData
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
            }

            const { urls } = await res.json();
            setImageUrls(urls);

            console.log(imageUrls)
            console.log(urls)
            console.log(imageData)

            const response = await fetch ('/api/products/new',{
                method: 'POST',
                body: JSON.stringify({
                    title: formData.title,
                    imageURL: urls,
                    desc: formData.desc,
                    size: formData.size,
                    color: formData.color,
                    price: formData.price,
                    category: formData.category,
                    collections: formData.collections
                  }),
            })
            if(response.ok){
                console.log('New Product Added')
            }    

        } catch (error) {
            console.log(error)
        }finally{
            setSubmitting(false)
        }
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
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value.toUpperCase() })}
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
                            value={formData.desc}
                            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
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
                            onChange={handleCategoryChange}
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
                            onChange={handleCollectionChange}
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
                            onChange={handleSizeChange}
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
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            type='number'
                            placeholder='Product Price'
                            required
                            className='w-[100%] flex border mt-2 mb-8 px-3 py-2 text-sm text-gray-500 outline-0'
                        />  
                    </label>


                </form>

                <div>
                    <UploadImage 
                        uploadSuccess={uploadSuccess}
                        setUploadSuccess={setUploadSuccess}
                        setImages={setImages}
                        images={images}
                        imageUrls= {imageUrls}
                        previewSources={previewSources}
                        setPreviewSources={setPreviewSources}
                    />
                </div>
            </div>

            <div className='w-screen flex justify-center items-center mx-3 mb-5 mt-8 gap-4'>
                <button
                onClick={handleSubmit}
                disabled={submitting}
                className='bg-[#452b1a] mx-1 hover:bg-[#fff] hover:border hover:text-black text-white border-[#452b1a] py-4 w-1/2 text-[16px] font-normal'
                >
                    {submitting ? "Creating..." : "Create Product"}
                </button>
            </div>
        </div> 
    </div>
  )
}

export default CreateProducts
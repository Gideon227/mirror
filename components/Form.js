"use client"
import { useEffect } from "react"
import Image from "next/image"
import { MdCloudUpload, MdDelete } from "react-icons/md"
import { AiFillFileImage } from "react-icons/ai"

const Form = ({ formData, setFormData, submitting, showOptions, setShowOptions, onImageChange, images, imageURLS, handleSubmit, newSizes, setNewSizes, selectedValues, setSelectedValues, setSelectedCollection, selectedCollection }) => {
  
  const addSizes = (size) => {
    // Add the selected size to the newSizes array
    setNewSizes(prevSizes => [...prevSizes, size]);
  }

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      size: newSizes,
      category: selectedValues,
      collections: selectedCollection
    }));
  }, [newSizes, selectedValues, selectedCollection]);
  
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedValues((prevSelectedValues) => [...prevSelectedValues, ...selectedOptions]);
  };
  
  const handleCollectionChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCollection((prevSelectedCollection) => [...prevSelectedCollection, ...selectedOptions]);
  };
  

  return (

    <section className='w-full max-w-full flex justify-center flex-col p-5'>
      <div className="flex flex-col items-center">
        <h1 className='mt-16 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
          Create New Product 
        </h1>
        <p className='mt-5 text-xs text-gray-600 sm:text-base max-w-2xl'>
          This is where you create a new product you can add the title, image, description, and many more. Please make sure that you cross-check the information before you save your new product
        </p>
      </div>


      <form method="post" onSubmit = {handleSubmit} className='mt-8 mx-60 flex flex-col'>
           <label>
            <span className='font-semibold text-[16px] text-gray-700'>
              Product Title:
            </span>

            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value.toUpperCase() })}
              type='text'
              placeholder='Product Title'
              required
              className='w-full uppercase flex border rounded-lg mt-2 mb-8 p-3 text-sm text-gray-500 outline-0'
            />  
          </label>
          {console.log(formData)}
        
            {/**Image Upload */}
          <div className="flex flex-col p-20 justify-center items-center outline-dotted outline-[#1475cf] rounded">
            <input
              onChange={onImageChange}
              type='file'
              multiple
              accept="image/*"
              required
              className='text-sm text-gray-500 p-12 cursor-pointer'
            />  
            <div className="flex gap-x-6">
              {imageURLS.map((imageSrc) => (
                <div className="flex flex-row gap-x-4">
                  <Image src={imageSrc} key={imageSrc} alt="product-image" width={200} height={350} className="object-contain" />
                </div>
              ))}
            </div>

          </div>
          

        <div className="mt-10">
          <label>
            <span className='font-semibold text-base text-gray-700'>
              Product Description:
            </span>

            <textarea
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
              type='text'
              placeholder='Description'
              rows={8}
              cols={33}
              required
              className='w-full flex border mb-8 rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
            />  
          </label>
        </div>

          <label className="mb-10">
            <span className='font-semibold text-base text-gray-700'>
              Product Price: ₦
            </span>

            <input
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              type='number'
              placeholder='Price'
              required
              className='w-35 flex border mb-8 rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
            />  
          </label>

          <label className="mb-10">
            <span className='font-semibold text-base text-gray-700 pe-5'>
              Product Category:
            </span>
            <select 
              name="category"  
              onChange={handleSelectChange}
              multiple
              value={selectedValues}
            >
              <option value="accessories" className="py-2">Accessories</option>
              <option value="caps" className="py-2">Caps</option>
              <option value="headwarmer" className="py-2">Headwarmer</option>
              <option value="hoodie" className="py-2">Hoodies</option>
              <option value="knitwear" className="py-2">Knitwear</option>
              <option value="outerwear" className="py-2">Outerwear</option>
              <option value="shirt-and-polo" className="py-2">Shirt-and-polo</option>
              <option value="swimwear" className="py-2">Swimwear</option>
              <option value="t-shirt" className="py-2">T-shirt</option>
            </select>
          
          </label>


          <label className="mb-10">
            <span className='font-semibold text-base text-gray-700 pe-5'>
              Product Collections:
            </span>
            <select 
              name="collection"  
              onChange={handleCollectionChange}
              multiple
              value={selectedCollection}
            >
              <option value="mens" className="py-2">Mens</option>
              <option value="womens" className="py-2">Womens</option>
              <option value="teens" className="py-2">Teens</option>
              <option value="kids" className="py-2">Kids</option>
            </select>
          
          </label>
          <h1>Collection chosen: {formData.collections?.map((item) => (
            <div key={item} className="gap-x-2 flex">
              {item}
            </div>))}</h1>

            <div className="flex flex-row gap-x-4 pb-4">
              <h1 className='my-auto'>Product Available Sizes:</h1>
              <button type='button' onClick={() => addSizes('XS')} value='XS' className="focus:!underline  active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">XS</button>
              <button type='button' onClick={() => addSizes('S')} value='S' className="focus:!underline active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">S</button>
              <button type='button' onClick={() => addSizes('M')} value='M' className="focus:!underline active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">M</button>
              <button type='button' onClick={() => addSizes('L')} value='L' className="focus:!underline active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">L</button>              
              <button type='button' onClick={() => addSizes('XL')} value='XL' className="focus:!underline active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">XL</button>
              <button type='button' onClick={() => addSizes('XXL')} value='XXL' className="focus:!underline active:!underline  focus:!underline-[#452b1a] focus:!underline-offset-4 py-2">XXL</button>
          </div>

          {/**COLOURS */}

          {/*<label className="mb-10 flex">
            <span className='font-semibold text-base text-gray-700'>
              Product Colours:
            </span>

              <div className="flex flex-row gap-x-2">
                <button value='brown' onClick={(prev) => onSelectColour(prev, 'brown')} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#452B19] p-2`}></button>
                <button value='dark-blue' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#1C2A48] p-2`}></button>
                <button value='beige' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#DFD2C1] p-2`}></button>
                <button value='orange' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#E06C4C] p-2`}></button>
                <button value='white' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#FFF] p-2`}></button>
                <button value='black' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#000] p-2`}></button>
                <button value='green' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#216F5D] p-2`}></button>
                <button value='grey' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#C7C9CA] p-2`}></button>
                <button value='yellow' onClick={onSelectColour} className={`${selectColour && 'border-red-600 border-2'} rounded-full bg-[#F3EDC9] p-2`}></button>
              </div>

          </label>
                  
          */}

          <div className='flex-end w-screen mx-3 mb-5 mt-8 gap-4'>
            <button
              type='submit'
              disabled={submitting}
              className='bg-[#452b1a] mx-1 hover:bg-[#fff] hover:border hover:text-black text-white border-[#452b1a] py-4 w-1/2 rounded-lg text-[18px] font-normal'
            >
              {submitting ? "Creating..." : "Create"}
            </button>
        </div>

      </form> 
    </section>
  )
}

export default Form
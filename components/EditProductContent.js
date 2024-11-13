import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import { AiOutlineUpload, AiFillDelete  } from 'react-icons/ai';
import EditProductForm from './EditProductForm';
import { toast } from "react-hot-toast";

const EditProductContent = ({ productItems, submitting, setSubmitting, slug }) => {
  const [formData, setFormData] = useState({
    title: productItems?.title,
    imageURL: productItems?.imageURL,
    desc: productItems.desc,
    category: productItems?.category,
    collections: productItems?.collections,
    size: productItems?.size,
    color: productItems?.color,
    price: productItems?.price,
});

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCollection, setSelectedCollection] = useState(null)
    const [selectedSizes, setSelectedSizes] = useState(null)
    const [previewImage, setPreviewImage] = useState(productItems?.imageURL || [])
    const [imageUrls, setImageUrls] = useState([])

useEffect(() => {
  if (productItems) {
    setFormData({
      title: productItems.title || '',
      imageURL: productItems.imageURL || [],
      desc: productItems.desc || '',
      category: productItems.category || '',
      collections: productItems.collections || '',
      size: productItems.size || '',
      color: productItems.color || '',
      price: productItems.price || '',
    });
  }

  setSelectedCategory(
    productItems.category?.map((cat) => categoryOptions.find(option => option.value === cat)) || []
  );
  setSelectedCollection(
    productItems.collections?.map((col) => collectionOptions.find(option => option.value === col)) || []
  );
  setSelectedSizes(
    productItems.size?.map((sz) => sizeOptions.find(option => option.value === sz)) || []
  );
  setPreviewImage(productItems.imageURL)  
}, [productItems])

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

  const handleFileInputChange = async (e) => {
    const files = Array.from(e.target.files);    

    const imagePreviews = await Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );
    setFormData((prevData) => ({
      ...prevData,
      imageURL: [...prevData.imageURL, ...imagePreviews] 
    }));
    setPreviewImage((prevImages) => [...prevImages, ...imagePreviews]);
    console.log(formData)
  };


  const handleDeletePreviewImage = (src) => {
    const updatedPreviews = previewImage.filter((item) => item !== src);
    setPreviewImage(updatedPreviews);

    const updatedImageUrl = formData.imageURL.filter((item) => item !== src);
    setFormData((prevData) => ({
      ...prevData,
      imageURL: [updatedImageUrl] 
    }));
    console.log(formData.imageURL)
    console.log(previewImage)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
      
      try {

            const res = await fetch('/api/upload',{
              method: 'POST',
              body: JSON.stringify({
                  images: formData.imageURL
              }),
              headers: { 'Content-Type': 'application/json' },
            })
  
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
                
            }
  
            const { urls } = await res.json();
            setImageUrls(urls);
            setFormData((prevData) => ({
              ...prevData,
              imageURL: urls, 
           }));
  
           await new Promise((resolve) => setTimeout(resolve, 100)); 
           console.log('Updated FormData:', formData); 

          const response = await fetch (`/api/products/${slug}`,{
            method: 'PATCH',
            body: JSON.stringify({
              title: formData.title,
              imageURL: formData.imageURL,
              desc: formData.desc,
              size: formData.size,
              color: formData.color,
              price: formData.price,
              category: formData.category,
              collections: formData.collections
            }),
          })
          if(response.ok){
              console.log('Product Updated')
              toast.success(`Successfully updated ${formData.title}`, {
                style: {
                    fontSize: '12px',
                }
            })
          }    

      } catch (error) {
          console.log(error)
      }finally{
          setSubmitting(false)
          
      }
    }


  return (
    <>
      {productItems ? (
        <div className='grid grid-cols-10 gap-4 p-6'>
          <div className='col-span-3 bg-gray-100 rounded-lg p-4 '>
            <h1 className='font-semibold text-[16px] text-[#452b1a] pb-1'>Product image</h1>
            <hr className='w-full text-[#452b1a] py-2.5' />
            <div className=' space-y-2'>
              {/* Check if productItems has an imageURL before accessing */}
              {productItems.imageURL && (
                <Image
                  src={productItems.imageURL[0]}
                  width={400}
                  height={400}
                  className='rounded-lg object-contain'
                  alt='Product Image'
                />
              )}
              <h1 className='font-semibold text-[#452b1a] text-center text-[14px]'>
                {productItems.title}
              </h1>

              <form className='flex items-center justify-center mx-auto'>
                <label 
                    htmlFor="file-upload" 
                    className="flex items-center justify-center cursor-pointer border border-gray-200 text-[13px] text-grey-900 rounded-lg p-2 w-max"
                >
                    <AiOutlineUpload className="mr-2" size={16} /> 
                    <span>Add Another Image</span> 
                </label>

                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="hidden" 
                    multiple 
                />
              </form>

              <div className='flex space-x-2 pt-4 no-scrollbar overflow-scroll items-center justify-center'>
                {previewImage && previewImage.map((item) => (
                  <div className='relative'>  
                    <Image
                      src={item}
                      width={60}
                      height={80}
                      className='rounded-lg object-contain'
                      alt='Product Image'
                    />
                    <button className='absolute right-0 -top-2' onClick={() => handleDeletePreviewImage(item)}><AiFillDelete  color='red' /></button>
                  </div> 
                ))}
              </div>

            </div>
          </div>
          <div className='col-span-7 bg-gray-100 rounded-lg p-4'>
            <h1 className='font-semibold text-[16px] text-[#452b1a] pb-1'> General information</h1>
            <hr className='w-full text-[#452b1a] py-2.5' />
              
            <div className='flex flex-col space-y-2 px-6'>
              <EditProductForm 
                type="input"
                value={formData.title}
                onChangeFunction= {(e) => setFormData({ ...formData, title: e.target.value.toUpperCase() })} 
                placeholder= "Product Name" 
                labelText= "Product Title" 
                extraStyles={'capitalize'}
              />

              <div className='flex space-x-4 max-md:space-x-2 w-screen'>
                <EditProductForm 
                  type="select"
                  value={selectedCategory}
                  onChangeFunction= {handleCategoryChange} 
                  placeholder= "Category" 
                  labelText= "Product Category" 
                  selectOptions={categoryOptions}
                />
                <EditProductForm 
                  type="select"
                  value={selectedCollection}
                  onChangeFunction= {handleCollectionChange} 
                  placeholder= "Collection" 
                  labelText= "Product Collection" 
                  selectOptions={collectionOptions}
                />
              </div>

              <div className='flex space-x-4 max-md:space-x-2 w-screen'>
                <EditProductForm 
                  type="select"
                  value={selectedSizes}
                  onChangeFunction= {handleSizeChange} 
                  placeholder= "Size" 
                  labelText= "Product Sizes" 
                  selectOptions={sizeOptions}
                />
                <EditProductForm 
                  type="input"
                  value={formData.price}
                  onChangeFunction= {(e) => setFormData({ ...formData, price: e.target.value })} 
                  placeholder= "Price" 
                  labelText= "Product Price" 
                />
              </div>

              <EditProductForm 
                  type="textArea"
                  value={formData.desc}
                  onChangeFunction= {(e) => setFormData({ ...formData, desc: e.target.value })} 
                  placeholder= "Description" 
                  labelText= "Product Description" 
                />

                <button className='py-2 px-6 bg-[#452b1a] text-white text-[14px] mr-4' onClick={handleSubmit} disabled={submitting}>
                {submitting ? 'Saving...' : 'Save Product'}
                </button>
            </div>

          </div>
        </div>
      ) : (
        <p>No product data available</p> 
      )}
    </>
  );
};

export default EditProductContent;

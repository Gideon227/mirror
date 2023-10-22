"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreateProduct = () => {

    const [formData, setFormData] = useState({
        title:"",
        imageURL: [],
        desc: '',
        size: [],
        color: [],
        price: 0,
        category: [],
        collections: []
    });
    const [showOptions, setShowOptions] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [imageURLS, setImageURLS] = useState([])
    const [images, setImages] = useState([])
    const [colours, setColours] = useState([])
    const [newSizes, setNewSizes] = useState([]);
    const [selectedValues, setSelectedValues] = useState([])
    const [selectedCollection, setSelectedCollection] = useState([])

    const router = useRouter()

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLS = []
        images.forEach( async (image) => {
            const base64 = await convertToBase64(image)
            newImageURLS.push(base64)
        })
        setImageURLS(newImageURLS)
        //images.forEach((image) => newImageURLS.push(URL.createObjectURL(image)))
        //setImageURLS(newImageURLS)
        
    },[images])
    
    useEffect(() => {
        setFormData({ ...formData, imageURL: imageURLS })
        console.log(imageURLS)
    }, [imageURLS])

    const onImageChange = (e) => {
        setImages([...e.target.files])
    }

    const createProduct = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        
        try {
            const response = await fetch ('/api/products/new',{
                method: 'POST',
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
                router.push('/admin/create-product')
                console.log('New Product Added')
            }    
            } catch (error) {
            console.log(error)  
            } finally{
                setSubmitting(false)
            }
    }

  return (     
      <Form
          formData={formData}
          setFormData = {setFormData}
          submitting = {submitting}
          setSubmitting = {setSubmitting}
          handleSubmit = {createProduct}
          imageURLS={imageURLS}
          onImageChange={onImageChange}
          images={images}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          colours= {colours} 
          setColours = {setColours}
          newSizes={newSizes}
          setNewSizes={setNewSizes}
          setSelectedValues={setSelectedValues}
          selectedValues={selectedValues}
          setSelectedCollection={setSelectedCollection}
          selectedCollection={selectedCollection}
      />
  )
}

export default CreateProduct
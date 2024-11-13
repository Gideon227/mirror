import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async ( request, { params } ) => {
   try {
        connectToDB()

        const { id } = params
        const product = await Product.findById(id)
        return new Response(JSON.stringify(product), {status: 200} )
        
    } catch (error) {
        return new Response("Failed to fetch a single product", { status: 500 })
    }
}


export const DELETE = async (request) => {
    const { id } = await request.json()
    try {
        connectToDB()
        const newProducts = await Product.findByIdAndDelete(id)

        return new Response(JSON.stringify(newProducts), {status: 200} )
    } catch (error) {
        return new Response("Failed to delete product:", { status: 500 })   
    }
}

export const PATCH = async ( request, { params } ) => {
    const { id } = params
    const { title, imageURL, desc, size, color, price, category, collections } = await request.json()
    try {
        connectToDB()
        const updatedProduct = await Product.findByIdAndUpdate(id, { $set: { title, imageURL, desc, size, color, price, category, collections } }, {
            new: true,
            runValidators: true,
        })
        console.log('Updated Product:', updatedProduct);
        if (!updatedProduct) {
            throw new Error('Product not found or not updated');
        }

        return new Response(JSON.stringify(updatedProduct), {status: 200} )
    } catch (error) {
        console.error('Error updating product:', error);
        return new Response("Failed to update a single product", { status: 500 })
    }
}
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

export const PUT = async (request) => {
    const { id } = request.query;
    const { title, imageURL, desc, size, color, price, category, collections } = await request.json()
    try {
        connectToDB()
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })

        return new Response(JSON.stringify(updatedProduct), {status: 200} )
    } catch (error) {
        return new Response("Failed to fetch a single product", { status: 500 })
    }
}
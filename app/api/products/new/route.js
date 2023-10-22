import Product from "@models/products";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { title, imageURL, desc, size, color, price, category, collections } = await request.json()

    try {
        connectToDB()
        const newProduct = new Product({ title, imageURL, desc, size, color, price, category, collections })
        await newProduct.save()
    
        console.log("new Product Added")
        return new Response(JSON.stringify(newProduct), { status: 201 })
    }

     catch (error) {
        console.log(error)
        return new Response("Failed to create a new prompt",{ status: 500 })
    }
}
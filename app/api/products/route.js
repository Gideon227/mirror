import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()
        
        const products = await Product.find()

        if(!products){
            console.log('No Product Found!')
        }
        
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all products", { status: 500 })
    }
}
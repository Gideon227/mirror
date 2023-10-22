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
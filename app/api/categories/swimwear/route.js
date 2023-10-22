import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const swimwearCategoryApi = await Product.find({ category: 'swimwear' })
        if (!swimwearCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(swimwearCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
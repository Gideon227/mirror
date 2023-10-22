import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const headwarmerCategoryApi = await Product.find({ category: 'headwarmer' })
        if (!headwarmerCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(headwarmerCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
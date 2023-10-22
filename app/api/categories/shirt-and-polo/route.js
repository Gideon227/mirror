import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const poloCategoryApi = await Product.find({ category: 'shirt-and-polo' })
        if (!poloCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(poloCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
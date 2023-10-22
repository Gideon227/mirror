import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const tshirtCategoryApi = await Product.find({ category: 't-shirt' })
        if (!tshirtCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(tshirtCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
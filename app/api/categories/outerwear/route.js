import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const outerwearCategoryApi = await Product.find({ category: 'outerwear' })
        if (!outerwearCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(outerwearCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
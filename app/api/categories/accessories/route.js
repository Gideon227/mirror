import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const accessoriesCategoryApi = await Product.find({ category: 'accessories' })
        if (!accessoriesCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(accessoriesCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
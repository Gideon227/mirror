import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const teensCollectionApi = await Product.find({ collection: 'teens' })
        if (!teensCollectionApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(teensCollectionApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
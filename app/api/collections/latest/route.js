import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const latestCollectionApi = await Product.find().sort({ date_added: -1 })
        if (!latestCollectionApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(latestCollectionApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
import { connectToDB } from "@utils/database";
import Product from "@models/products";

export const GET = async (request) => {
    try {
        connectToDB()

        const knitwearCategoryApi = await Product.find({ category: 'knitwear' })
        if (!knitwearCategoryApi) {
            console.log('No Product Found')
        }
        return new Response(JSON.stringify(knitwearCategoryApi), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch Products', { status: 500 })
    }
}
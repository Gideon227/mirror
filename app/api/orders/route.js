import { connectToDB } from "@utils/database";
import Order from "@models/Orders";

export const GET = async (request) => {
    try {
        connectToDB()
        
        const orders = await Order.find()

        if(!orders){
            console.log('No Order Found!')
        }
        return new Response(JSON.stringify(orders), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all order", { status: 500 })
    }
}
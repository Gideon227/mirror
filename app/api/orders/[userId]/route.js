import { connectToDB } from "@utils/database";
import Order from "@models/Orders";

export const GET = async ( request, { params } ) => {
   try {
        connectToDB()
        
        const { userId } = params
        const order = await Order.find({ 'userInformation.userId': userId })

        if (order) {
            return new Response(JSON.stringify(order), {status: 200} )
        } else {
            return new Response("Order not found", { status: 500 })
        }           
    } catch (error) {
        return new Response("Failed to fetch a single order", { status: 500 })
    }
      
}
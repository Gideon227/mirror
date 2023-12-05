import Order from "@models/Orders";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { items, userInformation, totalBill, totalQuantity } = await request.json()   

    try {
        connectToDB()
        //   group cart items by shopId
        const shopItems = new Map();
      
        for (const item of items) {
          const _id = item._id;
          if (!shopItems.has(_id)) {
            shopItems.set(_id, []);
          }
          shopItems.get(_id).push(item);
        }
  
        // create an order for each shop
        const orders = [];
  
        for (const item of shopItems) {
          const order = await Order.create({
            items: item,
            userInformation: {
                name: userInformation.firstName + " " + userInformation.lastName,
                address: userInformation.address,
                city: userInformation.city,
                state: userInformation.state,
                country: userInformation.country.label,
                phone: userInformation.phone,
                email: userInformation.email,
                userId: userInformation.userId
            },
            totalBill: item[1][0].price * item[1][0].quantity,
            totalQuantity: item[1][0].quantity,
            status: 'Pending',
          });
          orders.push(order);
          console.log(order)
        }
  
        console.log("Your order is complete!")
        return new Response(JSON.stringify(orders), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to complete your order",{ status: 500 })       
    }
         
        
}
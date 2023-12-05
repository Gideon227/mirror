import OrderProfile from "@components/OrderProfile";
import getAllOrders from "@libs/getAllOrders";

export async function generateStaticParams(){
    const orders = await getAllOrders()
    return orders.map((order) => ({
      orderId: order._id
    }))
}
  
  
const page = ({ params }) => {
    const { userId, orderId } = params;
    const userInformationLocalStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInformation"));

    return (
      <div>
        <OrderProfile userInformation={userInformationLocalStorage} orderId={orderId} userId={userId}/>
      </div>
    )
  }
  
  export default page
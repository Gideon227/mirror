import getAllOrders from '@libs/getAllOrders';
import TrackOrders from '@components/TrackOrders'
import TrackOrderPage from '@components/TrackOrderPage';

export async function generateStaticParams(){
  const orders = await getAllOrders()
  return orders.map((order) => ({
    slug: order.userInformation.userId
  }))
}

const page = async ({ params }) => {
  const { userId } = params

  return <TrackOrderPage userId={userId} />

}

export default page
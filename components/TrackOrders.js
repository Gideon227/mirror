import Link from "next/link"

const TrackOrders = ({ userInformation, orderItem, userId }) => {

    const numberOfCompletedOrders = () => {
        return orderItem.filter((item) => {
           return item.status === 'Complete'
        }).length
    }

    const numberOfPendingOrders = () => {
        return orderItem.filter((item) => {
           return item.status === 'Pending'
        }).length
    }

    const numberOfFailedOrders = () => {
        return orderItem.filter((item) => {
           return item.status === 'Failed'
        }).length
    }

    const columns = [
        { label: "ID", accessor: "id" },
        { label: "Product name", accessor: "product name" },
        { label: "Date", accessor: "date"},
        { label: "Status", accessor: "status" },
        { label: "Qty", accessor: "quantity" },
        { label: "Price", accessor: "price" }
       ];

  return (
    <div className='py-14 lg:px-24 px-4 space-y-4'>
        <h1 className='text-[18px]'>Hello <span className='font-semibold text-[20px]'>{userInformation.firstNamen}</span></h1>
        <div className='lg:border-b-[1px] lg:border-[#ECECEE] w-full flex justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-4'>
            <div className='flex flex-col space-y-2 items-start py-3'>
                <h1 className='font-medium text-[20px]'>Total Order</h1>
                <h1 className='font-semibold text-[32px]'>{orderItem.length}</h1>
                <p className='text-slate-300 font-medium text-[12px]'>Number of total order</p>
            </div>

            <span className='h-24 w-px bg-[#452b1a] my-auto max-lg:hidden'></span>

            <div className='flex flex-col space-y-1 items-start py-3'>
                <h1 className='font-medium text-[20px]'>Completed Order</h1>
                <h1 className='font-semibold text-[32px]'>{numberOfCompletedOrders()}</h1>
                <p className='text-slate-300 font-medium text-[12px]'>Number of completed order</p>
            </div>

            <span className='h-24 w-px bg-[#452b1a] my-auto max-lg:hidden'></span>
            
            <div className='flex flex-col space-y-1 items-start py-3'>
                <h1 className='font-medium text-[20px]'>Pending Order</h1>
                <h1 className='font-semibold text-[32px]'>{numberOfPendingOrders()}</h1>
                <p className='text-slate-300 font-medium text-[12px]'>Number of pending order</p>
            </div>

            <span className='h-24 w-px bg-[#452b1a] my-auto max-lg:hidden'></span>
            
            <div className='flex flex-col space-y-1 items-start py-3'>
                <h1 className='font-medium text-[20px]'>Failed Order</h1>
                <h1 className='font-semibold text-[32px]'>{numberOfFailedOrders()}</h1>
                <p className='text-slate-300 font-medium text-[12px]'>Number of failed order</p>
            </div>
        </div>

        <div className='grid grid-cols-3 max-lg:flex max-lg:flex-col max-lg:space-y-8 py-2 gap-8'>
            <div className='lg:col-span-1 space-y-3'>
                <h1 className='text-[16px] font-medium text-start'>Customer Information</h1>
                <div className='rounded-lg border border-[#ECECEE] px-4 py-3 space-y-3'>
                    <div className='space-y-2'>
                        <h1 className='text-slate-400 text-[14px] font-medium'>Name</h1>
                        <h1 className='text-black text-[14px] font-medium'>{userInformation.firstName + ' ' + userInformation.lastName}</h1>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-slate-400 text-[14px] font-medium'>Email</h1>
                        <h1 className='text-black text-[14px] font-medium'>{userInformation.email}</h1>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-slate-400 text-[14px] font-medium'>Phone Number</h1>
                        <h1 className='text-black text-[14px] font-medium'>{userInformation.phone}</h1>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-slate-400 text-[14px] font-medium'>Shipping Address</h1>
                        <h1 className='text-black text-[14px] font-medium'>{userInformation.address + ', ' + userInformation.city + ', ' + userInformation.state + ', ' + userInformation.country?.label}</h1>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-slate-400 text-[14px] font-medium'>Billing</h1>
                        <h1 className='text-black text-[14px] font-medium'>Same as Shipping Address</h1>
                    </div>
                </div>

                <div>
                    <h1 className='text-black text-[20px]'>Quick Links</h1>
                </div>
            </div>

            <div className='lg:col-span-2 space-y-3'>
                <h1 className='text-[20px] font-medium text-start'>Orders</h1>
                <div className='flex justify-between ps-1'>
                    <div className="flex space-x-2">
                        <button className="border rounded-md text-gray-600 text-[14px] font-medium border-[#ECECEE] px-4 py-2 active:bg-[#F2F6FF] active:text-[#0D62FF]">All Orders</button>
                        <button className="border rounded-md text-gray-600 text-[14px] font-medium border-[#ECECEE] px-4 py-2 active:bg-[#F2F6FF] active:text-[#0D62FF]">Completed</button>
                        <button className="border rounded-md text-gray-600 text-[14px] font-medium border-[#ECECEE] px-4 py-2 active:bg-[#F2F6FF] active:text-[#0D62FF]">Pending</button>
                        <button className="border rounded-md text-gray-600 text-[14px] font-medium border-[#ECECEE] px-4 py-2 active:bg-[#F2F6FF] active:text-[#0D62FF]">Failed</button>
                    </div>
                    <div>
                        <button className="border rounded-md text-gray-600 text-[14px] font-medium border-[#ECECEE] px-4 py-2">View All</button>
                    </div>
                </div>

                <div className="rounded-lg border border-[#ECECEE] px-5 py-3 space-y-3">
                    <div className='grid grid-cols-7 gap-2 items-start text-start text-gray-900 text-[16px] font-bold'>
                        <p className="col-span-1">ID</p>
                        <p className="col-span-2">Product name</p>
                        <p className="col-span-1">Date</p>
                        <p className="col-span-1">Status</p>
                        <p className="col-span-1">Quantity</p>
                        <p className="col-span-1">Amount</p>
                    </div>

                    <div className="space-y-4 pb-2">
                        {orderItem?.map((item) => (
                            <Link href={`/track-orders/${userId}/${item._id}`} className='grid grid-cols-7 gap-2 items-start text-start border-t-[1px] border-[#ECECEE] pt-4 text-gray-900 text-[14px] font-medium' key={item._id}>
                                <p className="col-span-1">{item._id.slice(0,5)}</p>
                                <p className="col-span-2 font-bold">{item.items[1][0].title}</p>
                                <p className="col-span-1">{item.createdAt.slice(0, 10)}</p>
                                <p className="col-span-1">{item.status}</p>
                                <p className="col-span-1 ps-4">{item.items[1][0]?.quantity}</p>
                                <p className="col-span-1">{item.items[1][0]?.price}</p>
                            </Link>
                        ))}
        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TrackOrders
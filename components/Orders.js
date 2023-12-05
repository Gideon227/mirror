import Image from 'next/image';
const Orders = ({ orders, tableData, columns }) => {
  return (
    <div className='py-6'>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-semibold text-gray-800 '>Hey Gideon👋, </h1>
          <p className='text-[14px] font-normal text-gray-500'>Check your sales from the last 90 days</p>
        </div>
        <div className='flex space-x-2'>
          <h1>calender(TODO)</h1>
          <h1>Filter(TODO)</h1>
        </div>
      </div>
      {console.log(tableData)}
      <div className='mt-6'>
        
        <div className="rounded-lg border border-[#ECECEE] px-5 py-3 space-y-3">
          <div className='grid grid-cols-12 gap-1 items-start text-start text-gray-900 text-[16px] font-bold'>
            <p className="col-span-3 text-[14px]">Product</p>
            <p className="col-span-2 text-[14px]">Address</p>
            <p className="col-span-2 text-[14px]">Name</p>
            <p className="col-span-1 text-[14px]">Status</p>
            <p className="col-span-1 text-[14px]">Price</p>
            <p className="col-span-1 text-[14px]">Qty</p>
            <p className="col-span-2 text-[14px]">Date</p>
          </div>

          <div className="space-y-4 pb-2">
            {orders?.map((item) => (
              <div className='grid grid-cols-12 gap-1 items-start text-start border-t-[1px] border-[#ECECEE] pt-4 text-gray-900 text-[14px] font-medium' key={item._id}>
                <div className="col-span-3 space-x-2.5 flex">
                  <Image src={item.items[1][0].imageURL[0]} alt='Product Image' width={30} height={30} className='rounded-lg object-contain'/>
                  <p className='font-medium my-auto text-[13px]'>{item.items[1][0].title}</p>
                </div>
                <p className="col-span-2">{item.userInformation.address}</p>
                <p className="col-span-2">{item.userInformation.name}</p>
                <p className="col-span-1">{item.status}</p>
                <p className="col-span-1">{item.totalBill}</p>
                <p className="col-span-1">{item.totalQuantity}</p>
                <p className="col-span-2">{item.date_added.slice(0, 10)}</p>
              </div>
            ))}  
          </div>
      </div>
    </div>
  </div>
  )
}

export default Orders
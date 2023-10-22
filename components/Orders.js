import React from 'react'

const Orders = () => {

  const tableData = [
    {
     "id": 1,
     "name": "Wendall Gripton",
     "email": "wg@creative.org",
     "status": "Pending",
     "amount": 100,
     "date": "2022-01-26"
    },
    {
     "id": 2,
     "name": "Gideon Insitid",
     "email": "gideon@creative.org",
     "status": "Paid",
     "amount": 560,
     "date": "2022-01-26",
    },
 ]

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Email", accessor: "email" },
    { label: "Status", accessor: "status" },
    { label: "Amount", accessor: "amount" },
    { label: "Date", accessor: "date" },
   ];

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

      <div className='mt-6'>
        <table className='w-full me-12 ms-2'>
              {/* Table head */}
          <thead>
            <tr className='bg-[#F7F9FA]'>
              {/* <th className='w-1 h-1 border border-gray-950 rounded-md'> </th> */}
              
              {columns?.map((column) => (
                <th key={column.accessor} className='text-zinc-800 font-medium text-[16px] py-2 px-1 text-start'>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {tableData.map((data) => {
              return (
                <tr key={data.id}>
                  {columns.map(({ accessor }) => {
                  const tData = data[accessor] ? data[accessor] : "——";
                  return <td key={accessor} className='py-2 text-[15px]'>{tData}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
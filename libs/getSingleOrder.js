export default async function getSingleOrder (userId, orderId){
    const response = await fetch(`http://localhost:3000/api/orders/${userId}/${orderId}`)
    
    if (!response.ok) throw new Error('failed to fetch Order')

    return response.json()
}
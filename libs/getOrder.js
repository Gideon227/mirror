export default async function getOrder (userId){
    const response = await fetch(`http://localhost:3000/api/orders/${userId}`)
    
    if (!response.ok) throw new Error('failed to fetch Order')

    return response.json()
}
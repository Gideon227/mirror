export default async function getAllOrders() {
    const response = await fetch('http://localhost:3000/api/orders');
    if (!response.ok) throw new Error('failed to fetch Orders')
    
    return response.json()     
  }
export default async function getAllProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) throw new Error('failed to fetch Products')
    
    return response.json()     
  }
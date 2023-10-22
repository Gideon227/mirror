export default async function getProduct (productId){
    const response = await fetch(`http://localhost:3000/api/products/${productId}`)
    
    if (!response.ok) throw new Error('failed to fetch Products')

    return response.json()
}
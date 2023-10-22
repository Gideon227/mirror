export default async function getCollections (collection){
    const response = await fetch(`http://localhost:3000/api/collections/${collection}`)
    
    if (!response.ok) throw new Error('failed to fetch Products')

    return response.json()
}
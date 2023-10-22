export default async function getCategories (category){
    const response = await fetch(`http://localhost:3000/api/categories/${category}`)
    
    if (!response.ok) throw new Error('failed to fetch Products')

    return response.json()
}
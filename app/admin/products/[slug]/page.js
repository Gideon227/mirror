import AdminNavigation from "@components/AdminNavigation"
import EditProduct from "@components/EditProduct"
import getAllProducts from "@libs/getAllProducts"

export async function generateStaticParams(){
    const products = await getAllProducts()
    return products.map((product) => ({
      slug: product._id
    }))
}

const page = ({ params }) => {
    const { slug } = params
    console.log(slug)

  return (
    <div className='grid grid-cols-5 gap-0'>
        <div className='col-span-1 sticky h-screen top-0 bg-[#F6F8F9]'><AdminNavigation /></div>
        <div className='col-span-4 h-[1000px]'>  
          <EditProduct slug={slug} />
        </div>

    </div>
  )
}

export default page

import getAllProducts from '@libs/getAllProducts';
import ProductPage from '@components/ProductPage';

export async function generateStaticParams(){
  const products = await getAllProducts()
  return products.map((product) => ({
    slug: product.title
  }))
}

const ProductDetails = async ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <ProductPage slug={slug}/>
    </div>
  )
}

export default ProductDetails;
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Displayproducts from '@components/Displayproducts'
import Subnav from '@components/Subnav'
import Hero from '@components/Hero'
import Collections from '@components/Collections'
import Bestsellers from '@components/Bestsellers'

export default function Home() {
  return (
    <div>  
      <Hero />
      
      <Displayproducts />
      <Collections />
      {/**TODO */}
      <Bestsellers />
      <Gallery width='220' height='100' /> 
      <Reviews /> 
    </div>
  )
}

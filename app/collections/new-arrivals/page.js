import CollectionPage from "@components/Collectionpage"
import FilterCollections from "@components/FilterCollections"

const page = () => {
  return (
    <div className='flex flex-col p-6'>
    <FilterCollections title= 'NEW ARRIVALS'/>    
    <CollectionPage category='latest' />
  </div>
  )
}

export default page
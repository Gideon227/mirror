import CollectionPage from "@components/Collectionpage"
import FilterCollections from "@components/FilterCollections"

const page = () => {
  return (
    <div className='flex flex-col p-6'>
    <FilterCollections title= 'MENS'/>    
    <CollectionPage category='men' />
  </div>
  )
}

export default page
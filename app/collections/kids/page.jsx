import CollectionPage from "@components/Collectionpage"
import FilterCollections from "@components/FilterCollections"

const kidsCollectionPage = () => {
  return (
    <div className='flex flex-col p-6'>
      <FilterCollections title= 'KIDS'/>    
      <CollectionPage category='kids' />
    </div>
  )
}

export default kidsCollectionPage
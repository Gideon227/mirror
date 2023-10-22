'use state'
import { useStateContext } from "@context/StateContext"
import ProductPage from "./ProductPage"


 export const useContextProvider = () => {
   
   const { onAdd, incQty, decQty, qty } = useStateContext()
   
    return (
      <ProductPage onAdd= {onAdd} incQty={incQty} decQty={decQty} qty={qty} />
    )
 }
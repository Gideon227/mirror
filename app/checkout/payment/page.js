'use client'
import CheckoutRightbar from "@components/CheckoutRightbar"
import { useStateContext } from "@context/StateContext"
import Payment from "@components/Payment"

const page = () => {
    const { totalPriceFromLocalStorage } = useStateContext()
    const userInformationLocalStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userInformation"));

  return (
    <div className="grid grid-cols-5 max-md:flex max-md:flex-col">
        <div className="col-span-3 md:h-screen "><Payment /></div>
        <div className="col-span-2 md:h-screen"><CheckoutRightbar shipping={
            userInformationLocalStorage?.state === 'LAGOS' 
            ? 0.1 * totalPriceFromLocalStorage
            : 0.33 * totalPriceFromLocalStorage
            } />
        </div>
    </div>
  )
}

export default page
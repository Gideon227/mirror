"use client"
import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { toast } from "react-hot-toast";
import getAllProducts from '@libs/getAllProducts'

export const Context = createContext()

export const StateContext = ({ children }) => {
    const cartFromLocaleStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem('cart')) || []
    const totalQuantitiesFromLocalStorage = typeof window !== "undefined" && parseInt(localStorage.getItem("totalQuantities")) || 0;
    const totalPriceFromLocalStorage = typeof window !== "undefined" && parseInt(localStorage.getItem("totalPrice")) || 0;

    const [toggleSearch, setToggleSearch] = useState(false)
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState(cartFromLocaleStorage);
    const [totalPrice, setTotalPrice] = useState(totalPriceFromLocalStorage);
    const [totalQuantities, setTotalQuantities] = useState(totalQuantitiesFromLocalStorage);
    const [qty, setQty] = useState(1);
    const [sortProducts, setSortProducts] = useState('')

    const [allProducts, setAllProducts] = useState([])

    const [adminNavigation, setAdminNavigation] = useState('Overview')

    useEffect( () => {
        const fetchProducts =  async () => {
        const data = await getAllProducts()
        setAllProducts(data)
        }
        fetchProducts()
    }, [])


    let foundProduct

    useEffect(() => {
        const setCart = () => {
          typeof window !== "undefined" && localStorage.setItem("cart", JSON.stringify(cartItems));
          typeof window !== "undefined" && localStorage.setItem("totalQuantities", parseInt(totalQuantities));
          typeof window !== "undefined" && localStorage.setItem("totalPrice", parseInt(totalPrice));
        };
        setCart();
      }, [cartItems, totalQuantities, totalPrice])      

    const handleSearchToggle = () => {
        setToggleSearch((prev) => !prev)
    }

    const onAdd = (product, quantity) => {
        const productInCart = cartItems.find((item) => item._id === product._id)

        if (productInCart){
            const newCartItems = cartItems.map((item) => {
                if(item._id === product._id) return {
                    ...item, quantity: item.quantity + quantity
                }
                return item;
            })
            setCartItems(newCartItems)
        } else{
            //product.quantity = quantity
            setCartItems((prev) => [...prev, { ...product, quantity: quantity }]);
        }
        setTotalPrice((prev) => prev + product.price * quantity)
        setTotalQuantities((prev) => prev + quantity)
        toast.success(`${qty} ${product.title} added to the cart.`, {
            style: {
                fontSize: '12px',

            }
        })
        console.log(typeof(totalQuantities))
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => {item._id === product._id})
        const newCartItems = cartItems.filter((item) => item._id !== product._id)
        setCartItems(newCartItems)
        setTotalPrice((prev) => prev - product.quantity * product.price)
        setTotalQuantities((prev) => prev - product.quantity)
        localStorage.removeItem('cart')
        localStorage.removeItem('totalQuantitiesFromLocalStorage')
        localStorage.removeItem('totalPriceFromLocalStorage')
    }

    const onCartItemQuantity = (id, type) => {
        const foundProduct = cartItems.find((item) => item._id === id);

        if (!foundProduct) return;

        if (type === "inc") {
        setCartItems((prev) =>
            prev.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        setTotalPrice((prev) => prev + foundProduct.price);
        setTotalQuantities((prev) => prev + 1);
        } else if (type === "dec" && foundProduct.quantity > 1) {
        setCartItems((prev) =>
            prev.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
        }
    };

    
    const incQty = () => {
        setQty((prev) => {prev + 1})
    }
    const decQty = () => {
        setQty((prev) => {
        if(prev - 1 < 1) return 1;
        return prev - 1})
    }

    return(
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                onAdd,
                incQty,
                decQty,
                onCartItemQuantity,
                onRemove,
                totalQuantities,
                totalPrice,
                cartItems,
                qty, 
                toggleSearch,
                setToggleSearch,
                handleSearchToggle,
                sortProducts,
                setSortProducts,
                cartFromLocaleStorage,
                totalQuantitiesFromLocalStorage,
                totalPriceFromLocalStorage,
                allProducts,
                adminNavigation,
                setAdminNavigation
            }}
        >
            {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);
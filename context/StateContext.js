import React, {useState, useEffect, useContext, createContext} from 'react'
import {toast} from 'react-hot-toast'

const Context= createContext()
export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQyt, setTotalQyt] = useState()
    const [qty, setQty] = useState(1)
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItem.find((item) => item._id === product._id )
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQyt((prevTotalQyt) => prevTotalQyt + quantity)
        if(checkProductInCart) {
            const updateCart = cartItem.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartItem,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItem(updateCart)
        } else {
            product.quantity = quantity
            setCartItem([...cartItem, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1
            return prevQty - 1
        })
    }
    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItem,
                totalQyt,
                qty,
                incQty,
                decQty,
                onAdd
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
import React, {useState, useEffect, useContext, createContext} from 'react'
import {toast} from 'react-hot-toast'

const Context= createContext()
export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState()
    const [totalQyt, setTotalQyt] = useState()
    const [qty, setQty] = useState(1)
    const incQty = () => {
        setQty((prevqty) => prevqty + 1)
    }
    const decQty = () => {
        setQty((prevqty) => {
            if(prevqty - 1 < 1) return 1
            return prevqty - 1
        })
    }
    return (
        <Context.Provider
            value={{
                showCart,
                cartItem,
                totalQyt,
                qty,
                incQty,
                decQty
            }}
        >
            {children}
        </Context.Provider>
    )
}
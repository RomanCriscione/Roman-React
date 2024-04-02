import { createContext, useState } from "react";
import { NotificationContext } from "../notification/NotificationsService";
import { useNotification } from "../notification/hooks/useNotification";

export const CartContext = createContext({
    cart: []

})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const { showNotification } = useNotification()

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            showNotification("Error", "El producto ya ha sido agregado al carrito");
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.quantity
        })
        return acumulador
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.quantity * prod.price
        })
        return acumulador
    }

    const total = getTotal()
    

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/fireConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useNotification } from "../../notification/hooks/useNotification"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const[orderId, setOrderId] = useState(null)

    const { cart, total, clearCart} = useContext(CartContext)

    const { showNotification } = useNotification()
    

    const createOrder = async ({ name, email, phone }) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name, email, phone
                },
                items: cart,
                total: total
            }
    
            const batch  = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...data})
                    }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderColletion = collection(db, "orders")
                const { id } = await addDoc(orderColletion, objOrder)   

                setOrderId(id)

                clearCart()
                
                
            } else {
                showNotification("error", "Hay productos sin stock disponible")
                console.error("Hay productos sin stock disponible")
            }

            

        } catch (error) {
            showNotificationshowNotification("Hubo un error en la generación de la orden: " + error.message, "error")
            console.error("Hubo un error en la generación de la orden:", error)

        

        }finally {
            setLoading(false)
        }

        
        }
        if(loading) {
            return <h1>Su orden está siendo procesada</h1>
    }

    if(orderId) {
        return <h1>El número de su orden es: {orderId}</h1>
    }

    return (
        <div>
            
             
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
                        
        </div>
    )
}

export default Checkout
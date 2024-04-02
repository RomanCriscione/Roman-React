import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart, clearCart, total } = useContext(CartContext)
    return (
        <div>
        <h1>Carrito</h1>
        <section>
        {
            cart.map(prod => {
                return (
                    <article key={prod.id}>
                    <h2>{prod.name} - ${prod.price}</h2>
                    
                    </article>
                )
            })
        }
        </section>
        <h3> Total: ${total} </h3>
        <Link to={"/checkout"}>Checkout</Link>
        <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
        </div>
    )
}

export default CartView
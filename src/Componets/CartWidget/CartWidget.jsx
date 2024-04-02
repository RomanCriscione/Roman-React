import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import cart from "./assets/carrito.svg"
import { Link } from "react-router-dom"

const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)
    

    return (
        <Link to={"/cart"}>
            <img src={cart} alt="Carrito" style={{ width: '50px', height: '50px' }} />
            { totalQuantity }

        </Link>
    )
}

export default CartWidget
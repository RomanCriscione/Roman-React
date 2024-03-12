import cart from "./assets/carrito.svg"

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="Carrito" style={{ width: '50px', height: '50px' }} />
            0

        </div>
    )
}

export default CartWidget
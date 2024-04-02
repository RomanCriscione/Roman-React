import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNavigation } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"

const ItemDetail = ({id, name, category, price, img, description, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const { showNotification } = useNotification()


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        showNotification("Seccess", `Se agrego correctamente ${quantity} ${name} al carrito`)

        addItem(item, quantity)

        
    }
    return (
        <article>
            
            <h3>{name}</h3>
            <img src={img} style={{width: 100}}/>
            <h4>Categoria: {category}</h4>
            <h4>${price}</h4>
            <h4>Descripción: {description}</h4>
          

            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="Option">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
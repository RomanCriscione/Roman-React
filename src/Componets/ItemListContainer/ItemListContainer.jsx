import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/firebase/fireConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {

        const productsColletion = categoryId ? (
            query(collection(db, "products"), where("category", "==", categoryId))
        )   : (
        collection(db, "products")
        )
        getDocs(productsColletion)
        .then(querySnapshot => {
        const productsAddapted = querySnapshot.docs.map(doc => {
            const data = doc.data()

            return {id: doc.id, ...data}
        })

        setProducts(productsAddapted)

    })
        .catch(error => {
          showNotification("Error", "Hubo un error al cargar los productos")
        })
       
    }, [categoryId])
    return(
    
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
    )
}

export default ItemListContainer
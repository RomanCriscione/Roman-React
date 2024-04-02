import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/fireConfig"


const ItemDetailContainer =() => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, "products", itemId)
        getDoc(productDoc)
        .then(queryDocumentSnapshot => {

            const data = queryDocumentSnapshot.data()
            const productAddapted = {id: queryDocumentSnapshot.id, ...data}

            setProduct(productAddapted)
        })
        .catch()
        
    }, [itemId])
    return(
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}

export default ItemDetailContainer
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
            .then(response=>{
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <ItemDetail
              id={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
              price={product.price}
              stock={product.stock}
            />
          )}
        </div>
      );
    
}

    
    

    

export default ItemDetailContainer;
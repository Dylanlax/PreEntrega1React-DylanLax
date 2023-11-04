import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () =>{
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div className="noHay">
                <h3 className="noHayTexto">No hay items en el carrito</h3>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h4>Total: ${total}</h4>

            <div>
                <button onClick={()=> clearCart()} className="Button">Limpiar carrito</button>
                <Link to="/checkout" className="Option">checkout</Link>
            </div>
            
        </div>
    )
}

export default Cart;
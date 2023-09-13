import cart from "./assets/shopping-cart.svg";


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" className="cart"/>
            0
        </div>
    )
}

export default CartWidget;
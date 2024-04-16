import cart from './assets/cart-icon.png'

const CartWidget =() =>{
    return(
        <div>
            <img className="pt-3 cart" src={cart} alt="carrito de compras" />
            <span className='position-absolute rounded-circle  number-cart '>0</span>
        </div>
        
    )
}

export default CartWidget
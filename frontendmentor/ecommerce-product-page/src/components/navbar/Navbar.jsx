import { useState } from "react";
import "./navbar.scss";

const Navbar = ({ setCart, cart }) => {
    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const CartItem = ({ index, data })=> {
        
        const onDeleteHandler = ()=> {
            const shadowCart = [...cart]
            shadowCart.splice(index, 1)
            return setCart(shadowCart)
        }
    
        return (
            <div className="item">
                <img className="product" src={`/assets/images/${data.image}`} alt={data.name} width="50" height="50" />
                <div>
                    <span className="name">{data.name}</span>
                    <span className="price">{data.data}<b>{data.finalPrice}</b></span>
                </div>
                <img onClick={()=> onDeleteHandler()} src="/assets/images/icon-delete.svg" alt="Delete" />
            </div>
        )
    }

    const onMenuHandler = ()=> {
        if (openMenu) document.body.style.overflowY = 'auto'
        else document.body.style.overflowY = 'hidden'
        setOpenMenu(!openMenu);
    }

    const menuClassname = openMenu ? "open" : "";

    return (
        <nav>
            <img onClick={()=> onMenuHandler()} src="/assets/images/icon-menu.svg" alt="Menu" width='16' height='15' />
            <img src="/assets/images/logo.svg" alt="Sneakers" width='138' height='20' />
            <img onClick={()=> setOpenCart(!openCart)} className="cart" src="/assets/images/icon-cart.svg" alt="Cart" width='22' height='20' />
            <img src="/assets/images/image-avatar.png" alt="Avatar" width='26' height='26' />

            {openCart && 
            <div className="cart">
                <h4>Cart</h4>
                {cart.map((product, index) => {
                    return <CartItem key={index} index={index} data={product} />
                })}
                {cart.length < 1 && <span className="empty">Your cart is empty.</span>}
                {cart.length > 0 && <button>Checkout</button>}
            </div>}

            <div className={`menu ${menuClassname}`}>
                <div className={`panel ${menuClassname}`}>
                    <img onClick={()=> onMenuHandler()} src="/assets/images/icon-close.svg" alt="Close" width='16' height='16' />
                    <a href="/collections">Collections</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
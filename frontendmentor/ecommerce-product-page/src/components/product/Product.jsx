import { useState } from "react";
import "./product.scss";

const data = require("./data.json");

const Product = ({ setCart }) => {

    const [counter, setCounter] = useState(0);
    const [imageCounter, setImageCounter] = useState(0);

    const onImageCounterHandler = (operation) => {
        if (operation) {
            if (imageCounter < data.assets.length - 1) setImageCounter(imageCounter + 1)
        } else {
            if (imageCounter > 0) setImageCounter(imageCounter - 1)
        }
    }

    const onCounterHandler = (operation)=> {
        if (operation) {
            if (counter < 20) setCounter(counter + 1);
        } else {
            if (counter > 0) setCounter(counter - 1);
        }
    }

    const price = data.price.toFixed(2);
    const discount = data.discount ? (price * data.discount) / 100 : 0;
    const finalPrice = (price - discount).toFixed(2);
    const dataForItem = counter ? `$${finalPrice} x ${counter}` : `$${finalPrice}`;

    const onSetItemToCart = ()=> {
        if (counter > 0) {
            const item = {
                name: data.name,
                data: dataForItem,
                image: data.assets[0].thumbnail,
                finalPrice: `$${(finalPrice * counter).toFixed(2)}`
            };
            setCart(cart => [...cart, item]);
        }
    }

    return (
        <article>
            <div className="image">
                <img style={imageCounter === 0 ? { opacity: "0.5" } : {}} onClick={()=> onImageCounterHandler(0)} className="button prev" src="/assets/images/icon-previous.svg" alt="Previous" />
                <img className="product" src={`/assets/images/${data.assets[imageCounter].image}`} alt="Product" />
                <img style={imageCounter === data.assets.length - 1 ? { opacity: "0.5" } : {}} onClick={()=> onImageCounterHandler(1)} className="button next" src="/assets/images/icon-next.svg" alt="Next" />
            </div>

            <div className="data">
                <span className="company">SNEAKER COMPANY</span>
                <h1>{data.name}</h1>
                <p>{data.description}</p>

                <div className="price">
                    <span className="finalPrice">${finalPrice}</span>
                    <span className="discount">{discount ? `${data.discount}%` : ""}</span>
                    <span className="price">{discount ? "$" + price : ""}</span>
                </div>

                <div className="counter">
                    <img onClick={()=> onCounterHandler(0)} src="/assets/images/icon-minus.svg" alt="Subtract" />
                    <span>{counter}</span>
                    <img onClick={()=> onCounterHandler(1)} src="/assets/images/icon-plus.svg" alt="Add" />
                </div>

                <button onClick={()=> onSetItemToCart()}>
                    <img src="/assets/images/icon-cart.svg" alt="Add to cart" width='20' height='18' />
                    Add to cart
                </button>
            </div>
        </article>
    )
}

export default Product
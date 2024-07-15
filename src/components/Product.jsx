import React from 'react';
import "./Product.css";

export const Product = ({Product, cart, setCart}) => {
    const name = Product.name.length > 21? Product.name.substring(0,20) + ".." :Product.name;

    const addCart = () => {
        setCart([...cart,Product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c) =>c.id !==Product.id));
    };



    return (
        <div className="Product">
            <div className="img">
                <img src={Product.image} alt={Product.name} />
            </div>
            <div className="details">
            <h3>{Product.name}</h3>
            <p>Price $:{Product.price}</p>
            {cart.includes(Product)?
            (<button className="btnRemove" onClick={removeCart}>Remove From Cart</button>):(<button onClick={addCart}>Add to Cart</button>)};
        </div>
            </div>
    );
}

export default Product;
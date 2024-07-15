import React, { useEffect, useState } from 'react';
import "./Cart.css";

 export const Cart = ({cart}) => {
    const [total, setTotal]=useState(0);
    useEffect (()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price), 0));
    },[cart]);
    return (
        <>
        <h1 className="cart-heading">Cart Products</h1>
        <div className="cart-container">
           {
            cart.map((Product)=>(
                <div className="cart-Product" key={Product.id}>
        <div className="img">
            <img src={Product.image} alt="image" /></div> 
            <div className="cart-Product-details">
                <h3>{Product.name}</h3>
                <p>Price $:{Product.price}</p>
                </div>    
        </div> 
            ))
           }
        </div>
        <h2 className="cart-amt">Total Amount $:600</h2>
        </>
    );
};

export default Cart;
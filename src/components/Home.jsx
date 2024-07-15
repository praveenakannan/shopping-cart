import React, { useState } from 'react';
import data from "../assets/Product.json";
import "./Home.css";

export const Home = ({cart, }) => {
    const [Product]=useState(data);
    return (
        <div className="Product-container">
            {Product.map((Product)=>(
                <Product key={Product.id} Product={Product} cart={cart} setCart={setCart}  />
            ))}
            
         </div>
    );
};

export default Home;
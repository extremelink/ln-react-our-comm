import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) =>{
    const {id,img,name,desc,price,discountPercentage}=props
    console.log(props);
    const originalPrice=price;
    const discountedPercentage=discountPercentage;
    console.log(originalPrice,discountedPercentage);
    return (
        <Link to={'/product/'+id}>
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
        <div className="product-name">
            {name}
        </div>
        <div className="product-desc">
            <p>{desc}</p>
        </div>
        <div className="product-price">
             <span className="product-price-final">{originalPrice*(100-discountedPercentage)/100}</span>
                <span className="product-price-original">{originalPrice}</span>
                <span className="product-price-discount">{discountedPercentage}% off</span>
        </div>
            
        </div>
        </Link>
        
    )
}

export default ProductCard;
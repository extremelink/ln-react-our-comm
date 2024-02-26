import React from "react";

const ProductCard = () =>{
    const originalPrice=7000;
    const discountedPercentage=40;
    return (
        <div className="product-card">
            <div className="product-img">
                <img src="https://m.media-amazon.com/images/I/616DKlp2ugL._AC_UL320_.jpg"alt=""/>
            </div>
        <div className="product-name">
            Men's Regular Dry Fit Gym Sports T-Shirt
        </div>
        <div className="product-desc">
            2XL Solid Half Sleeve Standard Length
        </div>
        <div className="product-price">
            {/* <div className="product-price-final">4500</div>
            <div className="product-price-original">7000</div>
            <div className="product-price-discount">40% off</div> */}
             <span className="product-price-final">{originalPrice*(100-discountedPercentage)/100}</span>
            <span className="product-price-original">{originalPrice}</span>
            <span className="product-price-discount">{discountedPercentage}% off</span>
            
        </div>
            
        </div>
    )
}

export default ProductCard;
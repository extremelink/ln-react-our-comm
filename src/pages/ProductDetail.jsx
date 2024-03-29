import { useParams } from "react-router-dom";
import productList from "../data/productList";

const ProductDetail=()=>{
    const {productId}=useParams();
    const details = productList[productId]
    console.log('productId',productId) 
    return (
        <div className="product-detail-container">
            <div className="product-detail">
                    <h1>ProductDetail</h1>
                    <img src={details.img} alt=''/>
                    <h1>{details.name}</h1>
                    <p>{details.desc}</p>
                    <div className="product-price">
                    <span className="product-price-final">{details.price*(100-details.discountPercentage)/100}</span>
                        <span className="product-price-original">{details.price}</span>
                        <span className="product-price-discount">{details.discountPercentage}% off</span>
                </div>
            </div>
        </div>
    )


}
export default ProductDetail;
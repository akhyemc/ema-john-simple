import React from 'react';
import './PRoduct.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} StarsS</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;
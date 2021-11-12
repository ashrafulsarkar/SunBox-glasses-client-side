import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {name, shortDsc, price, image, _id} = props.product;
    return (
        <div className="col-lg-4">
            <div className="single-product mb-4">
                <div className="single-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-details">
                    <h3>{name}</h3>
                    <p>{shortDsc}</p>
                    <p>${price}</p>
                    <Link to={`/checkout/${_id}`}>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
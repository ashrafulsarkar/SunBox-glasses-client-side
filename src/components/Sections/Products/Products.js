import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            const sixProduct = data.slice(0, 6);
            setProducts(sixProduct);
        })
    },[])
    return (
        <section className="our-product section-p">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-title">
                            <h2 className="text-center">Our Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <div className="row">
                    <div className="col">
                        <div className="all-product-btn">
                            <Link to="/product">View All Product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
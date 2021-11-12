import React, { useEffect, useState } from 'react';
import Banner from '../../Sections/Banner/Banner';
import Product from '../../Sections/Product/Product';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[]);
    return (
        <main>
            <Banner pageName="Product"></Banner>
            <section className="section-p">
                <div className="container">
                    <div className="row">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
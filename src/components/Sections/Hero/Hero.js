import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBG from './../../../images/hero.jpg';

const Hero = () => {
    return (
        <section className="heroPart" style={{backgroundImage:`url(${heroBG})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text">
                            <h3>On New Sunglasses</h3>
                            <h4>20% Discount</h4>
                            <Link to="/product">All Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
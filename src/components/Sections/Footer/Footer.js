import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo.png';
import appStore from './../../../images/App-Store.png';
import playStore from './../../../images/Google-Play.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget-area">
                            <img src={logo} alt="" />
                            <address>
                            60, 29th Street #343, San Francisco, CA 94110, United States of America
                            </address>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget-area">
                            <h4>Information</h4>
                            <ul>
                                <li><Link to ="/product">All Product</Link></li>
                                <li><Link to ="/">About</Link></li>
                                <li><Link to ="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget-area">
                            <h4>Download App</h4>
                            <div className="app-download">
                                <img src={appStore} alt="" />
                                <img src={playStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="copyright">
                            <p className="text-center">Copyright © 2021 Ashraful Sarkar</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
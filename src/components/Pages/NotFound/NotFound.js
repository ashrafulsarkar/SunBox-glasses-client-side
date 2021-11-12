import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="section-p not-found">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3 className="text-center">404</h3>
                        <h3 className="text-center">Not Found</h3>
                        <Link to="/">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
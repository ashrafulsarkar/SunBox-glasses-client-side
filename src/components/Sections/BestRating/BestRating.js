import React, { useEffect, useState } from 'react';

import Rating from 'react-rating'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const BestRating = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/review')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[]);

    return (
        <section className="bestRating section-p">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-title">
                            <h2 className="text-center">Best Rating</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        reviews.map(review => {
                            return (
                                <div key={review._id} className="col-lg-4">
                                    <div className="single-product mb-3">
                                        <div className="product-details">
                                            <p className="review-massage">{review.massage}</p>
                                            <h3>{review.name}</h3>
                                            <p>{review.destination}</p>
                                            <p>
                                            <Rating
                                                initialRating={review.rating}
                                                emptySymbol={<FaRegStar/>}
                                                fullSymbol={<FaStar/>}
                                                readonly
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BestRating;
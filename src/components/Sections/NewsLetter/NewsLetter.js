import React from 'react';
import './NewsLetter.css';
import newsLetterBg from './../../../images/newslatterBg.jpg';

const NewsLetter = () => {
    return (
        <section className="newsletter section-p" style={{backgroundImage: `url(${newsLetterBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="newsletter-part">
                            <h3>Sign Up Newsletter</h3>
                            <p>Subscribe Newsletter & Join our list and get 15% off your first purchase!</p>
                            <div className="mail-box">
                                <input type="text" placeholder="Enter your email." />
                                <input type="button" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
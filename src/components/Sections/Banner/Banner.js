import React from 'react';

const Banner = ({pageName}) => {
    return (
        <section className="section-p" style={{backgroundColor: "#f8f9fa"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Home - {pageName}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
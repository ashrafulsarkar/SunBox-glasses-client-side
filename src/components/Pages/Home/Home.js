import React from 'react';
import BestRating from '../../Sections/BestRating/BestRating';
import Hero from '../../Sections/Hero/Hero';
import NewsLetter from '../../Sections/NewsLetter/NewsLetter';
import Products from '../../Sections/Products/Products';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <Products></Products>
            <BestRating></BestRating>
            <NewsLetter></NewsLetter>
        </main>
    );
};

export default Home;
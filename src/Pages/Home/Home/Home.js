import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Shop from '../Shop/Shop';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Shop></Shop>
            <Packages></Packages>
            <Blog></Blog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
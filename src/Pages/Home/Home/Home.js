import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;
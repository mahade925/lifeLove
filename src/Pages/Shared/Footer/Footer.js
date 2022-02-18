import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='font-bold'>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <h1 className="text-4xl cursor-pointer dancing">Life Love</h1>
                        </div>
                        <div className="media-icons">
                            <a href="#"><i class="lni lni-facebook-filled"></i></a>
                            <a href="#"><i class="lni lni-twitter-original"></i></a>
                            <a href="#"><i class="lni lni-instagram-original"></i></a>
                            <a href="#"><i class="lni lni-linkedin"></i></a>
                            <a href="#"><i class="lni lni-youtube"></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Links</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Get Started</a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href="#">App Design</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Logo Design</a></li>
                            <li><a href="#">Banner Design</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Other services</li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Content Marketing</a></li>
                            <li><a href="#">Prints</a></li>
                            <li><a href="#">Social Media</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Contact</li>
                            <li><a href="#">+91 8879887262</a></li>
                            <li><a href="#">+91 8879887262</a></li>
                            <li><a href="#">contact@lifelove.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2022 <a href="#">LifeLove.</a></span>
                        <span className="policy_terms">
                            <a href="#">Privacy policy</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
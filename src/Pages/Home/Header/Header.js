import {React, useState} from 'react';
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Contact from '../../Contact/Contact';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="shadow-sm w-full z-5 bg-white duration-100">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20 justify-around w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <h1 className="text-4xl cursor-pointer dancing">Life Love</h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">
                                    <Link
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        activeclassName="Home"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="duration-100 cursor-pointer text-blue-600 font-semibold px-3 py-2 text-xl"
                                    >
                                        <NavLink to="/home">
                                            HOME
                                        </NavLink>
                                    </Link>
                                    <Link
                                    data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        activeclassName="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="duration-100 cursor-pointer text-black hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium"
                                    >
                                        <HashLink to="/home#shop">SHOP</HashLink>
                                    </Link>
                                    <Link
                                    data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        activeclassName="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="duration-100 cursor-pointer text-black hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium"
                                    >
                                        <HashLink to="/home#packages">PACKAGES</HashLink>
                                    </Link>
                                    <Link
                                    data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        activeclassName="Services"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="duration-100 cursor-pointer text-black hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium"
                                    >
                                        <HashLink to="/home#blog">BLOG</HashLink>
                                    </Link>

                                    <Link
                                    data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        activeclassName="Services"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="duration-100 cursor-pointer text-black hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium"
                                    >
                                        <NavLink to="/contact">
                                            CONTACT
                                        </NavLink>
                                    </Link>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <i className="lni lni-search-alt duration-100 cursor-pointer text-3xl mr-8 hover:text-blue-500"></i>
                                <i className="lni lni-shopping-basket duration-100 cursor-pointer text-3xl hover:text-blue-500"></i>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <Link
                                    href="/home"
                                    activeclassName="home"
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    activeclassName="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/work"
                                    activeclassName="work"
                                    to="work"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Menu
                                </Link>
                                <Link
                                    href="/services"
                                    activeclassName="services"
                                    to="services"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reservation
                                </Link>
                                <link rel="stylesheet" href="" />
                                <Link
                                    href="/contact"
                                    activeclassName="work"
                                    to="work"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;
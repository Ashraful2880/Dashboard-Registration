import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../../Assests/Image/Logo.png";
import "./Header.css";
import useAuth from './../../../Hooks/UseAuth';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const StickyNav = ({ hide }) => {
    const { user } = useAuth();
    return (
        <div className="border-b-2 relative z-50">
            <div className={`container mx-auto lg:block ${hide}`}>
                <div className="lg:flex block justify-between items-center mobileMenuAnimation">
                    <Link to="/" className="lg:flex block gap-x-2 items-center">
                        <img src={logo} alt="Main Logo" className="h-11 w-11 mx-auto" />
                        <p className="text-2xl font-bold">
                            <span className="text-orange-600">S</span>peedy
                            <span className="text-orange-600"> E</span>xpress
                        </p>
                    </Link>
                    <div>
                        <ul className="lg:flex block items-center gap-x-5 text-lg font-semibold py-1">
                            <li className="hover:text-orange-600 duration-300 lg:py-4 py-1">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                <Link to="/about">About
                                    <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-sm text-gray-500" />
                                </Link>

                                {/* Sub Menu Start*/}

                                <div className="sub-menu hidden lg:w-[200px] w-[30%] absolute lg:top-14 top-6 lg:left-0 left-[40%] bg-gray-900 shadow-sm shadow-orange-600 text-white rounded-b-md border-t-2 border-t-orange-600">
                                    <div className="flex flex-col items-start gap-x-5 text-lg font-semibold overflow-hidden">
                                        <Link to="about/team" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Team</span>
                                        </Link>
                                        <Link to="about/partners" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Our Partner</span>
                                        </Link>
                                        <Link to="about/testimonial" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Testimonial</span>
                                        </Link>
                                        <Link to="about/faq" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">FAQ</span>
                                        </Link>
                                    </div>
                                </div>
                                {/* Sub Menu End */}
                            </li>
                            <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                <Link to="/service">Service
                                    <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-sm text-gray-500" />
                                </Link>

                                {/* Sub Menu Start*/}

                                <div className="sub-menu hidden lg:w-[200px] w-[30%] absolute lg:top-14 top-6 lg:left-0 left-[40%] bg-gray-900 shadow-sm shadow-orange-600 text-white rounded-b-md border-t-2 border-t-orange-600 overflow-hidden">
                                    <div className="flex flex-col items-start gap-x-5 text-lg font-semibold">
                                        <Link to="service/Standard" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Standard</span>
                                        </Link>
                                        <Link to="service/Express" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Express</span>
                                        </Link>
                                        <Link to="service/door" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Door To Door</span>
                                        </Link>
                                        <Link to="service/wirehouse" className="w-full text-left py-1 my-1 hover:bg-orange-600 duration-300 border-b border-b-gray-500 hover:border-b-orange-600 hover:translate-x-5 rounded-md">
                                            <span className="px-4">Wirehouse</span>
                                        </Link>
                                    </div>
                                </div>
                                {/* Sub Menu End */}
                            </li>
                            <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                <Link to="/delivery">Delivery</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                <Link to="/contact">Contact</Link>
                            </li>
                            {user?.email &&
                                <li className="hover:text-orange-600 duration-300 relative main-menu lg:py-3 py-1">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-x-3 lg:mb-0 mb-6">
                        <Link to="/register"
                            className="bg-orange-600 px-5 py-2 border border-orange-500 hover:bg-transparent duration-300 rounded-md text-white hover:text-black lg:block hidden">Get Quotes
                        </Link>
                        {user?.email ?
                            <button>
                                <img src={user?.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                            </button>
                            :
                            null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNav;
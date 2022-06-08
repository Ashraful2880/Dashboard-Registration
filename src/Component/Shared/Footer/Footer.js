import React from 'react';
import man from "../../../Assests/Image/Footer-Man.png";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="container mx-auto pt-10 pb-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div>
                        <img src={man} alt="Footer Man" className="w-52 mx-auto" />
                    </div>
                    <div className="mx-auto lg:w-full w-1/2">
                        <h2 className="text-orange-600 text-2xl font-semibold border-b border-gray-500 pb-4 text-left lg:mb-10 mb-4">About Us</h2>
                        <p className="text-left text-gray-300">Courier system is faster, safe and secure delivery service in Bangladesh. Our service was started from 2019 and all of our client happy and satisfied about our service.</p>
                        <p className="text-left text-gray-300 mb-4">The most nice and good thing about our service is our Payment System.</p>
                    </div>
                    <div className="mx-auto text-left text-gray-300">
                        <h4 className="text-orange-600 text-2xl font-semibold border-b border-gray-500 pb-4 text-left lg:mb-10 mb-4">Our Service</h4>
                        <div className="my-3">
                            <Link to="/home" className="pb-3 hover:text-orange-500 duration-200">
                                <FontAwesomeIcon icon={faAngleRight} className="text-sm mr-2" />
                                <span >Logistic Service</span>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="/home" className="pb-3 hover:text-orange-500 duration-200">
                                <FontAwesomeIcon icon={faAngleRight} className="text-sm mr-2" />
                                <span >E commerce Service</span>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="/service/door" className="pb-3 hover:text-orange-500 duration-200">
                                <FontAwesomeIcon icon={faAngleRight} className="text-sm mr-2" />
                                <span >Home Delivery</span>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="/service/express" className="pb-3 hover:text-orange-500 duration-200">
                                <FontAwesomeIcon icon={faAngleRight} className="text-sm mr-2" />
                                <span >Auto Transport</span>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="/service/wirehouse" className="pb-3 hover:text-orange-500 duration-200">
                                <FontAwesomeIcon icon={faAngleRight} className="text-sm mr-2" />
                                <span >Wirehouse Services</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <h4 className="text-orange-600 text-2xl font-semibold border-b border-gray-500 pb-4 text-left lg:mb-10 mb-4">Contact Info</h4>
                        <div className="text-gray-300">
                            <div className="flex my-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-orange-500 mr-3 mt-2" />
                                <div className="text-left">
                                    <p>89/123,Manik Nagar Bishwo Road,</p>
                                    <p>Dhaka 1203</p>
                                </div>
                            </div>
                            <div className="text-left my-3">
                                <FontAwesomeIcon icon={faPhone} className="text-orange-500 mr-3" />
                                <span>Call us: +8809613829867</span>
                            </div>
                            <div className="text-left my-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 mr-3" />
                                <span>info@alijahan.com</span>
                            </div>
                            <div className="text-left my-3">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-orange-500 mr-3" />
                                <span>marketing.alijahan@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 border-t border-t-gray-600">
                <p className="text-center text-white">Copyright &copy; 2022 Ali jahan International. All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;
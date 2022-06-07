import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/UseAuth';

const TopNav = ({ setHide, hide }) => {
    const { user, handleSignOut } = useAuth();
    return (
        <div className="bg-gray-900 py-3">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Left Social Menu Area */}
                    <div className="lg:flex gap-x-5 items-center text-white hidden">
                        <div className="flex gap-x-2">
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 animate-bounce" />
                            <a href="tel:+880123456789">
                                <p>Call us at: +880123456789</p>
                            </a>
                        </div>
                        <a href="https://www.facebook.com" target="blank">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 hover:text-orange-600 hover:scale-125 duration-300" />
                        </a>
                        <a href="https://www.twitter.com" target="blank">
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 hover:text-orange-600 hover:scale-125 duration-300" />
                        </a>
                        <a href="https://www.instragram.com" target="blank">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 hover:text-orange-600 hover:scale-125 duration-300" />
                        </a>
                    </div>
                    {/* Right Menu Area */}
                    <div className="text-white flex justify-between items-center gap-x-5  lg:ml-0 ml-5">
                        {user?.email ?
                            <button onClick={handleSignOut} className="px-5 py-2 border border-orange-500 hover:bg-orange-600 duration-200 rounded-md hidden lg:block">
                                Logout
                            </button> :
                            <Link to="/login" className="px-5 py-2 border border-orange-500 hover:bg-orange-600 duration-200 rounded-md hidden lg:block">
                                Login
                            </Link>
                        }
                        <Link to="/register" className="px-5 py-2 border border-orange-500 hover:bg-orange-600 duration-200 rounded-md">
                            Registration
                        </Link>
                        <Link to="/login" className="bg-orange-600 px-5 py-2 border border-orange-500 hover:bg-transparent duration-200 rounded-md">
                            Download Apps
                        </Link>
                        <button onClick={() => setHide(hide === "hidden" ? "block" : "hidden")} className="lg:hidden block text-xl">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
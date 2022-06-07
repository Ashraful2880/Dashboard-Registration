import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="bg-gray-900 py-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Left Social Menu Area */}
                    <div className="flex gap-x-5 items-center text-white">
                        <div className="flex gap-x-2">
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 animate-bounce" />
                            <p>Call us at: +880123456789</p>
                        </div>
                        <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                    </div>
                    {/* Right Menu Area */}
                    <div className="text-white flex items-center gap-x-5">
                        <Link to="/login" className="px-5 py-2 border border-orange-500 hover:bg-orange-600 duration-200 rounded-md">
                            Login
                        </Link>
                        <Link to="/register" className="px-5 py-2 border border-orange-500 hover:bg-orange-600 duration-200 rounded-md">
                            Registration
                        </Link>
                        <Link to="/login" className="bg-orange-600 px-5 py-2 border border-orange-500 hover:bg-transparent duration-200 rounded-md">
                            Download Apps
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
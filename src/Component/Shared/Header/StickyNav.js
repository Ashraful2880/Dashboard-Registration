import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assests/Image/Logo.png";

const StickyNav = () => {
    return (
        <div className="border-b-2 ">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                        <img src={logo} alt="Main Logo" className="h-7 w-7" />
                        <p className="text-lg font-bold">
                            <span className="text-orange-600">L</span>ogo
                            <span className="text-orange-600">T</span>ext
                        </p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-x-5 text-lg font-semibold">
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/service">Service</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/register">Signup</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="hover:text-orange-600 duration-300">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/register"
                            className="bg-orange-600 px-5 py-2 border border-orange-500 hover:bg-transparent duration-300 rounded-md text-white hover:text-black">Get Quotes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNav;
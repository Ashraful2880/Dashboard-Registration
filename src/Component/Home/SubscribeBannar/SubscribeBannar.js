import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../../Assests/Image/Subscribe-Bannar.jpg";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const SubscribeBannar = () => {
    return (
        <div className="relative">
            <img src={background} alt="Subscribe Background" className="w-full h-full" />
            <div className="absolute top-[20%] left-[15%] text-left">
                <h2 className="text-white lg:text-3xl text-xl font-bold mb-4">GREAT <span className="text-orange-500">COURIER COMPANY</span> </h2>
                <p className="text-white text-xl italic mb-4 lg:block hidden">If you have any Courier need, simply call our 24 hour
                    emergecny number.</p>
                <div className="flex gap-x-4 items-center">
                    <h2 className="text-orange-500 lg:text-3xl text-xl font-bold">
                        <FontAwesomeIcon icon={faPhone} className="animate-bounce text-white" /> +8809613829867
                    </h2>
                    <h4 className="text-2xl text-white font-bold">OR</h4>
                    <Link to="/contact">
                        <button className=" text-lg font-semibold border border-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500 duration-300">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBannar;
import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../../Assests/Image/404.png";

const NotFound = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto flex flex-col justify-center items-center py-20">
                <img src={errorImage} alt="404 Images" className="w-96 mx-auto" />
                <div>
                    <h1 className="text-5xl text-indigo-600 font-bold mb-6">Page Not Found</h1>
                    <p className="text-xl tracking-wide text-gray-600 leading-6 text-left">We Looked Everywhere for this page</p>
                    <p className="text-xl tracking-wide text-gray-600 leading-6 mb-6 text-left">Are you sure the website URL is correct..???</p>
                    <Link to="/home">
                        <button className="border border-green-600 px-4 py-3 rounded-md bg-green-600 text-md text-white font-bold hover:bg-transparent hover:text-green-600 duration-300 mx-auto w-36">Bcak To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "../Dashboard.css"

const DashboardHome = () => {
    return (
        <div className="container mx-auto">
            {/* Dashboard Parcel Information Added */}
            <h2 className="text-left text-gray-600 text-2xl font-bold mb-4 page-Heading">Dashboard</h2>
            <div className="px-20 grid grid-cols-3 gap-6">
                {/* Card-1 */}
                <div className="bg-gradient-to-r from-indigo-800 via-indigo-700  to-indigo-600 h-36 hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">22</p>
                        <p className="text-2xl font-bold">Riders</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-36 hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">11</p>
                        <p className="text-2xl font-bold">Merchant</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 h-36 hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">10</p>
                        <p className="text-2xl font-bold">Users</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-4 */}
                <div className="bg-gradient-to-r from-orange-700 via-[#DE9827]  to-[#DE9827] h-36  hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">05</p>
                        <p className="text-2xl font-bold">Delivery Parcel</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-5 */}
                <div className="bg-gradient-to-r from-emerald-800 via-from-emerald-700  to-emerald-600 h-36  hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">13</p>
                        <p className="text-2xl font-bold">Pickup Parcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-6 */}
                <div className="bg-gradient-to-r from-pink-800 via-pink-700  to-pink-600 h-36  hover:bg-gradient-to-l rounded-md">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 h-10 w-10 p-1 rounded-full">03</p>
                        <p className="text-2xl font-bold">Reject prcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Traditional Parcel Information Here */}
            <h2 className="text-left text-gray-600 text-2xl font-bold my-4 page-Heading">Traditional Parcel Information</h2>
            <div className="px-20 grid grid-cols-3 gap-6">

            </div>
        </div>
    );
};

export default DashboardHome;
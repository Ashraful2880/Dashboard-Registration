import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "../Dashboard.css"

const DashboardHome = () => {
    return (
        <div className="container mx-auto">
            {/* Dashboard Parcel Information Added */}
            <h2 className="text-left text-gray-600 text-2xl font-bold mb-4 lg:ml-0 ml-5">Dashboard</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* Card-1 */}
                <div className="bg-gradient-to-r from-indigo-800 via-indigo-700  to-indigo-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">22</p>
                        <p className="text-2xl font-bold">Riders</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-700  to-gray-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">11</p>
                        <p className="text-2xl font-bold">Merchant</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">10</p>
                        <p className="text-2xl font-bold">Users</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-4 */}
                <div className="bg-gradient-to-r from-orange-700 via-[#DE9827]  to-[#DE9827] h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">05</p>
                        <p className="text-2xl font-bold">Delivery Parcel</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-5 */}
                <div className="bg-gradient-to-r from-emerald-800 via-from-emerald-700  to-emerald-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">13</p>
                        <p className="text-2xl font-bold">Pickup Parcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-6 */}
                <div className="bg-gradient-to-r from-pink-800 via-pink-700  to-pink-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">03</p>
                        <p className="text-2xl font-bold">Reject prcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Traditional Parcel Information Here */}

            <h2 className="text-left text-gray-600 text-2xl font-bold my-4 lg:ml-0 ml-5">Traditional Parcel Information</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* Card-1 */}
                <div className="bg-gradient-to-r from-indigo-800 via-indigo-700  to-indigo-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">102</p>
                        <p className="text-2xl font-bold">Total Delivery Parcel</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-700  to-gray-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">145</p>
                        <p className="text-2xl font-bold">Total Booking Parcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="bg-gradient-to-r from-emerald-800 via-from-emerald-700  to-emerald-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 px-2 py-1 rounded-lg">29090.00 TK</p>
                        <p className="text-2xl font-bold">Total Collection Amount</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-4 */}
                <div className="bg-gradient-to-r from-indigo-800 via-indigo-700  to-indigo-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">102</p>
                        <p className="text-2xl font-bold">Today Delivery Parcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-5 */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-700  to-gray-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-2xl font-bold">73</p>
                        <p className="text-2xl font-bold">Today Booking Parcels</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-6 */}
                <div className="bg-gradient-to-r from-emerald-800 via-from-emerald-700  to-emerald-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 px-2 py-1 rounded-lg">0.00 TK</p>
                        <p className="text-2xl font-bold">Paid to Account</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-7 */}
                <div className="bg-gradient-to-r from-indigo-800 via-indigo-700  to-indigo-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 px-2 py-1 rounded-lg">0.00 TK</p>
                        <p className="text-2xl font-bold">Delivery Collection Amount</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-8 */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-700  to-gray-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 px-2 py-1 rounded-lg">29090.00 TK</p>
                        <p className="text-2xl font-bold">Booking Collection Amount</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Card-9 */}
                <div className="bg-gradient-to-r from-emerald-800 via-from-emerald-700  to-emerald-600 h-36 hover:bg-gradient-to-l rounded-md hover:-translate-y-2 duration-500">
                    <div className="text-white h-full w-full flex flex-col items-center justify-evenly">
                        <p className="text-lg font-bold border-2 px-2 py-1 rounded-lg">29090.00 TK</p>
                        <p className="text-2xl font-bold">Balance Amount</p>
                        <Link to="/" className="hover:text-orange-500 duration-300"> More Info
                            <FontAwesomeIcon icon={faAngleDoubleRight} className=" text-sm ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
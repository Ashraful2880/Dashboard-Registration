import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome';
import logo from "../../../Assests/Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faAnchorLock, faAnkh, faArrowRightArrowLeft, faArrowsToEye, faBars, faBriefcase, faCar, faCarSide, faGear, faHome, faList, faMoneyBill, faMoneyBillTransfer, faMoneyCheckDollar, faTableList, faTruck, faUser, faWarehouse, faEnvelopeOpen, faEnvelopeOpenText, faDollarSign, faBox, faTruckFast, faTruckPickup, faHandHolding } from '@fortawesome/free-solid-svg-icons';
import bell from "../../../Assests/Icon/bell.png";
import mail from "../../../Assests/Icon/open-mail.png";
import { faAirbnb, faAlipay } from '@fortawesome/free-brands-svg-icons';
import Profile from '../Profile/Profile';
import NotFound from '../../NotFound/NotFound';

const Dashboard = () => {
    const [visible, setVisible] = useState("block");
    return (
        <main className="w-full">
            {/* Dashboard Menu Area */}
            <aside className="lg:w-[15%] w-1/2 fixed top-0 left-0 hidden lg:block bg-[#3C4B64] h-screen mobileMenuAnimation" style={{ display: `${visible}` }}>
                {/* Main Logo */}
                <div className="min-h-[5vh] lg:block hidden">
                    <Link to="/home">
                        <img src={logo} alt="Main logo" className="h-12 w-12 mx-auto my-3" />
                    </Link>
                </div>
                {/* Dashboard Menu Here */}
                <div className="bg-[#303C54] h-[85vh] mb-[5vh] overflow-y-scroll " >
                    <div className="text-md lg:pt-4 pt-20">
                        {/* Sigle Menu */}

                        <Link to="/dashboard" className=" text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4 " type="button">
                                <div>
                                    <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Home
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard/profile" className=" text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4 " type="button">
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Profile
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div>
                                    <FontAwesomeIcon icon={faAdjust} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Pickup Parcel
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-6 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pickup Parcel List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Generate Pickup Rider Run</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pickup Rider Run List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Generate Branch Transfer (Trip)</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Delivery Branch Transfer List (Trip)</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div>
                                    <FontAwesomeIcon icon={faArrowsToEye} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Delivery Parcel
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Delivery Parcel List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Generate Delivery Rider Run</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Delivery Rider Run List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Received Transfer List (Trip)</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Delivery Payment Generate</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Delivery Payment List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Return Branch Transfer (Trip)</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Return Branch Transfer List (Trip)</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div>
                                    <FontAwesomeIcon icon={faAnchorLock} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Return Parcel
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFour">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Return Parcel List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Generate Retuen Rider Run</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Return Rider Run List</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Received Return Transfer List (Trip)</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div>
                                    <FontAwesomeIcon icon={faBox} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-2">
                                        Traditional Parcel Booking
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFive">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faTruckFast} className="h-5 w-5 inline mr-4" />
                                    New Parcel Booking
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faList} className="h-5 w-5 inline mr-4" />
                                    Booking Parcel List
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faTruckPickup} className="h-5 w-5 inline mr-4" />
                                    Booking Parcel Assign Vehicle
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faList} className="h-5 w-5 inline mr-4" />
                                    Booking Parcel Receive List
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faHandHolding} className="h-5 w-5 inline mr-4" />
                                    Receive Booking Parcel
                                </Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <div>
                                    <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-2">
                                        Traditional Parcel Payment
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseSix">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faMoneyBill} className="h-5 w-5 inline mr-4" />
                                    Parcel Payment List
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faMoneyBillTransfer} className="h-5 w-5 inline mr-4" />
                                    Payment Forward to Accounts
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} className="h-5 w-5 inline mr-4" />
                                    Parcel Payment Report
                                </Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <div>
                                    <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Traditional Parcel Setting
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseSeven">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faTruck} className="h-5 w-5 inline mr-4" />
                                    Vehicle
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faWarehouse} className="h-5 w-5 inline mr-4" />
                                    Warehouse
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faTableList} className="h-5 w-5 inline mr-4" />
                                    Item Category
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">
                                    <FontAwesomeIcon icon={faList} className="h-5 w-5 inline mr-4" />
                                    Item
                                </Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className=" text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4 " type="button">
                                <div>
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Order Tracking
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard" className=" text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4 " type="button">
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Marchent List
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard" className=" text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4 " type="button">
                                <div>
                                    <FontAwesomeIcon icon={faCarSide} className="w-5 h-5" />
                                </div>
                                <div className="ml-4">
                                    Rider list
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>
            {/* Dashboard Header Area */}
            <div className={`${visible === "block" ? "w-[85%] ml-[15%]" : "w-[1/2] ml-0"} border`}>
                <div className={`border-b-2 h-16 w-full flex flex-col justify-center items-start px-5 fixed top-0 bg-white ${visible === "block" && "lg:left-[15%] left-0"}`}>
                    <div className={`flex justify-between items-center ${visible === "block" ? "lg:w-[85%] w-full" : "w-full"}`}>
                        <div className="flex lg:gap-x-5 gap-x-2 text-gray-400 items-center">
                            <button
                                onClick={() => setVisible(visible === "block" ? "none" : "block")}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <Link to="/home" className="lg:hidden block">
                                <img src={logo} alt="Main logo" className="h-8 w-8" />
                            </Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/dashboard/users">Users</Link>
                            <Link to="/dashboard/settings">Settings</Link>
                        </div>
                        <div className="flex lg:gap-x-5 gap-x-2 text-gray-400 items-center">
                            <Link to="/dashboard">
                                <img src={bell} alt="Bell Icon" className="w-5 h-5" />
                            </Link>
                            <Link to="/dashboard/users">
                                <img src={mail} alt="Main Icon" className="w-5 h-5" />
                            </Link>
                            <Link to="/dashboard/settings">
                                <img src="https://avatars.githubusercontent.com/u/86690202?v=4" alt="User icon" className="w-10 h-10 border rounded-full" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Dashboard Right Content Area */}
                <div className="h-[100vh] mt-20">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </main >
    );
};

export default Dashboard;
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome';
import logo from "../../../Assests/Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAdjust, faAnchorLock, faAnkh, faArchive, faArrowsToEye, faBars, faHome, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Users from './../Users/Users';
import bell from "../../../Assests/Icon/bell.png";
import mail from "../../../Assests/Icon/open-mail.png";
import { faAirbnb, faAlipay, faAvianex } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
    const [visible, setVisible] = useState("block");
    return (
        <main className="w-full">
            {/* Dashboard Menu Area */}
            <aside className="lg:w-[15%] w-1/2 fixed top-0 left-0 hidden lg:block bg-[#303C54] h-screen" style={{ display: `${visible}` }}>
                {/* Main Logo */}
                <div className="min-h-[5vh] lg:block hidden">
                    <Link to="/home">
                        <img src={logo} alt="Main logo" className="h-12 w-12 mx-auto my-3" />
                    </Link>
                </div>
                {/* Dashboard Menu Here */}
                <div className="bg-[#3C4B64] h-[85vh] mb-[5vh] overflow-y-scroll " >
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
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <div>
                                    <FontAwesomeIcon icon={faAddressCard} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseOne">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div>
                                    <FontAwesomeIcon icon={faAdjust} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div>
                                    <FontAwesomeIcon icon={faArrowsToEye} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div>
                                    <FontAwesomeIcon icon={faAnchorLock} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFour">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div>
                                    <FontAwesomeIcon icon={faAirbnb} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFive">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <div>
                                    <FontAwesomeIcon icon={faAlipay} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseSix">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <div>
                                    <FontAwesomeIcon icon={faAnkh} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseSeven">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <div>
                                    <FontAwesomeIcon icon={faArchive} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseEight">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Sub Menu</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>
                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                <div>
                                    <FontAwesomeIcon icon={faAvianex} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseNine">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
                            </div>
                        </Link>

                        <Link to="/dashboard" className="text-gray-300 hover:text-white accordion accordion-item" id="accordionExample">
                            <div className="flex items-center hover:bg-[#4a576c] px-5 py-4  accordion-button collapsed relative transition" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                <div>
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="ml-4">
                                        Base
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div className="flex flex-col gap-y-4 text-left lg:lg:pl-10 pl-3 mt-4 text-gray-300 hover:text-[white] accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTen">
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Accordion</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Breadcrumb</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Cards</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Carousel</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Collaps</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">List Group</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">News & Tabs</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Pagination</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Placeholders</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Popovers</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Progress</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Scrollspy</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Spinner</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tables</Link>
                                <Link
                                    className="text-gray-300 hover:text-white"
                                    to="/dashboard">Tooltips</Link>
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
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </main >
    );
};

export default Dashboard;
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome';
import logo from "../../../Assests/Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Users from './../Users/Users';

const Dashboard = () => {
    const [visible, setVisible] = useState("block");

    return (
        <div>
            <main className="w-full">
                <aside className="lg:w-[15%] w-1/2 fixed top-0 left-0 hidden lg:block bg-[#303C54] h-screen" style={{ display: `${visible}` }}>
                    <div className="min-h-[5vh] lg:block hidden">
                        <Link to="/home">
                            <img src={logo} alt="Main logo" className="h-12 w-12 mx-auto my-3" />

                        </Link>
                    </div>
                    <div className="bg-[#3C4B64] h-[85vh] mb-[5vh]">
                        Menu
                    </div>
                </aside>
                <div className={`${visible === "block" ? "w-[85%] ml-[15%]" : "w-[1/2] ml-0"} border`}>
                    <div className={`border-b-2 h-16 w-full flex flex-col justify-center items-start px-5 fixed top-0 bg-white ${visible === "block" && "lg:left-[15%] left-0"}`}>
                        <div className="flex gap-x-10 text-gray-400">
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
                    </div>
                    <div className="h-[100vh]">
                        <Routes>
                            <Route path="/" element={<DashboardHome />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
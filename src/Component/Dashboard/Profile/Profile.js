import React from 'react';
import { useState } from 'react';
import BranchUserInfo from './BranchUserInfo';
import RiderList from '../RiderList/RiderList';

const Profile = () => {
    const [active, setActive] = useState("Branch-User");

    return (
        <div className="container mx-auto">
            <h2 className="text-left text-gray-600 text-2xl font-bold lg:mb-0 mb-4 lg:ml-0 ml-5">Profile</h2>
            <div className="grid grid-cols-2 lg:gap-x-6 gap-x-2 mb-2 lg:w-[60%] lg:mx-auto lg:px-24 px-0 text-[13px] lg:text-md mx-4">
                <button
                    onClick={() => setActive("Branch-User")}
                    className={`font-semibold uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-green-700 hover:text-white ${active === "Branch-User" && `bg-green-700 text-green-700`} w-full block shadow-xl border border-green-500 duration-500`}>
                    Branch User
                </button>
                <button
                    onClick={() => setActive("Riders List")}
                    className={`font-semibold uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-green-700 hover:text-white ${active === "Riders List" && `bg-green-700 text-green-700`} w-full block shadow-xl border border-green-500 duration-500`}>
                    Riders List
                </button>
            </div>
            <div className="lg:mt-5 mt-0">
                {active === "Branch-User" && <BranchUserInfo />}
                {active === "Riders List" && <RiderList />}
            </div>
        </div>
    );
};

export default Profile;
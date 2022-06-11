import React from 'react';

const BranchUserInfo = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-6">Branch User Information</h3>
            <div className="border lg:w-1/2 w-full mx-auto">
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Name</h4>
                    <h4 className="lg:w-1/2 w-full">Himal Majumder</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Branch</h4>
                    <h4 className="lg:w-1/2 w-full">Dhaka Tejgoan Branch</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Email</h4>
                    <h4 className="lg:w-1/2 w-full">dhaka@branch.com</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Contact Number</h4>
                    <h4 className="lg:w-1/2 w-full">01918183822</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Address</h4>
                    <h4 className="lg:w-1/2 w-full">Dhaka. Cumilla</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">District</h4>
                    <h4 className="lg:w-1/2 w-full">Dhaka</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Upazila/Thana</h4>
                    <h4 className="lg:w-1/2 w-full">Dhamrai</h4>
                </div>
                <div className="flex justify-between items-center text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Area</h4>
                    <h4 className="lg:w-1/2 w-full">Dhamrai</h4>
                </div>
            </div>
        </div>
    );
};

export default BranchUserInfo;
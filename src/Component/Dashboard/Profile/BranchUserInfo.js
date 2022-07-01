import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import BaseURL from './../../../Hooks/BaseUrl';

const BranchUserInfo = () => {
    const [branchUsers, setBranchusers] = useState([]);
    const { user } = useAuth();
    const { baseUrl } = BaseURL();

    useEffect(() => {
        fetch(`${baseUrl}/singleuser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBranchusers(data))
    }, [baseUrl, user?.email])

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-6">Branch User Information</h3>
            <div className="border lg:w-1/2 w-full mx-auto">
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Name</h4>
                    <h4 className="lg:w-1/2 w-full">{branchUsers?.name}</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Branch</h4>
                    <h4 className="lg:w-1/2 w-full">{branchUsers?.hubName}</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Email</h4>
                    <h4 className="lg:w-1/2 w-full">{branchUsers?.email}</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Contact Number</h4>
                    <h4 className="lg:w-1/2 w-full">{branchUsers?.number}</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">Address</h4>
                    <h4 className="lg:w-1/2 w-full">{branchUsers?.address}</h4>
                </div>
                <div className="flex justify-between items-center border-b text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="border-r-2 lg:w-1/2 w-full font-semibold">District</h4>
                    <h4 className="lg:w-1/2 w-full">Dhaka</h4>
                </div>
                <div className="flex justify-between items-center text-lg py-1 hover:shadow-lg duration-300">
                    <h4 className="lg:w-1/2 w-full font-semibold">Area</h4>
                    <h4 className="lg:w-1/2 w-full border-l-2">
                        {branchUsers?.area?.map(areaName => <p key={areaName?.label}>{areaName?.label}</p>)}</h4>
                </div>
            </div>
        </div>
    );
};

export default BranchUserInfo;
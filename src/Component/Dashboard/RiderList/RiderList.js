import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const RiderList = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        fetch("/RiderListData.json")
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [])

    return (
        <div className="container mx-auto pb-10">
            <h3 className="text-2xl font-bold mb-6">Rider List</h3>
            <table className="w-full h-screen mx-auto cursor-pointer overflow-x-scroll">
                <thead>
                    <tr className="text-center text-white">
                        <th className="bg-green-800 lg:border-x-8 border-x-2 border-white rounded-lg py-3 px-4">#</th>
                        <th className="bg-green-800 lg:border-x-8 border-x-2 border-white rounded-lg py-3 px-4">Name</th>
                        <th className="bg-green-800 lg:border-x-8 border-x-2 border-white rounded-lg py-3 px-4">Address</th>
                        <th className="bg-green-800 lg:border-x-8 border-x-2 border-white rounded-lg py-3 px-4">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider) => (
                        <tr className="text-center border shadow-xl hover:shadow duration-300" key={rider.sl}>
                            <td className="border border-gray-300 py-3 px-4">
                                {rider?.sl}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {rider?.name}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {rider?.address}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {rider?.contact}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiderList;
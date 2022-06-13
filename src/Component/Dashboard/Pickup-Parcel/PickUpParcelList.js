import React from 'react';
import "../Dashboard.css";
import { useState, useEffect } from 'react';

const PickUpParcelList = () => {
    const [parcelLists, setParcelLists] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setParcelLists(data))
    }, [])

    console.log(parcelLists);

    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left ll">Pickup Parcel List</h3>
            <div className="lg:flex block justify-between items-center my-2 mx-10">
                <div>
                    Show <span>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2">
                            <option selected>10</option>
                            <option defaultValue="25">25</option>
                            <option defaultValue="50">50</option>
                            <option defaultValue="100">100</option>
                        </select>
                    </span> Entries
                </div>
                <div className="lg:mt-0 mt-2">
                    <label htmlFor="text" className="font-semibold mr-2 lg:inline-block hidden">Search </label>
                    <input type="text" placeholder="Search Here" className="border px-5 py-2 rounded-md focus:outline-0 focus:border focus:border-green-600 duration-300 border-gray-300" />
                </div>
            </div>
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-x divide-gray-200">
                            <thead className="bg-green-800 text-white text-center text-sm font-semibold uppercase">
                                <tr>
                                    <th className="px-6 py-3 tracking-wider border">
                                        SL
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Invoice
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Marchant Name
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Marchant Contact
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Marchant Address
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        District
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Charge
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 uppercase tracking-wider border">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                {parcelLists.map((parcel) => (
                                    <tr key={parcel.sl} className="hover:bg-gray-100 duration-200">
                                        <td className="px-2 py-3 border">
                                            {parcel?.sl}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.invoice}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.marchantName}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.contactNumber}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.address}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.district}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.charge}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            {parcel?.status}
                                        </td>
                                        <td className="px-2 py-3 border">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">Action Icon Here</div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PickUpParcelList;
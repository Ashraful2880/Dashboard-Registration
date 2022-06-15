import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faPen, faSearch, faRefresh, faEye, faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DeliveryRiderRunList = () => {
    const [showData, setShowData] = useState(10);
    const [deliveryRunLists, setDeliveryRunLists] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryRunLists(data))
    }, [])

    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Delivery Rider Run List</h3>
            <div className="border border-gray-200 pb-5 rounded-md shadow-xl">
                {/* Import And Generate Section Design Here */}
                <div className="lg:flex block justify-between items-center border-b py-3 px-10">
                    <h4 className="text-md font-bold">Delivery Rider Run List</h4>
                    <div className="lg:my-0 my-2">
                        <Link to="/dashboard/generateDeliveryRiderRun" className="bg-green-700 hover:bg-green-800 duration-300 py-2 px-4 rounded-md text-white text-md font-semibold mx-2">
                            <FontAwesomeIcon icon={faPen} className="text-white mr-1" /> Generate Delivery Rider Run
                        </Link>
                    </div>
                </div>

                {/* Riders Select Options Here */}

                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-4 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left">Rider:</h5>
                        <select
                            onChange={(e) => setShowData(e.target.value)}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Rider</option>
                            <option defaultValue="Adnan Mahmud">Adnan Mahmud</option>
                            <option defaultValue="Sheikh Forid">Sheikh Forid</option>
                            <option defaultValue="Safikul Islam">Safikul Islam</option>
                            <option defaultValue="Md Saiful Islam">Md Saiful Islam</option>
                            <option defaultValue="Omar faruk">Omar faruk</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Run Status:</h5>
                        <select
                            onChange={(e) => setShowData(e.target.value)}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Run Status</option>
                            <option defaultValue="Run Create">Run Create</option>
                            <option defaultValue="Run Start">Run Start</option>
                            <option defaultValue="Run Cancel">Run Cancel</option>
                            <option defaultValue="Run Complete">Run Complete</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">From Date:</h5>
                        <input type="date" name="date" className="border border-gray-300 px-5 py-1 rounded-md w-full" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">To Date:</h5>
                        <input type="date" name="date" className="border border-gray-300 px-5 py-1 rounded-md w-full" />
                    </div>
                    <div className="flex items-end justify-end w-full lg:my-0 my-2">
                        <button className="bg-green-700 hover:bg-green-900 duration-300 px-5 py-1 rounded-md mx-1">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 duration-300 px-5 py-1 rounded-md mx-">
                            <FontAwesomeIcon icon={faRefresh} className="text-white" />
                        </button>
                    </div>
                </div>
                {/* Table Search And PAgination Area Here */}
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <div>
                        Show <span>
                            <select
                                onChange={(e) => setShowData(e.target.value)}
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
                        <input
                            type="search"
                            placeholder="Search Here"
                            className="border px-5 py-2 rounded-md focus:outline-0 focus:border focus:border-green-600 duration-300 border-gray-300" />
                    </div>
                </div>
                {/* Main Table Design Here */}
                <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden rounded-lg">
                            <table className="min-w-full divide-y divide-x divide-gray-200">
                                <thead className="bg-green-800 text-white text-center  text-xs font-semibold uppercase">
                                    <tr>
                                        <th className="px-6 py-3 tracking-wider border">
                                            SL
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Consignment
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Rider Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Rider Address
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Create Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Complete Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Run Parcel
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Complete Parcel
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
                                    {deliveryRunLists.slice(0, showData).map((parcel) => (
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
                                                {parcel?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                14-Jun-2022
                                            </td>
                                            <td className="px-2 py-3 border">

                                            </td>
                                            <td className="px-2 py-3 border">
                                                1
                                            </td>
                                            <td className="px-2 py-3 border">
                                                0
                                            </td>
                                            <td className="px-2 py-3 text-sm text-green-700 font-bold border">
                                                Run Start
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <div className="flex justify-evenly items-center">
                                                    <button >
                                                        <FontAwesomeIcon icon={faEye} className="h-4 w-4 bg-gray-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button>
                                                        <FontAwesomeIcon icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button>
                                                        <FontAwesomeIcon icon={faCheck} className="h-4 w-4 bg-cyan-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button>
                                                        <FontAwesomeIcon icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <p className="border border-gray-300 px-4 py-1 rounded-md">Showing <span className="font-semibold">1</span> to <span className="font-semibold">{deliveryRunLists.slice(0, showData).length}</span> of <span className="font-semibold">{deliveryRunLists?.length}</span> Entries</p>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryRiderRunList;
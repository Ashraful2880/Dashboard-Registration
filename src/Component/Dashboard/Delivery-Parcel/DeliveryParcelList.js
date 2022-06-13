import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faEye, faPenToSquare, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DeliveryParcelList = () => {
    const [showData, setShowData] = useState(10);
    const [deliveriLists, setDeliveryLists] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryLists(data))
    }, [])

    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Delivery Parcel List</h3>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                <div className="flex justify-between items-center mx-10 mb-5">
                    <h3 className="font-bold text-lg lg:block hidden">Delivery Parcels List</h3>
                    <div>
                        <Link to="/home" className="bg-green-800 border border-green-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold">
                            <FontAwesomeIcon icon={faPen} className="mx-2" />
                            Generate Delivery Rider Run
                        </Link>
                    </div>
                </div>
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
                <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden rounded-lg">
                            <table className="min-w-full divide-y divide-x divide-gray-200">
                                <thead className="bg-green-800 text-white text-center lg:text-sm text-xs font-semibold uppercase">
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
                                    {deliveriLists.slice(0, showData).map((deliveryParcel) => (
                                        <tr key={deliveryParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.sl}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.marchantName}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.district}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.charge}
                                            </td>
                                            <td className="px-2 py-3 text-sm text-green-700 font-bold border">
                                                {deliveryParcel?.status}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <div className="flex justify-evenly items-center">
                                                    <button>
                                                        <FontAwesomeIcon icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button >
                                                        <FontAwesomeIcon icon={faEye} className="h-4 w-4 bg-gray-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button>
                                                        <FontAwesomeIcon icon={faPenToSquare} className="h-4 w-4 bg-cyan-600 text-white px-2 py-1 rounded-sm" />
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
                    <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{deliveriLists.slice(0, showData).length}</span> of <span className="font-semibold">{deliveriLists?.length}</span> Entries</p>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
            {/* <div>
                <ViewDetailsModal display={display} setDisplay={setDisplay} query={query} />
            </div> */}
        </div>
    );
};

export default DeliveryParcelList;
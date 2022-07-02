import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faPrint, faEye, faPenToSquare, faFileExcel, faFilePdf, faRefresh, faSearch } from '@fortawesome/free-solid-svg-icons';

const BookingParcelList = () => {
    const [showData, setShowData] = useState(10);
    const [deliveriLists, setDeliveryLists] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryLists(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Booking Parcel List</h3>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                <div className="flex justify-between items-center mx-10 mb-5">
                    <h3 className="font-bold text-lg lg:block hidden">Booking Parcel List</h3>
                    <div>
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold mx-2">
                            <FontAwesomeIcon icon={faFileExcel} className="mx-2" />
                            Download Excel
                        </button>
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold mx-2">
                            <FontAwesomeIcon icon={faFilePdf} className="mx-2" />
                            Download PDF
                        </button>
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold mx-2">
                            <FontAwesomeIcon icon={faPrint} className="mx-2" />
                            Print
                        </button>
                        <Link to="/dashboard/parcelBooking" className="bg-green-800 border border-green-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold mx-2">
                            <FontAwesomeIcon icon={faPen} className="mx-2" />
                            Add New Booking
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-4 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left">Booking Type:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Booking Type</option>
                            <option defaultValue="Cash">Cash</option>
                            <option defaultValue="To Pay">To Pay</option>
                            <option defaultValue="Credit">Credit</option>
                            <option defaultValue="Condition">Condition</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Delivery Type:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Delivery Type</option>
                            <option defaultValue="OD">OD</option>
                            <option defaultValue="TOD">TOD</option>
                            <option defaultValue="HD">HD</option>
                            <option defaultValue="THD">THD</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Status:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Status</option>
                            <option defaultValue="Parcel Reject">Parcel Reject</option>
                            <option defaultValue="Confirmed Booking">Confirmed Booking</option>
                            <option defaultValue="Vehicle Assigned">Vehicle Assigned</option>
                            <option defaultValue="Warehouse Assigned">Warehouse Assigned</option>
                            <option defaultValue="Warehouse Received Parcel">Warehouse Received Parcel</option>
                            <option defaultValue="Warehouse To Warehouse Assigned">Warehouse To Warehouse Assigned</option>
                            <option defaultValue="On The Way To Destination">On The Way To Destination</option>
                            <option defaultValue="Branch Received">Branch Received</option>
                            <option defaultValue="Delivery Complete">Delivery Complete</option>
                            <option defaultValue="Delivery Return">Delivery Return</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Status:</h5>
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
                                <thead className="bg-green-800 text-white text-center text-xs font-semibold uppercase">
                                    <tr>
                                        <th className="px-6 py-3 tracking-wider border">
                                            SL
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            C/N No
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Booking Type
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Sender Contact
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Receiver Contact
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Receiver Branch
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Net Amount
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Delivery Type
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Status
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
                                                2021-06-05
                                            </td>
                                            <td className="px-2 py-3 border">
                                                METTROMYHA20210605-00023
                                            </td>
                                            <td className="px-2 py-3 border">
                                                To Pay
                                            </td>
                                            <td className="px-2 py-3 border">
                                                01700000004
                                            </td>
                                            <td className="px-2 py-3 border">
                                                01900000005
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.district}
                                            </td>
                                            <td className="px-2 py-3 text-sm border">
                                                21863.00
                                            </td>
                                            <td className="px-2 py-3 text-sm border">
                                                HD
                                            </td>
                                            <td className="px-2 py-3 border text-green-700 font-bold">
                                                Confirmed Booking
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <div className="border border-green-700 px-4 py-2 rounded-md">
                        <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{deliveriLists.slice(0, showData).length}</span> of <span className="font-semibold">{deliveriLists?.length}</span> Entries</p>
                    </div>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingParcelList;
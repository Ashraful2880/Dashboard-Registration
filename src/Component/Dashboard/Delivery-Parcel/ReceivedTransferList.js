import React, { useEffect, useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReceivedTransferList = () => {
    const [showData, setShowData] = useState(10);
    const [receivedBranchTransferLists, setReceivedBranchTransferLists] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setReceivedBranchTransferLists(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Received Branch Transfer List</h3>
            <div className="border border-gray-200 pb-5 rounded-md shadow-xl">
                <h4 className="text-md font-bold text-left px-10 py-2 border-b">Received Branch Transfer List</h4>
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
                                            Branch Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Branch Address
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Branch Contact
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Create Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Received Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Transfer Parcel
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Received Parcel
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {receivedBranchTransferLists.slice(0, showData).map((parcel) => (
                                        <tr key={parcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {parcel?.sl}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.district}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                10-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                15-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                72
                                            </td>
                                            <td className="px-2 py-3 text-sm text-green-700 font-bold border">
                                                60
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <button >
                                                    <FontAwesomeIcon icon={faEye} className="h-4 w-4 bg-gray-600 text-white px-2 py-1 rounded-md" />
                                                </button>
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
                        <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{receivedBranchTransferLists.slice(0, showData).length}</span> of <span className="font-semibold">{receivedBranchTransferLists?.length}</span> Entries</p>
                    </div>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceivedTransferList;
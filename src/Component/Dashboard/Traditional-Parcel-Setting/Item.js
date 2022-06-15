import React, { useEffect, useState } from 'react';

const Item = () => {
    const [showData, setShowData] = useState(10);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Item</h3>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                {/* Generate Return Branch Transfer Section Design Here */}
                <h3 className="font-bold text-lg text-left px-10">Item List</h3>
                {/* Top Pagination and Search Area Design Here */}
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
                {/* Main Table Area Here */}
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
                                            Item Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Item Category
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Unit
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            OD Rate
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            HD Rate
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Transit OD
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Transit HD
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {items.slice(0, showData).map((deliveryParcel) => (
                                        <tr key={deliveryParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.sl}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Side Glass
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Vehicle Parts
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Pcs
                                            </td>
                                            <td className="px-2 py-3 border">
                                                250.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                0.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                350.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                0.00
                                            </td>
                                            <td className="px-2 py-3 border font-bold text-green-600">
                                                Active
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{items.slice(0, showData).length}</span> of <span className="font-semibold">{items?.length}</span> Entries</p>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
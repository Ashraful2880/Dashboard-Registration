import React from 'react';

const PickUpParcelListPDF = () => {
    return (
        <div className="container h-screen mx-auto">
            <div className="mb-8">
                <div className="mt-5 grid grid-cols-3">
                    <div className="border border-gray-400 rounded-md flex flex-col justify-evenly px-5 font-semibold w-2/3">
                        <h3>Merchant Name: Md Iqbal Hossain</h3>
                        <h3>Contact Number: 01715224754</h3>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">Alijahan Courier Service</h1>
                        <h3 className="text-lg">89/123 Maniknagar,R.K Mission Road, Dhaka-1203</h3>
                        <h3 className="text-lg">Email: alijahancourier@gmail.com</h3>
                        <a className="text-lg hover:text-green-600 duration-300 font-semibold" href="https://www.alijahan.com" target="blank">www.alijahan.com</a>
                    </div>
                    <div className="border border-gray-400 rounded-md flex flex-col justify-evenly px-5 font-semibold text-left pl-10">
                        <h3>Order List :1</h3>
                        <h3>Total Payment: 0</h3>
                        <h3>Invoice Id :61e04b</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                <div className="py-2 align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden rounded-lg">
                        <table className="min-w-full divide-y divide-x divide-gray-200">
                            <thead className="bg-gray-700 text-white text-center text-xs font-semibold uppercase">
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
                                        Marchant Email
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Charge
                                    </th>
                                    <th className="px-6 py-3 tracking-wider border">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                <tr className="hover:bg-gray-100 duration-200">
                                    <td className="px-2 py-3 border">
                                        01
                                    </td>
                                    <td className="px-2 py-3 border">
                                        fbvhb02485
                                    </td>
                                    <td className="px-2 py-3 border">
                                        H M Yeaqub
                                    </td>
                                    <td className="px-2 py-3 border">
                                        01610501944
                                    </td>
                                    <td className="px-2 py-3 border">
                                        Maniknagor
                                    </td>
                                    <td className="px-2 py-3 border">
                                        hmyeaqub64813@gmail.com
                                    </td>
                                    <td className="px-2 py-3 border">
                                        990 Tk
                                    </td>
                                    <td className="px-2 py-3 border">
                                        Accepted
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p className="text-left italic text-gray-500 mt-4">This is an Auto Generated Report of <span className="text-green-700 font-semibold">Alijahan Courier</span></p>
        </div>
    );
};

export default PickUpParcelListPDF;
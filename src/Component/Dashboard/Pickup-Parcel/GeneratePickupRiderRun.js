import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const GeneratePickupRiderRun = () => {
    const [runParcels, setRunParcels] = useState([]);
    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setRunParcels(data))
    }, [])
    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left text-gray-500">Generate Pickup Rider Run</h3>
            <div className="lg:flex block justify-between w-full">
                <form className="border border-gray-200 py-5 rounded-md shadow-md lg:w-1/2 w-full lg:px-10 px-6 lg:mx-6 mx-0">
                    <h2 className="text-green-700 text-xl font-bold text-left lg:mb-10 mb-2">Pickup Run</h2>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider</p>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none rounded-md px-2 py-1 mx-2 w-1/2">
                            <option selected>Select Rider</option>
                            <option defaultValue="Omar Faruk">Omar Faruk</option>
                            <option defaultValue="Mr. Tahmidur Rahman">Mr. Tahmidur Rahman</option>
                            <option defaultValue="Istiyaq Hossain Chowdhury">Istiyaq Hossain Chowdhury</option>
                            <option defaultValue="Md.Ibrahim Khalil Ullah">Md.Ibrahim Khalil Ullah</option>
                            <option defaultValue="Tafim Hossain">Tafim Hossain</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Date</p>
                        <input type="date" name="date" />
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Name</p>
                        <p>Md. Tahmidur Rahman</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Contact Number</p>
                        <p>01810007652</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Address</p>
                        <p>Mirpur</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Total Run Parcel</p>
                        <p>0</p>
                    </div>
                    <textarea className="border w-full px-5 focus:outline-none resize-none" name="run note" cols="30" rows="4" placeholder="Pickup rider Run Note"></textarea>
                    <div>
                        <input className="text-lg border rounded-md mt-4 border-green-700 mx-4 py-1.5 px-5 bg-green-700 text-white hover:text-green-800 hover:bg-transparent duration-300" type="submit" value="Generate" />
                        <input className="text-lg border rounded-md mt-4 border-red-600 mx-4 py-1.5 px-5 bg-red-600 text-white hover:text-red-600 hover:bg-transparent duration-300" type="reset" value="Reset" />
                    </div>
                </form>
                <div className="lg:w-1/2 w-full border border-gray-200 py-5 rounded-md shadow-md lg:px-10 px-6 lg:mx-6 mx-0">
                    <form>
                        <div>
                            <input type="text" name="text" className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600" placeholder="Enter Parcel Invoice Barcode" />
                        </div>
                        <div>
                            <input type="text" name="text" className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600" placeholder="Enter Marchant Order ID" />
                        </div>
                        <input className="bg-green-700 border border-green-700 hover:bg-transparent text-white hover:text-green-700 duration-500 py-1.5 px-5 rounded-md w-full" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            {/* Table Area Here */}
            <div className="border border-gray-200 py-5 rounded-md shadow-xl my-10">
                <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden rounded-lg">
                            <table className="min-w-full divide-y divide-x divide-gray-200">
                                <thead className="bg-green-800 text-white text-center text-xs font-semibold uppercase">
                                    <tr>
                                        <th className="px-6 py-3 tracking-wider border">
                                            <input type="checkbox" name="check" /> All
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Invoice
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Marchant Order
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Marchant Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Merchant Number
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Merchant Address
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Customeer Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Customer Number
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {runParcels.map((runParcel) => (
                                        <tr key={runParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                <input type="checkbox" name="check" />
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchantName}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.district}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.charge}
                                            </td>
                                            <td className="px-2 py-3 text-sm text-green-700 font-bold border">
                                                {runParcel?.status}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <div className="flex justify-evenly items-center">
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
            </div>
        </div>
    );
};

export default GeneratePickupRiderRun;
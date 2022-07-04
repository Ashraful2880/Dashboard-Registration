import React from 'react';
import "../Dashboard.css";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faPrint } from '@fortawesome/free-solid-svg-icons';
import ReactToPrint from 'react-to-print';
import ViewDetailsModal from './ViewDetailsModal';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';

const PickUpParcelList = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let area = [
        {
            label: "Dhaka (Jatrabari)"
        },
        {
            label: "Dhaka (Khilgaon)"
        },
        {
            label: "Dhaka (Fuji Trade Center\t)"
        }
    ]

    const { user } = useAuth();
    const { baseUrl } = BaseURL();
    const [showData, setShowData] = useState(10);
    const [parcelLists, setParcelLists] = useState([]);
    const [display, setDisplay] = useState("none");
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(`${baseUrl}/huborders?email=${user.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(area)
        })
            .then(res => res.json())
            .then(data => setParcelLists(data))
            .catch(error => console.log(error))
    }, [user.email])

    const viewModal = (id) => {
        setDisplay("block")
        setQuery(id)
    }
    let ref = React.createRef();

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Pickup Parcel List</h3>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
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
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {parcelLists.slice(0, showData).map((parcel, index) => (
                                        <tr key={parcel._id} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border" ref={(el) => (ref = el)}>
                                                {index + 1}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.marchentInfo?.name}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.marchentInfo?.number}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.marchentInfo?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.marchentInfo?.email}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {parcel?.orderSummaray?.payAbleAmout} Tk
                                            </td>
                                            <td className="px-2 py-3 text-sm font-bold border">
                                                {parcel?.orderSummaray?.status === "Accepted" &&
                                                    <span className="text-blue-700">
                                                        {parcel?.orderSummaray?.status}
                                                    </span>}
                                                {parcel?.orderSummaray?.status === "Delivered" &&
                                                    <span className="text-green-600">
                                                        {parcel?.orderSummaray?.status}
                                                    </span>}
                                                {parcel?.orderSummaray?.status === "Pending" &&
                                                    <span className="text-orange-500">
                                                        {parcel?.orderSummaray?.status}
                                                    </span>}
                                                {parcel?.orderSummaray?.status === "Returned" && <span className="text-red-500">
                                                    {parcel?.orderSummaray?.status}
                                                </span>}
                                                {parcel?.orderSummaray?.status === "Hold" && <span className="text-gray-500">
                                                    {parcel?.orderSummaray?.status}
                                                </span>}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <div className="flex justify-evenly items-center">
                                                    <ReactToPrint
                                                        trigger={() => {
                                                            return (
                                                                <button>
                                                                    <FontAwesomeIcon icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                                </button>
                                                            )
                                                        }}
                                                        // content={() => <PickUpParcelListPDF />}
                                                        content={() => ref}
                                                        documentTitle="New Document"
                                                        pageStyle="print"
                                                    />
                                                    <button onClick={() => viewModal(parcel?.sl)}>
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
                    <div className="border border-green-700 px-4 py-2 rounded-md">
                        <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{parcelLists.slice(0, showData).length}</span> of <span className="font-semibold">{parcelLists?.length}</span> Entries</p>
                    </div>
                    <div>
                        pagination Here
                    </div>
                </div>
            </div>
            <div>
                <ViewDetailsModal display={display} setDisplay={setDisplay} query={query} />
            </div>
        </div>
    );
};

export default PickUpParcelList;
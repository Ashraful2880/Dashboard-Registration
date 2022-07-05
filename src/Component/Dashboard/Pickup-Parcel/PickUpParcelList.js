import React, { useRef } from 'react';
import "../Dashboard.css";
import logo from "../../../Assests/Image/Logo.png";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faPrint } from '@fortawesome/free-solid-svg-icons';
import ViewDetailsModal from './ViewDetailsModal';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';
import ReactToPrint from 'react-to-print';

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
    const [printData, setPrintData] = useState();

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

    let ref = useRef();
    return (
        <>
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
                                                <td className="px-2 py-3 border">
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
                                                            trigger={() =>
                                                                <button>
                                                                    <FontAwesomeIcon
                                                                        onClick={() => setPrintData(parcel)}
                                                                        icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                                </button>
                                                            }
                                                            content={() => ref}
                                                            documentTitle="Document of Alijahan Courier"
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
            {/* Print Design Area Here */}
            <div className="">
                <div className="container h-auto mx-auto min-w-fit" ref={(el) => (ref = el)}>
                    <div className="mb-8">
                        <div className="mt-5 flex justify-between">
                            <div className="border border-gray-400 rounded-md flex flex-col justify-evenly px-5 font-semibold w-[25%] text-left">
                                <h3>Merchant Name: {printData?.marchentInfo?.name}</h3>
                                <h3>Contact Number: {printData?.marchentInfo?.number}</h3>
                            </div>
                            <div className="background w-[50%] pl-10 text-center mx-auto">
                                <h1 className="text-3xl font-bold">Alijahan Courier Service</h1>
                                <h3 className="text-lg font-semibold">89/123 Maniknagar,R.K Mission Road, Dhaka-1203</h3>
                                <h3 className="text-lg font-semibold">Email: alijahancourier@gmail.com</h3>
                                <a className="text-lg hover:text-green-600 duration-300 font-semibold" href="https://www.alijahan.com" target="blank">www.alijahan.com</a>
                            </div>
                            <div className="border border-gray-400 rounded-md flex flex-col justify-evenly px-5 font-semibold pl-10 w-[25%] text-center">
                                <h3>Order List :1</h3>
                                <h3>Total Payment: 0</h3>
                                <h3>Invoice Id :61e04b</h3>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="overflow-x-auto sm:-mx-6 lg:mx-0">
                        <div className="align-middle inline-block min-w-full">
                            {/* Merchant Information */}
                            <div className="shadow overflow-hidden rounded-lg">
                                <h4 className="text-xl text-left font-bold my-4">Merchant Info </h4>
                                <table className="min-w-full divide-y divide-x divide-gray-200">
                                    <thead className="bg-green-700 text-white text-center text-xs font-semibold uppercase">
                                        <tr>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Marchant Name
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Marchant Contact
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Marchant Email
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Marchant Address
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Marchant Location
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
                                                {printData?.marchentInfo?.name}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.marchentInfo?.number}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.marchentInfo?.email}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.marchentInfo?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.marchentInfo?.location}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.payAbleAmout} TK
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.status}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Receiver Details Here */}
                            <div className="shadow overflow-hidden rounded-lg">
                                <h4 className="text-xl text-left font-bold my-4">Receiver Info </h4>
                                <table className="min-w-full divide-y divide-x divide-gray-200">
                                    <thead className="bg-green-700 text-white text-center text-xs font-semibold uppercase">
                                        <tr>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Receiver Name
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Receiver Contact
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Receiver Address
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Delivery Area
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
                                                {printData?.recieverDetails?.name}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.recieverDetails?.number}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.recieverDetails?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.recieverDetails?.deliveryArea}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.payAbleAmout} TK
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.status}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Order Details Here */}
                            <div className="shadow overflow-hidden rounded-lg">
                                <h4 className="text-xl text-left font-bold my-4">Order Details</h4>
                                <table className="min-w-full divide-y divide-x divide-gray-200">
                                    <thead className="bg-green-700 text-white text-center text-xs font-semibold uppercase">
                                        <tr>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                calcDCharge
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Cash Collection
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Cash On delivery
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Weight Charge
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Payable Amount
                                            </th>
                                            <th className="px-6 py-3 tracking-wider border">
                                                Payment
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                        <tr className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.date}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.calcDCharge}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.cashCollection}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.cod}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.weightCharge}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.orderSummaray?.payAbleAmout} TK
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {printData?.payment}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <img className="w-96 mx-auto opacity-30" src={logo} alt="Main logo" />
                    </div>
                    <p className="text-left italic text-gray-500 mt-4">This is an Auto Generated Report of <span className="text-green-700 font-semibold">Alijahan Courier</span></p>
                </div>
            </div>
        </>
    );
};

export default PickUpParcelList;
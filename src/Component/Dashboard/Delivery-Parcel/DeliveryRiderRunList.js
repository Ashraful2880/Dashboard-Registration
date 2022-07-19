import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faPen, faSearch, faRefresh, faEye, faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import logo from "../../../Assests/Image/Logo.png";
import ReactPaginate from 'react-paginate';

const DeliveryRiderRunList = () => {
    const [deliveryRunLists, setDeliveryRunLists] = useState([]);
    const [printData, setPrintData] = useState();
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(10);
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(deliveryRunLists?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryRunLists(data))
    }, [])
    let ref = useRef();

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Delivery Rider Run List</h3>
            <div className="border border-gray-200 pb-5 rounded-md shadow-xl">
                {/* Import And Generate Section Design Here */}
                <div className="lg:flex block justify-between items-center border-b py-3 px-10">
                    <h4 className="text-lg font-bold">Delivery Rider Run List</h4>
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
                            onChange={(e) => setDataPerPage(e.target.value)}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                        <button className="bg-green-700 hover:bg-green-900 duration-300 px-5 py-1 rounded-md mx-1 w-1/2">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 duration-300 px-5 py-1 rounded-md mx-1 w-1/2">
                            <FontAwesomeIcon icon={faRefresh} className="text-white" />
                        </button>
                    </div>
                </div>
                {/* Table Search And PAgination Area Here */}
                <div className="lg:flex md:flex block justify-between items-center my-2 mx-10">
                    <div className="hidden lg:inline-block md:inline-block">
                        Show <span>
                            <select
                                onChange={(e) => setDataPerPage(e.target.value)}
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
                            className="border px-5 py-1.5 rounded-md focus:outline-0 focus:border focus:border-green-600 duration-300 border-gray-300 w-full" />
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
                                    {deliveryRunLists.slice(pagesVisited, pagesVisited + dataPerPage).map((parcel) => (
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
                                                15-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                100
                                            </td>
                                            <td className="px-2 py-3 border">
                                                60
                                            </td>
                                            <td className="px-2 py-3 text-sm text-green-700 font-bold border">
                                                Run Start
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
                                                        pageStyle="print"
                                                    />
                                                    <button >
                                                        <FontAwesomeIcon icon={faEye} className="h-4 w-4 bg-gray-600 text-white px-2 py-1 rounded-sm" />
                                                    </button>
                                                    <button>
                                                        <FontAwesomeIcon icon={faCheck} className="h-4 w-4 bg-cyan-600 text-white px-2 py-1 rounded-sm" />
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
                    <div className="border border-green-700 px-2 py-1 rounded-md hidden lg:block">
                        <p>Showing <span className="font-semibold">{pagesVisited + 1}</span> to <span className="font-semibold">{deliveryRunLists.slice(0, pagesVisited + dataPerPage).length}</span> of <span className="font-semibold">{deliveryRunLists?.length}</span> Entries</p>
                    </div>
                    <div className="pagination-container">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>

                {/* Print Area Here */}
                <div className="hidden">
                    <div className="container h-auto mx-auto min-w-fit" ref={(el) => (ref = el)}>
                        <div className="mb-4">
                            <div className="mt-4 flex justify-between">
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
                                                    Payment
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
            </div>
        </div>
    );
};

export default DeliveryRiderRunList;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faPrint, faFileExcel, faFilePdf, faRefresh, faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

const BookingParcelList = () => {
    const [deliveriLists, setDeliveryLists] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(10);
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(deliveriLists?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

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
                    <div className="lg:w-2/3 gap-x-2 w-full grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-2 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold my-1 w-full">
                            <FontAwesomeIcon icon={faFileExcel} className="mx-2" />
                            Download Excel
                        </button>
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-2 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold my-1 w-full">
                            <FontAwesomeIcon icon={faFilePdf} className="mx-2" />
                            Download PDF
                        </button>
                        <button className="bg-green-800 border border-green-800 text-white py-2 px-2 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold my-1 w-full">
                            <FontAwesomeIcon icon={faPrint} className="mx-2" />
                            Print
                        </button>
                        <Link to="/dashboard/parcelBooking" className="bg-green-800 border border-green-800 text-white py-2 px-2 rounded-md hover:bg-transparent hover:text-green-800 duration-300 font-semibold my-1 w-full">
                            <FontAwesomeIcon icon={faPen} className="mx-2" />
                            Add New Booking
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-4 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left">Booking Type:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Booking Type</option>
                            <option value="Cash">Cash</option>
                            <option value="To Pay">To Pay</option>
                            <option value="Credit">Credit</option>
                            <option value="Condition">Condition</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Delivery Type:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Delivery Type</option>
                            <option value="OD">OD</option>
                            <option value="TOD">TOD</option>
                            <option value="HD">HD</option>
                            <option value="THD">THD</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left">Status:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Status</option>
                            <option value="Parcel Reject">Parcel Reject</option>
                            <option value="Confirmed Booking">Confirmed Booking</option>
                            <option value="Vehicle Assigned">Vehicle Assigned</option>
                            <option value="Warehouse Assigned">Warehouse Assigned</option>
                            <option value="Warehouse Received Parcel">Warehouse Received Parcel</option>
                            <option value="Warehouse To Warehouse Assigned">Warehouse To Warehouse Assigned</option>
                            <option value="On The Way To Destination">On The Way To Destination</option>
                            <option value="Branch Received">Branch Received</option>
                            <option value="Delivery Complete">Delivery Complete</option>
                            <option value="Delivery Return">Delivery Return</option>
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
                        <button className="bg-green-700 hover:bg-green-900 duration-300 px-5 py-1 rounded-md mx-1 w-1/2">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 duration-300 px-5 py-1 rounded-md mx-1 w-1/2">
                            <FontAwesomeIcon icon={faRefresh} className="text-white" />
                        </button>
                    </div>
                </div>
                <div className="lg:flex md:flex block justify-between items-center my-2 mx-10">
                    <div className="hidden lg:inline-block md:inline-block">
                        Show <span>
                            <select
                                defaultValue={'DEFAULT'}
                                onChange={(e) => setDataPerPage(e.target.value)}
                                name="Entries"
                                className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2">
                                <option value="DEFAULT">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </span> Entries
                    </div>
                    <div className="lg:mt-0 mt-2 flex items-center">
                        <label htmlFor="text" className="font-semibold mr-2 lg:inline-block hidden">Search </label>
                        <input
                            type="search"
                            placeholder="Search Here"
                            className="border px-5 py-1.5 rounded-md focus:outline-0 focus:border focus:border-green-600 duration-300 border-gray-300 w-full" />
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
                                    {deliveriLists.slice(pagesVisited, pagesVisited + dataPerPage).map((deliveryParcel) => (
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
                    <div className="border border-green-700 px-2 py-1 rounded-md hidden lg:block">
                        <p>Showing <span className="font-semibold">{pagesVisited + 1}</span> to <span className="font-semibold">{deliveriLists.slice(0, pagesVisited + dataPerPage).length}</span> of <span className="font-semibold">{deliveriLists?.length}</span> Entries</p>
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
            </div>
        </div>
    );
};

export default BookingParcelList;
import React, { useEffect, useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';

const BookingParcelReceiveList = () => {
    const [bookingReceivedLists, setBookingReceivedLists] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(10);
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(bookingReceivedLists?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setBookingReceivedLists(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Received Booking Parcel List</h3>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                <h3 className="font-bold text-lg text-left px-10">Received Booking Parcel List</h3>
                {/* Top Pagination and Search Area Design Here */}
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <div>
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
                                            Sender Branch
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Receiver Contact
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Net Amount
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Delivery Type
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {bookingReceivedLists.slice(pagesVisited, pagesVisited + dataPerPage).map((deliveryParcel) => (
                                        <tr key={deliveryParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.sl}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                15-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Parcel
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.district}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.district}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {deliveryParcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                30000.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Cash
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Pending
                                            </td>
                                            <td className="px-2 py-3 border">

                                                <button >
                                                    <FontAwesomeIcon icon={faEye} className="h-4 w-4 bg-gray-600 text-white px-2 py-1 rounded-sm" />
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
                    <div className="border border-green-700 px-2 py-1 rounded-md hidden lg:block">
                        <p>Showing <span className="font-semibold">{pagesVisited + 1}</span> to <span className="font-semibold">{bookingReceivedLists.slice(0, pagesVisited + dataPerPage).length}</span> of <span className="font-semibold">{bookingReceivedLists?.length}</span> Entries</p>
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

export default BookingParcelReceiveList;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faSearch, faRefresh } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

const ParcelPaymentReport = () => {
    const [returnRiderRunList, setReturnRiderRunLists] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(10);
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(returnRiderRunList.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setReturnRiderRunLists(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Parcel Payment Report</h3>
            <div className="border border-gray-200 pb-5 rounded-md shadow-xl">
                <h4 className="text-md font-bold text-left px-10 my-2">Parcel Payment Report</h4>
                {/* Riders Select Options Here */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-4 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Payment type:</h5>
                        <select
                            onChange={(e) => setShowData(e.target.value)}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Payment Type</option>
                            <option defaultValue="Booking">Booking</option>
                            <option defaultValue="Delivery">Delivery</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">From Date:</h5>
                        <input type="date" name="date" className="border border-gray-300 px-5 py-1 rounded-md w-full" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">To Date:</h5>
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
                {/* Table Search And PAgination Area Here */}
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
                            className="border px-5 py-1.5 rounded-md focus:outline-0 focus:border focus:border-green-600 duration-300 border-gray-300 w-96" />
                    </div>
                </div>
                {/* Main Table Design Here */}
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
                                            Payment Receive
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Parcel Amount
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Branch Amount
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Forward Amount
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Account Receive Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {returnRiderRunList.slice(pagesVisited, pagesVisited + dataPerPage).map((parcel) => (
                                        <tr key={parcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                {parcel?.sl}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                2021-01-21
                                            </td>
                                            <td className="px-2 py-3 border">
                                                METTRODHDI20210121-00015
                                            </td>
                                            <td className="px-2 py-3 border font-bold text-green-700">
                                                Booking
                                            </td>
                                            <td className="px-2 py-3 border">
                                                10650.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                10650.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                0.00
                                            </td>
                                            <td className="px-2 py-3 border">
                                                0.00
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:flex block justify-between items-center my-2 mx-10">
                    <div className="border border-green-700 px-2 py-1 rounded-md">
                        <p>Showing <span className="font-semibold">{pagesVisited + 1}</span> to <span className="font-semibold">{returnRiderRunList.slice(0, pagesVisited + dataPerPage).length}</span> of <span className="font-semibold">{returnRiderRunList?.length}</span> Entries</p>
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

export default ParcelPaymentReport;
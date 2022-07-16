import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const DeliveryBranchTransferList = () => {
    const [deliveryBranchTransfers, setDeliveryBranchTransfer] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(10);
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(deliveryBranchTransfers.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryBranchTransfer(data))
    }, [])

    return (
        <div className='px-4 mx-auto'>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                <div className="lg:flex block justify-between items-center px-10 border-b pb-4">
                    <h4 className="text-xl font-semibold">Delivery Branch Transfer List</h4>
                    <div>
                        <Link to="/" className="bg-green-700 hover:bg-green-800 duration-300 py-1.5 px-4 rounded-md text-white text-md font-semibold mx-2">
                            <FontAwesomeIcon icon={faPen} className="text-white mr-1" />
                            Generate Delivery Branch Transfer
                        </Link>
                    </div>
                </div>
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
                                            ConSignment
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
                                            Complete Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Transfer Parcel
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Complete parcel
                                        </th>
                                        <th className="px-6 py-3 uppercase tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {deliveryBranchTransfers.slice(pagesVisited, pagesVisited + dataPerPage).map((parcel) => (
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
                                                {parcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                10-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                14-June-2022
                                            </td>
                                            <td className="px-2 py-3 border">
                                                50
                                            </td>
                                            <td className="px-2 py-3 border">
                                                72
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <button>
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
                    <div className="border border-green-700 px-4 py-2 rounded-md">
                        <p>Showing <span className="font-semibold">1</span> to <span className="font-semibold">{deliveryBranchTransfers.slice(0, showData).length}</span> of <span className="font-semibold">{deliveryBranchTransfers?.length}</span> Entries</p>
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

export default DeliveryBranchTransferList;
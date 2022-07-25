import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';

const RiderList = () => {
    const { baseUrl } = BaseURL();
    const [riders, setRiders] = useState([]);
    const { user } = useAuth();
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const dataPerPage = 10;
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(riders?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch(`${baseUrl}/singleuser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRiders(data?.riders));
    }, [user?.email])

    return (
        <div className="container mx-auto pb-10">
            <h3 className="text-2xl font-bold mb-6 text-left pl-5">Rider List</h3>
            <div className="overflow-x-auto mb-4">
                <table className="w-full mx-auto cursor-pointer mb-4">
                    <thead>
                        <tr className="text-center text-white">
                            <th className="bg-green-800 lg:border-x-3 border-x-2 border-white py-3 px-4">Name</th>
                            <th className="bg-green-800 lg:border-x-3 border-x-2 border-white py-3 px-4">Email</th>
                            <th className="bg-green-800 lg:border-x-3 border-x-2 border-white py-3 px-4">Address</th>
                            <th className="bg-green-800 lg:border-x-3 border-x-2 border-white py-3 px-4">Number</th>
                            <th className="bg-green-800 lg:border-x-3 border-x-2 border-white py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders?.slice(pagesVisited, pagesVisited + dataPerPage).map((rider) => (
                            <tr className="text-center border hover:shadow-md duration-300" key={rider._id}>
                                <td className="border border-gray-300 py-3 px-4">
                                    {rider?.name}
                                </td>
                                <td className="border border-gray-300 py-3 px-4">
                                    {rider?.email}
                                </td>
                                <td className="border border-gray-300 py-3 px-4">
                                    {rider?.address}
                                </td>
                                <td className="border border-gray-300 py-3 px-4">
                                    {rider?.number}
                                </td>
                                <td className="border border-gray-300 py-3 px-4">
                                    {rider?.status === "Active" && <span className="text-green-600 font-bold">{rider?.status}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    );
};

export default RiderList;
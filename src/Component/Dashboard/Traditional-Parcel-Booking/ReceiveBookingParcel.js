import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import deliveryTruck from "../../../Assests/Image/delivery-truck.png";

const ReceiveBookingParcel = () => {
    const [deliveryRidersRun, setDeliveryRidersRun] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const dataPerPage = 10;
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(deliveryRidersRun?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDeliveryRidersRun(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left text-gray-500">Destination Branch Parcel Receive</h3>
            <div className="lg:flex block justify-between w-full">
                <div className="lg:w-1/2 w-full border border-gray-200 py-5 rounded-md shadow-md lg:px-10 px-6 lg:mx-6 mx-0">
                    <img src={deliveryTruck} alt="Delivery Truck" />
                </div>
                <form className="border border-gray-200 py-5 rounded-md shadow-md lg:w-1/2 w-full lg:px-10 px-6 lg:mx-6 mx-0">
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Select Vehicle</p>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none rounded-md px-2 py-1 mx-2 w-1/2">
                            <option selected>Select Vehicle</option>
                            <option defaultValue="133-69">(133-69)</option>
                            <option defaultValue="133-65">(133-65)</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Select Branch</p>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none rounded-md px-2 py-1 mx-2 w-1/2">
                            <option selected>Select Branch</option>
                            <option defaultValue="All Branch">All Branch</option>
                            <option defaultValue="Dhaka Tejgoan Branch">Dhaka Tejgoan Branch</option>
                            <option defaultValue="Chattogram">Chattogram</option>
                            <option defaultValue="Mohammadpur">Mohammadpur</option>
                            <option defaultValue="Tongi">Tongi</option>
                            <option defaultValue="Malitola">Malitola</option>
                            <option defaultValue="Rangpur">Rangpur</option>
                            <option defaultValue="Khulna">Khulna</option>
                            <option defaultValue="Dhanmondi">Dhanmondi</option>
                            <option defaultValue="Narshingdi">Narshingdi</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Total Run Parcel</p>
                        <p>0</p>
                    </div>
                    <textarea className="border w-full px-5 focus:outline-none resize-none" name="run note" cols="30" rows="4" placeholder="Delivery Rider Run Note"></textarea>
                    <div>
                        <input className="text-lg border rounded-md mt-4 border-green-700 mx-4 py-1.5 px-5 bg-green-700 text-white hover:text-green-800 hover:bg-transparent duration-300" type="submit" value="Receive" />
                        <input className="text-lg border rounded-md mt-4 border-red-600 mx-4 py-1.5 px-5 bg-red-600 text-white hover:text-red-600 hover:bg-transparent duration-300" type="reset" value="Reset" />
                    </div>
                </form>
            </div>
            {/* Table Area Here */}
            <div className="border border-gray-200 py-5 rounded-md shadow-xl my-10">
                <h1 className="font-bold text-lg text-left px-10">Booking Parcel List</h1>
                <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden rounded-lg mb-4">
                            <table className="min-w-full divide-y divide-x divide-gray-200">
                                <thead className="bg-green-800 text-white text-center text-xs font-semibold uppercase">
                                    <tr>
                                        <th className="px-6 py-3 tracking-wider border">
                                            <input type="checkbox" name="check" /> All
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Parcel No
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Sender Contact
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Receiver Branch
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Net Amount
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Delivery Type
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {deliveryRidersRun.slice(pagesVisited, pagesVisited + dataPerPage).map((runParcel) => (
                                        <tr key={runParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                <input type="checkbox" name="check" />
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.invoice}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Order-01
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchantName}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.contactNumber}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchantName}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.contactNumber}
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
                </div>
            </div>
        </div>
    );
};

export default ReceiveBookingParcel;
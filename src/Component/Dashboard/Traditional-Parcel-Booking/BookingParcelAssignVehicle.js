import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import search from "../../../Assests/Image/Search-Image.png";

const BookingParcelAssignVehicle = () => {
    const [bookingAssignVehicle, setBookingAssignVehicles] = useState([]);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const dataPerPage = 10;
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(bookingAssignVehicle?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setBookingAssignVehicles(data))
    }, [])

    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left text-gray-500">Booking Parcel Assign Vehicle</h3>
            <div className="lg:flex block justify-between w-full">
                <form className="border border-gray-200 py-5 rounded-md shadow-md lg:w-1/2 w-full lg:px-10 px-6 lg:mx-6 mx-0">
                    <h2 className="text-green-700 text-xl font-bold text-left lg:mb-5 mb-2">Assign Vehicle</h2>
                    <div className="flex items-center justify-between py-2 px-3 my-2 border rounded-md">
                        <p className="font-semibold">Vehicle</p>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none rounded-md px-2 py-1 mx-2 w-1/2">
                            <option value="DEFAULT">Select Vehicle</option>
                            <option value="Pickup Van">Pickup Van</option>
                            <option value="Pickup Vss">Pickup Vss</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 my-2 border rounded-md">
                        <p className="font-semibold">Date</p>
                        <input type="date" name="date" />
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 my-2 border rounded-md">
                        <p className="font-semibold">Vehicle SL</p>
                        <p>214151051</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 my-2 border rounded-md">
                        <p className="font-semibold">Vehicle No</p>
                        <p>124264</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 my-2 border rounded-md">
                        <p className="font-semibold">Total Parcel</p>
                        <p>0</p>
                    </div>
                    <textarea className="border w-full px-3 focus:outline-none resize-none rounded-md" name="run note" cols="30" rows="4" placeholder="Note"></textarea>
                    <div className="w-full flex">
                        <input className="text-lg border rounded-md mt-4 border-green-700 mx-2 py-1.5 px-2 bg-green-700 text-white hover:text-green-800 hover:bg-transparent duration-300 w-1/2" type="submit" value="Assign" />
                        <input className="text-lg border rounded-md mt-4 border-red-600 mx-2 py-1.5 px-2 bg-red-600 text-white hover:text-red-600 hover:bg-transparent duration-300 w-1/2" type="reset" value="Reset" />
                    </div>
                </form>
                <div className="lg:w-1/2 w-full border border-gray-200 py-5 rounded-md shadow-md lg:px-10 px-6 lg:mx-6 mx-0">
                    <img src={search} alt="Search" className="w-96 mx-auto" />
                    <form>
                        <div>
                            <input type="text" name="text" className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600" placeholder="Enter Parcel No" />
                        </div>
                        <div>
                            <select
                                defaultValue={'DEFAULT'}
                                name="Entries"
                                className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600">
                                <option value="DEFAULT">Select Branch</option>
                                <option value="Dhaka Tejgoan Branch">Dhaka Tejgoan Branch</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Tongi">Tongi</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Mohammadpur">Mohammadpur</option>
                            </select>
                        </div>
                        <input className="bg-green-700 border border-green-700 hover:bg-transparent text-white hover:text-green-700 duration-500 py-1.5 px-5 rounded-md w-full" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            {/* Table Area Here */}
            <div className="border border-gray-200 py-5 rounded-md shadow-xl my-10">
                <h2 className="text-left text-lg font-bold px-10">Add Parcel To Vehicle</h2>
                <div className="my-2 overflow-x-auto sm:-mx-6 lg:mx-0">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden rounded-lg mb-4">
                            <table className="min-w-full divide-y divide-x divide-gray-200">
                                <thead className="bg-green-800 text-white text-center text-xs font-semibold uppercase">
                                    <tr>
                                        <th className="px-6 py-3 tracking-wider border">
                                            <input type="checkbox" name="check" /> Select All
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
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200 text-gray-900 text-center text-sm font-normal">
                                    {bookingAssignVehicle.slice(pagesVisited, pagesVisited + dataPerPage).map((runParcel) => (
                                        <tr key={runParcel.sl} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                <input type="checkbox" name="check" />
                                            </td>
                                            <td className="px-2 py-3 border">
                                                SBCSDHCH20210116-00006
                                            </td>
                                            <td className="px-2 py-3 border">
                                                01918183822
                                            </td>
                                            <td className="px-2 py-3 border">
                                                Chattogram
                                            </td>
                                            <td className="px-2 py-3 border">
                                                2070.0000
                                            </td>
                                            <td className="px-2 py-3 border">
                                                OD
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pagination-container lg:mr-6 md:mr-6 mr-0">
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
    );
};

export default BookingParcelAssignVehicle;
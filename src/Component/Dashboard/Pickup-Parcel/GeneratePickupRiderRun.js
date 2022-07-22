import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import search from "../../../Assests/Image/Search-Image.png";
import logo from "../../../Assests/Image/Logo.png";
import ReactToPrint from 'react-to-print';
import ReactPaginate from 'react-paginate';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';
import Loading from '../../Loading/Loading';

const GeneratePickupRiderRun = () => {
    let ref = useRef();
    const { baseUrl } = BaseURL();
    const { user } = useAuth();

    let area = [
        {
            label: "Dhaka (Jatrabari)"
        },
        {
            label: "Dhaka (Khilgaon)"
        },
        {
            label: "Dhaka (Fuji Trade Center)"
        }
    ]
    const [runParcels, setRunParcels] = useState([]);
    const [printData, setPrintData] = useState();
    const [printLoading, setPrintLoading] = useState(false);
    // Pagination Function Here
    const [showData, setShowData] = useState(0);
    const dataPerPage = 10;
    const pagesVisited = showData * dataPerPage;
    const pageCount = Math.ceil(runParcels.length / dataPerPage);

    const changePage = ({ selected }) => {
        setShowData(selected)
    };
    useEffect(() => {
        fetch(`${baseUrl}/huborders/status?email=${user.email}&&status=Accepted`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(area)
        })
            .then(res => res.json())
            .then(data => setRunParcels(data))
            .catch(error => console.log(error))
    }, [user.email]);

    const printDataLoading = (runParcel) => {
        setPrintData(runParcel);
        setPrintLoading(true);
    }
    setTimeout(() => {
        setPrintLoading(false);
    }, 3000);


    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left text-gray-500">Generate Pickup Rider Run</h3>
            <div className="lg:flex block justify-between w-full">
                <form className="border border-gray-200 py-5 rounded-md shadow-md lg:w-1/2 w-full lg:px-10 px-6 lg:mx-6 mx-0">
                    <h2 className="text-green-700 text-xl font-bold text-left lg:mb-5 mb-2">Pickup Run</h2>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider</p>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none rounded-md px-2 py-1 mx-2 w-1/2">
                            <option value="DEFAULT">Select Rider</option>
                            <option value="Omar Faruk">Omar Faruk</option>
                            <option value="Mr. Tahmidur Rahman">Mr. Tahmidur Rahman</option>
                            <option value="Istiyaq Hossain Chowdhury">Istiyaq Hossain Chowdhury</option>
                            <option value="Md.Ibrahim Khalil Ullah">Md.Ibrahim Khalil Ullah</option>
                            <option value="Tafim Hossain">Tafim Hossain</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Date</p>
                        <input type="date" name="date" />
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Name</p>
                        <p>Md. Tahmidur Rahman</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Contact Number</p>
                        <p>01810007652</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Rider Address</p>
                        <p>Mirpur</p>
                    </div>
                    <div className="flex items-center justify-between py-2 px-5 my-2 border rounded-md">
                        <p className="font-semibold">Total Run Parcel</p>
                        <p>0</p>
                    </div>
                    <textarea
                        className="border w-full px-5 focus:outline-none resize-none" name="run note" cols="30" rows="4"
                        placeholder="Pickup rider Run Note">
                    </textarea>
                    <div className="w-full flex">
                        <input className="text-lg border rounded-md mt-4 border-green-700 mx-4 py-1.5 px-5 bg-green-700 text-white hover:text-green-800 hover:bg-transparent duration-300 w-1/2" type="submit" value="Generate" />
                        <input className="text-lg border rounded-md mt-4 border-red-600 mx-4 py-1.5 px-5 bg-red-600 text-white hover:text-red-600 hover:bg-transparent duration-300 w-1/2" type="reset" value="Reset" />
                    </div>
                </form>
                <div className="lg:w-1/2 w-full border border-gray-200 py-5 rounded-md shadow-md lg:px-10 px-6 lg:mx-6 mx-0">
                    <img src={search} alt="Search" className="w-96 mx-auto" />
                    <form>
                        <div>
                            <input type="text" name="text" className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600" placeholder="Enter Parcel Invoice Barcode" />
                        </div>
                        <div>
                            <input type="text" name="text" className="border rounded-md w-full py-2 px-5 my-2 focus:outline-none focus:border-green-600" placeholder="Enter Marchant Order ID" />
                        </div>
                        <input className="bg-green-700 border border-green-700 hover:bg-transparent text-white hover:text-green-700 duration-500 py-1.5 px-5 rounded-md w-full" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            {/* Table Area Here */}
            <div className="border border-gray-200 py-5 rounded-md shadow-xl my-10">
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
                                            Order Date
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Marchant Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Merchant Number
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Merchant Address
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Customeer Name
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Customer Number
                                        </th>
                                        <th className="px-6 py-3 tracking-wider border">
                                            Delivery Area
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
                                    {runParcels.slice(pagesVisited, pagesVisited + dataPerPage).map((runParcel) => (
                                        <tr key={runParcel._id} className="hover:bg-gray-100 duration-200">
                                            <td className="px-2 py-3 border">
                                                <input type="checkbox" name="check" />
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.orderSummaray?.date}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchentInfo?.name}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchentInfo?.number}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.marchentInfo?.address}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.recieverDetails?.name}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.recieverDetails?.number}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                {runParcel?.recieverDetails?.deliveryArea}
                                            </td>
                                            <td className="px-2 py-3 border text-green-600 font-bold">
                                                {runParcel?.orderSummaray?.status}
                                            </td>
                                            <td className="px-2 py-3 border">
                                                <div className="flex justify-evenly items-center">
                                                    <ReactToPrint
                                                        trigger={() =>
                                                            <button>
                                                                <FontAwesomeIcon
                                                                    onClick={() =>
                                                                        printDataLoading(runParcel)}
                                                                    icon={faPrint} className="h-4 w-4 bg-green-600 text-white px-2 py-1 rounded-sm" />
                                                            </button>
                                                        }
                                                        content={() => ref}
                                                        pageStyle="print"
                                                        onBeforePrint={() => {
                                                            setPrintLoading(false);
                                                        }}
                                                    />
                                                    {printLoading &&
                                                        <div class="flex justify-center items-center">
                                                            <div class="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full text-green-700" role="status">
                                                            </div>
                                                        </div>}
                                                </div>
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
        </div >
    );
};

export default GeneratePickupRiderRun;
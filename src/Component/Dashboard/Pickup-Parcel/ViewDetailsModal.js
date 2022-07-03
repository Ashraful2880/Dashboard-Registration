import React, { useEffect, useState } from 'react';

const ViewDetailsModal = ({ display, setDisplay, query }) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/pickUpParcelList.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const result = details?.find(item => item?.sl === query)

    return (
        <div className="relative z-10 bg-red-600 w-1/2 h-1/2" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{ display: `${display}` }}>
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
            <div className="fixed z-10 inset-0 overflow-y-auto pt-14">
                <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <div className="relative bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 lg:w-2/3 w-full lg:px-14 px-0">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-xl leading-6 font-bold text-gray-900 mt-4 border-b-2 pb-2" id="modal-title">View Parcel Information </h3>
                            <div className="pb-2 px-2 mx-auto w-full lg:flex block justify-between items-center">
                                <div className="lg:w-[48%] w-full">
                                    <h2 className="text-lg text-left mt-5 mb-3 font-bold text-green-800">
                                        Parcel Information
                                    </h2>
                                    <div className="bg-gray-50 text-right rounded-md border border-gray-200">
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Invoice</p>
                                            <p>{result?.invoice}</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Date</p>
                                            <p>13/06/2022</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Status</p>
                                            <p>{result?.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-[48%] w-full">
                                    <h2 className="text-lg text-left mt-5 mb-3 font-bold text-green-800">
                                        Parcel Charges
                                    </h2>
                                    <div className="bg-gray-50 text-right rounded-md border border-gray-200">
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Weight Package</p>
                                            <p>Upto 1 kg</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Delivery Charge</p>
                                            <p>60</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Total Charge</p>
                                            <p>120</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-2 px-2 mx-auto w-full lg:flex block justify-between items-center">
                                <div className="lg:w-[48%] w-full">
                                    <h2 className="text-lg text-left mt-5 mb-3 font-bold text-green-800">
                                        Merchant Information
                                    </h2>
                                    <div className="bg-gray-50 text-right rounded-md border border-gray-200">
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Name</p>
                                            <p>{result?.marchantName}</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Contact</p>
                                            <p>{result?.contactNumber}</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Address</p>
                                            <p>{result?.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-[48%] w-full">
                                    <h2 className="text-lg text-left mt-5 mb-3 font-bold text-green-800">
                                        Customer Information
                                    </h2>
                                    <div className="bg-gray-50 text-right rounded-md border border-gray-200">
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Name</p>
                                            <p>MD ALAMIN M BEPARY</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Contact</p>
                                            <p>01723546492</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Address</p>
                                            <p>West Testuri Bazar, Farmgate, Tejgaon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-2 px-2 mx-auto w-full lg:flex block justify-between items-center">
                                <div className="lg:w-[48%] w-full">
                                    <h2 className="text-lg text-left mt-5 mb-3 font-bold text-green-800">
                                        Pickup Branch Information
                                    </h2>
                                    <div className="bg-gray-50 text-right rounded-md border border-gray-200">
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Pickup Date</p>
                                            <p>13/06/2022</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Name</p>
                                            <p>Dhaka Tejgoan Branch</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Contact Number</p>
                                            <p>01813158551</p>
                                        </div>
                                        <div className="flex justify-between items-center border py-3 px-4">
                                            <p>Address</p>
                                            <p>Dhaka, Panthapath</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 text-right">
                            <button
                                onClick={() => setDisplay("none")}
                                className="w-full inline-flex justify-center rounded-md border border-red-600 shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-transparent hover:text-red-600 duration-300 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsModal;
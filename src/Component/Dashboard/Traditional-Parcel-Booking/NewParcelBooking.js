import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewParcelBooking = () => {
    return (
        <div className="px-10 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Booking Parcel</h3>
            <div className="bg-green-700 text-white flex justify-between items-center py-3 px-5  rounded-t-lg">
                <h3 className="text-md font-semibold">Booking New Parcel</h3>
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                {/* <FontAwesomeIcon icon={faMinus} /> */}
            </div>
            <div className="border border-gray-200 py-5 rounded-md shadow-xl">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-5 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Parcel Booking Type:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Parcel Booking Type</option>
                            <option defaultValue="To Pay">To Pay</option>
                            <option defaultValue="Credit">Credit</option>
                            <option defaultValue="Condition">Condition</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Pickup:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Pickup?</option>
                            <option defaultValue="Yes">Yes</option>
                            <option defaultValue="No">No</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Merchant:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Merchant?</option>
                            <option defaultValue="Customer-M-0005">Customer-M-0005</option>
                            <option defaultValue="Himal-M-0007">Himal-M-0007</option>
                            <option defaultValue="Tasnim Binte Mujibar-M-0013">Tasnim Binte Mujibar-M-0013</option>
                            <option defaultValue="Jahidul Islam Nahid-M-0014">Jahidul Islam Nahid-M-0014</option>
                            <option defaultValue="Mahfujul Islam-M-0015">Mahfujul Islam-M-0015</option>
                            <option defaultValue="Classy Choice By Nipa-M-0016">Classy Choice By Nipa-M-0016</option>
                            <option defaultValue="Test-M-0018">Test-M-0018</option>
                            <option defaultValue="Ahmed Afjali-M-0019">Ahmed Afjali-M-0019</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Rider:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Rider</option>
                            <option defaultValue="Adnan Mahmud">Adnan Mahmud</option>
                            <option defaultValue="Sheikh Forid">Sheikh Forid</option>
                            <option defaultValue="Safikul Islam">Safikul Islam</option>
                            <option defaultValue="Md Saiful Islam">Md Saiful Islam</option>
                            <option defaultValue="Omar faruk">Omar faruk</option>
                        </select>
                    </div>
                </div>
                <h3 className="text-lg font-bold mt-3 text-left px-5">Sender Information</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-5 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Name:</h5>
                        <input type="text" placeholder="Enter Name" className="border border-gray-300 w-full py-1 px-4 rounded-md focus:outline-none focus:border focus:border-green-500" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Contact Number:</h5>
                        <input type="number" placeholder="Contact Number" className="border border-gray-300 w-full py-1 px-4 rounded-md focus:outline-none focus:border focus:border-green-500" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Address:</h5>
                        <input type="text" placeholder="Sender Address" className="border border-gray-300 w-full py-1 px-4 rounded-md focus:outline-none focus:border focus:border-green-500" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">National ID:</h5>
                        <input type="text" placeholder="Sender National ID" className="border border-gray-300 w-full py-1 px-4 rounded-md focus:outline-none focus:border focus:border-green-500" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Division:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Division</option>
                            <option defaultValue="Adnan Mahmud">Dhaka</option>
                            <option defaultValue="Sheikh Forid">Mymenshing</option>
                            <option defaultValue="Safikul Islam">Sylhet</option>
                            <option defaultValue="Md Saiful Islam">Chattogram</option>
                            <option defaultValue="Omar faruk">Rangpur</option>
                            <option defaultValue="Omar faruk">Rajshahi</option>
                            <option defaultValue="Omar faruk">Barishal</option>
                            <option defaultValue="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">District:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select District</option>
                            <option defaultValue="Adnan Mahmud">Dhaka</option>
                            <option defaultValue="Sheikh Forid">Mymenshing</option>
                            <option defaultValue="Safikul Islam">Sylhet</option>
                            <option defaultValue="Md Saiful Islam">Chattogram</option>
                            <option defaultValue="Omar faruk">Rangpur</option>
                            <option defaultValue="Omar faruk">Rajshahi</option>
                            <option defaultValue="Omar faruk">Barishal</option>
                            <option defaultValue="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Upazilla / Thana:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Upazila</option>
                            <option defaultValue="Adnan Mahmud">Dhaka</option>
                            <option defaultValue="Sheikh Forid">Mymenshing</option>
                            <option defaultValue="Safikul Islam">Sylhet</option>
                            <option defaultValue="Md Saiful Islam">Chattogram</option>
                            <option defaultValue="Omar faruk">Rangpur</option>
                            <option defaultValue="Omar faruk">Rajshahi</option>
                            <option defaultValue="Omar faruk">Barishal</option>
                            <option defaultValue="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Area:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 mx-2 w-full">
                            <option selected>Select Area</option>
                            <option defaultValue="Adnan Mahmud">Dhaka</option>
                            <option defaultValue="Sheikh Forid">Mymenshing</option>
                            <option defaultValue="Safikul Islam">Sylhet</option>
                            <option defaultValue="Md Saiful Islam">Chattogram</option>
                            <option defaultValue="Omar faruk">Rangpur</option>
                            <option defaultValue="Omar faruk">Rajshahi</option>
                            <option defaultValue="Omar faruk">Barishal</option>
                            <option defaultValue="Omar faruk">Khulna</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewParcelBooking;
import React from 'react';

const NewParcelBooking = () => {
    return (
        <div className="px-4 mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-left">Booking Parcel</h3>
            <div className="bg-green-700 text-white py-3 px-5 rounded-t-lg">
                <h3 className="text-md font-semibold">Booking New Parcel</h3>
            </div>
            <form className="border border-gray-200 py-5 rounded-md shadow-xl">
                <h3 className="text-lg font-bold mt-3 text-left px-5">Parcel Information</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-x-6 px-10 border-b pb-5 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-x-6 px-10 border-b pb-5 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                <h3 className="text-lg font-bold mt-3 text-left px-5">Receiver Information</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-x-6 px-10 border-b pb-5 w-full">
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
                        <h5 className="text-md font-semibold text-left my-2">Division:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
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
                <h3 className="text-lg font-bold mt-3 text-left px-5">Destination Branch & Parcel Type</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-5 w-full items-center">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Destination Branch:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Branch</option>
                            <option defaultValue="Chattogram">Chattogram</option>
                            <option defaultValue="Mohammadpur">Mohammadpur</option>
                            <option defaultValue="Tongi">Tongi</option>
                            <option defaultValue="Malitola">Malitola</option>
                            <option defaultValue="Rangpur">Rangpur</option>
                            <option defaultValue="Rajshahi">Rajshahi</option>
                            <option defaultValue="Barishal">Barishal</option>
                            <option defaultValue="Khulna">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Delivery Type:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Type</option>
                            <option defaultValue="Office Delivery (OD)">Office Delivery (OD)</option>
                            <option defaultValue="Transit Office Delivery (TOD)">Transit Office Delivery (TOD)</option>
                            <option defaultValue="Home Delivery (HD)">Home Delivery (HD)</option>
                            <option defaultValue="Transit Home Delivery (THD)">Transit Home Delivery (THD)</option>
                        </select>
                    </div>
                    <div>
                        <textarea className="border w-full px-5 focus:outline-none resize-none mt-2 rounded-md" name="run note" cols="30" rows="4" placeholder="Note"></textarea>
                    </div>
                </div>
                <h3 className="text-lg font-bold mt-3 text-left px-5">Item Information</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 pb-5 w-full">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Item Category:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Item Category</option>
                            <option defaultValue="Chattogram">Manual Category</option>
                            <option defaultValue="Lift Parts">Lift Parts</option>
                            <option defaultValue="Electronics Items">Electronics Items</option>
                            <option defaultValue="Electric Items">Electric Items</option>
                            <option defaultValue="Medical Equipment">Medical Equipment</option>
                            <option defaultValue="Engine">Engine</option>
                            <option defaultValue="Furniture">Furniture</option>
                            <option defaultValue="Chair">Chair</option>
                            <option defaultValue="Almari">Almari</option>
                            <option defaultValue="Chemical">Chemical</option>
                            <option defaultValue="Fruits">Fruits</option>
                            <option defaultValue="Garments">Garments</option>
                            <option defaultValue="Pump Machine">Pump Machine</option>
                            <option defaultValue="Mobile">Mobile</option>
                            <option defaultValue="Cosmetics">Cosmetics</option>
                            <option defaultValue="Books & Stationary">Books & Stationary</option>
                            <option defaultValue="Medicine">Medicine</option>
                            <option defaultValue="Board">Board</option>
                            <option defaultValue="Pipe Item">Pipe Item</option>
                            <option defaultValue="Kitchen Item">Kitchen Item</option>
                            <option defaultValue="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Item:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Item</option>
                            <option defaultValue="Office Delivery (OD)">Office Delivery (OD)</option>
                            <option defaultValue="Transit Office Delivery (TOD)">Transit Office Delivery (TOD)</option>
                            <option defaultValue="Home Delivery (HD)">Home Delivery (HD)</option>
                            <option defaultValue="Transit Home Delivery (THD)">Transit Home Delivery (THD)</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Unit:</h5>
                        <select
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option selected>Select Unit</option>
                            <option defaultValue="Kg">Kg</option>
                            <option defaultValue="Litter">Litter</option>
                            <option defaultValue="Pcs">Pcs</option>
                            <option defaultValue="Box">Box</option>
                            <option defaultValue="Packet">Packet</option>
                            <option defaultValue="Bosta">Bosta</option>
                            <option defaultValue="Carton">Carton</option>
                            <option defaultValue="Dojon">Dojon</option>
                            <option defaultValue="1-2 Ton">1-2 Ton</option>
                            <option defaultValue="Fit">Fit</option>
                            <option defaultValue="Medium Box">Medium Box</option>
                            <option defaultValue="Roll">Roll</option>
                            <option defaultValue="CFT">CFT</option>
                            <option defaultValue="RTN">RTN</option>
                            <option defaultValue="Bottle">Bottle</option>
                            <option defaultValue="Bundle">Bundle</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Unit Price:</h5>
                        <input type="number" placeholder="Unit Price" className="border border-gray-300 rounded-md py-1 px-5 w-full" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Quantity:</h5>
                        <input type="number" placeholder="Quantity" className="border border-gray-300 rounded-md py-1 px-5 w-full" />
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Add Item:</h5>
                        <button className="bg-green-700 border border-green-700 text-white hover:bg-transparent hover:text-green-700 duration-300 rounded-md w-full px-5 py-2">Add Item</button>
                    </div>
                </div>
                <div className="lg:flex block justify-arround items-center gap-x-5 my-4 lg:w-[25%] w-full px-10">
                    <div className="w-full my-2">
                        <input type="submit" value="Submit" className="bg-green-700 border border-green-700 text-white hover:bg-transparent hover:text-green-700 duration-300 rounded-md w-full px-5 py-2" />
                    </div>
                    <div className="w-full my-2">
                        <input type="reset" value="Reset" className="bg-red-500  border  border-red-500 text-white hover:bg-transparent hover:text-black duration-300 rounded-md w-full px-5 py-2" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewParcelBooking;
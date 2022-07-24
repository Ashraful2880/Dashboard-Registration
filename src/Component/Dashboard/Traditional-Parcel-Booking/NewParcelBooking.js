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
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Parcel Booking Type</option>
                            <option value="To Pay">To Pay</option>
                            <option value="Credit">Credit</option>
                            <option value="Condition">Condition</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Pickup:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Pickup?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Merchant:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Merchant?</option>
                            <option value="Customer-M-0005">Customer-M-0005</option>
                            <option value="Himal-M-0007">Himal-M-0007</option>
                            <option value="Tasnim Binte Mujibar-M-0013">Tasnim Binte Mujibar-M-0013</option>
                            <option value="Jahidul Islam Nahid-M-0014">Jahidul Islam Nahid-M-0014</option>
                            <option value="Mahfujul Islam-M-0015">Mahfujul Islam-M-0015</option>
                            <option value="Classy Choice By Nipa-M-0016">Classy Choice By Nipa-M-0016</option>
                            <option value="Test-M-0018">Test-M-0018</option>
                            <option value="Ahmed Afjali-M-0019">Ahmed Afjali-M-0019</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Rider:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value={'DEFAULT'}>Select Rider</option>
                            <option value="Adnan Mahmud">Adnan Mahmud</option>
                            <option value="Sheikh Forid">Sheikh Forid</option>
                            <option value="Safikul Islam">Safikul Islam</option>
                            <option value="Md Saiful Islam">Md Saiful Islam</option>
                            <option value="Omar faruk">Omar faruk</option>
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
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Division</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">District:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select District</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Upazilla / Thana:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Upazila</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Area:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Area</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
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
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Division</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">District:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select District</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Upazilla / Thana:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Upazila</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Area:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Area</option>
                            <option value="Adnan Mahmud">Dhaka</option>
                            <option value="Sheikh Forid">Mymenshing</option>
                            <option value="Safikul Islam">Sylhet</option>
                            <option value="Md Saiful Islam">Chattogram</option>
                            <option value="Omar faruk">Rangpur</option>
                            <option value="Omar faruk">Rajshahi</option>
                            <option value="Omar faruk">Barishal</option>
                            <option value="Omar faruk">Khulna</option>
                        </select>
                    </div>
                </div>
                <h3 className="text-lg font-bold mt-3 text-left px-5">Destination Branch & Parcel Type</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 px-10 border-b pb-5 w-full items-center">
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Destination Branch:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Branch</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Mohammadpur">Mohammadpur</option>
                            <option value="Tongi">Tongi</option>
                            <option value="Malitola">Malitola</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Khulna">Khulna</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Delivery Type:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Type</option>
                            <option value="Office Delivery (OD)">Office Delivery (OD)</option>
                            <option value="Transit Office Delivery (TOD)">Transit Office Delivery (TOD)</option>
                            <option value="Home Delivery (HD)">Home Delivery (HD)</option>
                            <option value="Transit Home Delivery (THD)">Transit Home Delivery (THD)</option>
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
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Item Category</option>
                            <option value="Chattogram">Manual Category</option>
                            <option value="Lift Parts">Lift Parts</option>
                            <option value="Electronics Items">Electronics Items</option>
                            <option value="Electric Items">Electric Items</option>
                            <option value="Medical Equipment">Medical Equipment</option>
                            <option value="Engine">Engine</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Chair">Chair</option>
                            <option value="Almari">Almari</option>
                            <option value="Chemical">Chemical</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Garments">Garments</option>
                            <option value="Pump Machine">Pump Machine</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Cosmetics">Cosmetics</option>
                            <option value="Books & Stationary">Books & Stationary</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Board">Board</option>
                            <option value="Pipe Item">Pipe Item</option>
                            <option value="Kitchen Item">Kitchen Item</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Item:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Item</option>
                            <option value="Office Delivery (OD)">Office Delivery (OD)</option>
                            <option value="Transit Office Delivery (TOD)">Transit Office Delivery (TOD)</option>
                            <option value="Home Delivery (HD)">Home Delivery (HD)</option>
                            <option value="Transit Home Delivery (THD)">Transit Home Delivery (THD)</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold text-left my-2">Unit:</h5>
                        <select
                            defaultValue={'DEFAULT'}
                            name="Entries"
                            className="border border-gray-300 focus:outline-none focus:border focus:border-green-600 rounded-md px-2 py-1 w-full">
                            <option value="DEFAULT">Select Unit</option>
                            <option value="Kg">Kg</option>
                            <option value="Litter">Litter</option>
                            <option value="Pcs">Pcs</option>
                            <option value="Box">Box</option>
                            <option value="Packet">Packet</option>
                            <option value="Bosta">Bosta</option>
                            <option value="Carton">Carton</option>
                            <option value="Dojon">Dojon</option>
                            <option value="1-2 Ton">1-2 Ton</option>
                            <option value="Fit">Fit</option>
                            <option value="Medium Box">Medium Box</option>
                            <option value="Roll">Roll</option>
                            <option value="CFT">CFT</option>
                            <option value="RTN">RTN</option>
                            <option value="Bottle">Bottle</option>
                            <option value="Bundle">Bundle</option>
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
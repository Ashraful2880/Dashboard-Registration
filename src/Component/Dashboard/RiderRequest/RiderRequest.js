import React from 'react';

const RiderRequest = () => {
    return (
        <div className="px-4 mx-auto">
            <h1 className="text-2xl font-bold text-left">Request a Rider</h1>
            <div className="w-full flex">
                <form className="lg:p-8 p-2 mb-4 w-full">
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="name">
                                Name
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="number">
                                Contact Number
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                placeholder="Contact Number"
                            />
                        </div>
                    </div>
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="address">
                                Address
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="nid">
                                NID
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                placeholder="National ID Number"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="license">
                                License
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                placeholder="License Number"
                            />
                        </div>
                    </div>
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="dob">
                                Date Of Birth
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="date"
                                placeholder="Date Of Birth"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="status">
                                Status
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                placeholder="Status (Active/Inactive)"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="role">
                                Role
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                placeholder="Role"
                            />
                        </div>
                    </div>
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" for="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="w-full text-left">
                            <input type="submit" value="Send Request"
                                className="w-full px-3 py-3 mb-2 text-md rounded shadow focus:outline-none focus:border-green-700 mt-8 text-md leading-tight text-white border border-green-700 bg-green-700 hover:bg-transparent hover:text-green-700 duration-300 cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RiderRequest;
import React, { useState } from 'react';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';

const RiderRequest = () => {
    const { baseUrl } = BaseURL();
    const { user } = useAuth();
    const [riderInfo, setRiderInfo] = useState({
        name: "", email: "", address: "", number: "", nid: "", license: "", dob: "", password: "", confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newRiderInfo = { ...riderInfo };
        newRiderInfo[name] = value;
        setRiderInfo(newRiderInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (riderInfo?.password !== riderInfo?.confirmPassword) {
            return alert("Password doesn't Match");
        } else {
            fetch(`${baseUrl}/rider/request?email=${user.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(riderInfo)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="px-4 mx-auto">
            <h1 className="text-2xl font-bold text-left">Request a Rider</h1>
            <div className="w-full flex">
                <form className="lg:p-8 p-2 mb-4 w-full" onSubmit={handleSubmit}>
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="name">
                                Name
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="email"
                                name='email'
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="number">
                                Contact Number
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                name='number'
                                placeholder="Contact Number"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="address">
                                Address
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="text"
                                name='address'
                                placeholder="Address"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="nid">
                                NID
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                name='nid'
                                placeholder="National ID Number"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="license">
                                License
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="number"
                                name='license'
                                placeholder="License Number"
                                required
                            />
                        </div>
                    </div>
                    <div className="lg:flex md:flex block lg:gap-x-10 md:gap-x-4 gap-x-0 mb-4">
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="dob">
                                Date Of Birth
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="date"
                                name='dob'
                                placeholder="Date Of Birth"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="password"
                                name='password'
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="w-full text-left">
                            <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 mb-2 text-md text-black border rounded shadow focus:outline-none focus:border-green-700"
                                type="password"
                                name='confirmPassword'
                                placeholder="Confirm Password"
                                required
                            />
                            {riderInfo?.confirmPassword && (riderInfo?.password !== riderInfo?.confirmPassword) ? <span className="text-red-600 font-semibold">Password doesn't Match</span> : <div className="w-full h-6 bg-transparent"></div>}
                        </div>
                    </div>
                    <div className="mb-4 lg:w-1/5 w-full">
                        <div className="w-full text-left">
                            <input type="submit" value="Send Request"
                                className="w-full px-3 py-3 mb-2 text-md rounded shadow focus:outline-none focus:border-green-700 text-md leading-tight text-white border border-green-700 bg-green-700 hover:bg-transparent hover:text-green-700 duration-300 cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RiderRequest;
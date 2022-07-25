import React, { useEffect, useState } from 'react';
import BaseURL from '../../../Hooks/BaseUrl';
import useAuth from '../../../Hooks/UseAuth';
import Loading from './../../Loading/Loading';

const RiderRequest = () => {
    const { baseUrl } = BaseURL();
    const { user } = useAuth();
    const [hubInfo, setHubInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [riderInfo, setRiderInfo] = useState({
        name: "", email: "", address: "", number: "", nid: "", license: "", dob: "", password: "", confirmPassword: "", status: "pending"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newRiderInfo = { ...riderInfo, hubName: hubInfo?.name, hubEmail: hubInfo?.email };
        newRiderInfo[name] = value;
        setRiderInfo(newRiderInfo)
    }

    // find Hub Name & Email

    useEffect(() => {
        fetch(`${baseUrl}/singleuser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setHubInfo(data))
    }, [baseUrl, user?.email])

    // Handle Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (riderInfo?.password !== riderInfo?.confirmPassword) {
            setAlert(true);
            setLoading(false);
        } else {
            fetch(`${baseUrl}/rider/request?email=${user.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(riderInfo)
            })
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    e.target.reset()
                }
                )
                .catch(error => setLoading(false))
        }
    }
    // Loading Effect For Submission
    if (loading) {
        return <Loading />
    }

    return (
        <div className="px-4 mx-auto">
            <h1 className="text-2xl font-bold text-left">Request a Rider</h1>
            {/* Alert Message Here */}
            {alert && <div className="bg-red-200 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center lg:w-1/3 w-full absolute top-20 right-0" role="alert">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
                Opps!! Password doesn't Match
            </div>}
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
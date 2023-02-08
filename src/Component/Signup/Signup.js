import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from './../../Hooks/UseAuth';

const Signup = () => {
    const { googleSignIn, setName, setEmail, setPassword, handleRegister } = useAuth();
    return (
        <div className="bg-gray-100 h-[85vh]">
            <div className="h-[85vh] flex justify-center items-center flex-col">
                <div className="pb-10 w-96 border rounded-md bg-white">
                    <h2 className="text-2xl font-bold text-green-600 pt-6 pb-4"> Dashboard Temp </h2>
                    <p className="mb-5 text-lg font-semibold">Create Your First Account</p>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4 relative">
                            <FontAwesomeIcon icon={faUser} className="text-gray-500 absolute top-3.5 left-8" />
                            <input
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                placeholder="Name"
                                className="w-[90%] py-2 pr-4 pl-10 border border-gray-300 rounded-md outline-none" />
                        </div>
                        <div className="mb-4 relative">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 absolute top-3.5 left-8" />
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                placeholder="Email"
                                className="w-[90%] py-2 pr-4 pl-10 border border-gray-300 rounded-md outline-none" />
                        </div>
                        <div className="mb-4 relative">
                            <FontAwesomeIcon icon={faUnlockKeyhole} className="text-gray-500 absolute top-3.5 left-8" />
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                placeholder="Password"
                                className="w-[90%] py-2 pr-4 pl-10 border border-gray-300 rounded-md outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="submit" value="Register" className="w-[90%] py-2 px-4 border border-indigo-700 rounded-md outline-none bg-indigo-700 text-white hover:text-black hover:bg-transparent duration-300 cursor-pointer font-semibold" />
                        </div>
                        <div className="mb-2">
                            <Link to="/login" className="text-sm font-semibold text-gray-500">Already Registered ? <span className="text-indigo-700">Please login</span> </Link>
                            <p className="text-sm">Or</p>
                        </div>
                    </form>
                    <div>
                        <button
                            onClick={googleSignIn}
                            className="w-[70%] p-3 border rounded-lg border-gray-300 flex items-center w-1.5/2 mx-auto mt-4 hover:bg-gray-300 duration-300">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                            <p className="text-base font-medium ml-4 text-gray-700">
                                Continue with Google
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
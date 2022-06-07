import React from 'react';
import logo from "../../Assests/Image/Logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="bg-gray-100 h-[85vh]">
            <div className="h-[70vh] flex justify-center items-center flex-col">
                <div className="pb-10 w-96 border rounded-md bg-white">
                    <img src={logo} alt="Main Logo" className="w-12 mx-auto my-8" />
                    <p className="mb-5">Sign in to start your session as Merchant</p>
                    <form>
                        <div className="mb-4 relative">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 absolute top-3.5 left-8" />
                            <input type="email" placeholder="Email" className="w-[90%] py-2 pr-4 pl-10 border border-gray-300 rounded-md outline-none" />
                        </div>
                        <div className="mb-4 relative">
                            <FontAwesomeIcon icon={faUnlockKeyhole} className="text-gray-500 absolute top-3.5 left-8" />
                            <input type="password" placeholder="Password" className="w-[90%] py-2 pr-4 pl-10 border border-gray-300 rounded-md outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="submit" value="Signin" className="w-[90%] py-2 px-4 border border-indigo-700 rounded-md outline-none bg-indigo-700 text-white hover:text-black hover:bg-transparent duration-300 cursor-pointer font-semibold" />
                        </div>
                        <div>
                            <Link to="/register" className="text-sm font-semibold text-gray-500">New Here ? Signup First</Link>
                        </div>
                        <div>
                            <Link to="/resetPassword" className="text-sm font-semibold text-indigo-700">I forgot my password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
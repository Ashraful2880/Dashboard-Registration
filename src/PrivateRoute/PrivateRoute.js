import React from "react";
import useAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, isloading } = useAuth();
	const location = useLocation();

	if (isloading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-green-900'></div>
			</div>
		);
	} else {
		if (user) {
			return children;
		} else {
			return <Navigate to='/login' state={{ from: location }} />;
		}
	}
};

export default PrivateRoute;

import React from "react";
import useAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Component/Loading/Loading";

const PrivateRoute = ({ children }) => {
	const { user, isloading } = useAuth();
	const location = useLocation();

	if (isloading) {
		return (
			<Loading />
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

import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <p>Loading....</p>
    } else {
        if (user) {
            return children
        } else {
            return <Navigate to='/login' state={{ from: location }} />
        }
    }

};

export default PrivateRoute;
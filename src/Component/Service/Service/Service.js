import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Express from '../Express/Express';
import ServiceHome from '../ServiceHome/ServiceHome';
import Standard from '../Standard/Standard';
import WireHouse from '../WireHouse/WireHouse';
import DoorToDoor from './../DoorToDoor/DoorToDoor';

const Service = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ServiceHome />} />
                <Route path='standard' element={<Standard />} />
                <Route path='express' element={<Express />} />
                <Route path='door' element={<DoorToDoor />} />
                <Route path='wirehouse' element={<WireHouse />} />
            </Routes>
        </>
    );
};

export default Service;
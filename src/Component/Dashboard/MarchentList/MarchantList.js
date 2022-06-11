import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MarchantList = () => {
    const [marchants, setMarchants] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Ashraful2880/FakeData-MarchantList/main/marchantList?token=GHSAT0AAAAAABTFSSV6PJOC5JIMA47F34GMYVEYG7Q`)
            .then(res => res.json())
            .then(data => setMarchants(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-6">Marchant List</h3>
            <table className="w-full mx-auto cursor-pointer overflow-x-scroll">
                <thead>
                    <tr className="text-center text-white">
                        <th className="bg-black border-x-8 border-white rounded-lg py-3 px-4">#</th>
                        <th className="bg-black border-x-8 border-white rounded-lg py-3 px-4">Name</th>
                        <th className="bg-black border-x-8 border-white rounded-lg py-3 px-4">Address</th>
                        <th className="bg-black border-x-8 border-white rounded-lg py-3 px-4">Email</th>
                        <th className="bg-black border-x-8 border-white rounded-lg py-3 px-4">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {marchants.map((marchant) => (
                        <tr className="text-center border shadow-xl hover:shadow duration-300" key={marchant.sl}>
                            <td className="border border-gray-300 py-3 px-4">
                                {marchant?.sl}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {marchant?.name}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {marchant?.address}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {marchant?.email}
                            </td>
                            <td className="border border-gray-300 py-3 px-4">
                                {marchant?.contact}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarchantList;
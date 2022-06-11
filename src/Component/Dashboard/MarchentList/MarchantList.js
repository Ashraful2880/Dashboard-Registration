import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MarchantList = () => {
    const [marchants, setMarchants] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Ashraful2880/FakeData-MarchantList/main/marchantList?token=GHSAT0AAAAAABTFSSV7PHH6CFGASFJM3NEUYVEXKMA`)
            .then(res => res.json())
            .then(data => setMarchants(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h3 className="text-xl font-bold">Marchant List</h3>
            <table className="w-full mx-auto cursor-pointer table">
                <thead>
                    <tr className="text-center text-white py-2">
                        <th className="bg-black border-x-8 border-white rounded-lg text-center py-2 px-4">#</th>
                        <th className="bg-black border-x-8 border-white rounded-lg text-center py-2 px-4">Name</th>
                        <th className="bg-black border-x-8 border-white rounded-lg text-center py-2 px-4">Address</th>
                        <th className="bg-black border-x-8 border-white rounded-lg text-center py-2 px-4">Email</th>
                        <th className="bg-black border-x-8 border-white rounded-lg text-center py-2 px-4">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {marchants.map((marchant) => (
                        <tr className="text-center py-2 border border-green-300 hover:bg-green-800 hover:text-white duration-300" key={marchant.sl}>
                            <td className="border border-green-300 text-center py-2 px-4">
                                {marchant?.sl}
                            </td>
                            <td className="border border-green-300 text-center py-2 px-4">
                                {marchant?.name}
                            </td>
                            <td className="border border-green-300 text-center py-2 px-4">
                                {marchant?.address}
                            </td>
                            <td className="border border-green-300 text-center py-2 px-4">
                                {marchant?.email}
                            </td>
                            <td className="border border-green-300 text-center py-2 px-4">
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
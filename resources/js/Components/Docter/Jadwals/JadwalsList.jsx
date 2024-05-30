import React, { useState } from "react";
import axios from "axios";
import ToggleSwitch from "@/Components/ToggleSwitch";

const isProducts = (jadwals, handleToggleChange) => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">No</th>
                        <th className="text-black dark:text-white text-sm">Jadwal</th>
                        <th className="text-black dark:text-white text-sm">Hari</th>
                        <th className="text-black dark:text-white text-sm">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {jadwals.length > 0 &&
                        jadwals.map((product, i) => (
                            <tr key={product.id}>
                                <th className="text-black dark:text-white font-medium">{i + 1}</th>
                                <th className="text-black dark:text-white font-medium">{product.schedule}</th>
                                <th className="text-black dark:text-white font-medium">{product.day}</th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.is_aktif === '2' ? 
                                    <>
                                        {product.is_aktif === "2" && (
                                        <span className="inline-block px-2 py-1 bg-gray-500 text-white rounded">
                                            Sudah ada appoitment
                                        </span>
                                        )}
                                    </> :  <ToggleSwitch
                                        checked={product.is_aktif === '1'}
                                        onChange={() => handleToggleChange(product.id, product.is_aktif)}
                                    />}
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noProducts = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">There is no products data to Show.</h1>
        </div>
    );
};

const JadwalsList = ({ jadwals }) => {
    const [jadwalList, setJadwalList] = useState(jadwals);

    const handleToggleChange = async (id, jadwal_aktif) => {
        // const status = jadwal_aktif === '1' ? '0' ? '2' : '1';
        const status = jadwal_aktif === '0' ? '1' : jadwal_aktif === '1' ? '2' : '0';
        try {
            await axios.post(`/docter/jadwal/update/${id}`, {
                is_aktif: status,
            });
    
            setJadwalList(jadwalList.map(jadwal => 
                jadwal.id === id ? { ...jadwal, is_aktif: status } : jadwal
            ));
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    // return !jadwalList ? noProducts() : isProducts(jadwalList, handleToggleChange);
    return !jadwalList || jadwalList.length === 0 ? noProducts() : isProducts(jadwalList, handleToggleChange);
};

export default JadwalsList;

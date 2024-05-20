import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";;

const isProducts = (jadwals) => {
    console.log(jadwals);


    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            No
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Jadwal
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Hari
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jadwals.length > 0 &&
                        jadwals.map((product,i) => (
                            <tr key={product.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {i+1}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.schedule}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.day}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.is_aktif}
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
            <h1 className="text-3xl font-bold text-slate-100">
                There is no products data to Show.
            </h1>
        </div>
    );
};

const JadwalsList = ({ jadwals }) => {
    return !jadwals ? noProducts() : isProducts(jadwals);
};

export default JadwalsList;

import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
// import { formatCurr } from "@/Utils/FormatPrice";
// import ModalDeleteDocter from "./ModalDeleteDocters";
import useSwal from "@/Components/Hooks/useSwal";


const isProducts = (jadwals) => {

    const { ask } = useSwal();

    const groupedJadwals = jadwals.reduce((grouped, product) => {
        // Dapatkan docter_id dari produk saat ini
        const docterId = product.docter.docter_id;
    
        // Jika belum ada grup untuk docter_id ini, buat grup baru
        if (!grouped[docterId]) {
            grouped[docterId] = [];
        }
    
        // Tambahkan produk ke dalam grup yang sesuai dengan docter_id
        grouped[docterId].push(product);
    
        return grouped;
    }, {});

    const groupedJadwalsArray = Object.values(groupedJadwals);
    // console.log(groupedJadwalsArray);
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            No
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Docter
                        </th>
                      
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {groupedJadwalsArray.length > 0 &&
                        groupedJadwalsArray.map((product, i) => (
                            <tr key={product[0].docter.docter_id}>
                                 <th className="text-black dark:text-white font-medium">
                                    {i+1}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product[0].docter.name}
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.jadwal.edit",product[0].docter.docter_id
                                            )}
                                        >
                                            <PrimaryButton>
                                            Tambah Jadwal  
    
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            </PrimaryButton>
                                        </Link>
    
                                        {/* <DangerButton
                                            onClick={() =>
                                                {
                                                    ask({
                                                        url: route('superadmin.jadwal.delete',product[0].docter.docter_id),
                                                        message: 'Apakah Anda Yakin Ingin Detele Data !!'
                                                    })
                                                }
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="22"
                                                height="22"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line
                                                    x1="10"
                                                    x2="10"
                                                    y1="11"
                                                    y2="17"
                                                />
                                                <line
                                                    x1="14"
                                                    x2="14"
                                                    y1="11"
                                                    y2="17"
                                                />
                                            </svg>
                                        </DangerButton> */}
                                        
                                    </div>
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
                There is no Jadwal data to Show.
            </h1>
        </div>
    );
};

const JadwalsList = ({ jadwals }) => {
    return !jadwals ? noProducts() : isProducts(jadwals);
};

export default JadwalsList;

import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import useSwal from "@/Components/Hooks/useSwal";
import { CheckIcon, UpdateIcon } from "@/Components/Icons/Index";

const isProducts = (docter_app) => {
    const { ask } = useSwal();

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            No
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Kode Appointmen
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Date
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Jadwal
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Status
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {docter_app.length > 0 &&
                        docter_app.map((product, i) => (
                            <tr key={product.appointmen_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {i + 1}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.appointmen_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.pet.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.date_appointmens}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.jadwal}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.status === "finished" && (
                                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded">
                                            selesai
                                        </span>
                                    )}
                                    {product.status === "handled" && (
                                        <span className="inline-block px-2 py-1 bg-blue-500 text-black rounded">
                                            Proses Transaction
                                        </span>
                                    )}
                                    {product.status === "accepted" && (
                                        <span className="inline-block px-2 py-1 bg-cyan-500 text-black rounded">
                                            disetujui
                                        </span>
                                    )}
                                    {product.status === "pending" && (
                                        <span className="inline-block px-2 py-1 bg-yellow-500 text-black rounded">
                                            pending
                                        </span>
                                    )}
                                    {product.status === "rejected" && (
                                        <span className="inline-block px-2 py-1 bg-red-500 text-white rounded">
                                            dibatalkan
                                        </span>
                                    )}
                                    {product.status === "expired" && (
                                        <span className="inline-block px-2 py-1 bg-gray-500 text-white rounded">
                                            expired
                                        </span>
                                    )}
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <>
                                            {product.status == "pending" ? (
                                                <Link
                                                    onClick={() => {
                                                        ask({
                                                            url: route(
                                                                "docter.appointmen.updatestatus",
                                                                product.appointmen_id
                                                            ),
                                                            message:
                                                                "Apakah Anda Yakin Ingin Menyetujui appointments !!",
                                                        });
                                                    }}
                                                >
                                                    <PrimaryButton className="bg-blue-600">
                                                        <CheckIcon />
                                                    </PrimaryButton>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={route(
                                                        "docter.appointmen.edit",
                                                        product.appointmen_id
                                                    )}
                                                >
                                                    <PrimaryButton>
                                                        <UpdateIcon />
                                                    </PrimaryButton>
                                                </Link>
                                            )}
                                        </>
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
                There is no products data to Show.
            </h1>
        </div>
    );
};

const AppointmentsList = ({ docter_app }) => {
    return !docter_app ? noProducts() : isProducts(docter_app);
};

export default AppointmentsList;

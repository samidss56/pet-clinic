import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import { CreateIcon } from "@/Components/Icons/Index";

const isProducts = (transaction) => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Invoice
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Appointment
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Tanggal
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Status Payment
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Total
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.length > 0 &&
                        transaction.map((product) => (
                            <tr key={product.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {product.invoice}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.appointmen_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.date_transaction}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.status_payment ===
                                        "Settlement" && (
                                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded">
                                            finished
                                        </span>
                                    )}
                                    {product.status_payment === "pending" && (
                                        <span className="inline-block px-2 py-1 bg-yellow-500 text-black rounded">
                                            pending
                                        </span>
                                    )}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {formatCurr(product.subtotal)}
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "admin.transaction.edit",
                                                product.invoice
                                            )}
                                        >
                                            <PrimaryButton
                                                disabled={
                                                    product.status_payment ===
                                                    "Settlement"
                                                        ? true
                                                        : false
                                                }
                                                className="flex gap-2"
                                            >
                                                <CreateIcon />
                                                Bayar
                                            </PrimaryButton>
                                        </Link>
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

const TransactionsList = ({ transaction }) => {
    return !transaction ? noProducts() : isProducts(transaction);
};

export default TransactionsList;

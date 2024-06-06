import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import { ShowIcon } from "@/Components/Icons/Index";

const isTransactions = (transaction) => {
    // console.log(transaction);
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
                        transaction.map((transaction) => (
                            <tr key={transaction.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.invoice}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.appointment.appointment_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.date_transaction}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.status_payment ===
                                        "settlement" && (
                                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded">
                                            finished
                                        </span>
                                    )}
                                    {transaction.status_payment ===
                                        "pending" && (
                                        <span className="inline-block px-2 py-1 bg-yellow-500 text-black rounded">
                                            pending
                                        </span>
                                    )}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {formatCurr(transaction.subtotal)}
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.transaction.show",
                                                transaction.invoice
                                            )}
                                        >
                                            <PrimaryButton>
                                                <ShowIcon />
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

const noTransaction = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no transaction data to Show.
            </h1>
        </div>
    );
};

const TransactionsList = ({ transaction }) => {
    return !transaction ? noTransaction() : isTransactions(transaction);
};

export default TransactionsList;

import { CreateIcon, ShowIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";
import React from "react";

const isTransactions = (transactions) => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Invoice ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            User ID
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
                    {transactions.length > 0 &&
                        transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.invoice}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {transaction.user.user_id}
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
                                                "admin.product-transaction.show",
                                                transaction.invoice
                                            )}
                                        >
                                            <PrimaryButton className="flex gap-2">
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

const noTrancsaction = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no products data to Show.
            </h1>
        </div>
    );
};

const ProductTransList = ({ transactions }) => {
    console.log(transactions);
    return transactions.length < 0
        ? noTrancsaction()
        : isTransactions(transactions);
};

export default ProductTransList;

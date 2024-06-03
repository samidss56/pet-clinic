import { ArrowLeftIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";
import React from "react";

const DetailCard = ({ transaction }) => {
    console.log(transaction);
    const products = transaction.details.filter(
        (detail) => detail.product_id !== null
    );
    const services = transaction.details.filter(
        (detail) => detail.service_id !== null
    );
    return (
        <div className="bg-white rounded-md">
            <div className="p-4 flex items-center justify-between border-b bg-gray-200 rounded-t-md">
                <h2 className="text-xl font-bold inline-block px-2 py-1 text-gray-800">
                    Invoice #{transaction.invoice}
                </h2>
                <div className="flex gap-2 items-center">
                    <div className="px-2 py-2 rounded-lg bg-white text-sm text-gray-600">
                        {transaction.date_transaction}
                    </div>
                    {transaction.status_payment === "settlement" && (
                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded-lg">
                            finished
                        </span>
                    )}
                    {transaction.status_payment === "pending" && (
                        <span className="inline-block px-2 py-1 bg-yellow-500 text-black rounded-lg">
                            pending
                        </span>
                    )}
                </div>
            </div>
            <div className="p-4 grid grid-cols-4">
                <div className="p-2">
                    <p className="text-gray-500">Pet ID</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.pet_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Pet Name</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.pet_name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Pet Age</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.pet_age} years
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Pet Gender</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.pet_gender}
                    </p>
                </div>
            </div>
            <div className="p-4 grid grid-cols-4 ">
                <div className="p-2">
                    <p className="text-gray-500">Owner ID</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.owner_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner Name</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.owner_name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner Email</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.owner_email}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner Phone</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.owner_phone}
                    </p>
                </div>
            </div>
            <div className="p-4 grid grid-cols-4 ">
                <div className="p-2">
                    <p className="text-gray-500">Doctor ID</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.doctor_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor Name</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.doctor_name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor Email</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.doctor_email}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor Phone</p>
                    <p className="font-bold text-gray-800">
                        {transaction.appointment.doctor_phone}
                    </p>
                </div>
            </div>
            {products.map((detail) => (
                <div key={detail.transaction_id}>
                    <div className="p-4 grid grid-cols-4">
                        <div className="p-2">
                            <p className="text-gray-500">Product Name</p>
                            <p className="font-bold text-gray-800">
                                {detail.product_id}
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500">Product Price</p>
                            <p className="font-bold text-gray-800">
                                {formatCurr(detail.harga_product)}
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500">Product Quantity</p>
                            <p className="font-bold text-gray-800">
                                {detail.quantity}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {services.map((detail) => (
                <div key={detail.transaction_id}>
                    <div className="p-4 grid grid-cols-4">
                        <div className="p-2">
                            <p className="text-gray-500">Service Name</p>
                            <p className="font-bold text-gray-800">
                                {detail.service_id}
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500">Service Price</p>
                            <p className="font-bold text-gray-800">
                                {formatCurr(detail.harga_service)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-end px-4 space-y-2">
                <h2 className="text-gray-500 font-semibold border-t-2 border-gray-800">
                    Subtotal
                </h2>
                <p className="text-gray-800 font-semibold ">{formatCurr(transaction.subtotal)}</p>
            </div>
            <div className="p-4">
                <Link href={route("superadmin.transaction")}>
                    <SecondaryButton>
                        <ArrowLeftIcon />
                        Back to Transaction List
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default DetailCard;

import { ArrowLeftIcon, FileIcon } from "@/Components/Icons/Index";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";
import React from "react";

const DetailCard = ({ transaction }) => {
    const products = transaction.details.filter(
        (detail) => detail.product_id !== null
    );
    const services = transaction.details.filter(
        (detail) => detail.service_id !== null
    );
    return (
        <div className="bg-white rounded-md">
            <div className="p-4 flex items-center justify-between border-b bg-gray-50 rounded-t-md">
                <h2 className="text-xl font-bold inline-block px-2 py-1 text-gray-800">
                    Invoice #{transaction.invoice}
                </h2>
                <div className="flex gap-2 items-center">
                    <PrimaryButton className="flex items-center gap-2">
                        <FileIcon />
                        PDF
                    </PrimaryButton>
                    {transaction.status_payment === "settlement" && (
                        <span className="inline-block px-2 py-2 bg-green-500 text-white rounded-lg">
                            finished
                        </span>
                    )}
                    {transaction.status_payment === "pending" && (
                        <span className="inline-block px-2 py-2 bg-yellow-500 text-black rounded-lg">
                            pending
                        </span>
                    )}
                </div>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-gray-700 font-semibold">
                        Doctor Details
                    </h2>
                    <div className="mt-3">
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.pet_id}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.pet_name}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.pet_age}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.pet_gender}
                            disabled
                            className="block w-full"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-gray-700 font-semibold">
                        Owner Details
                    </h2>
                    <div className="mt-3">
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.owner_id}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.owner_name}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.owner_email}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.owner_phone}
                            disabled
                            className="block w-full"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-gray-700 font-semibold">Pet Details</h2>
                    <div className="mt-3">
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.doctor_id}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.doctor_name}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.doctor_email}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={transaction.appointment.doctor_phone}
                            disabled
                            className="block w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between p-4">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    Invoice No
                                </td>
                                <td className="px-3"> : </td>
                                <td className="font-semibold text-sm text-gray-700">
                                    #{transaction.invoice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    Invoice Date
                                </td>
                                <td className="px-3"> : </td>
                                <td className="font-semibold text-sm text-gray-700">
                                    {transaction.date_transaction}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="p-4">
                <div className="border-t-2 border-gray-300">
                    <h2 className="text-gray-700 font-semibold text-md my-2">
                        Products
                    </h2>
                    <table className="table  dark:bg-dark-gray border-dark-gray rounded-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-black dark:text-white text-sm">
                                    Product Name
                                </th>
                                <th className="text-black dark:text-white text-sm">
                                    QTY
                                </th>
                                <th className="text-black dark:text-white text-sm">
                                    Unit Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.transaction_id}>
                                    <th>{product.product_id}</th>
                                    <th>{product.quantity}</th>
                                    <th>{formatCurr(product.harga_product)}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="text-gray-700 font-semibold text-md my-2">
                        Service
                    </h2>
                    <table className="table  dark:bg-dark-gray border-dark-gray rounded-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-black dark:text-white text-sm">
                                    Service Name
                                </th>
                                <th className="text-black dark:text-white text-sm">
                                    QTY
                                </th>
                                <th className="text-black dark:text-white text-sm">
                                    Unit Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.transaction_id}>
                                    <th>{service.service_id}</th>
                                    <th>
                                        {service.quantity
                                            ? service.quantity
                                            : "-"}
                                    </th>
                                    <th>{formatCurr(service.harga_service)}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-end p-4 space-y-2">
                <h2 className="text-gray-500 font-semibold">Subtotal</h2>
                <p className="text-gray-800 font-semibold ">
                    {formatCurr(transaction.subtotal)}
                </p>
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

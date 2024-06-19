import DangerButton from "@/Components/DangerButton";
import { ArrowLeftIcon, FileIcon } from "@/Components/Icons/Index";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import useExportPDF from "@/Hooks/useExportPDF";
import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useState } from "react";

const DetailCard = ({ transaction }) => {
    const [showMidtransModal, setShowMidtransModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(transaction);

    const handleDownloadPDF = useExportPDF(
        "owner.transaction.downloadPDF",
        transaction.invoice
    );

    const handlePayment = () => {
        setSelectedTransaction(transaction);
        setShowMidtransModal(true);
    };

    const handleMidtransPayment = async () => {
        try {
            const response = await axios.post(route("invoice"), {
                cart: selectedTransaction.details,
                subtotal: selectedTransaction.subtotal,
                cart_ids: selectedTransaction.cart_ids,
            });

            if (response && response.data && response.data.token) {
                const snapToken = response.data.token;
                window.snap.pay(snapToken);
            }
        } catch (error) {
            console.error("Error during transaction request:", error);
        }
    };

    useEffect(() => {
        const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        const myMidtransClientKey = import.meta.env.MIDTRANS_CLIENT_API_KEY;

        const script = document.createElement("script");
        script.src = snapSrcUrl;
        script.setAttribute("data-client-key", myMidtransClientKey);
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="rounded-md border shadow-md border-stroke bg-white p-4 shadow-default">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Invoice Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <InputLabel value="Invoice Number" />
                    <TextInput
                        value={transaction.invoice}
                        disabled
                        className="block w-full"
                    />
                </div>
                <div>
                    <InputLabel value="Transaction Date" />
                    <TextInput
                        value={transaction.date_transaction}
                        disabled
                        className="block w-full"
                    />
                </div>
                <div>
                    <InputLabel value="Payment Method" />
                    <TextInput
                        value={
                            transaction.payment_type !== null
                                ? transaction.payment_type
                                : "-"
                        }
                        disabled
                        className="block w-full"
                    />
                </div>
                <div>
                    <InputLabel value="Payment Status" />
                    <TextInput
                        value={
                            transaction.status_payment === "settlement"
                                ? "Paid"
                                : "Unpaid"
                        }
                        disabled
                        className={`block w-full font-bold ${
                            transaction.status_payment === "settlement"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    />
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 my-4">
                User Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-md">
                <div className="p-4 md:border-r">
                    <h3 className="text-md font-medium text-gray-500 mb-4">
                        Invoice From
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        Pawana Jiwa
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        Jl. Pawana Jiwa, Surabaya
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        pawanajiwa@gmail.com
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        081234567891
                    </p>
                </div>
                <div className="p-4">
                    <h3 className="text-md font-medium text-gray-500 mb-4">
                        Invoice To
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        {transaction.user.name}
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        {transaction.user.alamat}
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        {transaction.user.email}
                    </p>
                    <p className="text-md font-medium text-gray-700">
                        {transaction.user.phone}
                    </p>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 my-4">
                Product Details
            </h2>
            <div className="overflow-x-auto rounded-md border">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-gray-700 text-sm">
                                Product ID
                            </th>
                            <th className="text-gray-700 text-sm">
                                Product Name
                            </th>
                            <th className="text-gray-700 text-sm">Qty</th>
                            <th className="text-gray-700 text-sm">
                                Unit Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.details.map((detail, index) => (
                            <tr key={index}>
                                <th>{detail.product_id}</th>
                                <td>{detail.product_name}</td>
                                <td>{detail.quantity}</td>
                                <td>{formatCurr(detail.harga_product)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between my-4">
                <div className="text-md font-bold text-gray-700">Tax 11 %</div>
                <div className="text-md font-bold text-gray-700">
                    {formatCurr(transaction.ppn_tax)}
                </div>
            </div>
            <div className="flex justify-between my-4">
                <div className="text-md font-bold text-gray-700">Onkir</div>
                <div className="text-md font-bold text-gray-700">
                    {formatCurr(transaction.onkir)}
                </div>
            </div>
            <div className="flex justify-between my-4">
                <div className="text-md font-bold text-gray-700">Subtotal</div>
                <div className="text-md font-bold text-gray-700">
                    {formatCurr(transaction.subtotal)}
                </div>
            </div>
            <div className="flex items-center justify-between my-4">
                <div className="flex gap-2">
                    <Link href={route("owner.transaction")}>
                        <SecondaryButton>
                            <ArrowLeftIcon />
                            Back to Product Transaction List
                        </SecondaryButton>
                    </Link>
                    {transaction.status_payment === "settlement" ? (
                        <PrimaryButton
                            className="flex items-center gap-2"
                            onClick={handleDownloadPDF}
                        >
                            <FileIcon />
                            PDF
                        </PrimaryButton>
                    ) : null}
                </div>
                {transaction.status_payment === "pending" && (
                    <DangerButton
                        onClick={handlePayment}
                        className="flex justify-center items-center bg-gray-600 hover:bg-red-500 text-white"
                    >
                        Bayar Sekarang
                    </DangerButton>
                )}
            </div>
            {showMidtransModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            Anda akan membayar invoice:{" "}
                            {selectedTransaction.invoice} sebesar{" "}
                            {formatCurr(selectedTransaction.subtotal)}?
                        </h2>
                        <div className="flex justify-end gap-4">
                            <DangerButton
                                onClick={() => setShowMidtransModal(false)}
                                className="flex justify-center items-center !bg-gray-600 hover:bg-red-500 text-white"
                            >
                                Batal
                            </DangerButton>
                            <DangerButton
                                onClick={handleMidtransPayment}
                                className="flex justify-center items-center bg-gray-600 hover:bg-red-500 text-white"
                            >
                                Lanjutkan Pembayaran
                            </DangerButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailCard;

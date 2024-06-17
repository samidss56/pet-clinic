import { useState, useEffect } from "react";
import axios from "axios";
import { formatCurr } from "@/Utils/FormatPrice";
import { Inertia } from "@inertiajs/inertia";
import DangerButton from "@/Components/DangerButton";

const TransactionList = ({ transaction }) => {
    // console.log(transaction);
    const [showMidtransModal, setShowMidtransModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const handlePayment = async (transaction) => {
        setSelectedTransaction(transaction);
        setShowMidtransModal(true);
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleMidtransPayment = async () => {
        // console.log(selectedTransaction.cart_ids);
        //   Inertia.post(route('invoice'), {
        //     cart: selectedTransaction.details,
        //     subtotal: selectedTransaction.subtotal,
        //     cart_ids: selectedTransaction.cart_ids,
        // });

        try {
            const response = await axios.post(route("invoice"), {
                cart: selectedTransaction.details,
                subtotal: selectedTransaction.subtotal,
                cart_ids: selectedTransaction.cart_ids,
            });
            // console.log(response);
            // console.log(response.data.token);
            // console.log(response.data);
            if (response && response.data && response.data.token) {
                const snapToken = response.data.token;
                window.snap.pay(snapToken);
            }
        } catch (error) {
            console.error("Error during transaction request:", error);
        }
    };

    useEffect(() => {
        const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const myMidtransClientKey = import.meta.env.MIDTRANS_CLIENT_API_KEY;
      
        const script = document.createElement('script');
        script.src = snapSrcUrl;
        script.setAttribute('data-client-key', myMidtransClientKey);
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
      }, []);

    return (
        <div>
            {transaction && transaction.length > 0 ? (
                transaction.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="collapse collapse-arrow mb-3 bg-white border-[1.5px] border-secondary-color"
                    >
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={openIndex === transaction.id}
                            onChange={() => toggleAccordion(transaction.id)}
                        />
                        <div
                            className={`collapse-title text-xl font-medium ${
                                openIndex === transaction.id &&
                                "border-b-[1.5px] border-gray-300"
                            }`}
                            onClick={() => toggleAccordion(transaction.id)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 text-sm font-semibold">
                                    Invoice : {transaction.invoice}
                                </p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-gray-800 text-sm font-semibold">
                                        {transaction.date_transaction}
                                    </p>
                                    <span className="text-gray-800">|</span>
                                    <p className="text-gray-800 text-sm font-semibold">
                                        {formatCurr(transaction.subtotal)}
                                    </p>
                                    <span className="text-gray-800">|</span>
                                    <div
                                        className={`badge p-3 ${
                                            transaction.status_payment ===
                                                "pending" &&
                                            "bg-primary-red border-primary-red text-white"
                                        }  ${
                                            transaction.status_payment ===
                                                "settlement" &&
                                            "bg-green-600 border-green-600 text-white"
                                        }`}
                                    >
                                        {transaction.status_payment ==
                                        "settlement"
                                            ? "Selesai"
                                            : "Pending"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openIndex === transaction.id && (
                            <div className="collapse-content p-4">
                                {transaction.details.map((detail, index) => (
                                    <div
                                        key={index}
                                        className="border-b-2 border-gray-200 mb-4"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex flex-col">
                                                <h3 className="text-md">
                                                    {detail.name_product}
                                                </h3>
                                                {/* Tambahkan properti lain dari produk di sini */}
                                                {/* Contoh properti lain:
                                                    <p className="text-gray-500">Description: {detail.description}</p>
                                                    <p className="text-gray-500">Category: {detail.category}</p>
                                                */}
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold">
                                                    {detail.quantity}
                                                </span>
                                                <span className="font-semibold mx-4">
                                                    x
                                                </span>
                                                <span className="text-gray-500">
                                                    {formatCurr(
                                                        detail.harga_product
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {transaction.status_payment === "pending" && (
                                    <>
                                        <DangerButton
                                            onClick={() =>
                                                handlePayment(transaction)
                                            }
                                            className="flex justify-center items-center bg-gray-600 hover:bg-red-500 text-white"
                                        >
                                            Bayar Sekarang
                                        </DangerButton>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <h1 className="text-3xl font-bold text-slate-100">
                        Tidak ada data transaksi yang ditampilkan.
                    </h1>
                </div>
            )}
            {showMidtransModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            Anda akan membayar invoice:{" "}
                            {selectedTransaction.invoice} sebesar{" "}
                            {formatCurr(selectedTransaction.subtotal)}?
                        </h2>
                        <div className="flex justify-end gap-4">
                            {/* <button
                                onClick={() => setShowMidtransModal(false)}
                                className="btn btn-secondary"
                            >
                                Batal
                            </button> */}
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
                            {/* <button
                                onClick={handleMidtransPayment}
                                className="btn btn-primary"
                            >
                                Lanjutkan Pembayaran
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransactionList;

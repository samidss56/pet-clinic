import React from "react";
import { Link } from "@inertiajs/react";

export default function InvoiceShow() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Order Successful</h1>
                <img
                    src="https://img.freepik.com/free-vector/completed-concept-illustration_114360-3891.jpg"
                    alt="Order Successful"
                    className="mx-auto object-center h-64"
                />
                <p className="text-lg mb-4">
                    Thank you for your order! Your transaction was successful.
                </p>
                <Link href="/" className="btn btn-primary">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}

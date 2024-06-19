import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import ProductTransList from "@/Components/Superadmin/ProductTrans/ProductTransList";
import useExportWithParams from "@/Hooks/useExportDateWithParams";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Index = ({ auth, title, transactions }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleExport = useExportWithParams(
        "superadmin.product-transaction.report",
        startDate,
        endDate
    );
    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <AdminLayout>
                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="start-date"
                            className="text-gray-700 dark:text-white mb-1"
                        >
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="end-date"
                            className="text-gray-700 dark:text-white mb-1"
                        >
                            End Date
                        </label>
                        <input
                            type="date"
                            id="end-date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mt-6">
                        <PrimaryButton onClick={handleExport}>
                            Export PDF
                        </PrimaryButton>
                    </div>
                </div>
                <ProductTransList transactions={transactions.data} />
                <Paginator meta={transactions.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

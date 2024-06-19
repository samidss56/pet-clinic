import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TransactionsList from '@/Components/Superadmin/Transaction/TransactionsList';
import { Paginator } from '@/Components/Paginator';

const Index = ({ auth, title, transaction }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [exportReset, setExportReset] = useState(false);

    useEffect(() => {
        if (exportReset) {
            const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
            window.location.href = route('downloadlaporansuperadmin') + '?' + params.toString();
            setExportReset(false);
        }
    }, [startDate, endDate, exportReset]);

    const handleExport = () => {
        setExportReset(true);
    };
    
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
                        <label htmlFor="start-date" className="text-gray-700 dark:text-white mb-1">
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
                        <label htmlFor="end-date" className="text-gray-700 dark:text-white mb-1">
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
                        <PrimaryButton onClick={handleExport} className="px-3 py-1">
                            Export PDF
                        </PrimaryButton>
                    </div>
                </div>
                <TransactionsList transaction={transaction.data} />
                <Paginator meta={transaction.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

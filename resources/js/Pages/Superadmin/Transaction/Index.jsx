import ProductsList from "@/Components/Superadmin/Products/ProductsList";
import TransactionsList from "@/Components/Superadmin/Transaction/TransactionsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, transaction }) => {
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
                <TransactionsList transaction={transaction.data} />
                <Paginator meta={transaction.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

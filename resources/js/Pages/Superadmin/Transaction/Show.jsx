import ProductsList from "@/Components/Superadmin/Products/ProductsList";
import TransactionsList from "@/Components/Superadmin/Transaction/TransactionsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, router } from "@inertiajs/react";
import DetailCard from "@/Components/Superadmin/Transaction/DetailCard";

const Show = ({ transaction, auth, title }) => {
    console.log(transaction);

    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title} #{transaction.data.invoice}
                </h2>
            }
        >
            <Head title={title} />
            <AdminLayout>
                <DetailCard transaction={transaction.data} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Show;

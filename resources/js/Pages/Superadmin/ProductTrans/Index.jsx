import { Paginator } from "@/Components/Paginator";
import ProductTransList from "@/Components/Superadmin/ProductTrans/ProductTransList";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, title, transactions }) => {
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
                <ProductTransList transactions={transactions.data} />
                <Paginator meta={transactions.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

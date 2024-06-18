import DetailCard from "@/Components/Admin/ProductTrans/DetailCard";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, title, transaction }) => {
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
                <DetailCard transaction={transaction.data} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Show;

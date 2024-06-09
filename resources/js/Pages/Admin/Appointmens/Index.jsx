import AppointmensList from "@/Components/Admin/Appointmens/AppointmensList";
import ProductsList from "@/Components/Admin/Products/ProductsList";
import TransactionsList from "@/Components/Admin/Transaction/TransactionsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, appointments }) => {
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
                <AppointmensList appointments={appointments.data} />
                <Paginator meta={appointments.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

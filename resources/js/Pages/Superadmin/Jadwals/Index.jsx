import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import JadwalsList from "@/Components/Superadmin/Jadwals/JadwalsList";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, jadwals }) => {
    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    Doctor Schedules Management
                </h2>
            }
        >
            <Head title="Doctor Schedules Management"/>
            <AdminLayout>
                <JadwalsList jadwals={jadwals.data} />
                <Paginator meta={jadwals.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

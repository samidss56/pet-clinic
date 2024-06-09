import JadwalsList from "@/Components/Docter/Jadwals/JadwalsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import AppDocter from "@/Layouts/AppDocter";
import { Head, Link } from "@inertiajs/react";

const Index = ({ docter, title, jadwals }) => {
    return (
        <AppDocter
            user={docter}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <AdminLayout>
                <JadwalsList jadwals={jadwals.data} />
                <Paginator meta={jadwals.meta} />
            </AdminLayout>
        </AppDocter>
    );
};

export default Index;

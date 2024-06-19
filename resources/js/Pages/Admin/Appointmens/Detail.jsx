import DetailCard from "@/Components/Admin/Appointmens/DetailCard";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, title, appointment }) => {
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
                <DetailCard appointment={appointment.data} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Show;

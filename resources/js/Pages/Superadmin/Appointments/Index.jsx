import AppointmentsList from "@/Components/Superadmin/Appointments/AppointmentsList";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Appointments = ({ auth, title }) => {
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
                <AppointmentsList />
            </AdminLayout>
        </Authenticated>
    );
};

export default Appointments;

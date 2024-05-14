import AppointmentsList from "@/Components/Superadmin/Appointments/AppointmentsList";
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
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <AppointmentsList />
                </div>
            </div>
        </Authenticated>
    );
};

export default Appointments;

import { ArrowLeftIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import DetailCard from "@/Components/Superadmin/Appointments/DetailCard";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const DetailAppointment = ({ auth, title, appointment }) => {
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

export default DetailAppointment;

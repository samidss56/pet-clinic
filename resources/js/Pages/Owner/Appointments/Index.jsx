import AppointmentsList from "@/Components/Owner/Appointments/AppointmentsList";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, appointments }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <AppointmentsList appointments={appointments.data} />
                    <Paginator meta={appointments.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

import DetailCard from "@/Components/Owner/Appointments/DetailCard";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, title, appointment }) => {
    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <DetailCard appointment={appointment.data} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Show;

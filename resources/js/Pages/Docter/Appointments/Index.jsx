import AppointmentsList from "@/Components/Docter/Appointments/AppointmentsList";
import JadwalsList from "@/Components/Docter/Jadwals/JadwalsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AppDocter from "@/Layouts/AppDocter";
import { Head, Link } from "@inertiajs/react";

const Index = ({ docter, title, docter_app }) => {
    // console.log(jadwals);
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
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <AppointmentsList docter_app={docter_app.data}/>
                    <Paginator meta={docter_app.meta} />
                </div>
            </div>
        </AppDocter>
    );
};

export default Index;

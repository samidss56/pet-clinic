import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import JadwalsList from "@/Components/Superadmin/Jadwals/JadwalsList";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, jadwals }) => {
    // console.log(jadwals);
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
                    <JadwalsList jadwals={jadwals.data}/>
                    <Paginator meta={jadwals.meta} />
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;

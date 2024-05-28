import ServicesList from "@/Components/Admin/Services/ServicesList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Services = ({ auth, title, services }) => {
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
                <Link href={route("admin.services.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Service
                    </PrimaryButton>
                </Link>
                <ServicesList services={services.data} />
                <Paginator meta={services.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Services;

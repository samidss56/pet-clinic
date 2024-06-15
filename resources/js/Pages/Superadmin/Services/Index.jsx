import ServicesList from "@/Components/Superadmin/Services/ServicesList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { CreateIcon } from "@/Components/Icons/Index";
import AdminLayout from "@/Layouts/AdminLayout";

const Services = ({ auth, title, services, flash }) => {
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
                <Link href={route("superadmin.services.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Service
                    </PrimaryButton>
                </Link>
                <ServicesList
                    services={services.data}
                    notification={flash.message}
                />
                <Paginator meta={services.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Services;

import GalleriesList from "@/Components/Admin/Galleries/GalleriesList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Galleries = ({ auth, title, galleries, flash }) => {
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
                <Link href={route("admin.galleries.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Gallery
                    </PrimaryButton>
                </Link>
                <GalleriesList
                    galleries={galleries.data}
                    notification={flash.message}
                />
                <Paginator meta={galleries.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Galleries;

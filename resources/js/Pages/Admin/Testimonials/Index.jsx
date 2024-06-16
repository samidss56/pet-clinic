import TestimonialsList from "@/Components/Admin/Testimonials/TestimonialsList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Testimonials = ({ auth, title, testimonials, flash }) => {
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
                <TestimonialsList
                    testimonials={testimonials.data}
                    notification={flash.message}
                />
                <Paginator meta={testimonials.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Testimonials;

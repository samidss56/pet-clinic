import TestimonialsList from "@/Components/Admin/Testimonials/TestimonialsList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Testimonials = ({ auth, title, testimonials }) => {
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
                {/* <Link href={route("admin.testimonials.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Testimonial
                    </PrimaryButton>
                </Link> */}
                <TestimonialsList testimonials={testimonials.data} />
                <Paginator meta={testimonials.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Testimonials;

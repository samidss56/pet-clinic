import TestimonialsList from "@/Components/Owner/Testimonials/TestimonialsList";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { CreateIcon } from "@/Components/Icons/Index";

const Index = ({ auth, title, testimonials, flash }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <Link href={route("owner.testimonials.create")}>
                        <PrimaryButton className="mb-4 flex gap-2">
                            <CreateIcon />
                            Write a Testimonial
                        </PrimaryButton>
                    </Link>
                    <TestimonialsList
                        testimonials={testimonials.data}
                        notification={flash.message}
                    />
                    <Paginator meta={testimonials.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

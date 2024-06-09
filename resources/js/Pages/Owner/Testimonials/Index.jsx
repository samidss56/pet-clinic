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

const Index = ({ auth, title, testimonials }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                        {/* <InputLabel htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            type="text"
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm"
                            value={auth.user.name}
                            onChange={(e) => setData("description", e.target.value)}
                            required
                        /> */}
                        {/* <div className="border rounded-lg p-4">
                            <img className='w-60' src={auth.user.profile ? `${appUrl}/storage/${auth.user.profile}` : 'https://via.placeholder.com/150'} alt="" />
                        </div> */}
                    <Link href={route("owner.testimonials.create")}>
                        <PrimaryButton className="mb-4 flex gap-2">
                            <CreateIcon />
                            Write a Testimonial
                        </PrimaryButton>
                    </Link>
                    <TestimonialsList testimonials={testimonials.data} />
                    <Paginator meta={testimonials.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

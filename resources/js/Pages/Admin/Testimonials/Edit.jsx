import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

const UpdateTestimonial = ({ auth, title, testimonial }) => {
    const { data, setData, errors } = useForm({
        name: testimonial.name,
        content: testimonial.content,
        status: testimonial.status,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("content", data.content);
        formData.append("status", data.status);

        router.post(`/admin/testimonials/update/${testimonial.testimonial_id}`, formData, {
            _method: "put",
        });
    };

    const appUrl = import.meta.env.VITE_APP_URL;
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
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <InputLabel htmlFor="name" value="Owner Name" />
                    <TextInput
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full"
                        placeholder="Owner Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        readOnly
                    />
                    <InputError message={errors.name} className="mb-2" />

                    <InputLabel htmlFor="content" value="Testimonial Content" />
                    <TextArea
                        type="text"
                        id="content"
                        name="content"
                        className="block w-full text-gray-800"
                        placeholder="Testimonial Content"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        readOnly
                    />
                    <InputError message={errors.content} className="mb-2" />

                    <InputLabel htmlFor="status" value="status" />
                    <select
                        id="status"
                        name="status"
                        className="block w-full text-gray-800 border-gray-300 rounded-md shadow-sm"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Ditolak</option>
                        <option value="accepted">Disetujui</option>
                    </select>
                    <InputError message={errors.status} className="mb-2"/>

                    {/* <InputLabel htmlFor="status" value="Testimonial Content" />
                    <TextInput
                        type="text"
                        id="status"
                        name="status"
                        className="block w-full"
                        placeholder="Testimonial Content"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        required
                    />
                    <InputError message={errors.status} className="mb-2" /> */}

                    <div className="flex gap-3 mt-4">
                        <Link href={route("admin.testimonials")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Testimonials
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Update Testimonial
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default UpdateTestimonial;

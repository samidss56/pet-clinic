import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const CreateGallery = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        image: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", data.image);

        post(route("admin.galleries.store", formData));
    };
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
                    <InputLabel htmlFor="image" value="Image For Gallery" />
                    <TextInput
                        id="image"
                        type="file"
                        name="image"
                        // value={data.image}
                        className="block w-full file-input file-input-bordered mb-0"
                        placeholder="Image For Gallery"
                        onChange={(e) =>
                            setData("image", e.target.files[0])
                        }
                        required
                    />
                    <InputError
                        message={errors.image}
                        className="mb-2"
                    />
                    <div className="flex gap-3 mt-4">
                        <Link href={route("admin.galleries")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Galleries
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Create Gallery
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default CreateGallery;

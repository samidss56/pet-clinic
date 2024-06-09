import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const UpdateService = ({ auth, title, service }) => {
    const { data, setData, post, errors } = useForm({
        name_service: service.name_service,
        price_service: service.price_service,
        image_service: service.image_service,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name_service", data.name_service);
        formData.append("price_service", data.price_service);
        formData.append("image_service", data.image_service);

        post(route("superadmin.services.update", service.service_id), {
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
                    <InputLabel htmlFor="name_service" value="Service Name" />
                    <TextInput
                        type="text"
                        id="name_service"
                        name="name_service"
                        className="block w-full"
                        placeholder="Service Name"
                        value={data.name_service}
                        onChange={(e) =>
                            setData("name_service", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.name_service}
                        className="mb-2"
                    />
                    <div className="flex items center gap-4">
                        <img
                            className="w-20 rounded-lg"
                            src={`${appUrl}/storage/${service.image_service}`}
                            alt=""
                        />
                        <div className="w-full flex items-center">
                            <TextInput
                                id="image_service"
                                type="file"
                                name="image_service"
                                className="block w-full file-input file-input-bordered mb-0"
                                placeholder="Service Image"
                                onChange={(e) =>
                                    setData("image_service", e.target.files[0])
                                }
                                required
                            />
                            <InputError
                                message={errors.image_service}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <InputLabel htmlFor="price_service" value="Service Price" />
                    <TextInput
                        type="number"
                        id="price_service"
                        name="price_service"
                        className="block w-full"
                        placeholder="Service Price"
                        value={data.price_service}
                        onChange={(e) =>
                            setData("price_service", parseInt(e.target.value))
                        }
                        required
                    />
                    <InputError
                        message={errors.price_service}
                        className="mb-2"
                    />
                    <div className="flex gap-3 mt-4">
                        <Link href={route("superadmin.services")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Services
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Update Services
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default UpdateService;

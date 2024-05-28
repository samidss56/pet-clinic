import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const CreateService = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        name_service: "",
        price_service: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("superadmin.services.store"));
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
                <form className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray">
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
                            Create Services
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default CreateService;

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const UpdateService = ({ auth, title, service }) => {
    const { data, setData, put, errors } = useForm({
        name_service: service.name_service,
        price_service: service.price_service,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.services.update", service.service_id));
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
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <form className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray">
                        <InputLabel
                            htmlFor="name_service"
                            value="Service Name"
                        />
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
                        <InputLabel
                            htmlFor="price_service"
                            value="Service Price"
                        />
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
                            <Link href={route("admin.services")}>
                                <SecondaryButton className=" gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <line x1="19" x2="5" y1="12" y2="12" />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                    Back To Services
                                </SecondaryButton>
                            </Link>
                            <PrimaryButton type="submit" onClick={handleSubmit}>
                                Update Services
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default UpdateService;

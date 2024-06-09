import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Create = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        password: "",
        no_telp: "",
        alamat: "",
        profile: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("no_telp", data.no_telp);
        formData.append("alamat", data.alamat);
        formData.append("profile", data.profile);

        post("/superadmin/docters/store", formData);
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
                    <InputLabel htmlFor="name" value="Docters Name" />
                    <TextInput
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full"
                        placeholder="Docter Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mb-2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="email" value="email" />
                            <TextInput
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                type="password"
                                id="password"
                                name="password"
                                className="block w-full"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="no_telp" value="No Telp" />
                            <TextInput
                                type="number"
                                id="no_telp"
                                name="no_telp"
                                className="block w-full"
                                placeholder="no_telp"
                                value={data.no_telp}
                                onChange={(e) =>
                                    setData("no_telp", parseInt(e.target.value))
                                }
                                required
                            />
                            <InputError
                                message={errors.no_telp}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="profile"
                                value="Profile Image"
                            />
                            <TextInput
                                id="profile"
                                type="file"
                                name="profile"
                                // value={data.image_product}
                                className="block w-full file-input file-input-bordered mb-0"
                                placeholder="Product Image"
                                onChange={(e) =>
                                    setData("profile", e.target.files[0])
                                }
                                required
                            />
                            <InputError
                                message={errors.profile}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <InputLabel htmlFor="alamat" value="Alamat" />
                    <TextInput
                        type="text"
                        id="alamat"
                        name="alamat"
                        className="block w-full"
                        placeholder="Alamat"
                        value={data.alamat}
                        onChange={(e) => setData("alamat", e.target.value)}
                        required
                    />
                    <InputError message={errors.alamat} className="mb-2" />

                    <div className="flex gap-3 mt-4">
                        <Link href={route("superadmin.docters")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Docter
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Create Docter
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default Create;

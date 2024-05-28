import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const CreateUser = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("superadmin.users.store"));
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
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <InputLabel htmlFor="name" value="User Name" />
                    <TextInput
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full"
                        placeholder="User Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mb-2" />
                    <InputLabel htmlFor="email" value="User Email" />
                    <TextInput
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full"
                        placeholder="User Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mb-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="role" value="Role" />
                            <select
                                className="select select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                name="role"
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                required
                            >
                                <option disabled selected>
                                    Select a Role
                                </option>
                                <option value="owner">Owner</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super Admin</option>
                            </select>
                            <InputError
                                message={errors.role}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                className="block w-full"
                                placeholder="User Password"
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
                        <div>
                            <PrimaryButton className="mt-4" type="submit">
                                Create User
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default CreateUser;

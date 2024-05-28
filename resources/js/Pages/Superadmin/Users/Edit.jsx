import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const UpdateUser = ({ auth, title, user }) => {
    const { data, setData, errors, patch } = useForm({
        name: user.user.name,
        email: user.user.email,
        role: user.role.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("superadmin.users.update", user.user.user_id));
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
                    <InputLabel htmlFor="role" value="Role" />
                    <select
                        className="select select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        name="role"
                        value={data.role}
                        onChange={(e) => setData("role", e.target.value)}
                        required
                    >
                        <option disabled>Select a Role</option>
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="superadmin">Super Admin</option>
                    </select>
                    <InputError message={errors.role} className="mb-2" />
                    <div>
                        <PrimaryButton className="mt-4" type="submit">
                            Update User
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default UpdateUser;

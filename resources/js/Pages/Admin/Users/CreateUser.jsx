import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

const CreateUser = ({ auth, title }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...values,
        };
        router.post("/admin/users/create", payload);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                    >
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            className="block w-full"
                            placeholder="User Name"
                            value={values.name}
                            onChange={handleChange}
                            required
                        />
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            className="block w-full"
                            placeholder="User Email"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            className="block w-full"
                            placeholder="User Password"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        <InputLabel htmlFor="role" value="Role" />
                        <select
                            className="select select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            required
                        >
                            <option disabled>Select a Role</option>
                            <option value="owner">Owner</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div>
                            <PrimaryButton className="mt-4" type="submit">
                                Create User
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default CreateUser;

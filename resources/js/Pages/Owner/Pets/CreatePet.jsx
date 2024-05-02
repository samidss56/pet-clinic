import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const CreatePet = ({ auth, title, petTypes }) => {
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
                        // onSubmit={handleSubmit}
                        className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                    >
                        <InputLabel htmlFor="name" value="Pet Name" />
                        <TextInput
                            id="name"
                            name="name"
                            className="block w-full"
                            placeholder="Pet Name"
                            // value={values.name}
                            // onChange={handleChange}
                            required
                        />
                        <InputLabel htmlFor="image" value="Pet Image" />
                        <TextInput
                            id="image"
                            type="file"
                            name="image"
                            className="block w-full file-input file-input-bordered"
                            placeholder="User Email"
                            // value={values.email}
                            // onChange={handleChange}
                            required
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                            <div>
                                <InputLabel htmlFor="age" value="Pet Age" />
                                <TextInput
                                    id="age"
                                    type="number"
                                    name="age"
                                    className="block w-full"
                                    placeholder="Pet Age"
                                    // value={values.password}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="gender"
                                    value="Pet Gender"
                                />
                                <select
                                    className="select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="gender"
                                    // value={values.role}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option disabled>Select a Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <InputLabel htmlFor="color" value="Pet Color" />
                                <TextInput
                                    id="color"
                                    name="color"
                                    className="block w-full"
                                    placeholder="Pet Color"
                                    // value={values.password}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="petType" value="Pet Type" />
                                <select
                                    className="select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="petType"
                                    // value={values.role}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option disabled>Select a Pet Type</option>
                                    {petTypes.map((petType) => (
                                        <>
                                            <option
                                                key={petType.id}
                                                value={petType.type}
                                            >
                                                {petType.type}
                                            </option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <PrimaryButton className="mt-4" type="submit">
                                Create Pet
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default CreatePet;

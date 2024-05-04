import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const UpdatePet = ({ auth, title, pet, petTypes }) => {
    const { data, setData, patch, errors } = useForm({
        name: pet.name,
        image: null,
        age: pet.age,
        gender: pet.gender,
        color: pet.color,
        pet_type_id: pet.pet_type_id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...data,
            age: parseInt(data.age),
            pet_type_id: parseInt(data.pet_type_id),
        };

        patch(route("owner.pets.update", pet.id), formattedData);
    };

    const appUrl = import.meta.env.VITE_APP_URL;

    // console.log(data);
    // console.log(pet);
    // console.log(petTypes);
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
                        encType="multipart/form-data"
                        className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                    >
                        <InputLabel htmlFor="name" value="Pet Name" />
                        <TextInput
                            id="name"
                            name="name"
                            className="block w-full"
                            placeholder="Pet Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mb-2" />

                        <InputLabel htmlFor="image" value="Pet Image" />
                        <div className="flex items center gap-4">
                            <img
                                className="w-20 rounded-lg"
                                src={`${appUrl}/storage/${pet.image}`}
                                alt=""
                            />
                            <div className="w-full">
                                <TextInput
                                    id="image"
                                    type="file"
                                    name="image"
                                    className="block w-full file-input file-input-bordered mb-0"
                                    placeholder="User Email"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.image}
                                    className="mb-2"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                            <div>
                                <InputLabel htmlFor="age" value="Pet Age" />
                                <TextInput
                                    id="age"
                                    type="number"
                                    name="age"
                                    className="block w-full"
                                    placeholder="Pet Age"
                                    value={data.age}
                                    onChange={(e) =>
                                        setData("age", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.age}
                                    className="mb-2"
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
                                    value={data.gender}
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    required
                                >
                                    <option disabled>Select a Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <InputError
                                    message={errors.gender}
                                    className="mb-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="color" value="Pet Color" />
                                <TextInput
                                    id="color"
                                    name="color"
                                    className="block w-full"
                                    placeholder="Pet Color"
                                    value={data.color}
                                    onChange={(e) =>
                                        setData("color", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.color}
                                    className="mb-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="pet_type_id"
                                    value="Pet Type"
                                />
                                <select
                                    className="select-bordered w-full border-gray-300 mb-2 bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="pet_type_id"
                                    value={data.pet_type_id}
                                    onChange={(e) =>
                                        setData("pet_type_id", e.target.value)
                                    }
                                    required
                                >
                                    <option disabled>Select a Pet Type</option>
                                    {petTypes.map((petType) => (
                                        <option
                                            key={petType.id}
                                            value={petType.id}
                                        >
                                            {petType.type}
                                        </option>
                                    ))}
                                </select>
                                <InputError
                                    message={errors.pet_type_id}
                                    className="mb-2"
                                />
                            </div>
                        </div>
                        <div>
                            <PrimaryButton
                                className="mt-4"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Update Pet
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default UpdatePet;

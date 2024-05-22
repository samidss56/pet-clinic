import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

const UpdatePet = ({ auth, title, pet }) => {
    const { data, setData, errors } = useForm({
        name: pet.name,
        image: pet.image,
        type: pet.type,
        age: pet.age,
        gender: pet.gender,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("image", data.image);
        formData.append("type", data.type);
        formData.append("age", data.age);
        formData.append("gender", data.gender);

        router.post(`/owner/pets/update/${pet.pet_id}`, formData, {
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
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                    >
                        <InputLabel htmlFor="name" value="Pet Name" />
                        <TextInput
                            type="text"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-1">
                            <div>
                                <InputLabel htmlFor="type" value="Pet Type" />
                                <TextInput
                                    type="text"
                                    id="type"
                                    name="type"
                                    className="block w-full"
                                    placeholder="Pet Type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData(
                                            "type",
                                            e.target.value.toLowerCase()
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.type}
                                    className="mb-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="gender" value="Gender" />
                                <TextInput
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    className="block w-full"
                                    placeholder="Gender"
                                    value={data.gender}
                                    onChange={(e) =>
                                        setData(
                                            "gender",
                                            e.target.value.toLowerCase()
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.gender}
                                    className="mb-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="age" value="Pet Age" />
                                <TextInput
                                    type="Number"
                                    id="age"
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
                        </div>
                        <div>
                            <PrimaryButton className="mt-4" type="submit">
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

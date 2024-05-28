import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import UserAvatar from "@/Components/UserAvatar";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/inertia-react";

const UpdateProfileInformationForm = ({ user, className = "" }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            docter_id: user.docter_id,
            name: user.name,
            email: user.email,
            profile: null,
            no_telp: user.no_telp,
            alamat: user.alamat,
            _method: "PATCH",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("docter.profile.update", { docter: user.docter_id }));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <UserAvatar
                    className="w-24 rounded-full"
                    avatar={user.profile}
                />
                <div>
                    <InputLabel htmlFor="profile" value="Profile Picture" />

                    <TextInput
                        id="profile"
                        name="profile"
                        type="file"
                        className="block w-full file-input file-input-bordered mb-0 bg-white"
                        onChange={(e) => setData("profile", e.target.files[0])}
                        autoComplete="profile"
                    />
                    <p className="text-sm mt-2 text-gray-800">
                        Please upload square Picture
                    </p>

                    <InputError className="mt-2" message={errors.profile} />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="no_telp" value="Phone Number" />

                    <TextInput
                        id="no_telp"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.no_telp}
                        onChange={(e) => setData("no_telp", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.no_telp} />
                </div>

                <div>
                    <InputLabel htmlFor="alamat" value="Address" />

                    <TextArea
                        id="alamat"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.alamat}
                        onChange={(e) => setData("alamat", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.alamat} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfileInformationForm;

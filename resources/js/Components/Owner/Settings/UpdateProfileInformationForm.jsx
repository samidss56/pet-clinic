import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import UserAvatar from "@/Components/UserAvatar";
import TextArea from "@/Components/TextArea";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
    user,
}) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            profile: null,
            no_telp: user.no_telp,
            alamat: user.alamat,
            _method: "PATCH",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("owner.profile.update"));
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

            <form onSubmit={submit} className="mt-6 space-y-6">
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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

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
}

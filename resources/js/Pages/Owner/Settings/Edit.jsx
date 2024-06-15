import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import DeleteUserForm from "@/Components/Owner/Settings/DeleteUserForm";
import UpdatePasswordForm from "@/Components/Owner/Settings/UpdatePasswordForm";
import UpdateProfileInformation from "@/Components/Owner/Settings/UpdateProfileInformationForm";
import useToastNotification from "@/Hooks/useToastNotification";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const notification = usePage().props.flash.message;
    useToastNotification(notification);
    return (
        <AuthenticatedLayout
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full flex-col space-y-3">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            user={auth.user}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </OwnerLayout>
        </AuthenticatedLayout>
    );
}

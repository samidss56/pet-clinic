import UpdatePasswordForm from "@/Components/Docter/Settings/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Components/Docter/Settings/UpdateProfileInformationForm";
import AdminLayout from "@/Layouts/AdminLayout";
import AppDocter from "@/Layouts/AppDocter";
import { Head } from "@inertiajs/react";

const Edit = ({ docter, title, status }) => {
    return (
        <AppDocter
            user={docter}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <AdminLayout>
                <div className="w-full flex-col space-y-3">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            status={status}
                            user={docter}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                </div>
            </AdminLayout>
        </AppDocter>
    );
};

export default Edit;

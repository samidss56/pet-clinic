import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, title }) {
    console.log(auth);
    return (
        <AuthenticatedLayout user={auth}>
            <Head title={title} />

            <OwnerLayout>
                <div className="w-full md:w-1/3 flex-col sm:rounded-lg">
                    <ProfileCard user={auth}/>
                </div>
            </OwnerLayout>
        </AuthenticatedLayout>
    );
}

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
<<<<<<< HEAD
                    <ProfileCard user={auth} />
=======
                    <ProfileCard user={auth}/>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                </div>
            </OwnerLayout>
        </AuthenticatedLayout>
    );
}

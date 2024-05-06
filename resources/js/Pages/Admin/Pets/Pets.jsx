import PetsList from "@/Components/Admin/Pets/PetsList";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Pets = ({ auth, title, pets }) => {
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
                    <PetsList pets={pets.data} />
                    <Paginator meta={pets.meta} />
                </div>
            </div>
        </Authenticated>
    );
};

export default Pets;

import PetsList from "@/Components/Owner/Pets/PetsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Pets = ({ auth, title, myPets }) => {
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
                    <Link href={route("owner.pets.create")}>
                        <PrimaryButton className="mb-4 flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 22 22"
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <line x1="12" x2="12" y1="5" y2="19" />
                                <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add Pet
                        </PrimaryButton>
                    </Link>
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-4">
                        <PetsList myPets={myPets.data} />
                    </div>
                    <Paginator meta={myPets.meta} />
                </div>
            </div>
        </Authenticated>
    );
};

export default Pets;

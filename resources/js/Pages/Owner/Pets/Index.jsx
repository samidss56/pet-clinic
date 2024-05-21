<<<<<<< HEAD
import { CreateIcon } from "@/Components/Icons/Index";
=======
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import PetsList from "@/Components/Owner/Pets/PetsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Pets = ({ auth, title, myPets }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />

            <OwnerLayout>
<<<<<<< HEAD
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
=======
                <div className="w-full md:hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <Link href={route("owner.pets.create")}>
                        <PrimaryButton className="flex gap-2">
<<<<<<< HEAD
                            <CreateIcon />
=======
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
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                            Add Pet
                        </PrimaryButton>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4">
                        <PetsList myPets={myPets.data} />
                    </div>
                    <Paginator meta={myPets.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Pets;

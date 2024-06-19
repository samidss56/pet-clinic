import { CreateIcon } from "@/Components/Icons/Index";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import PetsList from "@/Components/Owner/Pets/PetsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Pets = ({ auth, title, myPets, flash }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />

            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <Link href={route("owner.pets.create")}>
                        <PrimaryButton className="flex gap-2">
                            <CreateIcon />
                            Add Pet
                        </PrimaryButton>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4">
                        <PetsList
                            myPets={myPets.data}
                            notification={flash.message}
                        />
                    </div>
                    <Paginator meta={myPets.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Pets;

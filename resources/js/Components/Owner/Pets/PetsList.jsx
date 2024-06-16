import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeletePet from "./ModalDeletePet";
import { CreateIcon, DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import useToastNotification from "@/Hooks/useToastNotification";

const isPets = (myPets, notification) => {
    const [showModalDeletePet, setShowModalDeletePet] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeletePet = (pet) => {
        setShowModalDeletePet(true);
        setSelectedPet(pet);
    };

    const closeModalDeletePet = () => {
        setShowModalDeletePet(false);
        setSelectedPet(null);
    };

    useToastNotification(notification);

    return (
        <>
            {myPets.length > 0 &&
                myPets.map((pet) => (
                    <div
                        className="card w-full lg:max-w-80 bg-white shadow-xl cursor-pointer"
                        key={pet.pet_id}
                    >
                        <figure className="p-5">
                            <img
                                src={`${appUrl}/storage/${pet.image}`}
                                alt="Pet Image"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title text-gray-800 dark:text-white flex justify-between">
                                {pet.name}
                                <div className="flex justify-between items-center gap-3">
                                    <div className="badge border-primary-red text-primary-red bg-white p-4">{`${pet.age} years`}</div>
                                </div>
                            </h2>
                            <div className="flex gap-3">
                                <div className="badge badge-outline p-4 text-gray-800 dark:text-gray-100 opacity-70">
                                    {pet.type}
                                </div>
                                <div className="badge badge-outline p-4 text-gray-800 dark:text-gray-100 opacity-70">
                                    {pet.gender}
                                </div>
                            </div>
                            <div className="card-actions justify-between"></div>
                            <div className="flex justify-between gap-4">
                                <DangerButton
                                    className="w-full flex justify-center"
                                    onClick={() =>
                                        handleShowModalDeletePet(pet)
                                    }
                                >
                                    <DeleteIcon />
                                </DangerButton>
                                <ModalDeletePet
                                    show={
                                        showModalDeletePet && selectedPet == pet
                                    }
                                    onClose={closeModalDeletePet}
                                    pet={selectedPet}
                                />
                                <Link
                                    className="w-full flex justify-center"
                                    href={route("owner.pets.edit", pet.pet_id)}
                                >
                                    <SecondaryButton className="w-full flex justify-center">
                                        <UpdateIcon />
                                    </SecondaryButton>
                                </Link>
                                <Link
                                    className="w-full flex justify-center"
                                    href={route(
                                        "owner.appointmen.create",
                                        pet.pet_id
                                    )}
                                >
                                    <PrimaryButton className="w-full flex justify-center">
                                        <CreateIcon />
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

const noPets = () => {
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-slate-100">
            There is no pets data to Show.
        </h1>
    </div>;
};

const PetsList = ({ myPets, notification }) => {
    return !myPets ? noPets() : isPets(myPets, notification);
};

export default PetsList;

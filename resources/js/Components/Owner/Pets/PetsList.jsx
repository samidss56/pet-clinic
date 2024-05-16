import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeletePet from "./ModalDeletePet";

const isPets = (myPets) => {
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

    return (
        <>
            {myPets.length > 0 &&
                myPets.map((pet) => (
                    <div
                        className="card w-full h-full bg-gray-100 dark:bg-dark-gray shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
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
                                    <div className="badge badge-secondary p-4">{`${pet.age} years`}</div>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                    </svg>
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="22"
                                            height="22"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                    </SecondaryButton>
                                </Link>
                                <Link className="w-full flex justify-center">
                                    <PrimaryButton className="w-full flex justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="main-grid-item-icon fill-white dark:fill-dark-gray"
                                        >
                                            <path d="m12 22 1-2v-3h5a1 1 0 0 0 1-1v-1.586c0-.526-.214-1.042-.586-1.414L17 11.586V8a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1v3.586L5.586 13A2.01 2.01 0 0 0 5 14.414V16a1 1 0 0 0 1 1h5v3l1 2zM8 4h8v2H8V4zM7 14.414l1.707-1.707A.996.996 0 0 0 9 12V8h6v4c0 .266.105.52.293.707L17 14.414V15H7v-.586z"></path>
                                        </svg>
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

const PetsList = ({ myPets }) => {
    return !myPets ? noPets() : isPets(myPets);
};

export default PetsList;

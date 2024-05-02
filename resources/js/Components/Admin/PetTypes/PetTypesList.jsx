import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import ModalDeletePetType from "./ModalDeletePetType";
import ModalUpdatePetType from "./ModalUpdatePetType";

const isPetTypes = (petTypes) => {
    const [showModalDeletePetType, setShowModalDeletePetType] = useState(false);
    const [showModalUpdatePetType, setShowModalUpdatePetType] = useState(false);
    const [selectedPetType, setSelectedPetType] = useState(null);

    const handleShowModalUpdatePetType = (petType) => {
        setShowModalUpdatePetType(true);
        setSelectedPetType(petType);
    };

    const closeModalUpdatePetType = () => {
        setShowModalUpdatePetType(false);
        setSelectedPetType(null);
    };

    const handleShowModalDeletePetType = (petType) => {
        setShowModalDeletePetType(true);
        setSelectedPetType(petType);
    };

    const closeModalDeletePetType = () => {
        setShowModalDeletePetType(false);
        setSelectedPetType(null);
    };
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Pet Type ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Type Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {petTypes.length > 0 &&
                        petTypes.map((petType) => (
                            <tr key={petType.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {petType.id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {petType.type}
                                </th>

                                <th className="flex gap-3">
                                    <PrimaryButton
                                        onClick={() =>
                                            handleShowModalUpdatePetType(
                                                petType
                                            )
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
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                    </PrimaryButton>
                                    <DangerButton
                                        onClick={() =>
                                            handleShowModalDeletePetType(
                                                petType
                                            )
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
                                            <line
                                                x1="10"
                                                x2="10"
                                                y1="11"
                                                y2="17"
                                            />
                                            <line
                                                x1="14"
                                                x2="14"
                                                y1="11"
                                                y2="17"
                                            />
                                        </svg>
                                    </DangerButton>
                                    <ModalUpdatePetType
                                        show={
                                            showModalUpdatePetType &&
                                            selectedPetType == petType
                                        }
                                        onClose={closeModalUpdatePetType}
                                        petType={selectedPetType}
                                    />
                                    <ModalDeletePetType
                                        show={
                                            showModalDeletePetType &&
                                            selectedPetType == petType
                                        }
                                        onClose={closeModalDeletePetType}
                                        petType={selectedPetType}
                                    />
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noPetTypes = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-dark-gray">
                There is no pet types data to Show.
            </h1>
        </div>
    );
};

const PetTypesList = ({ petTypes }) => {
    return !petTypes ? noPetTypes() : isPetTypes(petTypes);
};

export default PetTypesList;

import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";

const ModalDeletePet = ({ show, onClose, pet }) => {
    const handleDelete = () => {
        router.delete(`/owner/pets/delete/${pet.id}`);
        onClose();
    };
    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex flex-col p-6 gap-6">
                <h1 className="text-dark-gray dark:text-white text-center">
                    Are you sure you want to delete pet{" "}
                    <span className="font-bold">
                        "
                        {`${pet && pet.id} - ${pet && pet.name} - ${
                            pet && pet.pet_type.type
                        }`}
                        "
                    </span>{" "}
                    ?
                </h1>
                <div className="flex justify-center gap-2 px-4">
                    <SecondaryButton
                        onClick={onClose}
                        className="h-[34px] w-[80px] rounded-full bg-gray-200 font-semibold p-1 text-light-gray text-center"
                    >
                        Cancel
                    </SecondaryButton>
                    <DangerButton type="button" onClick={handleDelete}>
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalDeletePet;

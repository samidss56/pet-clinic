import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

const ModalUpdatePetType = ({ show, onClose, petType }) => {
    const [type, setType] = useState("");

    useEffect(() => {
        if (petType) {
            setType(petType.type || "");
        }
    }, [petType]);

    const handleSubmit = () => {
        const data = {
            id: petType.id,
            type,
        };

        router.patch(`/admin/pet-types/update/${petType.id}`, data);
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex flex-col p-6 gap-6">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Update Pet Type
                </h1>
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="petType" value="Pet Type" />
                    <TextInput
                        id="petType"
                        name="petType"
                        className="block w-full"
                        placeholder="Pet Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </form>
                <div className="flex justify-end">
                    <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>

                    <PrimaryButton
                        onClick={handleSubmit}
                        type="button"
                        className="ms-3"
                    >
                        Update Pet Type
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalUpdatePetType;

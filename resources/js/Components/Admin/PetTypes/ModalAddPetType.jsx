import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import { useState } from "react";

const ModalAddPetType = ({ show, onClose }) => {
    const [values, setValues] = useState({
        type: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...values,
        };
        // console.log(payload);
        router.post("/admin/pet-types/create", payload);
        setValues({
            type: "",
        });
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex flex-col p-6 gap-6">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Add New Pet Type
                </h1>
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="type" value="Pet Type" />
                    <TextInput
                        id="type"
                        name="type"
                        className="block w-full"
                        placeholder="Pet Type"
                        value={values.type}
                        onChange={handleChange}
                        required
                    />
                </form>
                <div className="flex justify-end gap-2">
                    <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>

                    <PrimaryButton type="submit" onClick={handleSubmit}>
                        Add Pet Type
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalAddPetType;

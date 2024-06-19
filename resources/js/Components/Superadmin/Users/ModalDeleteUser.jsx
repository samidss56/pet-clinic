import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";

const ModalDeleteUser = ({ show, onClose, user }) => {
    const handleDelete = () => {
        router.delete(`/superadmin/users/delete/${user.user_id}`);
        onClose();
    };
    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex flex-col p-6 gap-6">
                <h1 className="text-dark-gray dark:text-white text-center">
                    Are you sure you want to delete user{" "}
                    <span className="font-bold">
                        "
                        {`${user && user.user_id} - ${user && user.name} - ${
                            user && user.email
                        }`}
                        "
                    </span>
                    ?
                </h1>
                <div className="flex justify-center gap-2 px-4">
                    <SecondaryButton
                        onClick={onClose}
                        className="h-[34px] w-[80px] rounded-full bg-gray-200 font-semibold p-1 text-light-gray text-center"
                    >
                        Cancel
                    </SecondaryButton>
                    <DangerButton onClick={handleDelete} type="button">
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalDeleteUser;

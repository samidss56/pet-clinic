import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteUser from "./ModalDeleteUser";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import useToastNotification from "@/Hooks/useToastNotification";
// import ModalDeleteUser from "./ModalDeleteUser";

const isUsers = (users, notification) => {
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowModalDeleteUser = (user) => {
        setSelectedUser(user);
        setShowModalDeleteUser(true);
    };

    const closeModalDeleteUser = () => {
        setSelectedUser(null);
        setShowModalDeleteUser(false);
    };

    useToastNotification(notification);

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            User ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            User Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            User Email
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user) => (
                            <tr key={user.user_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {user.user_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {user.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {user.email}
                                </th>
                                <th className="flex gap-3">
                                    <Link
                                        href={route(
                                            "superadmin.users.edit",
                                            user.user_id
                                        )}
                                        method="get"
                                    >
                                        <PrimaryButton>
                                            <UpdateIcon />
                                        </PrimaryButton>
                                    </Link>
                                    <DangerButton
                                        onClick={() =>
                                            handleShowModalDeleteUser(user)
                                        }
                                    >
                                        <DeleteIcon />
                                    </DangerButton>
                                    <ModalDeleteUser
                                        show={
                                            showModalDeleteUser &&
                                            selectedUser === user
                                        }
                                        onClose={closeModalDeleteUser}
                                        user={selectedUser}
                                    />
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noUsers = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-dark-gray">
                There is no users data to Show.
            </h1>
        </div>
    );
};

const UsersList = ({ users, notification }) => {
    return !users ? noUsers() : isUsers(users, notification);
};

export default UsersList;

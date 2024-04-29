import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";

const isUsers = (users) => {
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
                            User Role
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {user.id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {user.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {user.email}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {user.role}
                                </th>

                                <th className="flex gap-3">
                                    <PrimaryButton>
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
                                    <DangerButton>
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
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noUsers = () => {
    return <div></div>;
};

const UsersList = ({ users }) => {
    return !users ? noUsers() : isUsers(users);
};

export default UsersList;

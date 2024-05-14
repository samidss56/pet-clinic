import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

const isAppointments = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Appointment ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Docter ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Appointment Date
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Status
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {pets.length > 0 && */}
                    {/* pets.map((pet) => ( */}
                    <tr>
                        <th className="text-black dark:text-white font-medium">
                            12
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            21
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            34
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            27-02-2024
                        </th>
                        <th className="text-red-600 font-semibold">pending</th>

                        <th className="text-black dark:text-white font-medium">
                            <Link
                                href={route("superadmin.appointments.detail")}
                            >
                                <PrimaryButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </PrimaryButton>
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-black dark:text-white font-medium">
                            11
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            62
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            33
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            27-02-2024
                        </th>
                        <th className="text-orange-400 font-semibold">
                            accepted
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            <Link>
                                <PrimaryButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </PrimaryButton>
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-black dark:text-white font-medium">
                            14
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            42
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            39
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            27-02-2024
                        </th>
                        <th className="text-yellow-400 font-semibold">
                            handled
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            <Link>
                                <PrimaryButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </PrimaryButton>
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-black dark:text-white font-medium">
                            11
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            25
                        </th>
                        <th className="text-black dark:text-white font-medium">
                            37
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            27-02-2024
                        </th>
                        <th className="text-green-500 font-semibold">
                            finished
                        </th>

                        <th className="text-black dark:text-white font-medium">
                            <Link>
                                <PrimaryButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </PrimaryButton>
                            </Link>
                        </th>
                    </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>
    );
};

const noAppointments = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no appointments data to Show.
            </h1>
        </div>
    );
};

const AppointmentsList = () => {
    return isAppointments();
};

export default AppointmentsList;

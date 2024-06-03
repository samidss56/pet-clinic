import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import { ShowIcon } from "@/Components/Icons/Index";

const isProducts = (appointments) => {
    console.log(appointments);
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            No
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Appointment
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Owner Pet
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Docter
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Jadwal
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
                    {appointments.length > 0 &&
                        appointments.map((appointment, i) => (
                            <tr key={appointment.appointmen_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {i + 1}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {appointment.appointmen_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {appointment.pet.user.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {appointment.pet.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {appointment.docter.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {appointment.date_appointmens} -{" "}
                                    {appointment.jadwal}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <div
                                        className={`p-2 text-center rounded-lg ${
                                            appointment.status === "pending" &&
                                            "bg-yellow-500"
                                        } ${
                                            appointment.status === "rejected" &&
                                            "bg-red-600"
                                        } ${
                                            appointment.status === "accepted" &&
                                            "bg-cyan-500"
                                        } ${
                                            appointment.status === "handled" &&
                                            "bg-blue-500"
                                        } ${
                                            appointment.status === "finished" &&
                                            "bg-green-500"
                                        } ${
                                            appointment.status === "expired" &&
                                            "bg-gray-500"
                                        } text-white text-sm font-semibold`}
                                    >
                                        {appointment.status}
                                    </div>
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "admin.appoitments.detail",
                                                appointment.appointmen_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <ShowIcon />
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noProducts = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no appointments data to Show.
            </h1>
        </div>
    );
};

const AppointmensList = ({ appointments }) => {
    return !appointments ? noProducts() : isProducts(appointments);
};

export default AppointmensList;

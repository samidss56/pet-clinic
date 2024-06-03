import { ShowIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

const isAppointments = (appointments) => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black text-sm">Appointment ID</th>
                        <th className="text-black text-sm">Docter ID</th>
                        <th className="text-black text-sm">Pet ID</th>
                        <th className="text-black text-sm">Appointment Date</th>
                        <th className="text-black text-sm">Status</th>
                        <th className="text-black text-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 &&
                        appointments.map((appointment) => (
                            <tr key={appointment.appointmen_id}>
                                <th className="text-black font-medium">
                                    {appointment.appointmen_id}
                                </th>
                                <th className="text-black font-medium">
                                    {appointment.docter_id}
                                </th>
                                <th className="text-black font-medium">
                                    {appointment.pet_id}
                                </th>

                                <th className="text-black font-medium">
                                    {appointment.date_appointmens}
                                </th>
                                <th className="text-black font-medium">
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
                                                "superadmin.appointments.detail",
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

const noAppointments = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no appointments data to Show.
            </h1>
        </div>
    );
};

const AppointmentsList = ({ appointments }) => {
    return !appointments ? noAppointments() : isAppointments(appointments);
};

export default AppointmentsList;

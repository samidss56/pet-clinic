import DangerButton from "@/Components/DangerButton";
import { FeedbackIcon, ShowIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import useToastNotification from "@/Hooks/useToastNotification";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const isAppointment = (appointments, notification) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useToastNotification(notification);

    return (
        <div>
            {appointments.length > 0 &&
                appointments.map((appointment) => (
                    <div
                        key={appointment.appointmen_id}
                        className="collapse collapse-arrow mb-3 bg-white border-[1.5px] border-secondary-color"
                    >
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={openIndex === appointment.appointmen_id}
                            onChange={() =>
                                toggleAccordion(appointment.appointmen_id)
                            }
                        />
                        <div
                            className={`collapse-title text-xl font-medium ${
                                openIndex === appointment.appointmen_id &&
                                "border-b-[1.5px] border-gray-300"
                            }`}
                            onClick={() =>
                                toggleAccordion(appointment.appointmen_id)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 text-md font-semibold">
                                    {appointment.pet.name}
                                </p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-gray-800 text-sm font-semibold">
                                        {appointment.date_appointmens}
                                    </p>
                                    <span className="text-gray-800">|</span>
                                    <p className="text-gray-800 text-sm font-semibold">
                                        {appointment.jadwal}
                                    </p>
                                    <span className="text-gray-800">|</span>
                                    <div
                                        className={`badge p-3 ${
                                            appointment.status === "pending" &&
                                            "bg-primary-red border-primary-red text-white"
                                        } ${
                                            appointment.status === "accepted" &&
                                            "bg-orange-600 border-orange-600 text-white"
                                        } ${
                                            appointment.status === "rejected" &&
                                            "bg-orange-400 border-orange-400 text-white"
                                        } ${
                                            appointment.status === "expired" &&
                                            "bg-gray-400 border-gray-400 text-white"
                                        } ${
                                            appointment.status === "handled" &&
                                            "bg-yellow-400 border-yellow-400 text-white"
                                        } ${
                                            appointment.status === "finished" &&
                                            "bg-green-600 border-green-600 text-white"
                                        }`}
                                    >
                                        {appointment.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openIndex === appointment.appointmen_id && (
                            <div className="collapse-content p-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Appointment
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.appointmen_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Doctor
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.docter_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Hewan Peliharaan
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.pet_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                Tanggal Appointment
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.date_appointmens}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-end gap-2 mt-4">
                                    <Link
                                        href={route(
                                            "owner.appointmen.detail",
                                            appointment.appointmen_id
                                        )}
                                    >
                                        <PrimaryButton>
                                            <ShowIcon />
                                        </PrimaryButton>
                                    </Link>
                                    {appointment.status === "finished" && (
                                        <Link
                                            href={route("owner.testimonials.create")}
                                        >
                                            <PrimaryButton>
                                                <FeedbackIcon />
                                                Write a Testimonial
                                            </PrimaryButton>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

const noAppointments = () => {
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-slate-100">
            There is no pets data to Show.
        </h1>
    </div>;
};

const AppointmentsList = ({ appointments, notification }) => {
    return !appointments ? noAppointments() : isAppointment(appointments, notification);
};

export default AppointmentsList;

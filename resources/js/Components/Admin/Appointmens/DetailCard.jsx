import { ArrowLeftIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import React from "react";

const DetailCard = ({ appointment }) => {
    console.log(appointment);
    return (
        <div className="bg-white rounded-md">
            <div className="p-4 flex items-center justify-between border-b bg-gray-200 rounded-t-md">
                <h2 className="text-xl font-bold px-2 text-gray-800">
                    Appointment {appointment.appointmen_id}
                </h2>
                <div
                    className={`p-2 rounded-lg ${
                        appointment.status === "pending" && "bg-yellow-500"
                    } ${appointment.status === "rejected" && "bg-red-600"} ${
                        appointment.status === "accepted" && "bg-cyan-500"
                    } ${appointment.status === "handled" && "bg-blue-500"} ${
                        appointment.status === "finished" && "bg-green-500"
                    } ${
                        appointment.status === "expired" && "bg-gray-500"
                    } text-white text-sm font-semibold`}
                >
                    {appointment.status}
                </div>
            </div>
            <div className="p-4 grid grid-cols-3 space-y-4">
                <div className="p-2">
                    <p className="text-gray-500">Pet ID</p>
                    <p className="font-bold text-gray-800">
                        {appointment.pet_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Pet Name</p>
                    <p className="font-bold text-gray-800">
                        {appointment.pet.name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Appointment Desicription</p>
                    <p className="font-bold text-gray-800">
                        {appointment.description}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Appointment Date</p>
                    <p className="font-bold text-gray-800">
                        {appointment.date_appointmens}
                    </p>
                </div>
                <div className="p-2">
                    {appointment.docter.jadwal.map((schedule) => (
                        <>
                            <p className="text-gray-500" key={schedule.id}>
                                Day
                            </p>
                            <p className="font-bold text-gray-800">
                                {schedule.day}
                            </p>
                        </>
                    ))}
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Time</p>
                    <p className="font-bold text-gray-800">
                        {appointment.jadwal}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner ID</p>
                    <p className="font-bold text-gray-800">
                        {appointment.pet.user.user_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner Name</p>
                    <p className="font-bold text-gray-800">
                        {appointment.pet.user.name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Owner Email</p>
                    <p className="font-bold text-gray-800">
                        {appointment.pet.user.email}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor ID</p>
                    <p className="font-bold text-gray-800">
                        {appointment.docter.docter_id}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor Name</p>
                    <p className="font-bold text-gray-800">
                        {appointment.docter.name}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-500">Doctor Email</p>
                    <p className="font-bold text-gray-800">
                        {appointment.docter.email}
                    </p>
                </div>
                <Link href={route("admin.appoitments")}>
                    <SecondaryButton>
                        <ArrowLeftIcon />
                        Back to Appointments List
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default DetailCard;

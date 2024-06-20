import {
    ArrowLeftIcon,
    CalendarIcon,
    ClockIcon,
    KeyIcon,
    MailIcon,
    TextIcon,
    TransactionsIcon,
} from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import UserAvatar from "@/Components/UserAvatar";
import { Link } from "@inertiajs/react";
import React from "react";

const DetailCard = ({ appointment }) => {
    return (
        <div className="bg-white rounded-md">
            <div className="p-4 flex items-center justify-between border-b rounded-t-md">
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
            <div className="flex flex-col space-y-4 p-4">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-bold text-gray-800">
                        Owner Details
                    </h1>
                    <div className="flex rounded-lg border p-4 gap-3">
                        <UserAvatar
                            avatar={appointment.pet.user.profile}
                            className="w-14 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="font-bold text-md text-gray-800">
                                {appointment.pet.user.name}
                            </p>
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <KeyIcon />
                                    <p className="text-gray-600">
                                        {appointment.pet.user.user_id}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MailIcon />
                                    <p className="text-gray-600">
                                        {appointment.pet.user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-lg font-bold text-gray-800">
                            Pet Details
                        </h1>
                        <div className="flex items-center rounded-lg border p-4 gap-3">
                                <UserAvatar
                                    avatar={appointment.pet.image}
                                    className="w-14 rounded-full"
                                />
                            <div className="flex flex-col">
                                <p className="font-bold text-md text-gray-800">
                                    {appointment.pet.name}
                                </p>
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2">
                                        <KeyIcon />
                                        <p className="text-gray-600">
                                            {appointment.pet_id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-lg font-bold text-gray-800">
                            Doctor Details
                        </h1>
                        <div className="flex items-center rounded-lg border p-4 gap-3">
                            <UserAvatar
                                avatar={appointment.docter.profile}
                                className="w-14 rounded-full"
                            />
                            <div className="flex flex-col">
                                <p className="font-bold text-md text-gray-800">
                                    {appointment.docter.name}
                                </p>
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2">
                                        <KeyIcon />
                                        <p className="text-gray-600">
                                            {appointment.docter_id}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MailIcon />
                                        <p className="text-gray-600">
                                            {appointment.docter.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-bold text-gray-800">
                        Appointment Information
                    </h1>
                    <div className="grid grid-cols-4 rounded-lg border p-4 gap-3">
                        <div className="p-2">
                            <p className="text-gray-500 flex gap-2 items-center">
                                <CalendarIcon />
                                Appointment Date
                            </p>
                            <p className="font-bold text-gray-800">
                                {appointment.date_appointmens}
                            </p>
                        </div>
                        <div className="p-2">
                            {appointment.docter.jadwal.map((schedule) => (
                                <>
                                    <p
                                        className="text-gray-500 flex gap-2 items-center"
                                        key={schedule.id}
                                    >
                                        <CalendarIcon />
                                        Day
                                    </p>
                                    <p className="font-bold text-gray-800">
                                        {schedule.day}
                                    </p>
                                </>
                            ))}
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500 flex gap-2 items-center">
                                <ClockIcon />
                                Time
                            </p>
                            <p className="font-bold text-gray-800">
                                {appointment.jadwal}
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500 flex gap-2 items-center">
                                <TextIcon />
                                Desicription
                            </p>
                            <p className="font-bold text-gray-800">
                                {appointment.description}
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="text-gray-500 flex gap-2 items-center">
                                <TransactionsIcon />
                                Payment Type
                            </p>
                            <p className="font-bold text-gray-800">
                                Tunai
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Link href={route("superadmin.appointments")}>
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

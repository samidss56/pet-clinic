import AppointmentsList from "@/Components/Owner/Appointments/AppointmentsList";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import { Paginator } from "@/Components/Paginator";
<<<<<<< HEAD
=======
import PrimaryButton from "@/Components/PrimaryButton";
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, appointments }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
<<<<<<< HEAD
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <AppointmentsList appointments={appointments.data} />
                    <Paginator meta={appointments.meta} />
                </div>
=======
                <div className="w-full md:hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <Link href={route("owner.appointmen.create")}>
                        <PrimaryButton className="mb-4 flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 22 22"
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <line x1="12" x2="12" y1="5" y2="19" />
                                <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add Appointment
                        </PrimaryButton>
                    </Link>
                    <div className="flex flex-col gap-3">
                        <AppointmentsList appointments={appointments.data} />
                    </div>
                    <Paginator meta={appointments.meta} />
                </div>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

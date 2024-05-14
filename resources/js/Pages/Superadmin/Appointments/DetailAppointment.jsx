import PrimaryButton from "@/Components/PrimaryButton";
import DetailCard from "@/Components/Superadmin/Appointments/DetailCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const DetailAppointment = ({ auth, title }) => {
    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <div className="py-6 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <Link href={route("superadmin.appointments")}>
                        <PrimaryButton className="mb-4 gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="main-grid-item-icon"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <line x1="19" x2="5" y1="12" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back To Appointments
                        </PrimaryButton>
                    </Link>
                    <DetailCard />
                </div>
            </div>
        </Authenticated>
    );
};

export default DetailAppointment;

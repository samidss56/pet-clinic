import CardDataStats from "@/Components/Dashboard/CardDataStats";
import {
    AppointmentsIcon,
    ArticlesIcon,
    PetsIcon,
    TransactionsIcon,
} from "@/Components/Icons/Index";
import CTA from "@/Components/Owner/Dashboard/CTA";
import DashboardProfileCard from "@/Components/Owner/Dashboard/DashboardProfileCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatCurr } from "@/Utils/FormatPrice";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    title,
    pets,
    appointments,
    transactions,
}) {
    return (
        <AuthenticatedLayout user={auth}>
            <Head title={title} />
            <div className="p-0 sm:py-4">
                <div className="mx-auto sm:px-4 lg:px-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col md:flex-row md:justify-between gap-7">
                            <div className="w-full md:w-1/3 flex-col sm:rounded-lg">
                                <DashboardProfileCard user={auth.user} />
                            </div>
                            <div className="w-full md:w-2/3 flex-col sm:rounded-lg">
                                <CTA user={auth.user.name} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between gap-6">
                            <div className="w-full md:w-1/3 flex-col sm:rounded-lg">
                                <CardDataStats
                                    title="Total Pet"
                                    total={pets ?? 0}
                                >
                                    <PetsIcon color={"stroke-primary-red"} />
                                </CardDataStats>
                            </div>
                            <div className="w-full md:w-1/3 flex-col sm:rounded-lg">
                                <CardDataStats
                                    title="Total Appointment"
                                    total={appointments ?? 0}
                                >
                                    <AppointmentsIcon
                                        color={"stroke-primary-red"}
                                    />
                                </CardDataStats>
                            </div>
                            <div className="w-full md:w-1/3 flex-col sm:rounded-lg">
                                <CardDataStats
                                    title="Total Transaction"
                                    total={formatCurr(transactions) ?? 0}
                                >
                                    <TransactionsIcon
                                        color={"stroke-primary-red"}
                                    />
                                </CardDataStats>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

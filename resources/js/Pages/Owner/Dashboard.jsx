import CardDataStats from "@/Components/Dashboard/CardDataStats";
import {
    AppointmentsIcon,
    CartIcon,
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
    productTrans,
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <CardDataStats title="Total Pet" total={pets ?? 0}>
                                <PetsIcon color={"stroke-primary-red"} />
                            </CardDataStats>
                            <CardDataStats
                                title="Total Appointment Transaction"
                                total={appointments ?? 0}
                            >
                                <AppointmentsIcon
                                    color={"stroke-primary-red"}
                                />
                            </CardDataStats>
                            <CardDataStats
                                title="Total Product Transaction"
                                total={productTrans ?? 0}
                            >
                                <CartIcon
                                    color={"stroke-primary-red"}
                                />
                            </CardDataStats>
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
        </AuthenticatedLayout>
    );
}

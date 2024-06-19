import AppointmentsList from "@/Components/Owner/Appointments/AppointmentsList";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import TransactionList from "@/Components/Owner/Transactions/TransactionList";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, transaction }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <TransactionList transaction={transaction.data} />
                    <Paginator meta={transaction.meta} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

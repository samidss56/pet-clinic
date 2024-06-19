import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import DetailCard from "@/Components/Owner/Transactions/DetailCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, title, transaction }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <DetailCard transaction={transaction.data} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Show;

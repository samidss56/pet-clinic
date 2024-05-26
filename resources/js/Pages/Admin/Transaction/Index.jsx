import ProductsList from "@/Components/Admin/Products/ProductsList";
import TransactionsList from "@/Components/Admin/Transaction/TransactionsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, transaction }) => {
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
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    
                    <TransactionsList transaction={transaction.data} />
                    <Paginator meta={transaction.meta} />
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;

import CartList from "@/Components/Owner/Cart/CartList";
import ProfileCard from "@/Components/Owner/Dashboard/ProfileCard";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import OwnerLayout from "@/Layouts/OwnerLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, title, cart }) => {
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <OwnerLayout>
                <div className="w-full hidden lg:block lg:w-2/5 flex-col sm:rounded-lg">
                    <ProfileCard user={auth} />
                </div>
                <div className="w-full p-4 sm:p-0 flex-col">
                    <CartList cart={cart.data} />
                </div>
            </OwnerLayout>
        </Authenticated>
    );
};

export default Index;

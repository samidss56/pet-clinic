import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import UsersList from "@/Components/Superadmin/Users/UsersList";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Users = ({ auth, title, users, flash }) => {
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
            <AdminLayout>
                <Link href={route("superadmin.users.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add User
                    </PrimaryButton>
                </Link>
                <UsersList users={users.data} notification={flash.message} />
                <Paginator meta={users.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Users;

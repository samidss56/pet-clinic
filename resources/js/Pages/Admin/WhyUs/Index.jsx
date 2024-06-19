import { UpdateIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import useToastNotification from "@/Hooks/useToastNotification";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, title, whyUs }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    const notification = usePage().props.flash.message;
    useToastNotification(notification);
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
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 py-1">
                        <div className="border rounded-lg p-4 space-y-4 bg-white">
                            <h2 className="text-xl font-bold text-gray-800">
                                Title: {whyUs.title}
                            </h2>
                            <p className="text-gray-800">
                                Content: {whyUs.description}
                            </p>
                            <p className="text-gray-800">Items :</p>
                            {whyUs.list_items.map((item, index) => (
                                <li className="text-gray-800" key={index}>
                                    {item}
                                </li>
                            ))}
                        </div>
                        <div className="border rounded-lg p-4 space-y-4 bg-white">
                            <h2 className="text-xl font-bold text-gray-800">
                                Image
                            </h2>
                            <img
                                className="w-60"
                                src={`${appUrl}/storage/${whyUs.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Link href={route("admin.whyus.edit")}>
                    <PrimaryButton className="mt-2 flex gap-2">
                        <UpdateIcon />
                        Edit Why Us
                    </PrimaryButton>
                </Link>
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

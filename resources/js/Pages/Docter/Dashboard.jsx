import AppDocter from "@/Layouts/AppDocter";
import { Head } from "@inertiajs/react";

const Dashboard = ({ docter, title }) => {
    return (
        <AppDocter
            user={docter}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />

            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"></div>
                </div>
            </div>
        </AppDocter>
    );
};

export default Dashboard;

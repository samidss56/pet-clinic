import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { useDarkMode } from "@/Contexts/DarkMode";
// import { usePage } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-primary-color">
            {user && (user.isAdmin || user.isSuperAdmin) ? (
                <div className="flex">
                    <Sidebar user={user} />
                    <div className="w-full bg-gray-100 dark:bg-light-gray">
                        {header && (
                            <header className="bg-white shadow dark:bg-light-gray">
                                <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </header>
                        )}
                        <main>{children}</main>
                    </div>
                </div>
            ) : (
                <>
                    <Navbar user={user} />
                    <main>{children}</main>
                </>
            )}
        </div>
    );
}

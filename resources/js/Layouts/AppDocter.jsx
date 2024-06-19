import SidebarDocter from "@/Components/SidebarDocter";

export default function AppDocter({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-light-gray">
            <div className="flex">
                <SidebarDocter user={user} />
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
        </div>
    );
}

import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    AppointmentsIcon,
    ArticlesIcon,
    CloseSidebarIcon,
    DashboardIcon,
    DoctorsIcon,
    LogoutIcon,
    OpenSidebarIcon,
    ProductsIcon,
    SchedulesIcon,
    ServicesIcon,
    TransactionsIcon,
    UsersIcon,
    AboutusIcon,
    HerosectionIcon,
} from "./Icons/Index";
import appLogo from "../../../public/AppLogo.png";

const Sidebar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`drawer drawer-open w-${
                isOpen ? "72" : "20"
            } transition duration-500`}
        >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side bg-white relative">
                <label></label>
                <ul
                    className={`flex flex-col shadow justify-between menu p-4 min-h-full bg-white text-gray-800 transition-all duration-300 ${
                        isOpen ? "w-72" : "w-22"
                    }`}
                >
                    <div className="flex flex-col gap-3">
                        {isOpen ? (
                            <div className="flex items-center justify-between mb-2">
                                <img
                                    src={appLogo}
                                    alt="App Logo"
                                    className="w-14"
                                />
                                <a className="btn bg-gray-100 hover:bg-gray-200 border-none text-md font-medium text-gray-800">
                                    {user.user.name}
                                </a>
                            </div>
                        ) : (
                            <img
                                src={appLogo}
                                alt="App Logo"
                                className="w-14"
                            />
                        )}
                        <div className="flex flex-col gap-3">
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.dashboard")
                                            : route("admin.dashboard")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <DashboardIcon />
                                    {isOpen && <span>Dashboard</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.appointments")
                                            : route("admin.appoitments")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <AppointmentsIcon />
                                    {isOpen && (
                                        <span>Appointment Management</span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.transaction")
                                            : route("admin.transaction")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <TransactionsIcon />
                                    {isOpen && (
                                        <span>Transaction Management</span>
                                    )}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.products")
                                            : route("admin.products")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <ProductsIcon />
                                    {isOpen && <span>Product Management</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.services")
                                            : route("admin.services")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <ServicesIcon />
                                    {isOpen && <span>Service Management</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.articles")
                                            : route("admin.articles")
                                    }
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <ArticlesIcon />
                                    {isOpen && <span>Article Management</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.herosection.edit")}
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <HerosectionIcon />
                                    {isOpen && <span>Hero Section Management</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.aboutus.edit")}
                                    as="button"
                                    className="bg-white hover:bg-light-red border-none text-md font-medium "
                                >
                                    <AboutusIcon />
                                    {isOpen && <span>About Us Management</span>}
                                </Link>
                            </li>
                            {user.isSuperAdmin && (
                                <>
                                    <li>
                                        <Link
                                            href={route("superadmin.users")}
                                            as="button"
                                            className="bg-white hover:bg-light-red border-none text-md font-medium "
                                        >
                                            <UsersIcon />
                                            {isOpen && (
                                                <span>Users Management</span>
                                            )}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/superadmin/docters"
                                            as="button"
                                            className="bg-white hover:bg-light-red border-none text-md font-medium "
                                        >
                                            <DoctorsIcon />
                                            {isOpen && (
                                                <span>Doctor Management</span>
                                            )}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/superadmin/jadwal"
                                            as="button"
                                            className="bg-white hover:bg-light-red border-none text-md font-medium "
                                        >
                                            <SchedulesIcon />
                                            {isOpen && (
                                                <span>Jadwal Management</span>
                                            )}
                                        </Link>
                                    </li>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <li>
                            <Link
                                href={route("logout")}
                                as="button"
                                className="bg-white hover:bg-light-red border-none text-md font-medium "
                                method="post"
                            >
                                <LogoutIcon />
                                {isOpen && <span>Logout</span>}
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
            <button
                onClick={toggleSidebar}
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay absolute right-[-20px] flex items-center justify-center h-8 w-8 z-10 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md transition-all duration-300"
                style={{ top: "50%" }}
            >
                {isOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
            </button>
        </div>
    );
};

export default Sidebar;

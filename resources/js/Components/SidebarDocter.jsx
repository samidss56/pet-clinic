import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    AppointmentsIcon,
    CloseSidebarIcon,
    DashboardIcon,
    LogoutIcon,
    OpenSidebarIcon,
    SchedulesIcon,
    SettingsIcons,
} from "./Icons/Index";
import appLogo from "../../../public/AppLogo.png";

const SidebarDocter = ({ user }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // if (!user || !user.isDoctor) {
    //     return null;
    // }

    return (
        <div
            className={`drawer drawer-open w-${
                isOpen ? "72" : "20"
            } transition duration-500`}
        >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side bg-white dark:bg-dark-gray">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
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
                                    {user.name}
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
                                <Link href={route("doctor.dashboard")} as="button">
                                    <DashboardIcon />
                                    {isOpen && <span>Dashboard</span>}
                                </Link>
                            </li>

                            <li>
                                <Link href={route("docter.jadwal")} as="button">
                                    <SchedulesIcon />
                                    {isOpen && <span>Jadwal Management</span>}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("docter.appointmen")}
                                    as="button"
                                >
                                    <AppointmentsIcon />
                                    {isOpen && (
                                        <span>Appointment Management</span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("docter.profile.edit")}
                                    as="button"
                                >
                                    <SettingsIcons />
                                    {isOpen && (
                                        <span>Profile Settings</span>
                                    )}
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <li>
                            <Link
                                href={route("logout.docter")}
                                as="button"
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

export default SidebarDocter;

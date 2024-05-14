import { Link } from "@inertiajs/react";

const Sidebar = ({ user, darkMode, toggleDarkMode }) => {
    return (
        <div className="drawer lg:drawer-open w-72">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side bg-white dark:bg-dark-gray">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="flex flex-col shadow justify-between menu p-4 w-72 min-h-full bg-white text-gray-800 dark:bg-dark-gray dark:text-white">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between mb-2">
                            <a
                                href={
                                    user.isSuperAdmin
                                        ? route("superadmin.dashboard")
                                        : route("admin.dashboard")
                                }
                                className="btn btn-ghost text-xl text-gray-800 dark:text-white"
                            >
                                Pet Clinic
                            </a>
                            <a
                                // href={route("doctor.dashboard")}
                                className="btn bg-gray-100 dark:bg-gray-300 hover:bg-gray-200 border-none text-md font-medium text-gray-800 dark:black"
                            >
                                {user.user.name}
                            </a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin
                                            ? route("superadmin.dashboard")
                                            : route("admin.dashboard")
                                    }
                                    as="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon fill-dark-gray dark:fill-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        user.isSuperAdmin &&
                                        route("superadmin.appointments")
                                        // : route("admin.appointments")
                                    }
                                    as="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="main-grid-item-icon fill-dark-gray dark:fill-white"
                                    >
                                        <path d="m12 22 1-2v-3h5a1 1 0 0 0 1-1v-1.586c0-.526-.214-1.042-.586-1.414L17 11.586V8a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1v3.586L5.586 13A2.01 2.01 0 0 0 5 14.414V16a1 1 0 0 0 1 1h5v3l1 2zM8 4h8v2H8V4zM7 14.414l1.707-1.707A.996.996 0 0 0 9 12V8h6v4c0 .266.105.52.293.707L17 14.414V15H7v-.586z"></path>
                                    </svg>
                                    Appointment Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // href={route("admin.cars")}
                                    as="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon fill-dark-gray dark:fill-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path>
                                    </svg>
                                    Transaction
                                </Link>
                            </li>

                            <li>
                                <Link href={""} as="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="main-grid-item-icon fill-dark-gray dark:fill-white"
                                    >
                                        <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
                                        <path d="M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z"></path>
                                    </svg>
                                    Product Management
                                </Link>
                            </li>
                            <li>
                                <Link href={route("admin.pets")} as="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="main-grid-item-icon fill-dark-gray dark:fill-white"
                                    >
                                        <path d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76 1.57 1.57 0 0 0 .09-.23 4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path>
                                        <path d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5 3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2 1 1 0 0 1 1-1 1 1 0 0 1 1 1 3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"></path>
                                    </svg>
                                    Service Management
                                </Link>
                            </li>
                            {user.isSuperAdmin && (
                                <>
                                    <li>
                                        <Link
                                            // href={route("profile.edit")}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="main-grid-item-icon stroke-dark-gray dark:stroke-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Users Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            // href={route("profile.edit")}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="main-grid-item-icon stroke-dark-gray dark:stroke-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Doctor Management
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
                                method="post"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="main-grid-item-icon stroke-dark-gray dark:stroke-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" x2="9" y1="12" y2="12" />
                                </svg>
                                Logout
                            </Link>
                        </li>
                        <li>
                            <label className="swap swap-rotate ">
                                <button
                                    className="theme-controller"
                                    onClick={toggleDarkMode}
                                />
                                {darkMode ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="white"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" x2="12" y1="1" y2="3" />
                                        <line x1="12" x2="12" y1="21" y2="23" />
                                        <line
                                            x1="4.22"
                                            x2="5.64"
                                            y1="4.22"
                                            y2="5.64"
                                        />
                                        <line
                                            x1="18.36"
                                            x2="19.78"
                                            y1="18.36"
                                            y2="19.78"
                                        />
                                        <line x1="1" x2="3" y1="12" y2="12" />
                                        <line x1="21" x2="23" y1="12" y2="12" />
                                        <line
                                            x1="4.22"
                                            x2="5.64"
                                            y1="19.78"
                                            y2="18.36"
                                        />
                                        <line
                                            x1="18.36"
                                            x2="19.78"
                                            y1="5.64"
                                            y2="4.22"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="black"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )}
                            </label>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

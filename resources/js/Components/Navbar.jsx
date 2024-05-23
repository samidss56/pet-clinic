import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";
import {
    AppointmentsIcon,
    ArrowBottomIcons,
    DashboardIcon,
    LogoutIcon,
    PetsIcon,
    SettingsIcons,
    TransactionsIcon,
} from "./Icons/Index";

const Navbar = ({ user }) => {
    return (
        <div
            className={`navbar bg-white sticky top-0 py-3 z-50 shadow-lg flex justify-between px-2 sm:px-4`}
        >
            <div className="flex-none">
                <a
                    href={route("home")}
                    className="btn btn-ghost text-xl text-primary-red max-sm:ps-0"
                >
                    <div className="bg-primary-red h-10 w-10 rounded-lg"></div>
                    Pawana Jiwa
                </a>
            </div>
            <div className="flex-none gap-5 hidden md:flex lg:gap-10">
                {!user ? (
                    <>
                        <NavLink href={route("login")}>Login</NavLink>
                        <NavLink href={route("register")}>Register</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            href={route("owner.dashboard")}
                            active={route().current("owner.dashboard")}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route("owner.pets")}
                            active={route().current("owner.pets")}
                        >
                            Pets
                        </NavLink>
                        <NavLink
                            href={route("owner.appointmen")}
                            active={route().current("owner.appointmen")}
                        >
                            Appointments
                        </NavLink>
                        <NavLink
                        // href={route("user.orders")}
                        // active={route().current("user.orders")}
                        >
                            Transaction
                        </NavLink>
                    </>
                )}
            </div>
            <div className="flex-none gap-2 justify-center">
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                    >
                        {user ? (
                            <div className="flex items-center gap-3 ">
                                <img
                                    src="https://i.pravatar.cc/300"
                                    alt=""
                                    className="w-10 rounded-full hidden xs:block"
                                />
                                <h1 className="text-gray-800">
                                    {user.user.name}
                                </h1>
                            </div>
                        ) : (
                            <h1 className="text-gray-800">Guest</h1>
                        )}
                        <ArrowBottomIcons />
                    </button>
                    <ul
                        tabIndex={0}
                        className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-44 bg-white text-gray-800"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <div className="md:hidden">
                                    <li>
                                        <Link
                                            href={route("owner.dashboard")}
                                            as="button"
                                        >
                                            <DashboardIcon />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("owner.pets")}
                                            as="button"
                                        >
                                            <PetsIcon />
                                            Pets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("owner.appointmen")}
                                            as="button"
                                        >
                                            <AppointmentsIcon />
                                            Appointments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            // href={route("owner.transaction")}
                                            as="button"
                                        >
                                            <TransactionsIcon />
                                            Transaction
                                        </Link>
                                    </li>
                                </div>

                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        as="button"
                                    >
                                        <SettingsIcons />
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        <LogoutIcon />
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

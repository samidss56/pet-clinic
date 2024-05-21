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
import UserAvatar from "./UserAvatar";
import appLogo from "../../../public/AppLogo.png";

const Navbar = ({ user }) => {
    return (
        <div
            className={`navbar bg-white sticky top-0 py-3 z-50 shadow-lg flex justify-between px-2 sm:px-4`}
        >
            <div className="flex-none">
<<<<<<< HEAD
                <div className="flex gap-3 px-2 items-center justify-between">
                    <img src={appLogo} alt="App Logo" className="w-14" />
                    <p className="text-xl font-bold text-primary-red">
                        Pawana Jiwa
                    </p>
                </div>
=======
                <a
                    href={route("home")}
                    className="btn btn-ghost text-xl text-primary-red max-sm:ps-0"
                >
                    <div className="bg-primary-red h-10 w-10 rounded-lg"></div>
                Pawana Jiwa
                </a>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
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
<<<<<<< HEAD
=======
                        {/* <NavLink
                            href={route("profile.edit")}
                            active={route().current("profile.edit")}
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Logout
                        </NavLink> */}
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
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
<<<<<<< HEAD
                                <div className="hidden xs:flex">
                                    <UserAvatar
                                        avatar={user.user.profile}
                                        className="w-10 rounded-full"
                                    />
                                </div>
=======
                                <img
                                    src="https://i.pravatar.cc/300"
                                    alt=""
                                    className="w-10 rounded-full"
                                />
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
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
<<<<<<< HEAD
                                            href={route("owner.dashboard")}
                                            as="button"
                                        >
                                            <DashboardIcon />
=======
                                            // href={route("student.home")}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                                            </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
<<<<<<< HEAD
                                            href={route("owner.pets")}
                                            as="button"
                                        >
                                            <PetsIcon />
=======
                                            // href={route("student.transkrip")}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 4v2h-5V7h5zm-5 4h5v2h-5v-2zM4 19V5h7v14H4z"></path>
                                            </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                                            Pets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
<<<<<<< HEAD
                                            href={route("owner.appointmen")}
                                            as="button"
                                        >
                                            <AppointmentsIcon />
=======
                                            // href={route("student.mbkm")}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
                                            </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                                            Appointments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
<<<<<<< HEAD
                                            // href={route("owner.transaction")}
                                            as="button"
                                        >
                                            <TransactionsIcon />
=======
                                            // href={route(
                                            //     "student.profile-match"
                                            // )}
                                            as="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
                                            </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                                            Transaction
                                        </Link>
                                    </li>
                                </div>

                                <li>
                                    <Link
<<<<<<< HEAD
                                        href={route("owner.profile.edit")}
                                        as="button"
                                    >
                                        <SettingsIcons />
=======
                                        href={route("profile.edit")}
                                        as="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                                            <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
                                        </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
<<<<<<< HEAD
                                        <LogoutIcon />
=======
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                                        </svg>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
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

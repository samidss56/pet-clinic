import { Link, usePage } from "@inertiajs/react";
import NavLink from "./NavLink";
import {
    AppointmentsIcon,
    ArrowBottomIcons,
    CartIcon,
    DashboardIcon,
    LogoutIcon,
    PetsIcon,
    ProductsIcon,
    SettingsIcons,
    TransactionsIcon,
} from "./Icons/Index";
import UserAvatar from "./UserAvatar";
import appLogo from "../../../public/AppLogo.png";

const Navbar = ({ user }) => {

    const {carts_global} = usePage().props;

    return (
        <div
            className={`navbar bg-white sticky top-0 py-3 z-50 shadow-lg flex justify-between px-2 sm:px-4`}
        >
            <div className="flex-none">
                <Link href={route("home")}>
                    <div className="flex gap-3 px-2 items-center justify-between">
                        <img src={appLogo} alt="App Logo" className="w-14" />
                        <p className="text-xl font-bold text-primary-red">
                            Pawana Jiwa
                        </p>
                    </div>
                </Link>
            </div>
            <div className="flex-none gap-5 hidden md:flex lg:gap-10">
                {!user ? (
                    <>
                        <NavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            href={route("articles.index")}
                            active={route().current("articles.index")}
                        >
                            Articles
                        </NavLink>
                        <NavLink
                            href={route("doctors.index")}
                            active={route().current("doctors.index")}
                        >
                            Doctors
                        </NavLink>
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
                            href={route("owner.products")}
                            active={route().current("owner.products")}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            href={route("owner.testimonials")}
                            active={route().current("owner.testimonials")}
                        >
                            Testimonials
                        </NavLink>
                    </>
                )}
            </div>
            <div className="flex-none gap-2 justify-center">
                {user ? (
                    <>
                    <NavLink className='flex items-center gap-x-2' href={route("owner.cart")}>
                            <CartIcon />
                            {carts_global > 0 ? carts_global : null}
                    </NavLink></>
                ) : null}
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                    >
                        {user ? (
                            <div className="flex items-center gap-3 ">
                                <div className="hidden xs:flex">
                                    <UserAvatar
                                        avatar={user.user.profile}
                                        className="w-10 rounded-full"
                                    />
                                </div>
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
                                            href={route("owner.products")}
                                            as="button"
                                        >
                                            <ProductsIcon />
                                            Products
                                        </Link>
                                    </li>
                                </div>

                                <li>
                                    <Link
                                        href={route("owner.profile.edit")}
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

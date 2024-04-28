import { Link } from "@inertiajs/react"
import NavLink from "./NavLink"

const Navbar = ({user}) => {
  return (
    <div
    className={`navbar bg-white dark:bg-dark-gray sticky top-0 py-3 z-50 shadow-lg flex justify-between px-4`}
>
    <div className="flex-none">
        <a
            href={route("home")}
            className="btn btn-ghost text-xl text-gray-800 dark:text-white"
        >
            Pet Clinic
        </a>
    </div>
    <div className="flex-none gap-5 xs:hidden md:flex lg:gap-10">
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
                {/* <NavLink
                    href={route("user.cars")}
                    active={route().current("user.cars")}
                >
                    Cars
                </NavLink>
                <NavLink
                    href={route("user.orders")}
                    active={route().current("user.orders")}
                >
                    Orders
                </NavLink> */}
                <NavLink
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
                </NavLink>
            </>
        )}
    </div>
    <div className="flex-none gap-2 justify-center">
        {/* <label className="swap swap-rotate ms-2">
            <button
                className="theme-controller"
                // onClick={toggleDarkMode}
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
                    <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                    <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                    <line x1="1" x2="3" y1="12" y2="12" />
                    <line x1="21" x2="23" y1="12" y2="12" />
                    <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                    <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
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
        </label> */}

        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                role="button"
                className="btn btn-ghost"
            >
                {user ? (
                    <h1 className="text-gray-800 dark:text-white">
                        {user?.name}
                    </h1>
                ) : (
                    <h1 className="text-gray-800 dark:text-white">
                        Guest
                    </h1>
                )}
                <svg
                    className="ms-2 -me-0.5 h-4 w-4 md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-white text-gray-800 dark:bg-base-100 dark:text-white md:hidden"
            >
                <Link
                    as="button"
                    href="/"
                    className="btn btn-ghost text-xl text-gray-800 dark:text-white xs:flex md:hidden justify-start px-2"
                >
                    Car Rental
                </Link>
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
                        <li>
                            <Link
                                href={route("owner.dashboard")}
                                as="button"
                                className="justify-between"
                            >
                                Dashboard
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href={route("user.cars")}
                                as="button"
                                className="justify-between"
                            >
                                Cars
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("user.orders")}
                                as="button"
                                className="justify-between"
                            >
                                Orders
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                href={route("profile.edit")}
                                as="button"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Logout
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </div>
</div>
  )
}

export default Navbar
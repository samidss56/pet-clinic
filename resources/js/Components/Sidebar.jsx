import { Link } from "@inertiajs/react"

const Sidebar = ({user}) => {
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
                            user.role === "doctor"
                                ? route("doctor.dashboard")
                                : route("admin.dashboard")
                        }
                        className="btn btn-ghost text-xl text-gray-800 dark:text-white"
                    >
                        Car Rental
                    </a>
                    <a
                        href={route("doctor.dashboard")}
                        className="btn bg-gray-100 dark:bg-gray-300 hover:bg-gray-200 border-none text-md font-medium text-gray-800 dark:black"
                    >
                        {user.name}
                    </a>
                </div>
                <div className="flex flex-col gap-3">
                    <li>
                        <Link
                            href={
                                user.role === "doctor"
                                    ? route("doctor.dashboard")
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
                    {user.role === "doctor" ? (
                        <>
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
                                        <path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path>
                                    </svg>
                                    Cars Management
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href={route("admin.orders")}
                                    as="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="stroke-dark-gray dark:stroke-white main-grid-item-icon"
                                    >
                                        <polyline points="21 8 21 21 3 21 3 8" />
                                        <rect
                                            height="5"
                                            width="22"
                                            x="1"
                                            y="3"
                                        />
                                        <line
                                            x1="10"
                                            x2="14"
                                            y1="12"
                                            y2="12"
                                        />
                                    </svg>
                                    Orders Management
                                </Link>
                            </li> */}
                        </>
                    ) : (
                        <>
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
                                        <path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path>
                                    </svg>
                                    Cars
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href={route("admin.orders")}
                                    as="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="stroke-dark-gray dark:stroke-white main-grid-item-icon"
                                    >
                                        <polyline points="21 8 21 21 3 21 3 8" />
                                        <rect
                                            height="5"
                                            width="22"
                                            x="1"
                                            y="3"
                                        />
                                        <line
                                            x1="10"
                                            x2="14"
                                            y1="12"
                                            y2="12"
                                        />
                                    </svg>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.users")}
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
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    Users Management
                                </Link>
                            </li> */}
                        </>
                    )}
                    <li>
                        <Link href={route("profile.edit")} as="button">
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
                            Profile
                        </Link>
                    </li>
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
                    {/* <label className="swap swap-rotate ">
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
                    </label> */}
                </li>
            </div>
        </ul>
    </div>
</div>
  )
}

export default Sidebar
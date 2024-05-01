import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-gray-800 dark:border-gray-100 text-gray-900 dark:text-white focus:border-gray-700 dark:focus:text-gray-200"
                    : "border-transparent text-gray-600 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}

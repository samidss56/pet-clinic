import { Link } from "@inertiajs/react";

export const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="flex items-center justify-between mt-4">
            <div>
                <p>
                    Showing <span className="font-bold">{meta.to}</span> of{" "}
                    <span className="font-bold">{meta.total}</span> results
                </p>
            </div>
            <div className="join">
                {prev && (
                    <Link
                        href={prev}
                        className="join-item btn bg-white hover:bg-gray-200 text-gray-800 dark:bg-dark-gray dark:hover:bg-light-gray dark:text-white"
                    >
                        «
                    </Link>
                )}

                <Link className="join-item btn bg-white hover:bg-gray-200 text-gray-800 dark:bg-dark-gray dark:hover:bg-light-gray dark:text-white">
                    {current}
                </Link>
                {next && (
                    <Link
                        href={next}
                        className="join-item btn bg-white hover:bg-gray-200 text-gray-800 dark:bg-dark-gray dark:hover:bg-light-gray dark:text-white"
                    >
                        »
                    </Link>
                )}
            </div>
        </div>
    );
};

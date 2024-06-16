import { CreateIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import useToastNotification from "@/Hooks/useToastNotification";
import { Link } from "@inertiajs/react";

const JadwalsList = ({ jadwals, notification }) => {
    useToastNotification(notification);
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            No
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Docter
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jadwals.length > 0 &&
                        jadwals.map((product, i) => (
                            <tr key={product.docter_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {i + 1}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.name}
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.jadwal.edit",
                                                product.docter_id
                                            )}
                                        >
                                            <PrimaryButton className="flex gap-2">
                                                <CreateIcon />
                                                Tambah Jadwal
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default JadwalsList;

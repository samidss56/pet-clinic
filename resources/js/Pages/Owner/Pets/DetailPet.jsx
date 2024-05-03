import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const DetailPet = ({ pet, auth, title }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    console.log(pet);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <div className="bg-white dark:bg-gray rounded-lg p-4">
                        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="rounded-lg flex justify-center">
                                <img
                                    className="w-3/4 rounded-lg"
                                    src={`${appUrl}/storage/${pet.image}`}
                                    alt="Car Image"
                                />
                            </div>
                            <div className="border shadow-md rounded-lg">
                                <div className="p-4">
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        {pet.name}
                                    </h1>
                                    <h1 className="text-xl font-medium text-gray-600 dark:text-gray-200">{pet.age}</h1>
                                    <h1 className="text-md font-medium text-gray-600 dark:text-gray-200 opacity-70"></h1>
                                </div>
                                <div className="p-4 flex items-end gap-2">
                                    <div className="badge badge-secondary p-4 text-gray-100 font-medium"></div>
                                    <div className="badge p-4 dark:bg-white text-gray-100 dark:text-gray-800 opacity-80 font-semibold"></div>
                                </div>
                            </div>
                            <div className="border shadow-md rounded-lg">
                                <div className="p-4">
                                    <h1 className="text-2xl font-bold text-black dark:text-white"></h1>
                                    <h1 className="text-xl font-medium text-gray-600 dark:text-gray-200"></h1>
                                    <h1 className="text-md font-medium text-gray-600 dark:text-gray-200 opacity-70"></h1>
                                </div>
                                <div className="p-4 flex items-end gap-2">
                                    <div className="badge badge-success p-4 text-gray-100 font-medium"></div>
                                    <div className="badge badge-error p-4 text-gray-100 font-medium"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default DetailPet;

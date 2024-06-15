import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteService from "./ModalDeleteService";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import useToastNotification from "@/Hooks/useToastNotification";

const isServices = (services, notification) => {
    const [showModalDeleteService, setShowModalDeleteService] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeleteService = (service) => {
        setShowModalDeleteService(true);
        setSelectedService(service);
    };
    const closeModalDeleteService = () => {
        setShowModalDeleteService(false);
        setSelectedService(null);
    };

    useToastNotification(notification);
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Service ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Service Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Service Image
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Service Price
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {services.length > 0 &&
                        services.map((service) => (
                            <tr key={service.service_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {service.service_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {service.name_service}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={`${appUrl}/storage/${service.image_service}`}
                                        alt="Pet Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {formatCurr(service.price_service)}
                                </th>

                                <th className="text-black dark:text-white font-medium">
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.services.edit",
                                                service.service_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteService(
                                                    service
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </DangerButton>
                                        <ModalDeleteService
                                            show={
                                                showModalDeleteService &&
                                                selectedService == service
                                            }
                                            onClose={closeModalDeleteService}
                                            service={selectedService}
                                        />
                                    </div>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noServices = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no products data to Show.
            </h1>
        </div>
    );
};

const ServicesList = ({ services, notification }) => {
    return !services ? noServices() : isServices(services, notification);
};

export default ServicesList;

import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import UserAvatar from "@/Components/UserAvatar";
import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";

const DetailCard = ({ appointment }) => {
    const products = appointment.transaction?.details?.filter(
        (detail) => detail.product_id !== null
    ) ?? [];
    const services = appointment.transaction?.details?.filter(
        (detail) => detail.service_id !== null
    ) ?? [];
    return (
        <div className="bg-white rounded-md shadow-md ">
            <div className="p-4 flex items-center justify-between border-b rounded-t-md">
                <h2 className="text-xl font-bold px-2 text-gray-800">
                    {appointment.appointmen_id}
                </h2>
                <div
                    className={`p-2 rounded-lg ${
                        appointment.status === "pending" && "bg-yellow-500"
                    } ${appointment.status === "rejected" && "bg-red-600"} ${
                        appointment.status === "accepted" && "bg-cyan-500"
                    } ${appointment.status === "handled" && "bg-blue-500"} ${
                        appointment.status === "finished" && "bg-green-500"
                    } ${
                        appointment.status === "expired" && "bg-gray-500"
                    } text-white text-sm font-semibold`}
                >
                    {appointment.status}
                </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-gray-700 font-semibold">Pet Details</h2>
                    <div className="mt-3">
                        <UserAvatar
                            avatar={appointment.pet.image}
                            className="w-16 rounded-full"
                        />
                        <InputLabel value="Pet ID" />
                        <TextInput
                            value={appointment.pet_id}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Pet Name" />
                        <TextInput
                            value={appointment.pet.name}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Pet Age" />
                        <TextInput
                            value={`${appointment.pet.age} years`}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Pet Gender" />
                        <TextInput
                            value={appointment.pet.gender}
                            disabled
                            className="block w-full"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-gray-700 font-semibold">
                        Doctor Details
                    </h2>
                    <div className="mt-3">
                        <UserAvatar
                            avatar={appointment.docter.image}
                            className="w-16 rounded-full"
                        />
                        <InputLabel value="Doctor ID" />
                        <TextInput
                            value={appointment.docter.docter_id}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor Name" />
                        <TextInput
                            value={appointment.docter.name}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor Email" />
                        <TextInput
                            value={appointment.docter.email}
                            disabled
                            className="block w-full"
                        />
                        <InputLabel value="Doctor Phone" />
                        <TextInput
                            value={
                                appointment.docter.phone
                                    ? appointment.docter.phone
                                    : "-"
                            }
                            disabled
                            className="block w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 rounded-md m-4 shadow-md ">
                <div className="p-4 flex items-center justify-between border-b">
                    <h2 className="text-md font-bold px-2 text-gray-800">
                        {appointment.appointmen_id}
                    </h2>
                </div>
                <div className="p-4">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Appointment Date" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={appointment.date_appointmens}
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Appointment Day" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    {appointment.docter.jadwal.map(
                                        (schedule) => (
                                            <TextInput
                                                value={schedule.day}
                                                disabled
                                                className="block w-full"
                                            />
                                        )
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Appointment Time" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={appointment.jadwal}
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Pet Temperature" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={
                                            `${appointment.temperature} C` ||
                                            "-"
                                        }
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Pet Weight" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={
                                            `${appointment.weight} kg` || "-"
                                        }
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Appointment Description" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={
                                            `${appointment.description}` || "-"
                                        }
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-400 text-sm">
                                    <InputLabel value="Appointment Advice" />
                                </td>
                                <td className="px-3 pb-3"> : </td>
                                <td className="text-gray-700">
                                    <TextInput
                                        value={appointment.advice}
                                        disabled
                                        className="block w-full"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {appointment.status === "finished" && (
                <div className="bg-gray-50 rounded-md mx-4 shadow-md ">
                    <div className="p-4 flex items-center justify-between border-b">
                        <h2 className="text-md font-bold px-2 text-gray-800">
                            Invoice No #{appointment.transaction.invoice}
                        </h2>
                        <div
                            className={`p-2 rounded-lg ${
                                appointment.status === "pending" &&
                                "bg-yellow-500"
                            } ${
                                appointment.status === "rejected" &&
                                "bg-red-600"
                            } ${
                                appointment.status === "accepted" &&
                                "bg-cyan-500"
                            } ${
                                appointment.status === "handled" &&
                                "bg-blue-500"
                            } ${
                                appointment.status === "finished" &&
                                "bg-green-500"
                            } ${
                                appointment.status === "expired" &&
                                "bg-gray-500"
                            } text-white text-sm font-semibold`}
                        >
                            {appointment.status}
                        </div>
                    </div>
                    <div className="p-4">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-gray-400 text-sm">
                                        <InputLabel value="Appointment ID" />
                                    </td>
                                    <td className="px-3 pb-3"> : </td>
                                    <td className="text-gray-700">
                                        <TextInput
                                            value={
                                                appointment.transaction
                                                    .appointmen_id
                                            }
                                            disabled
                                            className="block w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-gray-400 text-sm">
                                        <InputLabel value="Appointment Date" />
                                    </td>
                                    <td className="px-3 pb-3"> : </td>
                                    <td className="text-gray-700">
                                        <TextInput
                                            value={
                                                appointment.transaction
                                                    .date_transaction
                                            }
                                            disabled
                                            className="block w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-gray-400 text-sm">
                                        <InputLabel value="Invoice Number" />
                                    </td>
                                    <td className="px-3 pb-3"> : </td>
                                    <td className="text-gray-700">
                                        <TextInput
                                            value={`#${appointment.transaction.invoice}`}
                                            disabled
                                            className="block w-full"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4">
                        <div className="border-t-2 border-gray-300">
                            <h2 className="text-gray-700 font-semibold text-md my-2">
                                Products
                            </h2>
                            <table className="table  dark:bg-dark-gray border-dark-gray rounded-md">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-black dark:text-white text-sm">
                                            Product Name
                                        </th>
                                        <th className="text-black dark:text-white text-sm">
                                            QTY
                                        </th>
                                        <th className="text-black dark:text-white text-sm">
                                            Unit Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.transaction_id}>
                                            <th>{product.product_id}</th>
                                            <th>{product.quantity}</th>
                                            <th>
                                                {formatCurr(
                                                    product.harga_product
                                                )}
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h2 className="text-gray-700 font-semibold text-md my-2">
                                Service
                            </h2>
                            <table className="table  dark:bg-dark-gray border-dark-gray rounded-md">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-black dark:text-white text-sm">
                                            Service Name
                                        </th>
                                        <th className="text-black dark:text-white text-sm">
                                            QTY
                                        </th>
                                        <th className="text-black dark:text-white text-sm">
                                            Unit Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((service) => (
                                        <tr key={service.transaction_id}>
                                            <th>{service.service_id}</th>
                                            <th>
                                                {service.quantity
                                                    ? service.quantity
                                                    : "-"}
                                            </th>
                                            <th>
                                                {formatCurr(
                                                    service.harga_service
                                                )}
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-end p-4 space-y-2">
                        <h2 className="text-gray-500 font-semibold">
                            Subtotal
                        </h2>
                        <p className="text-gray-800 font-semibold ">
                            {formatCurr(appointment.transaction.subtotal)}
                        </p>
                    </div>
                </div>
            )}
            <div className="p-4">
                <Link href={route("owner.appointmen")}>
                    <SecondaryButton>
                        <ArrowLeftIcon />
                        Back to Appointments List
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default DetailCard;

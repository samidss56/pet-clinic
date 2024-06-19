import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import ModalDeleteTestimonial from "./ModalDeleteTestimonial";
import useToastNotification from "@/Hooks/useToastNotification";

const isTestimonials = (testimonials, notification) => {
    const [showModalDeleteTestimonial, setShowModalDeleteTestimonial] =
        useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeleteTestimonial = (testimonials) => {
        setShowModalDeleteTestimonial(true);
        setSelectedTestimonial(testimonials);
    };

    const closeModalDeleteTestimonial = () => {
        setShowModalDeleteTestimonial(false);
        setSelectedTestimonial(null);
    };

    useToastNotification(notification);

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Testimonial ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Owner Profile
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Content
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Status
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.length > 0 &&
                        testimonials.map((testimonial) => (
                            <tr key={testimonial.testimonial_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {testimonial.testimonial_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={
                                                testimonial.profile
                                                    ? `${appUrl}/storage/${testimonial.profile}`
                                                    : `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user`
                                            }
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        {testimonial.name}
                                    </div>
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {testimonial.content}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {testimonial.status === "pending" && (
                                        <span className="inline-block px-2 py-1 bg-yellow-500 text-white rounded">
                                            pending
                                        </span>
                                    )}
                                    {testimonial.status === "accepted" && (
                                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded">
                                            accepted
                                        </span>
                                    )}
                                    {testimonial.status === "rejected" && (
                                        <span className="inline-block px-2 py-1 bg-primary-red text-white rounded">
                                            rejected
                                        </span>
                                    )}
                                </th>

                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "admin.testimonials.edit",
                                                testimonial.testimonial_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteTestimonial(
                                                    testimonial
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </DangerButton>
                                        <ModalDeleteTestimonial
                                            show={
                                                showModalDeleteTestimonial &&
                                                selectedTestimonial ==
                                                    testimonial
                                            }
                                            onClose={
                                                closeModalDeleteTestimonial
                                            }
                                            testimonial={selectedTestimonial}
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

const noTestimonials = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no Testimonials data to Show.
            </h1>
        </div>
    );
};

const TestimonialsList = ({ testimonials, notification }) => {
    return !testimonials ? noTestimonials() : isTestimonials(testimonials, notification);
};

export default TestimonialsList;

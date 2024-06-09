import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import ModalDeleteTestimonial from "./ModalDeleteTestimonial";

const isTestimonials = (testimonials) => {
    const [showModalDeleteTestimonial, setShowModalDeleteTestimonial] = useState(false);
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

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Testimonial ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Owner Name
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
                                    {testimonial.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {testimonial.content}
                                </th>
                                <th className={`badge p-3 mt-4 ${
                                            testimonial.status === "pending" &&
                                            "bg-orange-400 border-orange-400 text-white"
                                        } ${
                                            testimonial.status === "accepted" &&
                                            "bg-green-600 border-green-600 text-white"
                                        } ${
                                            testimonial.status === "rejected" &&
                                            "bg-primary-red border-primary-red text-white"
                                        }`}>
                                    {testimonial.status}
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
                                                selectedTestimonial == testimonial
                                            }
                                            onClose={closeModalDeleteTestimonial}
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

const TestimonialsList = ({ testimonials }) => {
    return !testimonials ? noTestimonials() : isTestimonials(testimonials);
};

export default TestimonialsList;

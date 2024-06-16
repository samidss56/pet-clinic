import DangerButton from "@/Components/DangerButton";
import { ShowIcon } from "@/Components/Icons/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import useToastNotification from "@/Hooks/useToastNotification";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const isTestimonials = (testimonials, notification) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useToastNotification(notification);

    return (
        <div>
            {testimonials.length > 0 &&
                testimonials.map((testimonial) => (
                    <div
                        key={testimonial.testimonial_id}
                        className="collapse collapse-arrow mb-3 bg-white border-[1.5px] border-secondary-color"
                    >
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={openIndex === testimonial.testimonial_id}
                            onChange={() =>
                                toggleAccordion(testimonial.testimonial_id)
                            }
                        />
                        <div
                            className={`collapse-title text-xl font-medium ${
                                openIndex === testimonial.testimonial_id &&
                                "border-b-[1.5px] border-gray-300"
                            }`}
                            onClick={() =>
                                toggleAccordion(testimonial.testimonial_id)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 text-md font-semibold">
                                    {testimonial.testimonial_id}
                                </p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-gray-800 text-sm font-semibold">
                                        {testimonial.created_at}
                                    </p>
                                    <span className="text-gray-800">|</span>
                                    <div
                                        className={`badge p-3 ${
                                            testimonial.status === "pending" &&
                                            "bg-orange-400 border-orange-400 text-white"
                                        } ${
                                            testimonial.status === "accepted" &&
                                            "bg-green-600 border-green-600 text-white"
                                        } ${
                                            testimonial.status === "rejected" &&
                                            "bg-primary-red border-primary-red text-white"
                                        }`}
                                    >
                                        {testimonial.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openIndex === testimonial.testimonial_id && (
                            <div className="collapse-content p-4">
                                <table>
                                    <tbody>
                                        {/* <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Appointment
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.appointmen_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Doctor
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.docter_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                ID Hewan Peliharaan
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {appointment.pet_id}
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                Tanggal Testimonial
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {testimonial.created_at}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400 text-sm">
                                                Content
                                            </td>
                                            <td className="px-3"> : </td>
                                            <td className="font-semibold text-sm text-gray-700">
                                                {testimonial.content}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div className="flex justify-end gap-2 mt-4">
                                    <Link
                                        href={route(
                                            "owner.testimonials.detail",
                                            testimonial.testimonial_id
                                        )}
                                    >
                                        <PrimaryButton>
                                            <ShowIcon />
                                        </PrimaryButton>
                                    </Link>
                                </div> */}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

const noTestimonials = () => {
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-slate-100">
            There is no Testimonials data to Show.
        </h1>
    </div>;
};

const TestimonialsList = ({ testimonials, notification }) => {
    return !testimonials
        ? noTestimonials()
        : isTestimonials(testimonials, notification);
};

export default TestimonialsList;

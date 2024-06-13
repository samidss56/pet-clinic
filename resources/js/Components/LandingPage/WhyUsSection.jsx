import React from "react";
import { CheckIcon } from "../Icons/Index";

const WhyUsSection = ({ whyUs }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8 bg-light-blue">
            <div className="flex flex-col-reverse p-4 md:flex-row items-center">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-80"
                        src={whyUs.image ? `${appUrl}/storage/${whyUs.image}` : "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM5LWltYWdlXzItbDBqOXFvd3IucG5n.png"}
                        alt="Why Us Image"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4 text-black w-full md:w-2/3 2xl:w-full">
                        {whyUs.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 w-2/3 2xl:w-full">
                        {whyUs.description}
                    </p>
                    {whyUs.list_items.map((item, index) => (
                        <li className="text-gray-800 list-none flex gap-2" key={index}>
                            <CheckIcon /> {item}
                        </li>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;

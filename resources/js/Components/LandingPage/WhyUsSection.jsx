import React from "react";

const WhyUsSection = () => {
    return (
        <section className="px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse p-4 md:flex-row items-center">
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold mb-4 text-black w-2/3 2xl:w-full">
                        {hero.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 w-2/3 2xl:w-full">
                        {hero.content}
                    </p>
                    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
                        Learn More
                    </button>
                </div>
                <div className="w-full md:w-1/2 text-right">
                    <img
                        src={`${appUrl}/storage/${hero.image}`}
                        alt="Banner Image"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;

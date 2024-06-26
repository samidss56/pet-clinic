const AboutUsSection = ({ about }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="bg-light-blue">
            <div className="text-left mb-8"></div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="w-full flex-col space-y-6 md:w-1/2 p-4 px-2 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {about.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        {about.content}
                    </p>
                    <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 mb-2 rounded-full">
                        Learn More
                    </button>
                </div>
                <div className="w-full md:w-1/2 text-right">
                    <img
                        src={`${appUrl}/storage/${about.image}`}
                        alt="About Us Image"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;

import ServiceCard from "./ServiceCard";

const ServicesSection = ({ services }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8 space-y-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Services
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat id similique ipsam nostrum ducimus, facilis
                    necessitatibus recusandae maxime.
                </p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.services_id}
                        imgSrc={`${appUrl}/storage/${service.image_service}`}
                        altText={service.name_service}
                        title={service.name_service}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;

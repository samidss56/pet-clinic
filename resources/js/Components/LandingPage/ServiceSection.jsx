import ServiceCard from "./ServiceCard";

const ServicesSection = ({ services }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
                OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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

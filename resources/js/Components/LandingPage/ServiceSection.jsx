const ServicesSection = () => {
    return (
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            imgSrc="/1.png"
            altText="Wellness Exams"
            title="Wellness Exams"
            description="Regular health check-ups to ensure your pet is in good shape."
          />
          <ServiceCard
            imgSrc="/2.png"
            altText="Vaccinations"
            title="Vaccinations"
            description="Essential vaccines to protect your pet from common diseases."
          />
          <ServiceCard
            imgSrc="/4.png"
            altText="Dental Care"
            title="Dental Care"
            description="Teeth cleaning, polishing, and dental surgeries."
          />
        </div>
      </section>
    );
  };

  export default ServicesSection;
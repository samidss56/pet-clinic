import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
    return (
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-red-500">TESTIMONIALS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            text="We are so thankful for the exceptional care provided by this clinic. Dr. Ratna's expertise in dermatology helped our dog, Bruno, overcome a persistent skin condition. We highly recommend their services."
            author="Rina Putri"
            imgSrc="/testimoni1.png"
          />
          <TestimonialCard
            text="Finding a vet who truly cares about your pet's well-being is priceless. Dr. Arief, Dr. Ratna, and Dr. Budi are incredible. Their attention to detail and genuine love for animals shine through in every visit."
            author="Joko Susilo"
            imgSrc="/testimoni2.png"
          />
          <TestimonialCard
            text="The team at this clinic is simply the best! From routine check-ups to emergency care, they always provide top-notch service with a smile. Our family feels very fortunate to have such caring and professional veterinarians."
            author="Sari Lestari"
            imgSrc="/testimoni3.png"
          />
        </div>
      </section>
    );
  };

  export default TestimonialsSection;
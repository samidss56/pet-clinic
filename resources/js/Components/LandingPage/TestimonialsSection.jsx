import TestimonialCards from "./TestimonialCards";

const TestimonialsSection = () => {
    return (
        <section className="px-2 sm:px-6 lg:px-8 py-8 space-y-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Testimonials
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat id similique ipsam nostrum ducimus, facilis
                    necessitatibus recusandae maxime.
                </p>
            </div>
            <div className="carousel carousel-center p-4 space-x-4 bg-white w-full">
                <TestimonialCards />
            </div>
        </section>
    );
};

export default TestimonialsSection;

import TestimonialCards from "./TestimonialCards";

const TestimonialsSection = ({ testimonials }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
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
                {testimonials.map((testimonial) => (
                    <TestimonialCards
                        key={testimonial.testimonial_id}
                        profile={
                            testimonial.profile
                                ? `${appUrl}/storage/${testimonial.profile}`
                                : `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user`
                        }
                        name={testimonial.name}
                        content={testimonial.content}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;

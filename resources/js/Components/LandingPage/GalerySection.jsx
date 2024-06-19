import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons/Index";

const GallerySection = ({ galleries }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % galleries.length);
        }, 3000); // change slide every 3 seconds

        return () => clearInterval(interval);
    }, [galleries.length]);

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + galleries.length) % galleries.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleries.length);
    };

    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <section className="px-2 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Galleries
            </h2>
            <div className="relative w-full h-96 overflow-hidden">
                {galleries.map((gallery, index) => (
                    <img
                        key={gallery.gallery_id}
                        src={`${appUrl}/storage/${gallery.image}`}
                        alt={`Gallery Image ${index + 1}`}
                        className={`w-full h-96 object-cover rounded-lg shadow-lg absolute top-0 left-0 transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default GallerySection;

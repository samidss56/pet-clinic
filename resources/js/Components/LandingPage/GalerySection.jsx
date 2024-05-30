import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons/Index";

const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = Array.from(
        { length: 15 },
        (_, index) => `/galeri${index + 1}.png`
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
                GALLERY
            </h2>
            <div className="relative w-full h-96 overflow-hidden">
                {images.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
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

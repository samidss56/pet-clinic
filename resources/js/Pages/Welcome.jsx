import AboutUsSection from "@/Components/LandingPage/AboutUsSection";
import Footer from "@/Components/LandingPage/Footer";
import GallerySection from "@/Components/LandingPage/GalerySection";
import HeroSection from "@/Components/LandingPage/HeroSection";
import MeetOurTeamSection from "@/Components/LandingPage/MeetOurTeamSection";
import ServicesSection from "@/Components/LandingPage/ServiceSection";
import TestimonialsSection from "@/Components/LandingPage/TestimonialsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth, hero, services, doctors, about }) {
    return (
        <Authenticated user={auth}>
            <Head title="Welcome" />
            <div className="bg-gray-100">
                <div className="w-full">
                    <HeroSection hero={hero} />
                    <ServicesSection services={services} />
                    <MeetOurTeamSection doctors={doctors} />
                    <TestimonialsSection />
                    <GallerySection />
                    <AboutUsSection about={about} />
                    <Footer />
                </div>
            </div>
        </Authenticated>
    );
}

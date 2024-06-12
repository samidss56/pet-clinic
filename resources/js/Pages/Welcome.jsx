import AboutUsSection from "@/Components/LandingPage/AboutUsSection";
import Footer from "@/Components/LandingPage/Footer";
import GallerySection from "@/Components/LandingPage/GalerySection";
import HeroSection from "@/Components/LandingPage/HeroSection";
import MeetOurTeamSection from "@/Components/LandingPage/MeetOurTeamSection";
import ServicesSection from "@/Components/LandingPage/ServiceSection";
import TestimonialsSection from "@/Components/LandingPage/TestimonialsSection";
import { Head } from "@inertiajs/react";
import ArticlesSection from "@/Components/LandingPage/ArticlesSection";
import Navbar from "@/Components/LandingPage/Navbar";

export default function Welcome({
    auth,
    hero,
    services,
    doctors,
    about,
    docter,
    articles,
    testimonials,
}) {
    return (
        <>
            <Navbar auth={auth} docter={docter} />
            <Head title="Welcome" />
            <div className="bg-white">
                <div className="w-full space-y-8">
                    <HeroSection hero={hero} />
                    <ServicesSection services={services} />
                    {/* -- Why Us -- */}
                    <MeetOurTeamSection doctors={doctors} />
                    <GallerySection />
                    <TestimonialsSection testimonials={testimonials} />
                    <AboutUsSection about={about} />
                    <ArticlesSection articles={articles} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

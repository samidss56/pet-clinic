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
import WhyUsSection from "@/Components/LandingPage/WhyUsSection";

export default function Welcome({
    auth,
    hero,
    services,
    doctors,
    about,
    docter,
    articles,
    testimonials,
    whyUs,
    galleries,
}) {
    return (
        <>
            <Navbar auth={auth} docter={docter} />
            <Head title="Welcome" />
            <div className="bg-white">
                <div className="w-full space-y-8">
                    <HeroSection hero={hero} />
                    <ServicesSection services={services} />
                    <WhyUsSection whyUs={whyUs} />
                    <MeetOurTeamSection doctors={doctors} />
                    <GallerySection galleries={galleries} />
                    <TestimonialsSection testimonials={testimonials} />
                    <AboutUsSection about={about} />
                    <ArticlesSection articles={articles} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

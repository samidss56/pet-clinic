import AboutUsSection from "@/Components/LandingPage/AboutUsSection";
import Footer from "@/Components/LandingPage/Footer";
import GallerySection from "@/Components/LandingPage/GalerySection";
import HeroSection from "@/Components/LandingPage/HeroSection";
import MeetOurTeamSection from "@/Components/LandingPage/MeetOurTeamSection";
import ServicesSection from "@/Components/LandingPage/ServiceSection";
import TestimonialsSection from "@/Components/LandingPage/TestimonialsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
  const user = auth?.user?.name;

  return (
    <Authenticated user={user}>
      <Head title="Welcome" />
      <div className="bg-gray-100">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <HeroSection />
          <ServicesSection />
          <MeetOurTeamSection />
          <ArticleSection />
          <TestimonialsSection />
          <GallerySection />
          <AboutUsSection />
          <Footer />
        </div>
      </div>
    </Authenticated>
  );
};
  

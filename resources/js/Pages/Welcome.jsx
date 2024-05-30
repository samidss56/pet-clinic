import AboutUsSection from "@/Components/LandingPage/AboutUsSection";
import Footer from "@/Components/LandingPage/Footer";
import GallerySection from "@/Components/LandingPage/GalerySection";
import HeroSection from "@/Components/LandingPage/HeroSection";
import MeetOurTeamSection from "@/Components/LandingPage/MeetOurTeamSection";
import ServicesSection from "@/Components/LandingPage/ServiceSection";
import TestimonialsSection from "@/Components/LandingPage/TestimonialsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Welcome({ auth }) {
  const user = auth?.user?.name;

  return (
    <Authenticated user={user}>
      <Head title="Welcome" />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <HeroSection />
          <ServicesSection />
          <MeetOurTeamSection />
          <TestimonialsSection />
          <GallerySection />
          <AboutUsSection />
          <Footer />
          <ServiceCard />
          <DoctorCard />
          <TestimonialCard />
        </div>
      </div>
    </Authenticated>
  );
};

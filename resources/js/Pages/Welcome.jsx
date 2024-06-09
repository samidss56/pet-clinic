import AboutUsSection from "@/Components/LandingPage/AboutUsSection";
import Footer from "@/Components/LandingPage/Footer";
import GallerySection from "@/Components/LandingPage/GalerySection";
import HeroSection from "@/Components/LandingPage/HeroSection";
import MeetOurTeamSection from "@/Components/LandingPage/MeetOurTeamSection";
import ServicesSection from "@/Components/LandingPage/ServiceSection";
import TestimonialsSection from "@/Components/LandingPage/TestimonialsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import appLogo from "../../../public/AppLogo.png";
import {
    AppointmentsIcon,
    ArrowBottomIcons,
    DashboardIcon,
    LogoutIcon,
    PetsIcon,
    SettingsIcons,
} from "@/Components/Icons/Index";
import UserAvatar from "@/Components/UserAvatar";
import AppDocter from "@/Layouts/AppDocter";

export default function Welcome({ auth, hero, services, doctors, about, docter }) {
    // console.log(docter);
    // console.log(auth);

    const renderNavBar = () => {
        return (
            <div className="navbar bg-white sticky top-0 py-3 z-50 shadow-lg flex justify-between px-2 sm:px-4">
                <div className="flex-none">
                    <div className="flex gap-3 px-2 items-center justify-between">
                        <img src={appLogo} alt="App Logo" className="w-14" />
                        <p className="text-xl font-bold text-primary-red">
                            Pawana Jiwa
                        </p>
                    </div>
                </div>
                <div className="flex-none gap-5 hidden md:flex lg:gap-10"></div>
                <div className="flex-none gap-2 justify-center">
                    <div className="dropdown dropdown-end">
                        <button
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
                            {auth ? (
                                <div className="flex items-center gap-3">
                                    <div className="hidden xs:flex">
                                        <UserAvatar
                                            avatar={auth.user.profile}
                                            className="w-10 rounded-full"
                                        />
                                    </div>
                                    <h1 className="text-gray-800">
                                        {auth.user.name}
                                    </h1>
                                </div>
                            ) : docter ? (
                                <div className="flex items-center gap-3">
                                    <div className="hidden xs:flex">
                                        <UserAvatar
                                            avatar={docter.profile}
                                            className="w-10 rounded-full"
                                        />
                                    </div>
                                    <h1 className="text-gray-800">
                                        {docter.name}
                                    </h1>
                                </div>
                            ) : (
                                <h1 className="text-gray-800">Guest</h1>
                            )}
                            <ArrowBottomIcons />
                        </button>
                        <ul
                            tabIndex={0}
                            className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-44 bg-white text-gray-800"
                        >
                            {!auth && !docter ? (
                                <>
                                    <li>
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("register")} as="button">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        {auth && auth.user && auth.isSuperAdmin ? (
                                            <Link href={route("superadmin.dashboard")} as="button">
                                                <DashboardIcon />
                                                Dashboard Superadmin
                                            </Link>
                                        ) : auth && auth.user && auth.isAdmin ? (
                                            <Link href={route("admin.dashboard")} as="button">
                                                <DashboardIcon />
                                                Dashboard Admin
                                            </Link>
                                        ) : auth && auth.user ? (
                                            <Link href={route("owner.dashboard")} as="button">
                                                <DashboardIcon />
                                                Dashboard
                                            </Link>
                                        ) : docter ? (
                                            <Link href={route("doctor.dashboard")} as="button">
                                                <DashboardIcon />
                                                Dashboard Doctor
                                            </Link>
                                        ) : null}
                                    </li>
                                    <li>
                                        {docter ? (
                                           <Link href={route("logout.docter")} method="post" as="button">
                                           <LogoutIcon />
                                           Logout
                                           </Link>
                                        ) : (
                                            <Link href={route("logout")} method="post" as="button">
                                            <LogoutIcon />
                                            Logout
                                            </Link>
                                        )}
                                       
                                       
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {renderNavBar()}

            {auth && auth.user && (auth.isAdmin || auth.isSuperAdmin) ? (
                <Authenticated user={auth} />
            ) : null}

            <Head title="Welcome" />
            <div className="bg-white">
                <div className="w-full space-y-8">
                    <HeroSection hero={hero} />
                    <ServicesSection services={services} />
                    <MeetOurTeamSection doctors={doctors} />
                    <TestimonialsSection />
                    <GallerySection />
                    <AboutUsSection about={about} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

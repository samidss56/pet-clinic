import DoctorCard from "@/Components/LandingPage/DoctorCard";
import Navbar from "@/Components/LandingPage/Navbar";
import { Paginator } from "@/Components/Paginator";
import { Head } from "@inertiajs/react";

const Index = ({ auth, title, doctors, docter }) => {
    return (
        <>
            <Navbar auth={auth} docter={docter} />
            <Head title={title} />
            <div className="bg-white w-full space-y-8 p-8">
                <div className="text-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Our Veterinarians
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat id similique ipsam nostrum ducimus,
                            facilis necessitatibus recusandae maxime.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {doctors.data.map((doctor) => (
                        <DoctorCard
                            key={doctor.docter_id}
                            imgSrc={doctor.profile}
                            altText={doctor.name}
                            name={doctor.name}
                        />
                    ))}
                </div>
                <Paginator meta={doctors.meta} />
            </div>
        </>
    );
};

export default Index;

import { Link } from "@inertiajs/react";
import DoctorCard from "./DoctorCard";
import { ArrowRightIcon } from "../Icons/Index";

const MeetOurTeamSection = ({ doctors }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8 py-8 my-10 space-y-4 bg-light-blue">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Veterinarians
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat id similique ipsam nostrum ducimus, facilis
                    necessitatibus recusandae maxime.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {doctors.map((doctor) => (
                    <DoctorCard
                        key={doctor.docter_id}
                        imgSrc={
                            doctor.profile
                                ? `${appUrl}/storage/${doctor.profile}`
                                : "https://fakeimg.pl/100x100/?text=Profile&font=noto"
                        }
                        altText={doctor.name}
                        name={doctor.name}
                    />
                ))}
            </div>
            <div className="flex justify-end">
                <Link href={route("doctors.index")}>
                    <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 flex items-center rounded-full">
                        More Doctors
                        <ArrowRightIcon color="fill-primary-red" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default MeetOurTeamSection;

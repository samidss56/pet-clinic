import DoctorCard from "./DoctorCard";

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
                        imgSrc={`${appUrl}/storage/${doctor.profile}`}
                        altText={doctor.name}
                        name={doctor.name}
                    />
                ))}
            </div>
        </section>
    );
};

export default MeetOurTeamSection;

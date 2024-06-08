import DoctorCard from "./DoctorCard";

const MeetOurTeamSection = ({ doctors }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8 py-8 my-10 bg-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
                MEET OUR TEAM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

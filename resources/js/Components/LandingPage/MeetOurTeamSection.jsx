const MeetOurTeamSection = () => {
    return (
      <section className="container mx-auto py-12 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">MEET OUR TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DoctorCard
            imgSrc="/dokter1.png"
            altText="Dr. Arief Wijaya"
            name="Dr. Arief Wijaya, DVM"
            specialization="Veterinary Surgery"
          />
          <DoctorCard
            imgSrc="/dokter2.png"
            altText="Dr. Ratna Sari"
            name="Dr. Ratna Sari, DVM"
            specialization="Veterinary Dermatology"
          />
          <DoctorCard
            imgSrc="/dokter3.png"
            altText="Dr. Budi Santoso"
            name="Dr. Budi Santoso, DVM"
            specialization="Small Animal Internal Medicine"
          />
        </div>
      </section>
    );
  };

  export default MeetOurTeamSection;
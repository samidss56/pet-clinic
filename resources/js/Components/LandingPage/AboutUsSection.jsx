const AboutUsSection = () => {
    return (
      <section className="container mx-auto py-12 bg-gray-200">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-red-500">ABOUT US</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1/2 text-left">
            <p className="text-lg text-gray-600 mb-6">
              "Pawana" means breeze, and "Jiwa" means life. At PawanaJiwa, we offer refreshing, comprehensive care to ensure your pets live healthy, vibrant lives. Our experienced team is dedicated to compassionate and holistic pet care.
            </p>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
              Learn More
            </button>
          </div>
          <div className="w-1/2 text-right">
            <img src="/about.png" alt="About Us Image" className="mx-auto" />
          </div>
        </div>
      </section>
    );
  };

  export default AboutUsSection;
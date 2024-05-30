const HeroSection = () => {
    return (
      <section className="container mx-auto py-12">
        <div className="flex flex-col-reverse p-4 md:flex-row items-center">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 text-black">
              <span>Your Pet's Health is</span><br />
              <span>Our Priority!!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              <span>Committed to providing the highest quality care for</span><br />
              <span>your pets.</span>
            </p>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <img src="/banner1.png" alt="Banner Image" className="mx-auto" />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
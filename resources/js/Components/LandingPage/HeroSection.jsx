const HeroSection = ({hero}) => {
  const appUrl = import.meta.env.VITE_APP_URL;
    return (
      <section className="px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse p-4 md:flex-row items-center">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 xs:w-full md:w-2/3 2xl:w-full">
              {hero.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 xs:w-full md:w-2/3 2xl:w-full">
              {hero.content}
            </p>
            <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 mb-2 rounded-full">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <img src={`${appUrl}/storage/${hero.image}`} alt="Banner Image" className="mx-auto" />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
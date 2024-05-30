const ServiceCard = ({ imgSrc, altText, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img src={imgSrc} alt={altText} className="mb-5 w-120 h-130" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
          Book Now
        </button>
      </div>
    );
  };

  export default ServiceCard;
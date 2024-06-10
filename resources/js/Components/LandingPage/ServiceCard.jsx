const ServiceCard = ({ imgSrc, altText, title, service_id }) => {
    return (
        <div
            key={service_id}
            className="bg-light-blue rounded-lg shadow-md p-1 flex flex-col items-center"
        >
            <img src={imgSrc} alt={altText} className="w-28" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 mb-2 rounded-full">
                Book Now
            </button>
        </div>
    );
};

export default ServiceCard;

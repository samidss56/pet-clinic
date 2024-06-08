const ServiceCard = ({ imgSrc, altText, title, key }) => {
    return (
        <div
            key={key}
            className="bg-white rounded-lg shadow-md p-1 flex flex-col items-center"
        >
            <img src={imgSrc} alt={altText} className="w-28" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <button className="bg-red-500 text-white font-bold py-2 px-4 mb-2 rounded-full hover:bg-red-700">
                Book Now
            </button>
        </div>
    );
};

export default ServiceCard;

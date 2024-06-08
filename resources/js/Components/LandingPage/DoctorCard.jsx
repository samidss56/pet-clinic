const DoctorCard = ({ imgSrc, altText, name, key }) => {
    return (
        <div
            key={key}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
            <img src={imgSrc} alt={altText} className="w-full h-auto" />
            <div className="p-4">
                <h4 className="text-xl font-bold text-black mb-2">{name}</h4>
                <a
                    href="#"
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700"
                >
                    More Info
                </a>
            </div>
        </div>
    );
};

export default DoctorCard;

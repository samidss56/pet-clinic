const DoctorCard = ({ imgSrc, altText, name, key }) => {
    return (
        <div
            key={key}
            className="card w-full lg:max-w-80 bg-white shadow-xl cursor-pointer"
        >
            <figure className="p-5">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="w-full h-auto rounded-xl"
                />
            </figure>
            <div className="card-body p-5 flex justify-between">
                <h4 className="text-xl font-bold text-black">{name}</h4>
                <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 mb-2 rounded-full">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default DoctorCard;

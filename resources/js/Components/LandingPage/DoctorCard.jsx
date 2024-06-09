const DoctorCard = ({ imgSrc, altText, name, docter_id }) => {
    return (
        <div
            key={docter_id}
            className="card w-full lg:max-w-80 bg-white shadow-xl cursor-pointer"
        >
            <figure className="p-5 relative w-full h-64">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
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

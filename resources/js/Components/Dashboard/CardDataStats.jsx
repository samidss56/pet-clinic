const CardDataStats = ({
    children,
    title,
    total,
}) => {
    return (
        <div className="rounded-md border shadow-md border-stroke bg-white p-4 shadow-default">
            <div className="flex items-center justify-between">
                <div className="bg-light-red p-2.5 rounded-full w-fit">
                    {children}
                </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div>
                    <h4 className="text-title-md font-bold text-gray-800">
                        {total}
                    </h4>
                    <span className="text-sm font-medium">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default CardDataStats;

const OwnerLayout = ({ children }) => {
    return (
        <div className="p-0 sm:py-4">
            <div className="mx-auto sm:px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-7">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OwnerLayout;

const DetailCard = () => {
    return (
        <div className="p-6 border bg-white dark:bg-dark-gray border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-center rounded-lg  bg-gray-100 dark:bg-light-gray mb-4 p-3 shadow-md">
                <h3 className="text-xl text-black dark:text-white font-semibold">
                    Detail ID No. 80
                </h3>
                <div className="badge badge-outline bg-green-500 p-3 text-white font-semibold">
                    finished
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {/* Pet Data */}
                <div className="flex gap-4">
                    <div className="w-1/3">
                        <img
                            className="rounded-lg"
                            src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                            alt="Pet Image"
                        />
                    </div>
                    <div className="w-2/3 flex flex-row justify-between">
                        <div className="flex gap-5 justify-between w-full">
                            <div className="flex flex-col gap-7  p-5 ">
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Pet Name
                                    </p>
                                    <p className="text-black dark:text-white font-medium">
                                        Puki
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Pet Type
                                    </p>
                                    <p className="text-black dark:text-white font-medium">
                                        Cat
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-7 p-5">
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Pet Gender
                                    </p>
                                    <p className="text-black dark:text-white font-medium">
                                        Male
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Pet Color
                                    </p>
                                    <p className="text-black dark:text-white font-medium">
                                        Black
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg p-4 bg-gray-100 dark:bg-light-gray shadow-md">
                                <div className="flex flex-col gap-7">
                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            Doctor Name
                                        </p>
                                        <p className="text-black dark:text-white font-medium">
                                            Dr. Wahed Sulistiono
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            Doctor ID
                                        </p>
                                        <p className="text-black dark:text-white font-medium">
                                            12
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desc,  */}
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-gray-400 text-sm">
                            Appointment Description
                        </p>
                        <p className="text-black dark:text-white font-medium">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quia quasi illum perferendis voluptas!
                            Accusantium tempore aliquam cum obcaecati officiis
                            quis?
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="text-gray-400 text-sm font-light w-1/3">
                                Appointment ID
                            </span>
                            <span className="text-black dark:text-white font-medium w-2/3">
                                : 102
                            </span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 text-sm font-light w-1/3">
                                Appointment Date
                            </span>
                            <span className="text-black dark:text-white font-medium w-2/3">
                                : 27-02-2024
                            </span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 text-sm font-light w-1/3">
                                Weight
                            </span>
                            <span className="text-black dark:text-white font-medium w-2/3">
                                : 3.5 Kg
                            </span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 text-sm font-light w-1/3">
                                Temperature
                            </span>
                            <span className="text-black dark:text-white font-medium w-2/3">
                                : 37 C
                            </span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 text-sm font-light w-1/3">
                                Advice
                            </span>
                            <span className="text-black dark:text-white font-medium w-2/3">
                                : Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;

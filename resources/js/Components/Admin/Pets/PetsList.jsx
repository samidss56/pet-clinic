const isPets = (pets) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Pet ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Owner ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Image
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Age
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Gender
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Pet Color
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pets.length > 0 &&
                        pets.map((pet) => (
                            <tr key={pet.id}>
                                <th className="text-black dark:text-white font-medium">
                                    {pet.id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {pet.owner_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={`${appUrl}/storage/${pet.image}`}
                                        alt="Pet Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {pet.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {`${pet.age} years`}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {pet.gender}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {pet.color}
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noPets = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-dark-gray">
                There is no pets data to Show.
            </h1>
        </div>
    );
};

const PetsList = ({ pets }) => {
    return !pets ? noPets() : isPets(pets);
};

export default PetsList;

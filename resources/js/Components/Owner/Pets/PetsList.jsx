import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

const isPets = (myPets) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <>
            {myPets.length > 0 &&
                myPets.map((pet) => (
                    <Link href={route("owner.pets.show", pet.id)} key={pet.id}>
                        <div
                            className="card w-full h-full bg-gray-100 dark:bg-dark-gray shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                            key={pet.id}
                        >
                            <figure className="p-5">
                                <img
                                    src={`${appUrl}/storage/${pet.image}`}
                                    alt="Pet Image"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="card-title text-gray-800 dark:text-white flex justify-between">
                                    {pet.name}
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="badge badge-secondary p-4">{`${pet.age} years`}</div>
                                        <div className="badge badge-outline p-4 text-gray-800 dark:text-gray-100 opacity-70">
                                            {pet.pet_type.type}
                                        </div>
                                    </div>
                                </h2>
                                <p className="text-gray-800 dark:text-gray-100">
                                    {pet.color}
                                </p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline p-4 text-gray-800 dark:text-gray-100 opacity-70">
                                        {pet.gender}
                                    </div>
                                    <PrimaryButton>
                                        Make Appointment
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </>
    );
};

const noPets = () => {
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-slate-100">
            There is no pets data to Show.
        </h1>
    </div>;
};

const PetsList = ({ myPets }) => {
    console.log(myPets);
    return !myPets ? noPets() : isPets(myPets);
};

export default PetsList;

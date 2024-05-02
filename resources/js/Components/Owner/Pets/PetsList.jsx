import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

const isPets = () => {
    return (
        <div
            className="card w-full h-full bg-gray-100 dark:bg-dark-gray shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            // key={car.id}
        >
            <figure className="p-5">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top"
                    alt="Pet Image"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-gray-800 dark:text-white flex justify-between">
                    Jojo
                    <div className="badge badge-secondary">9 years</div>
                </h2>
                <p className="text-gray-800 dark:text-gray-100">Orange</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline p-4 text-gray-800 dark:text-gray-100 opacity-70">
                        Male
                    </div>
                    <PrimaryButton>Make Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

const noPets = () => {
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-slate-100">
            There is no pets data to Show.
        </h1>
    </div>;
};

const PetsList = () => {
    return isPets();
};

export default PetsList;

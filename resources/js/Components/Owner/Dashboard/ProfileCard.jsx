import { Link } from "@inertiajs/react";

const ProfileCard = ({ user }) => {
    return (
        <div className="sm:rounded-lg bg-white w-full shadow-md md:sticky md:top-24">
            <div className="relative w-full h-48 border-b-[1px]">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-light-red sm:rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center bg-none p-4 rounded-lg">
                        <img
                            src="https://i.pravatar.cc/300"
                            alt="Profile Picture"
                            className="rounded-full w-20"
                        />
                        <p className="mt-3 text-center font-semibold text-gray-700">{`Welcome, ${user.name} !`}</p>
                        <Link
                            className="text-sm text-center hover:underline"
                            href={route("profile.edit")}
                        >
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 w-full border-b-[1px] hover:bg-light-red transition-color duration-300 cursor-pointer">
                <p className="text-start text-sm text-gray-500">10 Pets</p>
            </div>
            <div className="p-4 w-full border-b-[1px] hover:bg-light-red transition-color duration-300 cursor-pointer">
                <p className="text-start text-sm text-gray-500">
                    {user.user.name}
                </p>
                <p className="text-start text-sm text-gray-500">
                    {user.user.email}
                </p>
                <p className="text-start text-sm text-gray-500">08123456789</p>
                <p className="text-start text-sm text-gray-500">Surabaya</p>
            </div>
            <div className="w-full p-2 bg-primary-red hover:bg-secondary-red transition-color duration-300 sm:rounded-b-lg flex justify-center">
                <Link
                    href={route("owner.pets")}
                    className="text-center text-white text-sm flex gap-1 items-center"
                >
                    Make Appointment
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-white"
                    >
                        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;

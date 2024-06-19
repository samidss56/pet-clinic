import PrimaryButton from "@/Components/PrimaryButton";
import image from "../../../../../public/CTA.png";
import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "@/Components/Icons/Index";

const CTA = ({ user }) => {
    return (
        <div className="w-full h-full bg-white">
            <div className="relative isolate overflow-hidden shadow-md sm:rounded-lg lg:flex lg:gap-x-20 p-8 md:border-[1.5px] md:border-primary-red">
                <div className=" text-center lg:mx-0 lg:flex-auto space-y-4  lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                        Welcome, {user}
                    </h2>
                    <p className="mt-2 pt-2 text-lg leading-8 text-gray-400">
                        Lets's Check your Pet Health with us.
                    </p>
                    <div className="mt-4 pt-2 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link href={route("owner.pets")}>
                            <PrimaryButton>
                                Make Appointment
                                <ArrowRightIcon color={"fill-black"} />
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <img
                        className="absolute right-[-80px] top-[-70px] max-w-none"
                        src={image}
                        alt="App screenshot"
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default CTA;

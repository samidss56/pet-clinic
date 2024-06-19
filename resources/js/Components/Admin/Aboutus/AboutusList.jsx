import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
// import ModalDeleteArticle from "./ModalDeleteArticle";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";

const isAboutus = (aboutus) => {
    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 py-1">
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold">Title: {aboutus.title}</h2>
                    <p>Content: {aboutus.content}</p>
                </div>
                <div className="border rounded-lg p-4">
                    <img className='w-60' src={`${appUrl}/storage/${aboutus.image}`} alt="" />
                </div>
            </div>
        </div>
    );
};

const noAboutus = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-700">
                There is no aboutus data to Show.
            </h1>
        </div>
    );
};

const AboutusList = ({ aboutus }) => {
    return !aboutus ? noAboutus() : isAboutus(aboutus);
};

export default AboutusList;

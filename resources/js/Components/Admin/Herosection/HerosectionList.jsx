import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
// import ModalDeleteArticle from "./ModalDeleteArticle";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";

const isHerosection = (herosection) => {
    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 py-1">
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold">Title: {herosection.title}</h2>
                    <p>Content: {herosection.content}</p>
                </div>
                <div className="border rounded-lg p-4">
                    <img className='w-60' src={`${appUrl}/storage/${herosection.image}`} alt="" />
                </div>
            </div>
        </div>
    );
};

const noHerosection = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no herosection data to Show.
            </h1>
        </div>
    );
};

const HerosectionList = ({ Herosection }) => {
    return !Herosection ? noHerosection() : isHerosection(Herosection);
};

export default HerosectionList;

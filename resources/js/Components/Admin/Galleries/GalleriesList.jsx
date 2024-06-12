import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteGallery from "./ModalDeleteGallery";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";

const isGalleries = (galleries) => {
    const [showModalDeleteGallery, setShowModalDeleteGallery] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeleteGallery = (galleries) => {
        setShowModalDeleteGallery(true);
        setSelectedGallery(galleries);
    };

    const closeModalDeleteGallery = () => {
        setShowModalDeleteGallery(false);
        setSelectedGallery(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Gallery ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Image
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {galleries.length > 0 &&
                        galleries.map((gallery) => (
                            <tr key={gallery.gallery_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {gallery.gallery_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={`${appUrl}/storage/${gallery.image}`}
                                        alt="Gallery Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "admin.galleries.edit",
                                                gallery.gallery_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteGallery(
                                                    gallery
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </DangerButton>
                                        <ModalDeleteGallery
                                            show={
                                                showModalDeleteGallery &&
                                                selectedGallery == gallery
                                            }
                                            onClose={closeModalDeleteGallery}
                                            gallery={selectedGallery}
                                        />
                                    </div>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noGalleries = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no galleries data to Show.
            </h1>
        </div>
    );
};

const GalleriesList = ({ galleries }) => {
    return !galleries ? noGalleries() : isGalleries(galleries);
};

export default GalleriesList;

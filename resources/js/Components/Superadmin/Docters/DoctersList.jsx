import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { formatCurr } from "@/Utils/FormatPrice";
import ModalDeleteDocter from "./ModalDeleteDocters";
import useSwal from "@/Components/Hooks/useSwal";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
const isProducts = (docters) => {
    const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeleteProduct = (product) => {
        setShowModalDeleteProduct(true);
        setSelectedProduct(product);
    };

    const closeModalDeleteProduct = () => {
        setShowModalDeleteProduct(false);
        setSelectedProduct(null);
    };

    const { ask } = useSwal();

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Docter ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Profile
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Email
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            No Telp
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Alamat
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {docters.length > 0 &&
                        docters.map((product) => (
                            <tr key={product.docter_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {product.docter_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={product.profile}
                                        alt="docter Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.name}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.email}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.no_telp}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.alamat}
                                </th>

                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.docters.edit",
                                                product.docter_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() => {
                                                ask({
                                                    url: route(
                                                        "superadmin.docters.delete",
                                                        product.docter_id
                                                    ),
                                                    message:
                                                        "Apakah Anda Yakin Ingin Detele Data !!",
                                                });
                                            }}
                                        >
                                            <DeleteIcon />
                                        </DangerButton>
                                        <ModalDeleteDocter
                                            show={
                                                showModalDeleteProduct &&
                                                selectedProduct == product
                                            }
                                            onClose={closeModalDeleteProduct}
                                            product={selectedProduct}
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

const noProducts = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no products data to Show.
            </h1>
        </div>
    );
};

const DoctersList = ({ docters }) => {
    return !docters ? noProducts() : isProducts(docters);
};

export default DoctersList;

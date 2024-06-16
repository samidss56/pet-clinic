import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteProduct from "./ModalDeleteProduct";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";
import useToastNotification from "@/Hooks/useToastNotification";

const isProducts = (products, notification) => {
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

    useToastNotification(notification);

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Product ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Image
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Name
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Description
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Price
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Stock
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 &&
                        products.map((product) => (
                            <tr key={product.product_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {product.product_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={`${appUrl}/storage/${product.image_product}`}
                                        alt="Pet Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.name_product}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.deskripsi_product}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {formatCurr(product.price_product)}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {product.stock_product}
                                </th>

                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "superadmin.products.edit",
                                                product.product_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteProduct(
                                                    product
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </DangerButton>
                                        <ModalDeleteProduct
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

const ProductsList = ({ products, notification }) => {
    return !products ? noProducts() : isProducts(products, notification);
};

export default ProductsList;

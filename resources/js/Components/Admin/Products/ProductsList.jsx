import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteProduct from "./ModalDeleteProduct";
import { formatCurr } from "@/Utils/FormatPrice";

const isProducts = (products) => {
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
                                                "admin.products.edit",
                                                product.product_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="22"
                                                    height="22"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteProduct(
                                                    product
                                                )
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="22"
                                                height="22"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line
                                                    x1="10"
                                                    x2="10"
                                                    y1="11"
                                                    y2="17"
                                                />
                                                <line
                                                    x1="14"
                                                    x2="14"
                                                    y1="11"
                                                    y2="17"
                                                />
                                            </svg>
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

const ProductsList = ({ products }) => {
    return !products ? noProducts() : isProducts(products);
};

export default ProductsList;

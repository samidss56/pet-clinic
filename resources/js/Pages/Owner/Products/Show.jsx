import DangerButton from "@/Components/DangerButton";
import { Paginator } from "@/Components/Paginator";
import ProductItem from "@/Components/Owner/Products/ProductItem";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { formatCurr } from "@/Utils/FormatPrice";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import toast from "react-hot-toast";

export default function Show({ auth, product }) {

    const onChart = () => {
        Inertia.post(route('cart.store', product.data), {},);
    };

    return (
        <Authenticated user={auth}>
            <Head title={product.data.name_product} />
            <div className="max-w-screen-lg mx-auto py-5 px-5">
                <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-full md:w-1/3">
                        <img className="w-full rounded-lg object-cover h-96" src={product.data.image_product} alt={product.data.name_product} />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                        <div className="mb-5">
                            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{product.data.name_product}</h1>
                            <p className="leading-relaxed text-gray-700 mb-4">{product.data.deskripsi_product}</p>
                            <div className="text-1xl font-bold text-gray-500 mb-4">Stok: {product.data.stock_product} || Berat: {product.data.weight / 100} gram</div>
                            <div className="text-2xl font-bold text-red-500 mb-4">{formatCurr(product.data.price_product)}</div>
                           
                        </div>
                        {!auth ? (
                            // <div className="text-center">
                                <DangerButton className="flex justify-center items-center">
                                    <Link href={route('login')} className="text-white">Login</Link>
                                </DangerButton>
                            // </div>
                        ) : (

                                <DangerButton onClick={onChart} className="flex justify-center items-center text-white">
                                    Add to Cart
                                </DangerButton>

                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

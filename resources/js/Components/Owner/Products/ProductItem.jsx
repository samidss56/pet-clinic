import { formatCurr } from "@/Utils/FormatPrice";
import { Link } from "@inertiajs/react";

const ProductItem = ({ product }) => {

    const truncate = (str, n) => {
        return str.length > n ? str.slice(0, n) + '...' : str;
    }

    return (
       <Link  href={`products/show/${product.slug}`}>
        <div className="card w-full lg:max-w-80 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer col-span-1 rounded-lg overflow-hidden">
            <figure className="p-5">
                <img src={product.image_product} alt={product.name_product} className="rounded-lg object-cover h-48 w-full" />
            </figure>
            <div className="card-body p-5 flex flex-col justify-between">
                <h2 className="card-title text-gray-800 text-lg font-bold mb-2">
                    {truncate(product.name_product, 20)}
                </h2>
                <div className="flex justify-between items-center mb-4">
                    <div className="badge border-primary-red text-primary-red bg-white p-2">
                        {`Stock ${product.stock_product}`}
                    </div>
                    <div className="text-yellow-500 flex items-center">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.2 3.1 1.6-6.2L1 7.6l6.3-.5L10 1l2.7 6.1 6.3.5-4.4 4.3 1.6 6.2L10 15z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.2 3.1 1.6-6.2L1 7.6l6.3-.5L10 1l2.7 6.1 6.3.5-4.4 4.3 1.6 6.2L10 15z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.2 3.1 1.6-6.2L1 7.6l6.3-.5L10 1l2.7 6.1 6.3.5-4.4 4.3 1.6 6.2L10 15z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.2 3.1 1.6-6.2L1 7.6l6.3-.5L10 1l2.7 6.1 6.3.5-4.4 4.3 1.6 6.2L10 15z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.2 3.1 1.6-6.2L1 7.6l6.3-.5L10 1l2.7 6.1 6.3.5-4.4 4.3 1.6 6.2L10 15z"/></svg>
                    </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                    {truncate(product.deskripsi_product, 50)}
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-4">
                    {formatCurr(product.price_product)}
                </p>
                {/* <button className="btn btn-primary mt-auto py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                </button> */}
            </div>
        </div>
       </Link>
    );
}

export default ProductItem;

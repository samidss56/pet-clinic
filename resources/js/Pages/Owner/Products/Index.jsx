import ProductItem from "@/Components/Owner/Products/ProductItem";
import { Paginator } from "@/Components/Paginator";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, product }) {
    const user = auth?.user?.name;
    return (
        <Authenticated user={user}>

               <div className="mx-5 mb-10">
               {product.data.length ?
                    <>
                        <div className="max-w-screen mx-5 py-5 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                                {product.data.map(product_view =>
                                    <ProductItem product={product_view} key={product_view.product_id} />
                                )}
                            </div>
                        </div>
                        <Paginator meta={product.meta} />
                    </> :
                    <>
                        <p>No Product</p>
                    </>
                }
               </div>

        </Authenticated>
    );
};

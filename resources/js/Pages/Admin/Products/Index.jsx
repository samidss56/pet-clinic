import ProductsList from "@/Components/Admin/Products/ProductsList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Products = ({ auth, title, products, flash }) => {
    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <AdminLayout>
                <Link href={route("admin.products.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Product
                    </PrimaryButton>
                </Link>
                <ProductsList
                    products={products.data}
                    notification={flash.message}
                />
                <Paginator meta={products.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Products;

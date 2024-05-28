import ProductsList from "@/Components/Superadmin/Products/ProductsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { CreateIcon } from "@/Components/Icons/Index";

const Products = ({ auth, title, products }) => {
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
                <Link href={route("superadmin.products.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Product
                    </PrimaryButton>
                </Link>
                <ProductsList products={products.data} />
                <Paginator meta={products.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Products;

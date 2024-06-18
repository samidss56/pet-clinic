import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

const UpdateProduct = ({ auth, title, product }) => {
    const { data, setData, errors } = useForm({
        name_product: product.name_product,
        image_product: product.image_product,
        price_product: product.price_product,
        deskripsi_product: product.deskripsi_product,
        stock_product: product.stock_product,
        weight: product.weight,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name_product", data.name_product);
        formData.append("deskripsi_product", data.deskripsi_product);
        formData.append("price_product", data.price_product);
        formData.append("image_product", data.image_product);
        formData.append("stock_product", data.stock_product);
        formData.append("weight", data.weight);

        router.post(
            `/superadmin/products/update/${product.product_id}`,
            formData,
            {
                _method: "put",
            }
        );
    };

    const appUrl = import.meta.env.VITE_APP_URL;
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
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <InputLabel htmlFor="name_product" value="Product Name" />
                    <TextInput
                        type="text"
                        id="name_product"
                        name="name_product"
                        className="block w-full"
                        placeholder="Product Name"
                        value={data.name_product}
                        onChange={(e) =>
                            setData("name_product", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.name_product}
                        className="mb-2"
                    />
                    <InputLabel htmlFor="image_product" value="Product Image" />
                    <div className="flex items center gap-4">
                        <img
                            className="w-20 rounded-lg"
                            src={`${appUrl}/storage/${product.image_product}`}
                            alt=""
                        />
                        <div className="w-full">
                            <TextInput
                                id="image_product"
                                type="file"
                                name="image_product"
                                className="block w-full file-input file-input-bordered mb-0"
                                placeholder="Product Image"
                                onChange={(e) =>
                                    setData("image_product", e.target.files[0])
                                }
                                required
                            />
                            <InputError
                                message={errors.image_product}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <InputLabel
                        htmlFor="deskripsi_product"
                        value="Product Description"
                    />
                    <TextInput
                        type="text"
                        id="deskripsi_product"
                        name="deskripsi_product"
                        className="block w-full"
                        placeholder="Product Description"
                        value={data.deskripsi_product}
                        onChange={(e) =>
                            setData("deskripsi_product", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.deskripsi_product}
                        className="mb-2"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel
                                htmlFor="price_product"
                                value="Product Price"
                            />
                            <TextInput
                                type="number"
                                id="price_product"
                                name="price_product"
                                className="block w-full"
                                placeholder="Product Price"
                                value={data.price_product}
                                onChange={(e) =>
                                    setData(
                                        "price_product",
                                        parseInt(e.target.value)
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.price_product}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="stock_product"
                                value="Product Stock"
                            />
                            <TextInput
                                type="number"
                                id="stock_product"
                                name="stock_product"
                                className="block w-full"
                                placeholder="Product Stock"
                                value={data.stock_product}
                                onChange={(e) =>
                                    setData(
                                        "stock_product",
                                        parseInt(e.target.value)
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.stock_product}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <InputLabel
                        htmlFor="weight"
                        value="Product Weight"
                    />
                    <span className="text-red-500 font-semibold text-sm">100 = 1 GRAM</span>
                    <TextInput
                        type="text"
                        id="weight"
                        name="weight"
                        className="block w-full"
                        placeholder="Product Weight"
                        value={data.weight}
                        onChange={(e) =>
                            setData(
                                "weight",
                                e.target.value
                            )
                        }
                        required
                    />
                    <InputError
                        message={errors.weight}
                        className="mb-2"
                    />
                    <div className="flex gap-3 mt-4">
                        <Link href={route("superadmin.products")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Products
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Update Product
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default UpdateProduct;

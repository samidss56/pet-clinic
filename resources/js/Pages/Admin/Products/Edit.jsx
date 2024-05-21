<<<<<<< HEAD
import { ArrowLeftIcon } from "@/Components/Icons/Index";
=======
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
<<<<<<< HEAD
import AdminLayout from "@/Layouts/AdminLayout";
=======
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

const UpdateProduct = ({ auth, title, product }) => {
    const { data, setData, errors } = useForm({
        name_product: product.name_product,
        image_product: product.image_product,
        price_product: product.price_product,
        deskripsi_product: product.deskripsi_product,
        stock_product: product.stock_product,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name_product", data.name_product);
        formData.append("deskripsi_product", data.deskripsi_product);
        formData.append("price_product", data.price_product);
        formData.append("image_product", data.image_product);
        formData.append("stock_product", data.stock_product);

        router.post(`/admin/products/update/${product.product_id}`, formData, {
            _method: "put",
        });
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
<<<<<<< HEAD
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
                    <div className="flex gap-3 mt-4">
                        <Link href={route("admin.products")}>
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
=======
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                    >
                        <InputLabel
                            htmlFor="name_product"
                            value="Product Name"
                        />
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
                        <InputLabel
                            htmlFor="image_product"
                            value="Product Image"
                        />
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
                                        setData(
                                            "image_product",
                                            e.target.files[0]
                                        )
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
                        <div className="flex gap-3 mt-4">
                            <Link href={route("admin.products")}>
                                <SecondaryButton className=" gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="main-grid-item-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <line x1="19" x2="5" y1="12" y2="12" />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                    Back To Products
                                </SecondaryButton>
                            </Link>
                            <PrimaryButton type="submit" onClick={handleSubmit}>
                                Update Product
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
        </Authenticated>
    );
};

export default UpdateProduct;

import { ArrowLeftIcon, CloseIcon, CreateIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import AppDocter from "@/Layouts/AppDocter";
import { formatCurr } from "@/Utils/FormatPrice";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Edit = ({ docter, auth, title, appointmen, services, products }) => {
    const { data, setData, errors } = useForm({
        appointmen_id: appointmen.data.appointmen_id,
        pet_id: appointmen.data.pet_id,
        docter_id: appointmen.data.docter_id,
        status: appointmen.data.status,
        date_appointmens: appointmen.data.date_appointmens,
        jadwal: appointmen.data.jadwal,
        description: appointmen.data.description,
        name_docter: appointmen.data.docter.name,
        name_hewan: appointmen.data.pet.name,
        weight: appointmen.data.weight || "",
        temperature: appointmen.data.temperature || "",
        advice: appointmen.data.advice || "",
        serviceList: [{ service_id: "", price_service: "" }],
        productList: [
            {
                product_id: "",
                name_product: "",
                price_product: products[0].price_product,
                stock_product: products[0].stock_product,
                qty: 0,
                total_price: 0,
            },
        ],
    });

    //   service
    const handleServiceChange = (index, e) => {
        const { name, value } = e.target;
        const newServiceList = [...data.serviceList];
        const serviceOption = services.find(
            (service) => service.service_id === value
        );

        newServiceList[index] = {
            ...newServiceList[index],
            [name]: value,
            ...(name === "service_id" && {
                price_service: serviceOption ? serviceOption.price_service : "",
            }),
        };

        setData({ ...data, serviceList: newServiceList });
    };

    const handleAddService = () => {
        setData({
            ...data,
            serviceList: [
                ...data.serviceList,
                { service_id: "", price_service: "" },
            ],
        });
    };

    const handleRemoveService = (index) => {
        const newServiceList = data.serviceList.filter((_, i) => i !== index);
        setData({ ...data, serviceList: newServiceList });
    };

    //product
    const handleProductChange = (index, e) => {
        const { name, value } = e.target;
        const newProductList = [...data.productList];
        const productOption = products.find(
            (product) => product.product_id === value
        );

        newProductList[index] = {
            ...newProductList[index],
            [name]: value,
            ...(name === "product_id" && {
                price_product: productOption ? productOption.price_product : "",
                name_product: productOption ? productOption.name_product : "",
            }),
        };

        setData({ ...data, productList: newProductList });
    };

    const handleQtyChange = (index, e) => {
        const { value } = e.target;
        const newProductList = [...data.productList];
        const product = newProductList[index];
        const price = parseFloat(product.price_product);
        const qty = parseInt(value);
        const total_price = price * qty || 0;
        const stock = parseInt(product.stock_product);

        if (qty > stock) {
            alert("Stok Produk Tidak Cukup!");
            return;
        }

        newProductList[index] = {
            ...product,
            qty: qty,
            total_price: total_price,
        };

        setData({ ...data, productList: newProductList });
    };

    const handleAddProduct = () => {
        setData({
            ...data,
            productList: [
                ...data.productList,
                {
                    product_id: "",
                    name_product: "",
                    price_product: products[0].price_product,
                    stock_product: products[0].stock_product,
                },
            ],
        });
    };

    const handleRemoveProduct = (index) => {
        const newProductList = data.productList.filter((_, i) => i !== index);
        setData({ ...data, productList: newProductList });
    };

    //subtotal
    const [subtotal, setSubtotal] = useState(0);

    const calculateSubtotal = () => {
        let subtotalService = 0;
        let subtotalProduct = 0;
        data.serviceList.forEach((service) => {
            subtotalService += parseFloat(service.price_service) || 0;
        });
        data.productList.forEach((product) => {
            subtotalProduct += product.total_price || 0;
        });
        const total = subtotalService + subtotalProduct;
        setSubtotal(isNaN(total) ? 0 : total);
    };

    useEffect(() => {
        calculateSubtotal();
    }, [data.productList, data.serviceList]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.serviceList.length < 1) {
            alert(
                "Tambah Form Service +1 Dan Kosongkan Value Jika Tidak Ada Data!!"
            );
            return;
        }

        if (data.productList.length < 1) {
            alert(
                "Tambah Form Product +1 Dan Kosongkan Value Jika Tidak Ada Data!!"
            );
            return;
        }

        const formData = new FormData();
        formData.append("appointmen_id", data.appointmen_id);
        formData.append("pet_id", data.pet_id || "");
        formData.append("docter_id", data.docter_id || "");
        formData.append("status", data.status || "");
        formData.append("jadwal", data.jadwal || "");
        formData.append("date_appointmens", data.date_appointmens || "");
        formData.append("description", data.description || "");
        formData.append("weight", data.weight || "");
        formData.append("temperature", data.temperature || "");
        formData.append("advice", data.advice || "");

        data.serviceList.forEach((service, index) => {
            formData.append(
                `services[${index}][service_id]`,
                service.service_id || ""
            );
            formData.append(
                `services[${index}][price_service]`,
                service.price_service || ""
            );
        });

        data.productList.forEach((product, index) => {
            formData.append(
                `products[${index}][product_id]`,
                product.product_id || ""
            );
            formData.append(
                `products[${index}][name_product]`,
                product.name_product || ""
            );
            formData.append(
                `products[${index}][price_product]`,
                product.price_product || ""
            );
            formData.append(`products[${index}][qty]`, product.qty || "");
        });

        formData.append("subtotal", subtotal);

        router.post(
            `/docter/appointmen/updatetrans/${appointmen.data.appointmen_id}`,
            formData,
            {
                _method: "put",
            }
        );
    };

    return (
        <AppDocter
            user={docter}
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
                    <TextInput
                        type="hidden"
                        id="appointmen_id"
                        name="appointmen_id"
                        className="block w-full"
                        value={data.appointmen_id}
                        onChange={(e) =>
                            setData("appointmen_id", e.target.value)
                        }
                    />

                    <TextInput
                        type="hidden"
                        id="pet_id"
                        name="pet_id"
                        className="block w-full"
                        value={data.pet_id}
                        onChange={(e) => setData("pet_id", e.target.value)}
                    />

                    <TextInput
                        type="hidden"
                        id="docter_id"
                        name="docter_id"
                        className="block w-full"
                        value={data.docter_id}
                        onChange={(e) => setData("docter_id", e.target.value)}
                    />

                    <TextInput
                        type="hidden"
                        id="jadwal"
                        name="jadwal"
                        className="block w-full"
                        value={data.jadwal}
                        onChange={(e) => setData("jadwal", e.target.value)}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="Nama Docter" />
                            <TextInput
                                type="text"
                                className="block w-full"
                                placeholder="Docter Name"
                                value={data.name_docter}
                                readOnly
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="Nama Hewan" />
                            <TextInput
                                type="text"
                                className="block w-full"
                                placeholder="Pet Name"
                                value={data.name_hewan}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel
                                htmlFor="date_appointmens"
                                value="Date Appointmens"
                            />
                            <TextInput
                                type="date"
                                id="date_appointmens"
                                name="date_appointmens"
                                className="block w-full"
                                placeholder="Date"
                                value={data.date_appointmens}
                                onChange={(e) =>
                                    setData("date_appointmens", e.target.value)
                                }
                                readOnly
                            />
                        </div>
                        <div></div>
                    </div>

                    <InputLabel htmlFor="description" value="description" />
                    <TextInput
                        type="text"
                        id="description"
                        name="description"
                        className="block w-full"
                        placeholder="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        readOnly
                    />
                    <InputError message={errors.description} className="mb-2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="status" value="status" />
                            <select
                                id="status"
                                name="status"
                                className="block w-full border-gray-300 rounded-md shadow-sm"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="rejected">DiTolak</option>
                                <option value="accepted">Disetujui</option>
                                <option value="handled">Diproses</option>
                                <option value="finished">Selesai</option>
                            </select>
                            <InputError
                                message={errors.status}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="weight" value="Weight" />
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    className="block w-full"
                                    placeholder="weight"
                                    value={data.weight}
                                    onChange={(e) =>
                                        setData("weight", e.target.value)
                                    }
                                    required
                                />
                                <p className="text-gray-800 font-semibold text-lg mb-2">
                                    kg
                                </p>
                            </div>
                            <InputError
                                message={errors.weight}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel
                                htmlFor="temperature"
                                value="Temperature"
                            />
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="text"
                                    id="temperature"
                                    name="temperature"
                                    className="block w-full"
                                    placeholder="temperature"
                                    value={data.temperature}
                                    onChange={(e) =>
                                        setData("temperature", e.target.value)
                                    }
                                    required
                                />
                                <p className="text-gray-800 font-semibold text-lg mb-2">
                                    °C
                                </p>
                            </div>
                            <InputError
                                message={errors.temperature}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="advice" value="Advice" />
                            <TextInput
                                type="text"
                                id="advice"
                                name="advice"
                                className="block w-full"
                                placeholder="advice"
                                value={data.advice}
                                onChange={(e) =>
                                    setData("advice", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.advice}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    {appointmen.data.status === "accepted" ? (
                        <>
                            <h1 className="text-2xl font-semibold my-5">
                                Transaction
                            </h1>
                            <div>
                                <span className="mt-2 inline-block w-full px-4 py-2 text-sm font-semibold leading-none text-white bg-blue-400 rounded-md mb-2">
                                    Services
                                </span>

                                {data.serviceList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 flex items-center gap-2"
                                    >
                                        <select
                                            id={`service_id_${index}`}
                                            name="service_id"
                                            className="block w-full border-gray-300 rounded-md shadow-sm"
                                            value={service.service_id}
                                            onChange={(e) =>
                                                handleServiceChange(index, e)
                                            }
                                            required
                                        >
                                            <option value="">
                                                Select Service
                                            </option>
                                            {services.map((serviceOption) => (
                                                <option
                                                    key={
                                                        serviceOption.service_id
                                                    }
                                                    value={
                                                        serviceOption.service_id
                                                    }
                                                >
                                                    {serviceOption.name_service}{" "}
                                                    -{" "}
                                                    {
                                                        serviceOption.price_service
                                                    }
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.service_id}
                                            className="mb-2"
                                        />

                                        <TextInput
                                            type="text"
                                            id={`price_service_${index}`}
                                            name="price_service"
                                            className="block w-full"
                                            placeholder="Price"
                                            value={service.price_service}
                                            readOnly
                                        />
                                        <InputError
                                            message={errors.price_service}
                                            className="mb-2"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveService(index)
                                            }
                                            className="text-red-500"
                                        >
                                            <CloseIcon />
                                        </button>
                                    </div>
                                ))}

                                <div className="flex justify-end">
                                    <SecondaryButton
                                        type="button"
                                        onClick={handleAddService}
                                        className="flex items-center gap-2"
                                    >
                                        <CreateIcon />
                                        Add Service
                                    </SecondaryButton>
                                </div>
                            </div>

                            <div>
                                <span className="mt-5 inline-block w-full px-4 py-2 text-sm font-semibold leading-none text-white bg-red-400 rounded-md mb-2">
                                    Products
                                </span>
                                {data.productList.map((product, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 flex items-center gap-2"
                                    >
                                        <select
                                            id={`product_id_${index}`}
                                            name="product_id"
                                            className="block w-full border-gray-300 rounded-md shadow-sm"
                                            value={product.product_id}
                                            onChange={(e) =>
                                                handleProductChange(index, e)
                                            }
                                            required
                                        >
                                            <option value="">
                                                Select Product
                                            </option>
                                            {products.map((productOption) => (
                                                <option
                                                    key={
                                                        productOption.product_id
                                                    }
                                                    value={
                                                        productOption.product_id
                                                    }
                                                    data-price={
                                                        productOption.price_product
                                                    }
                                                >
                                                    {productOption.name_product}{" "}
                                                    -{" "}
                                                    {
                                                        productOption.price_product
                                                    }
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.product_id}
                                            className="mb-2"
                                        />

                                        <TextInput
                                            type="number"
                                            id={`qty_${index}`}
                                            name="qty"
                                            className="block w-full"
                                            placeholder="Qty"
                                            value={product.qty}
                                            onChange={(e) =>
                                                handleQtyChange(index, e)
                                            }
                                        />
                                        <InputError
                                            message={errors.qty}
                                            className="mb-2"
                                        />

                                        <TextInput
                                            type="text"
                                            id={`total_price_${index}`}
                                            name="total_price"
                                            className="block w-full"
                                            placeholder="Total Price"
                                            value={product.total_price}
                                            readOnly
                                        />
                                        <InputError
                                            message={errors.total_price}
                                            className="mb-2"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveProduct(index)
                                            }
                                            className="text-red-500"
                                        >
                                            <CloseIcon />
                                        </button>
                                    </div>
                                ))}

                                <div className="flex justify-end">
                                    <SecondaryButton
                                        type="button"
                                        onClick={handleAddProduct}
                                        className="flex items-center gap-2"
                                    >
                                        <CreateIcon />
                                        Add Product
                                    </SecondaryButton>
                                </div>
                            </div>
                            <div>
                                <div className="mt-5 inline-block w-full px-4 py-2 text-sm font-semibold leading-none text-white bg-red-400 rounded-md mb-2">
                                    Total
                                </div>

                                <div className="mt-5">
                                    <h1 className="text-xl font-semibold mb-2">
                                        Subtotal
                                    </h1>
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg">
                                            Subtotal Transaction:
                                        </div>
                                        <div className="text-lg">
                                            {formatCurr(subtotal)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}

                    <div className="flex gap-3 mt-4">
                        <Link href={route("docter.appointmen")}>
                            <SecondaryButton className="gap-2">
                                <ArrowLeftIcon />
                                Back To Appoitments
                            </SecondaryButton>
                        </Link>
                        {appointmen.data.status === "finished" ||
                        appointmen.data.status == "handled" ? null : (
                            <PrimaryButton type="submit" onClick={handleSubmit}>
                                Update Appoitments
                            </PrimaryButton>
                        )}
                    </div>
                </form>
            </AdminLayout>
        </AppDocter>
    );
};

export default Edit;

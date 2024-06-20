import ButtonLink from "@/Components/ButtonLink";
import Dropdown from "@/Components/Dropdown";
import { ArrowLeftIcon, CloseIcon, CreateIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { formatCurr } from "@/Utils/FormatPrice";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Edit = ({
    auth,
    title,
    transaction,
    transactionDetails,
    services,
    products,
    appointment,
    owner,
}) => {
    const { data, setData, errors } = useForm({
        appointmen_id: transaction.appointmen_id,
        invoice: transaction.invoice,
        date_transaction: transaction.date_transaction,
        status_payment: transaction.status_payment,
        name_hewan: appointment.name,
        name_owner: owner.name,
        user_id: auth.user.user_id,

        serviceList: transactionDetails
            .filter((detail) => detail.service_id)
            .map((detail) => ({
                service_id: detail.service_id,
                price_service: detail.harga_service,
            })),

        productList: transactionDetails
            .filter((detail) => detail.product_id)
            .map((detail) => ({
                product_id: detail.product_id,
                price_product: detail.harga_product,
                qty: detail.quantity,
                total_price: detail.harga_product * detail.quantity,
                stock_product:
                    products.find(
                        (product) => product.product_id === detail.product_id
                    )?.stock_product || 0,
            })),
    });
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
                stock_product: productOption ? productOption.stock_product : 0,
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
                    price_product: "",
                    qty: 0,
                    total_price: 0,
                },
            ],
        });
    };

    const handleRemoveProduct = (index) => {
        const newProductList = data.productList.filter((_, i) => i !== index);
        setData({ ...data, productList: newProductList });
    };

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

    const handleSubmit = (e, paymentType, Bank) => {
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
        formData.append("invoice", data.invoice);
        formData.append("date_transaction", data.date_transaction);
        formData.append("status_payment", data.status_payment);
        formData.append("user_id", data.user_id);
        formData.append("payment_type", paymentType);
        formData.append("bank", Bank || "");

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
                `products[${index}][price_product]`,
                product.price_product || ""
            );
            formData.append(`products[${index}][qty]`, product.qty || "");
        });

        formData.append("subtotal", subtotal);

        router.post(
            `/admin/transaction/updatetrans/${transaction.invoice}`,
            formData,
            {
                _method: "put",
            }
        );
    };

    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <AdminLayout>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <h1 className="text-2xl font-semibold my-5">
                        Detail Pelanggan
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel
                                htmlFor="name_owner"
                                value="Nama Owner"
                            />
                            <TextInput
                                type="text"
                                className="block w-full"
                                placeholder="name_owner"
                                value={data.name_owner}
                                onChange={(e) =>
                                    setData("name_owner", e.target.value)
                                }
                                readOnly
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="name_hewan" value="Nama Pet" />
                            <TextInput
                                type="text"
                                className="block w-full"
                                placeholder="name_hewan"
                                value={data.name_hewan}
                                onChange={(e) =>
                                    setData("name_hewan", e.target.value)
                                }
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                        <div>
                            <InputLabel htmlFor="invoice" value="Invoice" />
                            <TextInput
                                type="text"
                                id="invoice"
                                name="invoice"
                                className="block w-full"
                                placeholder="invoice"
                                value={data.invoice}
                                onChange={(e) =>
                                    setData("invoice", e.target.value)
                                }
                                readOnly
                            />
                            <InputError
                                message={errors.invoice}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="date_transaction"
                                value="Date Transaction"
                            />
                            <TextInput
                                type="text"
                                id="date_transaction"
                                name="date_transaction"
                                className="block w-full"
                                placeholder="date_transaction"
                                value={data.date_transaction}
                                onChange={(e) =>
                                    setData("date_transaction", e.target.value)
                                }
                                readOnly
                            />
                            <InputError
                                message={errors.date_transaction}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold my-5">Transaction</h1>
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
                                    <option value="">Select Service</option>
                                    {services.map((serviceOption) => (
                                        <option
                                            key={serviceOption.service_id}
                                            value={serviceOption.service_id}
                                        >
                                            {serviceOption.name_service} -{" "}
                                            {serviceOption.price_service}
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
                                    onClick={() => handleRemoveService(index)}
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
                                    <option value="">Select Product</option>
                                    {products.map((productOption) => (
                                        <option
                                            key={productOption.product_id}
                                            value={productOption.product_id}
                                            data-price={
                                                productOption.price_product
                                            }
                                        >
                                            {productOption.name_product} -{" "}
                                            {productOption.price_product}
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
                                    onChange={(e) => handleQtyChange(index, e)}
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
                                    onClick={() => handleRemoveProduct(index)}
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

                    <div className="flex gap-3 mt-4 items-center justify-between">
                        <Link href={route("admin.transaction")}>
                            <SecondaryButton className="gap-2">
                                <ArrowLeftIcon />
                                Back To Transaction
                            </SecondaryButton>
                        </Link>
                        <ButtonLink label="Pilih Metode Pembayaran">
                            <Dropdown.Link
                                onClick={(e) => handleSubmit(e, "tunai")}
                            >
                                Tunai
                            </Dropdown.Link>
                            <Dropdown.Divider />
                            {/* <Dropdown.Link
                                onClick={(e) => handleSubmit(e, "gopay")}
                            >
                                Gopay
                            </Dropdown.Link>
                            <Dropdown.Link
                                onClick={(e) =>
                                    handleSubmit(e, "bank_transfer", "bca")
                                }
                            >
                                BCA VA
                            </Dropdown.Link>
                            <Dropdown.Link
                                onClick={(e) =>
                                    handleSubmit(e, "bank_transfer", "bni")
                                }
                            >
                                BNI VA
                            </Dropdown.Link> */}
                        </ButtonLink>
                        {/* <PrimaryButton type="submit" onClick={handleSubmit}>
                Update Transaction
              </PrimaryButton> */}
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default Edit;

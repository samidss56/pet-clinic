import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/inertia-react";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth, title, whyUs }) => {
    const parsedListItems = Array.isArray(whyUs.list_items)
        ? whyUs.list_items
        : JSON.parse(whyUs.list_items || "[]");

    const { data, setData, post, errors } = useForm({
        title: whyUs.title,
        description: whyUs.description,
        list_items: parsedListItems,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("list_items", JSON.stringify(data.list_items)); // Convert list_items array to JSON string
        if (data.image) {
            formData.append("image", data.image);
        }

        post(`/admin/whyus/update`, formData, {
            _method: "put",
        });
    };

    const handleListItemChange = (e, index) => {
        const newListItems = [...data.list_items];
        newListItems[index] = e.target.value;
        setData("list_items", newListItems);
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
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        type="text"
                        id="title"
                        name="title"
                        className="block w-full"
                        placeholder="Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    <InputError message={errors.title} className="mb-2" />

                    <div className="flex items center gap-4">
                        <img
                            className="w-20 rounded-lg"
                            src={`${appUrl}/storage/${whyUs.image}`}
                            alt=""
                        />
                        <div className="w-full">
                            <InputLabel htmlFor="image" value="Image" />
                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                className="block w-full file-input file-input-bordered mb-0"
                                placeholder="Image"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.image}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <InputLabel htmlFor="description" value="Description" />
                    <TextArea
                        type="text"
                        id="description"
                        name="description"
                        className="block w-full text-gray-800"
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                    <InputError message={errors.description} className="mb-2" />

                    <InputLabel htmlFor="list_items" value="List Items" />
                    <div className="flex gap-2 flex-wrap">
                        {data.list_items.map((item, index) => (
                            <TextInput
                                key={index}
                                type="text"
                                name={`list_item_${index}`}
                                className="block w-full mb-2"
                                value={item}
                                onChange={(e) => handleListItemChange(e, index)}
                            />
                        ))}
                    </div>
                    <InputError message={errors.list_items} className="mb-2" />

                    <div className="flex gap-3 mt-4">
                        <Link href={route("admin.whyus.index")}>
                            <SecondaryButton className="gap-2">
                                <ArrowLeftIcon />
                                Back To Why Us
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit">
                            Update Why Us
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default Edit;

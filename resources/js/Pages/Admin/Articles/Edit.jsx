import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

const UpdateArticle = ({ auth, title, article }) => {
    const { data, setData, errors } = useForm({
        title: article.title,
        content: article.content,
        image: article.image,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("image", data.image);

        router.post(`/admin/articles/update/${article.article_id}`, formData, {
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
            <AdminLayout>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <InputLabel htmlFor="title" value="Article Title" />
                    <TextInput
                        type="text"
                        id="title"
                        name="title"
                        className="block w-full"
                        placeholder="Article Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    <InputError message={errors.title} className="mb-2" />
                    <InputLabel htmlFor="title" value="Article Title" />
                    <div className="flex items center gap-4">
                        <img
                            className="w-20 rounded-lg"
                            src={`${appUrl}/storage/${article.image}`}
                            alt=""
                        />
                        <div className="w-full">
                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                className="block w-full file-input file-input-bordered mb-0"
                                placeholder="Article Image"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                required
                            />
                            <InputError
                                message={errors.image}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <InputLabel htmlFor="content" value="Article Content" />
                    <TextInput
                        type="text"
                        id="content"
                        name="content"
                        className="block w-full"
                        placeholder="Article Content"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        required
                    />
                    <InputError message={errors.content} className="mb-2" />
                    <div className="flex gap-3 mt-4">
                        <Link href={route("admin.articles")}>
                            <SecondaryButton className=" gap-2">
                                <ArrowLeftIcon />
                                Back To Articles
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Update Article
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default UpdateArticle;

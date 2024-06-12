import { ArrowLeftIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const CreateArticle = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        author_name: auth.user.name,
        title: "",
        content: "",
        image: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("image", data.image);

        post("/admin/articles/create", formData);
    };
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
                    <InputLabel htmlFor="author_name" value="Author Name" />
                    <TextInput
                        id="author_name"
                        type="text"
                        className="block w-full border-gray-300 rounded-md shadow-sm"
                        value={auth.user.name}
                        readOnly
                    />
                    <InputError message={errors.author_name} className="mt-2" />
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
                    <InputLabel htmlFor="image" value="Article Image" />
                    <TextInput
                        id="image"
                        type="file"
                        name="image"
                        // value={data.image}
                        className="block w-full file-input file-input-bordered mb-0"
                        placeholder="Article Image"
                        onChange={(e) => setData("image", e.target.files[0])}
                        required
                    />
                    <InputError message={errors.image} className="mb-2" />
                    <InputLabel htmlFor="content" value="Article Content" />
                    <TextArea
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
                            Create Article
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default CreateArticle;

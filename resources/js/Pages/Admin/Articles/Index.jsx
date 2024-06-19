import ArticlesList from "@/Components/Admin/Articles/ArticlesList";
import { CreateIcon } from "@/Components/Icons/Index";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Articles = ({ auth, title, articles, flash }) => {
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
                <Link href={route("admin.articles.create")}>
                    <PrimaryButton className="mb-4 flex gap-2">
                        <CreateIcon />
                        Add Article
                    </PrimaryButton>
                </Link>
                <ArticlesList
                    articles={articles.data}
                    notification={flash.message}
                />
                <Paginator meta={articles.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Articles;

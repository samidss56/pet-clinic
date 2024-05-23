import { Paginator } from "@/Components/Paginator";
import ArticlesList from "@/Components/Superadmin/Articles/ArticlesList";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, title, articles }) => {
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
                <ArticlesList articles={articles.data} />
                <Paginator meta={articles.meta} />
            </AdminLayout>
        </Authenticated>
    );
};

export default Index;

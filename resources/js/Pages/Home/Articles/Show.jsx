import { ArrowLeftIcon, ArrowRightIcon } from "@/Components/Icons/Index";
import ArticleCards from "@/Components/LandingPage/ArticleCards";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Show = ({ auth, article, title, articles }) => {
    console.log(article);
    console.log(articles);
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <div className="p-4 space-y-8 bg-white">
                <div className="card card-compact w-full bg-white shadow-xl">
                    <figure>
                        <img
                            src={`${appUrl}/storage/${article.image}`}
                            alt="Shoes"
                            className="w-full object-cover h-96"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-gray-800 text-2xl">
                            {article.title}
                        </h2>
                        <p className="text-gray-700 text-[16px]">
                            {article.content}
                        </p>
                        <div className="card-actions">
                            <Link href={route("articles.index")}>
                                <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 flex items-center gap-2 rounded-full">
                                    <ArrowLeftIcon color="fill-primary-red" />
                                    Back to Articles
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Related Articles
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCards
                            key={article.article_id}
                            id={article.article_id}
                            title={article.title}
                            content={article.content}
                            image={`${appUrl}/storage/${article.image}`}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;

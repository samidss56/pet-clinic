import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "../Icons/Index";
import ArticleCards from "./ArticleCards";

const ArticlesSection = ({ articles }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <section className="px-2 sm:px-6 lg:px-8 py-8 my-10 space-y-4 bg-light-blue">
            <div className="text-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Articles
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat id similique ipsam nostrum ducimus, facilis
                        necessitatibus recusandae maxime.
                    </p>
                </div>
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
            <div className="flex justify-end">
                <Link href={route("articles.index")}>
                    <button className="bg-white hover:bg-gray-100 border-[1.5px] border-primary-red text-primary-red font-bold py-2 px-4 flex items-center rounded-full">
                        More Articles
                        <ArrowRightIcon color="fill-primary-red" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ArticlesSection;

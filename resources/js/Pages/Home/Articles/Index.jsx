import ArticleCards from "@/Components/LandingPage/ArticleCards";
import Navbar from "@/Components/LandingPage/Navbar";
import { Paginator } from "@/Components/Paginator";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, articles, title, docter }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <>
            <Navbar auth={auth} docter={docter} />
            <Head title={title} />
            <div className="bg-white w-full space-y-8 p-8">
                <div className="text-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Our Articles
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat id similique ipsam nostrum ducimus,
                            facilis necessitatibus recusandae maxime.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.data.map((article) => (
                        <ArticleCards
                            key={article.article_id}
                            id={article.article_id}
                            title={article.title}
                            content={article.content}
                            image={`${appUrl}/storage/${article.image}`}
                        />
                    ))}
                </div>
                <Paginator meta={articles.meta} />
            </div>
        </>
    );
};

export default Index;

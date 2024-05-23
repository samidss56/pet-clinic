import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteArticle from "./ModalDeleteArticle";
import { formatCurr } from "@/Utils/FormatPrice";

const isArticles = (articles) => {
    const [showModalDeleteArticle, setShowModalDeleteArticle] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const appUrl = import.meta.env.VITE_APP_URL;

    const handleShowModalDeleteArticle = (articles) => {
        setShowModalDeleteArticle(true);
        setSelectedArticle(articles);
    };

    const closeModalDeleteArticle = () => {
        setShowModalDeleteArticle(false);
        setSelectedArticle(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Article ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Image
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Title
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Content
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {articles.length > 0 &&
                        articles.map((article) => (
                            <tr key={article.article_id}>
                                <th className="text-black dark:text-white font-medium">
                                    {article.article_id}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    <img
                                        src={`${appUrl}/storage/${article.image}`}
                                        alt="Article Image"
                                        className="w-28 rounded-md"
                                    />
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {article.title}
                                </th>
                                <th className="text-black dark:text-white font-medium">
                                    {article.content}
                                </th>

                                <th>
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route(
                                                "admin.articles.edit",
                                                article.article_id
                                            )}
                                        >
                                            <PrimaryButton>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="22"
                                                    height="22"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteArticle(
                                                    article
                                                )
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="22"
                                                height="22"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line
                                                    x1="10"
                                                    x2="10"
                                                    y1="11"
                                                    y2="17"
                                                />
                                                <line
                                                    x1="14"
                                                    x2="14"
                                                    y1="11"
                                                    y2="17"
                                                />
                                            </svg>
                                        </DangerButton>
                                        <ModalDeleteArticle
                                            show={
                                                showModalDeleteArticle &&
                                                selectedArticle == article
                                            }
                                            onClose={closeModalDeleteArticle}
                                            article={selectedArticle}
                                        />
                                    </div>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const noArticles = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no articles data to Show.
            </h1>
        </div>
    );
};

const ArticlesList = ({ articles }) => {
    return !articles ? noArticles() : isArticles(articles);
};

export default ArticlesList;

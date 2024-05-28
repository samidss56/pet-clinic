import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ModalDeleteArticle from "./ModalDeleteArticle";
import { formatCurr } from "@/Utils/FormatPrice";
import { DeleteIcon, UpdateIcon } from "@/Components/Icons/Index";

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
                                                <UpdateIcon />
                                            </PrimaryButton>
                                        </Link>

                                        <DangerButton
                                            onClick={() =>
                                                handleShowModalDeleteArticle(
                                                    article
                                                )
                                            }
                                        >
                                            <DeleteIcon />
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

import React from "react";
import { AuthorIcon, ClockIcon } from "../Icons/Index";
import { Link } from "@inertiajs/react";

const ArticleCardsDetail = ({ key, image, title, content, slug }) => {
    const truncateContent = (content) => {
        const words = content.split(" ");
        return words.length > 10
            ? words.slice(0, 10).join(" ") + "..."
            : content;
    };
    return (
        <div key={key} className="card card-side bg-white shadow-xl">
            <div className="avatar">
                <div className="w-32 rounded-l-xl">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="card-body p-4">
                <h2 className="card-title text-[16px] text-gray-700">{title}</h2>
                <div className="card-actions justify-end">
                    {truncateContent(content)}
                    <Link
                        href={route("articles.show", slug)}
                        className="text-primary-red"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardsDetail;

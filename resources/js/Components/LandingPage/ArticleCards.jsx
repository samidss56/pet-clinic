import { Link } from "@inertiajs/react";
import { AuthorIcon, ClockIcon } from "../Icons/Index";

const ArticleCards = ({ key, image, title, content, id }) => {
    const truncateContent = (content) => {
        const words = content.split(" ");
        return words.length > 15
            ? words.slice(0, 15).join(" ") + "..."
            : content;
    };
    return (
        <>
            <div
                key={key}
                className="card card-compact w-full bg-white shadow-md"
            >
                <figure>
                    <img src={image} alt={title} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <AuthorIcon />
                            <p className="text-gray-600">by Admin</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <ClockIcon />
                            <p className="text-gray-600">7 Hours Ago</p>
                        </div>
                    </div>
                    <h2 className="card-title text-gray-800">{title}</h2>
                    <p className="text-gray-600">
                        {truncateContent(content)}
                        <Link
                             href={route("articles.show", { article: id })}
                            className="text-primary-red"
                        >
                            Read More
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArticleCards;

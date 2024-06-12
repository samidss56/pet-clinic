const isArticles = (articles) => {
    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <div className="overflow-x-auto">
            <table className="table bg-white dark:bg-dark-gray border-dark-gray rounded-md">
                <thead>
                    <tr>
                        <th className="text-black dark:text-white text-sm">
                            Article ID
                        </th>
                        <th className="text-black dark:text-white text-sm">
                            Author Name
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
                                    {article.author_name}
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

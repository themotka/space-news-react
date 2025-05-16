import { useArticles } from "../hooks/useArticles";
import ArticleItem from "./ArticleItem";
import Loader from "./Loader";

export default function ArticleList() {
  const { articles, loading } = useArticles();

  if (loading) return <Loader />;

  return (
    <ul className="article-list">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}

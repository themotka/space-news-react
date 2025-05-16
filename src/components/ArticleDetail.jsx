import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <Link to="/" className="back-link">← Back to list</Link>
      <h2>{article.title}</h2>
      <img src={article.image_url} alt={article.title} className="article-img" />
      <p>{article.summary}</p>
    </div>
  );
}

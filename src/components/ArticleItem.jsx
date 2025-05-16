import { Link } from "react-router-dom";

export default function ArticleItem({ article }) {
  return (
    <li className="article-item">
      <Link to={`/article/${article.id}`} className="article-link">
        {article.title}
      </Link>
      <span className="article-date">
        {new Date(article.published_at).toLocaleDateString()}
      </span>
    </li>
  );
}

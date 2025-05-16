import { createContext, useState, useEffect } from "react";

export const ArticleContext = createContext();

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, loading }}>
      {children}
    </ArticleContext.Provider>
  );
}

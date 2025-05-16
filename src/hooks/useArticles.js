import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export function useArticles() {
  return useContext(ArticleContext);
}

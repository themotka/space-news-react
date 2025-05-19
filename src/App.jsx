import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import { ArticleProvider } from "./context/ArticleContext";
import "./styles.css";

export default function App() {
  return (
      <ArticleProvider>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
          </div>
        </Router>
      </ArticleProvider>
  );
}

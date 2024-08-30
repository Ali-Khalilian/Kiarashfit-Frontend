import { createContext, useState } from "react";

const ArticleContext = createContext([]);

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

  return (
    <ArticleContext.Provider  value={{ articles,setArticles}}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
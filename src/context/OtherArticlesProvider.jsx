import { createContext, useState } from "react";

const OtherArticlesContext = createContext([]);

export const OtherArticlesProvider = ({ children }) => {
    const [otherArticles, setOtherArticles] = useState([]);

  return (
    <OtherArticlesContext.Provider  value={{ otherArticles,setOtherArticles}}>
      {children}
    </OtherArticlesContext.Provider>
  );
};

export default OtherArticlesContext;
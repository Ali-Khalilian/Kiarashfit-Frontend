import {useContext} from "react";
import ArticleContext from "../context/ArticleProvider";

const useArticle =()=>{
    return useContext(ArticleContext);
};

export default useArticle;
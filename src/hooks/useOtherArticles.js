import {useContext} from "react";
import OtherArticlesContext from "../context/OtherArticlesProvider";

const useOtherArticles =()=>{
    return useContext(OtherArticlesContext);
};

export default useOtherArticles;
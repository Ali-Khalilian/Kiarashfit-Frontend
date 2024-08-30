import React, { Fragment, useEffect } from "react";
import Article from "../article/Article";
import useArticle from "../../hooks/useArticle";
import NoData from "../noData/NoData";
import axios from "../../api/axios";


const ArticleSection = () => {

 const {articles , setArticles} = useArticle();
  useEffect(() => {
    axios
      .get("/articles/getAll")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <Fragment>
      {articles.length ? (
        articles.map((article) => (
          <div key={Math.random()} className="col col-md-6 col-lg-3 mb-5">
            <Article
              imageUrl={article.image}
              title={article.title}
              id={article._id}
            />
          </div>
        ))
      ) : (
        <NoData />
      )}
    </Fragment>
  );
};

export default ArticleSection;

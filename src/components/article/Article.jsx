import React from "react";
import { Link } from "react-router-dom";
import useOtherArticles from "../../hooks/useOtherArticles";

const Article = ({ imageUrl, title, id }) => {
  const { otherArticles, setOtherArticles } = useOtherArticles();

  return (
    <div dir="rtl" className="d-flex justify-content-center ">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl} alt="عکس مقاله" />

        <div className="card-body">
          <h5 className="card-title text-center truncate">{title}</h5>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center card-footer">
          <Link
            to={`/articles/more/${id}`}
            onClick={() => {
              window.scrollTo(0, 0);
              setOtherArticles(otherArticles);
            }}
            className="btn btn-success"
          >
            مطالعه بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;

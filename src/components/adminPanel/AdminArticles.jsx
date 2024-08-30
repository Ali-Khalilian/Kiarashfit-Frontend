import React from "react";
import { BiEdit, BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import NoData from "../noData/NoData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const AdminArticle = ({ articles  ,setArticles}) => {
  const axiosPrivate = useAxiosPrivate();

  const deleteArticle = (articleId) => {
    axiosPrivate
      .delete(`/articles/delete`, {
        data: {
          id: articleId,
        },
      })
      .then((res) => {
        res.status === 200
          ? setArticles(res.data.updatedArticles)
          : res.status === 204
          ? setArticles([])
          : console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wh100 container">
      <Link className="btn btn-success mb-5" to="/articles/add">افزودن</Link>
      <div dir="rtl"  className="w-75">
        {articles.length ? (
          articles.map((article , index) => (
            <div key={Math.random()} className=" mb-5 bg-light text-dark">
              <div className="fs-4 text-justify p-3">{index + 1}. {article.title}</div>
              <hr />
              <div className="fs-5 text-justify p-3">{article.introduction}</div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
              <Link onClick={() => deleteArticle(article._id)}>
                <BiSolidTrashAlt className="text-danger fs-2" />
              </Link>
              <Link to={`/articles/add/${article._id}`}>
                <BiEdit className="text-warning fs-2" />
              </Link>
              </div>
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AdminArticle;

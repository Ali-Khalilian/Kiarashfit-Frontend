import React, { useEffect, useState } from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import ArticleSlider from "../articleSlider/ArticleSlider";
import useOtherArticles from "../../hooks/useOtherArticles";


const ReadMore = () => {
  const { articleId } = useParams();
  const [mainArticle, setMainArticle] = useState(null);

  
  const { otherArticles, setOtherArticles  } = useOtherArticles();


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const [otherRes, mainRes] = await Promise.all([
          axios.get("/articles/other", {
            params: {
              id: articleId,
            },
          }),
          axios.get("/articles/getOne", {
            params: {
              id: articleId,
            },
          }),
        ]);

        setOtherArticles(otherRes.data);
        setMainArticle(mainRes.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchArticles();
  }, [articleId , otherArticles]);

  if (!mainArticle) {
    return <div className="text-center wh100">Loading...</div>;
  }

  return (
    <section className="wh100 mt-5">
      <div className="container">
        <div>
          <article className="p-0">
            <div className="w-100 title-background d-flex align-items-center flex-column flex-md-row">
              <img
                className="post-image img-fluid"
                src={mainArticle.image}
                alt="عکس مقاله"
              />
              <div>
                <div className="d-flex flex-column m-3 justify-content-start align-items-start">
                  <span className="fs-2 fw-bold text-justify post-title-text">
                    {mainArticle.title}
                  </span>

                  <span className="mt-3 fs-4">
                    <IoCalendarSharp className="calender"/>
                    {mainArticle.createAt}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-2 mt-5">
              <p className="post-text-line-hight text-justify">
                {mainArticle.introduction}
              </p>
              <hr className="my-5" />
              <p className="text-justify post-text-line-hight">
                {mainArticle.description}
              </p>
            </div>
          </article>
          <ArticleSlider other="other" text={"مقالات دیگر"}/>


        </div>
      </div>
    </section>
  );
};

export default ReadMore;

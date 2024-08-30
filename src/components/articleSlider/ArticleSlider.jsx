import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Article from "../article/Article";
import axios from "../../api/axios";
import useArticle from "../../hooks/useArticle";
import useOtherArticles from "../../hooks/useOtherArticles";
import Separator from "../separator/Separator";

const ArticleSlider = ({ other , text }) => {
  const { articles } = useArticle();
  const [needed, setNeededArticles] = useState([]);

  const { otherArticles } = useOtherArticles();

  useEffect(() => {
    if (other) {
      setNeededArticles(otherArticles);
    } else {
      axios
        .get("/articles/latest")
        .then((res) => {
          setNeededArticles(res.data);
        })
        .catch((err) => console.log(err.response));
    }
  }, [articles, otherArticles]);

  var settings = {
    arrows: false,
    rtl: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {needed.length >= 3 ? (
        <section className="w-100 h-100 container mb-5">
          <Separator text={text}/>
          <div>
            <Slider {...settings}>
              {needed.map((article) => (
                <div key={Math.random()} className="col col-md-6 col-lg-3 mb-5">
                  <Article
                    imageUrl={article.image}
                    title={article.title}
                    id={article._id}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ArticleSlider;

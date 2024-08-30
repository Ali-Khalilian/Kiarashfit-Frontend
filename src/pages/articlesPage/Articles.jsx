import React from "react";
import ArticleSection from "../../components/articleSection/ArticleSection";
import Separator from "../../components/separator/Separator";

const Articles = () => {

  return (
    <section className="w-100 h-100 container">
      <Separator text="مقالات" initiallyVisible={true}/>
      <div className="row mx-auto">
        <ArticleSection />
      </div>
    </section>
  );
};

export default Articles;

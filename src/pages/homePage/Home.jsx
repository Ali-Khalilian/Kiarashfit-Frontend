import React from "react";
import Header from "../../components/header/Header";
import ImportanceSection from "../../components/importanceSection/ImportanceSection";
import InstagramContact from "../../components/instagramContact/InstagramContact";
import Intro from "../../components/intro/Intro";
import Separator from "../../components/separator/Separator";
import SportPlansSection from "../../components/sportPlansSection/SportPlansSection.jsx";
import ArticleSlider from "../../components/articleSlider/ArticleSlider";
import TeamSection from "../../components/teamSection/TeamSection";

const Home = () => {
  return (
    <div>
      
      <Header />

      <Intro />

      


      <Separator text="اهمیت های ورزشی" />

      <ImportanceSection />

      <Separator text="برنامه ها" />

      <SportPlansSection />

      <Separator text="تیم کیارش" />

      <TeamSection />

      <Separator text="صفحه اینستاگرام " />

      <InstagramContact />
      
      <ArticleSlider text={"اخرین مقالات"}/>

    </div>
  );
};

export default Home;

import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";


const Intro = () => {
  const videoSrc = process.env.PUBLIC_URL + "/videoes/kiarash.MP4";
  return (
    <section className="mt-5">
      <div className="container">
        <div className="d-flex flex-wrap flex-md-nowrap  justify-content-center">
          <div>
          <video className="card-img" controls>
        <source src={videoSrc} type="video/mp4" />
        </video>
            
          </div>
          <div className="mx-5 my-3"></div>
          <div>
            <AnimationOnScroll
              animateIn="animate__animated animate__fadeInRight"
              animateOnce={true}
            >
              <div className="text-center">
                <p className="fs-5 mt-3 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

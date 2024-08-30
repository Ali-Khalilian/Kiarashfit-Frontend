import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Team = (props) => {
  const imagePath = process.env.PUBLIC_URL + `/images/${props.name}`;
  return (
    <div className="col-sm-6 g-2">
      <AnimationOnScroll
        animateIn={`animate__animated ${props.animation}`}
        delay={props.delay}
        animateOnce={true}
      >
        <div>
          <img className="img-fluid rounded-3" src={imagePath} alt="تیم" />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Team;

import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Separator = (props) => {
  return (
    <div className="d-flex justify-content-center my-5 text-center">
      <AnimationOnScroll
        animateIn="animate__animated animate__bounceIn"
        animateOnce={true}
        initiallyVisible={
          props.initiallyVisible ? props.initiallyVisible : false
        }
      >
        <h1 className="separator">{props.text}</h1>
      </AnimationOnScroll>
    </div>
  );
};

export default Separator;

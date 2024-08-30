import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ImportanceCard = (props) => {
  return (
    <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
      <AnimationOnScroll animateIn="animate__animated animate__bounceInDown" animateOnce={true}>
        <div className="card bg-dark text-light pointer card-shadow cardHover">
          <div className="card-body" style={{ minHeight: "16.8rem" }}>
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{props.title}</h5>
              {props.title === "برنامه تمرینی" ? (
                <CiDumbbell fontSize="40px" />
              ) : props.title === "اهمیت تغذیه" ? (
                <PiBowlFoodDuotone fontSize="40px" />
              ) : (
                <SlEnergy fontSize="40px" />
              )}
            </div>
            <hr className="w-50" />
            <p className="card-text mt-4">{props.text}</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default ImportanceCard;

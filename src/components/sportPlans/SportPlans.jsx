import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FcApproval } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const SportPlans = (props) => {
  return (
    <div className="col-10 mx-auto my-3 col-md-6 col-lg-3">
      <AnimationOnScroll
        animateIn={`animate__animated ${props.animation}`}
        animateOnce={true}
        delay={props.delay}
      >
        <div className="card bg-dark text-light pointer card-shadow cardHover">
          <div className="card-header text-center">{props.header}</div>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center">
              <div>
                {props.icon === "تمرینی" ? (
                  <CiDumbbell fontSize="40px" />
                ) : props.icon === "غذایی" ? (
                  <PiBowlFoodDuotone fontSize="40px" />
                ) : props.icon === "ویژه" ? (
                  <>
                    <CiDumbbell fontSize="40px" />
                    <PiBowlFoodDuotone fontSize="40px" />
                  </>
                ) : (
                  <AiTwotoneStar fontSize="40px" />
                )}
              </div>

              <h5 className="card-title my-4">{props.duration}</h5>
              <h5 className="card-title">{props.price}</h5>
            </div>

            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item bg-dark text-light">
                <FcApproval />
                تنظیم برنامه اختصاصی
              </li>
              <li className="list-group-item bg-dark text-light">
                <FcApproval />
                پشتیبانی کامل در طول دوره
              </li>
              <li className="list-group-item bg-dark text-light">
                <FcApproval />
                ارتباط مستقیم با مربی
              </li>
              <li className="list-group-item bg-dark text-light">
                <FcApproval />
                دریافت برنامه 7 روز پس از ثبت نام
              </li>
            </ul>

            <div className="text-center mt-4">
              <Link
                to="/getPlan"
                state={{ title: props.header, price: props.price }}
                className="btn btn-success"
              >
                دریافت برنامه
              </Link>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default SportPlans;

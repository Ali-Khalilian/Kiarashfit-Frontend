import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

const InstagramContact = () => {
  return (
    <section id="instagram" className="w-100 h-100 my-5 instagramSection p-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex ">
            <div>
              <div className="instaimgborder">
                <div className="instaimg"></div>
              </div>
            </div>
            <div className="instagramInfo text-light my-auto mx-3">
              <p className="d-flex">
                <span>kiarashfit</span>
                <BsInstagram fontSize="20px" className="text-danger mx-2" />
              </p>
              <p>کیارش جمالی | kiarash jamali</p>
              <p>Athlete</p>
              <p>طراحی و آموزش تمرینات ورزشی</p>
              <Link
                to={"https://www.instagram.com/kiarashfit/"}
                className="btn text-center text-light bg-danger instabtn"
              >
                اینستاگرام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramContact;

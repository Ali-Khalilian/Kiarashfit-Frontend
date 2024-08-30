import React from "react";
import CollapseCard from "./CollapseCard";

const PlanAside = ({title, price}) => {
  
  return (
    <aside className="col-12 col-lg-4 d-flex flex-column align-items-center mb-5 planAside">
      <div className="asideBg p-5 d-flex flex-column">
        <div className="planInfo justify-content-center align-items-center">
          <h4 className="fw-bolder mb-5 text-success">{title}</h4>
          <h4 className="fw-bolder text-success">{price}</h4>
        </div>
        <div className="mt-5">
          <h3 className="mb-4 fw-bolder text-center">سوالات پر تکرار :</h3>

          <div className="accordion d-flex flex-column justify-content-center align-items-center" id="accordionExample">
            <CollapseCard
              title="مدت زمان برنامه چه قدر است ؟"
              text="Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the
                        className."
              id="headingOne"
              target="collapseOne"
            />
            <CollapseCard
              title="اختصاصی بودن برنامه ؟"
              text="Some placeholder content for the second accordion panel.
                        This panel is hidden by default."
              id="headingTwo"
              target="collapseTwo"
            />
            <CollapseCard
              title="پشتیبانی دوره به چه صورت است ؟"
              text="And lastly, the placeholder content for the third and
                        final accordion panel. This panel is hidden by default."
              id="headingThree"
              target="collapseThree"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PlanAside;

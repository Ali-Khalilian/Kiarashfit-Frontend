import React from "react";
import SportPlans from "../sportPlans/SportPlans";

const SportPlansSection = () => {
  return (
    <section id="plans">
      <div className="container">
        <div className="row">
          <SportPlans
            header="برنامه تمرینی"
            icon="تمرینی"
            duration="یک ماه"
            price="800.000 تومان"
            animation="animate__slideInUp"
            delay={100}
          />

          <SportPlans
            header="برنامه غذایی"
            icon="غذایی"
            duration="یک ماه"
            price="200.000 تومان"
            animation="animate__slideInUp"
            delay={200}
          />

          <SportPlans
            header="برنامه تمرینی + غذایی"
            icon="ویژه"
            duration="یک ماه"
            price="900.000 تومان"
            animation="animate__slideInUp"
            delay={300}
          />
          <SportPlans
            header="برنامه خصوصی"
            icon="خصوصی"
            duration="یک ماه"
            price="2.000.000 تومان"
            animation="animate__slideInUp"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SportPlansSection;

import React from "react";
import ChangeBodySection from "../../components/changeBodySection/ChangeBodySection";
import Separator from "../../components/separator/Separator";

const BodyChanges = () => {
  return (
    <section className="w-100 h-100 container">
      <Separator text="تغییرات بدنی" initiallyVisible={true} />
      <div className="row mx-auto">
        <ChangeBodySection />
      </div>
    </section>
  );
};

export default BodyChanges;

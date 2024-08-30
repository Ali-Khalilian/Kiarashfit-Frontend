import React from "react";
import Separator from "../separator/Separator";
import PlanAside from "./PlanAside";
import GetPlanForm from "./GetPlanForm";
import { useLocation } from "react-router-dom";


const GetPlan = () => {
  const location = useLocation();
  
  return (
    <section className="w-100 h-100">
      <Separator text="دریافت برنامه" initiallyVisible={true} />
      <div className="container">
        <div className="row">
          <PlanAside title={location.state.title} price={location.state.price}/>
          <GetPlanForm />
        
        </div>

      </div>
    </section>
  );
};

export default GetPlan;

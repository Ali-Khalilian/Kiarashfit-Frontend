import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PlanList = ({profile}) => {

  const [plan, setPlan] = useState([]);

  useEffect(() => {
    if (profile && profile.plan) {
      setPlan(profile.plan);
    }
  }, [profile]);
  
  

  return (
    <div className="col-12 col-lg-7 mb-5">
      <ul className="list-group shadow mt-5">
      {
        plan.length > 0 ? (
            
              plan.map((url, index) => (
                <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center mt-3"
              >
                <span>{`برنامه ${index + 1}`}</span>
                <Link
                  to={url}
                  target="_blank"
                  download={true}
                  className="btn btn-success"
                >
                  دانلود برنامه
                </Link>
              </li>
             ))
             
        ):(
          <div>no plan</div>
        )
      }
       
      </ul>
    </div>
  );
};

export default PlanList;

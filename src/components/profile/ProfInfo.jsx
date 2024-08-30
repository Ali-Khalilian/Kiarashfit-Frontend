import React from "react";

const ProfInfo = ({ label, value , id}) => {
  return (
    <div className="my-3">
      <label className="profInfo" htmlFor={id}>{label} :</label>
      <span className="profInfo mx-3" id={id}>{value}</span>
    </div>
  );
};

export default ProfInfo;

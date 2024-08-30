import React from "react";

const Info = ({ icon, text }) => {
  return (
    <div className="d-flex justify-content-between align-items-center rounded-3 bg-dark text-light p-4 mt-3 pointer animate__animated animate__zoomIn">
      <div>{text}</div>
      <div className="rounded-circle p-2 bg-light text-dark">{icon}</div>
    </div>
  );
};

export default Info;

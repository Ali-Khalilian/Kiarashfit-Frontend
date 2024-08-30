import React from "react";

const CollapseCard = ({ title, text, id, target }) => {
  return (
    <div className="card questions text-dark">
      <div className="card-header" id={id}>
        <h2 className="mb-0">
          <button
            className="btn text-dark btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target={"#" + target}
            aria-expanded="true"
            aria-controls={target}
          >
            {title}
          </button>
        </h2>
      </div>

      <div
        id={target}
        className="collapse"
        aria-labelledby={id}
        data-parent="#accordionExample"
      >
        <div className="card-body">{text}</div>
      </div>
    </div>
  );
};

export default CollapseCard;

import React, { Fragment, useEffect } from "react";
import axios from "../../api/axios";
import useBody from "../../hooks/useBody";
import ChangesCard from "../changesCard/ChangesCard";
import NoData from "../noData/NoData";

const ChangeBodySection = () => {
  const { bodies, setBodies } = useBody();
  useEffect(() => {
    axios
      .get("/bodyChanges/getAll")
      .then((res) => {
        setBodies(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <Fragment>
      {bodies.length ? (
        bodies.map((body) => (
          <div key={Math.random()} className="col-12 col-md-6 col-lg-3 mb-5">
            <ChangesCard
              imageUrl={body.image}
              title={body.title}
              description={body.description}
              id={body._id}
            />
          </div>
        ))
      ) : (
        <NoData />
      )}
    </Fragment>
  );
};

export default ChangeBodySection;

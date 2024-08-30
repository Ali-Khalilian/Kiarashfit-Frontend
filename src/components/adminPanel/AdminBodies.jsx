import React from "react";
import { BiEdit, BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import NoData from "../noData/NoData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AdminBodies = ({ bodies, setBodies }) => {
  const axiosPrivate = useAxiosPrivate()
  const deleteBody = (id) => {
    axiosPrivate
      .delete(`/bodyChanges/delete`, {
        data: {
          id: id,
        },
      })
      .then((res) => {
        res.status === 200
          ? setBodies(res.data.updatedBodies)
          : res.status === 204
          ? setBodies([])
          : console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="wh100 container">
      <Link className="btn btn-success mb-5" to="/bodyChanges/add">
        افزودن
      </Link>

      <div dir="rtl" className="w-75 row">
        {bodies.length ? (
          bodies.map((body, index) => (
            <div
              key={Math.random()}
              className=" mb-5 bg-light text-dark col-12 col-md-4"
              style={{ width: "22rem", marginRight:"20px" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={body.image}
                      className="card-img img-fluid"
                      alt="عکس تغییرات بدنی"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <h5 className="card-title text-justify truncate">
                    {index + 1}. {body.title}
                  </h5>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <Link onClick={() => deleteBody(body._id)}>
                  <BiSolidTrashAlt className="text-danger fs-2" />
                </Link>
                <Link to={`/bodyChanges/add/${body._id}`}>
                  <BiEdit className="text-warning fs-2" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AdminBodies;

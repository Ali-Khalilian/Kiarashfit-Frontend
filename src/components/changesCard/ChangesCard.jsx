import React, { useState } from "react";
import { BiEdit, BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import useBody from "../../hooks/useBody";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const ChangesCard = ({ imageUrl, title, id }) => {
  const axiosPrivate = useAxiosPrivate();

  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const { setBodies } = useBody();
  const deleteBody = (id) => {
    axiosPrivate
      .delete("/bodyChanges/delete", {
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
    <div dir="rtl" className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top pointer" src={imageUrl} alt="تغییرات بدنی" onClick={handleImageClick} />
        {showImage && (
          <div className="image-modal">
            <img src={imageUrl} alt="تغییرات بدنی" />
            <button className="btn btn-danger" onClick={handleCloseImage}>
              بستن
            </button>
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title text-center truncate">{title}</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center card-footer">
          <Link to={`/bodyChanges/add/${id}`}>
            <BiEdit className="text-warning fs-2" />
          </Link>
          <Link onClick={() => deleteBody(id)}>
            <BiSolidTrashAlt className="text-danger fs-2" />
          </Link>
        </div>
      </div>
      {showImage && (
        <div className="image-modal-overlay" onClick={handleCloseImage}></div>
      )}
    </div>
  );
};

export default ChangesCard;

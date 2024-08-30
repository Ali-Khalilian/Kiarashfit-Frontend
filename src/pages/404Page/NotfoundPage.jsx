import React from "react";

const NotfoundPage = () => {
  return (
    <div className="statusContainer bg-dark text-light">
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="fs-1 text-success">
          404
        </div>
        <div className="fs-1 mt-3  text-success">
          صفحه مورد نظر یافت نشد !
        </div>
      </div>
    </div>
  );
};

export default NotfoundPage;

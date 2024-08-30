import React from "react";
import "animate.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row height-max align-items-center justify-content-between">
          <div className="col-md-3 text-light">
            <h2 className="title animate__animated animate__backInRight text-center mt-5 mt-md-0">
              کیارش جمالی
            </h2>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div className="profileimg"></div>
          </div>
          <div className="col-md-4">
            <h2 className="text-light text-center animate__animated animate__flash animate__slower animate__repeat-2">با کیارش بدنی <span className="text-success fw-bold">فوق العاده</span> بساز</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
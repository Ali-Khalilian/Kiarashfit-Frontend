import React from "react";
import ProfInfo from "./ProfInfo";
import NoData from "../noData/NoData";


const ProfAside = ({profile}) => {

  return (
    <aside className="col-12 col-lg-4 d-flex flex-column align-items-center planAside shadow">
      <div className="p-5 d-flex flex-column profAside w-100 h-100">
        <h2 className="text-center fw-bolder">مشخصات من</h2>
        <hr />
        {profile ? (
          <>
            <ProfInfo
              label="نام"
              value={profile.firstname}
              id="ProfName"
            />
            <ProfInfo
              label="نام خانوادگی"
              value={profile.lastname}
              id="ProfLastName"
            />
            <ProfInfo
              label="شماره"
              value={profile.mobile}
              id="ProfNumber"
            />
            <ProfInfo
              label="ایمیل"
              value={profile.email}
              id="ProfEmail"
            />
          </>
        ) : (
          <NoData />
        )}
      </div>
    </aside>
  );
};

export default ProfAside;

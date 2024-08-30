import React, { useEffect, useState } from "react";
import Separator from "../separator/Separator";
import PlanList from "./PlanList";
import ProfAside from "./ProfAside";
import useAuth from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Prof = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const decodeToken = async () => {
      try {
        const token = auth?.accessToken;
        if (token) {
          const accessToken = jwtDecode(token);
          const user = await axiosPrivate.get(
            "/users/getuser",
            {
              params: { id: accessToken.userId },
            }
          );

          setProfile(user.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    decodeToken();
  }, [auth, axiosPrivate]);
  return (
    <section className="wh100">
      <Separator text="برنامه های من" initiallyVisible={true} />
      <div className="container">
        <div className="row">
            <ProfAside profile={profile}/>
            <PlanList profile={profile}/>
        </div>
      </div>
    </section>
  );
};

export default Prof;

import React from "react";
import Team from "../team/Team";

const TeamSection = () => {
  return (
    <section id="team" className="w-100 h-100 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-between">
            <div className="row">
              <Team name="/Gym-background.jpg" animation="animate__bounceInDown" delay={100}/>
              <Team name="/Gym-background.jpg" animation="animate__bounceInDown" delay={200}/>
            </div>
            <div className="row">
              <Team name="/Gym-background.jpg" animation="animate__fadeIn" delay={100}/>
              <Team name="/Gym-background.jpg" animation="animate__fadeIn" delay={200}/>
            </div>
          </div>
          <Team name="/11.avif" animation="animate__fadeIn" delay={300}/>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
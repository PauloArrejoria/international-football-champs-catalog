import React from "react";
import Bar from "./Bar";
import TeamsCarousel from "./TeamsCarousel";
import "../style/Stats.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Stats() {
  return (
    <div className="stats py-2 container-fluid">
      <TeamsCarousel />
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Attack</span>
        <span className="col-2 bg-yellow fw-bold text-warning">90</span>
        <Bar width={90}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Defense</span>
        <span className="col-2 bg-yellow fw-bold ovr80-89">83</span>
        <Bar width={83}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Midfield</span>
        <span className="col-2 bg-yellow fw-bold ovr80-89">84</span>
        <Bar width={84}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Speed</span>
        <span className="col-2 bg-yellow fw-bold text-success">79</span>
        <Bar width={79}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Teamwork</span>
        <span className="col-2 bg-yellow fw-bold text-success">76</span>
        <Bar width={76}></Bar>
      </div>
      <div className="ovr-container">
        <span className="text-white fw-bold ovr-font">
          Overall: <span className="ovr80-89">85</span>
        </span>
      </div>
    </div>
  );
}

export default Stats;

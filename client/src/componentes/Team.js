import React from "react";
import "../style/Stats.css";
import "../style/Team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Team({ emblem, name, active }) {
  return (
    <div className={`carousel-item ${active}`}>
      <div className="item-container">
        <img
          src={`https://flagcdn.com/${emblem}.svg`}
          className="d-block emblem"
          alt="ar"
        />
        <span className="fw-bold text-white d-flex align-items-center justify-content-center">
          {name}
        </span>
      </div>
    </div>
  );
}

export default Team;

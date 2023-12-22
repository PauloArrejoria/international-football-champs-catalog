import React from "react";
import "../style/Stats.css";
import "../style/Team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Team({ emblem, name, active }) {
  const emblemSource = () => {
    const emblemLenght = emblem.length;
    let emblemSource;

    if (emblemLenght > 10) {
      emblemSource =
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Italy_%281861%E2%80%931946%29.svg";
    } else {
      emblemSource = `https://flagcdn.com/${emblem}.svg`;
    }
    return emblemSource;
  };
  emblemSource();
  return (
    <div className={`carousel-item ${active}`}>
      <div className="item-container">
        <img src={emblemSource()} className="d-block emblem" alt={name} />
        <span className="fw-bold text-white d-flex align-items-center justify-content-center">
          {name}
        </span>
      </div>
    </div>
  );
}

export default Team;

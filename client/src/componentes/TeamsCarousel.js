import React from "react";
import Team from "./Team";
import "../style/Stats.css";
import "../style/TeamsCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function TeamsCarousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <Team emblem={"ar"} name={"Argentina 2022"} active={"active"} />
        <Team emblem={"br"} name={"Brasil"} />
        <Team emblem={"uy"} name={"Uruguay"} />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TeamsCarousel;

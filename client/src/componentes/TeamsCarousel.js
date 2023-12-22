import React from "react";
import Team from "./Team";
import "../style/Stats.css";
import "../style/TeamsCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function TeamsCarousel({ teamsList }) {
  return (
    <div className="carousel-inner">
      {teamsList.map((val, key) => {
        return val === teamsList[0] ? (
          <Team
            key={val.id}
            emblem={val.emblem}
            name={val.name}
            active={"active"}
          />
        ) : (
          <Team emblem={val.emblem} name={val.name} />
        );
      })}
    </div>
  );
}

export default TeamsCarousel;

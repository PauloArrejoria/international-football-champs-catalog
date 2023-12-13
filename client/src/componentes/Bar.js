import React from "react";
import "../style/Bar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bar({ width }) {
  const widthBar = {
    width: `${width + 1}` + "%",
  };

  const barColor = () => {
    let color;
    if (width < 75) {
      color = "bg-secondary";
      return color;
    } else if (width >= 75 && width <= 79) {
      color = "bg-success";
      return color;
    } else if (width >= 80 && width <= 89) {
      color = "bar80-89";
      return color;
    } else if (width >= 90 && width <= 94) {
      color = "bg-warning";
      return color;
    } else if (width >= 95) {
      color = "bg-danger";
      return color;
    }
  };
  return (
    <div className="col-7">
      <div className="progress">
        <div
          className={`progress-bar ${barColor()}`}
          role="progressbar"
          style={widthBar}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Bar;

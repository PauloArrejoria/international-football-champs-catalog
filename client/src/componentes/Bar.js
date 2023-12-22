import React from "react";
import "../style/Bar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bar({ stat, squad }) {
  const calcDF = () => {
    const filteredTeam = squad.filter((player) =>
      ["GK", "SW", "CB", "RB", "LB"].includes(player.pos)
    );
    const averageOvr =
      filteredTeam.length > 0
        ? filteredTeam.reduce((sum, player) => sum + player.ovr, 0) /
          filteredTeam.length
        : 0;
    return Math.round(averageOvr);
  };

  const calcMF = () => {
    const filteredTeam = squad.filter((player) =>
      ["DM", "CM", "RWB", "LWB", "RM", "LM", "AM"].includes(player.pos)
    );
    const averageOvr =
      filteredTeam.length > 0
        ? filteredTeam.reduce((sum, player) => sum + player.ovr, 0) /
          filteredTeam.length
        : 0;
    return Math.round(averageOvr);
  };

  const calcAtk = () => {
    const filteredTeam = squad.filter((player) =>
      ["WF", "RW", "LW", "SS", "CF"].includes(player.pos)
    );
    const averageOvr =
      filteredTeam.length > 0
        ? filteredTeam.reduce((sum, player) => sum + player.ovr, 0) /
          filteredTeam.length
        : 0;
    return Math.round(averageOvr);
  };

  const calcSpd = () => {
    const averageOvr =
      squad.reduce((sum, player) => sum + player.speed, 0) / squad.length;
    return Math.round(averageOvr);
  };

  const calcTwk = () => {
    const averageOvr =
      squad.reduce((sum, player) => sum + player.teamwork, 0) / squad.length;
    return Math.round(averageOvr);
  };

  const value = () => {
    let value;
    switch (stat) {
      case "Attack":
        value = calcAtk();
        break;
      case "Midfield":
        value = calcMF();
        break;
      case "Defense":
        value = calcDF();
        break;
      case "Speed":
        value = calcSpd();
        break;
      case "Teamwork":
        value = calcTwk();
        break;
      default:
        value = 0;
        break;
    }
    return value;
  };

  const widthBar = {
    width: `${value()}%`,
  };

  const barColor = () => {
    let color;
    if (value() < 75) {
      color = "bg-secondary";
    } else if (value() >= 75 && value() <= 79) {
      color = "bg-success";
    } else if (value() >= 80 && value() <= 89) {
      color = "bar80-89";
    } else if (value() >= 90 && value() <= 94) {
      color = "bg-warning";
    } else if (value() >= 95) {
      color = "bg-danger";
    }
    return color;
  };

  const textColor = () => {
    let color;
    if (value() < 75) {
      color = "text-secondary";
    } else if (value() >= 75 && value() <= 79) {
      color = "text-success";
    } else if (value() >= 80 && value() <= 89) {
      color = "text80-89";
    } else if (value() >= 90 && value() <= 94) {
      color = "text-warning";
    } else if (value() >= 95) {
      color = "text-danger";
    }
    return color;
  };

  return (
    <div className="row d-flex align-items-center">
      <span className="col-3 text-white bg-green fw-bold">{stat}</span>
      <span className={`col-2 fw-bold ${textColor()}`}>{value()}</span>
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
    </div>
  );
}

export default Bar;

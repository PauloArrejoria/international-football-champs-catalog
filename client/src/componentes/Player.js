import React from "react";
import "../style/Player.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Player({ number, pos, name, nat, ovr }) {
  const posColor = () => {
    let posColor;
    if (pos === "GK") {
      posColor = "bg-warning border border-warning rounded";
      return posColor;
    } else if (pos === "CB" || pos === "SW" || pos === "RB" || pos === "LB") {
      posColor = "bg-primary border border-primary rounded";
      return posColor;
    } else if (
      pos === "DMF" ||
      pos === "CMF" ||
      pos === "LWB" ||
      pos === "RWB" ||
      pos === "RMF" ||
      pos === "LMF" ||
      pos === "AMF"
    ) {
      posColor = "bg-success border border-success rounded";
      return posColor;
    } else if (pos === "RW" || pos === "LW" || pos === "SS" || pos === "CF") {
      posColor = "bg-danger border border-danger rounded";
      return posColor;
    }
  };
  const ovrColor = () => {
    let ovrColor;
    if (ovr >= 75 && ovr <= 79) {
      ovrColor = "text-success";
      return ovrColor;
    } else if (ovr >= 80 && ovr <= 89) {
      ovrColor = "ovr80-89";
      return ovrColor;
    } else if (ovr >= 90 && ovr <= 94) {
      ovrColor = "text-warning";
      return ovrColor;
    } else if (ovr >= 95) {
      ovrColor = "text-danger";
      return ovrColor;
    }
  };
  return (
    <tr className="player">
      <th scope="row">{number}</th>
      <td>
        <span className={`pos fw-bold bg-opacity-50 ${posColor()}`}>{pos}</span>
      </td>
      <td>{name}</td>
      <td>
        <img src={`https://flagcdn.com/${nat}.svg`} width="30" alt={`${nat}`} />
      </td>
      <td>
        <span className={`pos fw-bold bg-opacity-50 ${ovrColor()}`}>{ovr}</span>
      </td>
    </tr>
  );
}

export default Player;

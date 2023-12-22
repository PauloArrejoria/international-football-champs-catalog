import React from "react";
import Bar from "./Bar";
import TeamsCarousel from "./TeamsCarousel";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../style/Stats.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Stats({ onUpdate }) {
  const [teamsList, setTeams] = useState([]);
  const [startingTeam, setStarting] = useState([]);
  const [reserveTeam, setReserve] = useState([]);
  const [teamListPos, setTeamListPos] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);

  const incTeamListPos = () => {
    return new Promise((resolve) => {
      setTeamListPos((prevPos) => {
        const newPos = prevPos === teamsList.length - 1 ? 0 : prevPos + 1;
        resolve(newPos);
        return newPos;
      });
    });
  };

  const decTeamListPos = () => {
    return new Promise((resolve) => {
      setTeamListPos((prevPos) => {
        const newPos = prevPos === 0 ? teamsList.length - 1 : prevPos - 1;
        resolve(newPos);
        return newPos;
      });
    });
  };

  const nexTeam = async () => {
    if (!bloqueado) {
      const newTeamListPos = await incTeamListPos();
      const teamId = teamsList[newTeamListPos].id;
      getStartingTeam(teamId);
      getReserveTeam(teamId);
      setBloqueado(true);
      setTimeout(() => {
        setBloqueado(false);
      }, 600);
    }
  };

  const prevTeam = async () => {
    if (!bloqueado) {
      const newTeamListPos = await decTeamListPos();
      const teamId = teamsList[newTeamListPos].id;
      getStartingTeam(teamId);
      getReserveTeam(teamId);
      setBloqueado(true);
      setTimeout(() => {
        setBloqueado(false);
      }, 600);
    }
  };

  const getTeams = () => {
    return Axios.get("http://localhost:3001/teams").then((response) => {
      setTeams(response.data);
      return response.data; // Devuelve los equipos para que puedan ser utilizados en la siguiente promesa
    });
  };

  const getStartingTeam = (teamId) => {
    return Axios.get(`http://localhost:3001/starting/${teamId}`).then(
      (response) => {
        setStarting(response.data);
      }
    );
  };

  const getReserveTeam = (teamId) => {
    return Axios.get(`http://localhost:3001/reserve/${teamId}`).then(
      (response) => {
        setReserve(response.data);
      }
    );
  };

  onUpdate(startingTeam, reserveTeam);

  const calcOvr = () => {
    const averageOvr =
      startingTeam.reduce((sum, player) => sum + player.ovr, 0) /
      startingTeam.length;
    return Math.round(averageOvr);
  };

  const textColor = () => {
    let color;
    if (calcOvr() < 75) {
      color = "text-secondary";
    } else if (calcOvr() >= 75 && calcOvr() <= 79) {
      color = "text-success";
    } else if (calcOvr() >= 80 && calcOvr() <= 89) {
      color = "ovr80-89";
    } else if (calcOvr() >= 90 && calcOvr() <= 94) {
      color = "text-warning";
    } else if (calcOvr() >= 95) {
      color = "text-danger";
    }
    return color;
  };

  useEffect(() => {
    getTeams().then((teams) => {
      if (teams && teams.length > 0) {
        const teamId = teams[teamListPos].id;
        getStartingTeam(teamId);
        getReserveTeam(teamId);
      }
    });
  }, [teamListPos]);
  return (
    <div className="stats py-2 container-fluid">
      <div id="carouselExample" className="carousel slide">
        <TeamsCarousel teamsList={teamsList} />
        <button
          onClick={prevTeam}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={nexTeam}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Bar stat={"Attack"} squad={startingTeam} />
      <Bar stat={"Midfield"} squad={startingTeam} />
      <Bar stat={"Defense"} squad={startingTeam} />
      <Bar stat={"Speed"} squad={startingTeam} />
      <Bar stat={"Teamwork"} squad={startingTeam} />
      <div className="ovr-container">
        <span className="text-white fw-bold ovr-font">
          Overall: <span className={textColor()}>{calcOvr()}</span>
        </span>
      </div>
    </div>
  );
}

export default Stats;
